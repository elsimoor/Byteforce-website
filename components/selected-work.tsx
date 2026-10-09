import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/content";

const order = ["coco-inbox", "re-proche-de-moi", "dealkhir", "tourispeak"];

const copy: Record<string, { problem: string; solution: string; result: string }> = {
  "coco-inbox": {
    problem: "L'email, les fichiers et les notes partaient sans limite claire de durée ou de destinataire.",
    solution: "Un produit publié pour l'email temporaire, les fichiers chiffrés et les notes sécurisées.",
    result: "Le produit est en ligne, depuis Montréal, depuis 2024.",
  },
  "re-proche-de-moi": {
    problem: "Les commerces de proximité étaient difficiles à trouver dans un seul parcours.",
    solution: "Une plateforme publiée, avec la recherche, la carte et les fiches d'établissements.",
    result: "Le site est en ligne à Lille depuis 2024.",
  },
  dealkhir: {
    problem: "Le don et les organisations n'avaient pas d'espace commun.",
    solution: "Une plateforme publiée pour les organisations et les dons.",
    result: "Le site est en ligne à Casablanca depuis 2024.",
  },
  tourispeak: {
    problem: "Le réseau touristique n'avait pas de site public pour les visites.",
    solution: "Un site publié pour des visites audio, et une application Android.",
    result: "Le site est en ligne, depuis Montréal, depuis 2024. L'application Android est sur le Play Store.",
  },
};

export function SelectedWork() {
  const cases = order
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter((project): project is (typeof projects)[number] & { shot: string } => Boolean(project?.shot));

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12 lg:py-28" id="selected-work">
      <div className="mb-14">
        <span className="text-xs font-mono font-bold tracking-widest text-primary uppercase">Logiciels publiés</span>
        <h2 className="mt-1 font-headline text-3xl font-black tracking-tight text-on-surface lg:text-5xl">
          Quatre produits déjà en ligne.
        </h2>
        <p className="mt-2 max-w-xl text-base text-on-surface-variant lg:text-lg">
          Chaque carte est le site en ligne : le problème, ce qui a été construit, et où c&apos;est publié.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {cases.map((project, index) => (
          <article key={project.slug} className="overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
            <a
              href={project.url}
              rel="noopener noreferrer"
              aria-label={`Site ${project.title}`}
              className="relative block aspect-[16/10] w-full"
            >
              <Image
                src={project.shot}
                alt={`${project.title}, capture du site en ligne`}
                width={400}
                height={250}
                priority={index === 0}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              <span className="sr-only">Site {project.title}</span>
            </a>
            <div className="space-y-3 p-6 lg:p-8">
              <p className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
                {project.city} · {project.year}
              </p>
              <h3 className="font-headline text-2xl font-bold text-on-surface">{project.title}</h3>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Problème. </span>
                {copy[project.slug].problem}
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Solution. </span>
                {copy[project.slug].solution}
              </p>
              <p className="text-sm leading-relaxed text-on-surface-variant">
                <span className="font-semibold text-on-surface">Résultat. </span>
                {copy[project.slug].result}
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-sm font-bold text-primary">
                <a href={`/realisations/${project.slug}`}>Fiche {project.title}</a>
                <a href={project.url} rel="noopener noreferrer">
                  Site {project.title}
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="mt-10 flex flex-wrap gap-x-5 gap-y-2 text-sm">
        <Link href="/services">Services à Casablanca</Link>
        <Link href="/a-propos">Qui sommes-nous</Link>
        <Link href="/insights">Décisions avant de construire</Link>
        <Link href="/contact">Écrire à Casablanca</Link>
      </p>
      <a
        href="/contact"
        className="mt-6 inline-flex items-center gap-2 rounded bg-primary px-6 py-3.5 text-sm font-medium text-on-primary"
      >
        Parler d&apos;un projet
      </a>
    </section>
  );
}
