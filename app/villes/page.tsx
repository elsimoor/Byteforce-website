import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { cityPages } from "@/lib/city-pages";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { ldJson, site } from "@/lib/site";

const meta = seoMeta["/villes"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/villes" },
  openGraph: openGraph("/villes", meta.title, meta.description),
};

const groups = ["Maroc", "France", "Canada"] as const;

function projectLine(count: number) {
  if (count === 0) return "Aucun projet du catalogue n'est publié ici.";
  if (count === 1) return "1 projet publié.";
  return `${count} projets publiés.`;
}

export default function VillesPage() {
  const list = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Villes",
    itemListElement: cityPages.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: city.city,
      url: `${site.url}/villes/${city.slug}`,
    })),
  };

  return (
    <main data-landing className="w-full bg-[#F4F6FC] text-[#14161F]">
      <article className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 lg:py-16">
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Villes", path: "/villes" }]} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(list) }} />
        <nav aria-label="Fil d'Ariane" className="flex items-center gap-2.5 font-mono text-[13px] text-[#4B5070]">
          <Link href="/" className="text-primary underline decoration-primary underline-offset-[3px]">
            Accueil
          </Link>
          <span aria-hidden="true">/</span>
          <span>Villes</span>
        </nav>
        <p className="mt-6 font-mono text-xs tracking-[0.08em] text-primary uppercase">Villes</p>
        <h1 className="mt-3 max-w-[14ch] font-headline text-[clamp(2.75rem,6vw,4.5rem)] leading-[0.98] font-extrabold tracking-[-0.04em]">
          Le bureau est à Casablanca<span className="text-primary">.</span>
        </h1>
        <p className="mt-5 max-w-[38rem] text-lg leading-relaxed text-[#3A3F55]">
          Les autres pages ne sont pas des agences. Ce sont des lieux où une entreprise peut chercher un studio. Le travail part du Technopark, boulevard Dammam, Aïn Chock. Un déplacement se décide seulement s&apos;il est écrit dans le périmètre.
        </p>

        {groups.map((country) => {
          const cities = cityPages.filter((city) => city.country === country);
          if (!cities.length) return null;
          return (
            <section key={country} className="mt-14" aria-labelledby={`villes-${country}`}>
              <h2 id={`villes-${country}`} className="font-mono text-xs tracking-[0.08em] text-primary uppercase">
                {country}
              </h2>
              <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cities.map((city) => {
                  const office = city.slug === "casablanca";
                  return (
                    <li key={city.slug}>
                      <Link
                        href={`/villes/${city.slug}`}
                        className={`flex h-full flex-col rounded-2xl p-6 shadow-[0_10px_30px_rgba(20,22,31,0.05)] ${office ? "bg-primary text-white" : "bg-white text-[#14161F]"}`}
                      >
                        <span className={`font-mono text-[11px] tracking-[0.08em] uppercase ${office ? "text-[#C9D0FF]" : "text-[#8B90A5]"}`}>
                          {office ? "Bureau" : city.country}
                        </span>
                        <span className="mt-3 font-headline text-[1.75rem] leading-none font-extrabold tracking-[-0.03em]">{city.city}</span>
                        <span className={`mt-3 text-sm leading-relaxed ${office ? "text-[#E4E8FF]" : "text-[#5C6278]"}`}>{city.h1}</span>
                        <span className={`mt-4 text-sm font-semibold ${office ? "text-white" : "text-[#14161F]"}`}>{projectLine(city.studies.length)}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}

        <section className="mt-14 flex flex-wrap items-center justify-between gap-6 rounded-[28px] bg-white px-6 py-8 shadow-[0_10px_30px_rgba(20,22,31,0.05)] sm:px-8">
          <div className="max-w-[36rem]">
            <h2 className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">Écrire pour une ville.</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#5C6278]">
              Le message dit la ville, ce qui existe, et ce qui doit changer. Réponse sous un jour ouvré, du lundi au vendredi, de 9 h à 19 h.
            </p>
          </div>
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-xl bg-primary px-6 text-[15px] font-semibold text-white">
            Écrire à Casablanca
          </Link>
        </section>
      </article>
    </main>
  );
}
