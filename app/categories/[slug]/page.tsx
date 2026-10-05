import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/lib/catalog";
import { getPageMeta } from "@/lib/db";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  const meta = getPageMeta(category.path);
  const title = meta?.meta_title || `${category.title} · Byte Force`;
  const description = meta?.meta_description || category.description;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: category.path },
    openGraph: { title, description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  return (
    <main>
      <header className="px-6 pb-12 pt-16 md:px-12 md:pt-24">
        <p className="text-sm text-mute">
          <Link href="/realisations">Travaux</Link>
        </p>
        <h1 className="display mt-6 text-[clamp(3.2rem,8vw,7rem)]">{category.title}</h1>
        <p className="mt-8 max-w-md text-mute">{category.description}</p>
      </header>
      <ol className="border-t border-line">
        {category.projects.map((project) => (
          <li key={project.slug} className="border-b border-line">
            <Link
              href={`/realisations/${project.slug}`}
              className="index-row flex items-baseline justify-between gap-6 px-6 py-8 md:px-12"
            >
              <span className="display text-4xl md:text-6xl">{project.title}</span>
              <span className="text-sm text-mute">
                {project.city} · {project.year}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
