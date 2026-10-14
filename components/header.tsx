"use client";

import { Icon } from "@/components/icon";
import { runSearch } from "@/lib/actions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const links = [
  { href: "/services", label: "Services", match: (path: string) => path.startsWith("/services") },
  { href: "/solutions", label: "Solutions", match: (path: string) => path.startsWith("/solutions") },
  { href: "/realisations", label: "Réalisations", match: (path: string) => path.startsWith("/realisations") },
  { href: "/insights", label: "Insights", match: (path: string) => path.startsWith("/insights") },
  { href: "/studio", label: "Studio", match: (path: string) => path.startsWith("/studio") },
  { href: "/contact", label: "Contact", match: (path: string) => path.startsWith("/contact") },
];

function SearchBand({ onClose }: { onClose: () => void }) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    input.current?.focus();
  }, []);

  return (
    <form id="site-search" role="search" action={runSearch} method="POST" className="border-t border-outline-variant/40">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center lg:px-12">
        <label className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-8">
          <span id="site-search-title" className="shrink-0 font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            Mot à chercher
          </span>
          <input
            ref={input}
            name="q"
            type="text"
            required
            placeholder="Service, ville, projet"
            className="h-12 min-w-0 flex-1 border-0 border-b border-on-surface bg-transparent text-xl tracking-tight text-on-surface outline-none placeholder:text-outline focus:border-primary"
          />
        </label>
        <div className="flex items-center gap-1">
          <button type="submit" className="btn min-h-12">
            Chercher
          </button>
          <button
            type="button"
            className="inline-flex min-h-12 items-center px-3 font-mono text-[15px] tracking-[0.12em] text-outline uppercase"
            onClick={onClose}
          >
            Fermer
          </button>
        </div>
      </div>
    </form>
  );
}

export function Header() {
  const path = usePathname() ?? "";
  const [searchOpen, setSearchOpen] = useState(false);
  const searchButton = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    if (path === "/") document.documentElement.dataset.brand = "logo";
    else delete document.documentElement.dataset.brand;
  }, [path]);

  useEffect(() => {
    setSearchOpen(false);
  }, [path]);

  useEffect(() => {
    if (!searchOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [searchOpen]);

  function closeSearch() {
    setSearchOpen(false);
    searchButton.current?.focus();
  }

  return (
    <>
    <header className={searchOpen ? "fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/30 bg-surface" : "fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md"}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 lg:px-12">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <img src="/logo.webp" alt="Byte Force" width={44} height={44} fetchPriority="high" className="h-11 w-11 object-cover" />
          <span className="font-headline text-lg font-bold tracking-tight text-on-surface">ByteForce</span>
        </Link>
        <nav className="hidden min-w-0 flex-1 items-center gap-5 md:flex xl:gap-8" aria-label="Principal">
          {links.map((link) => {
            const active = link.match(path);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "inline-flex min-h-11 items-center px-2 text-sm font-semibold whitespace-nowrap text-primary transition-colors"
                    : "inline-flex min-h-11 items-center px-2 text-sm whitespace-nowrap text-on-surface-variant transition-colors hover:text-on-surface"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <details className="relative md:hidden">
          <summary className="flex h-11 cursor-pointer list-none items-center px-3 font-mono text-[15px] font-bold tracking-[0.12em] text-on-surface uppercase [&::-webkit-details-marker]:hidden">
            Menu
          </summary>
          <nav className="absolute right-0 top-12 z-50 w-56 border border-outline-variant bg-surface py-2" aria-label="Principal">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className="flex min-h-11 items-center px-4 text-sm text-on-surface">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
        <div className="flex items-center gap-3">
          <button
            ref={searchButton}
            type="button"
            aria-label={searchOpen ? "Fermer la recherche" : "Rechercher"}
            aria-expanded={searchOpen}
            aria-controls="site-search"
            className="flex h-11 w-11 items-center justify-center border border-outline-variant/40 text-on-surface"
            onClick={() => (searchOpen ? closeSearch() : setSearchOpen(true))}
          >
            <Icon name="search" className="text-[20px]" />
          </button>
          {process.env.NODE_ENV === "development" ? (
            <Link
              href="/dashboard/login"
              aria-label="Client portal"
              className="flex h-11 w-11 items-center justify-center bg-primary"
            >
              <Icon name="person" className="text-[18px] text-on-primary" />
            </Link>
          ) : null}
        </div>
      </div>
      {searchOpen ? <SearchBand onClose={closeSearch} /> : null}
    </header>
    {searchOpen ? (
      <button type="button" aria-label="Fermer la recherche" className="search-shade" onClick={closeSearch} />
    ) : null}
    </>
  );
}
