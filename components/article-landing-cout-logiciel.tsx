"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingCoutLogiciel({ article }: { article: Article }) {
  const [projectScope, setProjectScope] = useState<"module" | "crm" | "erp">("crm");
  const [usersCount, setUsersCount] = useState<number>(12);

  // TCO calculation
  const saasMonthlyPerUser = 750; // MAD
  const saas3Years = usersCount * saasMonthlyPerUser * 36;
  const customCost = projectScope === "module" ? 32000 : projectScope === "crm" ? 54000 : 98000;
  const savings = saas3Years - customCost;

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
    "Bonjour ByteForce, j'aimerais estimer le coût de développement de mon logiciel sur mesure."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Interactive Software Budget Simulator) */}
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
              Décisions & Guides
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Coût Logiciel Sur Mesure</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Guide d&apos;Investissement Logiciel 2026 · Maroc
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Combien coûte un logiciel sur mesure au Maroc ? Guide de chiffrage & budgets réels.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Au Maroc, un outil métier ciblé démarre à partir de <strong>25 000 MAD</strong>, tandis qu&apos;un ERP
                ou CRM complet pour PME oscille généralement entre <strong>45 000 MAD et 95 000 MAD</strong> en
                forfait unique sans abonnement récurrent. Découvrez la méthode d&apos;évaluation, les facteurs de prix
                et comment cadrer votre budget sans dérapage.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Demander mon estimation sous 24h</span>
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
                  <span>Discussion WhatsApp avec un ingénieur</span>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Dès 25 000 MAD</span>
                  <span className="text-white/50 text-[11px]">Module métier ciblé</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">45k à 95k MAD</span>
                  <span className="text-white/50 text-[11px]">CRM / ERP PME complet</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">0 MAD / mois</span>
                  <span className="text-white/50 text-[11px]">Zéro coût par utilisateur</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Amorti &lt; 8 mois</span>
                  <span className="text-white/50 text-[11px]">Comparé aux abonnements</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Interactive Budget Calculator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur de Budget Logiciel Maroc</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Édition 2026
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-xs font-mono text-white/60 uppercase block mb-1.5">
                      Envergure fonctionnelle du logiciel :
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                      {[
                        { id: "module", label: "Module Métier" },
                        { id: "crm", label: "CRM / Gestion" },
                        { id: "erp", label: "ERP Complet" },
                      ].map((scope) => (
                        <button
                          key={scope.id}
                          onClick={() => setProjectScope(scope.id as typeof projectScope)}
                          className={`rounded-lg py-2 px-1 text-center font-bold transition-all ${
                            projectScope === scope.id
                              ? "bg-[#000dbf] text-white border border-blue-400"
                              : "bg-white/5 text-white/70 hover:bg-white/10"
                          }`}
                        >
                          {scope.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Équipe utilisatrice :</span>
                      <span className="text-emerald-400 font-bold">{usersCount} collaborateurs</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="30"
                      value={usersCount}
                      onChange={(e) => setUsersCount(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3 rounded-xl bg-white/[0.04] p-3 font-mono text-xs border border-white/10">
                    <div>
                      <span className="text-[10px] text-white/40">SaaS Américain (3 ans)</span>
                      <p className="text-base font-bold text-rose-400 mt-0.5">
                        {saas3Years.toLocaleString("fr-FR")} MAD
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] text-white/40">Sur Mesure ByteForce</span>
                      <p className="text-base font-bold text-emerald-400 mt-0.5">
                        {customCost.toLocaleString("fr-FR")} MAD
                      </p>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center font-mono">
                    <span className="text-[11px] text-emerald-300">Économie nette sur 3 ans :</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">
                      + {savings.toLocaleString("fr-FR")} MAD
                    </p>
                    <span className="text-[10px] text-white/50 block mt-1">
                      Avec 100% de la propriété du code source cédée.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Obtenir une proposition sous 24h
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
              Synthèse Directe de Chiffrage
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Les repères financiers essentiels pour un dirigeant au Maroc
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Le montant d&apos;un logiciel sur mesure dépend du nombre réel d&apos;écrans, de la complexité des règles de
              calcul (conformité fiscale marocaine, gestion des stocks multi-dépôts) et des intégrations tierces (APIs
              bancaires, WhatsApp). Contrairement à une croyance répandue, faire développer un outil propriétaire est
              souvent bien plus économique que d&apos;accumuler des abonnements SaaS mensuels en devises dès lors que
              l&apos;entreprise compte plus de 5 utilisateurs.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC DEEP DIVE: Les 4 Facteurs de Coût Réels */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Facteurs d&apos;Évaluation
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Qu&apos;est-ce qui détermine le prix d&apos;un logiciel sur mesure ?
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Écrans & Rôles Utilisateurs</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Une application avec un rôle unique demande moins d&apos;efforts qu&apos;un outil distinguant les droits
                d&apos;un commercial, d&apos;un magasinier, d&apos;un comptable et du directeur général.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Règles Métier & Calculs DGI</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                La conformité fiscale marocaine (ICE, IF, RC, TVA), le calcul du CMUP en stock ou la réconciliation
                bancaire exigent une modélisation rigoureuse en amont.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Intégrations & APIs Tierces</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connecter le logiciel à WhatsApp Business, aux passerelles CMI ou à votre logiciel comptable nécessite
                des points de terminaison robustes et sécurisés.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Finition UX/UI Figma</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Une interface épurée garantit une prise en main immédiate par vos équipes sans formation lourde,
                rentabilisant immédiatement l&apos;investissement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE: Investissement Fixe vs TCO Abonnements SaaS */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Comparatif Financier TCO
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Coût Fixe Sur Mesure vs Coût Récurrent d&apos;un SaaS
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;analyse</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">Logiciel Sur Mesure ByteForce</th>
                  <th className="py-4 px-6">SaaS Standard Américain (HubSpot, Salesforce)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Coût sur 3 ans (15 utilisateurs)</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Investissement fixe unique (~55 000 MAD)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Plus de 430 000 MAD d&apos;abonnements cumulés</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Impact au bilan de l&apos;entreprise</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Actif incorporel valorisable au bilan
                  </td>
                  <td className="py-4 px-6 text-slate-500">Pure charge d&apos;exploitation à perte</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Adaptation à votre métier</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% calqué sur votre vocabulaire et flux réels
                  </td>
                  <td className="py-4 px-6 text-rose-600">Vous devez tordre votre métier pour entrer dans les cases</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Conformité DGI & WhatsApp Maroc</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Nativement intégrée en Dirhams (ICE, TVA)
                  </td>
                  <td className="py-4 px-6 text-slate-500">Modèles anglo-saxons rigides</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue technique garantie
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Besoin d&apos;un chiffrage précis pour votre projet logiciel ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Échangez gratuitement pendant 30 minutes avec nos ingénieurs au Technopark de Casablanca. Nous analysons vos
            flux et vous remettons une proposition détaillée sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Demander mon devis gratuit
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
