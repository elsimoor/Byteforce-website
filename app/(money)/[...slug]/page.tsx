import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AutomatisationEntreprisePage } from "@/components/automatisation-entreprise/automatisation-entreprise-page";
import { automatisationFaqs } from "@/components/automatisation-entreprise/copy";
import { CommercialView } from "@/components/commercial-view";
import { getMoneyPage, moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { metaFor } from "@/lib/seo-meta";
import { ldJson, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return moneyPages.map((page) => ({ slug: page.path.split("/") }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getMoneyPage(slug.join("/"));
  if (!page) return {};
  const meta = metaFor(`/${page.path}`, page.title, page.description);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: `/${page.path}` },
    openGraph: openGraph(`/${page.path}`, meta.title, meta.description),
    robots: { index: true, follow: true },
  };
}

export default async function MoneyRoute({ params }: Props) {
  const { slug } = await params;
  const page = getMoneyPage(slug.join("/"));
  if (!page) notFound();
  if (page.path === "solutions/automatisation-entreprise") return <AutomatisationRoute page={page} />;
  return <CommercialView page={page} />;
}

function AutomatisationRoute({ page }: { page: NonNullable<ReturnType<typeof getMoneyPage>> }) {
  const url = `${site.url}/${page.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Solutions", item: `${site.url}/solutions` },
          { "@type": "ListItem", position: 3, name: "Automatisation d'entreprise", item: url },
        ],
      },
      {
        "@type": "Article",
        headline: "Automatisation d'entreprise au Maroc : fini la ressaisie entre vos outils",
        description: page.description,
        datePublished: "2026-10-08",
        dateModified: "2026-10-08",
        image: `${site.url}/opengraph-image.jpg`,
        url,
        author: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
          image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
          jobTitle: "Full-Stack Software Engineer",
          description:
            "Full-Stack Software Engineer with 4+ years of experience. Master's studies in computer science at Heriot-Watt University.",
          sameAs: ["https://www.linkedin.com/in/walid-moultamiss-56142b1aa"],
        },
        publisher: { "@id": `${site.url}/#business` },
        inLanguage: "fr-MA",
      },
      {
        "@type": "FAQPage",
        mainEntity: automatisationFaqs.map((item) => ({
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
      <AutomatisationEntreprisePage />
    </>
  );
}
