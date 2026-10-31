import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { articles } from "@/lib/articles";
import { projects, services } from "@/lib/content";
import { cityPages } from "@/lib/city-pages";
import { studioSections } from "@/lib/studio-sections";
import { openGraph } from "@/lib/open-graph";
import { runSearch } from "@/lib/actions";

const title = "Recherche sur le site";
const description =
  "Recherchez et découvrez toutes les pages de ByteForce : logiciels sur mesure, CRM, ERP, SaaS, applications mobiles, guides et études de cas.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/recherche" },
  openGraph: openGraph("/recherche", `${title} · Byte Force`, description),
};

type Props = { searchParams: Promise<{ q?: string }> };

type SearchableItem = {
  href: string;
  title: string;
  text: string;
  category: "Service" | "Solution" | "Article" | "Réalisation" | "Local" | "Studio";
  keywords?: string;
};

// Core commercial landing pages & solutions
const commercialPages: SearchableItem[] = [
  {
    href: "/crm/logiciel-crm-personnalise",
    title: "CRM sur mesure au Maroc : logiciel de gestion client personnalisé",
    text: "Développement de CRM sur mesure au Maroc et à Casablanca : pipeline commercial, relances WhatsApp, gestion client et 0 abonnement par utilisateur. Devis sous 24h.",
    category: "Solution",
    keywords: "crm sur mesure personnalise personnalisable maroc casablanca pipeline devis whatsapp commercial",
  },
  {
    href: "/developpement-saas-maroc",
    title: "Développement SaaS au Maroc : création de logiciels cloud et MVP scalables",
    text: "Développement SaaS au Maroc et MVP à Casablanca : architecture multi-tenant, gestion des abonnements CMI/Stripe et code 100% cédé. Devis sous 24h.",
    category: "Service",
    keywords: "developpement saas maroc creation logiciel plateforme mvp casablanca abonnements stripe cmi cloud",
  },
  {
    href: "/developpement-logiciel-sur-mesure-casablanca",
    title: "Développement de logiciel sur mesure à Casablanca : applications métier pour entreprises",
    text: "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h.",
    category: "Service",
    keywords: "developpement logiciel sur mesure casablanca agence entreprise informatique technopark erp crm gestion",
  },
  {
    href: "/developpement-erp-maroc",
    title: "Développement ERP au Maroc : logiciel de gestion d'entreprise sur mesure",
    text: "Développement d'ERP sur mesure au Maroc : gestion des stocks, achats, facturation DGI et production. Zéro abonnement par licence. Devis gratuit sous 24h.",
    category: "Solution",
    keywords: "developpement erp maroc logiciel sur mesure personnalise gestion entreprise stocks achats facturation dgi gpao",
  },
  {
    href: "/developpement-application-mobile-casablanca",
    title: "Développement d'application mobile à Casablanca : créateur d'apps iOS et Android",
    text: "Agence de développement d'applications mobiles à Casablanca (Technopark) : iOS, Android et React Native. Applications métier & MVP. Devis gratuit sous 24h.",
    category: "Service",
    keywords: "developpement application mobile casablanca ios android react native agence devis prix technopark",
  },
  {
    href: "/developpement-logiciel-sur-mesure-maroc",
    title: "Développement de logiciel sur mesure au Maroc",
    text: "Développement de logiciels métier et CRM sur mesure au Maroc. Automatisez vos flux, éliminez Excel et réduisez vos coûts. Devis gratuit en 24h.",
    category: "Service",
    keywords: "logiciel sur mesure maroc metier developpement pme code cede",
  },
  {
    href: "/crm-sur-mesure-maroc",
    title: "CRM sur mesure au Maroc : logiciel commercial personnalisé",
    text: "CRM sur mesure au Maroc pour PME : suivi commercial, devis, relances et WhatsApp. 0 abonnement par utilisateur, code 100% à vous. Devis gratuit sous 24h.",
    category: "Solution",
    keywords: "crm sur mesure maroc logiciel commercial devis whatsapp",
  },
  {
    href: "/developpement-application-mobile-maroc",
    title: "Développement d'application mobile au Maroc : iOS, Android et React Native",
    text: "Développement d'applications mobiles iOS et Android au Maroc. Design UX soigné, publication stores et code cédé. Devis gratuit en 24h garanti.",
    category: "Service",
    keywords: "application mobile maroc ios android react native expo stores app store google play",
  },
  {
    href: "/integration-ia-automatisation-entreprise-maroc",
    title: "Intégration IA et automatisation de processus d'entreprise au Maroc",
    text: "Automatisez vos processus métier avec l'IA au Maroc : traitement de factures, agents WhatsApp, workflows sur mesure. Devis gratuit en 24h.",
    category: "Service",
    keywords: "intelligence artificielle ia maroc automatisation workflows ocr factures whatsapp processus",
  },
  {
    href: "/agence-wordpress-maroc",
    title: "Agence WordPress au Maroc : création de sites et plugins sur mesure",
    text: "Création de sites WordPress performants et plugins sur mesure au Maroc. Vitesse, sécurité et référencement naturel. Devis gratuit en 24h.",
    category: "Service",
    keywords: "wordpress maroc agence plugins sur mesure woocommerce",
  },
  {
    href: "/solutions/remplacer-excel",
    title: "Remplacer Excel par un logiciel sur mesure",
    text: "Fini les erreurs de formules et les fichiers partagés qui saturent. Passez à une application métier collaborative sécurisée.",
    category: "Solution",
    keywords: "remplacer excel tableur logiciel gestion pme doublons formules",
  },
  {
    href: "/solutions/remplacer-saas",
    title: "Remplacer vos abonnements SaaS par un logiciel sur mesure",
    text: "Supprimez les licences mensuelles récurrentes et devenez propriétaire de votre outil de travail.",
    category: "Solution",
    keywords: "remplacer saas abonnements mensuels propriete code economies tco",
  },
  {
    href: "/solutions/automatisation-entreprise",
    title: "Automatisation des processus d'entreprise au Maroc",
    text: "Éliminez les tâches manuelles et répétitives en connectant vos outils et flux de données opérationnels.",
    category: "Solution",
    keywords: "automatisation entreprise flux api synchronisation ressaisie",
  },
  {
    href: "/solutions/moderniser-application",
    title: "Modernisation et refonte d'applications logicielles",
    text: "Mise à niveau de vos anciennes applications vers une pile web moderne, rapide et pérenne (Next.js, Node.js, PostgreSQL).",
    category: "Solution",
    keywords: "refonte modernisation migration cloud legacy application web",
  },
  {
    href: "/solutions/logiciel-pme",
    title: "Logiciel de gestion pour PME au Maroc",
    text: "Des outils simples et efficaces pour piloter votre activité commerciale et logistique sans usine à gaz.",
    category: "Solution",
    keywords: "logiciel gestion pme maroc outils simples rentables",
  },
  {
    href: "/solutions/logiciel-entreprise",
    title: "Logiciels d'entreprise sur mesure pour grands comptes",
    text: "Solutions logicielles robustes et évolutives pour les grandes organisations et institutions.",
    category: "Solution",
    keywords: "logiciel entreprise grands comptes haute disponibilite securite",
  },
];

