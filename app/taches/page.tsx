import type { Metadata } from "next";
import Link from "next/link";
import { moneyPages } from "@/lib/money";

export const metadata: Metadata = {
  title: { absolute: "Tâches du plan SEO | Byte Force" },
  description: "Suivi interne de l'architecture SEO. Page hors de l'index.",
  robots: { index: false, follow: false },
};

const groups = ["Logiciel", "Web", "SaaS", "Mobile", "Problème", "Audience", "Lieu"];

export default function TasksPage() {
  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <p className="text-sm text-mute">Hors index · plan SEO</p>
      <h1 className="display mt-4 max-w-[14ch] text-[clamp(3rem,7vw,6rem)]">Tâches.</h1>
      <p className="mt-6 max-w-xl text-lg">
        {moneyPages.length} pages suivent l&apos;arbre : logiciel, problèmes, audiences, lieux. Les réalisations
        publiées restent sur <Link href="/realisations">/realisations</Link>. YourSmile n&apos;est pas dans le catalogue.
      </p>
      {groups.map((group) => (
        <section key={group} className="mt-16">
          <h2 className="text-sm uppercase tracking-wide text-mute">{group}</h2>
          <ol className="mt-4">
            {moneyPages
              .filter((page) => page.group === group)
              .map((page) => (
                <li key={page.path} className="border-t border-line">
                  <Link href={`/${page.path}`} className="grid gap-2 py-5 md:grid-cols-12 md:items-baseline">
                    <span className="md:col-span-5">{page.h1}</span>
                    <span className="text-sm text-mute md:col-span-5">/{page.path}</span>
                    <span className="text-sm md:col-span-2">Fait</span>
                  </Link>
                </li>
              ))}
          </ol>
        </section>
      ))}
    </main>
  );
}
