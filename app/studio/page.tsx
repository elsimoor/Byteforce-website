import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { EmailText } from "@/components/mail-link";
import { Icon } from "@/components/icon";
import { ResponsiveImg } from "@/components/responsive-img";
import { SiteIndex } from "@/components/site-index";
import { projects, type Project } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";
import { studioSections } from "@/lib/studio-sections";

const studioMeta = seoMeta["/studio"];

export const metadata: Metadata = {
  title: { absolute: studioMeta.title },
  description: studioMeta.description,
  alternates: { canonical: "/studio" },
  openGraph: openGraph("/studio", studioMeta.title, studioMeta.description),
};

const featuredOrder = ["coco-inbox", "yoursmile", "re-proche-de-moi"] as const;

function withShot(slug: string) {
  const project = projects.find((item) => item.slug === slug);
  if (!project?.shot) return null;
  return project as Project & { shot: string };
}

const placeOrder = ["Maroc", "France", "Canada"];
const countries = [...new Set(projects.map((project) => project.country))];
const places = [
  ...placeOrder.filter((country) => countries.includes(country)),
  ...countries.filter((country) => !placeOrder.includes(country)),
];

export default function AboutPage() {
  const featured = featuredOrder.flatMap((slug) => {
    const project = withShot(slug);
    return project ? [project] : [];
  });

  const heroProject = withShot("coco-inbox") || featured[0];
  const secondProject = withShot("yoursmile") || featured[1];
  const thirdProject = withShot("re-proche-de-moi") || featured[2];

  return (
    <main data-studio className="w-full bg-[#0d0a08] text-slate-100 selection:bg-amber-600 selection:text-white">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "À propos", path: "/studio" }]} />

      {/* 00. TOP STATUS & SUB-NAVIGATION BAR */}
      <div className="w-full border-b border-amber-950/40 bg-[#120e0b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-6 py-3.5 text-xs font-mono">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-bold tracking-tight text-white hover:text-amber-400 transition">
              BYTE FORCE <span className="font-serif italic font-normal text-amber-500">studio</span>
            </Link>
            <nav className="hidden items-center gap-4 text-stone-400 sm:flex" aria-label="Navigation studio">
              <a href="#travaux" className="hover:text-white transition">Réalisations</a>
              <span className="text-stone-700">·</span>
              <a href="#methode" className="hover:text-white transition">Méthode</a>
              <span className="text-stone-700">·</span>
              <a href="#bureau" className="hover:text-white transition">Bureau</a>
            </nav>
          </div>

          <div className="flex items-center gap-5 text-stone-400">
            <span className="hidden items-center gap-2 sm:inline-flex">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Casablanca · Lun–Ven 9h–19h</span>
            </span>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-semibold text-amber-300 hover:bg-amber-500/20 transition"
            >
              <span>Contact direct</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>

      {/* 01. HERO SECTION (Warm fluted walnut & velvet architectural layout) */}
      <header className="mx-auto max-w-[1400px] px-4 pt-6 pb-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          
          {/* Left Hero Card: Walnut wood panel with floating framed window */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-900/30 bg-[#18120e] shadow-2xl lg:col-span-5 min-h-[440px] flex flex-col justify-between p-6 sm:p-8">
            <div className="absolute inset-0 z-0">
              <Image
                src="/studio/studio-wood-hero.jpg"
                alt="Architecture studio Byte Force"
                fill
                priority
                className="object-cover object-center opacity-40 mix-blend-luminosity filter contrast-125"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#140e0b] via-[#140e0b]/60 to-transparent" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-amber-400 uppercase">
                Studio Logiciel · Casablanca
              </span>
              <span className="rounded-full bg-amber-950/80 px-2.5 py-0.5 font-mono text-[11px] text-amber-300 border border-amber-800/40">
                Technopark
              </span>
            </div>

            {/* Inset framed picture frame */}
            <div className="relative z-10 my-6 mx-auto w-full max-w-[320px] rounded-2xl border-2 border-amber-900/50 bg-black/60 p-2 shadow-2xl backdrop-blur-md">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-stone-900">
                {heroProject?.shot && (
                  <ResponsiveImg
                    src={heroProject.shot}
                    alt={`${heroProject.title} en production`}
                    width={480}
                    height={300}
                    priority
                    sizes="320px"
                    className="h-full w-full object-cover object-top"
                  />
                )}
                <div className="absolute bottom-2 left-2 rounded-md bg-black/75 px-2 py-0.5 font-mono text-[10px] text-amber-200 backdrop-blur-xs">
                  {heroProject?.title || "Projet en ligne"}
                </div>
              </div>
            </div>

            <div className="relative z-10 text-xs leading-relaxed text-stone-300/90 font-sans">
              <p>
                Studio d&apos;ingénierie logicielle & architecture digitale sur mesure, basé au Technopark de Casablanca. On conçoit des systèmes durables pour entreprises exigeantes.
              </p>
            </div>
          </div>

          {/* Right Hero Card: Sculptural terracotta velvet curve with bold display title */}
          <div className="relative overflow-hidden rounded-3xl border border-amber-900/30 bg-[#1e1510] shadow-2xl lg:col-span-7 min-h-[440px] flex flex-col justify-between p-6 sm:p-10">
            <div className="absolute inset-0 z-0">
              <Image
                src="/studio/studio-curved-velvet.jpg"
                alt="Texture velours studio"
                fill
                priority
                className="object-cover object-right opacity-35 filter brightness-90 contrast-110"
                sizes="(min-width: 1024px) 58vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#140e0b]/90 via-[#18110c]/70 to-[#140e0b]/40" />
            </div>

            {/* Top pill badges */}
            <div className="relative z-10 flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-mono text-amber-300">
                💼 Logiciel Métier
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-mono text-amber-300">
                ⚡ SaaS & Cloud
              </span>
              <span className="rounded-full border border-amber-500/30 bg-amber-950/60 px-3 py-1 text-xs font-mono text-amber-300">
                📱 Mobile & Web
              </span>
            </div>

            {/* Display H1 matching authentic content */}
            <div className="relative z-10 my-6 max-w-xl">
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.85rem] lg:leading-[1.12]">
                On transforme les opérations complexes en <span className="text-amber-400 font-serif italic font-normal">logiciels</span> qui font avancer votre entreprise.
              </h1>
              <p className="mt-5 text-base sm:text-lg leading-relaxed text-stone-300 font-sans">
                Applications métier, plateformes web et automations conçues sur mesure, depuis le Technopark de Casablanca. Code 100% propriétaire, zéro dépendance mensuelle.
              </p>
            </div>

            {/* Action buttons & status line */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-t border-amber-900/40 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-6 py-3 text-sm font-bold text-stone-950 shadow-lg hover:bg-amber-400 active:scale-95 transition"
                >
                  <span>Parler d&apos;un projet</span>
                  <Icon name="arrow_forward" />
                </Link>
                <a
                  href="#travaux"
                  className="inline-flex items-center gap-2 rounded-full border border-stone-600 bg-stone-900/60 px-5 py-3 text-sm font-semibold text-stone-200 hover:bg-stone-800 transition"
                >
                  <span>Explorer nos réalisations</span>
                  <Icon name="south" />
                </a>
              </div>
              <div className="font-mono text-xs text-stone-400">
                Est. 2022 · Technopark Casablanca
              </div>
            </div>

          </div>

        </div>
      </header>

      {/* 02. ARCHITECTURAL WHITE EDITORIAL SECTION (The UENOSTUDIO layout) */}
      <section className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4">
        <div className="relative overflow-hidden rounded-3xl border border-stone-200 bg-[#fbfbf9] text-stone-900 shadow-2xl p-6 sm:p-10 lg:p-14">
          
          {/* Subtle architectural dot grid background */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px' }}
          />

          {/* Giant Display Branding Header across width */}
          <div className="relative z-10 w-full overflow-hidden text-center select-none pt-2 pb-6">
            <h2 className="font-black tracking-tighter text-stone-950 uppercase text-[clamp(2.75rem,8.2vw,7.5rem)] leading-none">
              BYTEFORCESTUDIO
            </h2>
          </div>

          {/* 4 Architectural Bullet Values */}
          <div className="relative z-10 grid grid-cols-2 gap-3 border-y border-stone-200/90 py-4 font-mono text-xs sm:text-sm text-stone-700 md:grid-cols-4 text-center">
            <div className="py-1">
              <span className="font-bold text-stone-950">• User-Centered</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">• Code Propriétaire</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">• Architecture Scalable</span>
            </div>
            <div className="py-1">
              <span className="font-bold text-stone-950">• Amorti Rapide</span>
            </div>
          </div>

          {/* Centerpiece Showcase Card (Technopark / Engineering centerpiece) */}
          <div className="relative z-10 my-10 mx-auto max-w-4xl rounded-2xl border border-stone-300/80 bg-white p-4 sm:p-8 shadow-xl">
            <div className="relative aspect-[16/8] sm:aspect-[16/7] overflow-hidden rounded-xl bg-stone-100 border border-stone-200">
              <Image
                src="/studio/technopark.png"
                alt="Bureau Byte Force Technopark Casablanca"
                fill
                sizes="(min-width: 1024px) 800px, 90vw"
                className="object-cover object-center filter contrast-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                <div>
                  <p className="font-serif italic text-2xl sm:text-3xl font-normal text-white">
                    Ingénierie Logicielle & Métier <span className="font-sans font-bold not-italic">Personnalisé</span>
                  </p>
                  <p className="mt-1 font-mono text-xs text-amber-300">
                    Technopark · Boulevard Dammam, Aïn Chock, Casablanca
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Row & Craft Statement */}
          <div className="relative z-10 grid grid-cols-1 gap-8 border-b border-stone-200 pb-12 md:grid-cols-12 items-center">
            <div className="md:col-span-5 flex flex-col gap-3">
              <Link
                href="/contact"
                className="inline-flex w-fit items-center gap-2.5 rounded-full bg-stone-950 px-6 py-3.5 text-sm font-bold text-white shadow-md hover:bg-stone-800 transition active:scale-95"
              >
                <span>Parler d&apos;un projet</span>
                <Icon name="arrow_forward" />
              </Link>
              <p className="text-xs font-mono text-stone-500">
                Studio logiciel agréé · Siège Casablanca · Déploiement Maroc & International
              </p>
            </div>

            <div className="md:col-span-7 text-sm sm:text-base leading-relaxed text-stone-700 font-sans">
              <p>
                Byte Force conçoit des logiciels d&apos;entreprise, applications métier, plateformes SaaS et architectures cloud sur mesure depuis son studio au Technopark de Casablanca. Zéro licence inutile, zéro dépendance : vous conservez 100% de la propriété intellectuelle de votre code source.
              </p>
            </div>
          </div>

          {/* 3 Key Stats / Figures (Preserved from original studio page) */}
          <div className="relative z-10 grid grid-cols-1 divide-y divide-stone-200 md:grid-cols-3 md:divide-y-0 md:divide-x pt-10" aria-label="Le bureau en chiffres">
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-5xl font-extrabold tracking-tight text-stone-950">{projects.length}</p>
              <p className="mt-2 text-sm font-mono text-stone-600 uppercase tracking-wider">projets publiés en production</p>
            </div>
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950">{places.join(" · ")}</p>
              <p className="mt-2 text-sm font-mono text-stone-600 uppercase tracking-wider">Projets livrés dans {places.length} pays</p>
            </div>
            <div className="py-4 md:py-0 md:px-6 text-center md:text-left">
              <p className="text-xl sm:text-2xl font-bold tracking-tight text-stone-950">Lun–Ven · 9h–19h</p>
              <p className="mt-2 text-sm font-mono text-stone-600 uppercase tracking-wider">Bureau au Technopark Casablanca</p>
            </div>
          </div>

          {/* 03. FEATURED WORK (The 3-Card Bespoke Furniture Layout from Mockup) */}
          <div id="travaux" className="relative z-10 mt-16 pt-12 border-t border-stone-200 scroll-mt-28">
            <div className="flex flex-wrap items-end justify-between gap-6 pb-8">
              <div>
                <span className="font-mono text-xs font-bold tracking-widest text-amber-700 uppercase">01 · Du travail réel</span>
                <h3 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-stone-950">
                  Des produits en ligne. Code livré et en production.
                </h3>
              </div>
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-bold text-stone-900 shadow-xs hover:bg-stone-50 transition"
              >
                <span>Voir tout le catalogue ({projects.length})</span>
                <Icon name="arrow_forward" />
              </Link>
            </div>

            {/* Asymmetrical 3-card layout */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              
              {/* Card 1: Wide Hero Card (Residential Bespoke equivalent) */}
              <div className="lg:col-span-7 flex flex-col rounded-2xl border border-stone-200 bg-white p-5 shadow-md">
                <Link href={`/realisations/${heroProject?.slug || 'coco-inbox'}`} className="group relative block aspect-[16/10] overflow-hidden rounded-xl bg-stone-100">
                  {heroProject?.shot && (
                    <ResponsiveImg
                      src={heroProject.shot}
                      alt={heroProject.title}
                      width={720}
                      height={450}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-6">
                    <div>
                      <p className="font-serif italic text-2xl font-normal text-white">
                        Plateforme & Logiciel d&apos;Entreprise <span className="font-sans font-bold not-italic">Bespoke</span>
                      </p>
                      <p className="text-xs font-mono text-amber-300 mt-1">{heroProject?.title} · {heroProject?.city}</p>
                    </div>
                  </div>
                </Link>

                {/* 3 Structured Metadata Columns */}
                <div className="mt-6 grid grid-cols-1 gap-4 border-t border-stone-100 pt-5 sm:grid-cols-3 text-xs">
                  <div>
                    <p className="font-mono font-bold text-stone-900 uppercase">Approche Métier</p>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      Analyse des flux réels et suppression des ressaisies manuelles sur tableurs.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-stone-900 uppercase">Stack & Cloud</p>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      Next.js, Node.js, PostgreSQL, architecture sécurisée haute disponibilité.
                    </p>
                  </div>
                  <div>
                    <p className="font-mono font-bold text-stone-900 uppercase">Propriété Client</p>
                    <p className="mt-1 text-stone-600 leading-relaxed">
                      Code source, dépôt Git et comptes d&apos;hébergement livrés à 100%.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Feature Mobile / Web App */}
              <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-stone-200 bg-white p-5 shadow-md">
                <Link href={`/realisations/${secondProject?.slug || 'yoursmile'}`} className="group relative block aspect-[16/11] overflow-hidden rounded-xl bg-stone-100">
                  {secondProject?.shot && (
                    <ResponsiveImg
                      src={secondProject.shot}
                      alt={secondProject.title}
                      width={520}
                      height={360}
                      sizes="(min-width: 1024px) 35vw, 100vw"
                      className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    />
                  )}
                  <div className="absolute top-3 right-3 rounded-md bg-stone-950/80 px-2 py-1 text-[11px] font-mono text-white">
                    {secondProject?.category || "Application"}
                  </div>
                </Link>

                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xl font-bold text-stone-950">{secondProject?.title}</h4>
                    <span className="font-mono text-xs text-stone-500">{secondProject?.city} · {secondProject?.year}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-stone-600">
                    {secondProject?.description}
                  </p>
                  <Link
                    href={`/realisations/${secondProject?.slug || 'yoursmile'}`}
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800 transition"
                  >
                    <span>Découvrir l&apos;étude de cas</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </div>

            {/* Additional Project Row (Card 3 & Featured Grid) */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              {featured.map((project) => (
                <div key={project.slug} className="flex flex-col rounded-xl border border-stone-200 bg-white p-4 shadow-xs hover:border-amber-500/50 transition">
                  <Link href={`/realisations/${project.slug}`} className="relative block aspect-[16/10] overflow-hidden rounded-lg bg-stone-100">
                    <ResponsiveImg
                      src={project.shot}
                      alt={project.title}
                      width={400}
                      height={250}
                      sizes="(min-width: 768px) 30vw, 100vw"
                      className="h-full w-full object-cover object-top"
                    />
                  </Link>
                  <div className="mt-3.5 flex flex-1 flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between">
                        <h4 className="font-bold text-stone-950 text-base">{project.title}</h4>
                        <span className="font-mono text-[11px] text-stone-500">{project.year}</span>
                      </div>
                      <p className="mt-1.5 text-xs text-stone-600 line-clamp-2">{project.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-stone-100 pt-3">
                      <span className="font-mono text-[10px] text-stone-500 uppercase">{project.category} · {project.city}</span>
                      <Link href={`/realisations/${project.slug}`} className="text-xs font-bold text-amber-700">
                        Voir →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 04. SECTION 02: THE TECHNOPARK & STUDIO SITES (Dark Wood Architectural Panel from Mockup) */}
      <section id="bureau" className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative overflow-hidden rounded-3xl border border-amber-900/40 bg-[#140e0b] text-stone-200 shadow-2xl p-6 sm:p-10 lg:p-14">
          
          {/* Architectural dark wood backdrop */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/studio/studio-dark-wood.jpg"
              alt="Studio Byte Force Technopark"
              fill
              className="object-cover object-center opacity-30 mix-blend-luminosity filter contrast-125"
              sizes="1400px"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#140e0b]/90 via-[#18110c]/80 to-[#140e0b]/95" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <span className="font-mono text-xs font-bold tracking-widest text-amber-400 uppercase">
              02 · Établissement & Opérations
            </span>
            <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
              Le bureau est au Technopark. Présence réelle à Casablanca.
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-stone-300">
              Byte Force conçoit des logiciels, des applications web et des sites pour les entreprises. Le bureau est au {site.street}, {site.locality}, {site.postal} {site.city}. On y répond du lundi au vendredi, de 9h à 19h, au {site.phoneDisplay} ou par <EmailText />.
            </p>
          </div>

          {/* Two Floating White Editorial Cards (Sumimasen & Spatial experience equivalent) */}
          <div id="methode" className="relative z-10 mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
            
            {/* Floating Card A: Méthode & Walid Moultamiss */}
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 text-stone-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">Notre Méthode</span>
                <Link href="/checklists/comprendre-le-travail" className="text-xs font-bold text-stone-900 hover:text-amber-700 transition">
                  En savoir plus ↗
                </Link>
              </div>
              <h4 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-stone-950">
                Du problème métier au code source livré
              </h4>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Un cadrage écrit sans jargon, des livraisons concrètes toutes les deux semaines, et la remise intégrale des accès. Il n&apos;y a pas de bureau en France ni au Canada : les projets lillois, roubaisiens et montréalais du catalogue ont été pilotés depuis Casablanca.
              </p>
              
              <div className="mt-6 rounded-xl bg-stone-50 border border-stone-200/80 p-4 flex items-center justify-between">
                <div>
                  <p className="font-bold text-stone-950 text-sm">Walid Moultamiss</p>
                  <p className="text-xs text-stone-500 font-mono">Fondateur & Ingénieur Logiciel</p>
                </div>
                <Link
                  href="/walid-moultamiss"
                  className="rounded-full bg-stone-950 px-4 py-1.5 text-xs font-bold text-white hover:bg-stone-800 transition"
                >
                  Lire la fiche ↗
                </Link>
              </div>
            </div>

            {/* Floating Card B: Studio Sections & Governance */}
            <div id="sections" className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8 text-stone-900 shadow-2xl">
              <div className="flex items-center justify-between border-b border-stone-100 pb-4">
                <span className="font-mono text-xs font-bold text-amber-700 uppercase">Dossiers du Studio</span>
                <span className="font-mono text-xs text-stone-400">{studioSections.length} sections</span>
              </div>
              <h4 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-stone-950">
                Nos engagements techniques & contractuels
              </h4>
              <nav aria-label="Sections du studio" className="mt-4 divide-y divide-stone-100">
                {studioSections.map((section) => (
                  <Link
                    key={section.slug}
                    href={`/studio/${section.slug}`}
                    className="group flex items-center justify-between py-2.5 text-sm font-semibold text-stone-800 hover:text-amber-700 transition"
                  >
                    <span>{section.title}</span>
                    <span className="text-stone-400 group-hover:translate-x-1 transition duration-200">→</span>
                  </Link>
                ))}
              </nav>
            </div>

          </div>

          {/* 05. FULL CATALOGUE (All projects list preserved) */}
          <div className="relative z-10 mt-14 border-t border-amber-900/40 pt-10">
            <div className="flex items-center justify-between">
              <h4 className="text-2xl font-bold text-white tracking-tight">
                Tout le catalogue publié ({projects.length} projets)
              </h4>
              <Link href="/realisations" className="text-xs font-mono text-amber-400 hover:underline">
                Vue grille complète ↗
              </Link>
            </div>

            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {projects.map((project) => (
                <li key={project.slug} className="border-b border-stone-800/80 py-3">
                  <Link
                    href={`/realisations/${project.slug}`}
                    className="flex items-baseline justify-between gap-4 text-sm text-stone-300 hover:text-amber-300 transition"
                  >
                    <span className="font-medium text-white">{project.title}</span>
                    <span className="shrink-0 font-mono text-xs text-stone-500">
                      {project.city} · {project.year}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 06. FOOTER SITE INDEX INTEGRATION */}
      <div className="border-t border-stone-800/60 bg-[#0a0705]">
        <SiteIndex part={2} />
      </div>
    </main>
  );
}
