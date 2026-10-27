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
    name: "Artifact Claude to MD",
    subtitle: "Convertisseur & Extracteur Markdown",
    description:
      "Convertissez et téléchargez instantanément les artefacts d'Anthropic Claude en fichiers Markdown (.md) propres. Import par URL ou copier-coller direct 100% privé et sans compte.",
    href: "/outils/claude-artifact-to-markdown",
    badge: "Nouveau & Gratuit",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    icon: (
      <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    features: [
      "Nettoyage HTML automatique",
      "Export .md immédiat",
      "100% exécuté dans votre navigateur",
      "Prise en charge des tableaux & code",
    ],
    cta: "Lancer le convertisseur",
  },
  {
    id: "audit-seo",
    name: "Audit SEO & Vitesse Gratuit",
    subtitle: "Diagnostic Technique & Performance",
    description:
      "Analysez la santé technique de votre site web en 60 secondes : balises méta, Core Web Vitals, indexation mobile et opportunités SEO concrètes pour surclasser vos concurrents.",
    href: "/audit",
    badge: "Populaire",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    icon: (
      <svg className="w-7 h-7 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    features: [
      "Score Core Web Vitals & Mobile",
      "Vérification balises title & H1-H3",
      "Rapport d'optimisation immédiat",
      "Recommandations de code prioritaires",
    ],
    cta: "Auditer mon site gratuitement",
  },
  {
    id: "suivi-projet",
    name: "Suivi de Projet en Ligne",
    subtitle: "Transparence Totale sur vos Développements",
    description:
      "Consultez en direct l'avancement, les jalons validés, les livrables du sprint en cours et les tests de recettes de votre logiciel sur mesure développé par ByteForce.",
    href: "/ou-en-est-le-projet",
    badge: "Espace Client",
    badgeColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
    icon: (
      <svg className="w-7 h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    features: [
      "Jalons & roadmap en temps réel",
      "Accès aux environnements de test",
      "Historique des commits & versions",
      "Communication directe avec les dévs",
    ],
    cta: "Accéder au suivi de projet",
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
    <main className="min-h-screen bg-[#07090e] text-white">
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

      {/* Hero Header */}
      <section className="relative pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-500/10 via-cyan-500/15 to-purple-500/10 blur-3xl opacity-70" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            ByteForce Free Tools · 100% Gratuit & Sans Inscription
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6">
            Boîte à Outils Gratuits pour{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-cyan-300 to-blue-400">
              Développeurs & Entreprises
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Des utilitaires rapides, sans publicité et respectueux de vos données pour booster votre productivité au quotidien : conversion d&apos;artefacts IA, audits techniques et pilotage de développement.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              0 compte requis
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              100% exécuté localement
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-bold">✓</span>
              Zéro conservation de données privées
            </div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Sélectionnez votre outil
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base mt-2">
            Cliquez sur un outil pour l&apos;utiliser immédiatement dans votre navigateur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {freeTools.map((tool) => (
            <div
              key={tool.id}
              className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-7 backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div className="w-13 h-13 p-3 rounded-xl bg-white/[0.06] border border-white/10 group-hover:border-emerald-500/40 group-hover:bg-emerald-500/10 transition-all">
                    {tool.icon}
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${tool.badgeColor}`}
                  >
                    {tool.badge}
                  </span>
                </div>

                <div className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                  {tool.subtitle}
                </div>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {tool.name}
                </h3>

                <p className="text-neutral-300 text-sm leading-relaxed mb-6">
                  {tool.description}
                </p>

                <div className="pt-4 border-t border-white/5 mb-6">
                  <div className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">
                    Fonctionnalités clés
                  </div>
                  <ul className="space-y-1.5 text-xs text-neutral-300">
                    {tool.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="text-emerald-400 text-sm">›</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link
                href={tool.href}
                className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl font-semibold text-sm bg-white/10 hover:bg-emerald-500 hover:text-black text-white border border-white/15 hover:border-emerald-400 transition-all shadow-md group-hover:shadow-emerald-500/20"
              >
                <span>{tool.cta}</span>
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Free Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-emerald-400 text-2xl font-bold mb-2">01.</div>
                <h4 className="text-white font-bold text-base mb-2">Conçu par des ingénieurs</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Nous créons ces outils d&apos;abord pour nos propres besoins quotidiens avant de les ouvrir gratuitement à la communauté.
                </p>
              </div>
              <div>
                <div className="text-cyan-400 text-2xl font-bold mb-2">02.</div>
                <h4 className="text-white font-bold text-base mb-2">Respect de la confidentialité</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  Aucun traqueur abusif, aucun stockage de vos documents confidentiels ou de vos codes sources sur nos serveurs.
                </p>
              </div>
              <div>
                <div className="text-purple-400 text-2xl font-bold mb-2">03.</div>
                <h4 className="text-white font-bold text-base mb-2">Besoin d&apos;aller plus loin ?</h4>
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  ByteForce conçoit des applications web sur mesure, CRM et automatisations pour entreprises au Maroc et à l&apos;international.
                </p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-sm font-semibold text-white">Un besoin de logiciel ou d&apos;automatisation sur mesure ?</div>
                <div className="text-xs text-neutral-400">Échangez avec un ingénieur ByteForce sous 24h ouvrées.</div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider bg-white text-black hover:bg-neutral-200 transition-colors"
              >
                Demander un devis
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
