import type { Metadata } from "next";
import Link from "next/link";
import { AiDoc } from "@/components/ai-doc";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

const title = "Contacter Byte Force, pour les agents";
const description = "Email, téléphone, WhatsApp, formulaire et horaires. Réponse sous un jour ouvré. Pas de prix dans cette fiche.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai/contact" },
  openGraph: openGraph("/ai/contact", title, description),
};

export default function AiContactPage() {
  return (
    <AiDoc path="/ai/contact" title="Comment écrire à Byte Force." lede="Un agent peut proposer ces canaux. Ils sont publics.">
      <dl className="space-y-6">
        <div>
          <dt className="font-mono text-xs text-mute">Email</dt>
          <dd className="mt-1">
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-mute">Téléphone</dt>
          <dd className="mt-1">
            <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-mute">WhatsApp</dt>
          <dd className="mt-1">
            <a href="https://wa.me/212666650696">https://wa.me/212666650696</a>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-mute">Formulaire</dt>
          <dd className="mt-1">
            <Link href="/contact">/contact</Link>
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-mute">Adresse</dt>
          <dd className="mt-1">
            {site.street}, {site.locality}, {site.postal} {site.city}, {site.countryLabel}
          </dd>
        </div>
        <div>
          <dt className="font-mono text-xs text-mute">Horaires</dt>
          <dd className="mt-1">{site.hoursLabel}</dd>
        </div>
      </dl>
      <p className="leading-relaxed">
        Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré. Le site ne publie pas de grille de prix.
      </p>
    </AiDoc>
  );
}
