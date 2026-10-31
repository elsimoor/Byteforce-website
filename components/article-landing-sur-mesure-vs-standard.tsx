"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingSurMesureVsStandard({ article }: { article: Article }) {
  const [teamMembers, setTeamMembers] = useState<number>(15);
  const [monthlyLicenseCostUsd, setMonthlyLicenseCostUsd] = useState<number>(60);

  // License cost in MAD (1 USD = 10 MAD)
  const annualSaasMad = Math.round(teamMembers * monthlyLicenseCostUsd * 10 * 12);
  const threeYearsSaasMad = annualSaasMad * 3;
  const fiveYearsSaasMad = annualSaasMad * 5;
  const customEstimateMad = 58000;

  const url = `${site.url}/insights/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Décisions", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: article.h1, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: article.h1,
        description: article.description,
        inLanguage: "fr",
        datePublished: article.date,
        dateModified: article.date,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
          image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
          jobTitle: "Full-Stack Software Engineer",
          description: "Full-Stack Software Engineer & Lead ByteForce Technopark Casablanca.",
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 360, height: 360 },
        },
      },
    ],
  };

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, j'aimerais échanger sur l'arbitrage entre logiciel standard et sur mesure pour mon entreprise."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with TCO Arbitrage Simulator) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-emerald-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-2 font-mono text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/insights" className="transition-colors hover:text-white">
              Décisions & Stratégie
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Sur Mesure vs Standard</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Dossier d&apos;Arbitrage Stratégique · PME Maroc
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Logiciel standard ou sur mesure au Maroc : comment faire le bon choix ?
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                D&apos;un côté, un outil générique sur étagère disponible immédiatement sous forme d&apos;abonnement en
                dollars ; de l&apos;autre, un logiciel d&apos;entreprise propriétaire taillé pour vos flux réels.
                Découvrez la comparaison objective des coûts réels sur 3 ans (TCO), les critères opérationnels pour
                trancher et les pièges financiers à éviter.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Planifier un audit d&apos;arbitrage gratuit (30 min)</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000dbf] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-5 py-3.5 text-sm font-medium text-emerald-300 backdrop-blur-sm transition-colors hover:border-emerald-400 hover:bg-emerald-500/20"
                >
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span>Discussion WhatsApp directe</span>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">TCO 3 ans</span>
                  <span className="text-white/50 text-[11px]">Sur mesure rentable dès 8 mois</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">100% Propriété</span>
                  <span className="text-white/50 text-[11px]">Actif d&apos;entreprise au bilan</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme DGI</span>
                  <span className="text-white/50 text-[11px]">Règles fiscales marocaines</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Zéro Dette</span>
                  <span className="text-white/50 text-[11px]">Aucun abonnement par utilisateur</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive TCO Comparison Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur TCO : Locataire vs Propriétaire</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Calcul Net
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Utilisateurs dans l&apos;entreprise :</span>
                      <span className="text-emerald-400 font-bold">{teamMembers} collaborateurs</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={teamMembers}
                      onChange={(e) => setTeamMembers(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Coût mensuel par licence SaaS :</span>
                      <span className="text-indigo-300 font-bold">{monthlyLicenseCostUsd} $ (~{monthlyLicenseCostUsd * 10} MAD)</span>
                    </div>
                    <input
                      type="range"
                      min="30"
                      max="120"
                      step="5"
                      value={monthlyLicenseCostUsd}
                      onChange={(e) => setMonthlyLicenseCostUsd(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div className="space-y-2 rounded-xl bg-white/[0.04] p-3 font-mono text-xs border border-white/10">
                    <div className="flex justify-between text-rose-400">
                      <span>Abonnements SaaS cumulés sur 3 ans :</span>
                      <span className="font-bold">{threeYearsSaasMad.toLocaleString("fr-FR")} MAD</span>
                    </div>
                    <div className="flex justify-between text-rose-400">
                      <span>Abonnements SaaS cumulés sur 5 ans :</span>
                      <span className="font-bold">{fiveYearsSaasMad.toLocaleString("fr-FR")} MAD</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 pt-2 border-t border-white/10 font-bold">
                      <span>Investissement Sur Mesure ByteForce :</span>
                      <span>{customEstimateMad.toLocaleString("fr-FR")} MAD</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center font-mono">
                    <span className="text-[11px] text-emerald-300">Économie de trésorerie sur 3 ans :</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">
                      + {(threeYearsSaasMad - customEstimateMad).toLocaleString("fr-FR")} MAD
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Demander une étude personnalisée
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT ANSWER EXECUTIVE SUMMARY */}
      <section className="relative -mt-8 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-l-4 border-[#000dbf] bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Synthèse Décisionnelle
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              La règle d&apos;or pour trancher entre standard et sur mesure
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Un logiciel standard est idéal pour les processus banalisés (comptabilité générale, bureautique, paie).
              En revanche, dès lors qu&apos;un flux touche à votre avantage concurrentiel (votre manière unique de tarifer,
              votre suivi logistique au Maroc ou la relation client sur WhatsApp), le logiciel sur mesure devient le
              seul investissement rentable, protégeant vos données et éliminant les coûts de licence mensuels.
            </p>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON MATRIX: Standard vs Sur Mesure */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille d&apos;Arbitrage
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tableau comparatif : Logiciel sur mesure vs Logiciel standard
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">Logiciel Sur Mesure ByteForce</th>
                  <th className="py-4 px-6">Logiciel Standard (SaaS américain)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Alignement sur vos processus</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    S&apos;adapte à 100% à vos méthodes de travail
                  </td>
                  <td className="py-4 px-6 text-rose-600">Impose à vos équipes de tordre leurs habitudes</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Modèle économique</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Investissement fixe amorti dès 6 mois
                  </td>
                  <td className="py-4 px-6 text-rose-600">Abonnement perpétuel qui explose à chaque embauche</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété intellectuelle</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Vous possédez 100% du code et de la base
                  </td>
                  <td className="py-4 px-6 text-slate-500">Statut de locataire dépendant de l&apos;éditeur</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Conformité marocaine (ICE, TVA, WhatsApp)</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Intégration native des formats légaux locaux
                  </td>
                  <td className="py-4 px-6 text-slate-500">Formats anglo-saxons nécessitant des bricolages</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. ASYMMETRIC SECTION: Quand garder le standard vs Quand passer au sur-mesure */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800 uppercase">
                Cas N°1
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Quand faut-il impérativement garder un logiciel standard ?
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Le sur-mesure n&apos;est pas une solution universelle. ByteForce conseille en toute transparence de
                conserver un logiciel standard pour :
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span><strong>La comptabilité générale et la paie ordinaire :</strong> déjà parfaitement traitées par des progiciels du marché conformes au plan comptable marocain.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span><strong>La bureautique et les messageries :</strong> Google Workspace ou Microsoft 365 restent imbattables pour le traitement de texte et les emails.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-slate-400 font-bold">•</span>
                  <span><strong>Les très petites structures (&lt; 2 personnes) :</strong> dont les processus changent encore tous les mois et n&apos;ont pas stabilisé leurs flux.</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-[#000dbf] bg-white p-8 shadow-lg ring-4 ring-blue-50">
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf] uppercase">
                Cas N°2
              </span>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">
                Quand le développement sur mesure devient indispensable
              </h3>
              <p className="mt-3 text-sm text-slate-600">
                Le développement personnalisé devient la seule option rentable et pérenne lorsque :
              </p>
              <ul className="mt-6 space-y-3 text-xs text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Vos classeurs Excel prolifèrent :</strong> plusieurs versions circulent, générant des erreurs de facturation ou de stock.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Votre avantage concurrentiel dépend de votre méthode :</strong> vous refusez de conformer votre métier aux limites d&apos;un logiciel générique.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Vous souhaitez éliminer la dette des abonnements :</strong> vous comptez plus de 5 utilisateurs et refusez de payer des redevances à vie en devises.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue stratégique garantie
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Besoin d&apos;un avis indépendant pour votre entreprise ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Venez échanger 30 minutes au Technopark de Casablanca. Si un outil du marché à 200 MAD/mois fait le travail,
            nous vous le dirons en toute transparence.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Planifier mon audit gratuit
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
