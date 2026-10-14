"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import posthog from "posthog-js";
import { MailLink } from "@/components/mail-link";
import { SitemapPick } from "@/components/sitemap-pick";
import { dimensionScore, layerScore, machineLayers, machineNote, machineScore, overallScore, priorities, scoreLabel, takeaways } from "@/lib/audit/score";
import { markAudit, readAudit, writeAudit } from "@/lib/audit/saved";
import { site } from "@/lib/site";
import type { AuditStep } from "@/lib/site-audit";

const passage = ["Technique", "Performance", "SEO", "Accessibilité", "GEO", "Conversion", "Machine"] as const;
const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const posthogEnabled = Boolean(
  process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST,
);

function mark(state: AuditStep["state"]) {
  if (state === "fail") return "À corriger";
  if (state === "warn") return "À revoir";
  if (state === "running") return "En cours";
  return "Tenu";
}

const unread = [
  "Le temps de réponse n'est pas une mesure de laboratoire.",
  "Aucun chiffre de trafic n'est lu.",
  "Le compte DNS et le compte qui publie ne sont pas ouverts.",
];

function RollingScore({ value, live }: { value: number; live: boolean }) {
  const [shown, setShown] = useState(value);
  const shownRef = useRef(value);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || shownRef.current === value) {
      shownRef.current = value;
      setShown(value);
      return;
    }
    const step = value > shownRef.current ? 1 : -1;
    const timer = window.setInterval(() => {
      const next = shownRef.current + step;
      const arrived = step > 0 ? next >= value : next <= value;
      shownRef.current = arrived ? value : next;
      setShown(shownRef.current);
      if (arrived) window.clearInterval(timer);
    }, 32);
    return () => window.clearInterval(timer);
  }, [value]);

  return (
    <p className={`display text-[clamp(5.5rem,12vw,8.5rem)] leading-none tabular-nums text-primary ${live ? "audit-live" : ""}`} aria-hidden="true">
      {shown}
    </p>
  );
}

function chapterValue(steps: AuditStep[], chapter: (typeof passage)[number]) {
  if (chapter === "Machine") return machineScore(steps);
  return dimensionScore(steps, chapter);
}

