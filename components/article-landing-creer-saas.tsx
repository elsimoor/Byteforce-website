"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingCreerSaas({ article }: { article: Article }) {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "Validation du Problème",
      desc: "Interroger 15 prospects B2B cibles au Maroc pour vérifier qu'un fichier Excel pénible existe déjà et qu'ils sont prêts à payer.",
    },
    {
      num: 2,
      title: "Cadrage du Core Value",
      desc: "Isoler l'unique fonctionnalité indispensable. Éliminer 80% des idées secondaires pour livrer un MVP commercialisable en 6 à 8 semaines.",
    },
    {
      num: 3,
      title: "Architecture Multi-Tenant",
      desc: "PostgreSQL avec Row Level Security (RLS) pour garantir une étanchéité absolue des données entre chaque entreprise cliente abonnée.",
    },
    {
      num: 4,
      title: "Facturation CMI & Stripe",
      desc: "Brancher le CMI pour prélever par carte bancaire marocaine en Dirhams (MAD) et Stripe pour encaisser en devises (EUR/USD) à l'international.",
    },
    {
      num: 5,
      title: "Go-To-Market & Onboarding",
      desc: "Tunnel d'inscription autonome en moins de 3 minutes (Aha! Moment) et mesure continue du churn pour maximiser la rétention.",
    },
  ];

  const url = `${site.url}/insights/${article.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Décisions", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: article.h1, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: article.h1,
        description: article.description,
        inLanguage: "fr",
        datePublished: article.date,
        dateModified: article.date,
        url,
        mainEntityOfPage: url,
        author: {
          "@type": "Person",
          "@id": `${site.url}/walid-moultamiss#person`,
          name: "Walid Moultamiss",
          url: `${site.url}/walid-moultamiss`,
          image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
          jobTitle: "Full-Stack Software Engineer",
          description: "Full-Stack Software Engineer & Lead ByteForce Technopark Casablanca.",
        },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png`, width: 360, height: 360 },
        },
      },
    ],
  };

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite échanger sur la création d'un SaaS B2B au Maroc."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live SaaS Blueprint Canvas) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-indigo-600/25 via-blue-600/15 to-transparent blur-3xl"
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
            <Link href="/insights" className="transition-colors hover:text-white">
              Décisions & Méthodes
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Créer un SaaS au Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Playbook Fondateur SaaS · Maroc 2026
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Comment créer et lancer un SaaS au Maroc ? Guide pratique de l&apos;idée au MVP.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                La demande des entreprises marocaines pour des logiciels cloud simples, facturés en Dirhams et adaptés
                aux réalités locales explose. Découvrez la méthode éprouvée par ByteForce : cadrer un{" "}
                <strong>MVP en 6 à 10 semaines</strong>, bâtir une <strong>architecture multi-tenant robuste</strong> et
                encaisser par carte bancaire via le CMI ou Stripe.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Cadrer mon SaaS avec un architecte</span>
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

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">6 à 10 semaines</span>
                  <span className="text-white/50 text-[11px]">MVP commercialisable</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">PostgreSQL RLS</span>
                  <span className="text-white/50 text-[11px]">Multi-Tenant sécurisé</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">CMI & Stripe</span>
                  <span className="text-white/50 text-[11px]">Encaissement MAD / Devises</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">100% Propriété</span>
                  <span className="text-white/50 text-[11px]">Code source cédé</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive SaaS Roadmap Step Visualizer */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Roadmap de Lancement SaaS</span>
                  <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                    Étape {activeStep} / 5
                  </span>
                </div>

                <div className="mt-4 space-y-2">
                  {steps.map((s) => (
                    <div
                      key={s.num}
                      onClick={() => setActiveStep(s.num)}
                      className={`cursor-pointer rounded-xl p-3 border transition-all ${
                        activeStep === s.num
                          ? "border-blue-400 bg-blue-950/60 shadow-md"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="font-bold text-white">
                          0{s.num}. {s.title}
                        </span>
                        {activeStep === s.num && <span className="text-emerald-400 font-bold">Sélectionné</span>}
                      </div>
                      <p className="mt-1 text-[11px] text-white/70 font-sans leading-relaxed">
                        {s.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Valider l&apos;architecture de mon SaaS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT ANSWER EXECUTIVE SUMMARY */}
      <section className="relative -mt-8 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-l-4 border-[#000dbf] bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
          <div className="space-y-3">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Synthèse Exécutive pour Fondateurs
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Pourquoi l&apos;échec d&apos;un SaaS ne vient presque jamais de la technologie
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              La quasi-totalité des échecs de startups SaaS au Maroc provient d&apos;une solution développée pour un
              problème que personne n&apos;est prêt à payer pour résoudre. La règle d&apos;or consiste à valider le
              problème auprès de vrais professionnels avant d&apos;écrire la moindre ligne de code, puis de déployer en
              moins de 10 semaines un MVP épuré qui résout 80% du besoin avec une passerelle de paiement en Dirhams.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC DEEP DIVE: Le Tableau des 5 Piliers Techniques */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Architecture Produit
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Les 4 règles d&apos;or pour un SaaS B2B scalable au Maroc
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Multi-Tenancy RLS</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Cloisonnement étanche des bases de données : chaque entreprise abonnée est isolée sans risque de fuite
                d&apos;informations vers un tiers.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Facturation CMI en Dirhams</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Une PME marocaine paie plus facilement par carte bancaire nationale en Dirhams sans contraintes de
                dotation e-commerce internationale.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Onboarding &lt; 3 Minutes</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Le parcours d&apos;inscription doit mener l&apos;utilisateur à son premier « moment de satisfaction »
                (Aha! Moment) sans aucune formation complexe.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Cession Totale du Code</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Vous possédez 100% de la propriété intellectuelle sans redevance, indispensable pour lever des fonds
                auprès d&apos;investisseurs ou céder la société.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue d&apos;ingénierie SaaS garantie
            </div>
          </div>
        </div>
      </section>

      {/* 5. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à lancer votre produit SaaS avec notre studio ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Venez échanger 30 minutes au Technopark de Casablanca avec Walid Moultamiss et nos architectes logiciels.
            Nous évaluons votre idée et vous remettons une feuille de route technique claire sous 24h.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Cadrer mon SaaS gratuitement
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-3.5 text-sm font-semibold text-emerald-300 hover:bg-emerald-500/20"
            >
              WhatsApp Direct
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
