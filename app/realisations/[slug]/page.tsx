import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCity, slugify } from "@/lib/catalog";
import { getProject, getService, projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { projectNotes } from "@/lib/project-notes";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

const countryMark: Record<string, string> = {
  France: "FR",
  Maroc: "MA",
  Canada: "CA",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const path = `/realisations/${project.slug}`;
  const title = `${project.title} · Byte Force`;
  const description = project.description;
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: path },
    openGraph: openGraph(path, title, description),
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const place = getCity(slugify(project.city));
  const notes = projectNotes[project.slug] ?? [];
  const mark = countryMark[project.country] ?? project.country;
  const pageUrl = `${site.url}/realisations/${project.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    inLanguage: "fr",
    datePublished: project.year,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    image: project.shot ? `${site.url}${project.shot}` : `${site.url}/opengraph-image`,
    author: { "@type": "Organization", name: site.name, url: site.url },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
      logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
    },
    about: { "@type": "CreativeWork", name: project.title, url: project.url },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="relative flex min-h-[78svh] flex-col justify-between overflow-hidden bg-ink px-6 py-10 text-paper md:px-12 md:py-14">
        <span className="plate-mark" aria-hidden="true">
          {mark}
        </span>
        <p className="relative text-sm">
          <Link href="/realisations">Travaux</Link>
          {" · "}
          <Link href={`/categories/${slugify(project.category)}`}>{project.category}</Link>
          {" · "}
          <Link href={place?.path ?? `/villes/${slugify(project.city)}`}>{project.city}</Link>
          {" · "}
          {project.year}
        </p>
        <h1 className="relative display max-w-[12ch] text-[clamp(3.4rem,8vw,7.5rem)]">{project.title}</h1>
      </header>
      <section className="grid gap-12 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-7">
          {project.shot ? (
            <img
              src={project.shot}
              alt={`${project.title}, capture du site en ligne`}
              className="mb-8 aspect-[16/10] w-full rounded-lg object-cover object-top"
            />
          ) : null}
          <p className="text-2xl leading-snug md:text-3xl">{project.description}</p>
          {project.problem ? (
            <div className="mt-10 space-y-4 text-base leading-relaxed">
              <p>
                <span className="font-semibold">Problème. </span>
                {project.problem}
              </p>
              <p>
                <span className="font-semibold">Solution. </span>
                {project.solution}
              </p>
              <p>
                <span className="font-semibold">Résultat. </span>
                {project.result}
              </p>
            </div>
          ) : null}
          {notes.length > 0 ? (
            <div className="mt-10 space-y-4 text-base leading-relaxed">
              {notes.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          ) : null}
        </div>
        <div className="text-sm md:col-span-4 md:col-start-9">
          <p>
            {project.city}, {project.country}
          </p>
          <p className="mt-6">
            <a href={project.url} rel="noopener noreferrer" className="border-b border-ink pb-1">
              Voir le site
            </a>
          </p>
          {project.pages.length > 0 ? (
            <ul className="mt-8 space-y-2">
              {project.pages.map((page) => (
                <li key={page.href}>
                  <a href={page.href} rel="noopener noreferrer" className="text-mute hover:text-ink">
                    {page.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
          {service ? (
            <p className="mt-10">
              <Link href={service.href ?? `/services/${service.slug}`} className="border-b border-ink pb-1">
                {service.title}
              </Link>
            </p>
          ) : null}
        </div>
      </section>
    </main>
  );
}
