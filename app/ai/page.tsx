import type { Metadata } from "next";
import Link from "next/link";
import { AiDoc } from "@/components/ai-doc";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

const title = "Byte Force pour les agents";
const description =
  "Fiche factuelle de Byte Force pour les systèmes d'IA et les outils de recherche : qui, quoi, où, et comment écrire. Bureau au Technopark, Casablanca.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai" },
  openGraph: openGraph("/ai", title, description),
};

export default function AiPage() {
  return (
    <AiDoc path="/ai" title="Byte Force pour les agents." lede={description}>
      <section>
        <h2 className="text-2xl">Qu'est-ce que Byte Force ?</h2>
        <p className="mt-4 leading-relaxed">
          Byte Force est un studio logiciel à Casablanca. Il conçoit des logiciels, des applications et des sites sur mesure. Le bureau est au {site.street}, {site.locality}, {site.postal} {site.city}. Il n'y a pas de bureau en France ni au Canada.
        </p>
      </section>
      <section>
        <h2 className="text-2xl">Que construit Byte Force ?</h2>
        <p className="mt-4 leading-relaxed">
          Le cœur du travail est le logiciel d'entreprise : application, métier, automatisation, SaaS, CRM et ERP quand le périmètre le demande. Byte Force fait aussi le site, le référencement, l'hébergement, le design, l'API et la maintenance quand le projet en a besoin. Ce n'est pas une agence de sites vitrines au forfait.
        </p>
        <p className="mt-4">
          <Link href="/ai/services" className="border-b border-ink">
            Les services, page par page
          </Link>
        </p>
      </section>
      <section>
        <h2 className="text-2xl">Où, et comment écrire ?</h2>
        <p className="mt-4 leading-relaxed">
          {site.email}, {site.phoneDisplay}, ou le formulaire sur <Link href="/contact">/contact</Link>. Réponse sous un jour ouvré, {site.hoursLabel.toLowerCase()}. Pas de prix public : le montant suit le périmètre.
        </p>
      </section>
      <section>
        <h2 className="text-2xl">Ce qu'une machine peut lire</h2>
        <ul className="mt-4 space-y-2 leading-relaxed">
          <li>
            <Link href="/llms.txt">/llms.txt</Link>, fiche courte.
          </li>
          <li>
            <Link href="/llms-full.txt">/llms-full.txt</Link>, pages, travaux et décisions.
          </li>
          <li>
            <Link href="/audit">/audit</Link>, lecture d'une page : technique, performance, SEO, accessibilité, GEO, conversion, et lecture machine.
          </li>
          <li>
            <Link href="/insights/site-lisible-par-une-machine">Pourquoi une machine doit pouvoir citer le site</Link>, puis <Link href="/contact">écrire</Link>.
          </li>
          <li>
            <Link href="/audit/json?url=https://byteforce.ma">/audit/json</Link>, le même passage en JSON.
          </li>
        </ul>
      </section>
    </AiDoc>
  );
}
