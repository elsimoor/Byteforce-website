import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article-view";
import { IaEntreprisePage } from "@/components/ia-entreprise/ia-entreprise-page";
import { iaEntrepriseFaqs } from "@/components/ia-entreprise/copy";
import { PrixSeoPage } from "@/components/prix-seo/prix-seo-page";
import { prixSeoFaqs } from "@/components/prix-seo/copy";
import { articles, getArticle } from "@/lib/articles";
import { openGraph } from "@/lib/open-graph";
import { metaFor } from "@/lib/seo-meta";
import { ldJson, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = true;

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const path = `/insights/${article.slug}`;
  const meta = metaFor(path, `${article.title} · Byte Force`, article.description);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, meta.title, meta.description),
  };
}

export default async function InsightArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  if (slug === "prix-seo-maroc") return <PrixSeoArticle articleDate={article.date} />;
  if (slug === "intelligence-artificielle-entreprise-maroc") return <IaEntrepriseArticle article={article} />;
  return <ArticleView article={article} />;
}

function IaEntrepriseArticle({ article }: { article: { date: string; h1: string; description: string } }) {
  const path = "/insights/intelligence-artificielle-entreprise-maroc";
  const url = `${site.url}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Décisions", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: article.h1, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: article.h1,
        description: article.description,
        inLanguage: "fr",
        datePublished: article.date,
        dateModified: article.date,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
          image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
          jobTitle: "Full-Stack Software Engineer",
          description:
            "Full-Stack Software Engineer with 4+ years of experience. Master's studies in computer science at Heriot-Watt University. Lead of Byte Force in Casablanca.",
          sameAs: ["https://www.linkedin.com/in/walid-moultamiss-56142b1aa"],
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 360, height: 360 },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: iaEntrepriseFaqs.map((item) => ({
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
      <IaEntreprisePage />
    </>
  );
}

function PrixSeoArticle({ articleDate }: { articleDate: string }) {
  const path = "/insights/prix-seo-maroc";
  const url = `${site.url}${path}`;
  const meta = metaFor(path, "Prix SEO Maroc", "");
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: "Combien coûte le SEO au Maroc ?", item: url },
        ],
      },
      {
        "@type": "Article",
        headline: "Combien coûte le SEO au Maroc ?",
        description: meta.description,
        inLanguage: "fr",
        datePublished: articleDate,
        dateModified: "2026-11-12",
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
          image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
          jobTitle: "Full-Stack Software Engineer",
          description:
            "Full-Stack Software Engineer with 4+ years of experience. Master's studies in computer science at Heriot-Watt University. Lead of Byte Force in Casablanca.",
          sameAs: ["https://www.linkedin.com/in/walid-moultamiss-56142b1aa"],
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 360, height: 360 },
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: prixSeoFaqs.map((item) => ({
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
      <PrixSeoPage />
    </>
  );
}
