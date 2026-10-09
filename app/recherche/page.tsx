import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { articles } from "@/lib/articles";
import { projects, services } from "@/lib/content";
import { moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { runSearch } from "@/lib/actions";

const title = "Recherche sur le site";
const description =
  "Chercher une page Byte Force : un service, un logiciel déjà livré, ou une décision avant de faire construire.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/recherche" },
  openGraph: openGraph("/recherche", `${title} · Byte Force`, description),
};

type Props = { searchParams: Promise<{ q?: string }> };

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();
  const pages = [
    ...services.map((service) => ({
      href: service.href ?? `/services/${service.slug}`,
      title: service.title,
      text: service.summary,
    })),
    ...projects.map((project) => ({
      href: `/realisations/${project.slug}`,
      title: project.title,
      text: `${project.description} ${project.city} ${project.year}`,
    })),
    ...articles.map((article) => ({
      href: `/insights/${article.slug}`,
      title: article.h1,
      text: article.description,
    })),
    ...moneyPages.map((page) => ({
      href: `/${page.path}`,
      title: page.h1,
      text: page.description,
    })),
  ];
  const matches = query
    ? pages.filter((page) => `${page.title} ${page.text}`.toLowerCase().includes(query)).slice(0, 40)
    : [];

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Recherche", path: "/recherche" }]} />
      <article className="px-6 py-16 md:px-12 md:py-24">
        <h1 className="display text-[clamp(2.8rem,7vw,5.5rem)]">Recherche.</h1>
        <form action={runSearch} method="post" className="mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Mot à chercher</span>
            <input
              name="q"
              type="search"
              defaultValue={q}
              aria-label="Mot à chercher"
              className="h-12 w-full rounded border border-line bg-paper px-4 text-sm"
            />
          </label>
          <button type="submit" className="h-12 rounded bg-ink px-5 text-sm text-paper">
            Chercher
          </button>
        </form>
        {query ? (
          <p className="mt-8 text-sm text-mute">
            {matches.length} page{matches.length === 1 ? "" : "s"} pour « {q.trim()} ».
          </p>
        ) : (
          <p className="mt-8 max-w-xl leading-relaxed">
            Le champ cherche dans les services, les fiches déjà publiées et les pages de décision. La recherche reste
            sur ce site.
          </p>
        )}
        <ul className="mt-6 max-w-2xl">
          {matches.map((page) => (
            <li key={page.href} className="border-t border-line py-4">
              <Link href={page.href} className="font-medium">
                {page.title}
              </Link>
              <p className="mt-1 text-sm text-mute">{page.text}</p>
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
}
