"use client";

import { useEffect, useState } from "react";
import { dimensionScore, dimensions, layerScore, machineLayers, machineNote, machineScore, overallScore, priorities, scoreLabel, takeaways } from "@/lib/audit/score";
import { markAudit, readAudit, writeAudit } from "@/lib/audit/saved";
import type { AuditStep } from "@/lib/site-audit";
import { SitemapPick } from "@/components/sitemap-pick";

const chapters = dimensions;
const passage = [...dimensions, "Machine"] as const;
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function mark(state: AuditStep["state"]) {
  if (state === "fail") return "À corriger";
  if (state === "warn") return "À revoir";
  if (state === "running") return "En cours";
  return "Tenu";
}

const ringRadius = 52;
const ringLength = 2 * Math.PI * ringRadius;

function AuditGauge({ chapter, steps }: { chapter: (typeof passage)[number]; steps: AuditStep[] }) {
  const value = dimensionScore(steps, chapter);
  if (value === null) return null;
  const items = steps.filter((step) => step.dimension === chapter && step.state !== "running" && step.impact !== "aucun");
  const tone = value >= 90 ? "text-ink" : value >= 50 ? "text-ink" : "text-mute";
  return (
    <div className="audit-step mt-10 grid items-start gap-10 border-t border-line pt-10 lg:grid-cols-12">
      <div className="lg:col-span-4">
        <div className={`relative h-40 w-40 ${tone}`}>
          <svg viewBox="0 0 120 120" className="h-full w-full" aria-hidden="true">
            <circle cx="60" cy="60" r={ringRadius} fill="none" stroke="var(--color-line)" strokeWidth="5" />
            <circle
              className="audit-ring"
              cx="60"
              cy="60"
              r={ringRadius}
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeDasharray={ringLength}
              strokeDashoffset={ringLength * (1 - value / 100)}
              style={{ ["--ring-offset" as string]: `${ringLength * (1 - value / 100)}` }}
              transform="rotate(-90 60 60)"
            />
          </svg>
          <p className="display absolute inset-0 flex items-center justify-center text-5xl text-ink">{value}</p>
        </div>
        <p className="mt-5 text-lg">{chapter}</p>
        <p className="mt-2 max-w-xs text-sm leading-relaxed text-mute">Sur 100, à partir des points de cette partie.</p>
        <p className="mt-5 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-mute">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full border border-ink" />
            0–49
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-mute" />
            50–89
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-ink" />
            90–100
          </span>
        </p>
      </div>
      <ul className="grid sm:grid-cols-2 sm:gap-x-10 lg:col-span-8">
        {items.map((step) => (
          <li key={step.id} className="flex items-baseline justify-between gap-4 border-b border-line py-3 break-inside-avoid">
            <span className="flex min-w-0 items-center gap-3">
              <span
                className={`h-2 w-2 shrink-0 rounded-full ${step.state === "pass" ? "bg-ink" : step.state === "warn" ? "bg-mute" : "border border-ink"}`}
                aria-hidden="true"
              />
              <span>{step.label}</span>
            </span>
            <span className="shrink-0 font-mono text-xs text-mute">{mark(step.state)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function unit(seed: number) {
  const value = Math.sin(seed) * 43758.5453;
  return value - Math.floor(value);
}

function AuditMorph({ seed }: { seed: string }) {
  const base = [...seed].reduce((sum, char) => sum + char.charCodeAt(0), 17);
  return (
    <div className="mt-8 flex items-center gap-4" role="status" aria-label="Lecture en cours">
      {[0, 1, 2].map((index) => {
        const salt = base * 13 + index * 97;
        const duration = 2.2 + unit(salt + 1) * 1.9;
        return (
          <span
            key={index}
            aria-hidden="true"
            className="audit-morph-dot"
            style={{
              ["--morph-dur" as string]: `${duration.toFixed(2)}s`,
              ["--morph-delay" as string]: `${(-unit(salt + 2) * duration).toFixed(2)}s`,
            }}
          />
        );
      })}
    </div>
  );
}

export function AuditRun({ url, pick = true }: { url: string; pick?: boolean }) {
  const [steps, setSteps] = useState<AuditStep[]>([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [burstUrl, setBurstUrl] = useState(url);
  const [session, setSession] = useState(0);
  if (burstUrl !== url) {
    setBurstUrl(url);
    setSession(0);
  }

  useEffect(() => {
    const saved = session === 0 ? readAudit(url) : null;
    if (saved) {
      setSteps(saved.steps);
      setDone(true);
      setError("");
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controller = new AbortController();
    let cancelled = false;
    const collected: AuditStep[] = [];
    setSteps([]);
    setDone(false);
    setError("");
    markAudit(url, "running");

    async function run() {
      try {
        const response = await fetch("/api/audit", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ url }),
          signal: controller.signal,
        });
        if (!response.ok || !response.body) {
          const payload = (await response.json().catch(() => null)) as { error?: string } | null;
          if (!cancelled) {
            setError(payload?.error || "La lecture n'a pas pu démarrer.");
            markAudit(url, "error");
          }
          return;
        }
        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        while (!cancelled) {
          const { done: finished, value } = await reader.read();
          if (finished) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.trim()) continue;
            const item = JSON.parse(line) as AuditStep;
            if (cancelled) return;
            const index = collected.findIndex((step) => step.id === item.id);
            if (index === -1) collected.push(item);
            else collected[index] = item;
            setSteps(collected.slice());
            if (!reduced && item.state !== "running") await pause(280);
          }
        }
        if (!cancelled) {
          setDone(true);
          if (collected.some((step) => step.state !== "running" && step.id !== "suite")) writeAudit(url, collected);
          else markAudit(url, "error");
        }
      } catch (caught) {
        if (!cancelled && !(caught instanceof DOMException && caught.name === "AbortError")) {
          setError("La lecture s'est interrompue.");
          markAudit(url, "error");
        }
      }
    }

    void run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [url, session]);

  function reread() {
    setSession((value) => value + 1);
  }

  const settled = steps.filter((step) => step.state !== "running");
  const shown = settled.filter((step) => step.id !== "suite");
  const open = shown.filter((step) => step.state === "warn" || step.state === "fail");
  const held = shown.filter((step) => step.state === "pass").length;
  const warned = shown.filter((step) => step.state === "warn").length;
  const failed = shown.filter((step) => step.state === "fail").length;
  const listed = steps.filter((step) => step.id !== "suite");
  const visible = passage.filter((chapter) => listed.some((step) => step.chapter === chapter));
  const score = overallScore(shown);
  const nextSteps = priorities(shown);
  const headlines = takeaways(shown);
  const tallest = Math.max(held, warned, failed, 1);

  return (
    <div className="mt-14">
      <div className="flex flex-wrap items-baseline justify-between gap-4">
        <p className="font-mono text-xs tracking-wide text-mute">{url}</p>
        {done ? (
          <button type="button" onClick={reread} className="border-b border-ink pb-0.5 text-sm">
            Relire
          </button>
        ) : null}
      </div>
      <ol className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-b border-line pb-4 text-sm" aria-label="Parties de l'audit">
        {passage.map((chapter) => {
          const seen = steps.some((step) => step.chapter === chapter);
          const active = steps.some((step) => step.chapter === chapter && step.state === "running");
          return (
            <li key={chapter} className={active ? "audit-live" : seen ? "" : "text-mute"}>
              {chapter}
            </li>
          );
        })}
      </ol>

      {!done && !error && visible.length === 0 ? <AuditMorph seed={url} /> : null}

      {visible.map((chapter, index) => (
        <section key={chapter} className="mt-14" aria-labelledby={`audit-${chapter}`}>
          <h2 id={`audit-${chapter}`} className="audit-step display text-4xl md:text-5xl">
            {chapter}
          </h2>
          <ol className="mt-6 border-t border-line">
            {listed
              .filter((step) => step.chapter === chapter)
              .map((step) => (
                <li key={step.id} className="audit-step grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-6 md:grid-cols-[7rem_1fr]">
                  <span className={`pt-1 font-mono text-xs tracking-wide ${step.state === "running" ? "audit-live" : "text-mute"}`}>
                    {mark(step.state)}
                  </span>
                  <div>
                    <p className="text-xl tracking-tight">{step.label}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{step.detail || "En cours."}</p>
                    {step.state !== "running" && step.why ? <p className="mt-3 max-w-2xl text-sm leading-relaxed">{step.why}</p> : null}
                    {step.state !== "running" && step.impact !== "aucun" ? (
                      <p className="mt-3 font-mono text-xs text-mute">Impact {step.impact}{step.action ? ` · ${step.effort}` : ""}</p>
                    ) : null}
                    {step.action ? <p className="mt-2 max-w-2xl text-sm">À faire : {step.action}</p> : null}
                  </div>
                </li>
              ))}
          </ol>
          {done || index < visible.length - 1 ? (
            <AuditGauge chapter={chapter} steps={shown} />
          ) : !error ? (
            <AuditMorph seed={chapter} />
          ) : null}
        </section>
      ))}

      {error ? (
        <p className="mt-8 text-sm" role="alert">
          {error}
        </p>
      ) : null}

      {done && shown.length > 0 ? (
        <>
          <section className="audit-step border-t border-line pt-12" aria-labelledby="audit-score">
            <p className="font-mono text-xs tracking-wide text-mute">Trouvé, compris, choisi</p>
            <h2 id="audit-score" className="display mt-4 text-[clamp(4rem,10vw,7rem)]">
              {score}
              <span className="text-[0.35em] text-mute"> / 100</span>
            </h2>
            <p className="mt-4 max-w-xl text-lg">{scoreLabel(score)}</p>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">
              Le score résume ce passage. Un site peut cocher presque tout et rester difficile à trouver, à citer ou à contacter.
            </p>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {chapters.map((dimension) => {
                const value = dimensionScore(shown, dimension);
                if (value === null) return null;
                return (
                  <li key={dimension} className="border-t border-line pt-3">
                    <div className="flex items-baseline justify-between gap-4">
                      <span>{dimension}</span>
                      <span className="font-mono text-2xl">{value}</span>
                    </div>
                    <div className="mt-3 h-1 bg-line" role="img" aria-label={`${dimension} ${value} sur 100`}>
                      <span className="audit-bar block h-full bg-ink" style={{ width: `${value}%` }} />
                    </div>
                  </li>
                );
              })}
            </ul>
            {machineScore(shown) !== null ? (
              <div className="mt-12 border-t border-line pt-10">
                <p className="font-mono text-xs tracking-wide text-mute">Lecture machine</p>
                <p className="display mt-3 text-[clamp(3.2rem,7vw,5.5rem)]">
                  {machineScore(shown)}
                  <span className="text-[0.35em] text-mute"> / 100</span>
                </p>
                <p className="mt-4 max-w-xl text-lg leading-relaxed">{machineNote(shown)}</p>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {machineLayers.map((layer) => {
                    const value = layerScore(shown, layer.prefix);
                    if (value === null) return null;
                    return (
                      <li key={layer.id} className="border-t border-line pt-3">
                        <div className="flex items-baseline justify-between gap-4">
                          <span>{layer.label}</span>
                          <span className="font-mono text-2xl">{value}</span>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <p className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm">
                  <a href="/contact" className="border-b border-ink pb-1">
                    Byte Force peut corriger ce passage
                  </a>
                  <a href={`/audit/json?url=${encodeURIComponent(url)}`} className="border-b border-ink pb-1">
                    Lire le JSON
                  </a>
                </p>
              </div>
            ) : null}
            <ol className="mt-12 max-w-2xl border-t border-line">
              {headlines.map((item, index) => (
                <li key={item.dimension} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5">
                  <span className="font-mono text-sm text-mute">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-lg">{item.dimension}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className="audit-step mt-20 border-t border-line pt-12" aria-labelledby="audit-charts">
            <h2 id="audit-charts" className="display text-4xl md:text-5xl">
              Les proportions.
            </h2>
            <div className="mt-10 grid items-end gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="flex h-44 items-end gap-6" aria-hidden="true">
                  {[
                    { label: "Tenus", count: held, className: "bg-ink" },
                    { label: "À revoir", count: warned, className: "bg-mute" },
                    { label: "À corriger", count: failed, className: "border border-ink bg-paper" },
                  ].map((column) => (
                    <div key={column.label} className="flex h-full flex-1 flex-col justify-end">
                      <div
                        className={`audit-col w-full ${column.className}`}
                        style={{ height: `${Math.max((column.count / tallest) * 100, column.count ? 8 : 0)}%` }}
                      />
                    </div>
                  ))}
                </div>
                <ul className="mt-4 grid grid-cols-3 gap-6 text-sm">
                  <li>
                    <span className="font-mono text-2xl">{held}</span>
                    <span className="mt-1 block text-mute">Tenus</span>
                  </li>
                  <li>
                    <span className="font-mono text-2xl">{warned}</span>
                    <span className="mt-1 block text-mute">À revoir</span>
                  </li>
                  <li>
                    <span className="font-mono text-2xl">{failed}</span>
                    <span className="mt-1 block text-mute">À corriger</span>
                  </li>
                </ul>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm text-mute">Par partie, sur {shown.length} points lus.</p>
                <ul className="mt-6 space-y-5">
                  {passage.map((chapter) => {
                    const items = shown.filter((step) => step.chapter === chapter);
                    if (!items.length) return null;
                    const partHeld = items.filter((step) => step.state === "pass").length;
                    const partWarned = items.filter((step) => step.state === "warn").length;
                    const partFailed = items.filter((step) => step.state === "fail").length;
                    const share = (count: number) => `${(count / items.length) * 100}%`;
                    return (
                      <li key={chapter}>
                        <div className="flex items-baseline justify-between gap-4 text-sm">
                          <span>{chapter}</span>
                          <span className="font-mono text-mute">
                            {partHeld}/{items.length}
                          </span>
                        </div>
                        <div
                          className="mt-2 flex h-2 w-full bg-line"
                          role="img"
                          aria-label={`${chapter} : ${partHeld} tenus, ${partWarned} à revoir, ${partFailed} à corriger`}
                        >
                          {partHeld ? <span className="audit-bar h-full bg-ink" style={{ width: share(partHeld) }} /> : null}
                          {partWarned ? <span className="audit-bar h-full bg-mute" style={{ width: share(partWarned) }} /> : null}
                          {partFailed ? <span className="audit-bar h-full bg-paper ring-1 ring-ink ring-inset" style={{ width: share(partFailed) }} /> : null}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </section>

          {nextSteps.length ? (
          <section className="audit-step mt-20 border-t border-line pt-12" aria-labelledby="audit-next">
            <h2 id="audit-next" className="display max-w-[14ch] text-4xl md:text-5xl">
              Les 5 prochaines actions
            </h2>
            <ol className="mt-8 max-w-2xl border-t border-line">
              {nextSteps.map((step, index) => (
                <li key={step.id} className="grid grid-cols-[3rem_1fr] gap-4 border-b border-line py-5">
                  <span className="font-mono text-sm text-mute">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-lg">{step.label}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{step.action || step.detail}</p>
                    <p className="mt-2 font-mono text-xs text-mute">
                      Impact {step.impact} · effort {step.effort}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          ) : null}

          <div className="relative mt-24">
            <section className="border border-line bg-paper px-6 py-12 md:px-12 md:pb-28" aria-labelledby="audit-whole">
              <h2 id="audit-whole" className="display max-w-[14ch] text-[clamp(2.8rem,6vw,5rem)]">
                Tout le passage.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                {held} tenu{held > 1 ? "s" : ""}, {warned} à revoir, {failed} à corriger. Technique, performance, SEO, accessibilité, GEO et conversion de ce passage.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {passage.map((chapter) => {
                  const items = shown.filter((step) => step.chapter === chapter);
                  const partOpen = items.filter((step) => step.state === "warn" || step.state === "fail");
                  return (
                    <li key={chapter} className="border-t border-line pt-4">
                      <p className="font-mono text-xs text-mute">{chapter}</p>
                      <p className="mt-3 text-2xl tracking-tight">{items.filter((step) => step.state === "pass").length}</p>
                      <p className="mt-2 text-sm text-mute">
                        {partOpen.length ? partOpen.map((step) => step.label).join(", ") : "Rien d'ouvert."}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </section>

            <section
              className="relative z-10 -mt-14 border border-ink bg-ink px-6 py-12 text-paper md:ml-8 md:px-12 lg:ml-20"
              aria-labelledby="audit-with-us"
            >
              <p className="font-mono text-xs tracking-wide text-paper/70">Avec Byte Force</p>
              <h2 id="audit-with-us" className="display mt-4 max-w-[14ch] text-[clamp(2.6rem,5vw,4.5rem)]">
                Ce que le travail change.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80">
                {open.length
                  ? `Les ${open.length} point${open.length > 1 ? "s" : ""} ouverts entrent dans le chantier, pas dans un second rapport.`
                  : "Ce passage ne bloque pas. La suite est le produit, pas un autre diagnostic."}
              </p>
              <ul className="mt-10 grid gap-8 md:grid-cols-3">
                <li className="border-t border-paper/30 pt-4">
                  <p className="text-lg">La page qui demande</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/75">
                    Textes en français, formulaire, titres, meta, sitemap et données structurées. Livrés avec le site, pas en option.
                  </p>
                </li>
                <li className="border-t border-paper/30 pt-4">
                  <p className="text-lg">Le code à vous</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/75">
                    À la remise, le client possède le code, le dépôt et les comptes d&apos;hébergement livrés. Un acompte lance le travail. Le reste suit les étapes livrées.
                  </p>
                </li>
                <li className="border-t border-paper/30 pt-4">
                  <p className="text-lg">Quelqu&apos;un après</p>
                  <p className="mt-3 text-sm leading-relaxed text-paper/75">
                    Les défauts du périmètre convenu sont corrigés avec la livraison. Ensuite un correctif devisé, ou Care, Care Plus, Priority. Pas de prix public.
                  </p>
                </li>
              </ul>
              <p className="mt-10 max-w-2xl text-sm leading-relaxed text-paper/75">
                Premier échange de trente minutes, gratuit. Réponse sous un jour ouvré, du lundi au vendredi, de 9h à 19h. Bureau au Technopark, Casablanca. Care : surveillance, sauvegardes hebdomadaires, mises à jour, réponse en 2 jours ouvrés. Care Plus : Care, plus 5 heures par mois, réponse en 1 jour ouvré. Priority : Care Plus, performance, rapport mensuel, 4 heures pour une panne critique.
              </p>
              <a href="/contact" className="mt-8 inline-block border-b border-paper pb-1 text-sm">
                Parler de ce site
              </a>
            </section>
          </div>
          {pick ? <SitemapPick origin={url} /> : null}
        </>
      ) : null}
    </div>
  );
}
