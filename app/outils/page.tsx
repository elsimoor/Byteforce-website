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
      "Convertissez et téléchargez instantanément les artefacts d'Anthropic Claude en fichiers Markdown (.md) propres. Import par URL ou copier-coller direct sans compte et sans stockage serveur.",
    href: "/outils/claude-artifact-to-markdown",
    features: [
      "Nettoyage automatique du HTML et balises parasites",
      "Téléchargement direct en .md avec nom sur mesure",
      "Aperçu mis en forme & comptage de mots en temps réel",
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
      "Mesure de la performance réelle & temps de chargement",
      "Vérification balises Title, H1 et méta-descriptions",
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
    <article className="w-full">
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

      {/* Sticky Sub-Header bar spanning full max-w-7xl width */}
      <div className="sticky top-20 z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 py-3">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            ByteForce · Outils Gratuits
          </p>
          <p className="font-mono text-[11px] text-outline">
            3 outils disponibles · 100% sur cet appareil
          </p>
        </div>
      </div>

      {/* Main Wide Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <p className="text-sm text-outline">
          <Link href="/" className="hover:text-primary transition-colors">
            Accueil
          </Link>
        </p>

        <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-outline-variant/50 pb-8">
          <div>
            <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
              Outils gratuits.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface">
              Trois utilitaires rapides, sans inscription et sans publicité. Le traitement s&apos;exécute directement sur votre appareil. À aucun moment vos documents, vos codes sources ou vos données ne sont conservés sur nos serveurs.
            </p>
          </div>
          <div className="font-mono text-xs text-outline space-y-1">
            <p>✓ Aucun compte requis</p>
            <p>✓ Traitement in-browser</p>
            <p>✓ Confidentialité 100% garantie</p>
          </div>
        </div>

        {/* Wide 3-column responsive grid on desktop */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {freeTools.map((tool) => (
            <section
              key={tool.id}
              className="flex flex-col justify-between border border-line bg-surface-container-lowest p-6 sm:p-8 transition-colors hover:border-primary"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
                    {tool.badge}
                  </span>
                  <span className="font-mono text-[11px] text-outline uppercase">
                    {tool.tag}
                  </span>
                </div>

                <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight text-on-surface">
                  <Link href={tool.href} className="hover:text-primary transition-colors">
                    {tool.name}
                  </Link>
                </h2>

                <p className="mt-3 text-sm sm:text-base leading-relaxed text-on-surface-variant">
                  {tool.description}
                </p>

                <ul className="mt-6 space-y-2.5 border-t border-outline-variant/40 pt-4">
                  {tool.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-on-surface-variant">
                      <span className="mt-1 h-2 w-2 shrink-0 bg-primary" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-outline-variant/30">
                <Link href={tool.href} className="btn w-full text-center">
                  {tool.cta}
                </Link>
              </div>
            </section>
          ))}
        </div>

        {/* Editorial Contact Card across full width */}
        <div className="mt-16 border border-line bg-surface-container-lowest p-8 md:p-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <p className="font-headline text-2xl font-bold tracking-tight text-on-surface">
              Besoin d&apos;un logiciel ou d&apos;une automatisation sur mesure ?
            </p>
            <p className="mt-2 text-base leading-relaxed text-on-surface-variant">
              ByteForce développe des logiciels métier, CRM personnalisés, applications web et automatisations pour entreprises au Maroc et à l&apos;international. Propriété exclusive du code, pas d&apos;abonnement par utilisateur, équipe basée à Casablanca.
            </p>
          </div>
          <div className="shrink-0">
            <Link href="/contact" className="btn min-h-12 px-6">
              Parler d&apos;un projet
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
