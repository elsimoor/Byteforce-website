"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export function LandingErpPage() {
  const [activeModule, setActiveModule] = useState<"stocks" | "achats" | "ventes" | "gpao" | "tresorerie">("stocks");
  const [erpUsers, setErpUsers] = useState<number>(20);

  // Odoo / SAP average: ~350 MAD/user/month
  const standardErpYearlyMad = Math.round(erpUsers * 350 * 12);
  const standardErp3YearsMad = standardErpYearlyMad * 3;
  const byteforceFixedCost = 68000;
  const savings3Years = standardErp3YearsMad - byteforceFixedCost;

  const faqs = [
    {
      q: "Combien coûte le développement d'un logiciel ERP sur mesure au Maroc ?",
      a: "Pour un ERP PME ciblé (gestion des stocks, achats, ventes et facturation conforme DGI), l'investissement démarre généralement à partir de 45 000 MAD en forfait fixe. Pour une solution industrielle complète avec gestion de production (GPAO), traçabilité multi-entrepôts et suivi de trésorerie, le budget oscille entre 75 000 MAD et 160 000 MAD sans aucune redevance mensuelle par utilisateur.",
    },
    {
      q: "En quoi un ERP sur mesure est-il plus rentable qu'Odoo Enterprise ou SAP ?",
      a: "Un progiciel standard facture chaque utilisateur entre 300 MAD et 800 MAD par mois, plus des frais d'intégration et de maintenance élevés. Pour une entreprise de 20 personnes, cela représente plus de 250 000 MAD sur 3 ans sans posséder le logiciel. Avec ByteForce, l'ERP est développé sur mesure pour vos flux, amorti en 6 à 9 mois, et le code source vous appartient à 100%.",
    },
    {
      q: "L'ERP est-il conforme à la réglementation fiscale marocaine (DGI) ?",
      a: "Oui, nativement. Tous les documents commerciaux (devis, bons de commande, bons de livraison, factures d'acompte et factures d'avoir) intègrent automatiquement vos mentions obligatoires : ICE (15 chiffres), IF, RC, Patente et ventilation exacte de la TVA en Dirhams.",
    },
    {
      q: "Quel est le délai de déploiement dans nos locaux ?",
      a: "La livraison s'effectue en 6 à 12 semaines selon le nombre de modules. Grâce à notre approche modulaire, nous pouvons mettre en service le module critique (par exemple la facturation ou la gestion de stock) dès la 5ème semaine pendant que nous finalisons les modules secondaires.",
    },
    {
      q: "Comment s'effectue la migration depuis nos anciens classeurs Excel ou logiciels Sage ?",
      a: "Nos ingénieurs prennent en charge le nettoyage, le dédoublonnage et l'import de vos référentiels articles, clients, fournisseurs et stocks initiaux. Nous réalisons une bascule à blanc pour vérifier l'exactitude des soldes avant la mise en production définitive.",
    },
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite échanger sur un projet d'ERP sur mesure pour mon entreprise."
  )}`;

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      {/* Schema.org Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Développement ERP Maroc", path: "/developpement-erp-maroc" },
        ]}
      />
      <ServiceJsonLd
        name="Développement ERP Maroc · Progiciel de Gestion Sur Mesure"
        description="Développement d'ERP sur mesure au Maroc : gestion des stocks, achats, facturation DGI et production. Zéro abonnement par licence. Devis gratuit sous 24h."
        path="/developpement-erp-maroc"
        serviceType="Développement Logiciel ERP Sur Mesure"
        priceRange="À partir de 45 000 MAD"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live Enterprise ERP Cockpit Mockup) */}
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
            <Link href="/solutions" className="transition-colors hover:text-white">
              Solutions
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Développement ERP Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  ERP PME & Industrie · Casablanca
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Développement ERP au Maroc : le logiciel de gestion globale taillé pour vos flux réels.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Fini les progiciels standards lourds (SAP, Odoo, Sage) qui imposent des abonnements mensuels par
                utilisateur et des mois d&apos;implémentation frustrants. ByteForce développe votre ERP sur mesure :{" "}
                <strong>stocks multi-dépôts en temps réel</strong>, <strong>achats et approvisionnements</strong>,{" "}
                <strong>facturation conforme DGI</strong> et <strong>zéro licence par utilisateur</strong>.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Cadrer mon ERP avec un architecte</span>
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

              {/* Trust Indicators Bar */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">0 MAD / mois</span>
                  <span className="text-white/50 text-[11px]">Licences illimitées</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme DGI</span>
                  <span className="text-white/50 text-[11px]">ICE, IF, RC & TVA 20%</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Multi-Entrepôts</span>
                  <span className="text-white/50 text-[11px]">Stock synchronisé direct</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">100% Propriétaire</span>
                  <span className="text-white/50 text-[11px]">Code source & base cédés</span>
                </div>
              </div>
            </div>

            {/* Right Column: Live Enterprise ERP Operations Cockpit */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/15 bg-gradient-to-b from-[#12162b] to-[#0a0c18] p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-white/80 text-[11px]">erp.entreprise.ma / supply-chain</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Live Sync
                  </span>
                </div>

                {/* ERP Inventory & Operations Stats */}
                <div className="grid grid-cols-3 gap-2 mt-3 font-mono">
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-center">
                    <span className="text-[10px] text-white/40">Articles en Stock</span>
                    <p className="text-sm font-bold text-white">4 820 réf.</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-center">
                    <span className="text-[10px] text-white/40">Valeur Stock</span>
                    <p className="text-sm font-bold text-emerald-400">3.8M MAD</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2 text-center">
                    <span className="text-[10px] text-white/40">BL en Transit</span>
                    <p className="text-sm font-bold text-indigo-300">14 livraisons</p>
                  </div>
                </div>

                {/* Operations Feed */}
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-2.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-emerald-200 font-bold">📦 Entrée Dépôt Tit Mellil</span>
                      <span className="text-emerald-400">BR #2026-89</span>
                    </div>
                    <div className="mt-1 flex justify-between text-[11px] text-white/60">
                      <span>Fournisseur Chimie Maroc (50 fûts)</span>
                      <span className="font-mono text-white font-semibold">Stock MAJ ✓</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-blue-500/30 bg-blue-950/40 p-2.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-blue-200 font-bold">📄 Facture DGI Générée</span>
                      <span className="text-blue-400">FC #2026-442</span>
                    </div>
                    <div className="mt-1 flex justify-between text-[11px] text-white/60">
                      <span>Client Groupe BTP Rabat · ICE Validé</span>
                      <span className="font-mono text-emerald-400 font-bold">84 000 MAD</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-amber-500/30 bg-amber-950/40 p-2.5">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-amber-200 font-bold">⚠️ Alerte Seuil Minimum</span>
                      <span className="text-amber-300">Réapprovisionner</span>
                    </div>
                    <div className="mt-1 flex justify-between text-[11px] text-white/60">
                      <span>Bobines Acier Galva (Reste 3 tonnes)</span>
                      <span className="font-mono text-amber-300">Demande d&apos;achat auto</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-white/40">
                  <span>⚡ Zéro latence · PostgreSQL Multi-Dépôts</span>
                  <span className="text-emerald-400">Base Dédiée Maroc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT ANSWER FEATURED SNIPPET */}
      <section className="relative -mt-8 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-l-4 border-[#000dbf] bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                Synthèse pour directeurs généraux & financiers · Chiffres Clés
              </span>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Combien coûte le développement d&apos;un ERP sur mesure au Maroc ?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Le développement d&apos;un logiciel ERP sur mesure au Maroc coûte généralement entre{" "}
                <strong>45 000 MAD et 160 000 MAD</strong> en investissement forfaitaire unique selon les modules requis
                (stocks, achats, ventes, facturation DGI, production), avec un délai moyen de déploiement de{" "}
                <strong>6 à 12 semaines</strong>. Contrairement aux progiciels étrangers (SAP, Odoo, Sage) qui facturent
                un abonnement perpétuel par employé, ByteForce livre une solution propriétaire sans aucune redevance
                d&apos;utilisation, vous assurant un amortissement complet en moins de 8 mois.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#000dbf] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00099a]"
            >
              Cadrer mon ERP
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC VALUE SECTION: Simulateur d'économies de licences ERP */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
                Analyse Financière & TCO
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Pourquoi louer votre progiciel de gestion quand vous pouvez en être propriétaire ?
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                La majorité des entreprises marocaines sous-estiment le coût cumulé des licences ERP standard. À 350 MAD
                par mois et par employé, équiper 20 salariés dans les achats, la logistique, les ventes et la
                comptabilité représente une charge annuelle de plus de 84 000 MAD, soit plus de 250 000 MAD sur 3 ans
                sans créer le moindre actif incorporel pour votre société.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Le piège de la facturation par siège (per-seat)</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Chaque embauche d&apos;un magasinier ou d&apos;un commercial alourdit immédiatement votre facture
                      mensuelle, freinant la digitalisation de vos équipes opérationnelles.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Des interfaces usines à gaz inadaptées au terrain</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Les ERP internationaux proposent des milliers d&apos;écrans dont vous n&apos;utilisez que 15%.
                      Résultat : vos collaborateurs contournent l&apos;outil et retournent sur Excel.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Dépendance totale vis-à-vis d&apos;un éditeur</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Si l&apos;éditeur augmente ses tarifs ou modifie ses versions, vous êtes contraint d&apos;accepter
                      sous peine de perdre l&apos;accès à votre outil de travail quotidien.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                    Simulateur TCO ERP
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                    Rentabilité &lt; 9 mois
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Comparez le coût sur 3 ans : ERP Standard vs ByteForce Sur Mesure
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700">
                      <span>Nombre d&apos;utilisateurs dans l&apos;entreprise :</span>
                      <span className="font-bold text-[#000dbf]">{erpUsers} collaborateurs</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="5"
                      value={erpUsers}
                      onChange={(e) => setErpUsers(Number(e.target.value))}
                      className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#000dbf]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>5 pers.</span>
                      <span>30 pers.</span>
                      <span>60 pers.</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 font-mono">
                    <div>
                      <span className="text-[11px] text-slate-500">ERP Standard (3 ans)</span>
                      <p className="text-lg font-extrabold text-rose-600 sm:text-xl">
                        {standardErp3YearsMad.toLocaleString("fr-FR")} MAD
                      </p>
                      <span className="text-[10px] text-slate-400">
                        ~{standardErpYearlyMad.toLocaleString("fr-FR")} MAD/an en licences
                      </span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500">ByteForce Sur Mesure</span>
                      <p className="text-lg font-extrabold text-emerald-600 sm:text-xl">
                        {byteforceFixedCost.toLocaleString("fr-FR")} MAD
                      </p>
                      <span className="text-[10px] text-emerald-700 font-semibold">Paiement unique · 0 MAD/mois</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center">
                    <span className="text-xs text-emerald-800 font-medium">Économie de trésorerie sur 3 ans :</span>
                    <p className="text-2xl font-black text-emerald-700 sm:text-3xl">
                      + {savings3Years.toLocaleString("fr-FR")} MAD
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-600">
                      Et vous bénéficiez d&apos;un logiciel conçu exactement pour vos règles de gestion.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#000dbf]"
                  >
                    Demander une proposition d&apos;architecture ERP
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODULAR ERP CAPABILITIES SHOWCASE */}
      <section className="border-t border-slate-200 bg-slate-50/70 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
              Architecture Modulaire
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Composez votre ERP avec les modules exacts dont vous avez besoin
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Aucun composant superflu. Chaque écran est optimisé pour la rapidité d&apos;exécution et l&apos;absence d&apos;erreurs.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "stocks", label: "Stocks Multi-Dépôts & Traçabilité" },
              { id: "achats", label: "Achats & Approvisionnements" },
              { id: "ventes", label: "Ventes & Facturation DGI" },
              { id: "gpao", label: "Production & GPAO Ateliers" },
              { id: "tresorerie", label: "Trésorerie & Rapprochement" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveModule(tab.id as typeof activeModule)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeModule === tab.id
                    ? "bg-[#000dbf] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
            {activeModule === "stocks" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">01 · Logistique & Entrepôt</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Suivi des stocks en temps réel et transferts multi-dépôts
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Visualisez instantanément les quantités réelles disponibles, réservées et en commande sur l&apos;ensemble
                    de vos dépôts à Casablanca, Tanger ou Agadir. Gestion des numéros de série, codes-barres et alertes
                    automatiques de rupture.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Bons de transfert inter-dépôts avec accusé de réception</li>
                    <li className="flex items-center gap-2">✓ Inventaire tournant sur tablette tactile pour les magasiniers</li>
                    <li className="flex items-center gap-2">✓ Calcul automatique du Coût Moyen Unitaire Pondéré (CMUP)</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>STOCK ENGINE · MULTI-WAREHOUSE</span>
                    <span className="text-emerald-400">SYNC LIVE</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2 flex justify-between">
                      <span>Dépôt Central Aïn Sebaâ</span>
                      <span className="text-emerald-400 font-bold">2 480 articles · OK</span>
                    </div>
                    <div className="rounded bg-white/5 p-2 flex justify-between">
                      <span>Dépôt Tanger Zone Franche</span>
                      <span className="text-emerald-400 font-bold">1 150 articles · OK</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === "achats" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-indigo-600">02 · Approvisionnements</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Maîtrisez vos dépenses et négociez au meilleur prix
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Centralisez les demandes d&apos;achat de chaque département, comparez les offres fournisseurs et générez
                    des bons de commande officiels. Rapprochement automatique à trois voies : bon de commande, bon de
                    réception et facture fournisseur pour éliminer les surfacturations.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Circuit de validation hiérarchique selon les montants engagés</li>
                    <li className="flex items-center gap-2">✓ Suivi des délais de livraison et notation des fournisseurs</li>
                    <li className="flex items-center gap-2">✓ Échéancier précis des règlements fournisseurs prévisionnels</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>ACHATS & FOURNISSEURS</span>
                    <span className="text-emerald-400">RAPPROCHEMENT OK</span>
                  </div>
                  <div className="mt-3 bg-white/5 p-3 rounded space-y-1">
                    <div className="flex justify-between">
                      <span className="text-indigo-300">BC Fournisseur #BC-2026-92</span>
                      <span className="text-white font-bold">120 000 MAD</span>
                    </div>
                    <div className="flex justify-between text-[10px] text-white/50">
                      <span>BR conforme: 100% réceptionné</span>
                      <span className="text-emerald-400">Validé DAF</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === "ventes" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">03 · Cycle Commercial</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Facturation DGI, bons de livraison et suivi des règlements
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Un devis accepté génère automatiquement le bon de commande, décrémente les stocks dans l&apos;entrepôt et
                    édite la facture conforme aux normes de la Direction Générale des Impôts. Suivi rigoureux des encours
                    clients et alertes de dépassement de plafond de crédit.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Devis, BL et factures au format PDF officiel avec ICE, IF et RC</li>
                    <li className="flex items-center gap-2">✓ Gestion des remises par palier de volume et tarifs négociés par client</li>
                    <li className="flex items-center gap-2">✓ Relances automatiques des factures échues par email et WhatsApp</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-100 p-5 font-mono text-xs text-slate-800 shadow-inner">
                  <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-600 font-bold">
                    <span>FACTURE COMMERCIALE DGI MAROC</span>
                    <span className="text-[#000dbf]">CONFORME 100%</span>
                  </div>
                  <div className="mt-3 bg-white p-3 rounded border border-slate-200 space-y-1 text-[11px]">
                    <div className="flex justify-between font-bold">
                      <span>FACTURE N° FC-2026-118</span>
                      <span>31/10/2026</span>
                    </div>
                    <div className="text-[10px] text-slate-500">ICE Client : 002345678000045 · TVA 20% incluse</div>
                    <div className="flex justify-between font-bold text-slate-900 pt-1 border-t border-slate-100">
                      <span>Total Net à Payer :</span>
                      <span className="text-[#000dbf]">78 400,00 MAD</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === "gpao" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-purple-600">04 · Gestion Industrielle</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    GPAO & Suivi des Ateliers de Fabrication
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les entreprises de production et de transformation au Maroc : définition des nomenclatures
                    articles (Bill of Materials), ordonnancement des ordres de fabrication (OF) et suivi des temps réels
                    hommes et machines pour calculer le coût de revient unitaire exact.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Déduction automatique des matières premières consommées</li>
                    <li className="flex items-center gap-2">✓ Pointage des opérateurs sur bornes d&apos;atelier simplifiées</li>
                    <li className="flex items-center gap-2">✓ Suivi des rebus et contrôle qualité en cours de production</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>GPAO ATELIER · ORDRE DE FABRICATION</span>
                    <span className="text-emerald-400">EN COURS</span>
                  </div>
                  <div className="mt-3 bg-white/5 p-3 rounded space-y-1">
                    <div className="flex justify-between">
                      <span className="text-purple-300">OF #2026-44 · Ligne Assemblage 2</span>
                      <span className="text-emerald-400 font-bold">Avancement 80%</span>
                    </div>
                    <div className="text-[10px] text-white/40">Consommation composants validée · Fin estimée: 16h30</div>
                  </div>
                </div>
              </div>
            )}

            {activeModule === "tresorerie" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-emerald-600">05 · Pilotage Financier</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Gestion des encaissements, traites LCN et prévisionnel trésorerie
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Au Maroc, la gestion des chèques et lettres de change normalisées (LCN) est vitale pour la trésorerie.
                    Votre ERP gère le portefeuille d&apos;effets à l&apos;encaissement et à l&apos;escompte, synchronise vos
                    soldes bancaires et alerte la direction sur les tensions prévisionnelles de trésorerie à 30 jours.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Suivi des bordereaux de remise d&apos;effets en banque</li>
                    <li className="flex items-center gap-2">✓ Rapprochement bancaire semi-automatisé</li>
                    <li className="flex items-center gap-2">✓ Exportation comptable compatible avec les logiciels fiduciaires</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>TRÉSORERIE & EFFETS EN BANQUE</span>
                    <span className="text-emerald-400">SOLDES ACTIFS</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="flex justify-between bg-white/5 p-2 rounded">
                      <span>Effets en portefeuille (LCN à échoir)</span>
                      <span className="text-emerald-400 font-bold">420 000 MAD</span>
                    </div>
                    <div className="flex justify-between bg-white/5 p-2 rounded">
                      <span>Prévisionnel Trésorerie J+30</span>
                      <span className="text-indigo-300 font-bold">+185 000 MAD</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE: ByteForce vs SAP/Odoo vs Excel */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Comparative ERP
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              ERP Sur Mesure ByteForce vs Progiciels Standards
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères décisionnels</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">ERP Sur Mesure ByteForce</th>
                  <th className="py-4 px-6">Odoo Enterprise / SAP</th>
                  <th className="py-4 px-6">Classeurs Excel Disjoints</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Coût des licences</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Forfait fixe unique (0 MAD / mois à vie)
                  </td>
                  <td className="py-4 px-6 text-rose-600">300 à 800 MAD par utilisateur / mois</td>
                  <td className="py-4 px-6">Gratuit (mais coûteux en erreurs)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété intellectuelle</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% Propriétaire (Code source & base cédés)
                  </td>
                  <td className="py-4 px-6 text-slate-500">Locataire dépendant de l&apos;éditeur</td>
                  <td className="py-4 px-6">Fichiers dispersés sans sécurité</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Adéquation aux flux métier</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% sur mesure pour vos processus réels
                  </td>
                  <td className="py-4 px-6 text-slate-500">Processus rigides imposés aux équipes</td>
                  <td className="py-4 px-6 text-rose-600">Bricolages fragiles sans automatisation</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Délai moyen de déploiement</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    6 à 12 semaines (sprints bi-hebdomadaires)
                  </td>
                  <td className="py-4 px-6 text-rose-600">6 à 18 mois d&apos;implémentation lourde</td>
                  <td className="py-4 px-6">Immédiat mais ingérable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. INDICATIVE TRANSPARENT ERP TIERS */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Tarifaire Cadrée
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des forfaits forfaitaires transparents pour votre ERP
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                PME Essentiel
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">ERP Gestion Commerciale & Stocks</h3>
              <p className="mt-2 text-xs text-slate-500">
                Idéal pour les entreprises de négoce et distribution (5 à 15 utilisateurs).
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">45 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 6 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Gestion des stocks dépôt central</li>
                <li className="flex items-center gap-2">✓ Devis, bons de commande et facturation DGI</li>
                <li className="flex items-center gap-2">✓ Rôles commerciaux et magasiniers</li>
                <li className="flex items-center gap-2">✓ Import initial des fichiers articles/clients</li>
                <li className="flex items-center gap-2">✓ Cession 100% du code source</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Demander un devis
              </Link>
            </div>

            <div className="relative rounded-2xl border-2 border-[#000dbf] bg-white p-7 shadow-xl ring-4 ring-blue-50">
              <div className="absolute -top-3.5 right-6 rounded-full bg-[#000dbf] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Recommandé
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf]">
                PME Avancée
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">ERP Logistique Multi-Dépôts & Trésorerie</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour les structures gérant plusieurs sites, des achats réguliers et des effets bancaires.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#000dbf]">78 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 8 à 10 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-semibold">✓ Tout le pack Essentiel</li>
                <li className="flex items-center gap-2 font-semibold">✓ Multi-entrepôts & transferts inter-sites</li>
                <li className="flex items-center gap-2">✓ Rapprochement 3 voies (Achats / Réceptions / Factures)</li>
                <li className="flex items-center gap-2">✓ Gestion des traites LCN et alertes trésorerie</li>
                <li className="flex items-center gap-2">✓ Alertes WhatsApp automatiques</li>
                <li className="flex items-center gap-2">✓ Formation sur site de vos équipes</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-[#00099a]"
              >
                Réserver mon cadrage ERP
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                Industrie & Usines
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">ERP Industriel & GPAO Complète</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour les fabricants, usines et réseaux de transformation multi-sites.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">Dès 125 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Architecture sur mesure</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Nomenclatures produits (BOM) & Ordres de fabrication</li>
                <li className="flex items-center gap-2">✓ Suivi des temps hommes / machines et coûts de revient</li>
                <li className="flex items-center gap-2">✓ Traçabilité par numéros de lot & DLC</li>
                <li className="flex items-center gap-2">✓ Bornes tactiles d&apos;atelier pour opérateurs</li>
                <li className="flex items-center gap-2">✓ SLA et astreinte technique de production</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Parler à un architecte ERP
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION */}
      <section className="border-t border-slate-200 bg-white px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Foire Aux Questions ERP
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Questions fréquentes sur nos développements ERP au Maroc
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING LUXURY CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/80">
            📍 Technopark Casablanca · Ateliers de cadrage physique ou visio
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Prêt à doter votre entreprise d&apos;un ERP moderne et sans licence récurrente ?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 md:text-lg">
            Discutons de vos flux de stocks, de commandes et de facturation. Nous vous remettons une étude d&apos;architecture
            détaillée et un devis forfaitaire sous 24h ouvrées.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 active:scale-95"
            >
              <span>Demander mon étude de cadrage ERP</span>
              <span>→</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition-colors hover:bg-emerald-500/20"
            >
              <span>WhatsApp Direct</span>
              <span>💬</span>
            </a>
          </div>

          <div className="mt-14 max-w-xl mx-auto text-left rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h3 className="text-sm font-mono font-bold text-white/80 uppercase tracking-wider mb-4 text-center">
              Ou laissez-nous vos coordonnées pour être recontacté sous 2h :
            </h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Internal SEO links footer */}
      <section className="border-t border-slate-200 bg-white px-5 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold uppercase text-slate-400">Pages Liées</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/crm/logiciel-crm-personnalise", label: "Logiciel CRM Sur Mesure" },
              { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
              { href: "/developpement-logiciel-sur-mesure-casablanca", label: "Logiciel Sur Mesure Casablanca" },
              { href: "/solutions/remplacer-excel", label: "Remplacer Excel en Entreprise" },
              { href: "/insights/logiciel-sur-mesure-ou-standard", label: "Logiciel Sur Mesure ou Standard ?" },
              { href: "/insights/combien-coute-un-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-600 transition-colors hover:border-[#000dbf] hover:text-[#000dbf]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
