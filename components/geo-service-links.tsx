import Link from "next/link";
import { geoCoverage } from "@/lib/geo/coverage";
import { geoLinksFor } from "@/lib/geo/pages";
import { geoServices } from "@/lib/geo/services";

export function GeoServiceLinks({ serviceSlug, title }: { serviceSlug: string; title?: string }) {
  const service = geoServices[serviceSlug];
  const links = geoLinksFor(serviceSlug);
  if (!service || !links.length) return null;
  return (
    <nav aria-label={`Lieux pour ${service.name}`} className="border-t border-line px-6 py-12 md:px-12">
      <h2 className="font-headline text-2xl font-extrabold tracking-[-0.03em]">{title ?? `${service.name}, par lieu`}</h2>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        {links.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="border-b border-line py-1">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function GeoHomeLinks() {
  const service = "developpement-logiciel-sur-mesure";
  const morocco = geoCoverage.countries.find((country) => country.code === "ma");
  if (!morocco) return null;
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-16">
      <h2 className="font-headline text-2xl font-bold tracking-tight">Le logiciel, selon la ville</h2>
      <p className="mt-2 max-w-xl text-sm text-on-surface-variant">Le bureau est à Casablanca. Les autres villes se traitent en visio.</p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
        <li>
          <Link href="/geo-location" className="border-b border-line py-1">
            Toutes les pages par lieu
          </Link>
        </li>
        {morocco.cities.map((city) => (
          <li key={city.slug}>
            <Link href={`/geo-location/${service}/ma/${city.slug}`} className="border-b border-line py-1">
              {city.name}
            </Link>
          </li>
        ))}
        <li>
          <Link href={`/geo-location/${service}/fr`} className="border-b border-line py-1">
            France
          </Link>
        </li>
        <li>
          <Link href={`/geo-location/${service}/ca`} className="border-b border-line py-1">
            Canada
          </Link>
        </li>
      </ul>
    </section>
  );
}
