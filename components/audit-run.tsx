"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import posthog from "posthog-js";
import { SitemapPick } from "@/components/sitemap-pick";
import { startAudit } from "@/lib/actions";
import { dimensionScore, layerScore, machineLayers, machineNote, machineScore, overallScore, priorities, scoreLabel } from "@/lib/audit/score";
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

function hostOf(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function scoreTone(value: number | null) {
  if (value === null) return { text: "#4A4F63", bar: "#C9CEE0" };
  if (value >= 90) return { text: "#17613A", bar: "#1E7A46" };
  if (value >= 60) return { text: "#7A4500", bar: "#B26A00" };
  return { text: "#9B1C15", bar: "#B3261E" };
}

function dotClass(state: AuditStep["state"]) {
  if (state === "fail") return "bg-[#B3261E]";
  if (state === "warn") return "bg-[#B26A00]";
  if (state === "pass") return "bg-[#1E7A46]";
  return "bg-[#C9CEE0]";
}

function Pill({ tone, children }: { tone: "bad" | "wait" | "ok" | "neutral"; children: ReactNode }) {
  const tones = {
    bad: "bg-[#FDECEC] text-[#9B1C15]",
    wait: "bg-[#FFF4E5] text-[#7A4500]",
    ok: "bg-[#E7F6EE] text-[#17613A]",
    neutral: "bg-[#EEF0F6] text-[#4A4F63]",
  };
  return <span className={`inline-flex items-center rounded-full px-3 py-1 text-[13px] font-semibold ${tones[tone]}`}>{children}</span>;
}

function pillTone(state: AuditStep["state"]): "bad" | "wait" | "ok" | "neutral" {
  if (state === "fail") return "bad";
  if (state === "warn") return "wait";
  if (state === "pass") return "ok";
  return "neutral";
}

function ScoreRing({ value, live }: { value: number; live: boolean }) {
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
    <div
      className="flex h-44 w-44 shrink-0 items-center justify-center rounded-full"
      style={{ background: `conic-gradient(var(--color-primary) 0 ${shown}%, #E2E5F0 ${shown}% 100%)` }}
      aria-hidden="true"
    >
      <div className="flex h-[8.75rem] w-[8.75rem] flex-col items-center justify-center rounded-full bg-white">
        <span className={`font-headline text-[3.5rem] leading-none font-extrabold tabular-nums ${live ? "audit-live" : ""}`}>{shown}</span>
        <span className="text-[13px] text-[#4A4F63]">sur 100</span>
      </div>
    </div>
  );
}

function chapterValue(steps: AuditStep[], chapter: (typeof passage)[number]) {
  if (chapter === "Machine") return machineScore(steps);
  return dimensionScore(steps, chapter);
}

