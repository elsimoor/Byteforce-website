import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectJsonLd } from "@/components/json-ld";
import { ResponsiveImg } from "@/components/responsive-img";
import { getCity, slugify } from "@/lib/catalog";
import { getProject, getService, projects, type Project } from "@/lib/content";
import { caseDossier } from "@/lib/case-dossier";
import { openGraph } from "@/lib/open-graph";
import { projectNotes, projectTitles } from "@/lib/project-notes";
import { metaFor } from "@/lib/seo-meta";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const countWord = ["", "Une", "Deux", "Trois", "Quatre", "Cinq", "Six", "Sept", "Huit", "Neuf", "Dix"];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const path = `/realisations/${project.slug}`;
  const meta = metaFor(path, `${projectTitles[project.slug] ?? project.title} · Byte Force`, project.description);
  return {
    title: { absolute: meta.title },
    description: meta.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, meta.title, meta.description),
  };
}

function hostOf(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
}

function issueLine(count: number) {
  if (count <= 1) return "Une page, une seule issue";
  const word = countWord[count];
  return word ? `${word} pages, une seule issue` : `${count} pages, une seule issue`;
}

function framesOf(project: Project) {
  const frames = project.shot ? [{ src: project.shot, label: "Accueil", width: 1440, height: 900 }] : [];
  for (const [index, screen] of (project.screens ?? []).entries()) {
    frames.push({ src: screen.src, label: `Écran ${index + 1}`, width: screen.width, height: screen.height });
  }
  return frames;
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const place = getCity(slugify(project.city));
  const notes = projectNotes[project.slug] ?? [];
  const dossier = caseDossier[project.slug] ?? [];
  const cityHref =
    project.city === project.country
      ? "/developpement-logiciel-sur-mesure-maroc"
      : (place?.path ?? `/villes/${slugify(project.city)}`);
  const pageUrl = `${site.url}/realisations/${project.slug}`;
  const links = [{ label: "Accueil", href: project.url }, ...project.pages.filter((page) => page.href !== project.url)];
  const frames = framesOf(project);
  const phone = project.screens?.find((screen) => screen.height > screen.width);
  const title = project.title.endsWith(".") ? project.title : `${project.title}.`;
  const heroSize =
    project.title.length > 18
      ? "text-[clamp(2.75rem,8vw,5.25rem)]"
      : project.title.length > 11
        ? "text-[clamp(3.25rem,10vw,6.5rem)]"
        : "text-[clamp(4.25rem,14vw,8.25rem)]";
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
    <main className="bg-surface text-on-surface">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProjectJsonLd project={project} />

      <section className="overflow-hidden bg-ink text-white">
        <div className="mx-auto w-full max-w-7xl px-6 pt-14 pb-16 lg:px-12 lg:pt-20">
          <h1 className={`max-w-full font-headline font-black leading-[0.86] tracking-[-0.045em] break-words ${heroSize}`}>
            {title}
          </h1>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/75">{project.description}</p>
          <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">Client</dt>
              <dd className="mt-1 text-sm">{project.title}</dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">Année</dt>
              <dd className="mt-1 text-sm">
                <time dateTime={`${project.year}-01-01`}>{project.year}</time>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] font-bold tracking-[0.16em] text-white/45 uppercase">Ville</dt>
              <dd className="mt-1 text-sm">
                <Link href={cityHref} className="underline decoration-white/30 underline-offset-4">
                  {project.city}
                </Link>
              </dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.url}
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full bg-[#1c9d4e] px-5 text-sm font-semibold text-white"
            >
              Voir le site
            </a>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center rounded-full border border-white/35 px-5 text-sm font-semibold text-white"
            >
              Parler d&apos;un site
            </Link>
          </div>

          {project.shot ? (
            <div className="relative mt-14 lg:mt-16">
              <div className="overflow-hidden rounded-t-2xl border border-white/10 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:mr-28">
                <div className="flex items-center gap-3 border-b border-black/5 bg-[#f3f4f6] px-4 py-3">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  </span>
                  <span className="min-w-0 flex-1 truncate text-center font-mono text-[11px] text-neutral-500">{hostOf(project.url)}</span>
                </div>
                <ResponsiveImg
                  src={project.shot}
                  alt={`${project.title}, capture du site en ligne`}
                  width={1440}
                  height={900}
                  priority
                  sizes="(min-width: 1024px) 70vw, 100vw"
                  className="aspect-[16/10] w-full object-cover object-top"
                />
              </div>
              <div className="mx-auto mt-6 w-36 overflow-hidden rounded-[1.7rem] border-[6px] border-[#161616] bg-white shadow-2xl sm:w-40 lg:absolute lg:right-0 lg:bottom-8 lg:mt-0 lg:w-44">
                <ResponsiveImg
                  src={phone?.src ?? project.shot}
                  alt={`${project.title}, le haut de page`}
                  width={phone?.width ?? 390}
                  height={phone?.height ?? 844}
                  sizes="176px"
                  className="aspect-[9/16] w-full object-cover object-top"
                />
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12 lg:py-28">
        <div>
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            <Link href={`/categories/${slugify(project.category)}`}>{project.category}</Link>
          </p>
          <h2 className="mt-3 max-w-[12ch] font-headline text-[clamp(3rem,6vw,5.5rem)] font-black leading-[0.88] tracking-[-0.04em] break-words">
            {project.title}
            <span className="block text-[#1c9d4e]">{project.city}.</span>
          </h2>
          <p className="mt-5 text-sm text-on-surface-variant">Pour l&apos;essentiel, en une page.</p>
        </div>
        <div className="space-y-8 text-sm leading-relaxed text-on-surface-variant">
          <div>
            <h3 className="text-base font-bold text-on-surface">Le problème</h3>
            <p className="mt-2">{project.problem ?? project.description}</p>
          </div>
          <div>
            <h3 className="text-base font-bold text-on-surface">La solution</h3>
            <p className="mt-2">{project.solution ?? "Le site public, tel qu'il est en ligne."}</p>
            {service ? (
              <p className="mt-3">
                <Link href={service.href ?? `/services/${service.slug}`} className="font-semibold text-primary">
                  {service.title}
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 lg:px-12">
        <div className="grid items-center gap-8 bg-ink px-6 py-10 text-white md:grid-cols-[auto_1fr] md:px-12 md:py-14">
          <p className="font-headline text-[clamp(4.5rem,8vw,7rem)] font-black leading-none tracking-[-0.05em] text-[#7dffe0]" aria-hidden="true">
            00
          </p>
          <div>
            <h2 className="font-headline text-[clamp(2.4rem,4vw,3.5rem)] font-black leading-[0.95] tracking-[-0.03em]">Le résultat</h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/75">
              {project.result ?? `Le site est en ligne à ${project.city} depuis ${project.year}.`}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28">
        <h2 className="max-w-[14ch] font-headline text-[clamp(2.6rem,5vw,4.25rem)] font-black leading-[0.92] tracking-[-0.035em]">
          {issueLine(links.length)}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-on-surface-variant">
          Chaque pastille ouvre une adresse déjà publique. Rien n&apos;est ajouté pour remplir la ligne.
        </p>
        <ul className="mt-8 flex flex-wrap gap-2">
          {links.map((page) => (
            <li key={page.href}>
              <a
                href={page.href}
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center rounded-full border border-outline-variant px-4 text-sm text-on-surface hover:border-ink"
              >
                {page.label}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {frames.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12 lg:pb-28">
          <h2 className="font-headline text-[clamp(2.6rem,5vw,4.25rem)] font-black leading-[0.92] tracking-[-0.035em]">Les pages clés</h2>
          <ul className={frames.length === 1 ? "mt-8" : "mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3"}>
            {frames.map((frame) => (
              <li key={frame.src} className="overflow-hidden border border-outline-variant bg-white">
                <ResponsiveImg
                  src={frame.src}
                  alt={`${project.title}, ${frame.label}`}
                  width={frame.width}
                  height={frame.height}
                  sizes={frames.length === 1 ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"}
                  className="aspect-[16/10] w-full object-cover object-top"
                />
                <p className="px-4 py-3 text-sm text-on-surface-variant">{frame.label}</p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {notes.length > 0 || dossier.length > 0 ? (
        <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-12">
          <h2 className="font-headline text-[clamp(2.6rem,5vw,4.25rem)] font-black leading-[0.92] tracking-[-0.035em]">Ce qui est public</h2>
          <div className="mt-8 max-w-3xl space-y-4 text-sm leading-relaxed text-on-surface-variant">
            {notes.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {dossier.map((section) => (
            <div key={section.heading} className="mt-10 max-w-3xl">
              <h3 className="font-headline text-3xl font-black tracking-tight">{section.heading}</h3>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-on-surface-variant">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </section>
      ) : null}

      <section className="bg-primary text-white">
        <div className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12 lg:py-24">
          <h2 className="max-w-[16ch] font-headline text-[clamp(2.5rem,5vw,4.4rem)] font-black leading-[0.92] tracking-[-0.035em]">
            Vous vendez un service que le client doit comprendre avant de vous écrire ?
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/80">
            Le prochain site part de ce que le visiteur doit faire. On en parle depuis Casablanca, sous un jour ouvré.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full bg-white px-5 text-sm font-semibold text-primary">
              Démarrer un projet
            </Link>
            <a
              href={project.url}
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-5 text-sm font-semibold text-white"
            >
              Voir le site
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
