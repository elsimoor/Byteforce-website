import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { SiteIndex } from "@/components/site-index";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { RealisationsLanding } from "@/components/realisations-landing";

const workMeta = seoMeta["/realisations"];

export const metadata: Metadata = {
  title: { absolute: workMeta.title },
  description: workMeta.description,
  alternates: { canonical: "/realisations" },
  openGraph: openGraph("/realisations", workMeta.title, workMeta.description),
};

export default function WorkPage() {
  return (
    <main data-landing className="w-full">
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Travaux", path: "/realisations" }]} />
        <RealisationsLanding projects={projects} />
        <div className="border-t border-slate-200/80 bg-white">
          <SiteIndex part={5} />
        </div>
      </article>
    </main>
  );
}
