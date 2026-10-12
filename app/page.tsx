import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const home = seoMeta["/"];
const homeFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qu'est-ce qu'un logiciel sur mesure ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un logiciel écrit pour les rôles et les règles d'une entreprise, plutôt qu'un produit du marché que l'équipe doit contourner.",
      },
    },
    {
      "@type": "Question",
      name: "Combien coûte un logiciel sur mesure au Maroc ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il n'y a pas de grille publique. Le montant suit les écrans, les rôles et les branchements. Le premier échange de trente minutes est gratuit.",
      },
    },
    {
      "@type": "Question",
      name: "Combien de temps prend le développement ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Un audit tient en quelques jours. Une première version tient souvent en plusieurs semaines. La date se pose quand le périmètre est écrit.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: { absolute: home.title },
  description: home.description,
  alternates: { canonical: `${site.url}/` },
  openGraph: openGraph("/", home.title, home.description),
};

export default function HomePage() {
  return (
    <main data-home>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaq) }} />
      <StudioHome />
    </main>
  );
}
