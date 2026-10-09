import type { Metadata } from "next";
import { Icon } from "@/components/icon";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page introuvable",
  description: "Cette adresse ne correspond à aucune page de Byte Force.",
  robots: { index: false, follow: false },
};

const links = [
  { href: "/realisations", label: "Travaux" },
  { href: "/services", label: "Services" },
  { href: "/studio", label: "À propos" },
  { href: "/insights", label: "Décisions" },
];

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col justify-center px-6 py-20 lg:px-12">
      <p className="font-mono text-xs font-bold tracking-widest text-primary uppercase">404</p>
      <h1 className="mt-3 max-w-3xl font-headline text-4xl font-black tracking-tight text-on-surface sm:text-6xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="mt-4 max-w-xl text-lg text-on-surface-variant">
        L&apos;adresse est fausse, ou la page a été déplacée. Le studio, les travaux et le formulaire sont toujours là.
      </p>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
        >
          Retour à l&apos;accueil
          <Icon name="arrow_forward" className="text-base" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded bg-surface-container px-6 py-3.5 text-sm font-medium text-on-surface"
        >
          Parler d&apos;un projet
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
