import type { Metadata } from "next";
import Link from "next/link";
import { AuthorByline } from "@/components/author-byline";
import { ChecklistRequest } from "@/components/checklist-request";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { StepDrawing } from "@/components/step-drawing";
import { openGraph } from "@/lib/open-graph";

const title = "Liste de lancement d'un produit";
const description =
  "Liste pour mettre un logiciel en ligne : parcours, comptes, formulaire, et le jour J. Le PDF s'ouvre après l'email. Casablanca.";

const toc = [
  ["quoi", "Qu'est-ce qu'une liste de lancement"],
  ["pourquoi", "Pourquoi elle compte"],
  ["contenu", "Ce qu'elle contient"],
  ["utiliser", "Comment l'utiliser"],
  ["pdf", "Recevoir le PDF"],
  ["mise-a-jour", "L'adapter à une mise à jour"],
];

const preview = [
  "Le parcours convenu se fait de bout en bout, sans l'équipe à côté.",
  "Le domaine, le certificat et les comptes d'hébergement sont au nom du client.",
  "Le formulaire de demande part, et quelqu'un le lit.",
  "La page d'offre dit ce que l'entreprise fait aujourd'hui.",
  "Une personne sait quoi faire si le site ne répond plus le premier jour.",
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/checklists/lancer-le-produit" },
  openGraph: openGraph("/checklists/lancer-le-produit", title, description),
};

export default function LaunchChecklistPage() {
  return (
    <main className="bg-paper text-ink">
      <article>
        <BreadcrumbJsonLd
          items={[
            { name: "Accueil", path: "/" },
            { name: "Lancer le produit", path: "/checklists/lancer-le-produit" },
          ]}
        />
        <header className="grid gap-12 px-6 pb-12 pt-16 md:grid-cols-12 md:px-12 md:pt-24">
          <div className="md:col-span-7">
            <p className="text-sm text-mute">
              <Link href="/">Accueil</Link>
              {" · "}
              Liste
            </p>
            <div className="mt-8 max-w-xs">
              <StepDrawing name="launch" />
            </div>
            <h1 className="display mt-6 max-w-[12ch] text-[clamp(3rem,7vw,6.2rem)]">Lancer le produit.</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed">
              Une liste pour vérifier qu&apos;un logiciel, un site ou une application peut être ouvert par quelqu&apos;un
              qui n&apos;a pas construit le projet. Le PDF complet s&apos;ouvre après l&apos;email.
            </p>
            <AuthorByline />
          </div>
          <nav aria-label="Sommaire" className="md:col-span-4 md:col-start-9">
            <p className="text-sm text-mute">Dans cette page</p>
            <ol className="mt-4 space-y-3">
              {toc.map(([id, label], index) => (
                <li key={id}>
                  <a href={`#${id}`} className="border-b border-line pb-1">
                    {String(index + 1).padStart(2, "0")} {label}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </header>

        <section id="quoi" className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">Qu&apos;est-ce qu&apos;une liste de lancement</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
            <p>
              C&apos;est la liste des points à cocher avant d&apos;ouvrir le logiciel au client, ou au public. Elle ne
              remplace pas le dessin du produit. Elle dit si ce qui a été construit peut vivre sans l&apos;écran de
              travail.
            </p>
            <p>
              Byte Force l&apos;utilise à la fin d&apos;un logiciel, d&apos;un site ou d&apos;une application, depuis le
              bureau du Technopark, à Casablanca. Le code livré appartient au client. Les comptes d&apos;hébergement
              aussi, quand le travail est remis.
            </p>
          </div>
        </section>

        <section id="pourquoi" className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">Pourquoi elle compte</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
            <p>
              Un logiciel peut être fini dans le dépôt et inutilisable le premier matin : le domaine ne pointe pas, le
              formulaire n&apos;envoie rien, personne ne sait qui lit la demande. La liste force ces points avant le
              jour J.
            </p>
            <p>Elle sert à quatre choses, pas à un discours de lancement.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Voir si le parcours convenu se fait sans l&apos;équipe qui l&apos;a écrit.</li>
              <li>Nommer qui tient le domaine, l&apos;hébergement et la boîte qui reçoit les demandes.</li>
              <li>Écrire ce qu&apos;on fait si le site ne répond plus.</li>
              <li>Garder une trace cochée, à renvoyer plus tard, pas une promesse orale.</li>
            </ul>
          </div>
        </section>

        <section id="contenu" className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">Ce qu&apos;elle contient</h2>
          <ol className="mt-8 max-w-2xl space-y-6">
            {[
              ["Le produit tel qu'il a été convenu", "Le parcours, les rôles, et ce qui reste hors du premier jour."],
              ["L'essai", "Le geste principal, fait par quelqu'un qui n'a pas écrit le code, avec ce qui a cassé."],
              ["La demande", "La page qui explique l'offre, et le formulaire qui part vers une personne nommée."],
              ["Le soutien", "Qui répond le premier jour, et où est écrit le correctif."],
              ["Le jour J", "Domaine, comptes, copie, et la phrase à dire si ça ne s'ouvre pas."],
            ].map(([heading, text], index) => (
              <li key={heading}>
                <h3 className="text-2xl">
                  {index + 1}. {heading}
                </h3>
                <p className="mt-2 leading-relaxed">{text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="utiliser" className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">Comment l&apos;utiliser</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
            <p>Cinq passages. On coche dans le PDF, on note ce qui manque, on ne coche pas pour aller plus vite.</p>
            <p>
              D&apos;abord le parcours convenu. Ensuite un essai par une personne du métier. Puis la page et le
              formulaire. Puis le nom de qui répond. Enfin le domaine et les comptes, au nom du client.
            </p>
          </div>
          <ul className="mt-8 max-w-2xl border-t border-line">
            {preview.map((item) => (
              <li key={item} className="flex gap-4 border-b border-line py-4">
                <span className="mt-1 h-4 w-4 shrink-0 border border-ink" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-2xl text-sm text-mute">
            Cinq lignes seulement. Le PDF en a davantage, avec des cases à cocher, des onglets et des liens.
          </p>
        </section>

        <section id="pdf" className="border-t border-line bg-ink px-6 py-16 text-paper md:px-12">
          <h2 className="display max-w-[14ch] text-4xl">Recevoir le PDF</h2>
          <div className="mt-8 max-w-xl text-paper [&_input]:border-paper [&_input]:bg-paper [&_input]:text-ink [&_button]:border-paper [&_button]:bg-paper [&_button]:text-ink [&_p]:text-paper">
            <ChecklistRequest />
          </div>
        </section>

        <section id="mise-a-jour" className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[16ch] text-4xl">L&apos;adapter à une mise à jour</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
            <p>
              Pour une évolution, on ne refait pas toute la liste. On coche ce qui change : la page touchée, l&apos;essai
              du geste modifié, le formulaire s&apos;il a bougé, et qui prévient l&apos;équipe.
            </p>
            <p>
              Le correctif d&apos;un site déjà en ligne se décide après lecture.{" "}
              <Link href="/services/maintenance" className="border-b border-ink">
                La maintenance
              </Link>{" "}
              dit ce suivi.{" "}
              <Link href="/contact" className="border-b border-ink">
                Écrire
              </Link>{" "}
              si le premier jour est déjà passé et que quelque chose bloque.
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
