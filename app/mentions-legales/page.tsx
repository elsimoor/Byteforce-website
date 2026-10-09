import type { Metadata } from "next";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

const title = "Mentions légales";
const description =
  "Éditeur, contact et hébergement du site Byte Force. Le bureau est à Casablanca, au Technopark, boulevard Dammam, Aïn Chock.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/mentions-legales" },
  openGraph: openGraph("/mentions-legales", title, description),
};

export default function LegalPage() {
  return (
    <main className="max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="display text-6xl">Mentions légales</h1>
      <div className="mt-8 space-y-4 leading-relaxed">
        <p>
          Le site présente Byte Force, société basée à {site.street}, {site.locality},{" "}
          {site.postal} {site.city}, {site.countryLabel}.
        </p>
        <p>
          Contact: {site.email}, {site.phoneDisplay}. Horaires: {site.hoursLabel}.
        </p>
        <p>
          Les textes décrivent les offres et les réalisations publiées. Ils ne
          constituent pas un devis. Un chiffre, un avis ou un client qui n&apos;est
          pas sur la page n&apos;est pas affirmé.
        </p>
        <p>
          Les demandes envoyées par le formulaire sont enregistrées pour pouvoir
          y répondre. Elles ne sont pas affichées publiquement. Le budget indiqué
          dans le formulaire sert uniquement à préparer la réponse.
        </p>
        <p>
          Un travail commence après un périmètre écrit. Le code, le dépôt et les
          comptes d&apos;hébergement livrés reviennent au client. Le texte du site
          n&apos;est pas un devis.
        </p>
      </div>
    </main>
  );
}
