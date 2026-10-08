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
    <section className="mt-24 border-t border-line pt-12" aria-labelledby="audit-sitemap">
      <p className="font-mono text-xs tracking-wide text-mute">Sitemap</p>
      <h2 id="audit-sitemap" className="display mt-4 max-w-[16ch] text-[clamp(2.4rem,5vw,4.2rem)]">
        Dix pages, d&apos;un coup.
      </h2>
      <p className="mt-6 max-w-xl text-lg leading-relaxed">
        Vous pouvez auditer jusqu&apos;à 10 pages du sitemap en une fois. Cochez celles que vous voulez : elles s&apos;ouvrent dans un nouvel onglet.
      </p>

      {state === "loading" ? <p className="mt-8 text-sm text-mute">Lecture du sitemap.</p> : null}
      {state === "empty" ? <p className="mt-8 max-w-xl text-sm leading-relaxed text-mute">Ce sitemap ne liste pas de pages du même site.</p> : null}
      {state === "error" ? (
        <p className="mt-8 text-sm" role="alert">
          {message}
        </p>
      ) : null}

      {state === "ready" ? (
        <>
          {truncated ? <p className="mt-8 max-w-xl text-sm text-mute">Le sitemap en contient davantage. Voici les 60 premières adresses.</p> : null}
          <p className="mt-8 font-mono text-xs text-mute">
            {selected.length} / {limit}
            {selected.length >= limit ? " · 10 pages maximum." : ""}
          </p>
          <ul className="mt-4 max-h-[28rem] overflow-y-auto border-t border-line">
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
                <li key={href} className="border-b border-line">
                  <label className="flex cursor-pointer items-baseline gap-4 py-3">
                    <input
                      type="checkbox"
                      className="mt-1 shrink-0 accent-ink"
                      checked={checked}
                      disabled={!checked && selected.length >= limit}
                      onChange={() => toggle(href)}
                    />
                    <span className="min-w-0">
                      <span className="block truncate">{path}</span>
                      <span className="mt-1 block truncate font-mono text-xs text-mute">{href}</span>
                    </span>
                  </label>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            onClick={openLot}
            disabled={!selected.length}
            className="mt-8 border-b border-ink pb-1 text-sm disabled:border-line disabled:text-mute"
          >
            Ouvrir ces pages
          </button>
          {blocked ? (
            <p className="mt-4 text-sm">
              Le navigateur a bloqué l&apos;onglet.{" "}
              <a href={blocked} target="_blank" rel="noreferrer" className="border-b border-ink">
                Ouvrir la sélection
              </a>
            </p>
          ) : null}
        </>
      ) : null}
    </section>
  );
}
