import type { Metadata } from "next";
import Link from "next/link";
import { ProjectStage } from "@/components/project-stage";
import { categories, cities } from "@/lib/catalog";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Réalisations",
  description:
    "Sites e-commerce, vitrines et plateformes livrés par Byte Force, de Casablanca à Lille et Montréal.",
  alternates: { canonical: "/realisations" },
};

export default function WorkPage() {
  const staged = projects.slice(0, 6);
  const rest = projects.slice(6);

  return (
    <main>
      <header className="grid gap-10 px-6 pb-16 pt-16 md:grid-cols-12 md:px-12 md:pt-28">
        <h1 className="display text-[clamp(3.2rem,8vw,7rem)] md:col-span-7">Travaux</h1>
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
            </Link>
          </li>
        ))}
      </ol>
    </main>
  );
}
