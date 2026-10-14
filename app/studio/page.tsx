import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { EmailText } from "@/components/mail-link";
import { Icon } from "@/components/icon";
import { ResponsiveImg } from "@/components/responsive-img";
import { SiteIndex } from "@/components/site-index";
import { projects, type Project } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";
import { studioSections } from "@/lib/studio-sections";

const studioMeta = seoMeta["/studio"];

export const metadata: Metadata = {
  title: { absolute: studioMeta.title },
  description: studioMeta.description,
  alternates: { canonical: "/studio" },
  openGraph: openGraph("/studio", studioMeta.title, studioMeta.description),
};

const featuredOrder = ["coco-inbox", "yoursmile", "re-proche-de-moi"] as const;

const windows = [
  { slug: "coco-inbox", slot: "studio-slot-a" },
  { slug: "crm-cocoinbox", slot: "studio-slot-b" },
  { slug: "yoursmile", slot: "studio-slot-c" },
] as const;

function withShot(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project?.shot) return null;
  return project as Project & { shot: string };
}

const placeOrder = ["Maroc", "France", "Canada"];
const countries = [...new Set(projects.map((project) => project.country))];
const places = [
  ...placeOrder.filter((country) => countries.includes(country)),
  ...countries.filter((country) => !placeOrder.includes(country)),
];

export default function AboutPage() {
  const featured = featuredOrder.map((slug) => withShot(slug)).filter((project) => project !== null);
  const stage = windows.map((item) => ({ ...item, project: withShot(item.slug) })).filter((item) => item.project);

  return (
    <main>
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "À propos", path: "/studio" }]} />
        <header className="grid items-center gap-10 px-6 pt-10 md:px-12 md:pt-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8 lg:pt-16">
          <div>
            <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary uppercase">
              Studio logiciel · Casablanca, Maroc
            </p>
            <h1 className="studio-lead display mt-5">
              On transforme les opérations complexes en <span className="text-primary">logiciels</span> qui font avancer votre entreprise.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              Applications métier, plateformes web et automations conçues sur mesure, depuis le Technopark de Casablanca.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/contact" className="btn">
                Parler d&apos;un projet
                <Icon name="arrow_forward" />
              </Link>
              <a href="#travaux" className="btn-line">
                Explorer nos réalisations
                <Icon name="south" />
              </a>
            </div>
          </div>
          <div className="studio-stage" aria-hidden="true">
            {stage.map(({ slot, project }) => (
              <div key={project.slug} className={`studio-slot ${slot}`}>
                <div className="studio-window">
                  <div className="studio-window-bar">{project.title}</div>
                  <div className="relative min-h-0 flex-1">
                    <ResponsiveImg
                      src={project.shot}
                      alt=""
                      width={720}
                      height={480}
                      priority={project.slug === "coco-inbox"}
                      sizes="(min-width: 1024px) 28vw, 70vw"
                      className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </header>

        <section className="mx-6 mt-12 grid border-y border-line md:mx-12 md:mt-16 md:grid-cols-3" aria-label="Le bureau en chiffres">
          <div className="px-1 py-6 md:px-6">
            <p className="display text-5xl text-on-surface">{projects.length}</p>
            <p className="mt-2 text-sm text-mute">projets publiés</p>
          </div>
          <div className="border-t border-line px-1 py-6 md:border-t-0 md:border-l md:px-6">
            <p className="text-xl font-bold tracking-tight">{places.join(" · ")}</p>
            <p className="mt-2 text-sm text-mute">Projets livrés dans {places.length} pays</p>
          </div>
          <div className="border-t border-line px-1 py-6 md:border-t-0 md:border-l md:px-6">
            <p className="text-xl font-bold tracking-tight">Lun–Ven · 9h–19h</p>
            <p className="mt-2 text-sm text-mute">Bureau à Casablanca</p>
          </div>
        </section>

        <section id="travaux" className="scroll-mt-28 px-6 py-16 md:px-12 md:py-24">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary uppercase">Nos réalisations</p>
              <h2 className="display mt-3 max-w-[14ch] text-4xl md:text-5xl">Du travail réel. Des produits en ligne.</h2>
            </div>
            <Link href="/realisations" className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Voir toutes les réalisations
              <Icon name="arrow_forward" />
            </Link>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <article key={project.slug} className="flex flex-col border border-line bg-surface-container-lowest">
                <Link href={`/realisations/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden border-b border-line">
                  <ResponsiveImg
                    src={project.shot}
                    alt={`${project.title}, capture du site en ligne`}
                    width={640}
                    height={400}
                    sizes="(min-width: 1024px) 28vw, (min-width: 768px) 46vw, 100vw"
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-2xl font-bold tracking-tight">{project.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mute">{project.description}</p>
                  <p className="mt-4 flex flex-wrap gap-2">
                    {[project.category, project.city, project.year].map((tag) => (
                      <span key={tag} className="border border-line px-2 py-1 font-mono text-[10px] font-bold tracking-wider text-mute uppercase">
                        {tag}
                      </span>
                    ))}
                  </p>
                  <Link href={`/realisations/${project.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Voir le projet
                    <Icon name="arrow_forward" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <h2 className="display mt-20 text-3xl">Tout le catalogue</h2>
          <ul className="mt-6 max-w-3xl">
            {projects.map((project) => (
              <li key={project.slug} className="border-t border-line">
                <Link href={`/realisations/${project.slug}`} className="flex items-baseline justify-between gap-6 py-3">
                  <span>{project.title}</span>
                  <span className="shrink-0 text-sm text-mute">
                    {project.city} · {project.year}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-line px-6 py-16 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">Le bureau est au Technopark.</h2>
          <div className="mt-8 max-w-xl space-y-4 leading-relaxed">
            <p>
              Byte Force conçoit des logiciels, des applications web et des sites pour une entreprise. Le bureau est au{" "}
              {site.street}, {site.locality}, {site.postal} {site.city}. On y répond du lundi au vendredi, de 9h à 19h, au{" "}
              {site.phoneDisplay} ou par <EmailText />.
            </p>
            <p>
              Il n&apos;y a pas de bureau en France ni au Canada. Les projets lillois, roubaisiens et montréalais du catalogue ont
              été faits depuis Casablanca. La fiche de Walid Moultamiss reprend le parcours écrit dans son CV.{" "}
              <Link href="/walid-moultamiss">Lire la fiche</Link>.
            </p>
          </div>
          <nav aria-label="Pages du studio" className="mt-10 flex max-w-xl flex-col">
            {studioSections.map((section) => (
              <Link key={section.slug} href={`/studio/${section.slug}`} className="border-b border-line py-3">
                {section.title}
              </Link>
            ))}
          </nav>
        </section>
        <SiteIndex part={2} />
      </article>
    </main>
  );
}
