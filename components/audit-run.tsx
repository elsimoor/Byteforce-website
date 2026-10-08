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

  const open = steps.filter((step) => step.state === "warn" || step.state === "fail");
  const held = steps.filter((step) => step.state === "pass").length;
  const visible = chapters.filter((chapter) => steps.some((step) => step.chapter === chapter));

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

      {done ? (
        <section className="audit-step mt-20 border-t border-line pt-12" aria-labelledby="audit-open">
          <h2 id="audit-open" className="display max-w-[12ch] text-[clamp(3rem,7vw,5.5rem)]">
            {open.length ? "Ce qui reste ouvert." : "Rien de bloquant."}
          </h2>
          <p className="mt-6 font-mono text-sm text-mute">
            {held} tenu{held > 1 ? "s" : ""} · {open.length} ouvert{open.length > 1 ? "s" : ""}
          </p>
          {open.length ? (
            <ul className="mt-10 max-w-2xl border-t border-line">
              {open.map((step) => (
                <li key={step.id} className="border-b border-line py-5">
                  <p className="text-lg">
                    {step.chapter} · {step.label}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{step.detail}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-8 max-w-md text-sm leading-relaxed text-mute">
              L&apos;accueil, les fichiers et les pages liées tiennent sur ce passage.
            </p>
          )}
          <p className="mt-8 max-w-md text-sm leading-relaxed text-mute">
            Accueil, robots, sitemap, le domaine, et jusqu&apos;à trois pages liées. Ce n&apos;est pas un score Google, et ce n&apos;est pas tout le site.
          </p>
          <a href="/contact" className="mt-8 inline-block border-b border-ink pb-1 text-sm">
            Parler de ce site
          </a>
        </section>
      ) : null}
    </div>
  );
}
