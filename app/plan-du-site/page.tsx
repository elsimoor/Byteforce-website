import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { publicEntries } from "@/lib/public-urls";
import { openGraph } from "@/lib/open-graph";

const title = "Plan du site · Byte Force";
const description =
  "Liste des pages Byte Force : services, solutions, réalisations, villes et insights. Le bureau est à Casablanca.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/plan-du-site" },
  openGraph: openGraph("/plan-du-site", title, description),
};

export default function PlanDuSite() {
  const paths = publicEntries()
    .map((entry) => entry.path)
    .filter((path) => path !== "/plan-du-site" && !path.startsWith("/geo-location/"));

  return (
    <main className="px-6 py-16 md:px-12 md:py-24">
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Plan du site", path: "/plan-du-site" }]} />
      <h1 className="display max-w-[16ch] text-[clamp(2.6rem,6vw,5rem)]">Plan du site</h1>
      <p className="mt-8 max-w-2xl text-lg leading-relaxed">
        Les pages du studio, liées une fois. Les pages par lieu sont regroupées sur{" "}
        <Link href="/geo-location">Pages par lieu</Link>. Le bureau est au Technopark, à Casablanca.
      </p>
      <ul className="mt-12 max-w-3xl columns-1 gap-8 sm:columns-2">
        {paths.map((path) => (
          <li key={path} className="border-t border-line py-2 text-sm">
            <Link href={path}>{path}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
