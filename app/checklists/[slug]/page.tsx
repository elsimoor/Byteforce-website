import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorByline } from "@/components/author-byline";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { StepDrawing } from "@/components/step-drawing";
import { openGraph } from "@/lib/open-graph";

const steps = {
  "comprendre-le-travail": {
    drawing: "understand" as const,
    title: "Comprendre le travail avant d'écrire",
    description:
      "Liste pour dire qui fait l'action, où elle se passe, et ce qui bloque, avant de choisir un logiciel. Bureau à Casablanca.",
    h1: "Comprendre le travail.",
    lede: "La première liste ne parle pas d'écran. Elle dit qui fait le geste aujourd'hui, avec quel fichier, et où ça s'arrête.",
    blocks: [
      {
        h: "Quoi noter avant le premier échange",
        p: [
          "Le nom de la personne qui fait l'action, pas le nom du logiciel rêvé. Le lieu : un bureau, un chantier, un comptoir, un téléphone. L'outil déjà ouvert : un classeur, un mail, un cahier, un logiciel déjà payé.",
          "Ce qui bloque tient en une phrase. Deux personnes écrasent la même ligne. Le devis part d'une version que l'autre n'a pas. Le client attend une réponse que personne ne retrouve.",
        ],
      },
      {
        h: "Ce que la liste ne demande pas",
        p: [
          "Pas de cahier des charges de cinquante pages. Pas de prix sur cette page. Le bureau est au Technopark, à Casablanca, du lundi au vendredi, de 9h à 19h. La réponse part sous un jour ouvré.",
          "Quand la phrase est claire, la suite est le dessin du produit, puis la construction, puis le lancement. La liste de mise en ligne est la page Lancer le produit.",
        ],
      },
    ],
  },
  "dessiner-le-produit": {
    drawing: "design" as const,
    title: "Dessiner le produit avant de le construire",
    description:
      "Liste pour fixer les écrans, les rôles et le parcours, avant d'écrire le premier logiciel. Bureau à Casablanca, au Technopark.",
    h1: "Dessiner le produit.",
    lede: "Le dessin dit ce que la personne voit, dans quel ordre, et qui a le droit de passer à l'étape suivante.",
    blocks: [
      {
        h: "Ce qui doit être décidé",
        p: [
          "Les écrans utiles, pas une bibliothèque de pages. Le nom de chaque rôle : qui crée, qui valide, qui relance. Le parcours du premier jour, du premier dossier jusqu'à la demande envoyée.",
          "Le dessin sert à voir le trou avant le code. Si une étape n'a pas de responsable, elle n'entre pas dans le logiciel. Si un outil déjà payé doit rester, on le dit ici, pas après la mise en ligne.",
        ],
      },
      {
        h: "Ensuite",
        p: [
          "Quand les écrans tiennent sur une page que l'équipe reconnaît, on construit. La liste de mise en ligne, avec le PDF à recevoir par email, est sur Lancer le produit.",
        ],
      },
    ],
  },
  "construire-le-produit": {
    drawing: "build" as const,
    title: "Construire le produit qui a été dessiné",
    description:
      "Liste de construction : le parcours convenu, les données, les droits, et ce qui reste hors du premier logiciel. Casablanca.",
    h1: "Construire le produit.",
    lede: "On écrit ce qui a été dessiné. Une étape qui n'était pas sur le dessin n'entre pas sans être écrite d'abord.",
    blocks: [
      {
        h: "Pendant la construction",
        p: [
          "Le dépôt avance sur le parcours convenu. Les données sont celles du métier, pas un modèle vide. Les droits suivent les rôles déjà nommés. Un branchement vers un outil déjà en place se fait si le dessin l'a prévu.",
          "Une démo sert à voir le geste réel, pas à ajouter une fonction au passage. Si le besoin change, on l'écrit avant de le construire. Le code livré appartient au client.",
        ],
      },
      {
        h: "Avant la mise en ligne",
        p: [
          "La construction s'arrête quand le parcours du dessin se fait de bout en bout sur un environnement de travail. La liste qui suit est le lancement : domaine, comptes, formulaire, et le premier jour.",
        ],
      },
    ],
  },
  "ameliorer-le-produit": {
    drawing: "improve" as const,
    title: "Améliorer le produit déjà en ligne",
    description:
      "Liste pour le logiciel déjà publié : ce qui casse, ce qui ne produit plus de demandes, et la petite évolution. Casablanca.",
    h1: "Améliorer le produit.",
    lede: "Après la mise en ligne, on corrige ce qui casse et on change la page qui ne dit plus ce que l'entreprise fait.",
    blocks: [
      {
        h: "Ce qu'on regarde",
        p: [
          "Le formulaire part-il encore. La page d'offre dit-elle encore le vrai service. Une mise à jour a-t-elle cassé un parcours. Le correctif vise ce point, pas une refonte, tant que le code peut être repris.",
          "Un correctif isolé peut se faire sans abonnement. Si le site a été écrit par quelqu'un d'autre, on le lit d'abord. Si une reprise complète est le chemin honnête, on le dit avant de toucher au site.",
        ],
      },
      {
        h: "Le bureau",
        p: [
          "Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Lundi au vendredi, 9h à 19h. Aucun prix n'est affiché. Le premier message dit ce qui bloque, sur quel site, et depuis quand.",
        ],
      },
    ],
  },
} as const;

type Slug = keyof typeof steps;

export function generateStaticParams() {
  return Object.keys(steps).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const step = steps[slug as Slug];
  if (!step) return {};
  return {
    title: step.title,
    description: step.description,
    alternates: { canonical: `/checklists/${slug}` },
    openGraph: openGraph(`/checklists/${slug}`, step.title, step.description),
  };
}

export default async function ChecklistStepPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const step = steps[slug as Slug];
  if (!step) notFound();
  const path = `/checklists/${slug}`;

  return (
    <main className="bg-paper text-ink">
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: step.h1, path }]} />
        <header className="px-6 pb-12 pt-16 md:px-12 md:pt-24">
          <p className="text-sm text-mute">
            <Link href="/">Accueil</Link>
            {" · "}
            <Link href="/checklists/lancer-le-produit">Lancer le produit</Link>
          </p>
          <div className="mt-8 max-w-xs text-ink">
            <StepDrawing name={step.drawing} />
          </div>
          <h1 className="display mt-6 max-w-[14ch] text-[clamp(3rem,7vw,6rem)]">{step.h1}</h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed">{step.lede}</p>
          <AuthorByline />
        </header>
        {step.blocks.map((block) => (
          <section key={block.h} className="border-t border-line px-6 py-14 md:px-12">
            <h2 className="display max-w-[18ch] text-4xl">{block.h}</h2>
            <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
              {block.p.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        <section className="border-t border-line px-6 py-14 md:px-12">
          <p className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href="/checklists/lancer-le-produit" className="border-b border-ink pb-1">
              Liste de lancement
            </Link>
            <Link href="/contact" className="border-b border-ink pb-1">
              Écrire à Casablanca
            </Link>
          </p>
        </section>
      </article>
    </main>
  );
}
