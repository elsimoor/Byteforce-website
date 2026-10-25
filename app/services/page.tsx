import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { services } from "@/lib/content";
import { SiteIndex } from "@/components/site-index";
import { entryPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { ServicesLanding } from "@/components/services-landing";

const servicesMeta = seoMeta["/services"];

export const metadata: Metadata = {
  title: { absolute: servicesMeta.title },
  description: servicesMeta.description,
  alternates: {
    canonical: "/services",
    types: { "text/markdown": "/services/md" },
  },
  openGraph: openGraph("/services", servicesMeta.title, servicesMeta.description),
};

export default function ServicesPage() {
  const pages = entryPages();

  return (
    <main data-landing className="w-full">
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Services", path: "/services" }]} />
        <ServicesLanding servicesList={services} entryPagesList={pages} />
        <div className="border-t border-slate-200/80 bg-white">
          <SiteIndex part={1} />
        </div>
      </article>
    </main>
  );
}
