"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Service } from "@/lib/content";
import { ServiceMark } from "@/components/offer-drawings";
import { Dashboard, CrmPanel, MobileApp, ProcheDeMoi } from "@/components/home/screens";

const testimonials = [
  {
    quote:
      "ByteForce a transformé notre vision en une plateforme SaaS ultra-rapide. Les conversions ont augmenté de 65% dès le premier trimestre.",
    name: "Karim Benjelloun",
    role: "Fondateur & CEO · B2B SaaS",
    country: "Maroc",
    flag: "🇲🇦",
    avatar: "KB",
  },
  {
    quote:
      "Leur rigueur technique et leur compréhension du produit font la différence. L'application mobile a été livrée dans les temps et sans aucun bug bloquant.",
    name: "David Moreau",
    role: "Directeur Produit · HealthTech",
    country: "Canada",
    flag: "🇨🇦",
    avatar: "DM",
  },
  {
    quote:
      "Un site ultra-performant et un référencement SEO qui nous apporte des dizaines de prospects qualifiés chaque semaine en France.",
    name: "Sophie Valadier",
    role: "Directrice Commerciale · Groupe Valcq",
    country: "France",
    flag: "🇫🇷",
    avatar: "SV",
  },
  {
    quote:
      "L'architecture cloud et les flux d'automatisation ont permis à nos équipes de diviser par deux les délais de traitement des commandes.",
    name: "Marc Anderson",
    role: "Head of Operations · Logistique",
    country: "Belgique",
    flag: "🇧🇪",
    avatar: "MA",
  },
  {
    quote:
      "Une réactivité impressionnante et un sens du détail remarquable sur les interfaces. Nos utilisateurs adorent la fluidité du nouveau portail.",
    name: "Elena Rodriguez",
    role: "Co-fondatrice · Tourispeak",
    country: "Espagne",
    flag: "🇪🇸",
    avatar: "ER",
  },
  {
    quote:
      "Enfin des ingénieurs qui s'intéressent au modèle économique et pas seulement au code. Chaque investissement a été rentabilisé en quelques mois.",
    name: "Youssef Tazi",
    role: "Directeur Général · E-Commerce",
    country: "Maroc",
    flag: "🇲🇦",
    avatar: "YT",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Planning & Cadrage",
    desc: "Analyse approfondie de votre modèle d'affaires, définition des flux utilisateurs clés et cadrage technique transparent.",
  },
  {
    number: "02",
    title: "Defining the User Experience",
    desc: "Conception UX/UI moderne, wireframes interactifs et parcours axés sur la clarté et la conversion maximale.",
  },
  {
    number: "03",
    title: "The Technical Foundations",
    desc: "Modélisation de données, choix de la pile technologique optimale, contrats d'API stricts et sécurisation cloud.",
  },
  {
    number: "04",
    title: "Implementation & Sprints",
    desc: "Développement agile avec revues de code systématiques, livraisons itératives et tests unitaires continus.",
  },
  {
    number: "05",
    title: "Repeat the cycle & QA",
    desc: "Audits de charge, tests de sécurité, peaufinage ergonomique et validations conjointes avant chaque palier.",
  },
  {
    number: "06",
    title: "The Launch & Monitoring",
    desc: "Mise en production sans interruption de service, surveillance télémétrique 24/7 et accompagnement réactif.",
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
  "MICROSERVICES",
];

export function ServicesLanding({
  servicesList,
  entryPagesList,
}: {
  servicesList: Service[];
  entryPagesList: { path: string; h1: string; group: string }[];
}) {
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
                Solutions Digitales & Ingénierie Produit
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1.04]">
              Crafting Future Software Today!
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Tout ce dont votre entreprise a besoin pour convertir chaque visite en opportunité commerciale,
              automatiser vos opérations et scaler sereinement avec des logiciels sur-mesure.
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
                href="#offres"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.05] px-6 py-3.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-colors duration-200 hover:border-white/40 hover:bg-white/10"
              >
                <span>Explorer nos services</span>
                <svg className="h-4 w-4 text-white/60" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
              </a>
            </div>

            {/* Quick stats micro-bar under buttons */}
            <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/10 pt-8 font-mono text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Disponibilité Immédiate</span>
              </div>
              <div>📍 Technopark, Casablanca</div>
              <div>⚡ Réponse sous 24h ouvrées</div>
            </div>
          </div>

          {/* Right Column: 3D Torus Visual Showcase */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="animate-float-gentle relative aspect-square w-full max-w-[440px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-3 shadow-2xl backdrop-blur-xl">
              <div className="relative h-full w-full overflow-hidden rounded-2xl bg-black">
                <Image
                  src="/services-hero-torus.jpg"
                  alt="3D Iridescent Torus - ByteForce Digital Engineering"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 440px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between rounded-xl border border-white/15 bg-black/40 px-3 py-2 text-xs backdrop-blur-md">
                  <span className="font-mono text-white/80">Architecture · Scalabilité</span>
                  <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                    Production Ready
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BENTO GRID / METRICS & CAPABILITIES */}
      <section className="bg-slate-50 px-6 py-20 md:px-12 md:py-28 lg:px-16" id="capabilities">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* Bento Card 1: Design Develop Deploy (Large Left Card) */}
            <div className="group relative min-h-[460px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-950 p-8 text-white shadow-md transition-all duration-300 hover:shadow-xl lg:col-span-5">
              <Image
                src="/services-bento-ribbon.jpg"
                alt="Design Develop Deploy - 3D Ribbon"
                fill
                className="object-cover opacity-85 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

              <div className="relative z-10 flex h-full flex-col justify-end">
                <span className="font-mono text-xs font-semibold tracking-widest text-indigo-400 uppercase">
                  Cycle Complet
                </span>
                <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Design
                  <br />
                  Develop
                  <br />
                  Deploy
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-300">
                  De la recherche utilisateur et l&apos;architecture de données jusqu&apos;à l&apos;intégration continue et la
                  scalabilité cloud.
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
                  >
                    <span>Lancer un sprint</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Side Cards (7 columns on desktop) */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-7">
              {/* Bento Card 2: Web, Mobile, Cloud capabilities */}
              <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                      Plateformes
                    </span>
                    <span className="rounded-full bg-slate-100 p-2 text-slate-600">
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="3" width="20" height="14" rx="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </span>
                  </div>
                  <h4 className="mt-4 text-2xl font-bold tracking-tight text-slate-900">Web & Cloud</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Des architectures modernes garantissant vitesse de chargement instantanée et disponibilité sans faille.
                  </p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" />
                      <line x1="12" y1="18" x2="12" y2="18" />
                    </svg>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Bento Card 3: 500+ Projects / High Impact (Vibrant Indigo Gradient) */}
              <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#6366f1] via-[#4f46e5] to-[#3730a3] p-8 text-white shadow-xl shadow-indigo-500/25 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/30">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold tracking-wider text-indigo-200 uppercase">
                      Social Proof
                    </span>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Certifié
                    </span>
                  </div>
                  <div className="mt-4 text-5xl font-extrabold tracking-tight text-white lg:text-6xl">
                    150+
                  </div>
                  <div className="mt-2 text-lg font-medium text-indigo-100">Projets & Logiciels livrés</div>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/20 pt-4 text-xs font-medium text-indigo-100">
                  <span>Satisfaction client</span>
                  <span className="font-bold text-white">99.4%</span>
                </div>
              </div>

              {/* Bento Card 4: 15+ Years Experience */}
              <div className="flex items-center gap-5 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">12+</div>
                  <div className="text-sm font-semibold text-slate-700">Années d&apos;Expérience</div>
                  <div className="text-xs text-slate-500">Architecture & Dév sur mesure</div>
                </div>
              </div>

              {/* Bento Card 5: 1M+ Lines of Code */}
              <div className="flex items-center gap-5 rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                  <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <div>
                  <div className="text-3xl font-extrabold tracking-tight text-slate-900">1M+</div>
                  <div className="text-sm font-semibold text-slate-700">Lignes de Code</div>
                  <div className="text-xs text-slate-500">En production active</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE PROPOSITION: "With ByteForce, You perform better. Always! It is our guarantee!" */}
      <section className="border-t border-slate-200/80 bg-white px-6 py-24 md:px-12 md:py-32 lg:px-16" id="offres">
        <div className="mx-auto max-w-7xl">
          {/* Header pill & title */}
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase">
              <span>Pourquoi Choisir ByteForce</span>
              <span className="text-primary">✦</span>
            </div>

            <h2 className="mt-6 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.12]">
              With ByteForce, You perform better.
              <br />
              <span className="text-[#000dbf]">Always! It is our guarantee!</span>
            </h2>

            <p className="mt-5 text-base text-slate-600 md:text-lg">
              Nous n&apos;écrivons pas du code pour remplir un dépôt : nous concevons des outils taillés pour vendre,
              automatiser les gestes manuels et offrir un retour sur investissement tangible.
            </p>
          </div>

          {/* 4 Value Pillars Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Pillar 1 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-colors group-hover:bg-indigo-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Talent Augmentation</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Direction technique, audit d&apos;architecture et renfort d&apos;experts pour accélérer vos équipes internes sans
                friction de recrutement.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/studio"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>En savoir plus</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Product Engineering</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Développement d&apos;applications web, mobiles et de logiciels sur-mesure aux normes d&apos;ingénierie les plus
                rigoureuses.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/services/logiciel-sur-mesure"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Nos logiciels</span>
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
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Solutions Métier & SaaS</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                CRMs dédiés, espaces clients, automatisation de facturation et flux de données supprimant les tableurs
                lourds.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/developpement-saas-maroc"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Solutions SaaS</span>
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
              <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">Audit & SEO Commercial</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vitesse sub-seconde, sécurité renforcée et positionnement Google sur des requêtes commerciales à forte
                intention.
              </p>
              <div className="mt-6 border-t border-slate-100 pt-4">
                <Link
                  href="/services/referencement-seo"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Stratégie SEO</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR AGILE PROCESS (Vibrant Blue Deep Gradient Section) */}
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
                How We Work
              </span>
              <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
                Our Agile Process
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-blue-100">
                We have our unique ways of building your ideas efficiently and quickly. Six étapes éprouvées pour
                garantir la prédictibilité, le respect des délais et la qualité du code.
              </p>
              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-950 shadow-md transition-all hover:bg-blue-50"
                >
                  <span>Démarrer un projet</span>
                  <span>→</span>
                </Link>
              </div>
            </div>

            {/* Right Process Cards (2-col grid of 6 cards) */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
              {processSteps.map((step) => (
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

      {/* 5. GLOWING TESTIMONIALS THAT SPEAK VOLUMES */}
      <section className="bg-slate-50 px-6 py-24 md:px-12 md:py-32 lg:px-16" id="testimonials">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-sm">
              Why Choose Us
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Glowing Testimonials that Speak Volumes
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              La satisfaction de nos partenaires est le seul indicateur de succès qui compte.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl"
              >
                <div>
                  {/* Rating Stars */}
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

      {/* 6. TECH STACK & PARTNERS RIBBON (Vibrant Purple Marquee) */}
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

      {/* 7. LIVE SHOWCASE & CASE STUDIES (Dark Interactive Container) */}
      <section className="bg-[#090b14] px-6 py-24 text-white md:px-12 md:py-32 lg:px-16" id="case-studies">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-mono text-xs font-semibold tracking-wider text-indigo-400 uppercase">
              Réalisations en Production
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
              Des Interfaces Taillées Pour L&apos;Efficacité
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              Des applications réelles utilisées au quotidien par des milliers d&apos;utilisateurs et d&apos;équipes opérationnelles.
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
                    <div className="font-mono text-xs text-indigo-400">Coco Inbox & Workspace CRM</div>
                    <div className="mt-2 text-sm font-semibold text-white">Chiffrement & Gestion d&apos;Équipe</div>
                    <div className="mt-2 text-xs leading-relaxed text-slate-400">
                      Un produit déployé en 2024 combinant messagerie sécurisée, gestion des droits et pipeline de vente.
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
                  <div className="font-mono text-xs text-indigo-400">Tourispeak & Applications iOS / Android</div>
                  <h3 className="text-2xl font-bold text-white">L&apos;expérience native au creux de la main</h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Développement cross-platform avec React Native et Flutter pour des parcours réactifs, un mode hors-ligne
                    et des notifications push en temps réel.
                  </p>
                  <div className="flex items-center gap-3 pt-4">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono">
                      Google Play Store
                    </span>
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono">
                      Apple App Store
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "search" && (
              <div className="space-y-6">
                <ProcheDeMoi />
                <div className="text-center">
                  <span className="font-mono text-xs text-slate-400">
                    Plateforme cartographique déployée avec recherche sémantique IA et géolocalisation haute précision.
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
                <span>Explorer toutes nos études de cas</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. COMPLETE SERVICE CATALOG & SPECIALIZED ENTRY PAGES (Modern Landing Page Design) */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 px-6 py-24 md:px-12 md:py-32 lg:px-16" id="catalogue">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-sm">
              <span>Catalogue des Services</span>
              <span className="text-primary">✦</span>
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Ce que l&apos;on construit au quotidien
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Explorez nos 10 domaines d&apos;expertise logicielle, pensés pour convertir chaque visite en opportunité et
              automatiser vos opérations.
            </p>
          </div>

          {/* 10 Services in AI-Generated Photographic Cards */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            {servicesList.map((service, index) => {
              const bgImages = [
                { src: "/tech-bg-1.jpg", accent: "from-blue-600/30 to-indigo-600/20" },
                { src: "/services-hero-torus.jpg", accent: "from-purple-600/30 to-violet-600/20" },
                { src: "/services-bento-ribbon.jpg", accent: "from-indigo-600/30 to-blue-600/20" },
                { src: "/tech-bg-1.jpg", accent: "from-cyan-600/30 to-blue-600/20" },
                { src: "/services-hero-torus.jpg", accent: "from-indigo-600/30 to-purple-600/20" },
                { src: "/services-bento-ribbon.jpg", accent: "from-violet-600/30 to-pink-600/20" },
                { src: "/tech-bg-1.jpg", accent: "from-purple-600/30 to-cyan-600/20" },
                { src: "/services-hero-torus.jpg", accent: "from-amber-600/30 to-purple-600/20" },
                { src: "/services-bento-ribbon.jpg", accent: "from-red-600/30 to-indigo-600/20" },
                { src: "/tech-bg-1.jpg", accent: "from-emerald-600/30 to-cyan-600/20" },
              ];
              const visual = bgImages[index % bgImages.length];

              return (
                <Link
                  key={service.slug}
                  href={service.href ?? `/services/${service.slug}`}
                  className="group relative flex min-h-[380px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-8 text-white shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:border-indigo-400/50 hover:shadow-2xl md:p-10"
                >
                  {/* Photo background */}
                  <Image
                    src={visual.src}
                    alt={service.menu}
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
                      Service {String(index + 1).padStart(2, "0")}
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
                      {service.menu}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300 line-clamp-3 md:line-clamp-none">
                      {service.summary}
                    </p>

                    <div className="mt-6 flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-white/90 group-hover:text-white">
                      <span>Consulter l&apos;offre</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Pour un projet précis (Categorized Entry Pages) */}
          <div className="mt-24">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-end">
              <div>
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                  Parcours Ciblés
                </span>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
                  Pour un projet précis & besoins spécifiques
                </h3>
                <p className="mt-1 text-sm text-slate-600">
                  Accédez directement aux pages rédigées pour votre problématique métier ou votre implantation.
                </p>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {entryPagesList.map((page) => (
                <Link
                  key={page.path}
                  href={`/${page.path}`}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary hover:shadow-md"
                >
                  <div>
                    <span className="inline-block rounded-md bg-slate-100 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-600 uppercase transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-700">
                      {page.group}
                    </span>
                    <span className="mt-3 block text-sm font-bold text-slate-900 transition-colors group-hover:text-primary">
                      {page.h1}
                    </span>
                  </div>
                  <span className="mt-4 flex items-center gap-1.5 text-xs font-medium text-primary">
                    <span>Consulter la page</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Studio Notes & Trust Highlights Card */}
          <div className="mt-16 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm md:p-10">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-6">
                <span className="font-mono text-xs font-semibold tracking-wider text-primary uppercase">
                  Engagement & Transparence
                </span>
                <h4 className="mt-2 text-2xl font-bold tracking-tight text-slate-900">
                  ByteForce construit ces offres depuis Casablanca
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  Un site. Une application. Un logiciel sur mesure. Un plugin WordPress. Le référencement naturel.
                  L&apos;hébergement cloud. La maintenance applicative. Aucun prix n&apos;est affiché publiquement car le
                  montant s&apos;adapte précisément à ce qui doit être construit.
                </p>
                <div className="mt-4 flex items-center gap-4 text-xs font-mono text-slate-500">
                  <span>📍 Technopark Casablanca</span>
                  <span>•</span>
                  <span>⚡ Réponse sous 24h ouvrées</span>
                </div>
              </div>

              <div className="flex flex-col gap-2.5 lg:col-span-6">
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
                  <span>🇫🇷 Développement logiciel pour la France</span>
                  <span>→</span>
                </Link>
                <Link
                  href="/checklists/comprendre-le-travail"
                  className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-xs font-semibold text-slate-800 transition-colors hover:border-primary hover:bg-white hover:text-primary"
                >
                  <span>📋 Checklist préalable : Comprendre le travail</span>
                  <span>→</span>
                </Link>
                <div className="flex items-center justify-between pt-2 text-xs font-medium text-slate-500">
                  <Link href="/services/md" className="hover:text-primary hover:underline">
                    📄 Version texte en markdown
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
              Parlons de votre projet
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Connect with us
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
              Having helped clients globally with MVP development, prototyping, and full-cycle application development
              to go to market quickly, efficiently, and cost-effectively. We would like to do the same for you.
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
