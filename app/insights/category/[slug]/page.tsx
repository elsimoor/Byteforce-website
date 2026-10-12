import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { articlesIn, getInsightCategory, insightCategories } from "@/lib/insight-categories";
import { openGraph } from "@/lib/open-graph";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return insightCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getInsightCategory(slug);
  if (!category) return {};
  const path = `/insights/category/${category.slug}`;
  return {
    title: { absolute: category.title },
    description: category.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, category.title, category.description),
  };
}

export default async function InsightCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getInsightCategory(slug);
  if (!category) notFound();
  const list = articlesIn(category);
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Décisions", path: "/insights" },
          { name: category.h1, path: `/insights/category/${category.slug}` },
        ]}
      />
      <header className="px-6 pb-12 pt-16 md:px-12 md:pt-24">
        <nav aria-label="Fil d'Ariane" className="text-sm text-mute">
          <Link href="/">Accueil</Link>
          {" · "}
          <Link href="/insights">Décisions</Link>
          {" · "}
          {category.h1}
        </nav>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">{category.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">{category.lede}</p>
        <p className="mt-6">
          <Link href={category.offer.href} className="border-b border-ink">
            {category.offer.label}
          </Link>
        </p>
      </header>
      <ol className="border-t border-line">
        {list.map((article, index) => (
          <li key={article.slug} className="border-b border-line">
            <Link href={`/insights/${article.slug}`} className="grid gap-3 px-6 py-8 md:grid-cols-12 md:px-12">
              <span className="text-sm text-mute md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-2xl md:col-span-6">{article.h1}</span>
              <span className="text-sm text-mute md:col-span-5">{article.description}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="px-6 py-16 md:px-12">
        <Link href="/insights" className="border-b border-ink">
          Toutes les décisions
        </Link>
      </p>
    </main>
  );
}
