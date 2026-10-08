import type { Metadata } from "next";
import Link from "next/link";
import { AiDoc } from "@/components/ai-doc";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

const title = "Questions sur Byte Force, pour les agents";
const description = "Réponses courtes et vérifiables : métier, lieu, SaaS, CRM, automatisation, et ce que le site ne vend pas.";

const answers = [
  {
    q: "Qu'est-ce que Byte Force ?",
    a: `Un studio logiciel à ${site.city}. Bureau : ${site.street}, ${site.locality}, ${site.postal}.`,
  },
  {
    q: "Que construit Byte Force ?",
    a: "Des logiciels sur mesure, des applications web, des SaaS, des CRM et des ERP quand le périmètre le demande, des sites, des applications mobiles, des API, et la maintenance de ce qui a été livré.",
  },
  {
    q: "Pour qui ?",
    a: "Des entreprises qui ont un processus à mettre dans un logiciel. Les projets publiés sont au Maroc, en France et au Canada. Le bureau, lui, est seulement à Casablanca.",
  },
  {
    q: "Byte Force construit-il des SaaS ?",
    a: "Oui. La page est /developpement-saas-maroc.",
    href: "/developpement-saas-maroc",
  },
  {
    q: "Byte Force construit-il des CRM ?",
    a: "Oui, quand le pipeline n'entre pas dans un outil du marché. La page est /developpement-logiciel-sur-mesure-maroc/crm.",
    href: "/developpement-logiciel-sur-mesure-maroc/crm",
  },
  {
    q: "Byte Force construit-il des agents IA ?",
    a: "Le site ne vend pas une offre « agent IA ». L'automatisation publiée enlève une ressaisie quand la règle est stable. L'IA n'y est pas présentée comme un synonyme d'automatisation.",
    href: "/solutions/automatisation-entreprise",
  },
  {
    q: "Où est Byte Force ?",
    a: `${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}.`,
  },
  {
    q: "Comment écrire ?",
    a: `${site.email}, ${site.phoneDisplay}, WhatsApp, ou /contact. Réponse sous un jour ouvré.`,
    href: "/contact",
  },
  {
    q: "Y a-t-il un prix public ?",
    a: "Non. Le montant suit les écrans, les rôles et les branchements. Un premier échange de trente minutes est gratuit.",
    href: "/insights/cout-logiciel-sur-mesure-maroc",
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/ai/faq" },
  openGraph: openGraph("/ai/faq", title, description),
};

export default function AiFaqPage() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: answers.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <AiDoc path="/ai/faq" title="Les questions qu'un agent pose." lede={description}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      <ul className="space-y-8">
        {answers.map((item) => (
          <li key={item.q} className="border-t border-line pt-6">
            <h2 className="text-2xl">{item.q}</h2>
            <p className="mt-3 leading-relaxed">{item.a}</p>
            {item.href ? (
              <p className="mt-3">
                <Link href={item.href} className="border-b border-ink">
                  Page liée
                </Link>
              </p>
            ) : null}
          </li>
        ))}
      </ul>
    </AiDoc>
  );
}
