"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export function LandingSaasPage() {
  const [activeTab, setActiveTab] = useState<"multitenant" | "billing" | "onboarding" | "superadmin">("multitenant");
  const [tenantSubscribers, setTenantSubscribers] = useState<number>(80);
  const [monthlyPriceMad, setMonthlyPriceMad] = useState<number>(650);

  const mrrMad = tenantSubscribers * monthlyPriceMad;
  const arrMad = mrrMad * 12;

  const faqs = [
    {
      q: "Combien coûte le développement d'un logiciel SaaS au Maroc ?",
      a: "Pour un MVP (Minimum Viable Product) B2B commercialisable intégrant la gestion multi-entreprises, l'authentification et les paiements, le budget démarre généralement entre 45 000 MAD et 75 000 MAD. Pour une plateforme SaaS complète avec rôles avancés, tableaux de bord analytiques et intégrations d'APIs tierces, l'investissement se situe entre 85 000 MAD et 160 000 MAD en forfait fixe sans royalties.",
    },
    {
      q: "Comment fonctionne la facturation récurrente par carte bancaire au Maroc ?",
      a: "Nous intégrons les passerelles marocaines certifiées comme le CMI (Centre Monétique Interbancaire) et PayZone pour les abonnements en Dirhams (MAD), couplées à Stripe ou PayPal pour collecter des règlements en devises étrangères (EUR, USD) auprès de clients internationaux.",
    },
    {
      q: "Qui détient la propriété intellectuelle et le code source de la plateforme ?",
      a: "Vous êtes l'unique propriétaire à 100% du produit. Dès la livraison du code sur votre dépôt Git privé et le déploiement sur votre infrastructure cloud (Vercel, AWS ou hébergement souverain au Maroc), tous les droits intellectuels, marques et architectures vous appartiennent sans redevance.",
    },
    {
      q: "Quel est le délai pour lancer une première version MVP payante ?",
      a: "Grâce à notre socle d'ingénierie SaaS prêt à l'emploi (architecture multi-tenant, gestion des abonnements, interface Next.js 15), nous livrons un MVP prêt à encaisser ses premiers clients en 6 à 10 semaines.",
    },
    {
      q: "Comment garantissez-vous l'étanchéité des données entre entreprises clientes ?",
      a: "Nous appliquons le standard PostgreSQL Row Level Security (RLS) combiné à un identifiant unique (Tenant ID) injecté dans chaque requête chiffrée. Aucune fuite d'information n'est physiquement possible entre deux entreprises abonnées.",
    },
  ];

  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour ByteForce, je souhaite échanger sur un projet de création de plateforme SaaS au Maroc."
  )}`;

  return (
    <div className="w-full bg-[#f8faff] text-[#111827] selection:bg-[#000dbf] selection:text-white">
      {/* Schema.org Structured Data */}
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Solutions", path: "/solutions" },
          { name: "Développement SaaS Maroc", path: "/developpement-saas-maroc" },
        ]}
      />
      <ServiceJsonLd
        name="Développement SaaS Maroc · Création Logiciel Cloud & MVP"
        description="Studio d'ingénierie SaaS à Casablanca : conception de plateformes logicielles cloud, architecture multi-tenant, abonnements CMI/Stripe et cession 100% du code."
        path="/developpement-saas-maroc"
        serviceType="Développement Plateforme SaaS & Cloud"
        priceRange="À partir de 45 000 MAD"
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Dark Obsidian Luxury Tech with Live Multi-Tenant Cloud Architecture Mockup) */}
      <section className="relative overflow-hidden bg-[#070913] px-5 pt-12 pb-24 text-white md:px-10 md:pt-16 md:pb-32 lg:px-14">
        {/* Ambient lighting glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 right-1/4 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-indigo-600/25 via-blue-600/15 to-transparent blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 -left-20 h-[450px] w-[450px] rounded-full bg-purple-500/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-2 font-mono text-xs text-white/50">
            <Link href="/" className="transition-colors hover:text-white">
              Accueil
            </Link>
            <span>/</span>
            <Link href="/solutions" className="transition-colors hover:text-white">
              Solutions
            </Link>
            <span>/</span>
            <span className="font-semibold text-white/90">Développement SaaS Maroc</span>
          </nav>

          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Left Column: Headlines & Actions */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                <span className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                <span className="font-mono text-[11px] tracking-wider uppercase text-white/95">
                  Studio SaaS Cloud · Technopark Casablanca
                </span>
              </div>

              <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
                Développement SaaS au Maroc : créez votre plateforme logicielle rentable et scalable.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                Transformez votre expertise métier en un actif logiciel générateur de revenus récurrents (MRR). ByteForce
                conçoit votre plateforme SaaS B2B sur mesure : <strong>architecture multi-tenant étanche</strong>,
                passerelles de paiement <strong>CMI & Stripe</strong>, tunnels d&apos;onboarding fluides et{" "}
                <strong>cession intégrale du code source</strong>.
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 shadow-xl shadow-blue-950/40 transition-all duration-300 hover:bg-slate-100 active:scale-95"
                >
                  <span>Chiffrer mon projet SaaS sous 24h</span>
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
                  <span>Échange Direct WhatsApp</span>
                </a>
              </div>

              {/* Trust Indicators Bar */}
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4 font-mono text-xs text-white/70">
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">6 à 10 semaines</span>
                  <span className="text-white/50 text-[11px]">MVP commercialisable</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">PostgreSQL RLS</span>
                  <span className="text-white/50 text-[11px]">Multi-Tenant cloisonné</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">CMI & Stripe</span>
                  <span className="text-white/50 text-[11px]">Encaissement MAD / Devises</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-sm">100% Cédé</span>
                  <span className="text-white/50 text-[11px]">Zéro royalties ni lock-in</span>
                </div>
              </div>
            </div>

            {/* Right Column: Multi-Tenant Architecture Visualization */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto w-full max-w-lg rounded-2xl border border-white/15 bg-gradient-to-b from-[#131629] to-[#0a0c18] p-4 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-mono text-white/80 text-[11px]">cluster-prod.byteforce-saas.ma</span>
                  </div>
                  <span className="rounded bg-indigo-500/20 px-2 py-0.5 font-mono text-[10px] text-indigo-300">
                    Next.js 15 & Docker
                  </span>
                </div>

                {/* Cloud Routing Tier */}
                <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/60">
                    <span>Edge Router & Load Balancer</span>
                    <span className="text-emerald-400">99.98% Uptime</span>
                  </div>
                  <div className="mt-1 font-mono text-xs text-white">tenant.domaine-saas.ma → Ingress SSL/TLS</div>
                </div>

                {/* Multi-Tenant Containers */}
                <div className="mt-3 space-y-2">
                  <div className="rounded-lg border border-indigo-500/30 bg-indigo-950/40 p-2.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-indigo-200 font-bold">🏢 Tenant A : Atlas Fleet Maroc</span>
                      <span className="text-emerald-400 font-semibold">1 420 comptes actifs</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-white/50 font-mono">
                      <span>PostgreSQL schema: tenant_atlas (RLS)</span>
                      <span className="text-indigo-300">Abonnement Pro MAD</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-purple-500/30 bg-purple-950/40 p-2.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-purple-200 font-bold">🏢 Tenant B : Tanger Logistics Hub</span>
                      <span className="text-emerald-400 font-semibold">890 comptes actifs</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-white/50 font-mono">
                      <span>PostgreSQL schema: tenant_tanger (RLS)</span>
                      <span className="text-purple-300">Abonnement Enterprise</span>
                    </div>
                  </div>

                  <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/40 p-2.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-emerald-200 font-bold">🏢 Tenant C : Cabinet Audit Casablanca</span>
                      <span className="text-amber-300 font-semibold">Essai 14 jours (Free Trial)</span>
                    </div>
                    <div className="mt-1 flex items-center justify-between text-[10px] text-white/50 font-mono">
                      <span>Conversion automatique le 05/11</span>
                      <span className="text-emerald-400">Passerelle CMI active</span>
                    </div>
                  </div>
                </div>

                {/* Subsystem Bottom Bar */}
                <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-white/40">
                  <span>🔒 Chiffrement AES-256</span>
                  <span className="text-emerald-400">Base PostgreSQL RLS Isolé</span>
                  <span>⚡ Backup quotidien automatique</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECT ANSWER FEATURED SNIPPET (Search Intent Box) */}
      <section className="relative -mt-8 px-5 md:px-10 lg:px-14">
        <div className="mx-auto max-w-5xl rounded-2xl border-l-4 border-[#000dbf] bg-white p-6 shadow-xl ring-1 ring-slate-900/5 md:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                Synthèse pour fondateurs & investisseurs · Chiffres Clés
              </span>
              <h2 className="text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
                Combien coûte la création d&apos;un SaaS au Maroc et quels sont les délais ?
              </h2>
              <p className="text-base leading-relaxed text-slate-700">
                La création d&apos;un logiciel SaaS (Software as a Service) au Maroc coûte généralement entre{" "}
                <strong>45 000 MAD et 180 000 MAD</strong> selon l&apos;envergure fonctionnelle, avec un délai moyen de
                livraison de <strong>6 à 10 semaines</strong> pour un MVP commercialisable prêt à encaisser ses premiers
                abonnés. ByteForce conçoit votre plateforme avec une architecture multi-tenant étanche, l&apos;encaissement
                automatique en Dirhams via le CMI ou à l&apos;international via Stripe, et vous cède 100% de la propriété
                intellectuelle du code source.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#000dbf] px-5 py-3 text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#00099a]"
            >
              Évaluer mon SaaS
            </Link>
          </div>
        </div>
      </section>

      {/* 3. ASYMMETRIC VALUE SECTION (MRR & ARR Dynamic Simulator) */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
                Modèle Économique & Rentabilité
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Le modèle SaaS au Maroc : pourquoi la récurrence bat la prestation ponctuelle
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                Vendre du conseil, des biens physiques ou du temps humain limite structurellement la marge d&apos;une
                entreprise. À l&apos;inverse, une plateforme SaaS B2B bien conçue s&apos;appuie sur un coût marginal de
                distribution quasi nul : chaque nouvel abonné payant vient directement gonfler votre marge opérationnelle.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Chiffre d&apos;affaires mensuel récurrent (MRR)</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Une trésorerie prévisible dès le premier jour du mois, réduisant l&apos;anxiété commerciale et
                      facilitant le recrutement de vos équipes.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Valorisation d&apos;entreprise démultipliée</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Une entreprise SaaS se valorise auprès d&apos;investisseurs ou lors d&apos;une cession entre 4x et
                      8x son ARR (Annual Recurring Revenue), contre 1x à 2x pour une agence traditionnelle.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 rounded-xl border border-indigo-100 bg-indigo-50/50 p-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#000dbf] text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Rayonnement Maroc & International</h3>
                    <p className="text-xs text-slate-600 mt-1">
                      Facturez vos clients marocains en Dirhams via le CMI et vos clients africains ou européens en Euros
                      via Stripe sans changer de système.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive MRR Simulator */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-xl md:p-8">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
                    Simulateur de Revenus SaaS
                  </span>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                    Modèle B2B Maroc
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  Calculez votre MRR & ARR prévisionnels
                </h3>

                <div className="mt-6 space-y-5">
                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700">
                      <span>Nombre d&apos;entreprises abonnées :</span>
                      <span className="font-bold text-[#000dbf]">{tenantSubscribers} clients</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="300"
                      step="5"
                      value={tenantSubscribers}
                      onChange={(e) => setTenantSubscribers(Number(e.target.value))}
                      className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#000dbf]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>10 clients</span>
                      <span>150</span>
                      <span>300 clients</span>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-sm font-semibold text-slate-700">
                      <span>Tarif mensuel par abonné (MAD/mois) :</span>
                      <span className="font-bold text-[#000dbf]">{monthlyPriceMad} MAD/mois</span>
                    </div>
                    <input
                      type="range"
                      min="200"
                      max="2500"
                      step="50"
                      value={monthlyPriceMad}
                      onChange={(e) => setMonthlyPriceMad(Number(e.target.value))}
                      className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-200 accent-[#000dbf]"
                    />
                    <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1">
                      <span>200 MAD</span>
                      <span>1 200 MAD</span>
                      <span>2 500 MAD</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 font-mono">
                    <div>
                      <span className="text-[11px] text-slate-500">MRR Mensuel Récurrent</span>
                      <p className="text-xl font-extrabold text-[#000dbf] sm:text-2xl">
                        {mrrMad.toLocaleString("fr-FR")} MAD
                      </p>
                      <span className="text-[10px] text-slate-400">Chaque mois sur votre compte</span>
                    </div>
                    <div>
                      <span className="text-[11px] text-slate-500">ARR Annuel Consolidé</span>
                      <p className="text-xl font-extrabold text-emerald-600 sm:text-2xl">
                        {arrMad.toLocaleString("fr-FR")} MAD
                      </p>
                      <span className="text-[10px] text-emerald-700 font-semibold">Chiffre d&apos;affaires / an</span>
                    </div>
                  </div>

                  <div className="rounded-xl border border-blue-200 bg-blue-50/60 p-4 text-center">
                    <span className="text-xs text-blue-900 font-medium">Valorisation estimée de l&apos;actif logiciel (5x ARR) :</span>
                    <p className="text-2xl font-black text-[#000dbf] sm:text-3xl">
                      ~ {(arrMad * 5).toLocaleString("fr-FR")} MAD
                    </p>
                    <p className="mt-1 text-[11px] text-blue-700">
                      Un capital immatériel solide valorisable au bilan de votre société.
                    </p>
                  </div>
                </div>

                <div className="mt-6 text-center">
                  <Link
                    href="/contact"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#000dbf]"
                  >
                    Lancer l&apos;étude de faisabilité de mon SaaS
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE MODULE SHOWCASE (Tabbed Product Capabilities) */}
      <section className="border-t border-slate-200 bg-slate-50/70 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-bold text-[#000dbf]">
              Les 4 Piliers Techniques
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              L&apos;infrastructure d&apos;un SaaS taillé pour franchir les paliers de croissance
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Chaque couche technique est modélisée pour supporter 10 000 utilisateurs sans réécrire le code.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-2">
            {[
              { id: "multitenant", label: "Isolation Multi-Tenant (RLS)" },
              { id: "billing", label: "Moteur de Facturation CMI & Stripe" },
              { id: "onboarding", label: "Onboarding Autonome & Invitations" },
              { id: "superadmin", label: "Console Super-Admin & Télémétrie" },
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
            {activeTab === "multitenant" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-[#000dbf]">01 · Sécurité & Scalabilité</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Cloisonnement étanche PostgreSQL Row Level Security
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Vos clients professionnels n&apos;accepteront jamais de confier leurs données si le risque de fuite
                    vers un concurrent existe. Nous configurons une isolation matérielle et logicielle stricte : chaque
                    requête SQL est bornée par le <code>tenant_id</code> certifié de la session active.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Chiffrement SSL/TLS de bout en bout et au repos (AES-256)</li>
                    <li className="flex items-center gap-2">✓ Sauvegardes continues et restauration point-in-time</li>
                    <li className="flex items-center gap-2">✓ Conformité CNDP marocaine sur la protection des données personnelles</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0c0f1d] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>PostgreSQL RLS · Tenant Boundary Policy</span>
                    <span className="text-emerald-400">ENFORCED</span>
                  </div>
                  <pre className="mt-3 overflow-x-auto text-[11px] text-indigo-300">
                    {`-- RLS Policy: Étanchéité absolue des données
