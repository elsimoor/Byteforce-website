"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingCrmVsStandard({ article }: { article: Article }) {
  const [salesReps, setSalesReps] = useState<number>(8);
  const [hubspotPricePerSeat, setHubspotPricePerSeat] = useState<number>(90); // $90/user/mo

  const annualHubspotMad = Math.round(salesReps * hubspotPricePerSeat * 10 * 12);
  const threeYearsHubspotMad = annualHubspotMad * 3;
  const customCrmCost = 42000;
  const netSavings = threeYearsHubspotMad - customCrmCost;

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
    "Bonjour ByteForce, je souhaite comparer un CRM sur mesure face aux solutions standards comme HubSpot ou Salesforce."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with CRM Field Comparison Simulator) */}
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
              Décisions & CRM
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">CRM Sur Mesure vs Standard</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Comparatif Vente B2B Maroc 2026
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                CRM sur mesure ou CRM standard au Maroc : quel choix pour vos commerciaux ?
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Au Maroc, de nombreuses PME font l&apos;amère expérience d&apos;un CRM américain payé à prix d&apos;or en
                dollars mais déserté par les commerciaux au bout de trois mois. Découvrez pourquoi les outils génériques
                échouent face aux réalités du terrain (WhatsApp, devis DGI, saisie rapide) et comment un CRM sur mesure
                s&apos;amortit en moins de 6 mois.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Demander un audit CRM comparatif</span>
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
                  <span>Discussion directe WhatsApp</span>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">30s par lead</span>
                  <span className="text-white/50 text-[11px]">Saisie terrain ultra-rapide</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">WhatsApp Natif</span>
                  <span className="text-white/50 text-[11px]">Relances en 1 clic</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme DGI</span>
                  <span className="text-white/50 text-[11px]">ICE, RC, IF & TVA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">0 MAD / mois</span>
                  <span className="text-white/50 text-[11px]">Zéro coût par utilisateur</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive CRM Cost Arbitrage Calculator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur Équipe Commerciale</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Calcul ROI
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Commerciaux & Managers dans l&apos;équipe :</span>
                      <span className="text-emerald-400 font-bold">{salesReps} utilisateurs</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="25"
                      value={salesReps}
                      onChange={(e) => setSalesReps(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Abonnement CRM standard (ex: HubSpot Sales Pro) :</span>
                      <span className="text-indigo-300 font-bold">{hubspotPricePerSeat} $/user/mois</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="150"
                      step="10"
                      value={hubspotPricePerSeat}
                      onChange={(e) => setHubspotPricePerSeat(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div className="space-y-2 rounded-xl bg-white/[0.04] p-3 font-mono text-xs border border-white/10">
                    <div className="flex justify-between text-rose-400">
                      <span>Abonnement CRM US (3 ans) :</span>
                      <span className="font-bold">{threeYearsHubspotMad.toLocaleString("fr-FR")} MAD</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-bold pt-2 border-t border-white/10">
                      <span>CRM Sur Mesure ByteForce (Paiement unique) :</span>
                      <span>{customCrmCost.toLocaleString("fr-FR")} MAD</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center font-mono">
                    <span className="text-[11px] text-emerald-300">Économie nette sur 3 ans :</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">
                      + {netSavings.toLocaleString("fr-FR")} MAD
                    </p>
                    <span className="text-[10px] text-white/50 block mt-1">
                      Amorti dès le 5ème mois d&apos;utilisation.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Demander une démo CRM en direct
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
              Synthèse Décisionnelle Commerciale
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Pourquoi les CRM standards échouent dans les équipes commerciales au Maroc
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Les CRM américains (HubSpot, Salesforce) ont été conçus pour des marchés où la prospection se fait par
              email et LinkedIn. Au Maroc, 80% des négociations s&apos;effectuent par WhatsApp et téléphone. Quand un
              commercial doit remplir 15 champs obligatoires en anglais pour chaque appel, il finit par abandonner le
              logiciel. Un bon CRM doit servir le vendeur, pas l&apos;obliger à faire de la bureaucratie.
            </p>
          </div>
        </div>
      </section>

      {/* 3. COMPARISON TABLE: ByteForce CRM vs HubSpot vs Salesforce */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Comparatif Neutre
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tableau comparatif : CRM Sur Mesure vs CRM Standards
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">CRM Sur Mesure ByteForce</th>
                  <th className="py-4 px-6">HubSpot / Salesforce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Vitesse de saisie & Ergonomie</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Saisie d&apos;un lead en 3 clics (30s)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Formulaires lourds et champs superflus</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Facturation mensuelle</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Paiement unique (0 MAD / mois à vie)
                  </td>
                  <td className="py-4 px-6 text-rose-600">500 à 1 500 MAD par utilisateur chaque mois</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Intégration WhatsApp Business</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Native : envoi de devis et relances en 1 clic
                  </td>
                  <td className="py-4 px-6 text-slate-500">Plugins tiers payants souvent instables</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Devis & Normes Fiscales Marocaines</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% conforme DGI (ICE, IF, RC, TVA 20% en Dirhams)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Modèles anglo-saxons rigides</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue d&apos;ingénierie CRM garantie
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à doter votre équipe commerciale d&apos;un CRM qui fait vendre ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Échangez avec nous au Technopark de Casablanca. Nous concevons un CRM que vos commerciaux adopteront dès le
            premier jour.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Demander ma démo CRM gratuite
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
