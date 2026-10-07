import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "This address does not match a page on Byte Force.",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/realisations", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function NotFound() {
  return (
    <main lang="en" className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-6 py-20 lg:px-12">
      <p className="font-mono text-xs font-bold tracking-widest text-primary uppercase">404</p>
      <h1 className="mt-3 max-w-3xl font-headline text-4xl font-black tracking-tight text-on-surface sm:text-6xl">
        This page does not exist.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-on-surface-variant">
        The address is wrong, or the page was moved. The studio, the work, and the contact form are still here.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
        >
          Back to the homepage
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded bg-surface-container px-6 py-3.5 text-sm font-medium text-on-surface"
        >
          Start a project
        </Link>
      </div>
      <ul className="mt-10 flex flex-wrap gap-6 text-sm font-semibold text-primary">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
