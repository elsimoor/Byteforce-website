import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { GeoGlobeHub } from "@/components/geo-globe-hub";
import { CrmCanadaPage } from "@/components/crm-canada/crm-canada-page";
import { GeoView } from "@/components/geo-view";
import { geoDirectory, getGeoPage, indexableGeoPages } from "@/lib/geo/pages";
import { openGraph } from "@/lib/open-graph";
import { ldJson, site } from "@/lib/site";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: [] as string[] }, ...indexableGeoPages().map((page) => ({ slug: page.path.split("/").slice(1) }))];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!slug?.length) {
    const title = "Pages par lieu";
    const description =
      "Toutes les pages Byte Force par service, pays et ville. Le bureau est à Casablanca. Chaque recherche du fichier a son URL.";
    return {
      title: { absolute: title },
      description,
      alternates: { canonical: "/geo-location" },
      openGraph: openGraph("/geo-location", title, description),
    };
  }

  const page = getGeoPage(["geo-location", ...slug].join("/"));
  if (!page) return {};
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: `/${page.path}` },
    openGraph: openGraph(`/${page.path}`, page.title, page.description),
    robots: { index: true, follow: true },
  };
}

export default async function GeoLocationPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) return <GeoIndex />;
  const page = getGeoPage(["geo-location", ...slug].join("/"));
  if (!page) notFound();

  if (page.path === "geo-location/crm/ca") {
    const url = `${site.url}/${page.path}`;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BreadcrumbList",
          itemListElement: page.crumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.label,
            item: crumb.href === "/" ? `${site.url}/` : `${site.url}${crumb.href}`,
          })),
        },
        {
          "@type": "Service",
          name: page.h1,
          url,
          description: page.description,
          provider: { "@id": `${site.url}/#business` },
          areaServed: { "@type": "Country", name: "Canada" },
          inLanguage: "fr",
        },
        {
          "@type": "FAQPage",
          mainEntity: page.faqs.map((item) => ({
            "@type": "Question",
            name: item.q,
            acceptedAnswer: { "@type": "Answer", text: item.a },
          })),
        },
      ],
    };
    return (
      <>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
        <CrmCanadaPage />
      </>
    );
  }

  return <GeoView page={page} />;
}

function GeoIndex() {
  const groups = geoDirectory();
  return (
    <main data-studio className="w-full bg-[#050826] px-4 py-8 sm:px-6 lg:px-8 text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      <div className="mx-auto max-w-[1360px]">
        <BreadcrumbJsonLd
          items={[
            { name: "Accueil", path: "/" },
            { name: "Géo-localisation", path: "/geo-location" },
          ]}
        />
        <GeoGlobeHub groups={groups} />
      </div>
    </main>
  );
}