CREATE POLICY tenant_isolation_policy ON organizations
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant_id'))
  WITH CHECK (tenant_id = current_setting('app.current_tenant_id'));`}
                  </pre>
                  <div className="mt-3 text-[10px] text-white/40 border-t border-white/10 pt-2">
                    ✓ Testé contre 100% des injections inter-comptes
                  </div>
                </div>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-emerald-600">02 · Monétisation Sans Friction</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Prélèvements récurrents en Dirhams (CMI) et Devises (Stripe)
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Le coeur d&apos;un SaaS est sa machine à encaisser. Nous paramétrons les abonnements mensuels et annuels,
                    la gestion des échecs de paiement avec relances automatiques par email (dunning) et l&apos;édition
                    instantanée de factures acquittées conformes DGI.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Paiement carte marocaine (CMI / PayZone) et internationale</li>
                    <li className="flex items-center gap-2">✓ Upgrades de forfait et facturation au prorata sans friction</li>
                    <li className="flex items-center gap-2">✓ Webhooks temps réel pour bloquer ou réactiver les comptes automatiquement</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-emerald-900 bg-emerald-950 p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-emerald-800 pb-2 text-emerald-200">
                    <span>Payment Gateway Webhook Router</span>
                    <span className="text-emerald-400">200 OK</span>
                  </div>
                  <div className="mt-3 space-y-2 text-[11px]">
                    <div className="rounded bg-emerald-900/60 p-2">
                      <span className="text-emerald-300 font-bold">event: invoice.payment_succeeded</span>
                      <p className="text-emerald-100 font-sans mt-0.5">
                        Client: Société Agri-Bio Agadir · Montant: 1 200,00 MAD (TTC)
                      </p>
                      <span className="text-[10px] text-emerald-400">Facture DGI générée · Accès prolongé de 30 jours</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "onboarding" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-indigo-600">03 · Activation Utilisateur</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Inscriptions fluides et invitations d&apos;équipes instantanées
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Si un utilisateur met plus de 2 minutes à comprendre comment fonctionne votre logiciel, vous l&apos;avez
                    perdu. Nous concevons un tunnel d&apos;onboarding guidé, la vérification par email ou SMS, et
                    l&apos;invitation en 1 clic de collaborateurs avec gestion fine des rôles (Admin, Membre, Lecture seule).
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Authentification sécurisée OAuth (Google, Microsoft) ou mot de passe</li>
                    <li className="flex items-center gap-2">✓ Périodes d&apos;essai gratuit de 7 ou 14 jours sans carte bancaire</li>
                    <li className="flex items-center gap-2">✓ Checklists interactives guidant le premier succès de l&apos;utilisateur</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-200 bg-slate-100 p-5 font-mono text-xs text-slate-800 shadow-inner">
                  <div className="flex justify-between border-b border-slate-300 pb-2 text-slate-600 font-bold">
                    <span>TEAM WORKSPACE / INVITE FLOW</span>
                    <span className="text-[#000dbf]">SELF-SERVE</span>
                  </div>
                  <div className="mt-3 bg-white p-4 rounded-lg border border-slate-200 space-y-2">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-bold">amin.tazi@entreprise.ma</span>
                      <span className="rounded bg-blue-100 text-[#000dbf] px-2 py-0.5 text-[10px]">Rôle : Gestionnaire</span>
                    </div>
                    <div className="flex justify-between items-center text-[11px] pt-2 border-t border-slate-100">
                      <span className="font-bold">yassine.k@entreprise.ma</span>
                      <span className="rounded bg-slate-100 text-slate-600 px-2 py-0.5 text-[10px]">Rôle : Commercial</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "superadmin" && (
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase text-purple-600">04 · Contrôle Opérationnel</span>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Console Super-Admin : votre tour de contrôle SaaS
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Prenez le volant de votre entreprise logicielle : visualisez en temps réel l&apos;évolution de vos abonnés,
                    les taux de désabonnement (churn), les consommations de stockage et suspendez ou réactivez un compte en
                    un clic en cas d&apos;impayé.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2">✓ Métriques SaaS indispensables : MRR, Churn, CAC, LTV</li>
                    <li className="flex items-center gap-2">✓ Possibilité d&apos;usurper temporairement un compte pour assister un client (Impersonate)</li>
                    <li className="flex items-center gap-2">✓ Journal d&apos;audit complet des actions critiques</li>
                  </ul>
                </div>
                <div className="lg:col-span-6 rounded-xl border border-slate-800 bg-[#0b0d1b] p-5 text-white font-mono text-xs shadow-inner">
                  <div className="flex justify-between border-b border-white/10 pb-2 text-white/50">
                    <span>SUPER-ADMIN TELEMETRY / CASABLANCA</span>
                    <span className="text-emerald-400">STATUS: HEALTHY</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mt-3">
                    <div className="rounded bg-white/5 p-2">
                      <span className="text-[10px] text-white/40">Total Abonnés</span>
                      <p className="text-base font-bold text-white">142 PME</p>
                    </div>
                    <div className="rounded bg-white/5 p-2">
                      <span className="text-[10px] text-white/40">Taux de Churn</span>
                      <p className="text-base font-bold text-emerald-400">1.8% / mois</p>
                    </div>
                    <div className="rounded bg-white/5 p-2">
                      <span className="text-[10px] text-white/40">MRR Total</span>
                      <p className="text-base font-bold text-indigo-300">92 300 MAD</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 5. COMPARISON TABLE: ByteForce vs No-Code vs Freelances */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Comparatif d&apos;Ingénierie
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Pourquoi confier votre SaaS à ByteForce plutôt qu&apos;au No-Code ou à l&apos;Offshore ?
            </h2>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-lg">
            <table className="w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 font-mono text-xs text-slate-700">
                <tr>
                  <th className="py-4 px-6">Critères d&apos;évaluation</th>
                  <th className="py-4 px-6 text-[#000dbf] font-bold bg-blue-50/60">ByteForce SaaS Studio</th>
                  <th className="py-4 px-6">Outils No-Code (Bubble, Webflow)</th>
                  <th className="py-4 px-6">Freelances Offshore</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Propriété et portabilité du code</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">100% Cédé (Dépôt Git & PostgreSQL)</td>
                  <td className="py-4 px-6 text-rose-600">Prisonnier de la plateforme (Lock-in)</td>
                  <td className="py-4 px-6">Code souvent opaque et non documenté</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Performances & passage à l&apos;échelle</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">Architecture Next.js 15 & Cloud scalable</td>
                  <td className="py-4 px-6 text-slate-500">Ralentissements dès 500 utilisateurs</td>
                  <td className="py-4 px-6 text-slate-500">Imprévisible sans supervision</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Passerelles de paiement marocaines</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">CMI, PayZone & Stripe natifs</td>
                  <td className="py-4 px-6 text-rose-600">Impossible ou bricolages instables</td>
                  <td className="py-4 px-6 text-slate-500">Méconnaissance du secteur bancaire local</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 font-semibold text-slate-900">Présence physique et accompagnement</td>
                  <td className="py-4 px-6 font-bold text-emerald-700 bg-blue-50/30">Technopark Casablanca · Contrat Maroc</td>
                  <td className="py-4 px-6 text-slate-500">Support forum américain</td>
                  <td className="py-4 px-6 text-rose-600">Disparition fréquente en cours de route</td>
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
              Formules de développement SaaS transparentes
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Des tarifs forfaitaires sans surprise, incluant l&apos;architecture, l&apos;interface UI/UX et la mise en production.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {/* Tier 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                SaaS MVP Cadré
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Validation Marché & Core Value</h3>
              <p className="mt-2 text-xs text-slate-500">
                Pour tester rapidement une idée de SaaS auprès de vos 20 premiers clients payants.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">45 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 6 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Architecture multi-tenant essentielle</li>
                <li className="flex items-center gap-2">✓ Tunnel d&apos;inscription et onboarding</li>
                <li className="flex items-center gap-2">✓ Intégration paiement Stripe ou CMI</li>
                <li className="flex items-center gap-2">✓ 1 fonctionnalité coeur métier développée</li>
                <li className="flex items-center gap-2">✓ Cession 100% du code source</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Cadrer mon MVP
              </Link>
            </div>

            {/* Tier 2 (Highlighted) */}
            <div className="relative rounded-2xl border-2 border-[#000dbf] bg-white p-7 shadow-xl ring-4 ring-blue-50">
              <div className="absolute -top-3.5 right-6 rounded-full bg-[#000dbf] px-3.5 py-1 text-[11px] font-bold text-white uppercase tracking-wider">
                Le Standard B2B
              </div>
              <span className="rounded-full bg-blue-50 px-3 py-1 font-mono text-xs font-bold text-[#000dbf]">
                SaaS Commercial Pro
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Plateforme Complète & Scalable</h3>
              <p className="mt-2 text-xs text-slate-500">
                La solution complète pour commercialiser un produit SaaS robuste aux entreprises marocaines.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-[#000dbf]">78 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Forfait fixe · Délai 8 à 10 semaines</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2 font-semibold">✓ Tout le socle MVP SaaS</li>
                <li className="flex items-center gap-2 font-semibold">✓ Double passerelle CMI (MAD) + Stripe (Devises)</li>
                <li className="flex items-center gap-2 font-semibold">✓ Rôles hiérarchiques (Admin, Manager, Utilisateur)</li>
                <li className="flex items-center gap-2">✓ Factures DGI automatiques & gestion des impayés</li>
                <li className="flex items-center gap-2">✓ Console Super-Admin & télémétrie des abonnés</li>
                <li className="flex items-center gap-2">✓ Design Figma sur mesure premium</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl bg-[#000dbf] py-3 text-center text-xs font-bold text-white shadow-md transition-colors hover:bg-[#00099a]"
              >
                Réserver mon cadrage technique
              </Link>
            </div>

            {/* Tier 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:shadow-lg">
              <span className="rounded-full bg-slate-100 px-3 py-1 font-mono text-xs font-bold text-slate-800">
                SaaS Enterprise
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">Plateforme Haute Disponibilité</h3>
              <p className="mt-2 text-xs text-slate-500">
                Produits complexes avec intelligence artificielle, APIs ouvertes ou réseaux de franchises.
              </p>
              <div className="my-6">
                <span className="text-3xl font-extrabold text-slate-950">Dès 135 000 MAD</span>
                <span className="block text-xs text-slate-400 font-mono mt-1">Architecture sur mesure</span>
              </div>
              <ul className="space-y-2.5 text-xs text-slate-700 border-t border-slate-100 pt-5">
                <li className="flex items-center gap-2">✓ Cluster Kubernetes / Conteneurs Docker</li>
                <li className="flex items-center gap-2">✓ APIs publiques documentées (Swagger / OpenAPI)</li>
                <li className="flex items-center gap-2">✓ Connexion SSO SAML / Okta / Azure AD</li>
                <li className="flex items-center gap-2">✓ Modules IA et automatisation avancés</li>
                <li className="flex items-center gap-2">✓ SLA 99.9% avec astreinte technique</li>
              </ul>
              <Link
                href="/contact"
                className="mt-8 block w-full rounded-xl border border-slate-300 py-3 text-center text-xs font-bold text-slate-900 transition-colors hover:bg-slate-100"
              >
                Échanger avec un CTO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. METHODOLOGY IN 4 SPRINTS */}
      <section className="px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Méthodologie de Lancement
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              De l&apos;idée au premier paiement client en 4 sprints
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">01</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Cadrage du Core Value</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Isolation de la fonctionnalité essentielle qui résout 80% du problème de vos prospects cibles. Élimination
                du superflu pour accélérer le lancement.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">02</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Maquettes UI/UX Figma</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Conception d&apos;une interface produit intuitive aux standards internationaux (Stripe, Linear).
                Validation des parcours d&apos;inscription et de paiement.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">03</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Développement Full-Stack</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Programmation avec Next.js 15, PostgreSQL et Docker. Intégration des webhooks bancaires CMI et Stripe
                et tests d&apos;étanchéité multi-tenant.
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <span className="font-mono text-2xl font-black text-[#000dbf]">04</span>
              <h3 className="mt-3 font-bold text-slate-900 text-base">Déploiement & Scaling</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Mise en ligne sur cloud haute disponibilité, paramétrage des alertes de télémétrie et passation
                intégrale du code source sur votre dépôt Git.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION */}
      <section className="border-t border-slate-200 bg-slate-50 px-5 py-20 md:px-10 md:py-28 lg:px-14">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#000dbf]">
              Questions Fréquentes
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Tout ce que vous devez savoir avant de lancer un SaaS au Maroc
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-bold text-slate-900">{faq.q}</h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. CLOSING LUXURY CTA BANNER */}
      <section className="relative overflow-hidden bg-[#070913] px-5 py-20 text-white md:px-10 md:py-28 lg:px-14">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 left-1/4 h-[400px] w-[400px] rounded-full bg-indigo-600/20 blur-3xl"
        />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono text-white/80">
            📍 Technopark Casablanca · Équipe d&apos;ingénieurs seniors dédiée
          </div>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Prêt à transformer votre idée en une plateforme SaaS rentable ?
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-base text-slate-300 md:text-lg">
            Planifiez une session de cadrage technique gratuite de 30 minutes. Nous évaluons ensemble votre modèle, votre
            architecture et vos délais de mise sur le marché.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-slate-950 shadow-xl transition-all hover:bg-slate-100 active:scale-95"
            >
              <span>Demander mon étude SaaS gratuite</span>
              <span>→</span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-7 py-4 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition-colors hover:bg-emerald-500/20"
            >
              <span>Échanger sur WhatsApp</span>
              <span>💬</span>
            </a>
          </div>

          <div className="mt-14 max-w-xl mx-auto text-left rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl">
            <h3 className="text-sm font-mono font-bold text-white/80 uppercase tracking-wider mb-4 text-center">
              Ou décrivez votre projet pour être contacté sous 2h ouvrées :
            </h3>
            <LeadForm />
          </div>
        </div>
      </section>

      {/* Internal SEO links footer */}
      <section className="border-t border-slate-200 bg-white px-5 py-12 md:px-10 lg:px-14">
        <div className="mx-auto max-w-7xl">
          <span className="font-mono text-xs font-bold uppercase text-slate-400">Pages & Ressources Liées</span>
          <div className="mt-4 flex flex-wrap gap-3">
            {[
              { href: "/crm/logiciel-crm-personnalise", label: "Logiciel CRM Sur Mesure" },
              { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement Logiciel Maroc" },
              { href: "/developpement-erp-maroc", label: "Développement ERP Maroc" },
              { href: "/insights/comment-creer-un-saas-au-maroc", label: "Guide : Créer un SaaS au Maroc" },
              { href: "/insights/combien-coute-un-logiciel-sur-mesure", label: "Prix d'un logiciel sur mesure" },
              { href: "/maroc/casablanca", label: "Développeur Logiciel Casablanca" },
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
