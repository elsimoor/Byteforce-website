"use client";

import { useEffect, useState } from "react";
import type { AuditStep } from "@/lib/site-audit";

const chapters = ["Arrivée", "Page", "Fichiers", "Domaine", "Liens"];
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function mark(state: AuditStep["state"]) {
  if (state === "fail") return "À corriger";
  if (state === "warn") return "À revoir";
  if (state === "running") return "En cours";
  return "Tenu";
}

export function AuditRun({ url }: { url: string }) {
  const [steps, setSteps] = useState<AuditStep[]>([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const controller = new AbortController();
    let cancelled = false;

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
          if (!cancelled) setError(payload?.error || "La lecture n'a pas pu démarrer.");
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
            setSteps((current) => {
              const index = current.findIndex((step) => step.id === item.id);
              if (index === -1) return [...current, item];
              const next = current.slice();
              next[index] = item;
              return next;
            });
            if (!reduced && item.state !== "running") await pause(420);
          }
        }
        if (!cancelled) setDone(true);
      } catch {
        if (!cancelled) setError("La lecture s'est interrompue.");
      }
    }

    void run();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [url]);

  const settled = steps.filter((step) => step.state !== "running");
  const open = settled.filter((step) => step.state === "warn" || step.state === "fail");
  const held = settled.filter((step) => step.state === "pass").length;
  const warned = settled.filter((step) => step.state === "warn").length;
  const failed = settled.filter((step) => step.state === "fail").length;
  const visible = chapters.filter((chapter) => steps.some((step) => step.chapter === chapter));
  const tallest = Math.max(held, warned, failed, 1);

  return (
    <div className="mt-14">
      <p className="font-mono text-xs tracking-wide text-mute">{url}</p>
      <ol className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-b border-line pb-4 text-sm" aria-label="Parties de l'audit">
        {chapters.map((chapter) => {
          const seen = steps.some((step) => step.chapter === chapter);
          const active = steps.some((step) => step.chapter === chapter && step.state === "running");
          return (
            <li key={chapter} className={active ? "audit-live" : seen ? "" : "text-mute"}>
              {chapter}
            </li>
          );
        })}
      </ol>

      {visible.map((chapter) => (
        <section key={chapter} className="mt-14" aria-labelledby={`audit-${chapter}`}>
          <h2 id={`audit-${chapter}`} className="audit-step display text-4xl md:text-5xl">
            {chapter}
          </h2>
          <ol className="mt-6 border-t border-line">
            {steps
              .filter((step) => step.chapter === chapter)
              .map((step) => (
                <li key={step.id} className="audit-step grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-6 md:grid-cols-[7rem_1fr]">
                  <span className={`pt-1 font-mono text-xs tracking-wide ${step.state === "running" ? "audit-live" : "text-mute"}`}>
                    {mark(step.state)}
                  </span>
                  <div>
                    <p className="text-xl tracking-tight">{step.label}</p>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{step.detail || "En cours."}</p>
                  </div>
                </li>
              ))}
          </ol>
        </section>
      ))}

      {error ? (
        <p className="mt-8 text-sm" role="alert">
          {error}
        </p>
      ) : null}

      {done && settled.length > 0 ? (
        <>
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
                <p className="text-sm text-mute">Par partie, sur {settled.length} points lus.</p>
                <ul className="mt-6 space-y-5">
                  {chapters.map((chapter) => {
                    const items = settled.filter((step) => step.chapter === chapter);
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

          <div className="relative mt-24">
            <section className="border border-line bg-paper px-6 py-12 md:px-12 md:pb-28" aria-labelledby="audit-whole">
              <h2 id="audit-whole" className="display max-w-[14ch] text-[clamp(2.8rem,6vw,5rem)]">
                Tout le passage.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-relaxed">
                {held} tenu{held > 1 ? "s" : ""}, {warned} à revoir, {failed} à corriger. Accueil, fichiers, domaine, et les pages liées de ce passage.
              </p>
              <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
                {chapters.map((chapter) => {
                  const items = settled.filter((step) => step.chapter === chapter);
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
        </>
      ) : null}
    </div>
  );
}
