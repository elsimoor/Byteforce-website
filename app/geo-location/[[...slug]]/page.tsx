import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <main className="px-6 py-16 md:px-12 md:py-24">
      <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">Pages par lieu</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed">
        Chaque ligne du fichier de mots-clés a une page. Le studio est à Casablanca, Technopark, boulevard Dammam,
        Aïn Chock. Il n&apos;y a pas de bureau dans les autres villes. Pour écrire : le{" "}
        <Link href="/contact" className="font-semibold text-primary">
          contact
        </Link>
        .
      </p>
      {groups.map((group) => (
        <section key={group.name} className="mt-16 border-t border-line pt-10">
          <h2 className="display text-4xl">{group.name}</h2>
          <p className="mt-3 text-sm">
            <Link href={group.parent.href} className="border-b border-line">
              {group.parent.label}
            </Link>
          </p>
          {group.countries.map((country) => (
            <div key={country.country} className="mt-8">
              <h3 className="text-sm uppercase tracking-wide text-mute">{country.country}</h3>
              {country.places.map((place) => (
                <div key={place.city} className="mt-4">
                  <h4 className="text-lg">{place.city}</h4>
                  <ul className="mt-2">
                    {place.pages.map((item) => (
                      <li key={item.href} className="border-t border-line py-2 text-sm">
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </section>
      ))}
    </main>
  );
}
