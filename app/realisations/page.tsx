import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProjectStage } from "@/components/project-stage";
import { categories, cities } from "@/lib/catalog";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sites e-commerce, vitrines et plateformes livrés par Byte Force, de Casablanca à Lille et Montréal.",
  alternates: { canonical: "/realisations" },
  openGraph: openGraph(
    "/realisations",
    "Réalisations · Byte Force",
    "Sites e-commerce, vitrines et plateformes livrés par Byte Force, de Casablanca à Lille et Montréal.",
  ),
};

export default function WorkPage() {
  const staged = projects.filter((project) => project.shot);
  const rest = projects.filter((project) => !project.shot);

  return (
    <main>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Travaux", path: "/realisations" }]} />
      <header className="grid gap-10 px-6 pb-8 pt-16 md:grid-cols-12 md:px-12 md:pt-28">
        <h1 className="display text-[clamp(3.2rem,8vw,7rem)] md:col-span-7">Travaux publiés.</h1>
        <div className="flex flex-col gap-6 text-sm md:col-span-4 md:col-start-9 md:pt-4">
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            {categories().map((category) => (
              <Link key={category.slug} href={category.path} className="hover:opacity-50">
                {category.name}
              </Link>
            ))}
          </p>
          <p className="flex flex-wrap gap-x-5 gap-y-2 text-mute">
            {cities().map((city) => (
              <Link key={city.slug} href={city.path} className="hover:text-ink">
                {city.city}
              </Link>
            ))}
          </p>
        </div>
      </header>
      <section className="px-6 pb-16 md:px-12">
        <p className="max-w-2xl text-lg leading-relaxed">
          Douze projets déjà en ligne : des boutiques, des sites vitrines et des plateformes, de Casablanca à Lille,
          Roubaix, Marrakech, Tanger et Montréal. Quatre fiches ont une capture. Les autres restent un index, parce que
          le dossier n&apos;a pas d&apos;image. Chaque ligne dit ce qui a été publié, sans chiffre inventé.
        </p>
      </section>
      {staged.map((project, index) => (
        <ProjectStage key={project.slug} project={project} variant={(index % 3) as 0 | 1 | 2} />
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
    </main>
  );
}
