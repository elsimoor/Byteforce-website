import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { OutilsHeroGlobe } from "@/components/outils-hero-globe";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const meta = seoMeta["/outils"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/outils" },
  openGraph: openGraph("/outils", meta.title, meta.description),
  keywords: [
    "byteforce free tools",
    "outils gratuits developpeur",
    "outils seo gratuit maroc",
    "convertisseur claude artifact",
    "audit technique seo",
    "suivi projet logiciel",
  ],
};

const chips = ["free tools", "outils gratuits", "audit SEO gratuit", "convertisseur Markdown"];

function Arrow() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function OutilsHubPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "ByteForce Free Tools - Outils Gratuits",
    description: meta.description,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Artifact Claude vers MD",
        url: `${site.url}/outils/claude-artifact-to-markdown`,
        description:
          "Convertissez et téléchargez instantanément les artefacts d'Anthropic Claude en fichiers Markdown (.md) propres.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Audit SEO & Vitesse Gratuit",
        url: `${site.url}/audit`,
        description: "On lit la page d'accueil : balises, performance, Core Web Vitals, indexation mobile et accessibilité.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Où en est le travail",
        url: `${site.url}/ou-en-est-le-projet`,
        description: "Cinq écrans pour faire le point sur un développement en cours ou à reprendre.",
      },
    ],
  };

  return (
    <article className="w-full bg-surface text-[#0B0B1A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Outils Gratuits", path: "/outils" }]} />

      <div className="border-b border-[#D6DBF2] bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center justify-between gap-x-6 gap-y-1 px-5 py-2.5 font-mono text-xs tracking-[0.04em] uppercase sm:px-8 lg:px-10">
          <p className="font-medium text-primary">ByteForce Free Tools · Outils Gratuits</p>
          <p className="text-[#4B5070]">3 outils disponibles · 100% sur cet appareil</p>
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-[#D6DBF2] bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(#E3E7FA 1px, transparent 1px), linear-gradient(90deg, #E3E7FA 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <OutilsHeroGlobe />
        <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-wrap items-end gap-12 px-5 py-12 sm:px-8 lg:px-10 lg:pt-16 lg:pb-18">
          <div className="flex min-w-0 max-w-[36rem] flex-[1_1_36rem] flex-col gap-6">
            <nav aria-label="Fil d'Ariane" className="flex items-center gap-2.5 font-mono text-[13px] text-[#4B5070]">
              <Link href="/" className="underline decoration-[#4B5070] underline-offset-[3px]">
                Accueil
              </Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#0B0B1A]">Outils</span>
            </nav>
            <h1 className="font-headline text-[clamp(3.25rem,8.8vw,8rem)] leading-[0.95] font-extrabold tracking-[-0.045em]">
              Outils gratuits<span className="text-primary">.</span>
            </h1>
            <p className="max-w-[30rem] text-lg text-[#2A2E4A]">
              Trois utilitaires rapides, sans inscription et sans publicité. Le traitement s&apos;exécute directement sur votre appareil. À aucun moment vos documents, vos codes sources ou vos données ne sont conservés sur nos serveurs.
            </p>
            <ul className="flex max-w-[30rem] flex-wrap gap-x-6 gap-y-2.5 font-mono text-[13px]">
              {["Aucun compte requis", "Traitement in-browser", "Confidentialité 100% garantie"].map((item) => (
                <li key={item} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
            <ul className="flex flex-wrap gap-2 pt-1">
              {chips.map((chip) => (
                <li key={chip} className="border border-primary bg-white px-3 py-1.5 font-mono text-xs font-medium text-primary">
                  {chip}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex w-full min-w-0 max-w-[380px] flex-[1_1_280px] flex-col border border-[#0B0B1A] bg-white">
            {[
              ["3", "outils disponibles"],
              ["100%", "sur cet appareil"],
              ["0", "compte, 0 publicité"],
            ].map(([value, label], index) => (
              <div key={label} className={`flex items-baseline gap-4 px-6 py-5 ${index < 2 ? "border-b border-[#D6DBF2]" : ""}`}>
                <p className="font-headline text-5xl leading-none font-extrabold tracking-[-0.04em] text-primary">{value}</p>
                <p className="font-mono text-xs tracking-[0.04em] text-[#4B5070] uppercase">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1200px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="flex flex-wrap items-stretch gap-9">
          <article className="flex min-w-0 flex-[1_1_340px] flex-col gap-5 border border-[#0B0B1A] bg-primary p-7 text-white shadow-[8px_8px_0_#0B0B1A]">
            <p className="font-mono text-[13px] text-[#C9D0FF]">01 / 03</p>
            <div className="flex justify-between gap-2.5 font-mono text-[11px] tracking-[0.05em] text-[#C9D0FF] uppercase">
              <span>Outil IA & Markdown</span>
              <span>100% local</span>
            </div>
            <h2 className="font-headline text-[2rem] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <Link href="/outils/claude-artifact-to-markdown">Artifact Claude vers MD</Link>
            </h2>
            <p className="text-[15px] text-[#E4E8FF]">
              Convertissez et téléchargez instantanément les artefacts d&apos;Anthropic Claude en fichiers Markdown (.md) propres. Import par URL ou copier-coller direct sans compte et sans stockage serveur.
            </p>
            <div className="border border-[#0B0B1A] bg-[#0B0B1A] font-mono text-xs leading-loose">
              <p className="border-b border-[#2A2E4A] px-3.5 py-2 text-[11px] text-[#B8BEE0]">artifact.html → rapport.md</p>
              <p className="px-3.5 py-3 text-[#B8BEE0]">
                {"<h1>Rapport</h1>"}
                <br />
                {"<script>…</script>"}
              </p>
              <p className="border-t border-[#2A2E4A] px-3.5 py-3 text-white">
                # Rapport
                <br />
                <span className="text-[#B8BEE0]">Texte…</span>
              </p>
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-[#4A4AE0] pt-4 text-sm">
              {[
                "Nettoyage automatique du HTML et balises parasites",
                "Téléchargement direct en .md avec nom sur mesure",
                "Aperçu mis en forme & comptage de mots en temps réel",
                "100% exécuté dans le navigateur, confidentialité totale",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-white" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link href="/outils/claude-artifact-to-markdown" className="mt-auto flex min-h-11 items-center justify-between bg-white px-5 py-3.5 text-[15px] font-semibold text-primary">
              Ouvrir le convertisseur
              <Arrow />
            </Link>
          </article>

          <article className="flex min-w-0 flex-[1_1_340px] flex-col gap-5 border border-[#0B0B1A] bg-white p-7 shadow-[8px_8px_0_var(--color-primary)]">
            <p className="font-mono text-[13px] text-primary">02 / 03</p>
            <div className="flex justify-between gap-2.5 font-mono text-[11px] tracking-[0.05em] text-[#4B5070] uppercase">
              <span>Diagnostic Technique</span>
              <span>60 secondes</span>
            </div>
            <h2 className="font-headline text-[2rem] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <Link href="/audit">Audit SEO & Vitesse Gratuit</Link>
            </h2>
            <p className="text-[15px] text-[#2A2E4A]">
              On lit la page d&apos;accueil de votre site : balises, performance, Core Web Vitals, indexation mobile et accessibilité. Aucun compte demandé, diagnostic immédiat.
            </p>
            <div className="flex flex-col gap-3 border border-[#D6DBF2] bg-surface p-4 font-mono text-[11px]">
              {[
                ["Performance", "82%"],
                ["Title / H1 / méta", "64%"],
                ["Accessibilité", "74%"],
                ["Indexation mobile", "90%"],
              ].map(([label, width]) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-[108px] shrink-0">{label}</span>
                  <span className="h-2 flex-1 bg-[#DDE2F7]">
                    <span className="block h-full bg-primary" style={{ width }} />
                  </span>
                </div>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-[#D6DBF2] pt-4 text-sm">
              {[
                "Mesure de la performance réelle & temps de chargement",
                "Vérification balises Title, H1 et méta-descriptions",
                "Lecture par une machine (LLM / IA) et accessibilité",
                "Priorisation des blocages techniques à corriger",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link href="/audit" className="mt-auto flex min-h-11 items-center justify-between bg-primary px-5 py-3.5 text-[15px] font-semibold text-white">
              Auditer un site
              <Arrow />
            </Link>
          </article>

          <article className="flex min-w-0 flex-[1_1_340px] flex-col gap-5 border border-[#0B0B1A] bg-white p-7 shadow-[8px_8px_0_var(--color-primary)]">
            <p className="font-mono text-[13px] text-primary">03 / 03</p>
            <div className="flex justify-between gap-2.5 font-mono text-[11px] tracking-[0.05em] text-[#4B5070] uppercase">
              <span>Espace Projet</span>
              <span>5 étapes</span>
            </div>
            <h2 className="font-headline text-[2rem] leading-[1.05] font-extrabold tracking-[-0.03em]">
              <Link href="/ou-en-est-le-projet">Où en est le travail</Link>
            </h2>
            <p className="text-[15px] text-[#2A2E4A]">
              Cinq écrans pour faire le point sur un développement en cours ou à reprendre. Les réponses restent sur votre appareil. À la fin, la liste dit ce qu&apos;il reste et le brief pour l&apos;IA est prêt.
            </p>
            <div className="flex gap-1.5 border border-[#D6DBF2] bg-surface p-4">
              {["1", "2", "3", "4", "5"].map((step) => (
                <span
                  key={step}
                  className={`flex h-9 flex-1 items-center justify-center font-mono text-xs ${step === "1" || step === "2" ? "bg-primary text-white" : step === "3" ? "border border-primary text-primary" : "border border-[#AEB6E6] text-[#4B5070]"}`}
                >
                  {step}
                </span>
              ))}
            </div>
            <ul className="flex flex-col gap-2.5 border-t border-[#D6DBF2] pt-4 text-sm">
              {[
                "Diagnostic de ce qui tient déjà et de ce qui bloque",
                "Checklist des points critiques avant mise en ligne",
                "Brief prêt à copier pour ChatGPT ou Claude",
                "Sauvegarde automatique sur votre navigateur",
              ].map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <Link href="/ou-en-est-le-projet" className="mt-auto flex min-h-11 items-center justify-between bg-primary px-5 py-3.5 text-[15px] font-semibold text-white">
              Faire le point
              <Arrow />
            </Link>
          </article>
        </div>
      </section>

      <section className="border-y border-[#D6DBF2] bg-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap gap-10 px-5 py-16 sm:px-8 lg:gap-16 lg:px-10">
          <div className="flex min-w-0 flex-[1_1_300px] flex-col gap-3.5">
            <p className="font-mono text-xs tracking-[0.05em] text-primary uppercase">Confidentialité</p>
            <h2 className="font-headline text-4xl leading-[1.05] font-extrabold tracking-[-0.035em]">Rien n&apos;est conservé sur nos serveurs.</h2>
          </div>
          <div className="flex min-w-0 flex-[2_1_520px] flex-wrap border border-[#D6DBF2]">
            {[
              ["01", "Aucun compte requis", "Sans inscription et sans publicité."],
              ["02", "Traitement in-browser", "Le traitement s'exécute directement sur votre appareil."],
              ["03", "Confidentialité 100% garantie", "À aucun moment vos documents, vos codes sources ou vos données ne sont conservés sur nos serveurs."],
            ].map(([n, title, text], index) => (
              <div key={n} className={`flex min-w-0 flex-[1_1_180px] flex-col gap-2.5 p-6 ${index < 2 ? "border-b border-[#D6DBF2] md:border-r md:border-b-0" : ""}`}>
                <p className="font-mono text-xs text-primary">{n}</p>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="text-sm text-[#4B5070]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary text-white">
        <div className="mx-auto flex w-full max-w-[1200px] flex-wrap items-center gap-8 px-5 py-16 sm:px-8 lg:gap-14 lg:px-10">
          <div className="flex min-w-0 flex-[2_1_460px] flex-col gap-4">
            <h2 className="font-headline text-4xl leading-[1.05] font-extrabold tracking-[-0.035em]">Besoin d&apos;un logiciel ou d&apos;une automatisation sur mesure ?</h2>
            <p className="max-w-[680px] text-base text-[#E4E8FF]">
              ByteForce développe des logiciels métier, CRM personnalisés, applications web et automatisations pour entreprises au Maroc et à l&apos;international. Propriété exclusive du code, pas d&apos;abonnement par utilisateur, équipe basée à Casablanca.
            </p>
          </div>
          <div className="flex min-w-0 flex-[1_1_240px] flex-col gap-3">
            <Link href="/contact" className="flex min-h-11 items-center justify-between bg-white px-5 py-4 text-[15px] font-semibold text-primary">
              Parler d&apos;un projet
              <Arrow />
            </Link>
            <a href="https://wa.me/212666650696" className="flex min-h-11 items-center justify-center border border-white px-5 py-4 text-[15px] font-medium text-white">
              WhatsApp direct
            </a>
          </div>
        </div>
      </section>
    </article>
  );
}
