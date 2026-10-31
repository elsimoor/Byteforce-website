"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export function LandingCasablancaPage() {
  const [activeZone, setActiveZone] = useState<"sidimaarouf" | "ainsebaa" | "port" | "gauthier">("sidimaarouf");
  const [excelHoursLost, setExcelHoursLost] = useState<number>(14);

  // 14h/week * 52 weeks * 120 MAD average hourly cost = ~87 360 MAD wasted annually
  const annualLossMad = Math.round(excelHoursLost * 52 * 120);

  const faqs = [
    {
      q: "Où sont situés vos bureaux à Casablanca et peut-on se rencontrer en présentiel ?",
      a: "Nos bureaux sont situés au Technopark de Casablanca, sur la Route de Nouaceur à Sidi Maârouf. Nous organisons régulièrement des ateliers de cadrage en présentiel dans nos locaux ou directement au siège de votre entreprise (Casablanca Finance City, Aïn Sebaâ, Marina, Maârif).",
    },
    {
      q: "Combien coûte le développement d'un logiciel sur mesure à Casablanca ?",
      a: "Pour un module métier ciblé remplaçant des fichiers Excel instables, le budget démarre dès 25 000 MAD. Pour un CRM ou un ERP complet pour PME gérant stocks, devis conformes DGI et facturation, le coût se situe généralement entre 45 000 MAD et 85 000 MAD en paiement unique sans abonnement récurrent.",
    },
    {
      q: "Quel est le délai moyen de développement et de mise en production ?",
      a: "Un projet type est livré et déployé en 4 à 8 semaines. Nous fonctionnons par sprints de 2 semaines : vous testez concrètement les écrans et validez vos données réelles à chaque étape sans attendre la fin du projet.",
    },
    {
      q: "Assurez-vous la migration de nos anciennes données (Excel, Sage, access) ?",
      a: "Oui. Nous prenons en charge l'extraction, le nettoyage, le dédoublonnage et l'import complet de vos historiques clients, stocks et factures dans la nouvelle base de données PostgreSQL sans bloquer votre activité quotidienne.",
    },
    {
      q: "Qui est propriétaire du code et comment est géré l'hébergement au Maroc ?",
      a: "Le contrat prévoit la cession totale et irréversible de la propriété intellectuelle du code source et de la base de données. L'application peut être hébergée sur un serveur dédié au Maroc (inwi, Maroc Telecom) ou sur le cloud sécurisé de votre choix conformément aux directives de la CNDP.",
    },
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite planifier un atelier de cadrage logiciel à Casablanca."
  )}`;

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      {/* Schema.org Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Villes", path: "/villes" },
          { name: "Casablanca", path: "/maroc/casablanca" },
          { name: "Logiciel Sur Mesure", path: "/developpement-logiciel-sur-mesure-casablanca" },
        ]}
      />
      <ServiceJsonLd
        name="Développement Logiciel Sur Mesure Casablanca · Studio IT Technopark"
        description="Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code 100% cédé. Devis sous 24h."
        path="/developpement-logiciel-sur-mesure-casablanca"
        serviceType="Développement Logiciel Sur Mesure"
        priceRange="À partir de 25 000 MAD"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Casablanca Engineering Operations Center Mockup) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-blue-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-2 font-mono text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/maroc/casablanca" className="transition-colors hover:text-white">
              Casablanca
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Logiciel Sur Mesure Casablanca</span>
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
                  Technopark Casablanca · Sidi Maârouf
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Développement de logiciel sur mesure à Casablanca : digitalisez vos flux métier.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Fini les tableaux Excel corrompus et les logiciels génériques inadaptés à la réalité du marché
                marocain. Basée au Technopark de Casablanca, ByteForce conçoit vos applications métier, ERP et CRM sur
                mesure : <strong>ateliers en présentiel</strong>, <strong>0 abonnement par licence</strong> et{" "}
                <strong>propriété contractuelle à 100%</strong>.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Réserver un atelier cadrage au Technopark</span>
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
                  <span>WhatsApp direct avec un ingénieur</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Technopark Casa</span>
                  <span className="text-white/50 text-[11px]">Bureaux Sidi Maârouf</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">4 à 8 semaines</span>
                  <span className="text-white/50 text-[11px]">Délai moyen de livraison</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">0 MAD / mois</span>
                  <span className="text-white/50 text-[11px]">Zéro coût par utilisateur</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Conforme DGI/CNDP</span>
                  <span className="text-white/50 text-[11px]">Normes marocaines strictes</span>
                </div>
              </div>
            </div>

            {/* Right Column: Casablanca Operations Control Center Mockup */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-white/80 text-[11px]">byteforce.ma / casablanca-hub</span>
                  </div>
                  <span className="rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[10px] text-blue-300">
                    Sidi Maârouf
                  </span>
                </div>

                {/* Operations Dispatch Simulation */}
                <div className="mt-3 space-y-2.5">
                  <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-white font-semibold">📍 Technopark · R&D & Direction</span>
                      <span className="text-emerald-400">Présentiel actif</span>
                    </div>
                    <p className="mt-1 text-[11px] text-white/60 font-sans">
                      Équipe d&apos;ingénieurs full-stack seniors dédiée aux entreprises du Grand Casablanca.
                    </p>
                  </div>

                  <div className="rounded-xl border border-blue-500/30 bg-blue-950/40 p-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-blue-200 font-bold">🏢 Déploiement Aïn Sebaâ</span>
                      <span className="text-emerald-400">En production</span>
                    </div>
                    <div className="mt-1 flex justify-between text-[11px] text-white/60">
                      <span>ERP Stock multi-dépôts (4 800 références)</span>
                      <span className="font-mono text-emerald-300 font-bold">100% Cédé</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/40 p-3">
                    <div className="flex justify-between items-center text-xs font-mono">
                      <span className="text-indigo-200 font-bold">🏢 Déploiement Casa Finance City</span>
                      <span className="text-emerald-400">En production</span>
                    </div>
                    <div className="mt-1 flex justify-between text-[11px] text-white/60">
                      <span>Portail B2B de facturation DGI & reporting</span>
                      <span className="font-mono text-indigo-300 font-bold">0 abonnement</span>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-white/40">
                  <span>🇲🇦 Hébergement Cloud Casablanca</span>
                  <span className="text-emerald-400">PostgreSQL Cloud Dédié</span>
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
                Synthèse pour dirigeants casablancais · Chiffres Clés
              </span>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Pourquoi choisir une agence de développement logiciel au Technopark de Casablanca ?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Implantée au Technopark de Casablanca, l&apos;agence ByteForce développe des logiciels métier, CRM et ERP
                sur mesure pour les PME et grands comptes du Grand Casablanca. Pour un budget démarrant{" "}
                <strong>dès 25 000 MAD</strong> et un délai moyen de <strong>4 à 8 semaines</strong>, nous digitalisons
                vos processus opérationnels réels, éliminons vos classeurs Excel saturés, assurons la conformité DGI
                (ICE, TVA) et vous remettons <strong>100% de la propriété du code source</strong>.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#000dbf] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00099a]"
            >
              Échanger à Casablanca
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC VALUE SECTION: Le coût réel des feuilles Excel pour une PME à Casablanca */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
                L&apos;impact Financier Réel
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Combien de Dirhams votre entreprise casablancaise perd-elle chaque année dans Excel ?
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Dans une entreprise en croissance à Casablanca, le tableur Excel devient rapidement un gouffre financier
                invisible : des cadres et commerciaux qualifiés passent des heures à copier-coller des lignes, corriger
                des formules erronées et réconcilier des versions contradictoires le vendredi soir.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Erreurs de calcul et pertes sur marges</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Une cellule écrasée par erreur ou une formule faussée peut entraîner des devis sous-évalués de
                      plusieurs dizaines de milliers de Dirhams sans que personne ne s&apos;en aperçoive.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Vulnérabilité et fuite de données clients</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Un fichier Excel partagé sur clé USB ou email peut être emporté en 3 secondes par un employé partant
                      chez un concurrent, sans aucun journal d&apos;audit.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-rose-100 bg-rose-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-500 text-white font-bold">
                    ✕
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Blocage opérationnel lors des congés</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Si la personne qui détient le « fichier maître » est en congé ou en déplacement client, toute la
                      facturation ou la préparation de commande est paralysée.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Interactive Hours Lost Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                    Simulateur de Pertes Opérationnelles
                  </span>
                  <span className="rounded-full bg-rose-100 px-3 py-1 font-mono text-xs font-bold text-rose-800">
                    Coût Caché Excel
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Estimez la masse salariale gaspillée dans les saisies manuelles
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700">
                      <span>Heures cumulées perdues par vos équipes / semaine :</span>
                      <span className="font-bold text-rose-600">{excelHoursLost} heures / sem</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="40"
                      value={excelHoursLost}
                      onChange={(e) => setExcelHoursLost(Number(e.target.value))}
                      className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-rose-600"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>5h (1 personne)</span>
                      <span>20h</span>
                      <span>40h (équivalent temps plein)</span>
                    </div>
                  </div>

                  <div className="rounded-xl bg-slate-50 p-4 font-mono">
                    <span className="text-[11px] text-slate-500">Gaspillage financier annuel en salaires :</span>
                    <p className="text-2xl font-black text-rose-600 sm:text-3xl mt-1">
                      - {annualLossMad.toLocaleString("fr-FR")} MAD / an
                    </p>
                    <span className="text-[10px] text-slate-400">
                      Calcul basé sur le coût moyen chargé d&apos;un profil gestionnaire à Casablanca (120 MAD/h)
                    </span>
                  </div>

                  <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-4 text-center">
                    <span className="text-xs text-emerald-800 font-medium">
                      Coût d&apos;un logiciel sur mesure ByteForce (investissement unique) :
                    </span>
                    <p className="text-2xl font-black text-emerald-700 sm:text-3xl mt-1">
                      35 000 à 60 000 MAD
                    </p>
                    <p className="mt-1 text-[11px] text-emerald-700 font-semibold">
                      Amortissement complet en 5 à 7 mois seulement.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#000dbf]"
                  >
                    Demander un diagnostic gratuit de mes fichiers Excel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CASABLANCA ECONOMIC DISTRICTS SHOWCASE */}
      <section className="border-t border-slate-200 bg-slate-50/70 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
              Écosystème Économique Casablanca
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des solutions logicielles adaptées aux pôles d&apos;activité du Grand Casablanca
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "sidimaarouf", label: "Sidi Maârouf & CFC (Services & Finance)" },
              { id: "ainsebaa", label: "Aïn Sebaâ & Zenata (Industrie & Logistique)" },
              { id: "port", label: "Port de Casablanca (Transit & Négoce)" },
              { id: "gauthier", label: "Gauthier, Maârif & Anfa (Santé & Immobilier)" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveZone(tab.id as typeof activeZone)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all ${
                  activeZone === tab.id
                    ? "bg-[#000dbf] text-white shadow-md shadow-blue-900/20"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
            {activeZone === "sidimaarouf" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">Pôle Tertiaire & Sièges Sociaux</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Sidi Maârouf, Technopark & Casablanca Finance City
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les cabinets de conseil, holdings financières, prestataires IT et sociétés de services, nous
                    développons des plateformes de gestion de mandats, de facturation automatisée et de reporting
                    consolidé pour les conseils d&apos;administration.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Suivi des temps passés et rentabilité par collaborateur</li>
                    <li className="flex items-center gap-2">✓ Portails clients sécurisés avec signature électronique</li>
                    <li className="flex items-center gap-2">✓ Tableaux de bord de trésorerie consolidée multi-sociétés</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-900 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>MODULE GESTION TERTIAIRE · CASABLANCA</span>
                    <span className="text-emerald-400">ACTIF</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Holding Investissements CFC</span>
                      <span className="text-emerald-400 font-bold">12 filiales consolidées</span>
                    </div>
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Cabinet Audit & Expertise Sidi Maârouf</span>
                      <span className="text-indigo-300 font-bold">Portail 180 clients</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === "ainsebaa" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">Pôle Industriel & Logistique</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Aïn Sebaâ, Bernoussi & Zenata
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les usines et plateformes logistiques de l&apos;est casablancais, nous concevons des ERP légers
                    et logiciels de GPAO : entrées/sorties d&apos;entrepôt par scannage de codes-barres, gestion des ordres
                    de fabrication, alertes de réapprovisionnement et suivi de flotte de transport.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Traçabilité par numéro de lot et DLC</li>
                    <li className="flex items-center gap-2">✓ Gestion multi-entrepôts avec inventaire tournant sur tablette</li>
                    <li className="flex items-center gap-2">✓ Édition automatique des bons de livraison et de réception</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-900 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>LOGISTIQUE & STOCK · AÏN SEBAÂ</span>
                    <span className="text-emerald-400">SYNC TEMPS RÉEL</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Dépôt Central Aïn Sebaâ</span>
                      <span className="text-emerald-400 font-bold">4 200 palettes actives</span>
                    </div>
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Plateforme Zenata Cross-Docking</span>
                      <span className="text-amber-300 font-bold">14 tournées / jour</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === "port" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">Pôle Import-Export & Transit</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Port de Casablanca, Centre-Ville & Marina
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les transitaires agréés en douane, transporteurs internationaux et sociétés de négoce, nous
                    développons des outils de suivi des dossiers de dédouanement (BAD, DUM), de facturation des frais de
                    débarquement et de dispatching des chauffeurs.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Suivi chronologique de chaque conteneur au port</li>
                    <li className="flex items-center gap-2">✓ Débours, avances et facturation multidevises (MAD, EUR, USD)</li>
                    <li className="flex items-center gap-2">✓ Notifications WhatsApp automatiques aux clients importateurs</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-900 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>TRANSIT MARITIME · PORT DE CASABLANCA</span>
                    <span className="text-emerald-400">PORTSYNC ACTIVE</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Dossier DUM #2026-9812</span>
                      <span className="text-emerald-400 font-bold">BAD Acquis · Sortie Port</span>
                    </div>
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Facturation Frais Débarquement</span>
                      <span className="text-indigo-300 font-bold">Générée en 1 clic</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeZone === "gauthier" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">Pôle Professions Libérales & Santé</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Gauthier, Racine, Maârif & Bourgogne
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les cliniques privées, centres de radiologie, promoteurs immobiliers et cabinets d&apos;avocats,
                    nous développons des logiciels de réservation, de suivi des dossiers patients sécurisés et de gestion
                    des règlements d&apos;acomptes.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Conformité stricte aux exigences CNDP de confidentialité</li>
                    <li className="flex items-center gap-2">✓ Rappels de rendez-vous automatisés par WhatsApp et SMS</li>
                    <li className="flex items-center gap-2">✓ Gestion des encaissements et reçus conformes</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-900 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>CLINIQUE & SANTÉ · GAUTHIER</span>
                    <span className="text-emerald-400">CNDP CONFORME</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Planning Bloc & Consultations</span>
                      <span className="text-emerald-400 font-bold">Zéro doublon</span>
                    </div>
                    <div className="rounded bg-white/5 p-2.5 flex justify-between">
                      <span>Rappels WhatsApp 24h avant</span>
                      <span className="text-indigo-300 font-bold">-45% de no-show</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE: ByteForce vs SSII Offshore vs Agences Web WordPress */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Comparative Casablanca
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Pourquoi choisir ByteForce Technopark pour votre logiciel d&apos;entreprise ?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères de choix</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">ByteForce (Technopark Casa)</th>
                  <th className="py-4 px-6">SSII Offshore / Délocalisées</th>
                  <th className="py-4 px-6">Agences Web Généralistes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Proximité & réunions en face-à-face</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Présentiel direct à Casablanca (Technopark)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Uniquement visio, décalage et intermédiaires</td>
                  <td className="py-4 px-6 text-slate-500">Présents mais orientés sites vitrines</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Niveau technique d&apos;ingénierie</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Stack moderne Next.js, Node.js & PostgreSQL
                  </td>
                  <td className="py-4 px-6 text-slate-500">Stacks souvent lourdes ou vieillissantes</td>
                  <td className="py-4 px-6 text-rose-600">Bricolage de plugins WordPress fragiles</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété du code source</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% Cédé contractuellement au client
                  </td>
                  <td className="py-4 px-6 text-slate-500">Variables selon clauses complexes</td>
                  <td className="py-4 px-6 text-slate-500">Dépendance aux abonnements hébergeur</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Conformité DGI & WhatsApp Maroc</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Parfaite maîtrise du cadre légal et fiscal marocain
                  </td>
                  <td className="py-4 px-6 text-rose-600">Méconnaissance des spécificités locales</td>
                  <td className="py-4 px-6 text-slate-500">Géré manuellement sans automatisation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. INDICATIVE TRANSPARENT INVESTMENT TIERS */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Budgets Cadrés Casablanca
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des forfaits transparents adaptés à chaque échelle de PME
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                Module Ciblé
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Remplacement Excel Métier</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour remplacer un classeur partagé critique (chantiers, logistique, flotte de véhicules).
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">25 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 3 à 5 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Centralisation d&apos;un flux de gestion critique</li>
                <li className="flex items-center gap-2">✓ Multi-utilisateurs avec gestion des rôles</li>
                <li className="flex items-center gap-2">✓ Nettoyage et import de vos données Excel</li>
                <li className="flex items-center gap-2">✓ Cession 100% de la propriété du code</li>
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
                Recommandé PME
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf]">
                ERP / CRM Intégral
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Logiciel de Gestion Commerciale & Stocks</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour digitaliser l&apos;ensemble du cycle devis, commandes, stocks et facturation DGI.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#000dbf]">49 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 5 à 7 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-semibold">✓ Pipeline commercial + alertes WhatsApp</li>
                <li className="flex items-center gap-2 font-semibold">✓ Devis, bons de commande & factures DGI</li>
                <li className="flex items-center gap-2">✓ Gestion des stocks multi-dépôts en temps réel</li>
                <li className="flex items-center gap-2">✓ Tableaux de bord de closing et trésorerie</li>
                <li className="flex items-center gap-2">✓ Ateliers en présentiel au Technopark</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-[#00099a]"
              >
                Prendre rendez-vous au Technopark
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                Grand Compte
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Plateforme Multi-Agences & Usines</h3>
              <p className="mt-2 text-xs text-slate-500">
                Groupes industriels, réseaux de franchises et holdings multi-filiales.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">Dès 90 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Architecture sur mesure</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Synchronisation multi-sites et terminaux mobiles</li>
                <li className="flex items-center gap-2">✓ Connexion API logiciels comptables & douanes</li>
                <li className="flex items-center gap-2">✓ Sécurité renforcée CNDP et audit de code</li>
                <li className="flex items-center gap-2">✓ Formation sur site de vos équipes</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Consulter notre équipe senior
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
              Foire Aux Questions Casablanca
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tout ce qu&apos;il faut savoir pour démarrer votre projet au Technopark
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
            📍 Technopark Casablanca · Route de Nouaceur, Sidi Maârouf
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Rencontrons-nous à Casablanca pour concevoir votre logiciel sur mesure
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 md:text-lg">
            Venez prendre un café à notre bureau au Technopark ou planifions un échange visio. Nous cadrons votre besoin
            et vous remettons une proposition technique chiffrée sous 24h ouvrées.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 active:scale-95"
            >
              <span>Réserver mon atelier gratuit de 30 min</span>
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
              Ou transmettez-nous votre demande directement :
            </h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Internal SEO links footer */}
      <section className="border-t border-slate-200 bg-white px-5 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold uppercase text-slate-400">Pages & Villes Liées</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/maroc/casablanca", label: "Agence Digitale Casablanca" },
              { href: "/crm/logiciel-crm-personnalise", label: "Logiciel CRM Sur Mesure" },
              { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
              { href: "/developpement-erp-maroc", label: "Développement ERP Maroc" },
              { href: "/developpement-application-mobile-casablanca", label: "Application Mobile Casablanca" },
              { href: "/solutions/remplacer-excel", label: "Remplacer Excel en Entreprise" },
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
