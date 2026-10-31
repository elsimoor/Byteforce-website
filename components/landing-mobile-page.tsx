"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export function LandingMobilePage() {
  const [activeTab, setActiveTab] = useState<"terrain" | "b2c" | "payment" | "push">("terrain");
  const [hasGps, setHasGps] = useState<boolean>(true);
  const [hasPayment, setHasPayment] = useState<boolean>(true);
  const [hasBiometrics, setHasBiometrics] = useState<boolean>(true);
  const [hasOffline, setHasOffline] = useState<boolean>(false);

  // Dynamic budget calculation
  let basePrice = 35000;
  if (hasGps) basePrice += 8000;
  if (hasPayment) basePrice += 9000;
  if (hasBiometrics) basePrice += 5000;
  if (hasOffline) basePrice += 12000;

  const faqs = [
    {
      q: "Combien coûte le développement d'une application mobile à Casablanca ?",
      a: "Pour une application mobile MVP ou un outil métier nomade, le budget démarre généralement à partir de 35 000 MAD. Pour une application grand public intégrant la géolocalisation GPS en temps réel, le paiement sécurisé CMI et les notifications push segmentées, l'investissement se situe entre 55 000 MAD et 110 000 MAD en forfait unique clé en main, incluant la publication sur l'App Store et Google Play.",
    },
    {
      q: "Pourquoi privilégier React Native plutôt que du développement natif séparé ?",
      a: "React Native permet de coder une base de code unique partagée qui se compile en composants natifs sur iPhone (iOS) et Android. Vous économisez environ 40% sur votre budget et divisez vos délais de maintenance par deux, tout en bénéficiant d'une fluidité irréprochable à 60 images par seconde.",
    },
    {
      q: "Prenez-vous en charge la publication et la validation sur l'App Store et Google Play ?",
      a: "Oui. Nous gérons 100% du processus technique : création des comptes développeurs, génération des certificats de sécurité, captures d'écrans conformes aux exigences d'Apple et Google, et réponses aux équipes de revue jusqu'à la mise en ligne officielle de l'application.",
    },
    {
      q: "L'application peut-elle fonctionner sans connexion Internet (mode hors-ligne) ?",
      a: "Absolument. Pour les applications métier (livreurs, commerciaux terrain, inspecteurs de chantiers), nous implémentons une architecture 'Offline-First' avec stockage local sécurisé SQLite/WatermelonDB. Les données se synchronisent automatiquement avec le serveur dès que le smartphone retrouve du réseau 4G ou Wi-Fi.",
    },
    {
      q: "Qui est propriétaire du code source et de la propriété intellectuelle ?",
      a: "Le contrat prévoit la cession totale et irréversible de l'intégralité du code source (dépôt Git), des maquettes graphiques Figma et des comptes stores. Vous ne payez aucune redevance mensuelle ni pourcentage sur vos ventes.",
    },
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite échanger sur un projet de création d'application mobile à Casablanca."
  )}`;

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      {/* Schema.org Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Casablanca", path: "/maroc/casablanca" },
          { name: "Application Mobile", path: "/developpement-application-mobile-casablanca" },
        ]}
      />
      <ServiceJsonLd
        name="Développement Application Mobile Casablanca · iOS & Android"
        description="Agence de développement d'applications mobiles à Casablanca (Technopark) : iOS, Android et React Native. Applications métier & MVP. Devis gratuit sous 24h."
        path="/developpement-application-mobile-casablanca"
        serviceType="Développement Application Mobile"
        priceRange="À partir de 35 000 MAD"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live iPhone 16 Mockup) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-blue-600/25 via-indigo-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-purple-500/15 blur-3xl"
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
            <span className="font-semibold text-white/90">Application Mobile Casablanca</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Headlines & CTAs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Studio Mobile · Technopark Casablanca
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Développement d&apos;application mobile à Casablanca : concevez une app iOS et Android native.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Que ce soit pour équiper vos équipes terrain à Casablanca ou pour lancer une startup grand public sur
                tout le Maroc, ByteForce conçoit des applications mobiles d&apos;exception :{" "}
                <strong>base de code unique React Native</strong>, fluidité native 60 FPS,{" "}
                <strong>validation garantie sur l&apos;App Store & Google Play</strong> et 100% de propriété du code
                source.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Estimer mon application mobile sous 24h</span>
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
                  <span className="text-white font-bold text-sm">React Native</span>
                  <span className="text-white/50 text-[11px]">iOS & Android unifiés</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Dès 35 000 MAD</span>
                  <span className="text-white/50 text-[11px]">Tarif forfaitaire clair</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">5 à 10 semaines</span>
                  <span className="text-white/50 text-[11px]">Délai de mise en ligne</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Stores Validés</span>
                  <span className="text-white/50 text-[11px]">App Store & Google Play</span>
                </div>
              </div>
            </div>

            {/* Right Column: High-End Smartphone Frame Mockup */}
            <div className="flex justify-center lg:col-span-5 lg:justify-end">
              <div className="relative w-full max-w-[320px] rounded-[44px] border-[5px] border-slate-700 bg-slate-950 p-3 shadow-2xl ring-1 ring-white/20">
                {/* Dynamic Island */}
                <div className="mx-auto mb-3 h-5 w-24 rounded-full bg-black flex items-center justify-between px-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-mono text-white/60">GPS Actif</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="rounded-[32px] bg-gradient-to-b from-[#11162d] to-[#070914] p-4 text-white font-sans text-xs shadow-inner">
                  <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
                    <div>
                      <span className="text-[10px] text-white/50 font-mono">ByteForce Delivery Pro</span>
                      <h4 className="font-bold text-sm text-white">Tournée Casablanca</h4>
                    </div>
                    <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] text-emerald-300 font-mono font-bold">
                      60 FPS
                    </span>
                  </div>

                  {/* Live Order Card */}
                  <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-xs text-white">Commande #MD-8812</span>
                      <span className="text-emerald-400 font-mono font-bold">En cours</span>
                    </div>
                    <p className="text-[11px] text-white/70">
                      Livraison client : Casablanca Marina, Tour Végétale
                    </p>
                    <div className="flex items-center justify-between text-[10px] text-white/50 border-t border-white/10 pt-1.5 font-mono">
                      <span>Paiement CMI : Réglé</span>
                      <span className="text-indigo-300">Face ID Validé ✓</span>
                    </div>
                  </div>

                  {/* Offline Mode Status Banner */}
                  <div className="mt-3 rounded-lg border border-indigo-500/30 bg-indigo-950/40 p-2 flex items-center justify-between text-[10px] font-mono">
                    <span className="text-indigo-200">⚡ Mode Offline-First</span>
                    <span className="text-emerald-400">Sync 4G</span>
                  </div>

                  {/* App Action Button */}
                  <div className="mt-4">
                    <button className="w-full rounded-xl bg-[#000dbf] py-2.5 text-center text-xs font-bold text-white shadow-md">
                      Valider la livraison & Signature
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between font-mono text-[9px] text-white/40 border-t border-white/10 pt-2">
                    <span>App Store (iOS)</span>
                    <span>Google Play (Android)</span>
                  </div>
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
                Synthèse pour porteurs de projets mobiles · Chiffres Clés
              </span>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Combien coûte une application mobile à Casablanca et quels sont les délais ?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                Au départ de nos bureaux au Technopark de Casablanca, l&apos;agence ByteForce conçoit et développe des
                applications mobiles performantes pour iOS (iPhone) et Android à partir de{" "}
                <strong>35 000 MAD en 5 à 10 semaines</strong>. Grâce à notre expertise React Native et Expo, nous
                publions une application native unique sur l&apos;App Store et Google Play, divisant vos coûts de
                développement et de maintenance de près de 40% sans compromis sur la fluidité d&apos;affichage.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#000dbf] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00099a]"
            >
              Cadrer mon app
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC VALUE SECTION: Simulateur Dynamique de Budget Mobile */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
                Simulateur de Budget Transparent
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Pourquoi payer deux fois pour iOS et Android quand une seule stack suffit ?
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Historiquement, créer une application mobile exigeait d&apos;embaucher deux équipes distinctes : une en Swift
                pour Apple et une en Kotlin pour Android. Avec React Native (la technologie adoptée par Instagram, Uber
                Eats et Shopify), nous développons une application unique qui partage 95% de sa logique métier tout en
                conservant un rendu graphique 100% natif.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Économie budgétaire de 40%</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Une seule base de code à développer, tester et maintenir, réduisant vos coûts de moitié.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Publication simultanée sur les deux stores</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Vos utilisateurs iPhone et Android découvrent les nouvelles fonctionnalités exactement le même jour.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Mises à jour instantanées sans attendre les stores</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Grâce aux mises à jour Over-The-Air (EAS Update), nous corrigeons des bugs critiques en quelques
                      minutes directement sur les téléphones de vos clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Budget Customizer */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                    Configurateur d&apos;Application Mobile
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                    iOS + Android Inclus
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Sélectionnez les fonctionnalités de votre future app
                </h3>

                <div className="mt-6 space-y-3">
                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <span className="text-sm font-semibold text-slate-800">
                      🛰️ Géolocalisation GPS & Cartographie temps réel
                    </span>
                    <input
                      type="checkbox"
                      checked={hasGps}
                      onChange={(e) => setHasGps(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-[#000dbf] accent-[#000dbf]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <span className="text-sm font-semibold text-slate-800">
                      💳 Passerelle de paiement CMI / Stripe sécurisée
                    </span>
                    <input
                      type="checkbox"
                      checked={hasPayment}
                      onChange={(e) => setHasPayment(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-[#000dbf] accent-[#000dbf]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <span className="text-sm font-semibold text-slate-800">
                      🔐 Authentification biométrique Face ID / Touch ID
                    </span>
                    <input
                      type="checkbox"
                      checked={hasBiometrics}
                      onChange={(e) => setHasBiometrics(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-[#000dbf] accent-[#000dbf]"
                    />
                  </label>

                  <label className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-slate-50 cursor-pointer hover:bg-slate-100">
                    <span className="text-sm font-semibold text-slate-800">
                      📡 Mode Hors-Ligne & Synchronisation auto (Offline-First)
                    </span>
                    <input
                      type="checkbox"
                      checked={hasOffline}
                      onChange={(e) => setHasOffline(e.target.checked)}
                      className="h-5 w-5 rounded border-slate-300 text-[#000dbf] accent-[#000dbf]"
                    />
                  </label>

                  <div className="rounded-xl border border-blue-200 bg-blue-50/70 p-4 text-center mt-5">
                    <span className="text-xs text-blue-900 font-medium">Budget indicatif tout compris (iOS + Android) :</span>
                    <p className="text-3xl font-black text-[#000dbf] sm:text-4xl mt-1">
                      {basePrice.toLocaleString("fr-FR")} MAD
                    </p>
                    <p className="mt-1 text-[11px] text-blue-700 font-semibold">
                      Validation App Store & Google Play garantie contractuellement.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#000dbf]"
                  >
                    Valider mon chiffrage lors d&apos;un atelier gratuit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODULAR MOBILE CAPABILITIES SHOWCASE */}
      <section className="border-t border-slate-200 bg-slate-50/70 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
              Domaines d&apos;Application Mobile
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des applications conçues pour l&apos;usage réel au Maroc
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "terrain", label: "Applications Métier & Terrain" },
              { id: "b2c", label: "Applications B2C & Startups" },
              { id: "payment", label: "Paiement In-App CMI & M-Commerce" },
              { id: "push", label: "Notifications Push Intelligentes" },
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

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-lg md:p-10">
            {activeTab === "terrain" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">01 · Mobilité Opérationnelle</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Outils pour livreurs, commerciaux et techniciens terrain
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Équipez vos collaborateurs nomades d&apos;une application ultra-simple : scan des codes-barres par la
                    caméra du smartphone, signature client sur écran tactile, géolocalisation des visites et saisie de
                    rapports avec synchronisation automatique.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Prise de photos géotaguées pour preuve de livraison</li>
                    <li className="flex items-center gap-2">✓ Fonctionnement complet en zone blanche sans réseau</li>
                    <li className="flex items-center gap-2">✓ Connexion directe à votre ERP ou base de données centrale</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>TERRAIN / LIVRAISONS CASABLANCA</span>
                    <span className="text-emerald-400">GPS CONNECTÉ</span>
                  </div>
                  <div className="mt-3 space-y-2">
                    <div className="rounded bg-white/5 p-2 flex justify-between">
                      <span>Course #14 · Aïn Diab</span>
                      <span className="text-emerald-400 font-bold">Signé sur écran ✓</span>
                    </div>
                    <div className="rounded bg-white/5 p-2 flex justify-between">
                      <span>Course #15 · Sidi Maârouf</span>
                      <span className="text-indigo-300 font-bold">En approche (3 min)</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "b2c" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-purple-600">02 · Startups & Consommateurs</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Applications B2C : ergonomie addictive et rétention maximale
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Pour les startups et marques marocaines qui s&apos;adressent au grand public : inscription en 10 secondes
                    via numéro de téléphone et code SMS (OTP), navigation intuitive au pouce et micro-animations
                    soignées pour convertir chaque visite en commande.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Interface conforme aux standards Apple Human Interface</li>
                    <li className="flex items-center gap-2">✓ Programme de fidélité et parrainage intégré</li>
                    <li className="flex items-center gap-2">✓ Notation et avis clients in-app pour booster la note sur les stores</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>APP STORE / PERFORMANCE METRICS</span>
                    <span className="text-emerald-400">NOTE: 4.9 ★</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded bg-white/5 p-2">
                      <span className="text-[10px] text-white/40">Téléchargements</span>
                      <p className="text-base font-bold text-white">45 000+</p>
                    </div>
                    <div className="rounded bg-white/5 p-2">
                      <span className="text-[10px] text-white/40">Rétention J+30</span>
                      <p className="text-base font-bold text-emerald-400">42% (Excellent)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "payment" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-emerald-600">03 · M-Commerce Sécurisé</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Paiements par carte marocaine CMI & Apple Pay
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Maximisez votre taux de conversion mobile en proposant un tunnel de paiement sans friction : cartes
                    bancaires marocaines via passerelle certifiée CMI / PayZone, paiement à la livraison (Cash on
                    Delivery) et Apple Pay pour les utilisateurs d&apos;iPhone.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Chiffrement SSL conforme aux normes bancaires PCI-DSS</li>
                    <li className="flex items-center gap-2">✓ Sauvegarde sécurisée de la carte pour achats récurrents en 1 clic</li>
                    <li className="flex items-center gap-2">✓ Notification instantanée de l&apos;encaissement par notification push</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-emerald-900 bg-emerald-950 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-emerald-800 pb-2 text-emerald-200">
                    <span>CMI GATEWAY IN-APP SDK</span>
                    <span className="text-emerald-400">PAIEMENT CONFIRMÉ</span>
                  </div>
                  <div className="mt-3 bg-emerald-900/60 p-3 rounded border border-emerald-700/50 space-y-1">
                    <div className="flex justify-between text-emerald-100 font-bold">
                      <span>Montant prélevé en Dirhams :</span>
                      <span className="text-emerald-300">480,00 MAD</span>
                    </div>
                    <div className="text-[10px] text-emerald-400">Autorisation bancaire CMI n° 889123 · Validée 3D-Secure</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "push" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-indigo-600">04 · Réengagement Client</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Notifications Push ciblées et segmentées
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Les notifications push affichent un taux d&apos;ouverture 8 fois supérieur à l&apos;email. Nous configurons
                    Firebase Cloud Messaging pour envoyer des alertes ultra-personnalisées : relance de panier abandonné,
                    confirmation d&apos;expédition de commande ou offre promotionnelle limitée dans le temps.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Ciblage par ville (Casablanca, Rabat, Tanger, Marrakech)</li>
                    <li className="flex items-center gap-2">✓ Notifications riches avec images, boutons d&apos;action et emojis</li>
                    <li className="flex items-center gap-2">✓ Analyse des taux d&apos;ouverture et de conversion par campagne</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>PUSH NOTIFICATION SIMULATOR</span>
                    <span className="text-emerald-400">DELIVERED</span>
                  </div>
                  <div className="mt-3 bg-white/5 p-3 rounded space-y-1">
                    <span className="text-indigo-300 font-bold">📢 Flash Promo Casablanca !</span>
                    <p className="text-white text-[11px] font-sans">
                      &quot;Votre commande #8812 est en route ! Suivez votre livreur en temps réel sur la carte.&quot;
                    </p>
                    <span className="text-[10px] text-emerald-400">Taux d&apos;ouverture mesuré : 48.5%</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE: React Native vs Swift/Kotlin vs No-Code */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Technique Comparative
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              React Native vs Autres Technologies Mobiles
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">React Native (ByteForce)</th>
                  <th className="py-4 px-6">Natif Séparé (Swift + Kotlin)</th>
                  <th className="py-4 px-6">No-Code Mobile (FlutterFlow)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Budget de développement</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Optimisé (-40% par rapport au natif double)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Double budget (2 équipes distinctes)</td>
                  <td className="py-4 px-6">Faible au début, lock-in coûteux ensuite</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Fluidité & Animations</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    60 FPS nativement compilé
                  </td>
                  <td className="py-4 px-6 text-emerald-700">60 FPS natif</td>
                  <td className="py-4 px-6 text-rose-600">Saccades sur téléphones d&apos;entrée de gamme</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété et auditabilité du code</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% Cédé (Dépôt Git TypeScript & Expo)
                  </td>
                  <td className="py-4 px-6">Cédé (mais 2 dépôts distincts à gérer)</td>
                  <td className="py-4 px-6 text-rose-600">Code exporté difficilement maintenable</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Paiement CMI Maroc & Biométrie</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Intégration directe des SDKs bancaires
                  </td>
                  <td className="py-4 px-6">Supporté</td>
                  <td className="py-4 px-6 text-slate-500">Limité ou impossible</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 6. TRANSPARENT INVESTMENT TIERS */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Grille Tarifaire Cadrée
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Des forfaits complets avec publication sur les stores
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                MVP Startup
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">App Mobile Validation</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour valider une idée auprès de vos 500 premiers utilisateurs sur iOS et Android.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">35 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait unique · Délai 5 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Application iOS + Android (React Native)</li>
                <li className="flex items-center gap-2">✓ Inscription et authentification mobile</li>
                <li className="flex items-center gap-2">✓ 3 écrans fonctionnels principaux</li>
                <li className="flex items-center gap-2">✓ Publication sur Google Play & App Store</li>
                <li className="flex items-center gap-2">✓ Cession 100% de la propriété du code</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Cadrer mon MVP mobile
              </Link>
            </div>

            <div className="relative rounded-2xl border-2 border-[#000dbf] bg-white p-7 shadow-xl ring-4 ring-blue-50">
              <div className="absolute -top-3.5 right-6 rounded-full bg-[#000dbf] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Le Plus Choisi
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf]">
                Professionnel & Métier
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">App Terrain, GPS & M-Commerce</h3>
              <p className="mt-2 text-xs text-slate-500">
                La solution complète pour les applications d&apos;entreprises, livreurs ou e-commerce.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#000dbf]">58 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait unique · Délai 7 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-semibold">✓ Tout le socle MVP Mobile</li>
                <li className="flex items-center gap-2 font-semibold">✓ Géolocalisation GPS & Cartographie live</li>
                <li className="flex items-center gap-2">✓ Paiement par carte marocaine CMI & Stripe</li>
                <li className="flex items-center gap-2">✓ Notifications push Firebase ciblées</li>
                <li className="flex items-center gap-2">✓ Authentification biométrique Face ID / Touch ID</li>
                <li className="flex items-center gap-2">✓ Mode hors-ligne avec synchronisation auto</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-[#00099a]"
              >
                Lancer mon projet mobile
              </Link>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                Plateforme Écosystème
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">App Grand Public & Marketplace</h3>
              <p className="mt-2 text-xs text-slate-500">
                Plateformes complexes avec chat temps réel, double interface (Client / Prestataire) et IoT.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">Dès 95 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Architecture sur mesure</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Double app : Application Client + Application Chauffeur/Vendeur</li>
                <li className="flex items-center gap-2">✓ Messagerie instantanée in-app (WebSocket)</li>
                <li className="flex items-center gap-2">✓ Back-end haute performance et micro-services</li>
                <li className="flex items-center gap-2">✓ SLA et maintenance applicative prioritaire</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Consulter un ingénieur mobile
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
              Foire Aux Questions Mobile
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Questions fréquentes sur nos applications mobiles à Casablanca
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
            📍 Bureau au Technopark de Casablanca · Route de Nouaceur
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Donnons vie à votre application mobile sur l&apos;App Store et Google Play
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 md:text-lg">
            Venez échanger autour de votre projet mobile avec notre équipe au Technopark. Nous validons vos parcours
            Figma et vous fournissons une estimation précise sous 24h ouvrées.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 active:scale-95"
            >
              <span>Demander mon étude mobile gratuite</span>
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
              Ou décrivez votre application pour être recontacté sous 2h :
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
              { href: "/maroc/casablanca", label: "Agence Digitale Casablanca" },
              { href: "/developpement-application-mobile-maroc", label: "Application Mobile Maroc" },
              { href: "/crm/logiciel-crm-personnalise", label: "Logiciel CRM Sur Mesure" },
              { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
              { href: "/developpement-erp-maroc", label: "Développement ERP Maroc" },
              { href: "/insights/prix-application-mobile-maroc", label: "Prix d'une application mobile au Maroc" },
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
