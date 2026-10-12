"use client";

import { Icon } from "@/components/icon";
import { getImageProps } from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";

const links = [
  { href: "/services", label: "Services", match: (path: string) => path.startsWith("/services") },
  { href: "/solutions", label: "Solutions", match: (path: string) => path.startsWith("/solutions") },
  { href: "/realisations", label: "Réalisations", match: (path: string) => path.startsWith("/realisations") },
  { href: "/insights", label: "Insights", match: (path: string) => path.startsWith("/insights") },
  { href: "/studio", label: "Studio", match: (path: string) => path.startsWith("/studio") },
  { href: "/contact", label: "Contact", match: (path: string) => path.startsWith("/contact") },
];

function logoProps() {
  return getImageProps({
    alt: "Byte Force",
    src: "/logo.png",
    width: 44,
    height: 44,
    sizes: "44px",
    priority: true,
    fetchPriority: "high",
  }).props;
}

function NavSearch() {
  const dialog = useRef<HTMLDialogElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const path = usePathname();

  useEffect(() => {
    dialog.current?.close();
  }, [path]);

  return (
    <>
      <button
        type="button"
        aria-label="Rechercher"
        className="flex h-10 w-10 items-center justify-center rounded border border-outline-variant/40 text-on-surface"
        onClick={() => {
          dialog.current?.showModal();
          input.current?.focus();
        }}
      >
        <Icon name="search" className="text-[20px]" />
      </button>
      <dialog
        ref={dialog}
        className="m-auto w-[min(36rem,calc(100%-2rem))] border border-line bg-surface p-6 text-on-surface backdrop:bg-black/40"
        onClick={(event) => {
          if (event.target === dialog.current) dialog.current.close();
        }}
      >
        <form action="/recherche" method="get" className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="font-headline text-lg font-bold">Recherche</h2>
            <button type="button" className="text-sm text-on-surface-variant" onClick={() => dialog.current?.close()}>
              Fermer
            </button>
          </div>
          <label>
            <span className="sr-only">Mot à chercher</span>
            <input
              ref={input}
              name="q"
              type="search"
              required
              placeholder="Service, ville, projet…"
              className="h-12 w-full rounded border border-line bg-paper px-4 text-sm"
            />
          </label>
          <button type="submit" className="h-12 rounded bg-primary px-5 text-sm font-medium text-on-primary">
            Chercher
          </button>
        </form>
      </dialog>
    </>
  );
}

export function Header() {
  const path = usePathname() ?? "";
  const logo = logoProps();

  useLayoutEffect(() => {
    if (path === "/") document.documentElement.dataset.brand = "logo";
    else delete document.documentElement.dataset.brand;
  }, [path]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
      <link rel="preload" as="image" href={logo.src} fetchPriority="high" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <img {...logo} className="h-11 w-11 object-cover" alt="Byte Force" />
          <span className="font-headline text-lg font-bold tracking-tight text-on-surface">ByteForce</span>
        </Link>
        <nav className="hidden items-center gap-5 md:flex xl:gap-8" aria-label="Principal">
          {links.map((link) => {
            const active = link.match(path);
            return (
              <Link
                key={link.label}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "text-sm font-semibold text-primary transition-colors"
                    : "text-sm text-on-surface-variant transition-colors hover:text-on-surface"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-4">
          <NavSearch />
          <Link
            href="/contact"
            className="hidden items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-all hover:bg-primary-container xl:inline-flex"
          >
            Parler d&apos;un projet →
          </Link>
          {process.env.NODE_ENV === "development" ? (
            <Link
              href="/dashboard/login"
              aria-label="Client portal"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-primary"
            >
              <Icon name="person" className="text-[18px] text-on-primary" />
            </Link>
          ) : null}
        </div>
      </div>
    </header>
  );
}