const popularSearches = [
  "CRM sur mesure",
  "Développement SaaS Maroc",
  "Logiciel Casablanca",
  "ERP Maroc",
  "Application mobile Casablanca",
  "Remplacer Excel",
  "Prix logiciel sur mesure",
  "Automatisation IA",
];

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;
  const query = q.trim().toLowerCase();

  // Unified index of all pages across the website
  const rawList: SearchableItem[] = [
    ...commercialPages,
    ...services.map((service) => ({
      href: service.href ?? `/services/${service.slug}`,
      title: service.title,
      text: service.summary,
      category: "Service" as const,
      keywords: service.primaryKeyword,
    })),
    ...projects.map((project) => ({
      href: `/realisations/${project.slug}`,
      title: `${project.title} (${project.city}, ${project.country})`,
      text: `${project.description} ${project.category} ${project.year}`,
      category: "Réalisation" as const,
      keywords: `${project.city} ${project.category} ${project.serviceSlug}`,
    })),
    ...articles.map((article) => ({
      href: `/insights/${article.slug}`,
      title: article.h1,
      text: article.description,
      category: "Article" as const,
      keywords: article.lede,
    })),
    ...cityPages.map((city) => ({
      href: `/villes/${city.slug}`,
      title: `${city.title} (${city.city})`,
      text: city.description,
      category: "Local" as const,
      keywords: `${city.city} ${city.keyword}`,
    })),
    ...studioSections.map((section) => ({
      href: `/studio/${section.slug}`,
      title: section.title,
      text: `${section.h1} ${section.card}`,
      category: "Studio" as const,
    })),
  ];

  // Deduplicate by href
  const seenHrefs = new Set<string>();
  const pages: SearchableItem[] = [];
  for (const item of rawList) {
    if (!seenHrefs.has(item.href)) {
      seenHrefs.add(item.href);
      pages.push(item);
    }
  }

  // Filter matches based on query
  const matches = query
    ? pages
        .filter((page) => {
          const haystack = `${page.title} ${page.text} ${page.keywords ?? ""}`.toLowerCase();
          return haystack.includes(query);
        })
        .slice(0, 50)
    : [];

  return (
    <main className="w-full">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Recherche", path: "/recherche" }]} />
      
      <article className="px-6 py-16 md:px-12 md:py-24 max-w-5xl mx-auto">
        <h1 className="display text-[clamp(2.8rem,7vw,5.5rem)]">Recherche.</h1>
        
        <p className="mt-6 max-w-2xl text-lg text-slate-700 leading-relaxed">
          Explorez l&apos;ensemble de nos solutions, services de développement logiciel, applications mobiles,
          études de cas et articles stratégiques.
        </p>

        {/* Search form */}
        <form action={runSearch} method="post" className="mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
          <label className="min-w-0 flex-1">
            <span className="sr-only">Terme à rechercher</span>
            <input
              name="q"
              type="search"
              defaultValue={q}
              placeholder="ex. CRM sur mesure, SaaS, ERP, Casablanca, Excel..."
              aria-label="Terme à rechercher"
              className="h-12 w-full rounded border border-line bg-paper px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </label>
          <button type="submit" className="h-12 rounded bg-ink px-6 text-sm font-semibold text-paper hover:bg-slate-800 transition-colors">
            Chercher
          </button>
        </form>

        {/* Quick Discovery Tags */}
        <div className="mt-6">
          <p className="text-xs font-semibold text-mute uppercase tracking-wider">Recherches fréquentes :</p>
          <div className="mt-2.5 flex flex-wrap gap-2">
            {popularSearches.map((term) => (
              <Link
                key={term}
                href={`/recherche?q=${encodeURIComponent(term)}`}
                className="inline-flex items-center rounded-full border border-line bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 hover:border-slate-400 hover:bg-white transition-all"
              >
                {term}
              </Link>
            ))}
          </div>
        </div>

        {/* Query Results */}
        {query ? (
          <div className="mt-12">
            <div className="flex items-center justify-between border-b border-line pb-3">
              <p className="text-sm font-semibold text-slate-900">
                {matches.length} résultat{matches.length === 1 ? "" : "s"} pour « {q.trim()} »
              </p>
              <Link href="/recherche" className="text-xs text-primary hover:underline">
                Effacer la recherche
              </Link>
            </div>

            {matches.length === 0 ? (
              <div className="mt-8 rounded-xl border border-line bg-slate-50 p-6 text-center">
                <p className="text-base text-slate-800 font-medium">Aucun résultat ne correspond exactement à votre recherche.</p>
                <p className="mt-2 text-sm text-mute">
                  Essayez avec un mot-clé plus court ou parcourez nos solutions ci-dessous. Vous pouvez également nous contacter directement.
                </p>
                <Link href="/contact" className="btn mt-4 inline-block">
                  Échanger sur votre projet
                </Link>
              </div>
            ) : (
              <ul className="mt-4 divide-y divide-line">
                {matches.map((page) => (
                  <li key={page.href} className="py-4 hover:bg-slate-50/50 rounded-lg transition-colors px-2">
                    <div className="flex items-center gap-2">
                      <span className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-600">
                        {page.category}
                      </span>
                      <Link href={page.href} className="font-semibold text-slate-950 hover:text-primary transition-colors">
                        {page.title}
                      </Link>
                    </div>
                    <p className="mt-1 text-sm text-slate-600 leading-relaxed">{page.text}</p>
                    <span className="mt-1 block text-xs font-mono text-slate-400">{page.href}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          /* Default Discovery Hub when no query is typed */
          <div className="mt-16 space-y-12">
            <div>
              <h2 className="text-xl font-bold text-slate-950">Pages Commerciales & Logiciels Sur Mesure</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {commercialPages.slice(0, 6).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="block rounded-xl border border-line bg-white p-5 hover:border-primary hover:shadow-sm transition-all"
                  >
                    <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-semibold text-blue-700">
                      {page.category}
                    </span>
                    <h3 className="mt-2 text-base font-semibold text-slate-950">{page.title}</h3>
                    <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">{page.text}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950">Guides Stratégiques & Décisions Récentes</h2>
              <ul className="mt-4 divide-y divide-line rounded-xl border border-line bg-white p-4">
                {articles.slice(0, 8).map((article) => (
                  <li key={article.slug} className="py-3 first:pt-1 last:pb-1">
                    <Link
                      href={`/insights/${article.slug}`}
                      className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
                    >
                      <span className="font-medium text-slate-900 group-hover:text-primary transition-colors text-sm">
                        {article.h1}
                      </span>
                      <span className="text-xs text-mute font-mono shrink-0">/insights/{article.slug}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-slate-950">Solutions Métier Spécifiques</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {commercialPages.slice(6, 12).map((page) => (
                  <Link
                    key={page.href}
                    href={page.href}
                    className="rounded-lg border border-line p-3 hover:bg-slate-50 transition-colors"
                  >
                    <span className="block text-sm font-semibold text-slate-900">{page.title}</span>
                    <span className="mt-1 block text-xs font-mono text-slate-400">{page.href}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
