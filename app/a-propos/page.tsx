import type { Metadata } from "next";
import Link from "next/link";
import { projects, type Project } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio logiciel à Casablanca",
  description:
    "Byte Force conçoit des logiciels, des applications et des sites depuis le Technopark, à Casablanca. Pas de bureau en France.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    locale: "fr_FR",
    url: "/a-propos",
    title: "Studio logiciel à Casablanca",
    description:
      "Byte Force conçoit des logiciels, des applications et des sites depuis le Technopark, à Casablanca. Pas de bureau en France.",
  },
};

const countries = new Set(projects.map((project) => project.country)).size;
const named = ["dealkhir", "re-proche-de-moi", "coco-inbox", "tourispeak"]
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is Project => Boolean(project));

export default function AboutPage() {
  return (
    <main>
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-28">
        <h1 className="display max-w-[14ch] text-[clamp(3.2rem,8vw,7.2rem)]">
          Un studio logiciel à Casablanca.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">
          Byte Force conçoit des logiciels, des applications web et des sites pour une entreprise. Le bureau est au
          Technopark. Il n&apos;y a pas de bureau en France ni au Canada : ces projets se font depuis Casablanca.
        </p>
      </header>
      <section className="grid gap-12 bg-ink px-6 py-20 text-paper md:grid-cols-3 md:px-12 md:py-28">
        <div>
          <p className="display text-7xl md:text-8xl">{projects.length}</p>
          <p className="mt-3 text-sm text-paper/60">projets publiés</p>
        </div>
        <div>
          <p className="display text-7xl md:text-8xl">{countries}</p>
          <p className="mt-3 text-sm text-paper/60">pays dans le catalogue</p>
        </div>
        <div>
          <p className="display text-5xl md:text-6xl">9h–19h</p>
          <p className="mt-3 text-sm text-paper/60">lundi au vendredi</p>
        </div>
      </section>
      <section className="grid gap-10 px-6 py-20 md:grid-cols-12 md:px-12 md:py-28">
        <div className="md:col-span-7">
          <h2 className="display text-4xl">Ce qui est déjà en ligne</h2>
          <ul className="mt-8">
            {named.map((project) => (
              <li key={project.slug} className="border-t border-line">
                <Link href={`/realisations/${project.slug}`} className="flex items-baseline justify-between gap-6 py-4">
                  <span className="text-2xl">{project.title}</span>
                  <span className="text-sm text-mute">
                    {project.city} · {project.year}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl leading-relaxed">
            Le catalogue compte aussi des sites vitrines et des boutiques, en France et au Maroc. Chaque fiche dit ce
            qui a été publié, sans chiffre inventé.
          </p>
          <p className="mt-6">
            <Link href="/contact" className="border-b border-ink pb-1">
              Parler d&apos;un projet
            </Link>
          </p>
        </div>
        <p className="text-sm leading-relaxed text-mute md:col-span-4 md:col-start-9">
          {site.street}
          <br />
          {site.locality}, {site.postal} {site.city}
          <br />
          {site.phoneDisplay}
          <br />
          {site.email}
          <br />
          {site.hoursLabel}
        </p>
      </section>
    </main>
  );
}
