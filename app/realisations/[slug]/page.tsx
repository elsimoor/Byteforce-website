import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectJsonLd } from "@/components/json-ld";
import { ProjectCta, StudioStamp, WorkTicker } from "@/components/realisation-chrome";
import { ResponsiveImg } from "@/components/responsive-img";
import { getCity, slugify } from "@/lib/catalog";
import { getProject, getService, projects } from "@/lib/content";
import { caseDossier } from "@/lib/case-dossier";
import { openGraph } from "@/lib/open-graph";
import { projectNotes, projectTitles } from "@/lib/project-notes";
import { hostOf, issueLine, titleParts, workKind } from "@/lib/realisation-present";
import { metaFor } from "@/lib/seo-meta";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

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

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const service = getService(project.serviceSlug);
  const place = getCity(slugify(project.city));
  const notes = projectNotes[project.slug] ?? [];
  const dossier = caseDossier[project.slug] ?? [];
  const cityHref =
    project.city === project.country ? "/developpement-logiciel-sur-mesure-maroc" : (place?.path ?? `/villes/${slugify(project.city)}`);
  const serviceHref = service ? (service.href ?? `/services/${service.slug}`) : "/services";
  const serviceLabel = service?.menu ?? "Le service";
  const host = hostOf(project.url);
  const parts = titleParts(project.title);
  const phone = project.screens?.find((screen) => screen.height > screen.width);
  const routes = [{ label: "Accueil", href: project.url }, ...project.pages.filter((page) => page.href !== project.url)];
  const frames = [
    ...(project.shot ? [{ src: project.shot, label: "Accueil", caption: project.description, width: 1440, height: 900 }] : []),
    ...(project.screens ?? []).map((screen, index) => ({
      src: screen.src,
      label: `Écran ${index + 1}`,
      caption: "Capture de l'application.",
      width: screen.width,
      height: screen.height,
    })),
  ];
  const index = projects.findIndex((item) => item.slug === project.slug);
  const others = [1, 2].map((step) => projects[(index + step) % projects.length]).filter((item) => item && item.slug !== project.slug);
  const pageUrl = `${site.url}/realisations/${project.slug}`;
  const published = notes.length > 0 ? notes : [project.description, project.result].filter((line): line is string => Boolean(line));
  const withheld = [
    "Aucun chiffre d'affaires, de trafic ou de témoignage qui ne soit pas déjà public.",
    "Pas de bureau ailleurs qu'à Casablanca.",
    "La pile technique n'est citée que si elle est déjà écrite dans le dossier.",
  ];
  const secondLine = parts.lines[parts.lines.length - 1] ?? project.title;
  const heroSize = parts.single && project.title.length <= 10
    ? "text-[clamp(4.25rem,16vw,16rem)]"
    : secondLine.length <= 10
      ? "text-[clamp(3.25rem,12vw,14rem)]"
      : "text-[clamp(2.75rem,8vw,7.5rem)]";
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
    <main data-landing className="w-full bg-surface text-[#0A0D2E]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ProjectJsonLd project={project} />

      <section className="relative overflow-hidden bg-[#070A2B] text-[#EEF0FF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(238,240,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-[1264px] flex-col gap-5 px-5 pt-8 sm:px-8 lg:px-12 lg:pt-9">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-[#B4BAF2]">
              <Link href="/realisations">Réalisations</Link>
              <span>·</span>
              <Link href={`/categories/${slugify(project.category)}`}>{project.category}</Link>
              <span>·</span>
              <Link href={cityHref}>{project.city}</Link>
              <span>·</span>
              <time dateTime={`${project.year}-01-01`} className="text-white">{project.year}</time>
            </nav>
            <p className="font-mono text-xs tracking-[0.1em] text-[#B4BAF2] uppercase">Étude de cas · {workKind(project)}</p>
          </div>

          <h1 className={`font-headline leading-[0.84] font-extrabold tracking-[-0.07em] text-white ${heroSize}`}>
            {parts.lines.map((line, lineIndex) => (
              <span key={line} className="block break-words">
                {line}
                {lineIndex === parts.lines.length - 1 ? <span className="text-[#8C93FF]">.</span> : null}
              </span>
            ))}
          </h1>

          <div className="mt-2 flex flex-wrap items-end justify-between gap-6">
            <p className="max-w-[30em] min-w-0 flex-1 text-[17px] leading-normal text-[#D5D9FF] sm:text-[22px] sm:leading-[1.45]">{project.description}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <a href={project.url} rel="noopener noreferrer" className="inline-flex min-h-12 items-center rounded-md bg-white px-6 text-[15px] font-bold text-[#070A2B]">
                Voir le site →
              </a>
              <a href="#devis" className="text-[15px] font-semibold text-white underline decoration-white/70 underline-offset-[5px]">
                Parler d&apos;un projet comme celui-ci
              </a>
            </div>
          </div>

          {project.shot ? (
            <div className="relative z-[2] mt-8 -mb-16 flex flex-wrap items-end lg:mt-11 lg:-mb-34">
              <div className="absolute top-3 right-3 z-[5] lg:top-5 lg:right-6">
                <span className="lg:hidden"><StudioStamp size={96} /></span>
                <span className="hidden lg:block"><StudioStamp size={148} /></span>
              </div>
              <div className="min-w-0 flex-1 overflow-hidden rounded-t-[10px] bg-white shadow-[0_40px_80px_rgba(2,4,24,0.55)] lg:rounded-[14px]">
                <div className="flex items-center gap-3 bg-[#E6E9FA] px-3 py-2 lg:px-4 lg:py-2.5">
                  <span className="hidden gap-1.5 lg:flex" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B7BCE0]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B7BCE0]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#B7BCE0]" />
                  </span>
                  <span className="min-w-0 flex-1 truncate rounded-[5px] bg-white px-3 py-0.5 font-mono text-[11px] text-[#555B80] lg:text-xs">{host}</span>
                </div>
                <div className="relative">
                  <ResponsiveImg
                    src={project.shot}
                    alt={`${project.title}, capture du site en ligne`}
                    width={1440}
                    height={900}
                    priority
                    sizes="(min-width: 1024px) 70vw, 100vw"
                    className="aspect-[4/3] w-full object-cover object-top lg:aspect-video"
                  />
                  <span className="absolute bottom-3 left-3 inline-flex items-center gap-2 rounded-full bg-[#070A2B] py-1.5 pr-3 pl-2.5 text-[12px] font-semibold text-white lg:bottom-[9%] lg:left-[6%] lg:text-[13px]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#8C93FF]" />
                    En ligne depuis {project.year}
                  </span>
                </div>
              </div>
              {phone ? (
                <div className="relative z-[3] mt-4 hidden w-40 shrink-0 rounded-[30px] bg-[#0A0D2E] p-2 shadow-[0_30px_60px_rgba(2,4,24,0.6)] lg:-mb-11 lg:ml-[-72px] lg:block lg:w-[200px]">
                  <ResponsiveImg
                    src={phone.src}
                    alt={`${project.title}, capture de l'application`}
                    width={phone.width}
                    height={phone.height}
                    sizes="200px"
                    className="aspect-[9/19] w-full rounded-[22px] object-cover object-top"
                  />
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </section>

      <section className={project.shot ? "pt-24 lg:pt-52" : "pt-10"}>
        <dl className="mx-auto grid w-full max-w-[1264px] grid-cols-2 gap-5 px-5 sm:px-8 lg:flex lg:flex-wrap lg:gap-x-10 lg:px-12">
          {[
            ["Client", project.title],
            ["Année", project.year],
            ["Ville", project.city],
            ["Adresse", host],
            ["Service", serviceLabel],
          ].map(([label, value]) => (
            <div key={label} className="min-w-0 border-t-2 border-[#0A0D2E] pt-2.5 lg:flex-1">
              <dt className="mb-1 font-mono text-[11px] tracking-[0.08em] text-[#555B80] uppercase lg:text-xs">{label}</dt>
              <dd className="text-base font-semibold break-words lg:text-[19px]">
                {label === "Ville" ? <Link href={cityHref}>{value}</Link> : label === "Service" ? <Link href={serviceHref}>{value}</Link> : label === "Année" ? <time dateTime={`${project.year}-01-01`}>{value}</time> : value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <div className="mt-11 lg:mt-22">
        <WorkTicker />
      </div>

      <section className="mx-auto flex w-full max-w-[1264px] flex-col gap-10 px-5 py-14 sm:px-8 lg:flex-row lg:gap-x-18 lg:px-12 lg:pt-24 lg:pb-10">
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Ce qui bloquait</p>
          <h2 className="font-headline text-[3.25rem] leading-[0.94] font-extrabold tracking-[-0.05em] lg:text-[5.25rem] lg:leading-[0.92]">Le problème</h2>
          <p className="max-w-[24em] text-[19px] leading-normal text-[#2A2E55] lg:text-[22px] lg:leading-relaxed">{project.problem ?? project.description}</p>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-4">
          <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Ce qu&apos;on a livré</p>
          <h2 className="font-headline text-[3.25rem] leading-[0.94] font-extrabold tracking-[-0.05em] text-primary lg:text-[5.25rem] lg:leading-[0.92]">La solution</h2>
          <p className="max-w-[24em] text-[19px] leading-normal text-[#2A2E55] lg:text-[22px] lg:leading-relaxed">{project.solution ?? "Le site public, tel qu'il est en ligne."}</p>
          <Link href={serviceHref} className="self-start text-base font-bold text-primary underline decoration-primary/40 underline-offset-[5px]">
            {serviceLabel} →
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1264px] px-5 py-6 sm:px-8 lg:px-12 lg:pt-6 lg:pb-18">
        <div className="flex flex-col gap-4 rounded-3xl bg-[#070A2B] px-6 py-8 text-[#EEF0FF] lg:flex-row lg:items-center lg:gap-16 lg:rounded-3xl lg:p-14">
          <div className="min-w-0 flex-1">
            <p aria-hidden="true" className="font-headline text-[8.5rem] leading-[0.8] font-extrabold tracking-[-0.06em] text-transparent lg:text-[15rem]" style={{ WebkitTextStroke: "2px #8C93FF" }}>
              00
            </p>
            <p className="mt-2">
              <span className="rounded-[3px] border border-dashed border-[#B26A00] bg-[#FFF4E0] px-2.5 py-0.5 font-mono text-[11px] tracking-[0.06em] text-[#7A4300] uppercase lg:text-xs">
                Chiffre mesuré, avec l&apos;accord du client
              </span>
            </p>
          </div>
          <div className="flex min-w-0 flex-1 flex-col gap-4">
            <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.04em] text-white lg:text-[3.5rem]">Le résultat</h2>
            <p className="text-[17px] leading-normal text-[#D5D9FF] lg:text-[21px] lg:leading-relaxed">
              {project.result ?? `Le site est en ligne sur ${host}.`}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto flex w-full max-w-[1264px] flex-col gap-6 px-5 py-10 sm:px-8 lg:gap-9 lg:px-12 lg:py-8">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.045em] lg:text-[3.5rem]">{issueLine(routes.length)}</h2>
          <p className="max-w-[28em] text-base text-[#555B80] lg:text-[17px]">Chaque lien ouvre une adresse déjà publique.</p>
        </div>
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {routes.map((route, routeIndex) => (
            <a key={`${route.href}-${routeIndex}`} href={route.href} rel="noopener noreferrer" className="flex min-w-0 flex-1 gap-4 md:min-w-[9rem] md:flex-col md:gap-3">
              <span className="flex w-3.5 shrink-0 flex-col items-center md:w-auto md:flex-row">
                <span className={`mt-1.5 h-3.5 w-3.5 rounded-full md:mt-0 ${routeIndex === routes.length - 1 ? "bg-primary" : "bg-[#0A0D2E]"}`} />
                <span className={`w-0.5 flex-1 bg-[#C9CEEF] md:h-0.5 md:w-auto md:flex-1 ${routeIndex === routes.length - 1 ? "hidden" : ""}`} />
              </span>
              <span className="min-w-0 pb-5 md:pb-0">
                <span className="block text-lg font-bold md:text-xl">{route.label}</span>
                <span className="block font-mono text-xs break-all text-[#555B80]">{hostOf(route.href)}</span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {frames.length > 0 ? (
        <section className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12">
          <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.04em] lg:text-[3.5rem]">Les pages clés</h2>
          <ul className={frames.length === 1 ? "" : "grid gap-8 md:grid-cols-2 xl:grid-cols-3"}>
            {frames.map((frame) => (
              <li key={frame.src}>
                <figure className="m-0 flex flex-col gap-3">
                  <ResponsiveImg
                    src={frame.src}
                    alt={`${project.title}, ${frame.label}`}
                    width={frame.width}
                    height={frame.height}
                    sizes={frames.length === 1 ? "(min-width: 1024px) 70vw, 100vw" : "(min-width: 1280px) 30vw, 100vw"}
                    className={`w-full rounded-[14px] object-cover object-top ${frame.height > frame.width ? "aspect-[9/16] max-w-[240px]" : "aspect-[4/3]"}`}
                  />
                  <figcaption className="text-base text-[#2A2E55]">
                    <b className="font-bold">{frame.label}.</b> {frame.caption}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="mx-auto flex w-full max-w-[1264px] flex-col gap-8 px-5 py-8 sm:px-8 lg:px-12 lg:pb-18">
        <div className="flex flex-wrap items-end justify-between gap-3">
          <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.04em] lg:text-[3.5rem]">Ce qui est public</h2>
          <p className="max-w-[30em] text-base text-[#555B80] lg:text-[17px]">Chaque fiche dit ce qu&apos;on peut vérifier, et ce que Byte Force ne publie pas.</p>
        </div>
        <div className="flex flex-col gap-6 lg:flex-row">
          <div className="min-w-0 flex-1 rounded-[20px] border border-[#DADFF5] bg-white p-7 lg:p-9">
            <p className="font-mono text-xs tracking-[0.1em] text-primary uppercase">Dans le dossier</p>
            <ul className="mt-5 flex flex-col gap-4">
              {published.map((line) => (
                <li key={line} className="flex items-start gap-3.5 text-lg leading-snug">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="min-w-0 flex-1 rounded-[20px] border-2 border-dashed border-[#8E94BE] p-7 lg:p-9">
            <p className="font-mono text-xs tracking-[0.1em] text-[#555B80] uppercase">Ce qui n&apos;est pas dans le dossier</p>
            <ul className="mt-5 flex flex-col gap-4">
              {withheld.map((line) => (
                <li key={line} className="flex items-start gap-3.5 text-lg leading-snug text-[#2A2E55]">
                  <span className="mt-2 h-3 w-3 shrink-0 rounded-full border-2 border-[#8E94BE]" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {dossier.map((section) => (
          <div key={section.heading} className="max-w-3xl">
            <h3 className="font-headline text-3xl font-extrabold tracking-tight">{section.heading}</h3>
            <div className="mt-3 space-y-3 text-base leading-relaxed text-[#2A2E55]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        ))}
      </section>

      {others.length > 0 ? (
        <section className="mx-auto flex w-full max-w-[1264px] flex-col gap-7 px-5 pb-16 sm:px-8 lg:px-12">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="font-headline text-4xl leading-none font-extrabold tracking-[-0.04em] lg:text-[3.5rem]">Autres réalisations</h2>
            <Link href="/realisations" className="text-base font-bold text-primary underline decoration-primary/40 underline-offset-[5px]">
              Toutes les réalisations →
            </Link>
          </div>
          <div className="flex flex-col gap-6 lg:flex-row">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/realisations/${item.slug}`}
                className="flex min-h-[260px] min-w-0 flex-1 flex-col justify-between gap-5 rounded-[22px] bg-[#070A2B] p-8 text-[#EEF0FF] no-underline hover:no-underline"
              >
                <span className="font-mono text-xs tracking-[0.1em] text-[#8C93FF] uppercase">
                  {item.category} · {item.city} · {item.year}
                </span>
                <span className="font-headline text-5xl leading-[0.95] font-extrabold tracking-[-0.05em] text-white">{item.title}</span>
                <span className="text-base leading-normal text-[#D5D9FF]">{item.description}</span>
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      <ProjectCta siteUrl={project.url} />
    </main>
  );
}