function chapterStanding(steps: AuditStep[], chapter: (typeof passage)[number], done: boolean) {
  const items = steps.filter((step) => step.chapter === chapter);
  if (items.some((step) => step.state === "running") || (!done && items.length === 0)) return "En cours";
  if (items.some((step) => step.state === "fail")) return "À corriger";
  if (items.some((step) => step.state === "warn")) return "À revoir";
  return "Tenu";
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

export function AuditRun({ url, pick = true, children }: { url: string; pick?: boolean; children?: ReactNode }) {
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
          const completedSteps = collected.filter((step) => step.state !== "running" && step.id !== "suite");
          setDone(true);
          if (completedSteps.length) {
            if (posthogEnabled) posthog.capture("audit_completed", { audit_step_count: completedSteps.length });
            writeAudit(url, collected);
          } else markAudit(url, "error");
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
    if (posthogEnabled) posthog.capture("audit_rerun");
    setSession((value) => value + 1);
  }

  const settled = steps.filter((step) => step.state !== "running");
  const shown = settled.filter((step) => step.id !== "suite");
  const open = shown.filter((step) => step.state === "warn" || step.state === "fail");
  const warned = shown.filter((step) => step.state === "warn").length;
  const failed = shown.filter((step) => step.state === "fail").length;
  const blocked = shown.filter((step) => step.state === "fail");
  const waiting = shown.filter((step) => step.state === "warn");
  const listed = steps.filter((step) => step.id !== "suite");
  const score = overallScore(shown);
  const nextSteps = priorities(shown);
  const headlines = takeaways(shown);
  const live = !done && !error;

  return (
    <div>
      <div className={children ? "grid items-start gap-12 lg:grid-cols-12" : "flex justify-end"}>
        {children ? <div className="lg:col-span-7">{children}</div> : null}
        <aside className={children ? "order-first lg:order-none lg:col-span-5" : "max-w-md"} aria-label="Score de la lecture">
          <p className="break-all font-mono text-xs tracking-wide text-mute">{url}</p>
          <p className="mt-2 font-mono text-xs tracking-wide text-mute">{live ? "Lecture en cours" : "Lecture publique"}</p>
          <div className="mt-4 flex items-end gap-3">
            <RollingScore value={score} live={live} />
            <p className="mb-3 font-mono text-sm text-mute">/ 100</p>
          </div>
          <p className="sr-only">{live ? "Score en cours de calcul" : `Score ${score} sur 100`}</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">{live ? "Le nombre suit les parties déjà lues." : scoreLabel(score)}</p>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-error" aria-hidden="true" />
              {failed} à corriger
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-wait" aria-hidden="true" />
              {warned} à revoir
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 bg-line" aria-hidden="true" />
              {unread.length} hors lecture
            </li>
          </ul>
          <p className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
            {done ? (
              <button type="button" onClick={reread} className="border-b border-ink pb-0.5">
                Relire
              </button>
            ) : null}
            {done ? (
              <a href={`/audit/json?url=${encodeURIComponent(url)}`} className="border-b border-ink pb-0.5">
                Lire le JSON
              </a>
            ) : null}
          </p>
          {error ? (
            <p className="mt-6 text-sm" role="alert">
              {error}
            </p>
          ) : null}
        </aside>
      </div>

      <section className="mt-20" aria-labelledby="audit-results">
        <p className="font-mono text-xs tracking-wide text-mute">Les résultats</p>
        <h2 id="audit-results" className="display mt-3 max-w-[16ch] text-4xl md:text-5xl">
          Ce qui bloque, ce qui peut attendre, ce qui n&apos;a pas été lu.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <article className="border border-line border-t-2 border-t-error p-6">
            <h3 className="text-lg text-error">Ce qui bloque</h3>
            <ul className="mt-4">
              {blocked.length ? (
                blocked.map((step) => (
                  <li key={step.id} className="flex items-baseline justify-between gap-4 border-t border-line py-3 text-sm">
                    <span>{step.label}</span>
                    <span className="shrink-0 font-mono text-xs text-mute">{step.dimension}</span>
                  </li>
                ))
              ) : (
                <li className="border-t border-line py-3 text-sm text-mute">{live ? "Pas encore." : "Rien qui bloque."}</li>
              )}
            </ul>
          </article>
          <article className="border border-line border-t-2 border-t-wait p-6">
            <h3 className="text-lg text-wait">Ce qui peut attendre</h3>
            <ul className="mt-4">
              {waiting.length ? (
                waiting.map((step) => (
                  <li key={step.id} className="flex items-baseline justify-between gap-4 border-t border-line py-3 text-sm">
                    <span>{step.label}</span>
                    <span className="shrink-0 font-mono text-xs text-mute">{step.dimension}</span>
                  </li>
                ))
              ) : (
                <li className="border-t border-line py-3 text-sm text-mute">{live ? "Pas encore." : "Rien à remettre."}</li>
              )}
            </ul>
          </article>
          <article className="border border-line p-6">
            <h3 className="text-lg">Ce qui n&apos;a pas été lu</h3>
            <ul className="mt-4">
              {unread.map((line) => (
                <li key={line} className="border-t border-line py-3 text-sm leading-relaxed">
                  {line}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="mt-16" aria-labelledby="audit-lectures">
        <h2 id="audit-lectures" className="font-mono text-xs tracking-wide text-mute">
          Sept lectures
        </h2>
        <ol className="mt-4 flex flex-wrap gap-x-5 gap-y-3" aria-label="Parties de l'audit">
          {passage.map((chapter) => {
            const items = listed.filter((step) => step.chapter === chapter);
            const running = items.some((step) => step.state === "running");
            const settledItems = items.filter((step) => step.state !== "running");
            const loading = running || (!done && settledItems.length === 0);
            const value = chapterValue(shown, chapter);
            const marker = loading ? "(...)" : value !== null ? `(${value})` : "";
            return (
              <li key={chapter}>
                <a
                  href={`#audit-${chapter}`}
                  className={`border-b border-ink pb-0.5 text-sm${loading ? " audit-live" : ""}`}
                  aria-label={loading ? `${chapter}, en cours` : value !== null ? `${chapter}, ${value} sur 100` : chapter}
                >
                  {chapter}
                  {marker ? <span aria-hidden="true"> {marker}</span> : null}
                </a>
              </li>
            );
          })}
        </ol>
      </section>

      <section className="mt-16" aria-labelledby="audit-detail">
        <h2 id="audit-detail" className="display text-4xl md:text-5xl">
          Le détail, par catégorie.
        </h2>
        {live && listed.length === 0 ? <AuditMorph seed={url} /> : null}
        <div className="mt-10 grid gap-6 md:grid-cols-1">
          {passage.map((chapter) => {
            const value = chapterValue(shown, chapter);
            const standing = chapterStanding(listed, chapter, done);
            const blurb =
              chapter === "Machine"
                ? machineNote(shown)
                : listed.find((step) => step.chapter === chapter && (step.state === "fail" || step.state === "warn"))?.detail ||
                  "Sur 100, à partir des points de cette partie.";
            const wide = chapter === "Machine";
            return (
              <article key={chapter} className={`border border-line p-6 md:p-8${wide ? " md:col-span-2" : ""}`}>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 id={`audit-${chapter}`} className="scroll-mt-28 text-2xl">
                    {chapter}
                  </h3>
                  <p className={`font-mono text-xs ${standing === "À corriger" ? "text-error" : standing === "À revoir" ? "text-wait" : standing === "En cours" ? "audit-live text-mute" : "text-mute"}`}>{standing}</p>
                </div>
                <p className={`display mt-6 text-6xl tabular-nums leading-none ${standing === "À corriger" ? "text-error" : standing === "À revoir" ? "text-wait" : ""}`}>
                  {value === null ? <span className="text-mute">—</span> : value}
                  <span className="text-[0.35em] text-mute"> /100</span>
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute">{blurb}</p>
                {chapter === "Machine" && done ? (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {machineLayers.map((layer) => {
                      const layerValue = layerScore(shown, layer.prefix);
                      if (layerValue === null) return null;
                      return (
                        <li key={layer.id} className="flex items-baseline justify-between gap-4 border-t border-line pt-3 text-sm">
                          <span>{layer.label}</span>
                          <span className="font-mono">{layerValue}</span>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
                <ol className="mt-6 border-t border-line">
                  {listed
                    .filter((step) => step.chapter === chapter)
                    .map((step) => (
                      <li key={step.id} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b border-line py-5 md:grid-cols-[7rem_1fr]">
                        <span className={`pt-1 font-mono text-xs tracking-wide ${step.state === "fail" ? "text-error" : step.state === "warn" ? "text-wait" : step.state === "running" ? "audit-live text-mute" : "text-mute"}`}>
                          {mark(step.state)}
                        </span>
                        <div>
                          <p className="text-lg tracking-tight">{step.label}</p>
                          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{step.detail || "En cours."}</p>
                          {step.state !== "running" && step.why ? <p className="mt-3 max-w-2xl text-sm leading-relaxed">{step.why}</p> : null}
                          {step.state !== "running" && step.impact !== "aucun" ? (
                            <p className="mt-3 font-mono text-xs text-mute">
                              Impact {step.impact}
                              {step.action ? ` · ${step.effort}` : ""}
                            </p>
                          ) : null}
                          {step.action ? <p className="mt-2 max-w-2xl text-sm">À faire : {step.action}</p> : null}
                        </div>
                      </li>
                    ))}
                </ol>
              </article>
            );
          })}
        </div>
      </section>

      {done && shown.length > 0 ? (
        <>
          <section className="mt-20" aria-labelledby="audit-reading">
            <p className="font-mono text-xs tracking-wide text-mute">Ce que dit cette lecture</p>
            <h2 id="audit-reading" className="display mt-3 max-w-[14ch] text-4xl md:text-5xl">
              Une lecture, pas un devis.
            </h2>
            <ol className="mt-8 max-w-3xl">
              {headlines.map((item, index) => (
                <li key={item.dimension} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5">
                  <span className="font-mono text-sm text-mute">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-lg">{item.dimension}</p>
                    <p className="mt-2 text-sm leading-relaxed text-mute">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {nextSteps.length ? (
            <section className="mt-20" aria-labelledby="audit-next">
              <h2 id="audit-next" className="display max-w-[14ch] text-4xl md:text-5xl">
                Les 5 prochaines actions
              </h2>
              <ol className="mt-8 max-w-3xl">
                {nextSteps.map((step, index) => (
                  <li key={step.id} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-5">
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

          <section className="mt-20" aria-labelledby="audit-with-us">
            <h2 id="audit-with-us" className="display max-w-[14ch] text-4xl md:text-5xl">
              Ce que le travail change.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              {open.length
                ? `Les ${open.length} point${open.length > 1 ? "s" : ""} ouverts entrent dans le chantier, pas dans un second rapport.`
                : "Ce passage ne bloque pas. La suite est le produit, pas un autre diagnostic."}
            </p>
            <ul className="mt-10 grid gap-8 md:grid-cols-3">
              <li className="border-t border-line pt-4">
                <p className="text-lg">La page qui demande</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Textes en français, formulaire, titres, meta, sitemap et données structurées. Livrés avec le site, pas en option.
                </p>
              </li>
              <li className="border-t border-line pt-4">
                <p className="text-lg">Le code à vous</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  À la remise, le client possède le code, le dépôt et les comptes d&apos;hébergement livrés. Un acompte lance le travail. Le reste suit les étapes livrées.
                </p>
              </li>
              <li className="border-t border-line pt-4">
                <p className="text-lg">Quelqu&apos;un après</p>
                <p className="mt-3 text-sm leading-relaxed text-mute">
                  Les défauts du périmètre convenu sont corrigés avec la livraison. Ensuite un correctif devisé, ou Care, Care Plus, Priority. Pas de prix public.
                </p>
              </li>
            </ul>
          </section>
          {pick ? <SitemapPick origin={url} /> : null}
        </>
      ) : null}

      <section className="mt-20 border border-line px-6 py-12 md:px-12" aria-labelledby="audit-cta">
        <div className="grid items-end gap-10 lg:grid-cols-[1.4fr_auto]">
          <div>
            <h2 id="audit-cta" className="display max-w-[16ch] text-4xl md:text-5xl">
              Parlons de ce que la page a montré.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed">
              Écrire sert à dire l&apos;adresse, ce qui bloque, et depuis quand. Réponse sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h. Le premier échange de trente minutes est gratuit.
            </p>
          </div>
          <div className="flex flex-col items-start gap-4">
            <a href="/contact" className="btn">
              Parler d&apos;un projet
            </a>
            <a href={`https://wa.me/${site.phone.replace("+", "")}`} className="border-b border-ink pb-0.5 text-sm">
              WhatsApp
            </a>
            <MailLink className="border-b border-ink pb-0.5 text-sm" />
          </div>
        </div>
      </section>
    </div>
  );
}
