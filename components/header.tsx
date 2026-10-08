"use client";

import { Icon } from "@/components/icon";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

const links = [
  { href: "/realisations", label: "Travaux", match: (path: string) => path.startsWith("/realisations") },
  { href: "/services", label: "Services", match: (path: string) => path.startsWith("/services") },
  { href: "/a-propos", label: "À propos", match: (path: string) => path.startsWith("/a-propos") },
  {
    href: "/insights",
    label: "Décisions",
    match: (path: string) => path.startsWith("/insights") || path.startsWith("/solutions"),
  },
];

export function Header() {
  const path = usePathname() ?? "";

  useLayoutEffect(() => {
    if (path === "/") document.documentElement.dataset.brand = "logo";
    else delete document.documentElement.dataset.brand;
  }, [path]);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-b border-outline-variant/30 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="flex items-center gap-3">
          <Image alt="Byte Force" className="h-9 w-9 object-cover" src="/logo.png" width={36} height={36} sizes="36px" />
          <span className="font-headline text-lg font-bold tracking-tight text-on-surface">ByteForce</span>
        </Link>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
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
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded bg-primary px-4 py-2 text-sm font-medium text-on-primary transition-all hover:bg-primary-container"
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