export function AuditRun({
  url,
  pick = true,
  embedded = false,
  children,
}: {
  url: string;
  pick?: boolean;
  embedded?: boolean;
  children?: ReactNode;
}) {
  const [steps, setSteps] = useState<AuditStep[]>([]);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const [burstUrl, setBurstUrl] = useState(url);
  const [session, setSession] = useState(0);
  const [openChapters, setOpenChapters] = useState<Record<string, boolean>>({});
  const [exportNote, setExportNote] = useState("");
  if (burstUrl !== url) {
    setBurstUrl(url);
    setSession(0);
    setOpenChapters({});
    setExportNote("");
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
  const warned = shown.filter((step) => step.state === "warn").length;
  const failed = shown.filter((step) => step.state === "fail").length;
  const blocked = shown.filter((step) => step.state === "fail");
  const waiting = shown.filter((step) => step.state === "warn");
  const listed = steps.filter((step) => step.id !== "suite");
  const score = overallScore(shown);
  const nextSteps = priorities(shown);
  const live = !done && !error;
  const host = hostOf(url);
  const allOpen = passage.every((chapter) => openChapters[chapter]);
  const chapters = done
    ? [...passage].sort((left, right) => {
        const leftScore = chapterValue(shown, left);
        const rightScore = chapterValue(shown, right);
        if (leftScore === null && rightScore === null) return 0;
        if (leftScore === null) return 1;
        if (rightScore === null) return -1;
        return leftScore - rightScore;
      })
    : [...passage];

  function exportCsv() {
    const rows = [["Catégorie", "Point", "Statut", "Constat", "À faire"]];
    for (const chapter of passage) {
      for (const step of shown.filter((item) => item.chapter === chapter)) {
        rows.push([chapter, step.label, mark(step.state), step.detail, step.action]);
      }
    }
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `audit-${host}.csv`;
    link.click();
    URL.revokeObjectURL(link.href);
    setExportNote(`Rapport exporté : audit-${host}.csv`);
  }

  return (
    <div className={embedded ? "pt-8" : "mx-auto w-full max-w-[1200px] px-5 py-12 text-[#14161F] sm:px-8 lg:px-10 lg:py-14"}>
      {children}
      <p className="font-mono text-xs tracking-[0.05em] text-primary uppercase">Audit gratuit</p>
      <div className="mt-4 grid items-stretch gap-6 [grid-template-columns:repeat(auto-fit,minmax(20rem,1fr))]">
        <section className="flex flex-wrap items-center gap-8 rounded-2xl border border-[#E2E5F0] bg-white p-7" aria-label="Score de la lecture">
          <ScoreRing value={score} live={live} />
          <div className="min-w-[15rem] flex-1">
            <p className="text-sm text-[#4A4F63]">
              {host} · {live ? "lecture en cours" : "lecture publique"}
            </p>
            <h1 className="mt-1.5 font-headline text-[2rem] leading-[1.1] font-extrabold tracking-[-0.03em] sm:text-4xl">
              {live ? "Lecture en cours" : scoreLabel(score)}
            </h1>
            <p className="sr-only">{live ? "Score en cours de calcul" : `Score ${score} sur 100`}</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              <Pill tone="bad">{failed} à corriger</Pill>
              <Pill tone="wait">{warned} à revoir</Pill>
              <Pill tone="neutral">{unread.length} hors lecture</Pill>
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-5 text-sm font-semibold">
              {done ? (
                <button type="button" onClick={reread} className="text-[#14161F]">
                  Relire
                </button>
              ) : null}
              {done ? (
                <a href={`/audit/json?url=${encodeURIComponent(url)}`} className="rounded-[10px] border border-[#C9CEE0] px-3.5 py-1.5">
                  Lire le JSON
                </a>
              ) : null}
            </div>
            {error ? (
              <p className="mt-4 text-sm" role="alert">
                {error}
              </p>
            ) : null}
          </div>
        </section>

        {embedded ? null : (
          <form action={startAudit} method="POST" className="flex flex-col justify-center gap-3.5 rounded-2xl border border-[#E2E5F0] bg-white p-7">
            <label htmlFor="audit-url" className="font-mono text-xs tracking-[0.05em] text-[#4A4F63] uppercase">
              Adresse du site
            </label>
            <input
              id="audit-url"
              name="url"
              type="text"
              required
              defaultValue={url}
              autoComplete="url"
              autoCapitalize="off"
              spellCheck={false}
              inputMode="url"
              className="w-full rounded-[10px] border border-[#C9CEE0] px-4 py-3.5 text-base text-[#14161F] outline-none focus:border-primary"
            />
            <button type="submit" className="min-h-12 rounded-[10px] bg-primary px-5 py-3.5 text-base font-semibold text-white">
              Auditer gratuitement
            </button>
            <p className="text-sm text-[#4A4F63]">Gratuit, sans compte. On lit la page d&apos;accueil : titre, description, indexation, images, mobile.</p>
          </form>
        )}
      </div>

      <h2 className="mt-14 font-headline text-[2rem] font-extrabold tracking-[-0.03em]">Ce qui bloque, ce qui peut attendre</h2>
      <div className="mt-5 grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(16rem,1fr))]">
        <article className="rounded-2xl border border-[#E2E5F0] border-t-4 border-t-[#B3261E] bg-white p-6">
          <h3 className="text-[17px] font-semibold text-[#9B1C15]">Ce qui bloque · {blocked.length}</h3>
          <ul className="mt-3">
            {blocked.length ? (
              blocked.map((step) => (
                <li key={step.id} className="flex items-center gap-3 border-t border-[#EEF0F6] py-3 first:border-t-0">
                  <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#B3261E]" aria-hidden="true" />
                  <span className="min-w-0 flex-1 font-semibold">{step.label}</span>
                  <span className="shrink-0 font-mono text-[11px] tracking-[0.04em] text-[#4A4F63] uppercase">{step.dimension}</span>
                </li>
              ))
            ) : (
              <li className="pt-3 text-sm text-[#4A4F63]">{live ? "Pas encore." : "Rien qui bloque."}</li>
            )}
          </ul>
        </article>
        <article className="rounded-2xl border border-[#E2E5F0] border-t-4 border-t-[#B26A00] bg-white p-6">
          <h3 className="text-[17px] font-semibold text-[#7A4500]">Ce qui peut attendre · {waiting.length}</h3>
          <p className="mt-3 text-sm leading-8 text-[#4A4F63]">{waiting.length ? waiting.map((step) => step.label).join(" · ") : live ? "Pas encore." : "Rien à remettre."}</p>
        </article>
        <article className="rounded-2xl border border-[#E2E5F0] border-t-4 border-t-[#C9CEE0] bg-white p-6">
          <h3 className="text-[17px] font-semibold">Ce qui n&apos;a pas été lu · {unread.length}</h3>
          <ul className="mt-3 flex flex-col gap-2">
            {unread.map((line) => (
              <li key={line} className="text-sm leading-relaxed text-[#4A4F63]">
                {line}
              </li>
            ))}
          </ul>
        </article>
      </div>

      <h2 className="mt-14 font-headline text-[2rem] font-extrabold tracking-[-0.03em]">Les 5 prochaines actions</h2>
      <div className="mt-5 rounded-2xl border border-[#E2E5F0] bg-white px-6 py-2 sm:px-7">
        {nextSteps.length ? (
          <ol>
            {nextSteps.map((step, index) => (
              <li key={step.id} className="flex flex-wrap items-center gap-4 border-t border-[#EEF0F6] py-4 first:border-t-0">
                <span className="w-8 font-headline text-[1.375rem] font-extrabold text-primary">{String(index + 1).padStart(2, "0")}</span>
                <div className="min-w-[12rem] flex-1">
                  <p className="font-semibold">{step.label}</p>
                  <p className="mt-1 text-sm text-[#4A4F63]">{step.action || step.detail}</p>
                </div>
                <Pill tone={step.impact === "élevé" ? "bad" : step.impact === "moyen" ? "wait" : "neutral"}>
                  Impact {step.impact} · {step.effort}
                </Pill>
              </li>
            ))}
          </ol>
        ) : (
          <p className="py-5 text-sm text-[#4A4F63]">{live ? "Pas encore." : "Rien à ouvrir dans cet ordre."}</p>
        )}
      </div>

      <div className="mt-14 flex flex-wrap items-center justify-between gap-4">
        <h2 className="font-headline text-[2rem] font-extrabold tracking-[-0.03em]">Le détail, par catégorie</h2>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setOpenChapters(allOpen ? {} : Object.fromEntries(passage.map((chapter) => [chapter, true])))}
            className="rounded-[10px] border border-[#C9CEE0] bg-white px-4 py-2.5 text-sm font-semibold"
          >
            {allOpen ? "Tout replier" : "Tout déplier"}
          </button>
          <button type="button" onClick={exportCsv} disabled={!done || !shown.length} className="rounded-[10px] bg-primary px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40">
            Exporter le rapport (CSV)
          </button>
        </div>
      </div>
      <p className="mt-2 min-h-6 text-sm text-[#1E7A46]" role="status">
        {exportNote}
      </p>

      <div className="flex flex-col gap-4">
        {chapters.map((chapter) => {
          const value = chapterValue(shown, chapter);
          const tone = scoreTone(live ? null : value);
          const items = listed.filter((step) => step.chapter === chapter);
          const fails = items.filter((step) => step.state === "fail").length;
          const warns = items.filter((step) => step.state === "warn").length;
          const open = Boolean(openChapters[chapter]);
          const running = items.some((step) => step.state === "running") || (!done && items.length === 0);
          const standing = running ? "En cours" : fails ? `${fails} à corriger` : warns ? `${warns} à revoir` : value === null ? "Non noté" : "Tenu";
          const standingTone = running || value === null ? "neutral" : fails ? "bad" : warns ? "wait" : "ok";
          return (
            <article key={chapter} className="overflow-hidden rounded-2xl border border-[#E2E5F0] bg-white">
              <h3 className="m-0">
                <button
                  type="button"
                  aria-expanded={open}
                  aria-controls={`audit-${chapter}`}
                  onClick={() => setOpenChapters((current) => ({ ...current, [chapter]: !current[chapter] }))}
                  className="flex w-full flex-wrap items-center gap-5 px-6 py-6 text-left sm:px-7"
                >
                  <span className="w-20 font-headline text-[2.5rem] leading-none font-extrabold tabular-nums" style={{ color: tone.text }}>
                    {live || value === null ? "—" : value}
                  </span>
                  <span className="min-w-[12rem] flex-1">
                    <span className="block font-headline text-[1.375rem] font-extrabold">{chapter}</span>
                    <span className="mt-1 block text-sm text-[#4A4F63]">
                      {items.filter((step) => step.state !== "running").length} points lus · cliquer pour {open ? "replier" : "déplier"}
                    </span>
                    <span className="mt-3 block h-1.5 overflow-hidden rounded-full bg-[#EEF0F6]" aria-hidden="true">
                      <span className="block h-full rounded-full" style={{ width: `${live || value === null ? 0 : value}%`, background: tone.bar }} />
                    </span>
                  </span>
                  <Pill tone={standingTone}>{standing}</Pill>
                  <span className="w-6 text-center text-[1.375rem] text-[#4A4F63]" aria-hidden="true">
                    {open ? "−" : "+"}
                  </span>
                </button>
              </h3>
              {open ? (
                <div id={`audit-${chapter}`} className="border-t border-[#EEF0F6] px-6 pb-2 sm:px-7">
                  {chapter === "Machine" ? <p className="pt-4 text-sm text-[#4A4F63]">{machineNote(shown)}</p> : null}
                  {chapter === "Machine" && done ? (
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                      {machineLayers.map((layer) => {
                        const layerValue = layerScore(shown, layer.prefix);
                        if (layerValue === null) return null;
                        return (
                          <li key={layer.id} className="flex items-baseline justify-between gap-4 border-t border-[#EEF0F6] pt-2 text-sm">
                            <span>{layer.label}</span>
                            <span className="font-mono">{layerValue}</span>
                          </li>
                        );
                      })}
                    </ul>
                  ) : null}
                  <ul>
                    {items.map((step) => (
                      <li key={step.id} className="flex flex-wrap items-start gap-3 border-t border-[#EEF0F6] py-4">
                        <span className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${dotClass(step.state)}`} aria-hidden="true" />
                        <div className="min-w-[12rem] flex-1">
                          <p className="font-semibold">{step.label}</p>
                          <p className="mt-1 text-sm leading-relaxed text-[#4A4F63]">{step.detail || "En cours."}</p>
                          {step.state !== "running" && step.why ? <p className="mt-2 text-sm leading-relaxed">{step.why}</p> : null}
                          {step.state !== "running" && step.action ? (
                            <p className="mt-2 text-sm">
                              <b>À faire :</b> {step.action}
                            </p>
                          ) : null}
                        </div>
                        <Pill tone={pillTone(step.state)}>{mark(step.state)}</Pill>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {pick && !error ? <SitemapPick origin={url} /> : null}

      <section className="mt-14 mb-6 flex flex-wrap items-center justify-between gap-8 rounded-2xl bg-[#14161F] px-7 py-10 text-white sm:px-10" aria-labelledby="audit-cta">
        <div className="max-w-[38rem]">
          <h2 id="audit-cta" className="font-headline text-[2rem] font-extrabold tracking-[-0.03em]">
            Parlons de ce que la page a montré.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#D5D8E6]">
            Réponse sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h. Le premier échange de trente minutes est gratuit.
          </p>
        </div>
        <div className="flex min-w-[14rem] flex-col items-stretch gap-3">
          <a href="/contact" className="rounded-[10px] bg-white px-6 py-3.5 text-center font-semibold text-[#14161F]">
            Parler d&apos;un projet
          </a>
          <a href={`mailto:${site.email}`} className="text-center text-sm text-white">
            {site.email}
          </a>
        </div>
      </section>
    </div>
  );
}
