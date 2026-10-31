"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { AuthorByline } from "@/components/author-byline";
import type { Article } from "@/lib/articles";

export function ArticleLandingRemplacerExcel({ article }: { article: Article }) {
  const [excelSheets, setExcelSheets] = useState<number>(4);
  const [collaborators, setCollaborators] = useState<number>(10);

  // Time lost: ~2.5 hours per collaborator per week on reconciliation and copy-paste
  const weeklyHoursWasted = Math.round(collaborators * 2.5);
  const annualCostWastedMad = Math.round(weeklyHoursWasted * 52 * 110);

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
    "Bonjour ByteForce, je souhaite remplacer nos fichiers Excel par un logiciel interne sécurisé."
  )}`;

  return (
    <article className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live Excel vs App Visualizer) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-emerald-600/25 via-blue-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-indigo-500/15 blur-3xl"
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
            <span className="font-semibold text-white/90">Remplacer Excel</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-blue-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Guide Pratique de Modernisation PME · Maroc
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Remplacer Excel par un logiciel sur mesure : guide pratique pour digitaliser votre PME.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Fichiers écrasés par erreur, doublons de contacts, impossibilité de travailler à plusieurs en direct et
                absence totale de sécurité. Découvrez comment migrer vos classeurs Excel vers une{" "}
                <strong>source unique de vérité PostgreSQL</strong>, avec rôles utilisateurs stricts, mobilité smartphone
                et automatisation sans interruption d&apos;activité.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Demander un diagnostic gratuit de mes fichiers</span>
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
                  <span className="text-white font-bold text-sm">Zéro Erreur</span>
                  <span className="text-white/50 text-[11px]">Formules fiabilisées</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Rôles & Droits</span>
                  <span className="text-white/50 text-[11px]">Marges confidentielles</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">Migration Sûre</span>
                  <span className="text-white/50 text-[11px]">Import & dédoublonnage</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">3 à 5 semaines</span>
                  <span className="text-white/50 text-[11px]">Livraison clé en main</span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Excel Friction Calculator */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-white/15 bg-gradient-to-b from-[#13172e] to-[#0a0c18] p-5 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <span className="font-mono text-white/80 font-bold">Simulateur Pertes Excel</span>
                  <span className="rounded bg-rose-500/20 px-2 py-0.5 font-mono text-[10px] text-rose-300">
                    Goulot d&apos;Étranglement
                  </span>
                </div>

                <div className="mt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Collaborateurs utilisant les classeurs :</span>
                      <span className="text-indigo-300 font-bold">{collaborators} personnes</span>
                    </div>
                    <input
                      type="range"
                      min="3"
                      max="30"
                      value={collaborators}
                      onChange={(e) => setCollaborators(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono text-white/70">
                      <span>Fichiers Excel distincts en circulation :</span>
                      <span className="text-indigo-300 font-bold">{excelSheets} fichiers</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="15"
                      value={excelSheets}
                      onChange={(e) => setExcelSheets(Number(e.target.value))}
                      className="mt-2 h-1.5 w-full cursor-pointer appearance-none rounded-lg bg-white/20 accent-[#000dbf]"
                    />
                  </div>

                  <div className="rounded-xl bg-white/[0.04] p-3 font-mono text-xs border border-white/10 space-y-1.5">
                    <div className="flex justify-between text-white/70">
                      <span>Heures perdues en saisies manuelles :</span>
                      <span className="font-bold text-rose-400">{weeklyHoursWasted} h / semaine</span>
                    </div>
                    <div className="flex justify-between text-white/70">
                      <span>Coût annuel salaires gaspillés :</span>
                      <span className="font-bold text-rose-400">{annualCostWastedMad.toLocaleString("fr-FR")} MAD</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center font-mono">
                    <span className="text-[11px] text-emerald-300">Coût d&apos;une application sur mesure ByteForce :</span>
                    <p className="text-xl font-black text-emerald-400 mt-0.5">
                      25 000 à 45 000 MAD
                    </p>
                    <span className="text-[10px] text-white/50 block mt-1">
                      Rentabilisé en moins de 4 mois par les heures récupérées.
                    </span>
                  </div>

                  <Link
                    href="/contact"
                    className="block w-full rounded-xl bg-white py-3 text-center text-xs font-bold text-slate-950 transition-colors hover:bg-slate-100"
                  >
                    Demander mon audit Excel gratuit
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
              Synthèse Décisionnelle
            </span>
            <h2 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
              Quand Excel devient un frein majeur à la rentabilité de votre entreprise
            </h2>
            <p className="text-base leading-relaxed text-slate-700">
              Un tableur est conçu pour un utilisateur individuel effectuant un calcul ponctuel. Dès lors qu&apos;une
              équipe commerciale ou logistique doit partager des contacts, valider des devis et préparer des
              expéditions, les fichiers partagés entraînent inévitablement des doublons, des blocages lors des congés et
              des risques de fuite de données confidentielles.
            </p>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC DEEP DIVE: Les 4 Symptômes Critiques */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Diagnostic Opérationnel
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Les 4 symptômes qui prouvent qu&apos;il faut remplacer vos tableurs
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-rose-600">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Conflits de Versions</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Plusieurs versions d&apos;un même classeur circulent par email ou clé USB, et plus personne ne sait où
                se trouve l&apos;information exacte.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-rose-600">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Zéro Séparation des Droits</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Un stagiaire ou un commercial a accès à l&apos;intégralité des coûts d&apos;achat, des marges brutes et
                des coordonnées confidentielles de l&apos;entreprise.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-rose-600">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Erreurs de Calcul Silencieuses</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Une ligne déplacée ou une cellule écrasée détruit les totaux sans laisser de trace d&apos;audit ni
                d&apos;historique des modifications.
              </p>
            </div>

            <div className="rounded-2xl border border-rose-100 bg-rose-50/40 p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-rose-600">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Paralysie lors des Congés</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Si la personne qui détient le fichier maître est absente ou en rendez-vous, tout le traitement des
                commandes est bloqué.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. METHODOLOGY ROADMAP: Migration en 4 phases sans coupure */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Méthodologie de Migration
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Comment ByteForce migre vos fichiers sans perturber vos opérations
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xl font-bold text-[#000dbf]">Semaine 1</span>
              <h4 className="mt-2 font-bold text-slate-900 text-sm">Audit & Nettoyage</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Nous trions vos colonnes, éliminons les doublons de contacts et structurons votre référentiel propre.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xl font-bold text-[#000dbf]">Semaine 2-3</span>
              <h4 className="mt-2 font-bold text-slate-900 text-sm">Développement Ciblé</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Création d&apos;écrans ultra-rapides reprenant votre logique familière sans la lourdeur des grilles de
                tableur.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xl font-bold text-[#000dbf]">Semaine 4</span>
              <h4 className="mt-2 font-bold text-slate-900 text-sm">Test à Blanc</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Vos équipes testent l&apos;outil en parallèle pendant 7 jours pour valider la conformité de chaque
                calcul.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-xl font-bold text-[#000dbf]">Semaine 5</span>
              <h4 className="mt-2 font-bold text-slate-900 text-sm">Bascule & Formation</h4>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Formation pratique d&apos;une demi-journée. 100% de vos employés deviennent immédiatement autonomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. AUTHOR & PEER REVIEW */}
      <section className="px-5 py-16 md:px-10 lg:px-14">
        <div className="mx-auto max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <AuthorByline />
            <div className="text-xs font-mono text-slate-500">
              Publié le 31 octobre 2026 · Revue technique garantie
            </div>
          </div>
        </div>
      </section>

      {/* 6. CLOSING CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Prêt à éliminer les risques d&apos;Excel dans votre entreprise ?
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300">
            Transmettez-nous vos fichiers anonymisés ou venez nous rencontrer au Technopark de Casablanca pour un audit
            gratuit de vos flux de données.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-3.5 text-sm font-bold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Demander mon diagnostic Excel gratuit
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
