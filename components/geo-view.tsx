import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import type { GeoPage } from "@/lib/geo/pages";
import { EmailText } from "@/components/mail-link";
import { ldJson, site } from "@/lib/site";

function Rich({ text }: { text: string }) {
  const bits = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {bits.map((bit, index) => {
        const match = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(bit);
        if (!match) return <span key={index}>{bit}</span>;
        return (
          <Link key={index} href={match[1]} className="font-semibold text-primary">
            {match[2]}
          </Link>
        );
      })}
    </>
  );
}

export function GeoView({ page }: { page: GeoPage }) {
  const url = `${site.url}/${page.path}`;
  const area =
    page.level === "City"
      ? { "@type": "City", name: page.areaName, containedInPlace: { "@type": "Country", name: page.areaCountry } }
      : { "@type": "Country", name: page.areaCountry };
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
        serviceType: page.keyword,
        url,
        description: page.description,
        provider: { "@id": `${site.url}/#business` },
        areaServed: area,
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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2 text-sm text-mute">
          {page.crumbs.map((crumb, index) => {
            const last = index === page.crumbs.length - 1;
            return (
              <span key={crumb.href}>
                {index > 0 ? " · " : null}
                {last ? crumb.label : <Link href={crumb.href}>{crumb.label}</Link>}
              </span>
            );
          })}
        </nav>
        <h1 className="display mt-6 max-w-[22ch] text-[clamp(2.2rem,5vw,4.6rem)]">{page.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          <Rich text={page.lede} />
        </p>
        <Link href="/contact" className="btn mt-8">
          {page.cta}
        </Link>
      </header>

      {page.blocks.map((block) => (
        <section key={block.h} className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display max-w-[22ch] text-4xl">{block.h}</h2>
          {block.p?.map((paragraph) => (
            <p key={paragraph.slice(0, 80)} className="mt-6 max-w-2xl text-lg leading-relaxed">
              <Rich text={paragraph} />
            </p>
          ))}
          {block.items ? (
            <ul className="mt-8 max-w-2xl">
              {block.items.map((item) => (
                <li key={item.slice(0, 80)} className="border-t border-line py-4 text-sm leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {page.proof.length > 0 ? (
        <section className="border-t border-line">
          <div className="px-6 py-16 md:px-12">
            <h2 className="display text-4xl">Dans le catalogue</h2>
            <p className="mt-4 max-w-xl text-sm text-mute">Projets publiés, avec la ville écrite sur la fiche. Pas un bureau local.</p>
          </div>
          {page.proof.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="index-row flex items-baseline justify-between gap-6 border-t border-line px-6 py-8 md:px-12"
            >
              <span className="display text-3xl md:text-5xl">{item.title}</span>
              <span className="max-w-sm text-right text-sm text-mute">{item.note}</span>
            </Link>
          ))}
        </section>
      ) : null}

      {page.related.length > 0 ? (
        <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display text-4xl">Autres recherches, même lieu</h2>
          <ul className="mt-8 max-w-2xl">
            {page.related.map((item) => (
              <li key={item.href} className="border-t border-line py-4">
                <Link href={item.href} className="text-lg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {page.cities.length > 0 ? (
        <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display text-4xl">Villes</h2>
          <ul className="mt-8 flex flex-wrap gap-3">
            {page.cities.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="border-b border-line py-2 text-sm">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <h2 className="display text-4xl">Questions</h2>
        <dl className="mt-10 max-w-3xl">
          {page.faqs.map((item) => (
            <div key={item.q} className="border-t border-line py-6">
              <dt className="text-lg">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mute">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-12 border-t border-line px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="display text-5xl">{page.cta}</h2>
          <p className="mt-6 max-w-sm leading-relaxed">
            Réponse sous un jour ouvré, à <EmailText /> ou au {site.phoneDisplay}. Bureau au Technopark, Casablanca.
          </p>
          <nav aria-label="Pages liées" className="mt-8 flex flex-col gap-2 text-sm">
            {page.links.map((item) => (
              <Link key={item.href + item.label} href={item.href} className="border-b border-line py-2">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
