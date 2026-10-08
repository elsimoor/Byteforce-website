"use client";

import { useEffect, useState } from "react";
import type { AuditStep } from "@/lib/site-audit";

const pause = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

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
            if (!reduced && item.state !== "running") await pause(520);
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

  const held = steps.filter((step) => step.state === "pass").length;
  const open = steps.filter((step) => step.state === "warn" || step.state === "fail").length;

  return (
    <div className="mt-16">
      <p className="font-mono text-xs tracking-wide text-mute">{url}</p>
      <ol className="mt-8 border-t border-line" aria-live="polite">
        {steps.map((step, index) => (
          <li key={step.id} className="audit-step grid grid-cols-[3.5rem_1fr] gap-4 border-b border-line py-7">
            <span className={`pt-1 font-mono text-sm ${step.state === "running" ? "audit-live" : "text-mute"}`}>
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="text-xl tracking-tight">{step.label}</p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">
                {step.state === "running" ? "En cours." : step.detail}
              </p>
            </div>
          </li>
        ))}
      </ol>
      {error ? (
        <p className="mt-8 text-sm" role="alert">
          {error}
        </p>
      ) : null}
      {done ? (
        <div className="audit-step mt-16 max-w-xl">
          <p className="display text-[clamp(3.4rem,8vw,6rem)]">{held}</p>
          <p className="mt-4 text-lg">
            {held === 1 ? "point tenu" : "points tenus"}
            {open ? `, ${open} à revoir` : ""}.
          </p>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-mute">
            Lecture de la page d&apos;accueil seulement. Ce n&apos;est pas un score Google, et ce n&apos;est pas tout le site.
          </p>
          <a href="/contact" className="mt-8 inline-block border-b border-ink pb-1 text-sm">
            Parler de ce site
          </a>
        </div>
      ) : null}
    </div>
  );
}
