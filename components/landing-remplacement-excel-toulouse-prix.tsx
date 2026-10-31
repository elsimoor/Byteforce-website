"use client";

import Link from "next/link";
import { useState, useMemo } from "react";
import { site } from "@/lib/site";
import type { GeoPage } from "@/lib/geo/pages";

export function LandingRemplacementExcelToulousePrix({ page }: { page: GeoPage }) {
  // Simulator State
  const [useCase, setUseCase] = useState<"crm" | "stock" | "devis" | "planning">("devis");
  const [usersCount, setUsersCount] = useState<number>(8);
  const [complexity, setComplexity] = useState<"simple" | "medium" | "complex">("medium");
  const [needMobile, setNeedMobile] = useState<boolean>(true);
  const [needPdfExport, setNeedPdfExport] = useState<boolean>(true);
  const [needApi, setNeedApi] = useState<boolean>(false);

  // Dynamic pricing calculation in Euros
  const { estimatedMin, estimatedMax, estimatedWeeks, hoursSavedYear, roiEurosYear } = useMemo(() => {
    let baseMin = 3500;
    let baseMax = 5500;
    let weeks = 4;

    // Use-case complexity
    if (useCase === "crm") {
      baseMin += 800;
      baseMax += 1500;
    } else if (useCase === "stock") {
      baseMin += 1200;
      baseMax += 2200;
      weeks += 1;
    } else if (useCase === "devis") {
      baseMin += 1500;
      baseMax += 2800;
      weeks += 1;
    } else if (useCase === "planning") {
      baseMin += 1000;
      baseMax += 1800;
    }

    // Complexity of spreadsheets / VBA
    if (complexity === "medium") {
      baseMin += 1200;
      baseMax += 2400;
      weeks += 1;
    } else if (complexity === "complex") {
      baseMin += 3200;
      baseMax += 5500;
      weeks += 2;
    }

    // Number of users scaling
    if (usersCount > 15) {
      baseMin += 1500;
      baseMax += 3000;
      weeks += 1;
    } else if (usersCount > 5) {
      baseMin += 600;
      baseMax += 1200;
    }

    // Addons
    if (needMobile) {
      baseMin += 600;
      baseMax += 1200;
    }
    if (needPdfExport) {
      baseMin += 400;
      baseMax += 800;
    }
    if (needApi) {
      baseMin += 1200;
      baseMax += 2500;
      weeks += 1;
    }

    // Estimated hours saved per year (~2.5h/week/collaborator wasted on spreadsheet chaos)
    const hoursYear = Math.round(usersCount * 2.5 * 47);
    // Valued at ~35 €/h average gross cost for Occitanie enterprise staff
    const roiEuros = Math.round(hoursYear * 35);

    return {
      estimatedMin: baseMin,
      estimatedMax: baseMax,
      estimatedWeeks: Math.min(weeks, 10),
      hoursSavedYear: hoursYear,
      roiEurosYear: roiEuros,
    };
  }, [useCase, usersCount, complexity, needMobile, needPdfExport, needApi]);

  // Lead contact URL pre-filled with simulator params
  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Bonjour ByteForce, je souhaite remplacer nos classeurs Excel à Toulouse. Estimation simulateur: ${estimatedMin} € - ${estimatedMax} € HT pour ${usersCount} utilisateurs (${useCase}).`
  )}`;

  const canonicalUrl = `${site.url}/${page.path}`;

  // Rich Schema.org data for SEO & SERP CTR boost
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Géo-localisation", item: `${site.url}/geo-location` },
          { "@type": "ListItem", position: 3, name: "France", item: `${site.url}/geo-location/remplacement-excel/fr` },
          { "@type": "ListItem", position: 4, name: "Toulouse", item: `${site.url}/geo-location/remplacement-excel/fr/toulouse` },
          { "@type": "ListItem", position: 5, name: "Prix Remplacement Excel", item: canonicalUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Remplacement Excel par Logiciel Sur-Mesure à Toulouse",
        serviceType: "Développement Application Web & Migration Excel",
        description:
          "Prestation de remplacement de classeurs Excel et macros VBA par une application web moderne et collaborative pour PME et entreprises à Toulouse et en Haute-Garonne. Tarifs transparents de 3 500 € à 15 000 € HT.",
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: `${site.url}/logo.png`,
          telephone: site.phone,
        },
        areaServed: {
          "@type": "City",
          name: "Toulouse",
          containedInPlace: {
            "@type": "Country",
            name: "France",
          },
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Grille Tarifaire Remplacement Excel Toulouse",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pack Starter - Migration Tableur Métier",
              },
              price: "3500.00",
              priceCurrency: "EUR",
              description: "Remplacement de 1 à 2 classeurs Excel par une application web Next.js sécurisée.",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pack Business - Application Métier & Workflows",
              },
              price: "6500.00",
              priceCurrency: "EUR",
              description: "Digitalisation complète des devis, facturation, stocks et validation multi-utilisateurs.",
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Pack Entreprise - Plateforme & ERP Dédié",
              },
              price: "13000.00",
              priceCurrency: "EUR",
              description: "Remplacement d'écosystème multi-fichiers, macros VBA, intégrations API comptabilité et RGPD.",
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Quel est le prix pour remplacer Excel par un logiciel à Toulouse ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Le prix se situe généralement entre 3 500 € et 15 000 € HT. Un outil ciblé (remplacement d'un fichier de devis ou de stock) démarre à 3 500 € - 5 500 €. Une application métier multi-rôles avec exports PDF et reporting coûte entre 6 500 € et 12 000 €. Une solution ERP complète avec reprise d'historique et connexions API se situe entre 13 000 € et 24 000 € HT.",
            },
          },
          {
            "@type": "Question",
            name: "Pourquoi remplacer Excel par une application web dédiée plutôt qu'un abonnement SaaS ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Avec un logiciel sur-mesure ByteForce, vous êtes propriétaire à 100% du code source. Il n'y a aucun abonnement mensuel par utilisateur qui explose avec la croissance de l'équipe. De plus, l'outil s'adapte exactement à vos méthodes de travail toulousaines au lieu de vous contraindre à modifier vos processus pour rentrer dans les cases d'un SaaS américain.",
            },
          },
          {
            "@type": "Question",
            name: "Comment se déroule la reprise de nos données Excel historiques ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nous réalisons un nettoyage préalable (dédoublonnage, normalisation des formats, correction des cellules orphelines), puis nous intégrons vos données historiques dans une base relationnelle PostgreSQL sécurisée. Vous ne perdez aucun historique.",
            },
          },
          {
            "@type": "Question",
            name: "Pouvons-nous continuer à travailler sur nos fichiers Excel pendant le développement ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Oui, totalement. Vos équipes continuent leur activité quotidienne sur Excel pendant que nous développons et testons l'application web. La bascule définitive s'opère en quelques heures après formation de vos collaborateurs.",
            },
          },
          {
            "@type": "Question",
            name: "Comment travaille ByteForce avec les entreprises de Toulouse et d'Occitanie ?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Nous accompagnons nos clients à Toulouse (centre-ville, Blagnac, Labège, Colomiers) en visio interactive, partages d'écrans hebdomadaires et démonstrations sur prototypes cliquables. Nous sommes sur le même fuseau horaire (UTC+1), disponibles du lundi au vendredi, et garantissons un interlocuteur technique dédié sans intermédiaire.",
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live Interactive Comparison) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-20 text-white md:px-10 md:pt-16 md:pb-28 lg:px-14">
        {/* Glow ambient background effects */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-20 h-[450px] w-[450px] rounded-full bg-emerald-500/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb nav */}
          <nav aria-label="Fil d'ariane" className="mb-6 flex flex-wrap items-center gap-2 font-mono text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/geo-location" className="transition-colors hover:text-white">
              Lieux
            </Link>
            <span>/</span>
            <Link href="/geo-location/remplacement-excel/fr" className="transition-colors hover:text-white">
              France
            </Link>
            <span>/</span>
            <Link href="/geo-location/remplacement-excel/fr/toulouse" className="transition-colors hover:text-white">
              Toulouse
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Tarifs & Remplacement Excel</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 font-mono text-xs font-medium text-blue-300">
                <span className="h-2 w-2 rounded-full bg-blue-400 animate-pulse" />
                📍 Toulouse & Occitanie · Grille Tarifaire 2026 · Audit Offert
              </div>

              <h1 className="mt-5 font-headline text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl lg:leading-[1.12]">
                Prix pour Remplacer Excel par un{" "}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                  Logiciel Web Sur-Mesure
                </span>{" "}
                à Toulouse
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                Vos classeurs Excel et macros VBA ralentissent vos équipes à <strong>Toulouse, Blagnac ou Labège</strong> ?
                Fini les formules corrompues, les fichiers verrouillés en lecture seule et les copier-coller sans fin.
                Découvrez nos <strong>tarifs réels (de 3 500 € à 15 000 € HT)</strong>, déployés en 4 à 8 semaines, avec 100% de propriété du code source.
              </p>

              {/* Action buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="#simulateur"
                  className="inline-flex items-center justify-center rounded-xl bg-[#000dbf] px-6 py-3.5 font-sans text-sm font-semibold text-white shadow-lg shadow-blue-900/40 transition-all hover:bg-blue-700 hover:shadow-blue-800/60"
                >
                  Calculer mon tarif en 3 clics
                  <span className="ml-2 font-mono">↓</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 font-sans text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10 hover:border-white/30"
                >
                  Auditer mon fichier Excel gratuitement
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
                <div>
                  <div className="text-sm font-bold text-white sm:text-base">Dès 3 500 €</div>
                  <div className="mt-0.5 text-slate-400">Tarif clair sans abonnement</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white sm:text-base">4 à 8 sem.</div>
                  <div className="mt-0.5 text-slate-400">Mise en ligne garantie</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-white sm:text-base">100% Propriétaire</div>
                  <div className="mt-0.5 text-slate-400">Code & Données RGPD</div>
                </div>
              </div>
            </div>

            {/* Interactive Hero Visual Comparison: Before Excel vs After Web App */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 backdrop-blur-xl shadow-2xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-slate-400">Comparateur Avant / Après</span>
                  <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-mono text-emerald-300">Gains constatés</span>
                </div>

                <div className="mt-4 space-y-3 font-sans text-xs">
                  {/* Bad Excel box */}
                  <div className="rounded-xl border border-red-500/30 bg-red-950/30 p-3.5 text-slate-300">
                    <div className="flex items-center justify-between text-red-300 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-red-500" />
                        Avant : Vos fichiers Excel / VBA
                      </span>
                      <span className="font-mono text-[11px] text-red-400/80">Risque élevé</span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-mono">✕</span>
                        <span>« Fichier verrouillé par un autre utilisateur »</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-mono">✕</span>
                        <span>Erreurs de calcul invisibles (#REF!, formules écrasées)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-400 font-mono">✕</span>
                        <span>2h30 perdues par personne / semaine en copier-coller</span>
                      </li>
                    </ul>
                  </div>

                  {/* Good Web App box */}
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 text-slate-300">
                    <div className="flex items-center justify-between text-emerald-300 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-emerald-400" />
                        Après : Application Web ByteForce
                      </span>
                      <span className="font-mono text-[11px] text-emerald-400">Fiabilité 100%</span>
                    </div>
                    <ul className="mt-2.5 space-y-1.5 text-slate-300">
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>Multi-utilisateurs simultanés en temps réel</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>Données centralisées sur base PostgreSQL chiffrée</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-emerald-400 font-mono">✓</span>
                        <span>Génération de devis PDF & validation en 1 clic</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-4 rounded-lg bg-blue-950/40 border border-blue-500/20 p-2.5 text-center font-mono text-[11px] text-blue-200">
                  ⚡ Rentabilisé en moins de 6 mois pour une PME de 10 personnes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE PRICE SIMULATOR (CALCULATEUR DE PRIX EUROS) */}
      <section id="simulateur" className="relative scroll-mt-10 px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 font-mono text-xs font-semibold text-[#000dbf]">
              Simulateur Budgétaire Immédiat
            </div>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Estimez le coût de votre application à Toulouse
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
              Ajustez vos critères actuels pour obtenir une fourchette de prix réaliste, le délai de livraison et les gains annuels estimés pour votre entreprise.
            </p>
          </div>

          <div className="mt-12 grid gap-8 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xl shadow-slate-200/50 md:p-10 lg:grid-cols-12">
            {/* Controls Column */}
            <div className="space-y-6 lg:col-span-7">
              {/* Option 1: Use Case */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  1. Fonction principale du fichier Excel actuel
                </label>
                <div className="mt-2.5 grid grid-cols-2 gap-2.5">
                  {[
                    { id: "devis", label: "Devis & Facturation", sub: "Chiffrage, calculs de marges" },
                    { id: "stock", label: "Stocks & Atelier", sub: "Inventaire, matériel, flux" },
                    { id: "crm", label: "Suivi Commercial / CRM", sub: "Prospects, relances, pipeline" },
                    { id: "planning", label: "Planning & Chantiers", sub: "Interventions, équipes, suivi" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setUseCase(item.id as any)}
                      className={`rounded-xl border p-3 text-left transition-all ${
                        useCase === item.id
                          ? "border-[#000dbf] bg-blue-50/60 shadow-sm"
                          : "border-slate-200 hover:border-slate-300 bg-white"
                      }`}
                    >
                      <div className={`text-xs font-bold ${useCase === item.id ? "text-[#000dbf]" : "text-slate-900"}`}>
                        {item.label}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{item.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 2: Users Count */}
              <div>
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                    2. Nombre de collaborateurs utilisant l'outil
                  </label>
                  <span className="font-mono text-sm font-bold text-[#000dbf] bg-blue-50 px-2 py-0.5 rounded">
                    {usersCount} {usersCount > 1 ? "utilisateurs" : "utilisateur"}
                  </span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="40"
                  value={usersCount}
                  onChange={(e) => setUsersCount(Number(e.target.value))}
                  className="mt-3 w-full accent-[#000dbf] cursor-pointer"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-1">
                  <span>2 utilisateurs (TPE)</span>
                  <span>15 utilisateurs (PME)</span>
                  <span>40+ utilisateurs</span>
                </div>
              </div>

              {/* Option 3: Complexity */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  3. Complexité des fichiers actuels
                </label>
                <div className="mt-2.5 grid grid-cols-3 gap-2.5">
                  {[
                    { id: "simple", label: "Simple", desc: "1-2 onglets standards" },
                    { id: "medium", label: "Intermédiaire", desc: "Liaisons, formules croisées" },
                    { id: "complex", label: "Avancé / VBA", desc: "Macros, scripts, gros historique" },
                  ].map((lvl) => (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => setComplexity(lvl.id as any)}
                      className={`rounded-xl border p-2.5 text-center transition-all ${
                        complexity === lvl.id
                          ? "border-[#000dbf] bg-blue-50/60 font-semibold text-[#000dbf]"
                          : "border-slate-200 hover:border-slate-300 text-slate-700"
                      }`}
                    >
                      <div className="text-xs">{lvl.label}</div>
                      <div className="text-[10px] text-slate-500 mt-0.5">{lvl.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 4: Addons */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                  4. Modules et options complémentaires
                </label>
                <div className="mt-2.5 space-y-2">
                  <label className="flex items-center justify-between rounded-xl border border-slate-200 p-2.5 text-xs hover:border-slate-300 cursor-pointer">
                    <span className="text-slate-800">Interface responsive mobile & tablette (équipes terrain)</span>
                    <input
                      type="checkbox"
                      checked={needMobile}
                      onChange={(e) => setNeedMobile(e.target.checked)}
                      className="accent-[#000dbf] h-4 w-4 rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-200 p-2.5 text-xs hover:border-slate-300 cursor-pointer">
                    <span className="text-slate-800">Génération automatique de PDF (devis officiels, fiches, rapports)</span>
                    <input
                      type="checkbox"
                      checked={needPdfExport}
                      onChange={(e) => setNeedPdfExport(e.target.checked)}
                      className="accent-[#000dbf] h-4 w-4 rounded"
                    />
                  </label>
                  <label className="flex items-center justify-between rounded-xl border border-slate-200 p-2.5 text-xs hover:border-slate-300 cursor-pointer">
                    <span className="text-slate-800">Connexion API (Comptabilité Sage/Pennylane, ERP ou email)</span>
                    <input
                      type="checkbox"
                      checked={needApi}
                      onChange={(e) => setNeedApi(e.target.checked)}
                      className="accent-[#000dbf] h-4 w-4 rounded"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Results Card Column */}
            <div className="flex flex-col justify-between rounded-2xl bg-[#070913] p-6 text-white lg:col-span-5 shadow-inner">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="font-mono text-xs text-slate-400">Estimation Budget HT</span>
                  <span className="rounded bg-blue-500/20 px-2 py-0.5 font-mono text-[11px] text-blue-300">
                    Projet Forfaitaire
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-mono uppercase text-slate-400">Fourchette estimée</div>
                  <div className="mt-1 font-headline text-3xl font-extrabold text-white sm:text-4xl">
                    {estimatedMin.toLocaleString("fr-FR")} € – {estimatedMax.toLocaleString("fr-FR")} €{" "}
                    <span className="text-sm font-normal text-slate-400 font-mono">HT</span>
                  </div>
                  <div className="mt-1 text-xs text-slate-400">
                    Paiement par jalons validés (Acompte · Prototype · Livraison)
                  </div>
                </div>

                {/* Metrics */}
                <div className="mt-6 space-y-3 rounded-xl border border-white/10 bg-white/5 p-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Délai estimé :</span>
                    <span className="font-semibold text-white">{estimatedWeeks} semaines</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Heures économisées / an :</span>
                    <span className="font-semibold text-emerald-300">~{hoursSavedYear} heures</span>
                  </div>
                  <div className="flex justify-between border-t border-white/10 pt-2">
                    <span className="text-slate-400">Gains productivité estimés :</span>
                    <span className="font-semibold text-emerald-300">~{roiEurosYear.toLocaleString("fr-FR")} € / an</span>
                  </div>
                </div>

                <div className="mt-4 text-[11px] text-slate-400 leading-relaxed">
                  ✓ Aucun abonnement récurrent par utilisateur.<br />
                  ✓ Hébergement sécurisé RGPD en France ou sur vos propres serveurs.<br />
                  ✓ Reprise et nettoyage de votre base Excel historique.
                </div>
              </div>

              <div className="mt-8 space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center rounded-xl bg-emerald-600 px-4 py-3 font-sans text-xs font-bold text-white shadow-lg shadow-emerald-900/40 transition-all hover:bg-emerald-500"
                >
                  Valider ce chiffrage sur WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 py-3 font-sans text-xs font-semibold text-white transition-all hover:bg-white/20"
                >
                  Recevoir une proposition détaillée (24h)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. TRANSPARENT PRICING GRID (LES 3 PACKAGES CLAIRS) */}
      <section className="bg-slate-50 border-y border-slate-200/80 px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-200 px-3.5 py-1 font-mono text-xs font-semibold text-slate-800">
              Grille Tarifaire Détaillée 2026
            </div>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Des tarifs forfaitaires fixes, sans mauvaise surprise
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
              Contrairement aux SaaS qui facturent 40 € à 100 € par mois par utilisateur à vie, vous payez une fois pour votre logiciel et vous en devenez l'unique propriétaire.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {/* Tier 1: Starter */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  TPE & Équipes Réduites
                </div>
                <h3 className="mt-2 font-headline text-xl font-bold text-slate-900">
                  Pack Starter Tableur
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Idéal pour remplacer 1 ou 2 fichiers Excel critiques (suivi d'interventions, fichier de devis ou stocks).
                </p>

                <div className="mt-6 border-y border-slate-100 py-4">
                  <div className="font-headline text-3xl font-extrabold text-slate-900">
                    3 500 € – 5 500 €
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">Forfait HT unique · Livraison 3 à 4 sem.</div>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Application web Next.js ultra-rapide</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Base de données relationnelle PostgreSQL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>1 à 5 comptes utilisateurs simultanés</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Importation initiale de vos données Excel nettoyées</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Formation de l'équipe (1h en visio)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Demander un cadrage Starter
                </Link>
              </div>
            </div>

            {/* Tier 2: Business (Featured) */}
            <div className="relative rounded-3xl border-2 border-[#000dbf] bg-white p-8 shadow-xl shadow-blue-900/10 flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#000dbf] px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                Le plus plébiscité à Toulouse
              </div>

              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-[#000dbf] font-semibold">
                  PME & Process Métiers
                </div>
                <h3 className="mt-2 font-headline text-xl font-bold text-slate-900">
                  Pack Business Métier
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pour digitaliser un workflow complet : devis, bon de commande, validation, facturation et tableaux de bord.
                </p>

                <div className="mt-6 border-y border-slate-100 py-4">
                  <div className="font-headline text-3xl font-extrabold text-[#000dbf]">
                    6 500 € – 12 000 €
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">Forfait HT unique · Livraison 5 à 7 sem.</div>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Tout le Pack Starter inclus</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Droits d'accès granulaires (Direction, Commercial, Atelier)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Génération automatique de devis et factures en PDF</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Notifications automatiques (emails & rappels de tâches)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Interface optimisée pour smartphones et tablettes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Garantie de bon fonctionnement 3 mois</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md shadow-blue-900/30 hover:bg-blue-700 transition-colors"
                >
                  Choisir le Pack Business
                </Link>
              </div>
            </div>

            {/* Tier 3: Enterprise */}
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm flex flex-col justify-between">
              <div>
                <div className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                  Industrie & Écosystèmes Complexes
                </div>
                <h3 className="mt-2 font-headline text-xl font-bold text-slate-900">
                  Pack Entreprise / Mini-ERP
                </h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Pour remplacer un ensemble de multiples classeurs Excel liés, des macros VBA lourdes ou une base Access vieillissante.
                </p>

                <div className="mt-6 border-y border-slate-100 py-4">
                  <div className="font-headline text-3xl font-extrabold text-slate-900">
                    13 000 € – 24 000 €
                  </div>
                  <div className="mt-1 font-mono text-xs text-slate-500">Forfait HT unique · Livraison 8 à 10 sem.</div>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-700">
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Architecture sur-mesure haute volumétrie</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Intégrations API directes (Sage, Cegid, Pennylane, ERP)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Historique de modifications complet (audit log & traçabilité)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Migration de données volumineuses (10+ années d'historique)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>Accompagnement au changement & support prioritaire</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact"
                  className="block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-800 hover:bg-slate-100 transition-colors"
                >
                  Consulter pour un projet Entreprise
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LOCAL ENJEUX: POURQUOI TOULOUSE REMPLACE EXCEL */}
      <section className="px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 font-mono text-xs font-semibold text-[#000dbf]">
                Contexte Économique Occitanie
              </div>
              <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
                Pourquoi les PME de Toulouse abandonnent enfin Excel
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Toulouse n'est pas seulement la capitale européenne de l'aéronautique et du spatial : c'est un tissu dense de sous-traitants industriels, de bureaux d'études d'ingénierie, de PME du bâtiment et d'entreprises logistiques réparties entre Blagnac, Colomiers, Labège et l'agglomération toulousaine.
              </p>
              <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                Dans ce contexte d'exigence accrue, un tableur partagé sur un réseau local ou OneDrive montre rapidement ses limites critiques :
              </p>

              <div className="mt-6 space-y-3 font-sans text-xs">
                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-600 font-bold">1</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Le risque d'erreur de formule dans les devis</h4>
                    <p className="text-slate-500 mt-0.5">Une cellule déplacée ou une macro obsolète entraîne des devis sous-évalués et des pertes de marge impossibles à tracer.</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-700 font-bold">2</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Le blocage « Lecture Seule » et conflits de version</h4>
                    <p className="text-slate-500 mt-0.5">Dès que trois personnes ouvrent le même fichier, des versions concurrentes naissent (ex: `Suivi_V2_final_Marc.xlsx`).</p>
                  </div>
                </div>

                <div className="flex gap-3 rounded-xl border border-slate-200 bg-white p-3.5 shadow-sm">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-[#000dbf] font-bold">3</span>
                  <div>
                    <h4 className="font-bold text-slate-900">La dépendance totale à l'auteur de la macro</h4>
                    <p className="text-slate-500 mt-0.5">Si le collaborateur qui a écrit le code VBA quitte l'entreprise, le système devient une boîte noire intouchable.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Asymmetric Illustration Card */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-lg">
                <h3 className="font-headline text-lg font-bold text-slate-900">
                  Le Calcul du Coût Caché d'Excel à Toulouse
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Exemple concret pour une entreprise toulousaine de 12 collaborateurs :
                </p>

                <div className="mt-6 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
                    <span className="text-slate-600">Temps perdu par collaborateur :</span>
                    <span className="font-bold text-slate-900">~2,5 heures / semaine</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
                    <span className="text-slate-600">Temps perdu total par an :</span>
                    <span className="font-bold text-red-600">1 410 heures / an</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-slate-100 p-3">
                    <span className="text-slate-600">Coût salarial brut moyen (35 €/h) :</span>
                    <span className="font-bold text-red-600">49 350 € / an gaspillés</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl bg-emerald-50 border border-emerald-200 p-3.5 text-emerald-900">
                    <span className="font-semibold">Coût d'un logiciel ByteForce :</span>
                    <span className="font-extrabold text-sm">~7 500 € payés une seule fois</span>
                  </div>
                </div>

                <div className="mt-6 rounded-xl bg-blue-50 border border-blue-200 p-4 text-xs text-slate-700">
                  <strong className="text-[#000dbf]">Bilan financier :</strong> Votre investissement est rentabilisé en moins de <strong>8 semaines</strong> d'utilisation quotidienne.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TCO COMPARISON TABLE (EXCEL VS SAAS VS BYTEFORCE) */}
      <section className="bg-white border-t border-slate-200 px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 font-mono text-xs font-semibold text-slate-800">
              Comparatif Économique TCO
            </div>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Excel vs Logiciel SaaS vs Logiciel Dédié ByteForce
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
              Regardez au-delà du premier mois : voici ce que vous coûte réellement chaque option sur un cycle de 3 ans.
            </p>
          </div>

          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900 font-headline text-sm bg-slate-50">
                  <th className="py-4 px-4 font-bold">Critères d'évaluation</th>
                  <th className="py-4 px-4 font-bold text-slate-600">Rester sur Excel / VBA</th>
                  <th className="py-4 px-4 font-bold text-slate-600">Abonnement SaaS Standard</th>
                  <th className="py-4 px-4 font-bold text-[#000dbf] bg-blue-50/50">Sur-Mesure ByteForce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Coût Année 1</td>
                  <td className="py-3.5 px-4 text-red-600">0 € direct (49k€ coût masqué)</td>
                  <td className="py-3.5 px-4">6 000 € – 12 000 € (licences)</td>
                  <td className="py-3.5 px-4 font-bold text-[#000dbf] bg-blue-50/50">6 500 € – 10 000 € (développement)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Coût Années 2 & 3</td>
                  <td className="py-3.5 px-4 text-red-600">Coût d'erreurs récurrent</td>
                  <td className="py-3.5 px-4 text-red-600">12 000 € – 24 000 € supplémentaires</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-blue-50/50">0 € (uniquement votre hébergement ~20€/mois)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Propriété du Code</td>
                  <td className="py-3.5 px-4">Aucune (logiciel Microsoft)</td>
                  <td className="py-3.5 px-4 text-red-600">0% (Locataire captif)</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-blue-50/50">100% à votre entreprise</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Adaptation aux Processus</td>
                  <td className="py-3.5 px-4">Bricolage avec macros fragiles</td>
                  <td className="py-3.5 px-4 text-amber-700">Rigide (cases prédéfinies)</td>
                  <td className="py-3.5 px-4 font-bold text-[#000dbf] bg-blue-50/50">100% taillé selon vos habitudes</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Travail Collaboratif</td>
                  <td className="py-3.5 px-4 text-red-600">Conflits permanents</td>
                  <td className="py-3.5 px-4 text-emerald-600">Collaboratif</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-blue-50/50">Collaboratif temps réel & rôles stricts</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-900">Conformité RGPD & Données</td>
                  <td className="py-3.5 px-4 text-red-600">Fichiers dispersés sur postes</td>
                  <td className="py-3.5 px-4 text-amber-700">Données souvent aux USA</td>
                  <td className="py-3.5 px-4 font-bold text-emerald-600 bg-blue-50/50">Hébergement France / UE sécurisé</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. MIGRATION METHODOLOGY IN 4 STEPS */}
      <section className="bg-slate-50 border-t border-slate-200 px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3.5 py-1 font-mono text-xs font-semibold text-[#000dbf]">
              Méthodologie Éprouvée
            </div>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Comment nous migrons vos classeurs sans bloquer votre activité
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600 text-sm sm:text-base">
              Vos équipes à Toulouse continuent à travailler normalement pendant que nous construisons et validons votre nouvelle application web.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Diagnostic & Nettoyage",
                time: "48 heures",
                desc: "Nous ouvrons vos fichiers réels ensemble. Nous isolons les colonnes utiles, éliminons les doublons et cartographions les règles métiers critiques.",
              },
              {
                step: "02",
                title: "Prototype UX Cliquable",
                time: "Semaine 1",
                desc: "Avant d'écrire une ligne de code, vous testez les écrans et formulaires interactifs. Vos collaborateurs valident chaque geste.",
              },
              {
                step: "03",
                title: "Développement & Import Test",
                time: "Semaines 2 à 5",
                desc: "Développement moderne en Next.js et PostgreSQL. Nous effectuons un import test de vos données historiques réelles pour valider les calculs.",
              },
              {
                step: "04",
                title: "Formation & Bascule Définitive",
                time: "Semaine 6",
                desc: "Formation de votre équipe en 1 heure chrono. Bascule finale en douceur. Vos classeurs Excel sont définitivement archivés en toute sérénité.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-2xl font-extrabold text-[#000dbf]">{item.step}</span>
                  <span className="rounded bg-slate-100 px-2 py-0.5 font-mono text-[10px] text-slate-600">
                    {item.time}
                  </span>
                </div>
                <h3 className="mt-4 font-headline text-base font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ ACCORDION (HAUTE VALEUR SEO & CONVERSION) */}
      <section className="bg-white border-t border-slate-200 px-5 py-20 md:px-10 md:py-24 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3.5 py-1 font-mono text-xs font-semibold text-slate-800">
              Questions Fréquentes
            </div>
            <h2 className="mt-3 font-headline text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl md:text-4xl">
              Tout savoir sur le prix et le remplacement d'Excel à Toulouse
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {[
              {
                q: "Quel est le budget moyen à prévoir pour une PME toulousaine ?",
                a: "Pour la majorité des PME que nous accompagnons (10 à 30 salariés), le budget moyen se situe entre 6 500 € et 11 000 € HT pour une application métier complète (ex: devis, facturation, suivi de stocks ou plannings). Pour un outil très simple de saisie, comptez à partir de 3 500 € HT.",
              },
              {
                q: "Comment se déroule la collaboration à distance avec nos équipes à Toulouse ?",
                a: "Nous travaillons sur le même fuseau horaire (UTC+1). Nous organisons des points visio réguliers avec partage d'écran et vous avez accès permanent à un environnement de pré-production en ligne pour tester chaque fonctionnalité au fur et à mesure des sprints de 2 semaines.",
              },
              {
                q: "Que deviennent nos formules mathématiques et nos macros VBA ?",
                a: "Nous traduisons l'intégralité de vos formules et logiques VBA complexes directement dans le code backend de l'application ou dans la base de données. Les calculs s'exécutent en millisecondes sans jamais risquer d'être corrompus par une mauvaise manipulation de cellule.",
              },
              {
                q: "Sommes-nous propriétaires du code source et de l'hébergement ?",
                a: "Oui, à 100%. Le code source vous appartient intégralement et vous est livré sur un dépôt GitHub/GitLab à votre nom. Vous êtes libre de l'héberger sur vos serveurs internes ou dans le cloud de votre choix en France (OVH, Scaleway, AWS Paris).",
              },
              {
                q: "Combien de temps prend la prise en main par nos salariés ?",
                a: "Moins de 2 heures. Comme l'interface est conçue sur-mesure autour de votre vocabulaire métier et de vos habitudes de saisie, vos collaborateurs la trouvent infiniment plus intuitive et rapide qu'un tableur touffu.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group rounded-2xl border border-slate-200 bg-slate-50 p-5 text-xs text-slate-700 transition-all open:bg-white open:shadow-md"
              >
                <summary className="flex cursor-pointer items-center justify-between font-headline text-sm font-bold text-slate-900 list-none">
                  <span>{faq.q}</span>
                  <span className="font-mono text-base text-[#000dbf] transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-slate-600 border-t border-slate-100 pt-3">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CLOSING HIGH-CONVERSION CTA SECTION */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 right-1/4 h-[450px] w-[450px] rounded-full bg-gradient-to-tr from-blue-600/20 via-indigo-500/10 to-transparent blur-3xl"
        />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1 font-mono text-xs font-semibold text-blue-300">
            Audit Gratuit & Sans Engagement
          </div>
          <h2 className="mt-4 font-headline text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
            Prêt à dire adieu aux bugs Excel dans votre entreprise à Toulouse ?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-sm sm:text-base leading-relaxed">
            Envoyez-nous votre fichier Excel actuel ou décrivez votre besoin. Nous analysons la faisabilité technique et vous retournons une proposition chiffrée détaillée sous 24 heures ouvrées.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-[#000dbf] px-8 py-4 font-sans text-sm font-semibold text-white shadow-xl shadow-blue-900/40 transition-all hover:bg-blue-700"
            >
              Demander mon étude & devis gratuit (24h)
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-sans text-sm font-medium text-white backdrop-blur transition-all hover:bg-white/10"
            >
              Échanger directement sur WhatsApp
            </a>
          </div>

          <div className="mt-8 font-mono text-xs text-slate-400">
            Téléphone direct : <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="text-white hover:underline">{site.phone}</a> · Du lundi au vendredi de 9h à 19h
          </div>
        </div>
      </section>
    </div>
  );
}
