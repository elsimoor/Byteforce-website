"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingIaEntreprise({ article }: { article: Article }) {
  const [activeWorkflow, setActiveWorkflow] = useState<"ocr" | "whatsapp" | "bank">("ocr");
  const [invoicesPerMonth, setInvoicesPerMonth] = useState<number>(300);

  // Time calculation: 8 min per invoice manually vs 10 seconds with AI OCR
  const manualHoursMonth = Math.round((invoicesPerMonth * 8) / 60);
  const hoursSavedPerYear = manualHoursMonth * 12;

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
    "Bonjour ByteForce, je souhaite échanger sur l'automatisation par l'IA des processus de mon entreprise."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with AI Workflow Engine Simulator) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-indigo-600/25 via-blue-600/15 to-transparent blur-3xl"
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
              Décisions & Intelligence Artificielle
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Automatisation IA Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Cas d&apos;Usage Réels & ROI PME · Maroc 2026
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Automatisation par l&apos;IA en entreprise au Maroc : cas d&apos;usage réels et mise en œuvre.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Fini le battage médiatique théorique et les chatbots gadget. Pour les entreprises marocaines,
                l&apos;intégration concrète de l&apos;IA permet d&apos;éliminer les tâches manuelles chronophages :{" "}
                <strong>extraction OCR de factures PDF</strong>, qualification de prospects sur{" "}
                <strong>WhatsApp en Darija et Français</strong> et synchronisation directe vers vos logiciels de
                gestion sans erreur de saisie.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Identifier mes processus automatisables (Audit 30 min)</span>
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
                  <span className="text-white font-bold text-sm">Précision 98%+</span>
                  <span className="text-white/50 text-[11px]">OCR factures & documents</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">WhatsApp 24/7</span>
                  <span className="text-white/50 text-[11px]">Darija & Français bilingue</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme CNDP</span>
                  <span className="text-white/50 text-[11px]">Données isolées & souveraines</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Amorti &lt; 3 mois</span>
                  <span className="text-white/50 text-[11px]">Heures saisie récupérées</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive OCR & AI Automation Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur Gain de Temps IA</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Productivité Immédiate
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Factures / bons traités par mois :</span>
                      <span className="text-emerald-400 font-bold">{invoicesPerMonth} documents</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="1000"
                      step="50"
                      value={invoicesPerMonth}
                      onChange={(e) => setInvoicesPerMonth(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div className="space-y-2 rounded-xl bg-white/[0.04] p-3 font-mono text-xs border border-white/10">
                    <div className="flex justify-between text-white/70">
                      <span>Temps de saisie manuelle :</span>
                      <span className="text-rose-400 font-bold">{manualHoursMonth} heures / mois</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Temps avec extraction IA :</span>
                      <span className="text-emerald-400 font-bold">&lt; 1 heure / mois (contrôle)</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center font-mono">
                    <span className="text-[11px] text-emerald-300">Temps de travail libéré chaque année :</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">
                      + {hoursSavedPerYear} heures / an
                    </p>
                    <span className="text-[10px] text-white/50 block mt-1">
                      Vos équipes se concentrent sur la vente et la relation client.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Demander une démo d&apos;automatisation
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
              Synthèse Opérationnelle
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Comment déployer l&apos;IA utile dans une entreprise marocaine sans risque
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              L&apos;IA en entreprise n&apos;a pas vocation à remplacer vos salariés, mais à éliminer les tâches
              ingrates et répétitives : saisie des factures fournisseurs, vérification des déclarations TVA, tri des
              demandes WhatsApp entrantes. La clé du succès réside dans la séparation stricte : le code logiciel sur
              mesure assure 100% de la logique comptable sans hallucination, tandis que l&apos;IA extrait et qualifie le
              langage naturel et les documents non structurés.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC DEEP DIVE: Les 3 Cas d'Usage Éprouvés au Maroc */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Applications Concrètes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              3 automatisations par l&apos;IA immédiatement rentables au Maroc
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-lg">OCR & Extraction de Factures PDF</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Déposez simplement un PDF ou une photo de facture fournisseur. L&apos;IA extrait instantanément l&apos;ICE,
                la date, le montant HT, le taux de TVA et le TTC, puis injecte les lignes dans votre ERP sans frappe au
                clavier.
              </p>
              <div className="mt-4 rounded bg-slate-50 p-2.5 font-mono text-[11px] text-slate-600 border border-slate-200">
                ✓ Précision &gt; 98% · Contrôle humain en 1 clic
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-emerald-600">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-lg">Agents WhatsApp Bilingues (FR / Darija)</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connecté à votre catalogue de produits ou à votre base documentaire, l&apos;agent répond instantanément
                aux questions récurrentes sur WhatsApp, qualifie le besoin du prospect et transmet le contact chaud à vos
                commerciaux.
              </p>
              <div className="mt-4 rounded bg-slate-50 p-2.5 font-mono text-[11px] text-slate-600 border border-slate-200">
                ✓ Comprend l&apos;arabe, le français et la Darija
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-indigo-600">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-lg">Rapprochement Bancaire Intelligent</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                L&apos;IA analyse vos relevés bancaires marocains et associe automatiquement chaque virement ou encaissement
                à la bonne facture client, même lorsque le libellé est tronqué ou approximatif.
              </p>
              <div className="mt-4 rounded bg-slate-50 p-2.5 font-mono text-[11px] text-slate-600 border border-slate-200">
                ✓ Réconciliation automatique 9 fois sur 10
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOUVERAINETÉ & SÉCURITÉ CNDP */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
            Sécurité & Confidentialité
          </span>
          <h3 className="mt-3 text-2xl font-bold text-slate-900">
            Protection stricte de vos données d&apos;entreprise et conformité CNDP
          </h3>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            De nombreux dirigeants craignent à juste titre que leurs données financières ou commerciales ne servent à
            entraîner des modèles publics. Chez ByteForce, nous appliquons un protocole d&apos;ingénierie strict :
          </p>
          <ul className="mt-4 space-y-2.5 text-xs text-slate-700">
            <li className="flex items-center gap-2">✓ Modèles déployés sur infrastructure privée étanche avec chiffrement SSL/TLS</li>
            <li className="flex items-center gap-2">✓ Clause contractuelle explicite interdisant l&apos;entraînement de modèles sur vos données</li>
            <li className="flex items-center gap-2">✓ Conformité intégrale à la loi 09-08 de la CNDP sur les données personnelles</li>
          </ul>
        </div>
      </section>

      {/* 5. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue d&apos;ingénierie IA garantie
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à automatiser vos opérations manuelles avec l&apos;IA ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Discutons de vos flux au Technopark de Casablanca. Nous identifions les 2 tâches qui vous feront gagner le
            plus d&apos;heures dès le premier mois.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Planifier mon audit d&apos;automatisation
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
