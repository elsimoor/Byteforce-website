import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { SiteIndex } from "@/components/site-index";
import { MailLink } from "@/components/mail-link";
import { site } from "@/lib/site";

const contactMeta = seoMeta["/contact"];

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
  alternates: { canonical: "/contact" },
  openGraph: openGraph("/contact", contactMeta.title, contactMeta.description),
};

type Props = { searchParams: Promise<{ sent?: string; error?: string; service?: string; budget?: string; message?: string }> };

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
          <MailLink />
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
            page d&apos;accueil reprend les quatre produits montrés avec une capture. Le bureau reçoit du lundi au
            vendredi, de 9h à 19h, au Technopark. Un prix n&apos;est pas demandé dans ce premier message. Il
            n&apos;y a pas de bureau en France ni au Canada. Les projets lillois et montréalais du catalogue ont été
            faits depuis Casablanca.
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
        {!query.sent ? <LeadForm initial={{ service: query.service, budget: query.budget, message: query.message }} /> : null}
      </div>
      </div>
      <SiteIndex part={4} />
      </article>
    </main>
  );
}
