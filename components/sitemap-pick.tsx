"use client";

import { useEffect, useState } from "react";
import { writeLot } from "@/lib/audit/saved";

const limit = 10;

export function SitemapPick({ origin }: { origin: string }) {
  const [pages, setPages] = useState<string[]>([]);
  const [truncated, setTruncated] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [state, setState] = useState<"loading" | "ready" | "empty" | "error">("loading");
  const [message, setMessage] = useState("");
  const [blocked, setBlocked] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    async function load() {
      try {
        const response = await fetch("/api/audit/sitemap", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ url: origin }),
          signal: controller.signal,
        });
        const payload = (await response.json().catch(() => null)) as { pages?: string[]; truncated?: boolean; error?: string } | null;
        if (cancelled) return;
        if (!response.ok) {
          setMessage(payload?.error || "Le sitemap n'a pas pu être lu.");
          setState("error");
          return;
        }
        const listed = Array.isArray(payload?.pages) ? payload.pages.filter((page) => typeof page === "string") : [];
        setPages(listed);
        setTruncated(Boolean(payload?.truncated));
        setState(listed.length ? "ready" : "empty");
      } catch {
        if (!cancelled) {
          setMessage("Le sitemap n'a pas pu être lu.");
          setState("error");
        }
      }
    }

    void load();
    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [origin]);

  function toggle(href: string) {
    setSelected((current) => {
      if (current.includes(href)) return current.filter((item) => item !== href);
      if (current.length >= limit) return current;
      return [...current, href];
    });
  }

  function selectAll() {
    setSelected(pages.slice(0, limit));
  }

  function openLot() {
    if (!selected.length) return;
    const id = writeLot(selected);
    const href = `/audit/lot?id=${encodeURIComponent(id)}`;
    const opened = window.open(href, "_blank");
    if (!opened) {
      setBlocked(href);
      return;
    }
    opened.opener = null;
    setBlocked("");
  }

  return (
    <section className="mt-14" aria-labelledby="audit-sitemap">
      <h2 id="audit-sitemap" className="font-headline text-[2rem] font-extrabold tracking-[-0.03em] text-[#14161F]">
        Dix pages, d&apos;un coup
      </h2>
      <div className="mt-5 rounded-2xl border border-[#E2E5F0] bg-white p-6 sm:p-7">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="max-w-[35rem] text-sm leading-relaxed text-[#4A4F63]">
            Auditez jusqu&apos;à 10 pages du sitemap en une fois. Cochez celles que vous voulez : elles s&apos;ouvrent dans un nouvel onglet.
          </p>
          {state === "ready" ? (
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center rounded-full bg-[#E8ECFD] px-3 py-1 text-[13px] font-semibold text-primary">
                {selected.length} / {limit}
              </span>
              <button type="button" onClick={selectAll} className="rounded-[10px] border border-[#C9CEE0] bg-white px-4 py-2.5 text-sm font-semibold">
                Tout cocher
              </button>
            </div>
          ) : null}
        </div>

        {state === "loading" ? <p className="mt-4 text-sm text-[#4A4F63]">Lecture du sitemap.</p> : null}
        {state === "empty" ? <p className="mt-4 text-sm leading-relaxed text-[#4A4F63]">Ce sitemap ne liste pas de pages du même site.</p> : null}
        {state === "error" ? (
          <p className="mt-4 text-sm" role="alert">
            {message}
          </p>
        ) : null}
        {truncated ? <p className="mt-4 text-sm text-[#4A4F63]">Le sitemap en contient davantage. Voici les 60 premières adresses.</p> : null}

        {state === "ready" ? (
          <>
            <ul className="mt-4 max-h-[340px] overflow-y-auto rounded-xl border border-[#EEF0F6]">
              {pages.map((href) => {
                const checked = selected.includes(href);
                let path = href;
                try {
                  const parsed = new URL(href);
                  path = parsed.pathname === "/" ? parsed.hostname : parsed.pathname;
                } catch {
                  path = href;
                }
                return (
                  <li key={href} className="border-b border-[#EEF0F6] last:border-b-0">
                    <label className="flex min-h-11 cursor-pointer items-center gap-3.5 px-4 py-3">
                      <input
                        type="checkbox"
                        className="h-5 w-5 shrink-0 accent-primary"
                        checked={checked}
                        disabled={!checked && selected.length >= limit}
                        onChange={() => toggle(href)}
                      />
                      <span className="min-w-0">
                        <span className="block truncate font-semibold text-[#14161F]">{path}</span>
                        <span className="mt-0.5 block truncate font-mono text-xs text-[#4A4F63]">{href}</span>
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              <button type="button" onClick={openLot} disabled={!selected.length} className="rounded-[10px] bg-primary px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40">
                Ouvrir ces pages
              </button>
              <a href={`/audit/json?url=${encodeURIComponent(origin)}`} className="rounded-[10px] border border-[#C9CEE0] px-4 py-2.5 text-sm font-semibold text-[#14161F]">
                Exporter en JSON
              </a>
            </div>
            {blocked ? (
              <p className="mt-4 text-sm">
                Le navigateur a bloqué l&apos;onglet.{" "}
                <a href={blocked} target="_blank" rel="noreferrer" className="border-b border-[#14161F]">
                  Ouvrir la sélection
                </a>
              </p>
            ) : null}
          </>
        ) : null}
      </div>
    </section>
  );
}
