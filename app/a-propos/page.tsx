import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Studio logiciel à Casablanca",
  description:
    "Byte Force conçoit des logiciels, des applications et des sites depuis le Technopark, à Casablanca. Pas de bureau en France.",
  alternates: { canonical: "/a-propos" },
  openGraph: openGraph(
    "/a-propos",
    "Studio logiciel à Casablanca",
    "Byte Force conçoit des logiciels, des applications et des sites depuis le Technopark, à Casablanca. Pas de bureau en France.",
  ),
};

const countries = new Set(projects.map((project) => project.country)).size;
const pictured = projects.filter((project) => project.shot);

export default function AboutPage() {
  return (
    <main>
      <article>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "À propos", path: "/a-propos" }]} />
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
          <h2 className="display text-4xl">Ce que le studio fait</h2>
          <div className="mt-8 max-w-xl space-y-4 leading-relaxed">
            <p>
              Le cœur du travail est un logiciel pour une entreprise : un dossier, un circuit, une règle que le tableur
              ou l&apos;abonnement ne sait pas tenir. Le site, le référencement, l&apos;hébergement et un plugin
              WordPress existent quand le projet en a besoin. Ce n&apos;est pas une agence qui vend des sites au forfait,
              avec un thème et trois pages.
            </p>
            <p>
              Le bureau est au {site.street}, {site.locality}, {site.postal} {site.city}. On y répond du lundi au
              vendredi, de 9h à 19h, au {site.phoneDisplay} ou par {site.email}. Il n&apos;y a pas de bureau en France
              ni au Canada. Les projets lillois, roubaisiens et montréalais du catalogue ont été faits depuis
              Casablanca.
            </p>
            <p>
              On ne publie pas de biographie de fondateur, de photo d&apos;équipe, ni de témoignage. La preuve publique
              est le site en ligne de chaque projet, avec sa ville et son année. Quand un chiffre n&apos;est pas dans le
              dossier, il n&apos;apparaît pas.
            </p>
          </div>
          <h2 className="display mt-16 text-4xl">Ce qui est déjà en ligne</h2>
          <ul className="mt-8">
            {projects.map((project) => (
              <li key={project.slug} className="border-t border-line">
                <Link href={`/realisations/${project.slug}`} className="block py-4">
                  <span className="flex items-baseline justify-between gap-6">
                    <span className="text-2xl">{project.title}</span>
                    <span className="shrink-0 text-sm text-mute">
                      {project.city} · {project.year}
                    </span>
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-mute">{project.description}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-xl leading-relaxed">
            {pictured.map((project) => project.title).join(", ")} ont une capture. Les autres fiches restent un index,
            parce que le dossier n&apos;a pas d&apos;image. Chaque fiche dit ce qui a été publié.
          </p>
          <p className="mt-6 max-w-xl leading-relaxed">
            Pour commencer, le formulaire demande le nom, l&apos;email et le projet. La réponse part sous un jour ouvré.
            Le code, le dépôt et les comptes livrés reviennent au client.
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
      </article>
    </main>
  );
}
