import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const meta = seoMeta["/outils"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/outils" },
  openGraph: openGraph("/outils", meta.title, meta.description),
  keywords: [
    "byteforce free tools",
    "outils gratuits developpeur",
    "outils seo gratuit maroc",
    "convertisseur claude artifact",
    "audit technique seo",
    "suivi projet logiciel",
  ],
};

const freeTools = [
  {
    id: "claude-to-md",
    badge: "Outil IA & Markdown",
    tag: "100% local",
    name: "Artifact Claude vers MD",
    description:
      "Convertissez et téléchargez instantanément les artefacts d'Anthropic Claude en fichiers Markdown (.md) propres. Import par URL ou copier-coller direct sans aucun compte et sans stockage serveur.",
    href: "/outils/claude-artifact-to-markdown",
    features: [
      "Nettoyage automatique du HTML et des balises parasites",
      "Téléchargement direct en .md avec nom personnalisable",
      "Aperçu mis en forme et comptage de mots en temps réel",
      "100% exécuté dans le navigateur, confidentialité totale",
    ],
    cta: "Ouvrir le convertisseur",
  },
  {
    id: "audit-seo",
    badge: "Diagnostic Technique",
    tag: "60 secondes",
    name: "Audit SEO & Vitesse Gratuit",
    description:
      "On lit la page d'accueil de votre site : balises, performance, Core Web Vitals, indexation mobile et accessibilité. Aucun compte demandé, diagnostic immédiat.",
    href: "/audit",
    features: [
      "Mesure de la performance réelle et temps de chargement",
      "Vérification des balises Title, H1 et méta-descriptions",
      "Lecture par une machine (LLM / IA) et accessibilité",
      "Priorisation des blocages techniques à corriger",
    ],
    cta: "Auditer un site",
  },
  {
    id: "suivi-projet",
    badge: "Espace Projet",
    tag: "5 étapes",
    name: "Où en est le travail",
    description:
      "Cinq écrans pour faire le point sur un développement en cours ou à reprendre. Les réponses restent sur votre appareil. À la fin, la liste dit ce qu'il reste et le brief pour l'IA est prêt.",
    href: "/ou-en-est-le-projet",
    features: [
      "Diagnostic de ce qui tient déjà et de ce qui bloque",
      "Checklist des points critiques avant mise en ligne",
      "Brief prêt à copier pour ChatGPT ou Claude",
      "Sauvegarde automatique sur votre navigateur",
    ],
    cta: "Faire le point",
  },
];

export default function OutilsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ByteForce Free Tools - Outils Gratuits",
    description: meta.description,
    itemListElement: freeTools.map((tool, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: tool.name,
      url: `${site.url}${tool.href}`,
      description: tool.description,
    })),
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Outils Gratuits", path: "/outils" },
        ]}
      />

      {/* Sticky Sub-Header bar like /ou-en-est-le-projet */}
      <div className="sticky top-20 z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3 md:px-12">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            ByteForce · Outils Gratuits
          </p>
          <p className="font-mono text-[11px] text-outline">
            3 outils · 100% sur cet appareil
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <p className="text-sm text-outline">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
        </p>

        <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
          Outils gratuits.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface">
          Trois outils utiles, sans compte et sans publicité. Le traitement s&apos;exécute directement sur votre appareil. À aucun moment vos documents, vos codes sources ou vos données ne sont conservés sur nos serveurs.
        </p>

        {/* Tools Cards */}
        <div className="mt-12 space-y-8">
          {freeTools.map((tool) => (
            <section
              key={tool.id}
              className="border border-line bg-surface-container-lowest p-6 md:p-8 transition-colors hover:border-primary"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                  {tool.badge}
                </span>
                <span className="font-mono text-[11px] text-outline uppercase">
                  {tool.tag}
                </span>
              </div>

              <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-on-surface">
                <Link href={tool.href} className="hover:text-primary transition-colors">
                  {tool.name}
                </Link>
              </h2>

              <p className="mt-3 text-base leading-relaxed text-on-surface-variant">
                {tool.description}
              </p>

              <ul className="mt-5 space-y-2 border-t border-outline-variant/40 pt-4">
                {tool.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-on-surface-variant">
                    <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href={tool.href} className="btn">
                  {tool.cta}
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Editorial Note / Contact CTA matching ou-en-est */}
        <div className="mt-14 border border-line bg-surface-container-lowest p-6 md:p-8">
          <p className="font-headline text-xl font-bold tracking-tight text-on-surface">
            Besoin d&apos;un logiciel ou d&apos;un outil sur mesure ?
          </p>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-on-surface-variant">
            ByteForce développe des logiciels métier, CRM personnalisés, applications web et automatisations pour entreprises au Maroc et à l&apos;international. Propriété exclusive du code, pas d&apos;abonnement par utilisateur, équipe basée à Casablanca.
          </p>
          <div className="mt-6">
            <Link href="/contact" className="btn">
              Parler d&apos;un projet
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
