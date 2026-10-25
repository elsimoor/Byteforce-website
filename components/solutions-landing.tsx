"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { MoneyPage } from "@/lib/money";
import { Dashboard, CrmPanel, MobileApp, ProcheDeMoi } from "@/components/home/screens";

const solutionTestimonials = [
  {
    quote:
      "Nous avions 4 fichiers Excel avec des totaux contradictoires chaque fin de mois. En 6 semaines, ByteForce nous a livré un logiciel interne qui centralise tout sans aucune erreur.",
    name: "Tariq Mansouri",
    role: "Directeur Financier · Distribution",
    country: "Maroc",
    flag: "🇲🇦",
    avatar: "TM",
  },
  {
    quote:
      "Notre abonnement SaaS nous coûtait plus de 1 200 € par mois pour des fonctions dont nous n'utilisions que 20%. Nous avons notre propre outil et zéro redevance.",
    name: "Alexandre Dupont",
    role: "Gérant · Cabinet Conseil",
    country: "France",
    flag: "🇫🇷",
    avatar: "AD",
  },
  {
    quote:
      "L'automatisation mise en place entre nos commandes, nos stocks et nos factures nous fait gagner plus de 15 heures de travail manuel chaque semaine.",
    name: "Leila Benzakour",
    role: "Responsable Opérations · E-Commerce",
    country: "Maroc",
    flag: "🇲🇦",
    avatar: "LB",
  },
  {
    quote:
      "Notre ancienne application développée en 2018 plantait régulièrement. ByteForce a audité le code, stabilisé la base et modernisé l'interface sans interruption.",
    name: "Nicolas Vasseur",
    role: "Directeur Technique · Logistique",
    country: "Belgique",
    flag: "🇧🇪",
    avatar: "NV",
  },
  {
    quote:
      "Une approche extrêmement pragmatique : ils ont commencé par comprendre le geste réel de nos équipes sur le terrain avant de concevoir le moindre écran.",
    name: "Mehdi Alami",
    role: "Fondateur · PME Services",
    country: "Maroc",
    flag: "🇲🇦",
    avatar: "MA",
  },
  {
    quote:
      "Le premier échange de 30 minutes a été décisif. Pas de jargon commercial, des réponses franches et une roadmap claire dès le premier jour.",
    name: "Camille Laurent",
    role: "Product Manager · Santé",
    country: "France",
    flag: "🇫🇷",
    avatar: "CL",
  },
];

const resolutionSteps = [
  {
    number: "01",
    title: "Diagnostic du geste réel",
    desc: "Identifier qui fait l'action, avec quel fichier ou outil, et où se situent exactement les pertes de temps et d'information.",
  },
  {
    number: "02",
    title: "Cadrage du flux utile",
    desc: "Éliminer le superflu, fixer les règles métier et définir les rôles et permissions nécessaires sans surcharger le produit.",
  },
  {
    number: "03",
    title: "Fondations & Données",
    desc: "Modélisation d'une base relationnelle solide qui garantit une source unique de vérité et supprime les doublons.",
  },
  {
    number: "04",
    title: "Développement ciblé",
    desc: "Conception d'une interface épurée et ultra-rapide pensée pour les personnes qui effectuent la tâche au quotidien.",
  },
  {
    number: "05",
    title: "Migration & Contrôle",
    desc: "Import propre de vos historiques de données existants sans perte d'information ni interruption de votre activité.",
  },
  {
    number: "06",
    title: "Mise en ligne & Accompagnement",
    desc: "Déploiement sécurisé, prise en main immédiate par vos équipes et garantie de suivi réactif en production.",
  },
];

const techMarquee = [
  "NEXT.JS 15",
  "REACT 19",
  "TYPESCRIPT",
  "NODE.JS",
  "CLOUDFLARE",
  "POSTGRESQL",
  "TAILWIND CSS",
  "DOCKER",
  "PYTHON AI",
  "VERCEL",
  "REDIS",
  "GRAPHQL",
  "REST APIS",
  "WORKFLOWS",
];

