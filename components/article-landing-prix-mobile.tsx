"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingPrixMobile({ article }: { article: Article }) {
  const [appType, setAppType] = useState<"mvp" | "ecommerce" | "marketplace">("ecommerce");
  const [includeGps, setIncludeGps] = useState<boolean>(true);
  const [includePayment, setIncludePayment] = useState<boolean>(true);

  let budgetEstimated = appType === "mvp" ? 38000 : appType === "ecommerce" ? 64000 : 105000;
  if (includeGps) budgetEstimated += 7000;
  if (includePayment) budgetEstimated += 8000;

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
    "Bonjour ByteForce, je souhaite estimer le prix de mon application mobile au Maroc."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Tech with Mobile Cost Calculator Mockup) */}
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
              Décisions & Guides
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Prix Application Mobile Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-purple-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Étude de Marché 2026 · iOS & Android
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Prix d&apos;une application mobile au Maroc en 2026 : facteurs de coût et budget réel.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Au Maroc, le coût de développement d&apos;une application mobile démarre à partir de{" "}
                <strong>35 000 MAD</strong> pour un MVP ciblé et se situe généralement entre{" "}
                <strong>55 000 MAD et 110 000 MAD</strong> pour une application commerciale intégrant paiement CMI,
                géolocalisation GPS et notifications push. Analyse complète des composantes techniques et des pièges
                à éviter.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Estimer mon application sous 24h</span>
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
                  <span>Discussion WhatsApp avec un développeur</span>
                </a>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Dès 35 000 MAD</span>
                  <span className="text-white/50 text-[11px]">MVP iOS & Android</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">55k à 110k MAD</span>
                  <span className="text-white/50 text-[11px]">App complète stores</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">React Native</span>
                  <span className="text-white/50 text-[11px]">-40% vs double natif</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Stores Validés</span>
                  <span className="text-white/50 text-[11px]">App Store & Google Play</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Mobile Budget Simulator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur Mobile ByteForce</span>
                  <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                    React Native
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <label className="text-xs font-mono text-white/60 uppercase block mb-1.5">
                      Type de projet mobile :
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 text-xs font-mono">
                      {[
                        { id: "mvp", label: "MVP Startup" },
                        { id: "ecommerce", label: "M-Commerce" },
                        { id: "marketplace", label: "Marketplace" },
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => setAppType(t.id as typeof appType)}
                          className={`rounded-lg py-2 px-1 text-center font-bold transition-all ${
                            appType === t.id
                              ? "bg-[#000dbf] text-white border border-blue-400"
                              : "bg-white/5 text-white/70 hover:bg-white/10"
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <label className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 text-xs font-mono text-white cursor-pointer border border-white/10">
                      <span>🛰️ Géolocalisation GPS en direct</span>
                      <input
                        type="checkbox"
                        checked={includeGps}
                        onChange={(e) => setIncludeGps(e.target.checked)}
                        className="h-4 w-4 rounded accent-[#000dbf]"
                      />
                    </label>

                    <label className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 text-xs font-mono text-white cursor-pointer border border-white/10">
                      <span>💳 Paiement sécurisé CMI / Stripe</span>
                      <input
                        type="checkbox"
                        checked={includePayment}
                        onChange={(e) => setIncludePayment(e.target.checked)}
                        className="h-4 w-4 rounded accent-[#000dbf]"
                      />
                    </label>
                  </div>

                  <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/40 p-4 text-center font-mono">
                    <span className="text-xs text-indigo-200">Budget estimé clé en main (iOS + Android) :</span>
                    <p className="text-2xl font-black text-white mt-1">
                      {budgetEstimated.toLocaleString("fr-FR")} MAD
                    </p>
                    <span className="text-[10px] text-emerald-400 block mt-1">
                      Publication App Store & Google Play incluse.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Obtenir une estimation détaillée sous 24h
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
              Synthèse Directe de Chiffrage Mobile
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Ce qui pèse réellement dans le devis d&apos;une application mobile
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Contrairement à une idée reçue, l&apos;écran du smartphone ne représente que la moitié du travail. Un projet
              d&apos;application mobile comprend également le back-end cloud (API, base de données, authentification), le
              tableau de bord web d&apos;administration pour la direction et la validation technique auprès d&apos;Apple et
              Google.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC DEEP DIVE: Les Composantes Invisibles du Prix */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Composantes Techniques
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Les 4 piliers indispensables d&apos;un projet mobile réussi
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Back-end Cloud & APIs</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Le serveur qui traite les commandes, envoie les notifications push et stocke les données de manière
                chiffrée et ultra-rapide.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Design Figma & Ergonomie</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Navigation au pouce fluide, animations soignées à 60 FPS et respect des Human Interface Guidelines
                d&apos;Apple.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Validation Stores Apple & Google</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Génération des certificats de sécurité, gestion des règles strictes de confidentialité et validation
                sans rejet technique.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Maintenance & Mises à Jour</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Adaptation continue aux nouvelles versions d&apos;iOS et Android sans jamais casser les fonctionnalités
                existantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON TABLE: React Native vs Double Natif */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Comparatif d&apos;Architecture
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              React Native vs Développement Natif Séparé (Swift & Kotlin)
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">React Native (ByteForce)</th>
                  <th className="py-4 px-6">Natif Séparé (Swift + Kotlin)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Coût de développement</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Optimisé (-40% sur le budget global)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Double budget (2 équipes distinctes)</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Délai de mise en production</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    5 à 10 semaines
                  </td>
                  <td className="py-4 px-6 text-rose-600">12 à 20 semaines</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Synchronisation des fonctionnalités</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    100% synchronisé (sorties simultanées)
                  </td>
                  <td className="py-4 px-6 text-slate-500">Décalages fréquents entre iOS et Android</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Coût de maintenance annuel</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">
                    Divisé par deux (un seul dépôt Git)
                  </td>
                  <td className="py-4 px-6 text-rose-600">Deux bases de code à faire évoluer en parallèle</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 5. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue technique mobile garantie
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à lancer votre application sur l&apos;App Store et Google Play ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Venez échanger au Technopark de Casablanca ou demandez une estimation en ligne. Nous vous remettons une
            proposition technique chiffrée sous 24h ouvrées.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Demander mon estimation gratuite
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
