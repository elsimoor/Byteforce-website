import type { Metadata } from "next";
import { LogicielMarocPage } from "@/components/logiciel-maroc/logiciel-maroc-page";
import { logicielMarocFaqs } from "@/components/logiciel-maroc/copy";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { ldJson, site } from "@/lib/site";

const path = "/developpement-logiciel-sur-mesure-maroc";
const meta = seoMeta[path];

export const metadata: Metadata = {
  title: { absolute: `${meta.title} | Byte Force` },
  description: meta.description,
  alternates: { canonical: path },
  openGraph: openGraph(path, meta.title, meta.description),
};

export default function DeveloppementLogicielSurMesureMarocPage() {
  const url = `${site.url}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Développement logiciel sur mesure Maroc", item: url },
        ],
      },
      {
        "@type": "Service",
        name: "Développement logiciel sur mesure au Maroc",
        url,
        description: meta.description,
        provider: { "@id": `${site.url}/#business` },
        areaServed: { "@type": "Country", name: "Maroc" },
        inLanguage: "fr",
      },
      {
        "@type": "FAQPage",
        mainEntity: logicielMarocFaqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
      <LogicielMarocPage />
    </>
  );
}