export function SolutionsLanding({ pages }: { pages: MoneyPage[] }) {
  const [activeTab, setActiveTab] = useState<"workspace" | "mobile" | "search">("workspace");

  return (
    <div className="w-full text-slate-900 selection:bg-[#000dbf] selection:text-white">
      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech) */}
      <section className="relative overflow-hidden bg-[#070913] px-6 pt-12 pb-24 text-white md:px-12 md:pt-16 md:pb-32 lg:px-16">
        {/* Ambient lighting glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-indigo-600/20 via-purple-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-20 h-[400px] w-[400px] rounded-full bg-blue-600/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7">
            {/* Tag / Badge with 3 indicator dots */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium tracking-wide text-white/80 backdrop-blur-md">
              <span className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                <span className="h-2 w-2 rounded-full bg-indigo-400" />
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase text-white/90">
                Solutions Métier & Résolution de Blocages
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1.04]">
              Un problème, une page. Des logiciels conçus pour débloquer votre croissance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Excel saturé, SaaS rigide qui dicte votre métier, application vieillissante ou opérations manuelles : nous
              concevons le logiciel exact qui remplace vos blocages par des flux fiables et rentables.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition-all duration-300 hover:bg-slate-100 hover:shadow-white/20 active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000dbf] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h9.793L7.77 3.47a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.773-3.72H1.75A.75.75 0 0 1 1 8z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>

              <a
                href="#solutions"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
              >
                <span>Explorer les solutions</span>
                <svg className="h-4 w-4 text-white/60" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Quick stats micro-bar */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 font-mono text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Premier échange de 30 min gratuit</span>
              </div>
              <div>📍 Technopark Casablanca</div>
              <div>⚡ Réponse sous 24h ouvrées</div>
            </div>
          </div>

          {/* Right Column: 3D Visual Showcase */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="animate-float-gentle relative aspect-square w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src="/services-hero-torus.jpg"
                  alt="3D Visual - ByteForce Solutions"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs backdrop-blur-md">
                  <span className="font-mono text-white/80">Sur Mesure · Zéro Dette</span>
                  <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                    Propriété 100% Client
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID / IMPACT & RESOLUTION */}
      <section className="bg-slate-50 px-6 py-20 md:px-12 md:py-28 lg:px-16" id="impact">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Bento Card 1: Du blocage à la production (Large Left Card) */}
            <div className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-md transition-all duration-300 hover:shadow-xl lg:col-span-5">
              <Image
                src="/services-bento-ribbon.jpg"
                alt="Du blocage au logiciel - 3D Ribbon"
                fill
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                  Méthode Ciblée
                </span>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Du blocage
                  <br />
                  à la solution
                  <br />
                  en production
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
                  Nous analysons le geste réel de votre équipe avant d&apos;écrire la moindre ligne de code. Pas de module
                  inutile, uniquement ce qui sert l&apos;opération.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <span>Analyser votre situation</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side Cards (7 columns on desktop) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {/* Bento Card 2: Résolution Sur Mesure */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      Pragmatisme
                    </span>
                    <span className="rounded-full bg-slate-100 p-2 text-slate-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Zéro Usine à Gaz</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Pas de fonctionnalités imposées. Un logiciel conçu autour de vos règles pour faire disparaître les
                    doublons et les erreurs de saisie.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                      <polyline points="10 9 9 9 8 9" />
                    </svg>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                    </svg>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="2" y="3" width="20" height="14" rx="2" />
                      <line x1="8" y1="21" x2="16" y2="21" />
                      <line x1="12" y1="17" x2="12" y2="21" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bento Card 3: 100% Code Propriétaire (Vibrant Indigo Gradient) */}
              <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#6366f1] via-[#4f46e5] to-[#3730a3] p-8 text-white shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-indigo-200 uppercase">
                      Indépendance
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Remise Totale
                    </span>
                  </div>
                  <div className="mt-4 text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
                    100%
                  </div>
                  <div className="mt-2 text-lg font-medium text-indigo-100">Code & Données à Vous</div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-medium text-indigo-100">
                  <span>Aucune dépendance propriétaire</span>
                  <span className="font-bold text-white">Garanti</span>
                </div>
              </div>

              {/* Bento Card 4: 0€ Premier échange */}
              <div className="flex items-center gap-5 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">0 €</div>
                  <div className="text-sm font-semibold text-slate-700">Premier Cadrage</div>
                  <div className="text-xs text-slate-500">30 minutes d&apos;analyse offertes</div>
                </div>
              </div>

              {/* Bento Card 5: Réponse sous 24h */}
              <div className="flex items-center gap-5 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">24 h</div>
                  <div className="text-sm font-semibold text-slate-700">Délai de Réponse</div>
                  <div className="text-xs text-slate-500">Par écrit, depuis Casablanca</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE VALUE PROPOSITION: "Avec ByteForce, vos logiciels performent mieux." */}
      <section className="border-t border-slate-200/80 bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16" id="valeur">
        <div className="mx-auto max-w-7xl">
          {/* Header pill & title */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase">
              <span>Notre Engagement Commercial</span>
              <span className="text-primary">✦</span>
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.12]">
              Avec ByteForce, chaque blocage
              <br />
              <span className="text-[#000dbf]">devient un levier de rentabilité</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 md:text-lg">
              Nous n&apos;inventons pas de faux besoins : nous étudions vos flux réels pour remplacer ce qui ralentit votre
              équipe par un outil sur mesure, stable et simple à utiliser.
            </p>
          </div>

          {/* 4 Value Pillars Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Remplacer Excel</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Sortir des versions multiples et des doublons dès que le tableur est devenu la mémoire critique de
                l&apos;entreprise.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/solutions/remplacer-excel"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Voir la solution</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Remplacer un SaaS</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Éliminer les abonnements récurrents et les outils rigides qui forcent vos collaborateurs à contourner le
                système.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/solutions/remplacer-saas"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Voir la solution</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Automatisation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Remplacer les corvées de saisie, les relances manuelles et les copier-coller par des règles automatiques
                fiables.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/solutions/automatisation-entreprise"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Voir la solution</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
                  <line x1="12" y1="22.08" x2="12" y2="12" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Moderniser une App</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Auditer, sécuriser et faire évoluer une application déjà en ligne sans devoir tout réécrire depuis zéro.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/solutions/moderniser-application"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Voir la solution</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR RESOLUTION PROCESS (Vibrant Blue Deep Gradient Section) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#001438] via-[#003899] to-[#0057e6] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16">
        {/* Glow backdrop */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/3 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Header */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-mono font-medium tracking-wider text-cyan-200 uppercase backdrop-blur-md">
                Méthode Pragmatique
              </span>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Notre Processus de Résolution
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-blue-100">
                Six étapes claires pour passer d&apos;un blocage opérationnel à un logiciel parfaitement adopté par vos
                équipes, sans surprise de budget ni dérive de calendrier.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-md transition-all hover:bg-blue-50"
                >
                  <span>Parler d&apos;un blocage</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Process Cards (2-col grid of 6 cards) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {resolutionSteps.map((step) => (
                <div
                  key={step.number}
                  className="group rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-white/[0.14]"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold tracking-widest text-cyan-300">{step.number}</span>
                    <span className="text-white/40 transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold tracking-tight text-white">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. GLOWING TESTIMONIALS */}
      <section className="bg-slate-50 px-6 py-24 md:px-12 md:py-32 lg:px-16" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-sm">
              Retours d&apos;Expérience
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Des Résultats Concrets Qui Parlent d&apos;Eux-Mêmes
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Ce que disent les dirigeants et directeurs d&apos;opérations qui ont choisi de débloquer leurs outils avec nous.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {solutionTestimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 font-mono text-xs font-bold text-white">
                      {item.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{item.name}</div>
                      <div className="text-xs text-slate-500">{item.role}</div>
                    </div>
                  </div>
                  <span className="text-xl" title={item.country}>
                    {item.flag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. TECH STACK MARQUEE */}
      <section className="relative overflow-hidden bg-[#5046e5] py-5 text-white">
        <div className="animate-marquee-scroll flex items-center gap-12 font-mono text-xs font-bold tracking-widest uppercase">
          {techMarquee.concat(techMarquee).map((tech, idx) => (
            <span key={idx} className="flex items-center gap-12 whitespace-nowrap opacity-90 hover:opacity-100">
              <span>{tech}</span>
              <span className="text-indigo-300">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* 7. LIVE SHOWCASE & WORKFLOWS */}
      <section className="bg-[#090b14] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16" id="showcase">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              Interfaces Réelles
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Des Espaces de Travail Fluides & Connectés
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Chaque logiciel remplace les tableurs et les ressaisies par un tableau de bord lisible en temps réel.
            </p>

            {/* Interactive Tab Switcher */}
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md">
              <button
                type="button"
                onClick={() => setActiveTab("workspace")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "workspace" ? "bg-white text-slate-950 shadow" : "text-white/70 hover:text-white"
                }`}
              >
                Workspace & Dashboard
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("mobile")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "mobile" ? "bg-white text-slate-950 shadow" : "text-white/70 hover:text-white"
                }`}
              >
                Applications Mobiles
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("search")}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-all ${
                  activeTab === "search" ? "bg-white text-slate-950 shadow" : "text-white/70 hover:text-white"
                }`}
              >
                Plateforme & Cartographie
              </button>
            </div>
          </div>

          {/* Interactive Screen Container */}
          <div className="relative mt-12 rounded-3xl border border-white/10 bg-[#111322] p-6 shadow-2xl md:p-8">
            {activeTab === "workspace" && (
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-8">
                  <Dashboard />
                </div>
                <div className="space-y-6 lg:col-span-4">
                  <CrmPanel />
                  <div className="rounded-xl border border-white/10 bg-[#161615] p-5">
                    <div className="font-mono text-xs text-indigo-400">Opérations Sans Fichier Excel</div>
                    <div className="mt-2 text-sm font-semibold text-white">Centralisation & Rôles Équipe</div>
                    <div className="mt-2 text-xs leading-relaxed text-slate-400">
                      Les droits d&apos;accès évitent les suppressions accidentelles et garantissent une traçabilité totale.
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "mobile" && (
              <div className="grid items-center gap-8 md:grid-cols-12">
                <div className="flex justify-center md:col-span-5">
                  <MobileApp />
                </div>
                <div className="space-y-4 md:col-span-7">
                  <div className="font-mono text-xs text-indigo-400">Accès Mobile Terrain</div>
                  <h3 className="text-2xl font-bold text-white">Vos données métier accessibles partout</h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Pour les équipes en déplacement, les chauffeurs ou les techniciens : consultation des fiches, saisie
                    hors-ligne et synchronisation instantanée dès le retour du réseau.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "search" && (
              <div className="space-y-6">
                <ProcheDeMoi />
                <div className="text-center">
                  <span className="font-mono text-xs text-slate-400">
                    Architecture moderne garantissant des requêtes sub-seconde sur des bases de données volumineuses.
                  </span>
                </div>
              </div>
            )}

            {/* Centered CTA button */}
            <div className="mt-10 flex justify-center">
              <Link
                href="/realisations"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white shadow-lg backdrop-blur-md transition-all hover:bg-white hover:text-slate-950"
              >
                <span>Explorer toutes nos réalisations</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPLETE SOLUTIONS CATALOG (Photographic AI Background Cards) */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 px-6 py-24 md:px-12 md:py-32 lg:px-16" id="solutions">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-sm">
              <span>Toutes nos solutions</span>
              <span className="text-primary">✦</span>
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Un problème, une page dédiée
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Chaque page nomme un blocage précis et détaille notre approche concrète pour le résoudre sans fardeau
              technique.
            </p>
          </div>

          {/* Solutions in AI-Generated Photographic Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {pages.map((page, index) => {
              const bgImages = [
                { src: "/tech-bg-1.jpg", accent: "from-blue-600/30 to-indigo-600/20" },
                { src: "/services-hero-torus.jpg", accent: "from-purple-600/30 to-violet-600/20" },
                { src: "/services-bento-ribbon.jpg", accent: "from-indigo-600/30 to-blue-600/20" },
                { src: "/tech-bg-1.jpg", accent: "from-cyan-600/30 to-blue-600/20" },
                { src: "/services-hero-torus.jpg", accent: "from-indigo-600/30 to-purple-600/20" },
                { src: "/services-bento-ribbon.jpg", accent: "from-violet-600/30 to-pink-600/20" },
              ];
              const visual = bgImages[index % bgImages.length];

              return (
                <Link
                  key={page.path}
                  href={`/${page.path}`}
                  className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/50 hover:shadow-2xl md:p-10"
                >
                  {/* Photo background */}
                  <Image
                    src={visual.src}
                    alt={page.h1}
                    fill
                    className="object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-70"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />

                  {/* Gradient & ambient glow overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/75 to-slate-950/30 transition-opacity duration-300 group-hover:from-slate-950/90 group-hover:via-slate-950/65" />
                  <div
                    className={`pointer-events-none absolute -bottom-16 -right-16 h-56 w-56 rounded-full bg-gradient-to-br ${visual.accent} blur-3xl transition-all duration-500 group-hover:scale-125`}
                  />

                  {/* Card Header */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold rounded-full border border-white/15 bg-white/10 px-3.5 py-1 text-white backdrop-blur-md">
                      Solution {String(index + 1).padStart(2, "0")} · {page.group}
                    </span>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-slate-950 group-hover:translate-x-0.5">
                      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="currentColor">
                        <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h9.793L7.77 3.47a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.773-3.72H1.75A.75.75 0 0 1 1 8z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>

                  {/* Card Bottom Body */}
                  <div className="relative z-10 mt-16">
                    <h3 className="text-3xl font-extrabold tracking-tight text-white transition-colors duration-300 group-hover:text-indigo-200 md:text-4xl">
                      {page.h1}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3 md:line-clamp-none">
                      {page.description}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white/90 group-hover:text-white">
                      <span>Consulter la solution</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Studio Notes & Trust Card (using current text from app/solutions/page.tsx) */}
          <div className="mt-16 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                  Ce que nous faisons & ne faisons pas
                </span>
                <h4 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  Une page de solution ne remplace pas un devis
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Elle dit le problème, le geste à reprendre, et ce qui ne sera pas inventé ici : pas de faux
                  témoignage, pas de pourcentage imaginaire, pas de délai promis avant d&apos;avoir écrit le périmètre.
                  Le premier échange de trente minutes est gratuit.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>📍 Technopark Casablanca</span>
                  <span>•</span>
                  <span>⚡ Réponse sous 24h ouvrées</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 lg:col-span-6">
                <Link
                  href="/services"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-primary hover:bg-white hover:text-primary"
                >
                  <span>🚀 Consulter les services du studio</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/developpement-logiciel-maroc"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-primary hover:bg-white hover:text-primary"
                >
                  <span>🇲🇦 Développement logiciel au Maroc</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/developpement-logiciel-france"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-primary hover:bg-white hover:text-primary"
                >
                  <span>🇫🇷 Projets pour une entreprise en France</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/checklists/comprendre-le-travail"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-primary hover:bg-white hover:text-primary"
                >
                  <span>📋 Checklist utile : Comprendre le travail</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center justify-between pt-2 text-xs font-medium text-slate-500">
                  <Link href="/contact" className="hover:text-primary hover:underline">
                    ✉️ Écrire au studio
                  </Link>
                  <Link href="/" className="hover:text-primary hover:underline">
                    🏛️ Accueil du studio ByteForce
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. CONNECT WITH US / FINAL CONVERSION CTA */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16" id="contact">
        <div className="mx-auto max-w-5xl rounded-3xl border border-slate-200/90 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 p-8 text-white shadow-2xl md:p-14">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold tracking-widest text-indigo-400 uppercase">
              Parlons de votre blocage
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Connect with us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              Un premier échange de 30 minutes sans engagement pour diagnostiquer votre problème réel et évaluer si un
              développement sur mesure est le chemin honnête.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all duration-300 hover:bg-slate-100 hover:shadow-2xl active:scale-95"
              >
                <span>Let&apos;s Connect</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000dbf] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h9.793L7.77 3.47a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.773-3.72H1.75A.75.75 0 0 1 1 8z" clipRule="evenodd" />
                  </svg>
                </span>
              </Link>

              <a
                href="https://wa.me/212666650696"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/10"
              >
                <span>WhatsApp : +212 666 650 696</span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/10 pt-8 sm:grid-cols-3 font-mono text-xs text-white/70">
              <div>
                <span className="block text-white/40">Email direct</span>
                <a href="mailto:contact@byteforce.ma" className="text-white hover:underline">
                  contact@byteforce.ma
                </a>
              </div>
              <div>
                <span className="block text-white/40">Bureau</span>
                <span>Technopark, Casablanca</span>
              </div>
              <div>
                <span className="block text-white/40">Délai moyen</span>
                <span className="text-emerald-400">Réponse sous 24h</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
