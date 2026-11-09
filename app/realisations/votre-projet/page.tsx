import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ProjectBrief } from "@/components/project-brief";
import { StudioStamp } from "@/components/realisation-chrome";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";

const path = "/realisations/votre-projet";
const meta = seoMeta[path];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: path },
  openGraph: openGraph(path, meta.title, meta.description),
};

export default function YourProjectPage() {
  return (
    <main data-landing className="w-full bg-surface text-[#0A0D2E]">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Réalisations", path: "/realisations" }, { name: "Votre projet", path }]} />
      <section className="relative overflow-hidden bg-[#070A2B] text-[#EEF0FF]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(238,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(238,240,255,0.06) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        <div className="relative mx-auto flex w-full max-w-[1264px] flex-col gap-5 px-5 pt-8 pb-14 sm:px-8 lg:px-12 lg:pt-9 lg:pb-16">
          <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2.5 gap-y-1 text-sm text-[#B4BAF2]">
            <Link href="/realisations">Réalisations</Link>
            <span>·</span>
            <span className="text-white">Votre projet</span>
          </nav>
          <h1 className="font-headline text-[clamp(3.4rem,11vw,8.5rem)] leading-[0.84] font-extrabold tracking-[-0.07em] text-white">
            Votre projet<span className="text-[#8C93FF]">.</span>
          </h1>
          <div className="mt-2 flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-[32em] text-lg leading-snug text-[#D5D9FF] sm:text-[22px] sm:leading-[1.45]">
              Trois étapes. Le besoin, le projet, puis qui répond. Nous revenons avec un devis sous 24 h.
            </p>
            <StudioStamp />
          </div>
        </div>
      </section>
      <ProjectBrief />
    </main>
  );
}
