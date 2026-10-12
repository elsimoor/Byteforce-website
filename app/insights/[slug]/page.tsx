import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article-view";
import { articles, getArticle } from "@/lib/articles";
import { openGraph } from "@/lib/open-graph";
import { metaFor } from "@/lib/seo-meta";

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
  return <ArticleView article={article} />;
}
