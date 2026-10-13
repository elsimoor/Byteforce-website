import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { services } from "@/lib/content";
import { SiteIndex } from "@/components/site-index";
import { entryPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";

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
  return (
    <main>
      <article>
      <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Services", path: "/services" }]} />
      <header className="px-6 pb-8 pt-16 md:px-12 md:pt-24">
        <h1 className="display max-w-[12ch] text-[clamp(3.2rem,8vw,7rem)]">Ce que l&apos;on construit.</h1>
      </header>
      <ol className="border-t border-line">
        {services.map((service, index) => (
          <li key={service.slug} className="border-b border-line">
            <Link
              href={service.href ?? `/services/${service.slug}`}
              className="index-row grid items-baseline gap-4 px-6 py-8 md:grid-cols-12 md:px-12 md:py-12"
            >
              <span className="text-sm text-mute md:col-span-1">{String(index + 1).padStart(2, "0")}</span>
              <span className="display text-4xl md:col-span-6 md:text-6xl">{service.menu}</span>
              <span className="text-sm text-mute md:col-span-5">{service.summary}</span>
            </Link>
          </li>
        ))}
      </ol>
      <section className="px-6 py-16 md:px-12">
        <h2 className="display text-4xl">Pour un projet précis</h2>
        <ul className="mt-8 max-w-xl">
          {entryPages().map((page) => (
            <li key={page.path} className="border-t border-line">
              <Link href={`/${page.path}`} className="block py-4">
                <span>{page.h1}</span>
                <span className="mt-1 block text-sm text-mute">{page.group}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <div className="max-w-2xl space-y-4 px-6 pb-8 text-lg leading-relaxed md:px-12">
        <p>Byte Force construit ces offres depuis Casablanca.</p>
        <p>Un site. Une application. Un logiciel. Un plugin WordPress. Le référencement. L&apos;hébergement. La maintenance.</p>
        <p>
          Le cadre national est le <Link href="/developpement-logiciel-maroc">développement logiciel au Maroc</Link>.
        </p>
        <p>
          Pour une entreprise en France, la page est le{" "}
          <Link href="/developpement-logiciel-france">développement logiciel pour la France</Link>.
        </p>
        <p>Chaque ligne ci-dessus ouvre la page du service.</p>
        <p>Le premier échange se fait par écrit. La réponse part sous un jour ouvré.</p>
        <p>Le bureau est au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca.</p>
        <p>Aucun prix n&apos;est affiché. Le montant dépend de ce qui doit être construit.</p>
        <p>
          Avant le premier échange, la liste est{" "}
          <Link href="/checklists/comprendre-le-travail">comprendre le travail</Link>.
        </p>
        <p>
          Une version texte de cette page est disponible en <Link href="/services/md">markdown</Link>.
        </p>
      </div>
      <p className="px-6 pb-16 md:px-12">
        <Link href="/" className="border-b border-ink pb-1">
          Accueil du studio
        </Link>
      </p>
      <SiteIndex part={1} />
      </article>
    </main>
  );
}
