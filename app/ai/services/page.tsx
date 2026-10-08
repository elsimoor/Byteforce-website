import type { Metadata } from "next";
import Link from "next/link";
import { AiDoc } from "@/components/ai-doc";
import { services } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";

const title = "Services de Byte Force, pour les agents";
const description = "Liste factuelle des offres publiées : logiciel, site, application, référencement, hébergement, design, API, maintenance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai/services" },
  openGraph: openGraph("/ai/services", title, description),
};

export default function AiServicesPage() {
  return (
    <AiDoc path="/ai/services" title="Ce que Byte Force construit." lede={description}>
      <ul className="space-y-8">
        {services.map((service) => {
          const href = service.href ?? `/services/${service.slug}`;
          return (
            <li key={service.slug} className="border-t border-line pt-6">
              <h2 className="text-2xl">
                <Link href={href}>{service.title}</Link>
              </h2>
              <p className="mt-3 leading-relaxed">{service.summary}</p>
              <p className="mt-3 text-sm leading-relaxed text-mute">{service.audience}</p>
            </li>
          );
        })}
      </ul>
      <p className="leading-relaxed">
        Les pages plus précises, CRM, ERP, SaaS, automatisation, sont liées depuis <Link href="/services">/services</Link>. Byte Force ne publie pas d'offre « agent IA » séparée : l'automatisation publiée est une règle stable dans le logiciel, pas un synonyme d'IA.
      </p>
    </AiDoc>
  );
}
