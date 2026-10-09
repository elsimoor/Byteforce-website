import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProjectStage } from "@/components/project-stage";
import { SiteIndex } from "@/components/site-index";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Travaux publiés, Casablanca",
  description:
    "Sites, applications et logiciels livrés par Byte Force, de Casablanca à Lille et Montréal. Chaque fiche dit ce qui est en ligne.",
  alternates: { canonical: "/realisations" },
  openGraph: openGraph(
    "/realisations",
    "Réalisations · Byte Force",
    "Sites, applications et logiciels livrés par Byte Force, de Casablanca à Lille et Montréal. Chaque fiche dit ce qui est en ligne.",
  ),
};

export default function WorkPage() {
  const staged = projects.filter((project) => project.shot);
  const rest = projects.filter((project) => !project.shot);

  return (
    <main>
      <article>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Travaux", path: "/realisations" }]} />
      <header className="grid gap-10 px-6 pb-8 pt-16 md:grid-cols-12 md:px-12 md:pt-28">
        <h1 className="display text-[clamp(3.2rem,8vw,7rem)] md:col-span-7">Travaux publiés.</h1>
        <p className="text-sm leading-relaxed text-mute md:col-span-4 md:col-start-9 md:pt-4">
          Boutiques, sites vitrines et plateformes. Les villes du catalogue : Lille, Marcq-en-Barœul, Roubaix, le Nord,
          Casablanca, Montréal, Safi, Marrakech et Tanger.
        </p>
      </header>
      <section className="px-6 pb-16 md:px-12">
        <p className="max-w-2xl text-lg leading-relaxed">
          {projects.length} projets déjà en ligne : des boutiques, des sites vitrines et des plateformes, de Casablanca à
          Lille, Roubaix, Marrakech, Tanger, Safi et Montréal. {staged.length} fiches ont une capture. Les autres restent
          un index, parce que le dossier n&apos;a pas d&apos;image. Chaque ligne dit ce qui a été publié, sans chiffre
          inventé. Le code livré appartient au client.
        </p>
      </section>
      {staged.map((project, index) => (
        <ProjectStage
          key={project.slug}
          project={project}
          variant={(index % 3) as 0 | 1 | 2}
          priority={index < 2}
        />
      ))}
      <ol>
        {rest.map((project) => (
          <li key={project.slug} className="border-b border-line">
            <Link
              href={`/realisations/${project.slug}`}
              className="index-row grid items-baseline gap-3 px-6 py-8 md:grid-cols-12 md:px-12 md:py-10"
            >
              <span className="display text-4xl md:col-span-6 md:text-6xl">{project.title}</span>
              <span className="text-sm text-mute md:col-span-3">{project.category}</span>
              <span className="text-sm text-mute md:col-span-3 md:text-right">
                {project.city} · {project.year}
              </span>
              <span className="text-sm leading-relaxed text-mute md:col-span-9 md:col-start-2">{project.description}</span>
            </Link>
          </li>
        ))}
      </ol>
      <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <h2 className="display max-w-[16ch] text-4xl">Ce que chaque dossier contient</h2>
        <div className="mt-10 max-w-3xl space-y-8">
          {projects.map((project) => (
            <p key={project.slug} className="leading-relaxed">
              {project.title} ({project.year}) est en ligne pour {project.city}, {project.country}. {project.description}{" "}
              La fiche classe ce travail en {project.category}. Elle ne donne pas de prix, pas de témoignage et pas de
              volume de ventes : ces chiffres ne sont pas dans le dossier. On ouvre le site publié depuis la fiche, puis
              on écrit à Casablanca si le besoin ressemble à celui-ci. La ville et l&apos;année suffisent à situer le
              travail. Le reste se vérifie sur le site du client. Le code livré appartient au client.
            </p>
          ))}
        </div>
      </section>
      <SiteIndex part={5} />
      </article>
    </main>
  );
}
