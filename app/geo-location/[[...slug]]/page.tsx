import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { GeoGlobeHub } from "@/components/geo-globe-hub";
import { GeoView } from "@/components/geo-view";
import { geoKeywords } from "@/lib/geo/keywords";
import { geoDirectory, getGeoPage } from "@/lib/geo/pages";
import { openGraph } from "@/lib/open-graph";

type Props = { params: Promise<{ slug?: string[] }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ slug: [] as string[] }, ...geoKeywords().map((row) => ({ slug: row.path.split("/").slice(1) }))];
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
    robots: { index: false, follow: false },
  };
}

export default async function GeoLocationPage({ params }: Props) {
  const { slug } = await params;
  if (!slug?.length) return <GeoIndex />;
  const page = getGeoPage(["geo-location", ...slug].join("/"));
  if (!page) notFound();
  return <GeoView page={page} />;
}

function GeoIndex() {
  const groups = geoDirectory();
  return (
    <main data-studio className="w-full bg-[#0c0a09] px-4 py-8 sm:px-6 lg:px-8 text-stone-100 min-h-screen">
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
