import type { Metadata } from "next";
import Link from "next/link";
import { moneyPages } from "@/lib/money";

export const metadata: Metadata = {
  title: "Décider avant de construire",
  description:
    "Pages Byte Force pour remplacer Excel, quitter un SaaS, automatiser une entreprise ou moderniser une application.",
  alternates: { canonical: "/insights" },
  openGraph: {
    locale: "fr_FR",
    url: "/insights",
    title: "Décider avant de construire",
    description:
      "Pages Byte Force pour remplacer Excel, quitter un SaaS, automatiser une entreprise ou moderniser une application.",
  },
};

const groups = ["Problème", "Audience"];

export default function InsightsPage() {
  return (
    <main>
      <header className="px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <h1 className="display max-w-[14ch] text-[clamp(3.2rem,8vw,7rem)]">Décider.</h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed">
          Pour quelqu&apos;un qui a déjà le problème : un tableur, une pile d&apos;abonnements, un processus manuel, ou
          une application que plus personne ne veut toucher.
        </p>
      </header>
      {groups.map((group) => (
        <section key={group} className="border-t border-line">
          <h2 className="px-6 pt-10 text-sm text-mute md:px-12">{group === "Problème" ? "Problème" : "Pour qui"}</h2>
          <ul>
            {moneyPages
              .filter((page) => page.group === group)
              .map((page) => (
                <li key={page.path} className="border-t border-line">
                  <Link href={`/${page.path}`} className="block px-6 py-6 md:px-12">
                    <span className="text-xl">{page.h1}</span>
                    <span className="mt-2 block max-w-2xl text-sm leading-relaxed text-mute">{page.description}</span>
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
