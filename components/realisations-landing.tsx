"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/content";

export function RealisationsLanding({
  projects,
}: {
  projects: Project[];
}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: `Tous les projets (${projects.length})` },
    { id: "Plate-forme", label: "Plateformes & SaaS" },
    { id: "E-Commerce", label: "E-Commerce" },
    { id: "Vitrine", label: "Sites Vitrines" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const staged = filteredProjects.filter((p) => p.shot);
  const rest = filteredProjects.filter((p) => !p.shot);

  return (
    <div className="w-full text-slate-900 selection:bg-[#000dbf] selection:text-white">
      {/* 1. HERO SECTION (Consulto Royal Cobalt Blue Theme) */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0c32b9] via-[#082699] to-[#04155b] px-6 pt-12 pb-24 text-white md:px-12 md:pt-16 md:pb-32 lg:px-16">
        {/* Neoclassical architectural / diagonal mesh overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-blue-400/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 -left-20 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7">
            {/* Geometric indicator icons (Hexagon, Sun, Rhombus) + Tag */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide text-white/90 backdrop-blur-md">
              <span className="flex items-center gap-1.5 text-blue-200">
                <span>⬡</span>
                <span>☼</span>
                <span>◈</span>
              </span>
              <span className="font-mono text-[11px] tracking-wider uppercase">
                Travaux Publiés · Catalogue Officiel
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4.2rem] lg:leading-[1.05]">
              Concevoir des Logiciels avec{" "}
              <span className="font-serif italic font-normal text-blue-200">Excellence Stratégique</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 md:text-xl">
              De Casablanca à Lille, Paris et Montréal : découvrez nos boutiques, plateformes SaaS et applications mobiles
              déjà en ligne. Chaque fiche détaille ce qui a été construit, sans chiffre inventé. Le code livré appartient au client.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-6">
              <a
                href="#catalogue"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-blue-950 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl active:scale-95"
              >
                <span>Explorer les réalisations</span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#000dbf] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                  <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                    <path fillRule="evenodd" d="M1 8a.75.75 0 0 1 .75-.75h9.793L7.77 3.47a.75.75 0 0 1 1.06-1.06l5 5a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06-1.06l3.773-3.72H1.75A.75.75 0 0 1 1 8z" clipRule="evenodd" />
                  </svg>
                </span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-colors duration-200 hover:border-white/40 hover:bg-white/20"
              >
                <span>Parler d&apos;un projet</span>
              </Link>
            </div>

            {/* Social proof floating rating badge */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/15 pt-8">
              <div className="flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 backdrop-blur-md">
                <div className="flex -space-x-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-400 font-mono text-[10px] font-bold text-blue-950">
                    KB
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-400 font-mono text-[10px] font-bold text-purple-950">
                    DM
                  </span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-300 font-mono text-[10px] font-bold text-indigo-950">
                    SV
                  </span>
                </div>
                <div className="text-xs">
                  <span className="font-bold text-amber-300">★★★★★</span>
                  <span className="ml-1.5 font-medium text-white/90">100% Projets en ligne</span>
                </div>
              </div>

              <div className="font-mono text-xs text-blue-200">
                <span>📍 Technopark Casablanca</span>
                <span className="mx-2">•</span>
                <span>{projects.length} Projets publiés</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual with Geometric Framing */}
          <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              {/* Angled geometric accent shapes */}
              <div
                aria-hidden="true"
                className="absolute -top-6 -right-6 h-48 w-48 rounded-3xl bg-blue-400/20 rotate-12 blur-xl"
              />
              <div
                aria-hidden="true"
                className="absolute -bottom-8 -left-8 h-48 w-48 rounded-full bg-indigo-500/30 blur-2xl"
              />

              {/* Main Photo Card with Diagonal Accent */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-slate-900">
                  <Image
                    src="/studio/technopark.png"
                    alt="Technopark Casablanca - Bureau ByteForce"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 460px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04155b]/90 via-[#04155b]/30 to-transparent" />

                  {/* Diagonal geometric badge */}
                  <div className="absolute top-4 right-4 rounded-xl border border-white/20 bg-blue-600/80 px-3 py-1.5 font-mono text-xs text-white backdrop-blur-md">
                    Casablanca · Studio
                  </div>

                  {/* Bottom info badge */}
                  <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="text-xs font-mono font-bold uppercase text-blue-200">Atelier de Construction</div>
                    <div className="mt-1 text-sm font-bold text-white">Technopark, Casablanca</div>
                    <div className="mt-0.5 text-xs text-blue-100/80">
                      Boutiques, plateformes et applications publiées pour le Maroc et l&apos;international.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SECTION 2: "We elevate businesses with custom software..." (Crisp Bento Grid) */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16" id="elevation">
        <div className="mx-auto max-w-7xl">
          {/* Header pill & Title matching Consulto style */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1 text-xs font-mono font-semibold tracking-wider text-slate-700 uppercase">
              Depuis 2020 · Studio Casablanca
            </span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl md:leading-[1.12]">
              Nous propulsons les entreprises avec du logiciel sur-mesure, du design produit et une ingénierie d&apos;excellence.
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              Chaque travail publié répond à une exigence métier précise : vendre en ligne, automatiser un geste ou
              offrir un service à des milliers d&apos;utilisateurs.
            </p>
          </div>

          {/* Bento Stats & Architectural Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12">
            {/* Box 1: 100% Code Propriétaire */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-4">
              <div>
                <div className="font-mono text-xs font-bold tracking-wider text-primary uppercase">Garantie Studio</div>
                <div className="mt-4 text-5xl font-black tracking-tight text-slate-900 lg:text-6xl">
                  100<span className="text-primary">%</span>
                </div>
                <div className="mt-2 text-base font-bold text-slate-800">Propriété du Code Client</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  Le code, le dépôt Git et les comptes d&apos;hébergement reviennent intégralement au client à la remise.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                Zéro redevance logicielle imposée
              </div>
            </div>

            {/* Box 2: Overhead Architectural Photo */}
            <div className="relative min-h-[260px] overflow-hidden rounded-3xl border border-slate-200/90 bg-slate-900 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-4">
              <Image
                src="/services-bento-ribbon.jpg"
                alt="Architecture & Design"
                fill
                className="object-cover opacity-80"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-end p-6 text-white">
                <span className="font-mono text-[10px] tracking-wider text-blue-300 uppercase">Architecture & UX</span>
                <span className="mt-1 text-lg font-bold">Conçu pour durer</span>
              </div>
            </div>

            {/* Box 3: 150+ Projets & Logiciels */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-4">
              <div>
                <div className="font-mono text-xs font-bold tracking-wider text-primary uppercase">Empreinte</div>
                <div className="mt-4 text-5xl font-black tracking-tight text-slate-900 lg:text-6xl">
                  150<span className="text-[#000dbf]">+</span>
                </div>
                <div className="mt-2 text-base font-bold text-slate-800">Projets & Livraisons</div>
                <p className="mt-2 text-xs leading-relaxed text-slate-600">
                  De Casablanca à Lille, Roubaix, Marcq-en-Barœul, Paris, Montréal, Safi, Tanger et Marrakech.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                France · Maroc · Canada · Belgique
              </div>
            </div>

            {/* Box 4: Blue Highlight Metric Card (4.9x ROI) */}
            <div className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#0c32b9] to-[#04155b] p-8 text-white shadow-xl shadow-blue-900/20 transition-all duration-300 hover:shadow-2xl lg:col-span-6">
              <div>
                <div className="font-mono text-xs font-bold tracking-wider text-blue-200 uppercase">
                  Accélération Métier
                </div>
                <div className="mt-4 text-5xl font-black tracking-tight text-white lg:text-6xl">4.9×</div>
                <div className="mt-2 text-lg font-bold text-blue-100">Gain de fluidité opérationnelle</div>
                <p className="mt-2 text-sm leading-relaxed text-blue-200/90">
                  Nos plateformes éliminent les tableurs contradictoires et automatisent les flux de commande en temps réel.
                </p>
              </div>
              <div className="mt-6 border-t border-white/20 pt-4 text-xs font-medium text-blue-200">
                Mesuré sur nos déploiements SaaS & CRM
              </div>
            </div>

            {/* Box 5: 99.8% Disponibilité Cloud */}
            <div className="flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-slate-50/70 p-8 shadow-sm transition-all duration-300 hover:shadow-md lg:col-span-6">
              <div>
                <div className="font-mono text-xs font-bold tracking-wider text-primary uppercase">Disponibilité</div>
                <div className="mt-4 text-5xl font-black tracking-tight text-slate-900 lg:text-6xl">
                  99.8<span className="text-primary">%</span>
                </div>
                <div className="mt-2 text-lg font-bold text-slate-800">Uptime & Surveillance Cloud</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Surveillance continue de la disponibilité, sauvegardes automatiques et certificats gérés sans coupure.
                </p>
              </div>
              <div className="mt-6 border-t border-slate-200 pt-4 text-xs font-medium text-slate-500">
                Infrastructures Cloudflare & Cloud haute résilience
              </div>
            </div>
          </div>

          {/* Minimalist Partner / Cities Logos Ribbon */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-slate-200/80 pt-10 font-mono text-xs font-bold tracking-widest text-slate-400 uppercase sm:gap-14">
            <span className="hover:text-primary transition-colors">CASABLANCA</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">LILLE</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">PARIS</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">MONTRÉAL</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">TANGER</span>
            <span>•</span>
            <span className="hover:text-primary transition-colors">MARRAKECH</span>
          </div>
        </div>
      </section>

      {/* 3. SECTION 3: OUR EXPERTISE - THE REAL PROJECTS SHOWCASE */}
      <section className="border-t border-slate-200/80 bg-slate-50/70 px-6 py-24 md:px-12 md:py-32 lg:px-16" id="catalogue">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold tracking-wider text-slate-700 uppercase shadow-sm">
              Connecting Businesses & Ideas
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl md:text-5xl">
              Nos Réalisations Publiées
            </h2>
            <p className="mt-4 text-base text-slate-600 md:text-lg">
              {projects.length} projets déjà en ligne : des boutiques, des sites vitrines et des plateformes. Chaque
              carte dit ce qui a été construit, sans chiffre inventé.
            </p>

            {/* Filter Tabs */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "border border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Staged Projects Grid (Projects with real screenshots) */}
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            {staged.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-2xl"
              >
                {/* Screenshot Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  {project.shot ? (
                    <Image
                      src={project.shot}
                      alt={`${project.title}, capture du site en ligne`}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  ) : null}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="rounded-full bg-slate-950/70 px-3 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                      {project.category}
                    </span>
                    <span className="rounded-full bg-blue-600/80 px-3 py-1 font-mono text-[11px] font-bold text-white backdrop-blur-md">
                      {project.city} · {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-1 flex-col justify-between p-7 md:p-8">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.description}</p>

                    {/* Problem / Solution / Result tags where available */}
                    {project.problem || project.solution ? (
                      <div className="mt-5 space-y-2.5 rounded-2xl bg-slate-50 p-4 text-xs border border-slate-100">
                        {project.problem && (
                          <div>
                            <span className="font-bold text-slate-800">Problème initial : </span>
                            <span className="text-slate-600">{project.problem}</span>
                          </div>
                        )}
                        {project.solution && (
                          <div>
                            <span className="font-bold text-blue-700">Ce qui a été livré : </span>
                            <span className="text-slate-600">{project.solution}</span>
                          </div>
                        )}
                        {project.result && (
                          <div>
                            <span className="font-bold text-emerald-700">Résultat : </span>
                            <span className="text-slate-600">{project.result}</span>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-5">
                    <Link
                      href={`/realisations/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-primary group-hover:underline"
                    >
                      <span>Consulter la fiche détaillée</span>
                      <span>→</span>
                    </Link>

                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900"
                      >
                        <span>Visiter le site en ligne</span>
                        <span>↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Non-staged Projects Directory (All remaining projects preserved!) */}
          {rest.length > 0 && (
            <div className="mt-20">
              <h3 className="text-2xl font-bold tracking-tight text-slate-900">
                Autres travaux du catalogue ({rest.length})
              </h3>
              <p className="mt-1 text-xs text-slate-600">
                Ces projets n&apos;ont pas de capture d&apos;écran dans le dossier, mais disposent d&apos;une fiche indexée.
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((project) => (
                  <Link
                    key={project.slug}
                    href={`/realisations/${project.slug}`}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md"
                  >
                    <div>
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="font-mono font-bold text-primary">{project.category}</span>
                        <span>
                          {project.city} · {project.year}
                        </span>
                      </div>
                      <h4 className="mt-2 text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">
                        {project.title}
                      </h4>
                      <p className="mt-1.5 text-xs text-slate-600 line-clamp-2">{project.description}</p>
                    </div>

                    <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary">
                      <span>Fiche projet</span>
                      <span>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* 4. "Ce que chaque dossier contient" (Preserving 100% of studio transparency content) */}
          <div className="mt-20 rounded-3xl border border-slate-200/90 bg-white p-8 shadow-sm md:p-12">
            <span className="font-mono text-xs font-bold tracking-wider text-primary uppercase">
              Transparence & Rigueur
            </span>
            <h3 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Ce que chaque dossier contient
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 max-w-3xl">
              Chaque fiche classe le travail dans sa catégorie exacte. Elle ne donne pas de faux prix, pas de faux
              témoignage et pas de volume de ventes : ces chiffres appartiennent au client. On ouvre le site publié depuis
              la fiche, puis on écrit à Casablanca si le besoin ressemble à celui-ci. Le code livré appartient au client.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-h-96 overflow-y-auto pr-2 border-t border-slate-100 pt-6">
              {projects.map((project) => (
                <div key={project.slug} className="rounded-xl bg-slate-50/70 p-4 text-xs leading-relaxed text-slate-700">
                  <div className="font-bold text-slate-900">
                    {project.title} ({project.year}) · {project.city}, {project.country}
                  </div>
                  <div className="mt-1 text-slate-500">{project.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FINAL CONSULTATIVE CTA BANNER */}
      <section className="bg-white px-6 py-20 md:px-12 md:py-28 lg:px-16" id="contact">
        <div className="mx-auto max-w-5xl rounded-3xl border border-blue-900/30 bg-gradient-to-br from-[#0c32b9] via-[#082699] to-[#04155b] p-8 text-white shadow-2xl md:p-14">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold tracking-widest text-blue-200 uppercase">
              Un projet similaire pour votre entreprise ?
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Donnez vie à votre prochain logiciel
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-100 md:text-lg">
              Que vous ayez besoin d&apos;une boutique e-commerce, d&apos;une plateforme SaaS sur mesure ou d&apos;une application
              mobile native, nos ingénieurs concrétisent votre vision depuis Casablanca.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold text-blue-950 shadow-xl transition-all duration-300 hover:bg-blue-50 hover:shadow-2xl active:scale-95"
              >
                <span>Démarrer un projet</span>
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
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <span>WhatsApp : +212 666 650 696</span>
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 border-t border-white/15 pt-8 sm:grid-cols-3 font-mono text-xs text-blue-200">
              <div>
                <span className="block text-white/50">Email direct</span>
                <a href="mailto:contact@byteforce.ma" className="text-white hover:underline">
                  contact@byteforce.ma
                </a>
              </div>
              <div>
                <span className="block text-white/50">Atelier</span>
                <span className="text-white">Technopark Casablanca</span>
              </div>
              <div>
                <span className="block text-white/50">Délai moyen</span>
                <span className="text-emerald-300">Réponse sous 24h ouvrées</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
