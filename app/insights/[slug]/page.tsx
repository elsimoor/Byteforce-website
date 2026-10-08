import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleView } from "@/components/article-view";
import { articles, getArticle } from "@/lib/articles";
import { openGraph } from "@/lib/open-graph";

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
  const title = `${article.title} · Byte Force`;
  return {
    title: { absolute: title },
    description: article.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, title, article.description),
  };
}

export default async function InsightArticle({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <ArticleView article={article} />;
}
