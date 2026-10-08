"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { overallScore } from "@/lib/audit/score";
import { readAudits, readLot, type SavedAudit } from "@/lib/audit/saved";
import { AuditRun } from "@/components/audit-run";

type TabStatus = "running" | "error";

function labelFor(url: string) {
  try {
    const parsed = new URL(url);
    return parsed.pathname === "/" ? parsed.hostname : parsed.pathname;
  } catch {
    return url;
  }
}

function tabDomId(url: string) {
  return `audit-tab-${encodeURIComponent(url)}`;
}

export function AuditTabs({ lotId }: { lotId: string }) {
  const [ready, setReady] = useState(false);
  const [pages, setPages] = useState<string[]>([]);
  const [closed, setClosed] = useState<string[]>([]);
  const [activeUrl, setActiveUrl] = useState("");
  const [saved, setSaved] = useState<Record<string, SavedAudit>>({});
  const [status, setStatus] = useState<Record<string, TabStatus>>({});

  useEffect(() => {
    const lot = readLot(lotId);
    setPages(lot?.pages ?? []);
    setActiveUrl(lot?.pages[0] ?? "");
    setSaved(readAudits());
    setReady(true);

    const onSave = (event: Event) => {
      const url = (event as CustomEvent<{ url?: string }>).detail?.url;
      setSaved(readAudits());
      if (!url) return;
      setStatus((current) => {
        if (!current[url]) return current;
        const next = { ...current };
        delete next[url];
        return next;
      });
    };
    const onStatus = (event: Event) => {
      const detail = (event as CustomEvent<{ url?: string; status?: TabStatus }>).detail;
      if (!detail?.url || (detail.status !== "running" && detail.status !== "error")) return;
      setStatus((current) => ({ ...current, [detail.url as string]: detail.status as TabStatus }));
    };
    window.addEventListener("byteforce-audit-saved", onSave);
    window.addEventListener("byteforce-audit-status", onStatus);
    return () => {
      window.removeEventListener("byteforce-audit-saved", onSave);
      window.removeEventListener("byteforce-audit-status", onStatus);
    };
  }, [lotId]);

  const tabs = useMemo(
    () =>
      pages
        .filter((url) => !closed.includes(url))
        .map((url) => {
          const live = status[url] === "running";
          const entry = saved[url];
          return {
            url,
            label: labelFor(url),
            score: !live && entry ? overallScore(entry.steps) : null,
            error: status[url] === "error",
          };
        }),
    [pages, closed, saved, status],
  );

  const active = tabs.find((tab) => tab.url === activeUrl) ?? tabs[0];

  function closeTab(url: string) {
    const remaining = tabs.filter((tab) => tab.url !== url);
    setClosed((current) => [...current, url]);
    if (active?.url === url) setActiveUrl(remaining[0]?.url ?? "");
  }

  if (!ready) return <p className="mt-10 text-sm text-mute">Ouverture.</p>;

  if (!pages.length) {
    return (
      <p className="mt-10 max-w-xl text-sm leading-relaxed">
        Cette sélection n&apos;est plus dans ce navigateur.{" "}
        <Link href="/audit" className="border-b border-ink">
          Revenir à l&apos;audit
        </Link>
      </p>
    );
  }

  if (!tabs.length) {
    return (
      <p className="mt-10 text-sm">
        Les onglets sont fermés.{" "}
        <button type="button" onClick={() => setClosed([])} className="border-b border-ink">
          Les rouvrir
        </button>
      </p>
    );
  }

  return (
    <div className="mt-12 border border-line bg-paper">
      <div className="audit-tablist flex items-end gap-3 overflow-x-auto px-3 pt-3" role="tablist" aria-label="Pages du sitemap">
        {tabs.map((tab) => {
          const on = tab.url === active?.url;
          return (
            <div key={tab.url} className="audit-tab" data-active={on ? "true" : "false"} role="presentation">
              <button
                type="button"
                role="tab"
                id={tabDomId(tab.url)}
                aria-selected={on}
                aria-controls="audit-tab-panel"
                onClick={() => setActiveUrl(tab.url)}
                className="flex min-w-[9rem] max-w-[16rem] items-center gap-3 py-2.5 pr-8 pl-4 text-left"
              >
                <span className={`h-2.5 w-2.5 shrink-0 ${on ? "bg-ink" : "border border-ink"}`} aria-hidden="true" />
                <span className={`min-w-0 flex-1 truncate text-sm ${on ? "" : "text-mute"}`}>{tab.label}</span>
                {tab.score !== null ? (
                  <span className="shrink-0 font-mono text-xs">{tab.score}</span>
                ) : tab.error ? (
                  <span className="shrink-0 font-mono text-xs text-mute">—</span>
                ) : (
                  <span className="audit-live inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                className="absolute top-1.5 right-2 px-1 text-sm text-mute"
                aria-label={`Fermer ${tab.label}`}
                onClick={() => closeTab(tab.url)}
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
      <div id="audit-tab-panel" role="tabpanel" aria-labelledby={active ? tabDomId(active.url) : undefined} className="relative z-0 bg-paper px-6 pb-16 md:px-10">
        {tabs.map((tab) => (
          <div key={tab.url} hidden={tab.url !== active?.url}>
            <AuditRun url={tab.url} pick={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
