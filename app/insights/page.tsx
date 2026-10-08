import type { Metadata } from "next";
import Link from "next/link";
import { moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Décider avant de construire",
  description:
    "Pages Byte Force pour remplacer Excel, quitter un SaaS, automatiser une entreprise ou moderniser une application.",
  alternates: { canonical: "/insights" },
  openGraph: openGraph(
    "/insights",
    "Décider avant de construire",
    "Pages Byte Force pour remplacer Excel, quitter un SaaS, automatiser une entreprise ou moderniser une application.",
  ),
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
      <section className="border-t border-line px-6 py-16 md:px-12">
        <h2 className="display max-w-[16ch] text-4xl">Quelle page lire</h2>
        <div className="mt-8 max-w-2xl space-y-4 leading-relaxed">
          <p>
            Il n&apos;y a pas un blog à côté. Les décisions publiées sont les six pages ci-dessous. Chacune traite un
            seul cas, et chacune mène au formulaire si le cas est le vôtre.
          </p>
          <p>
            Le fichier Excel se lit en premier quand plusieurs personnes écrivent dans la même feuille, sans savoir qui
            a la dernière version. La page dit aussi quand garder le tableur. Elle ne promet pas de le remplacer à tout
            prix.
          </p>
          <p>
            L&apos;abonnement se lit quand l&apos;outil du marché force le métier à contourner. Parfois la réponse est
            de renégocier, pas d&apos;écrire. L&apos;automatisation se lit quand le circuit passe encore par un message
            et une feuille : on commence par un processus, pas par « toute l&apos;entreprise ».
          </p>
          <p>
            Moderniser se lit quand une application existe déjà et que plus personne n&apos;ose la changer. Le but est
            de continuer dessus, pas de faire semblant qu&apos;un nouveau thème suffit. La page PME est pour une équipe
            qui a un circuit cassé, pas pour un ERP de groupe. La page entreprise est pour plusieurs services déjà
            outillés, quand l&apos;un bloque l&apos;autre.
          </p>
          <p>
            <Link href="/contact" className="border-b border-ink pb-1">
              Décrire le cas
            </Link>
          </p>
        </div>
      </section>
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
