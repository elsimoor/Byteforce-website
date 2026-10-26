import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { EmailText } from "@/components/mail-link";
import { Icon } from "@/components/icon";
import { SiteIndex } from "@/components/site-index";
import { projects, type Project } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";
import { studioSections } from "@/lib/studio-sections";
import {
  StudioHeroHeadline,
  StudioStatCount,
  StudioParallaxContainer,
  StudioCatalogueList,
  type CatalogueItem,
} from "@/components/studio-interactive";

const studioMeta = seoMeta["/studio"];

export const metadata: Metadata = {
  title: { absolute: studioMeta.title },
  description: studioMeta.description,
  alternates: { canonical: "/studio" },
  openGraph: openGraph("/studio", studioMeta.title, studioMeta.description),
};

function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((item) => item.slug === slug);
}

const placeOrder = ["Maroc", "France", "Canada"];
const countries = [...new Set(projects.map((project) => project.country))];
const places = [
  ...placeOrder.filter((country) => countries.includes(country)),
  ...countries.filter((country) => !placeOrder.includes(country)),
];

export default function StudioPage() {
  const cocoInbox = getProjectBySlug("coco-inbox");
  const yoursmile = getProjectBySlug("yoursmile");
  const procheDeMoi = getProjectBySlug("re-proche-de-moi");
  const zainek = getProjectBySlug("zainek");

  const catalogueItems: CatalogueItem[] = projects.map((p) => ({
    slug: p.slug,
    title: p.title,
    city: p.city,
    year: p.year,
    category: p.category,
    shot: p.shot,
  }));

  return (
    <main data-studio className="w-full bg-[#0c0a09] text-stone-100 selection:bg-amber-600 selection:text-white">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Studio", path: "/studio" },
        ]}
      />

      {/* 00. TOP STATUS & NAVIGATION BAR */}
      <div className="sticky top-0 z-40 w-full border-b border-stone-800/80 bg-[#0c0a09]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1360px] flex-wrap items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8 text-xs font-mono">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold tracking-tight text-white hover:text-amber-400 transition-colors">
              BYTE FORCE <span className="font-serif italic font-normal text-amber-500">studio</span>
            </Link>
            <nav className="hidden items-center gap-5 text-stone-400 sm:flex" aria-label="Navigation studio">
              <a href="#travaux" className="hover:text-stone-200 transition-colors">
                01 · Réalisations
              </a>
              <span className="text-stone-700">·</span>
              <a href="#methode" className="hover:text-stone-200 transition-colors">
                02 · Méthode
              </a>
              <span className="text-stone-700">·</span>
              <a href="#bureau" className="hover:text-stone-200 transition-colors">
                03 · Le Bureau
              </a>
              <span className="text-stone-700">·</span>
              <a href="#catalogue" className="hover:text-stone-200 transition-colors">
                04 · Catalogue
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4 text-stone-400">
            <span className="hidden items-center gap-2 md:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Casablanca · Lun–Ven 9h–19h</span>
            </span>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/10 px-3.5 py-1 text-xs font-semibold text-amber-300 hover:bg-amber-500/20 active:scale-[0.98] transition"
            >
              <span>Parler d&apos;un projet</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* 01. HERO SECTION (Asymmetric, hand-crafted architectural layout) */}
      <header className="mx-auto max-w-[1360px] px-4 pt-8 pb-12 sm:px-6 lg:px-8 lg:pt-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
          
          {/* Main Statement & Title */}
          <div className="flex flex-col justify-between rounded-3xl border border-stone-800 bg-[#14110e] p-7 sm:p-10 lg:col-span-7">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                <span className="font-mono text-xs font-semibold tracking-wider text-amber-400 uppercase">
                  Studio de développement logiciel · Technopark Casablanca
                </span>
              </div>

              {/* Animated headline reveal */}
              <div className="mt-6">
                <StudioHeroHeadline
                  line1="Nous concevons des logiciels métier, CRM"
                  line2="et plateformes web taillés pour"
                  accentWord="votre activité."
                />
              </div>

              <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed text-stone-300 font-sans">
                Nous sommes un studio d&apos;ingénierie logicielle basé au Technopark de Casablanca. 
                Nous traduisons vos flux de travail et vos feuilles de calcul en applications web fiables, 
                sans empiler de licences inutiles. Le code source vous appartient à 100% dès la remise finale.
              </p>
            </div>

            {/* Concrete facts pills (replaced generic buzzwords & removed all emojis) */}
            <div className="mt-8 pt-6 border-t border-stone-800/80">
              <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
                <span className="rounded-lg border border-stone-800 bg-stone-900/90 px-3 py-1.5 text-stone-300">
                  Next.js · TypeScript · PostgreSQL · Node.js
                </span>
                <span className="rounded-lg border border-stone-800 bg-stone-900/90 px-3 py-1.5 text-stone-300">
                  Livraisons toutes les 2 semaines
                </span>
                <span className="rounded-lg border border-amber-900/50 bg-amber-950/40 px-3 py-1.5 text-amber-300">
                  Fondé en 2022 · Casablanca
                </span>
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 shadow-md hover:bg-amber-400 active:scale-[0.98] transition"
                >
                  <span>Demander un échange direct</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <a
                  href="#travaux"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-700 bg-stone-900/60 px-5 py-3 text-sm font-semibold text-stone-300 hover:bg-stone-800 hover:text-white active:scale-[0.98] transition"
                >
                  <span>Voir nos réalisations</span>
                  <span>↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Hero Visual Card: Real Technopark Photo & Studio Footprint */}
          <div className="flex flex-col justify-between rounded-3xl border border-stone-800 bg-[#14110e] p-6 sm:p-8 lg:col-span-5 overflow-hidden">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-stone-400 pb-4 border-b border-stone-800/80">
                <span className="text-amber-400 font-bold">Siège & Bureau</span>
                <span>Technopark, 20001</span>
              </div>

              {/* Real Technopark photo with subtle parallax */}
              <div className="relative mt-5 aspect-[16/10] overflow-hidden rounded-2xl border border-stone-800 bg-stone-900">
                <StudioParallaxContainer className="h-full w-full">
                  <Image
                    src="/studio/technopark.png"
                    alt="Technopark de Casablanca, siège de Byte Force"
                    fill
                    priority
                    sizes="(min-width: 1024px) 38vw, 100vw"
                    className="object-cover object-center filter contrast-105"
                  />
                </StudioParallaxContainer>
                <div className="absolute bottom-2.5 left-2.5 rounded-md bg-stone-950/85 px-2.5 py-1 font-mono text-[11px] text-amber-200 backdrop-blur-xs border border-stone-800/60">
                  Technopark Casablanca · Bd Dammam
                </div>
              </div>

              <div className="mt-5 space-y-2 text-xs leading-relaxed text-stone-300">
                <p>
                  Pas de bureaux fantômes ni de sous-traitance opaque. Nous recevons nos clients sur place pour cadrer les spécifications, tester les prototypes et réviser le code ensemble.
                </p>
              </div>
            </div>

            {/* Quick metrics in hero card */}
            <div className="mt-6 pt-5 border-t border-stone-800/80 grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <p className="text-stone-500 uppercase">Disponibilité</p>
                <p className="font-bold text-white mt-0.5">Lun–Ven · 9h–19h</p>
              </div>
              <div>
                <p className="text-stone-500 uppercase">Temps de réponse</p>
                <p className="font-bold text-amber-400 mt-0.5">&lt; 24h ouvrées</p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* 02. EDITORIAL BRANDING & CRAFT SECTION */}
      <section className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative overflow-hidden rounded-3xl border border-stone-300 bg-[#fbfaf8] text-stone-900 shadow-xl p-6 sm:p-10 lg:p-12">
          
          {/* Subtle architectural dot grid */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{ backgroundImage: "radial-gradient(#000 1px, transparent 1px)", backgroundSize: "22px 22px" }}
          />

          {/* Single oversized wordmark */}
          <div className="relative z-10 w-full overflow-hidden text-center select-none pt-2 pb-6">
            <h2 className="font-black tracking-tighter text-stone-950 uppercase text-[clamp(2.5rem,7.5vw,6.5rem)] leading-none">
              BYTE FORCE STUDIO
            </h2>
          </div>

          {/* Fact-based Studio Principles (Concrete, no buzzwords) */}
          <div className="relative z-10 grid grid-cols-2 gap-3 border-y border-stone-200 py-4 font-mono text-xs sm:text-sm text-stone-700 md:grid-cols-4 text-center">
            <div className="py-1">
              <span className="font-bold text-stone-950">100% Code Propriétaire</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">Itérations de 2 Semaines</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">Stack Web & Cloud Moderne</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">Hébergement Détenu par le Client</span>
            </div>
          </div>

          {/* Single clean craft statement (Eliminated previous duplicated paragraphs) */}
          <div className="relative z-10 my-8 max-w-3xl mx-auto text-center">
            <p className="text-base sm:text-lg leading-relaxed text-stone-700 font-sans">
              Nous construisons des systèmes sur mesure pour les entreprises qui ont dépassé les limites des tableurs 
              et des abonnements SaaS rigides. Chaque composant est écrit pour vos règles réelles, avec une transmission 
              complète des dépôts Git et des accès serveurs.
            </p>
          </div>

          {/* 3 Key Stats with Scroll-triggered count-up */}
          <div className="relative z-10 grid grid-cols-1 divide-y divide-stone-200 md:grid-cols-3 md:divide-y-0 md:divide-x border-t border-stone-200 pt-8" aria-label="Le studio en chiffres">
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
                <StudioStatCount target={projects.length} />
              </p>
              <p className="mt-2 text-xs font-mono text-stone-600 uppercase tracking-wider">
                Projets livrés en production
              </p>
            </div>
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-stone-950">
                <StudioStatCount target={places.length} />
              </p>
              <p className="mt-2 text-xs font-mono text-stone-600 uppercase tracking-wider">
                Pays d&apos;intervention ({places.join(", ")})
              </p>
            </div>
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950">
                9h–19h
              </p>
              <p className="mt-2 text-xs font-mono text-stone-600 uppercase tracking-wider">
                Bureau au Technopark Casablanca
              </p>
            </div>
          </div>

          {/* 03. FEATURED WORK (Unique entries, structured case studies, no duplicates) */}
          <div id="travaux" className="relative z-10 mt-14 pt-12 border-t border-stone-200 scroll-mt-24">
            <div className="flex flex-wrap items-end justify-between gap-6 pb-8">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-amber-700 uppercase">
                  01 · Travaux Livrés
                </span>
                <h3 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-stone-950">
                  Des applications en production, pas des maquettes.
                </h3>
              </div>
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-bold text-stone-900 shadow-xs hover:bg-stone-50 transition"
              >
                <span>Voir le catalogue complet ({projects.length})</span>
                <span>↓</span>
              </a>
            </div>

            {/* Asymmetrical 2-Column Showcase */}
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              
              {/* Project 1: Coco Inbox (Featured SaaS & CRM) */}
              {cocoInbox && (
                <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div>
                    <Link
                      href={`/realisations/${cocoInbox.slug}`}
                      className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200"
                    >
                      {cocoInbox.shot && (
                        <Image
                          src={cocoInbox.shot}
                          alt={`${cocoInbox.title} en production`}
                          fill
                          sizes="(min-width: 1024px) 50vw, 100vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute top-3 left-3 rounded-md bg-stone-950/85 px-2.5 py-1 font-mono text-[11px] text-amber-300 backdrop-blur-xs">
                        {cocoInbox.category} · {cocoInbox.city} ({cocoInbox.year})
                      </div>
                    </Link>

                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-bold text-stone-950">{cocoInbox.title}</h4>
                        <span className="font-mono text-xs text-stone-500">Montréal · 2024</span>
                      </div>
                      
                      {/* Structured Problem -> Solution -> Duration -> Outcome */}
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                        <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/80">
                          <p className="font-mono font-bold text-stone-900 uppercase">Le Problème</p>
                          <p className="mt-1 text-stone-600 leading-relaxed">
                            Besoin d&apos;une plateforme pour gérer des emails temporaires, des transferts de fichiers chiffrés et des notes confidentielles avec expiration stricte.
                          </p>
                        </div>
                        <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/80">
                          <p className="font-mono font-bold text-stone-900 uppercase">Ce que nous avons bâti</p>
                          <p className="mt-1 text-stone-600 leading-relaxed">
                            Plateforme SaaS avec Next.js, Node.js, GraphQL et MongoDB. Chiffrement de bout en bout et interface utilisateur haute performance.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-4 text-xs font-mono">
                        <div className="p-2 border-l-2 border-amber-600 pl-3">
                          <span className="text-stone-500 block">Délai de réalisation</span>
                          <span className="font-bold text-stone-900">12 mois (janv. – déc. 2024)</span>
                        </div>
                        <div className="p-2 border-l-2 border-emerald-600 pl-3">
                          <span className="text-stone-500 block">Résultat mesuré</span>
                          <span className="font-bold text-stone-900">En ligne en production active</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-stone-500">Next.js · Node.js · GraphQL · MongoDB</span>
                    <Link
                      href={`/realisations/${cocoInbox.slug}`}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                    >
                      <span>Fiche complète</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 2: YourSmile (Orthodontic CRM & Platform) */}
              {yoursmile && (
                <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div>
                    <Link
                      href={`/realisations/${yoursmile.slug}`}
                      className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200"
                    >
                      {yoursmile.shot && (
                        <Image
                          src={yoursmile.shot}
                          alt={`${yoursmile.title} en production`}
                          fill
                          sizes="(min-width: 1024px) 35vw, 100vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute top-3 left-3 rounded-md bg-stone-950/85 px-2.5 py-1 font-mono text-[11px] text-amber-300 backdrop-blur-xs">
                        {yoursmile.category} · {yoursmile.city} ({yoursmile.year})
                      </div>
                    </Link>

                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-2xl font-bold text-stone-950">{yoursmile.title}</h4>
                        <span className="font-mono text-xs text-stone-500">Casablanca · 2025</span>
                      </div>

                      {/* Structured Problem -> Solution -> Duration -> Outcome */}
                      <div className="mt-4 space-y-3 text-xs">
                        <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/80">
                          <p className="font-mono font-bold text-stone-900 uppercase">Le Problème</p>
                          <p className="mt-1 text-stone-600 leading-relaxed">
                            Le suivi des gouttières orthodontiques demandait un parcours coordonné entre dentistes, patients et administration centrale sans erreur de dossier.
                          </p>
                        </div>
                        <div className="rounded-lg bg-stone-50 p-3 border border-stone-200/80">
                          <p className="font-mono font-bold text-stone-900 uppercase">Ce que nous avons bâti</p>
                          <p className="mt-1 text-stone-600 leading-relaxed">
                            CRM métier : portails praticiens et patients, back-office administration, droits d&apos;accès stricts, API GraphQL et interface Next.js.
                          </p>
                        </div>
                      </div>

                      <div className="mt-3 grid grid-cols-2 gap-3 text-xs font-mono">
                        <div className="p-2 border-l-2 border-amber-600 pl-2.5">
                          <span className="text-stone-500 block">Délai</span>
                          <span className="font-bold text-stone-900">7 mois (janv.–juil. 2025)</span>
                        </div>
                        <div className="p-2 border-l-2 border-emerald-600 pl-2.5">
                          <span className="text-stone-500 block">Résultat</span>
                          <span className="font-bold text-stone-900">Déployé à Casablanca</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-stone-500">Next.js · Node.js · GraphQL · MongoDB</span>
                    <Link
                      href={`/realisations/${yoursmile.slug}`}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                    >
                      <span>Fiche complète</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 3: Proche de moi (Platform & Booking) */}
              {procheDeMoi && (
                <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div>
                    <Link
                      href={`/realisations/${procheDeMoi.slug}`}
                      className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200"
                    >
                      {procheDeMoi.shot && (
                        <Image
                          src={procheDeMoi.shot}
                          alt={`${procheDeMoi.title} en production`}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute top-3 left-3 rounded-md bg-stone-950/85 px-2.5 py-1 font-mono text-[11px] text-amber-300 backdrop-blur-xs">
                        {procheDeMoi.category} · {procheDeMoi.city} ({procheDeMoi.year})
                      </div>
                    </Link>

                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-stone-950">{procheDeMoi.title} & Booking</h4>
                        <span className="font-mono text-xs text-stone-500">Lille · 2024–2026</span>
                      </div>

                      <div className="mt-3 space-y-2 text-xs">
                        <p className="text-stone-600 leading-relaxed">
                          <strong className="text-stone-900">Problème :</strong> Les commerces de proximité n&apos;avaient pas de plateforme unique combinant géolocalisation et prise de rendez-vous directe.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                          <strong className="text-stone-900">Ce que nous avons bâti :</strong> Moteur de recherche local, module cartographique et tableau de bord de réservation pour commerçants avec Next.js, TypeScript et Strapi.
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                        <div>
                          <span className="text-stone-500 block">Durée de mission</span>
                          <span className="font-bold text-stone-900">Cycles continus depuis 2024</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Statut réel</span>
                          <span className="font-bold text-emerald-700">En ligne à Lille</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-stone-500">Next.js · TypeScript · Strapi</span>
                    <Link
                      href={`/realisations/${procheDeMoi.slug}`}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                    >
                      <span>Voir le projet</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              )}

              {/* Project 4: Zainek (Mobile App & Web) */}
              {zainek && (
                <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div>
                    <Link
                      href={`/realisations/${zainek.slug}`}
                      className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-stone-100 border border-stone-200"
                    >
                      {zainek.shot && (
                        <Image
                          src={zainek.shot}
                          alt={`${zainek.title} application`}
                          fill
                          sizes="(min-width: 1024px) 45vw, 100vw"
                          className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                        />
                      )}
                      <div className="absolute top-3 left-3 rounded-md bg-stone-950/85 px-2.5 py-1 font-mono text-[11px] text-amber-300 backdrop-blur-xs">
                        {zainek.category} · {zainek.city} ({zainek.year})
                      </div>
                    </Link>

                    <div className="mt-5">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xl font-bold text-stone-950">{zainek.title}</h4>
                        <span className="font-mono text-xs text-stone-500">Maroc · 2026</span>
                      </div>

                      <div className="mt-3 space-y-2 text-xs">
                        <p className="text-stone-600 leading-relaxed">
                          <strong className="text-stone-900">Problème :</strong> Difficulté pour les clientes de trouver des salons ou nail artists disponibles et de réserver sans appel téléphonique.
                        </p>
                        <p className="text-stone-600 leading-relaxed">
                          <strong className="text-stone-900">Ce que nous avons bâti :</strong> Application mobile Android complète sur le Play Store couplée au site web pour la réservation instantanée.
                        </p>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs font-mono">
                        <div>
                          <span className="text-stone-500 block">Cycle de livraison</span>
                          <span className="font-bold text-stone-900">TODO: [Durée exacte du cycle initial]</span>
                        </div>
                        <div>
                          <span className="text-stone-500 block">Statut réel</span>
                          <span className="font-bold text-emerald-700">Publié sur le Play Store</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-stone-100 flex items-center justify-between">
                    <span className="font-mono text-xs text-stone-500">Android · Web · API</span>
                    <Link
                      href={`/realisations/${zainek.slug}`}
                      className="group inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                    >
                      <span>Voir le projet</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* 04. SECTION 02: MÉTHODE DE TRAVAIL & DIRECTION (Warm Ink Architectural Panel) */}
      <section id="bureau" className="mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8 py-8 scroll-mt-24">
        <div className="relative overflow-hidden rounded-3xl border border-stone-800 bg-[#14110e] text-stone-200 shadow-2xl p-6 sm:p-10 lg:p-12">
          
          <div className="max-w-3xl">
            <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase">
              02 · Méthode & Équipe
            </span>
            <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Une équipe technique à taille humaine, installée à Casablanca.
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-300">
              Byte Force est dirigé par son fondateur technique depuis le Technopark de Casablanca. 
              On vous répond du lundi au vendredi, de 9h à 19h, au {site.phoneDisplay} ou par <EmailText />.
            </p>
          </div>

          {/* 4 Steps of Method (Rewritten in direct first person plural) */}
          <div id="methode" className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 scroll-mt-24">
            
            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <span className="font-mono text-xs font-bold text-amber-400">Étape 01</span>
              <h4 className="mt-2 text-lg font-bold text-white">Cadrage sur le terrain</h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                Nous analysons vos fichiers réels, vos règles de gestion et les goulots d&apos;étranglement quotidiens, sans intermédiaire commercial.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <span className="font-mono text-xs font-bold text-amber-400">Étape 02</span>
              <h4 className="mt-2 text-lg font-bold text-white">Itérations de 2 semaines</h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                Tous les 14 jours, nous déployons une version testable en ligne. Vous validez les écrans au fur et à mesure de l&apos;avancement.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <span className="font-mono text-xs font-bold text-amber-400">Étape 03</span>
              <h4 className="mt-2 text-lg font-bold text-white">Code 100% à vous</h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                À la livraison, vous recevez les accès administrateur, les dépôts Git et les clés de vos serveurs. Zéro abonnement obligatoire.
              </p>
            </div>

            <div className="rounded-2xl border border-stone-800 bg-stone-900/60 p-5">
              <span className="font-mono text-xs font-bold text-amber-400">Étape 04</span>
              <h4 className="mt-2 text-lg font-bold text-white">Suivi technique direct</h4>
              <p className="mt-2 text-xs leading-relaxed text-stone-400">
                Nous assurons la maintenance, la surveillance des sauvegardes et les évolutions futures avec un interlocuteur technique dédié.
              </p>
            </div>

          </div>

          {/* Founder & Governance Editorial Row */}
          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch border-t border-stone-800/80 pt-10">
            
            {/* Founder Card with real photo & French bio */}
            <div className="lg:col-span-6 rounded-2xl border border-stone-800 bg-[#181410] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase">Direction Technique</span>
                  <span className="text-stone-500">Casablanca</span>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="relative aspect-[4/5] w-28 sm:w-32 shrink-0 overflow-hidden rounded-xl border border-stone-700 bg-stone-800">
                    <Image
                      src="/walid-moultamiss-byte-force-maroc.png"
                      alt="Walid Moultamiss, fondateur de Byte Force"
                      fill
                      sizes="140px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">Walid Moultamiss</h4>
                    <p className="font-mono text-xs text-amber-400 mt-0.5">Fondateur & Ingénieur Logiciel Full-Stack</p>
                    <p className="mt-3 text-xs leading-relaxed text-stone-300">
                      Diplômé d&apos;un Master en informatique de l&apos;Université Heriot-Watt, avec plus de 4 ans d&apos;expérience dans l&apos;architecture d&apos;applications web, SaaS et CRM sur mesure. Il pilote directement les développements et les choix techniques du studio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs">
                <Link
                  href="/walid-moultamiss"
                  className="group inline-flex items-center gap-1.5 font-semibold text-white hover:text-amber-400 transition"
                >
                  <span>Lire la fiche détaillée</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                </Link>
                <div className="flex items-center gap-3 text-stone-400 font-mono text-[11px]">
                  <a href="/walid_moultamiss%20CV%20Fr.pdf" className="hover:text-amber-300 transition">CV Fr (PDF)</a>
                  <span>·</span>
                  <a href="/walid_moultamiss%20CV%20Eng.pdf" className="hover:text-amber-300 transition">CV En (PDF)</a>
                </div>
              </div>
            </div>

            {/* Studio Sections / Commitments */}
            <div className="lg:col-span-6 rounded-2xl border border-stone-800 bg-[#181410] p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-stone-800 text-xs font-mono">
                  <span className="text-amber-400 font-bold uppercase">Dossiers du Studio</span>
                  <span className="text-stone-500">{studioSections.length} guides</span>
                </div>

                <p className="mt-4 text-xs leading-relaxed text-stone-300">
                  Consultez nos principes techniques, la gestion de la propriété intellectuelle et les modalités de démarrage d&apos;un projet :
                </p>

                <nav aria-label="Guides studio" className="mt-4 divide-y divide-stone-800/80">
                  {studioSections.map((section) => (
                    <Link
                      key={section.slug}
                      href={`/studio/${section.slug}`}
                      className="group flex items-center justify-between py-2.5 text-xs font-medium text-stone-300 hover:text-amber-300 transition"
                    >
                      <span>{section.title}</span>
                      <span className="text-stone-600 group-hover:text-amber-400 group-hover:translate-x-1 transition duration-200">
                        →
                      </span>
                    </Link>
                  ))}
                </nav>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800 text-xs font-mono text-stone-400 flex items-center justify-between">
                <span>Technopark Casablanca</span>
                <Link href="/contact" className="text-amber-400 hover:underline">
                  Prendre rendez-vous ↗
                </Link>
              </div>
            </div>

          </div>

          {/* 05. FULL CATALOGUE (Interactive cursor-following preview on desktop) */}
          <div id="catalogue" className="mt-14 border-t border-stone-800/80 pt-10 scroll-mt-24">
            <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase">
                  03 · Tout le catalogue publié
                </span>
                <h4 className="mt-1.5 text-2xl font-bold text-white tracking-tight">
                  {projects.length} projets réels en ligne
                </h4>
              </div>
              <Link href="/realisations" className="text-xs font-mono text-amber-400 hover:underline">
                Voir la grille des réalisations ↗
              </Link>
            </div>

            {/* Interactive Catalogue list with mouse hover preview */}
            <StudioCatalogueList items={catalogueItems} />
          </div>

        </div>
      </section>

      {/* 06. STUDIO FOOTER SITE INDEX */}
      <div className="border-t border-stone-800/80 bg-[#090706]">
        <SiteIndex part={2} />
      </div>
    </main>
  );
}
