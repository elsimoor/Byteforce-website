import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectJsonLd } from "@/components/json-ld";
import { getCity, slugify } from "@/lib/catalog";
import { getProject, getService, projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { projectNotes, projectTitles } from "@/lib/project-notes";
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
  const title = `${projectTitles[project.slug] ?? project.title} · Byte Force`;
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
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Travaux", item: `${site.url}/realisations` },
          { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
        ],
      },
      {
        "@type": "Article",
        "@id": pageUrl,
        headline: project.title,
        description: project.description,
        inLanguage: "fr",
        datePublished: project.year,
        dateModified: project.year,
        url: pageUrl,
        mainEntityOfPage: pageUrl,
        image: project.shot ? `${site.url}${project.shot}` : `${site.url}/opengraph-image`,
        author: { "@id": `${site.url}/#business` },
        publisher: { "@id": `${site.url}/#business` },
        about: { "@type": "CreativeWork", name: project.title, url: project.url },
      },
    ],
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
          <Link href={place?.path ?? `/villes/${slugify(project.city)}`}>Ville de {project.city}</Link>
          {" · "}
          <time dateTime={`${project.year}-01-01`}>{project.year}</time>
        </p>
        <h1 className="relative display max-w-[12ch] text-[clamp(3.4rem,8vw,7.5rem)]">{project.title}</h1>
      </header>
      <section className="grid gap-12 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-7">
          {project.shot && project.screens?.[0]?.src !== project.shot ? (
            <Image
              src={project.shot}
              alt={`${project.title}, capture du site en ligne`}
              width={400}
              height={250}
              priority
              sizes="(min-width: 768px) 58vw, 100vw"
              className="mb-8 aspect-[16/10] w-full rounded-lg object-cover object-top"
            />
          ) : null}
          {project.screens && project.screens.length > 0 ? (
            <div className="mb-10">
              <p className="font-mono text-xs tracking-wide text-mute">Captures de l&apos;application</p>
              <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {project.screens.map((screen, index) => (
                  <li key={screen.src}>
                    <Image
                      src={screen.src}
                      alt={`${project.title}, capture ${index + 1} de l'application Android`}
                      width={screen.width > 400 ? 400 : screen.width}
                      height={
                        screen.width > 400
                          ? Math.max(1, Math.round((screen.height * 400) / screen.width))
                          : screen.height
                      }
                      priority={index === 0}
                      sizes="208px"
                      className="h-auto w-full rounded-lg"
                    />
                  </li>
                ))}
              </ul>
            </div>
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
          <ProjectJsonLd project={project} />
          <dl className="space-y-4">
            <div>
              <dt className="font-mono text-xs text-mute">Lieu</dt>
              <dd className="mt-1">
                {project.city}, {project.country}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-mute">Année affichée</dt>
              <dd className="mt-1">
                <time dateTime={`${project.year}-01-01`}>{project.year}</time>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-mute">Type</dt>
              <dd className="mt-1">{project.category}</dd>
            </div>
            {project.problem ? (
              <div>
                <dt className="font-mono text-xs text-mute">Problème</dt>
                <dd className="mt-1">{project.problem}</dd>
              </div>
            ) : null}
            {project.solution ? (
              <div>
                <dt className="font-mono text-xs text-mute">Réponse</dt>
                <dd className="mt-1">{project.solution}</dd>
              </div>
            ) : null}
          </dl>
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
