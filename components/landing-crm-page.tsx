"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export function LandingCrmPage() {
  const [activeTab, setActiveTab] = useState<"pipeline" | "whatsapp" | "invoicing" | "analytics">("pipeline");
  const [calculatorUsers, setCalculatorUsers] = useState<number>(8);

  const saasYearlyCostMad = Math.round(calculatorUsers * 75 * 10 * 12); // $75/user/month * 10 MAD exchange * 12 months
  const saas3YearsCostMad = saasYearlyCostMad * 3;
  const byteforceFixedCost = 45000;
  const savings3Years = saas3YearsCostMad - byteforceFixedCost;

  const faqs = [
    {
      q: "Combien coûte le développement d'un CRM sur mesure au Maroc ?",
      a: "Chez ByteForce, un CRM sur mesure pour PME démarre à partir de 30 000 MAD pour une version commerciale essentielle (pipeline, contacts, devis simples). Pour une plateforme avancée intégrant les relances WhatsApp, la conformité fiscale DGI complète et le reporting multi-agences, l'investissement se situe généralement entre 45 000 MAD et 85 000 MAD en forfait unique, sans aucun abonnement par utilisateur.",
    },
    {
      q: "Qui est propriétaire du code source et des données clients ?",
      a: "Vous êtes propriétaire à 100% de la solution. À la livraison finale, l'intégralité du code source (dépôt Git) et la base de données PostgreSQL vous sont transférées. Vos données restent hébergées au Maroc ou sur le cloud souverain de votre choix, sans accès tiers ni dépendance logicielle.",
    },
    {
      q: "Comment fonctionne l'intégration WhatsApp Business ?",
      a: "Le CRM permet à vos commerciaux d'envoyer des devis PDF officiels directement sur WhatsApp en un clic, de programmer des relances douces automatiques après 48h sans réponse, et de centraliser l'historique des conversations dans la fiche prospect.",
    },
    {
      q: "Combien de temps faut-il pour concevoir et déployer le CRM ?",
      a: "Le délai moyen est de 3 à 6 semaines. Nous procédons par sprints agiles : une première version testable avec vos vraies données est prête dès la 3ème semaine. Nous formons ensuite vos équipes en une demi-journée pour une adoption immédiate.",
    },
    {
      q: "Peut-on migrer nos fichiers Excel et nos logiciels existants ?",
      a: "Oui. Nous prenons en charge l'audit, le dédoublonnage et le nettoyage complet de vos classeurs Excel ou anciens logiciels de gestion pour importer tous vos historiques clients sans aucune coupure d'activité commerciale.",
    },
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite échanger sur un projet de CRM sur mesure pour mon entreprise."
  )}`;

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      {/* Schema.org Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "CRM", path: "/crm" },
          { name: "Logiciel CRM Personnalisé", path: "/crm/logiciel-crm-personnalise" },
        ]}
      />
      <ServiceJsonLd
        name="Développement CRM Sur Mesure Maroc"
        description="Logiciel CRM personnalisé pour entreprises marocaines : pipeline de vente, automatisation WhatsApp, devis conformes DGI et 0 abonnement mensuel."
        path="/crm/logiciel-crm-personnalise"
        serviceType="Logiciel CRM Personnalisé"
        priceRange="À partir de 30 000 MAD"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live Interactive Mockup) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        {/* Glow Effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb row */}
          <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-2 font-mono text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/solutions" className="transition-colors hover:text-white">
              Solutions
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">CRM Sur Mesure Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Value Proposition & CTAs */}
            <div className="lg:col-span-7">
              {/* Badge with pulse dot */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-indigo-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  CRM Métier · Studio Technopark Casablanca
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                CRM sur mesure au Maroc : le logiciel de vente taillé pour votre cycle commercial.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Fini les feuilles Excel contradictoires et les abonnements mensuels en dollars à Salesforce ou HubSpot.
                ByteForce conçoit votre CRM d&apos;entreprise propriétaire : pipeline visuel, relances automatiques
                WhatsApp, devis conformes DGI (ICE/TVA) et <strong>zéro abonnement par utilisateur</strong>.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 hover:shadow-2xl active:scale-95"
                >
                  <span>Demander un devis & cadrage gratuit</span>
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
                  <span className="text-white/50 text-[11px]">Zéro coût par utilisateur</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">3 à 6 semaines</span>
                  <span className="text-white/50 text-[11px]">Délai de livraison clé en main</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">100% Propriétaire</span>
                  <span className="text-white/50 text-[11px]">Code source & base remis</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme DGI</span>
                  <span className="text-white/50 text-[11px]">ICE, IF, RC & TVA marocaine</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Live CRM Mockup Window */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172b] to-[#0c0f1d] p-3 shadow-2xl backdrop-blur-xl">
                {/* Mockup Top Window Bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 font-mono text-[11px] text-white/50">byteforce-crm.internal / sales</span>
                  </div>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-[10px] text-emerald-300">
                    Live Pipeline
                  </span>
                </div>

                {/* Micro CRM Stats Bar */}
                <div className="grid grid-cols-3 gap-2 p-3 font-mono">
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <span className="text-[10px] text-white/40 uppercase">Pipeline Actif</span>
                    <p className="text-sm font-semibold text-white">1 420 000 MAD</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <span className="text-[10px] text-white/40 uppercase">Closing Estimé</span>
                    <p className="text-sm font-semibold text-emerald-400">72% ce mois</p>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-white/[0.03] p-2">
                    <span className="text-[10px] text-white/40 uppercase">Relances J</span>
                    <p className="text-sm font-semibold text-indigo-300">6 WhatsApp</p>
                  </div>
                </div>

                {/* Pipeline Stages Mini Columns */}
                <div className="space-y-2.5 px-3 pb-3">
                  {/* Lead 1 */}
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-blue-400/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-white">Groupe Atlas Distribution</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">180 000 MAD</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/60">
                      <span>Négociation finale · Casablanca</span>
                      <span className="rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] text-blue-300">Devis validé</span>
                    </div>
                  </div>

                  {/* Lead 2 */}
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-emerald-400/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-white">Laboratoire Santé Rabat</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">95 000 MAD</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/60">
                      <span>Proposition envoyée · ICE vérifié</span>
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 text-[10px] text-emerald-300">
                        WhatsApp envoyé
                      </span>
                    </div>
                  </div>

                  {/* Lead 3 */}
                  <div className="rounded-lg border border-white/10 bg-white/[0.04] p-2.5 transition-all hover:border-amber-400/50">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs text-white">Transports Express Tanger</span>
                      <span className="font-mono text-xs font-bold text-emerald-400">140 000 MAD</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[11px] text-white/60">
                      <span>Qualification commerciale</span>
                      <span className="rounded bg-amber-500/20 px-1.5 py-0.5 text-[10px] text-amber-300">Rappel J+2</span>
                    </div>
                  </div>
                </div>

                {/* Footer simulation */}
                <div className="flex items-center justify-between border-t border-white/10 px-3 py-2 text-[11px] text-white/40">
                  <span>⚡ Zéro latence · Synchronisation PostgreSQL</span>
                  <span className="text-emerald-400">Serveur dédié Maroc</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SNIPPET DIRECT ANSWER (Search Intent Card) */}
      <section className="relative -mt-8 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-l-4 border-[#000dbf] bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                Réponse directe aux dirigeants · Synthèse investissement
              </span>
              <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
                Combien coûte et comment fonctionne un CRM sur mesure au Maroc ?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Un logiciel CRM sur mesure au Maroc coûte généralement entre <strong>30 000 MAD et 85 000 MAD</strong> en
                investissement forfaitaire unique, sans aucun abonnement mensuel par utilisateur. Conçu pour le cycle de
                vente marocain, il centralise vos prospects, automatise vos relances par WhatsApp et email, génère des
                devis conformes aux règles fiscales marocaines (ICE, IF, RC, TVA 20%) et s&apos;amortit en moyenne en moins
                de 5 mois par rapport aux solutions américaines en licence SaaS.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#000dbf] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00099a]"
            >
              Cadrer mon CRM
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC VALUE SECTION: Le problème des CRM standards vs Sur Mesure */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
                L&apos;état des lieux au Maroc
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Pourquoi 8 PME marocaines sur 10 abandonnent les CRM standards du marché ?
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                À Casablanca, Rabat ou Tanger, de nombreuses directions commerciales ont tenté l&apos;aventure Salesforce,
                HubSpot ou Zoho. Après 3 mois et des milliers de Dirhams dépensés, les commerciaux reviennent
                clandestinement à Excel et WhatsApp. Pourquoi ?
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Facturation mensuelle exponentielle en devises</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      70 $ à 120 $ par utilisateur chaque mois. Recruter 5 nouveaux commerciaux double la facture sans
                      créer aucun actif pour votre société.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Absence de connexion WhatsApp & terrain</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Au Maroc, 80% des négociations passent par WhatsApp. Un logiciel rigide qui ne gère pas ce canal
                      est instantanément rejeté par les commerciaux.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Devis non conformes à la réglementation marocaine</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Impossibilité de générer proprement des devis et factures avec ICE, IF, RC, Patente et TVA 20%
                      sans passer par des modules tiers payants.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive ROI Calculator Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                    Simulateur Financier TCO
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                    Rentabilité 5 mois
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Comparez votre coût d&apos;abonnement SaaS vs un CRM ByteForce
                </h3>

                <div className="mt-6 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700">
                      <span>Taille de l&apos;équipe commerciale :</span>
                      <span className="font-bold text-[#000dbf]">{calculatorUsers} utilisateurs</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="30"
                      value={calculatorUsers}
                      onChange={(e) => setCalculatorUsers(Number(e.target.value))}
                      className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#000dbf]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>3 commerciaux</span>
                      <span>15</span>
                      <span>30 commerciaux</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 font-mono">
                    <div>
                      <span className="text-[11px] text-slate-500">Abonnement SaaS (3 ans)</span>
                      <p className="text-lg font-extrabold text-rose-600 sm:text-xl">
                        {saas3YearsCostMad.toLocaleString("fr-FR")} MAD
                      </p>
                      <span className="text-[10px] text-slate-400">~{saasYearlyCostMad.toLocaleString("fr-FR")} MAD/an</span>
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
                    <span className="text-xs text-emerald-800 font-medium">Économie nette réalisée sur 3 ans :</span>
                    <p className="text-2xl font-black text-emerald-700 sm:text-3xl">
                      + {savings3Years.toLocaleString("fr-FR")} MAD
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-600">
                      Et vous êtes propriétaire à 100% de votre code et de votre base de données.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#000dbf]"
                  >
                    Demander une proposition chiffrée détaillée
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MODULE SHOWCASE (Tabbed Product Capabilities) */}
      <section className="border-t border-slate-200 bg-slate-50/70 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
              Architecture Produit
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Les 4 piliers fonctionnels de votre CRM sur mesure
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Chaque brique est codée pour accélérer la vente et simplifier le quotidien de vos commerciaux à Casablanca
              et dans tout le Royaume.
            </p>
          </div>

          {/* Tabs bar */}
          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "pipeline", label: "Pipeline Visuel & Kanban" },
              { id: "whatsapp", label: "Relances WhatsApp Automatiques" },
              { id: "invoicing", label: "Devis & Factures DGI (ICE/TVA)" },
              { id: "analytics", label: "Tableaux de Bord Direction" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-[#000dbf] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
            {activeTab === "pipeline" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">01 · Suivi Commercial</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Visualisez chaque opportunité d&apos;un coup d&apos;œil sans rien oublier
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Un tableau Kanban intuitif calqué sur vos étapes réelles : Premier contact, Rendez-vous effectué,
                    Devis envoyé, Négociation de prix, Clôture. Vos commerciaux glissent-déposent les cartes en 2
                    secondes depuis leur smartphone ou leur ordinateur de bureau.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Montant pondéré automatique par probabilité de closing
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Alertes visuelles sur les affaires sans interaction depuis 5 jours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Segmentation par ville (Casablanca, Rabat, Tanger, Marrakech)
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-900 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>Kanban / Démo en direct</span>
                    <span className="text-emerald-400">Actif</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3">
                    <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                      <span className="text-[10px] text-amber-300 uppercase font-bold">Devis Envoyé (3)</span>
                      <div className="mt-2 space-y-2">
                        <div className="rounded bg-black/40 p-2 text-[11px]">
                          <p className="text-white font-semibold">Société Souss Agro</p>
                          <p className="text-emerald-400">85 000 MAD</p>
                        </div>
                        <div className="rounded bg-black/40 p-2 text-[11px]">
                          <p className="text-white font-semibold">Cabinet Conseil Rabat</p>
                          <p className="text-emerald-400">42 000 MAD</p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3 border border-white/10">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold">Gagné ce mois (4)</span>
                      <div className="mt-2 space-y-2">
                        <div className="rounded bg-black/40 p-2 text-[11px]">
                          <p className="text-white font-semibold">Clinique Casa Anfa</p>
                          <p className="text-emerald-400">110 000 MAD</p>
                        </div>
                        <div className="rounded bg-black/40 p-2 text-[11px]">
                          <p className="text-white font-semibold">Holding Immobilier</p>
                          <p className="text-emerald-400">165 000 MAD</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "whatsapp" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-emerald-600">02 · Vente Connectée</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Envoyez vos devis et relancez sur WhatsApp en 1 clic
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    90% des clients professionnels marocains répondent 10 fois plus vite sur WhatsApp que par email. Notre
                    intégration native permet de notifier le client avec son lien de devis sécurisé et de programmer des
                    rappels automatiques respectueux pour accélérer la signature.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Envoi du bon de commande ou devis PDF sans quitter l&apos;écran
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Modèles de messages personnalisés en français et arabe
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Historisation automatique de l&apos;échange dans la fiche client
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-emerald-200 bg-emerald-950 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex items-center gap-2 border-b border-emerald-800 pb-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-500" />
                    <span className="text-emerald-200 font-bold">WhatsApp Business API Gateway</span>
                  </div>
                  <div className="mt-4 space-y-3">
                    <div className="rounded-lg bg-emerald-900/60 p-3 text-[11px] border border-emerald-700/50">
                      <span className="text-emerald-300 font-bold">Relance automatique programmée :</span>
                      <p className="mt-1 text-emerald-100 font-sans">
                        &quot;Bonjour M. Tazi, suite à notre échange de mardi, voici le lien direct vers votre devis
                        #BF-2026-44. Souhaitez-vous caler un point de 10 min pour valider le démarrage ?&quot;
                      </p>
                      <span className="mt-2 inline-block text-[10px] text-emerald-400">Statut: Livré et lu ✓✓</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "invoicing" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">03 · Rigueur Fiscale</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Conformité marocaine intégrale : ICE, IF, RC & TVA 20%
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Ne perdez plus 30 minutes sous Word ou Excel à retoucher des devis. Votre CRM génère des documents
                    commerciaux aux normes fiscales marocaines strictes, prêts à être transmis à votre cabinet comptable
                    ou au client.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Vérification automatique du format ICE marocain à 15 chiffres
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Calcul dynamique TVA (20%, 14%, 10%, exonéré) et montants en Dirhams
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Transformation du devis en bon de commande et facture en 1 clic
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-100 p-5 font-mono text-xs text-slate-800 shadow-inner">
                  <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-500 font-bold">
                    <span>DOCUMENT COMMERCIAL · FORMAT MAROCAIN</span>
                    <span className="text-[#000dbf]">PDF OFFICIEL</span>
                  </div>
                  <div className="mt-3 space-y-2 bg-white p-4 rounded-lg border border-slate-200">
                    <div className="flex justify-between text-[11px]">
                      <span className="font-bold">DEVIS N° DE-2026-089</span>
                      <span>Date : 31/10/2026</span>
                    </div>
                    <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                      Client : Société BTP Casablanca · ICE : 002345678000045 · RC : 456789
                    </div>
                    <div className="flex justify-between text-[11px] font-bold text-slate-900 pt-2 border-t border-slate-100">
                      <span>Total TTC à régler :</span>
                      <span className="text-[#000dbf]">54 000,00 MAD</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "analytics" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-indigo-600">04 · Décision Stratégique</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Pilotez votre force commerciale avec des chiffres fiables en direct
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Fini les réunions du vendredi soir passées à interroger chaque commercial sur ses rendez-vous. La
                    direction générale et les directeurs des ventes disposent de tableaux de bord instantanés.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Taux de transformation par commercial et par source de lead
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Prévisionnel des encaissements sur 30, 60 et 90 jours
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-emerald-500 font-bold">✓</span> Export Excel & PDF pour vos réunions d&apos;actionnaires
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>Performance Commerciale · Q4 2026</span>
                    <span className="text-emerald-400">Objectif: 115%</span>
                  </div>
                  <div className="mt-3 space-y-3">
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span>Karim M. (Secteur Casablanca)</span>
                        <span className="text-emerald-400 font-bold">480 000 MAD (122%)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500 rounded-full" style={{ width: "85%" }} />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-[11px]">
                        <span>Sara B. (Secteur Rabat-Tanger)</span>
                        <span className="text-indigo-300 font-bold">390 000 MAD (108%)</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-[#000dbf] rounded-full" style={{ width: "72%" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE: Linear / Stripe Style High-Contrast Table */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Comparative Objective
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              CRM Sur Mesure ByteForce vs Alternatives du Marché
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">CRM Sur Mesure ByteForce</th>
                  <th className="py-4 px-6">SaaS US (HubSpot, Salesforce)</th>
                  <th className="py-4 px-6">Classeur Excel Partagé</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Modèle de facturation</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Forfait unique (0 MAD / mois à vie)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Abonnement par utilisateur ($/mois)</td>
                  <td className="py-4 px-6">Gratuit (mais gouffre en temps)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété du code et données</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% Client (Base & Code remis)
                  </td>
                  <td className="py-4 px-6 text-slate-500">Locataire dépendant</td>
                  <td className="py-4 px-6">Fichiers locaux non sécurisés</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Intégration WhatsApp native</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Intégrée nativement en 1 clic
                  </td>
                  <td className="py-4 px-6 text-slate-500">Extensions tierces instables et payantes</td>
                  <td className="py-4 px-6 text-rose-600">Copier-coller manuel pénible</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Règles fiscales marocaines</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    ICE, IF, RC, TVA en Dirhams natifs
                  </td>
                  <td className="py-4 px-6 text-slate-500">Inadapté aux devis DGI</td>
                  <td className="py-4 px-6 text-slate-500">Formules fragiles à maintenir</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Adoption commerciale</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Immédiate (écrans épurés, 30s par lead)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Usine à gaz souvent boycottée</td>
                  <td className="py-4 px-6 text-rose-600">Conflits de versions quotidiens</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT PROJECT PACKAGES (Indicative Pricing Tiers) */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Investissement Forfaitaire
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des tarifs clairs, forfaitaires et sans coût caché
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Chaque formule inclut l&apos;architecture, le développement sur mesure, la migration de vos contacts et la
              formation complète de vos équipes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                PME Starter
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">CRM Commercial Essentiel</h3>
              <p className="mt-2 text-xs text-slate-500">
                Idéal pour structurer les ventes d&apos;une petite équipe de 3 à 8 commerciaux.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">30 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait unique · 0 abonnement</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Pipeline Kanban personnalisable</li>
                <li className="flex items-center gap-2">✓ Gestion des contacts et entreprises</li>
                <li className="flex items-center gap-2">✓ Génération devis PDF simples</li>
                <li className="flex items-center gap-2">✓ Import initial fichier Excel</li>
                <li className="flex items-center gap-2">✓ Délai : 3 à 4 semaines</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Demander un devis
              </Link>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="relative rounded-2xl border-2 border-[#000dbf] bg-white p-7 shadow-xl ring-4 ring-blue-50">
              <div className="absolute -top-3.5 right-6 rounded-full bg-[#000dbf] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Le Plus Choisi
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf]">
                PME Croissance
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">CRM Pro & Automatisation WhatsApp</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour les entreprises en expansion qui exigent réactivité et suivi rigoureux.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#000dbf]">48 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait unique · 0 abonnement</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-semibold">✓ Tout le pack Essentiel</li>
                <li className="flex items-center gap-2 font-semibold">✓ Connexion WhatsApp Business en 1 clic</li>
                <li className="flex items-center gap-2">✓ Devis & bons de commande conformes DGI</li>
                <li className="flex items-center gap-2">✓ Relances automatiques programmées</li>
                <li className="flex items-center gap-2">✓ Rôles et droits commerciaux / managers</li>
                <li className="flex items-center gap-2">✓ Délai : 4 à 6 semaines</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-[#00099a]"
              >
                Réserver mon cadrage gratuit
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                Grande Entreprise
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Suite CRM Multi-Agences & ERP</h3>
              <p className="mt-2 text-xs text-slate-500">
                Réseaux d&apos;agences, franchises et groupes avec connexions comptables complexes.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">Dès 75 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait sur mesure</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Gestion multi-agences et territoires</li>
                <li className="flex items-center gap-2">✓ Synchronisation API ERP & comptabilité</li>
                <li className="flex items-center gap-2">✓ Gestion des commissions par commercial</li>
                <li className="flex items-center gap-2">✓ SLA garantie de temps de réponse dédié</li>
                <li className="flex items-center gap-2">✓ Délai : 6 à 10 semaines</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Parler à un architecte logiciel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY / PROCESS (Technopark Casablanca) */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Processus d&apos;Ingénierie Agile
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Notre méthode en 4 étapes pour un CRM déployé sans risque
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Immersion & Cadrage</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Nous analysons vos devis, vos formulaires et le geste réel de vos vendeurs. Rédaction d&apos;un cahier des
                charges pragmatique sans jargon.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Maquettage Figma UI</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Validation écran par écran de l&apos;ergonomie. Vos équipes testent le prototype interactif avant
                d&apos;écrire la moindre ligne de code.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Développement & Data</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Développement moderne avec Next.js et PostgreSQL. Nettoyage de vos fichiers Excel et migration
                sécurisée de votre historique de contacts.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Déploiement & Formation</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Mise en production sur serveur dédié au Maroc. Formation pratique de vos commerciaux en une
                demi-journée et support réactif garanti.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION / GRID */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Foire Aux Questions
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Questions fréquentes sur nos CRM sur mesure
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLOSING LUXURY CTA BANNER (Technopark & Direct Booking) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/80">
            📍 Bureau au Technopark de Casablanca · Route de Nouaceur
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Prêt à doter votre équipe d&apos;un CRM rapide, rentable et 100% sur mesure ?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 md:text-lg">
            Échangez directement avec Walid Moultamiss et nos ingénieurs logiciels. Nous analysons vos flux actuels et
            vous fournissons une feuille de route chiffrée sous 24h ouvrées.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 active:scale-95"
            >
              <span>Demander mon audit commercial gratuit</span>
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

          {/* Lead Form embed */}
          <div className="mt-14 max-w-xl mx-auto text-left rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h3 className="text-sm font-mono font-bold text-white/80 uppercase tracking-wider mb-4 text-center">
              Ou laissez vos coordonnées pour être rappelé sous 2h :
            </h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Internal SEO links footer */}
      <section className="border-t border-slate-200 bg-white px-5 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold uppercase text-slate-400">Pages & Ressources Liées</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/crm-sur-mesure-maroc", label: "CRM Sur Mesure Maroc" },
              { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement Logiciel Maroc" },
              { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
              { href: "/developpement-erp-maroc", label: "Développement ERP Maroc" },
              { href: "/solutions/remplacer-excel", label: "Remplacer Excel en Entreprise" },
              { href: "/insights/crm-sur-mesure-ou-crm-standard", label: "CRM Sur Mesure vs CRM Standard" },
              { href: "/insights/combien-coute-un-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
              { href: "/maroc/casablanca", label: "Agence Logiciel Casablanca" },
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
