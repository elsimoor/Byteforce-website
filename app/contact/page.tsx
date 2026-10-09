import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Écrire à Casablanca",
  description:
    "Écrire à Byte Force à Casablanca pour un site, une application ou un logiciel sur mesure.",
  alternates: { canonical: "/contact" },
  openGraph: openGraph(
    "/contact",
    "Contact · Byte Force",
    "Écrire à Byte Force à Casablanca pour un site, une application ou un logiciel sur mesure.",
  ),
};

type Props = { searchParams: Promise<{ sent?: string; error?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const query = await searchParams;

  return (
    <main>
      <article>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact" }]} />
      <div className="grid gap-16 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
      <div className="md:col-span-5">
        <h1 className="display text-[clamp(3.2rem,7vw,6.5rem)]">Écrire à Casablanca.</h1>
        <p className="mt-10 text-2xl tracking-tight">
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </p>
        <p className="mt-3">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="mt-3">
          <a href="https://wa.me/212666650696">WhatsApp</a>
        </p>
        <div className="mt-8 max-w-md space-y-4 text-sm leading-relaxed text-mute">
          <p>La réponse part sous un jour ouvré, du lundi au vendredi, de 9h à 19h.</p>
          <p>
            Byte Force est le studio qui écrit le logiciel, l&apos;application ou le site. Le message sert à voir qui
            fait l&apos;action aujourd&apos;hui, où elle se passe, et ce qui bloque. Un fichier Excel, un outil déjà en
            place, ou un site qui ne produit pas de demandes : c&apos;est assez pour commencer. Un cahier des charges
            complet peut attendre.
          </p>
          <p>
            Après l&apos;envoi, la réponse arrive par email ou par WhatsApp. Si le sujet n&apos;est pas un logiciel, un
            site ou une application, la réponse le dit. Les travaux déjà en ligne sont sur la page des réalisations. La
            page d&apos;accueil reprend les quatre produits montrés avec une capture.
          </p>
          <p>
            Le message utile tient en peu de lignes : votre nom, un email, ce qui existe déjà (un site, un fichier, un
            outil) et ce qui doit changer. Un brief de cinquante pages n&apos;est pas nécessaire.
          </p>
          <p>
            {site.street}
            <br />
            {site.locality}, {site.postal} {site.city}
            <br />
            {site.countryLabel}
            <br />
            {site.hoursLabel}
          </p>
        </div>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        {query.sent ? (
          <p className="text-3xl leading-snug" role="status">
            Demande enregistrée. On revient vers vous.
          </p>
        ) : null}
        {query.error ? (
          <p className="mb-6 text-sm" role="alert">
            Le nom, l&apos;email et le message sont nécessaires.
          </p>
        ) : null}
        {!query.sent ? <LeadForm /> : null}
      </div>
      </div>
      </article>
    </main>
  );
}
