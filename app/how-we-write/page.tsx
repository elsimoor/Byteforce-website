import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";

const title = "Comment les pages sont écrites";
const description =
  "Les pages Byte Force partent des logiciels déjà livrés et des faits du studio à Casablanca. Aucun prix n'est inventé.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/how-we-write" },
  openGraph: openGraph("/how-we-write", `${title} · Byte Force`, description),
};

export default function HowWeWritePage() {
  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Écriture", path: "/how-we-write" }]} />
      <article className="mx-auto max-w-2xl px-6 py-16 md:px-12 md:py-24">
        <h1 className="display text-[clamp(2.6rem,6vw,4.5rem)]">Comment les pages sont écrites.</h1>
        <p className="mt-8 text-lg leading-relaxed">
          Une page décrit un logiciel, un site ou une application déjà en ligne, ou une question qu&apos;un client pose
          avant de faire construire. Le texte vient du dossier du projet : la ville, l&apos;année, et ce qui est publié.
          Quand le dossier n&apos;a pas une image, la fiche le dit.
        </p>
        <p className="mt-6 leading-relaxed">
          Aucun prix n&apos;est écrit, parce que le montant dépend du travail. Aucun avis client n&apos;est ajouté
          s&apos;il n&apos;est pas dans le dossier. La page est en français, sauf quand elle s&apos;adresse aussi à un
          lecteur anglophone sur la même adresse.
        </p>
        <p className="mt-6 leading-relaxed">
          Une correction remplace la phrase fausse. La date du plan du site change quand la page change. Pour parler
          d&apos;un projet, la porte est la page contact.
        </p>
        <p className="mt-10">
          <Link href="/contact" className="border-b border-ink pb-1">
            Parler d&apos;un projet
          </Link>
        </p>
      </article>
    </main>
  );
}
