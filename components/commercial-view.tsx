import Link from "next/link";
import { AuthorByline } from "@/components/author-byline";
import { LeadForm } from "@/components/lead-form";
import { childrenOf, crumbsFor, moneyPages, type MoneyPage } from "@/lib/money";
import { site } from "@/lib/site";

function Rich({ text }: { text: string }) {
  const bits = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {bits.map((bit, index) => {
        const match = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(bit);
        if (!match) return <span key={index}>{bit}</span>;
        return (
          <Link key={index} href={match[1]} className="border-b border-line">
            {match[2]}
          </Link>
        );
      })}
    </>
  );
}

export function CommercialView({ page }: { page: MoneyPage }) {
  const url = `${site.url}/${page.path}`;
  const crumbs = crumbsFor(page, moneyPages);
  const children = childrenOf(page, moneyPages);
  const area = page.path.includes("france") ? "FR" : "MA";
  const mainEntity =
    page.schema === "article"
      ? {
          "@type": "Article",
          headline: page.h1,
          description: page.description,
          url,
          author: {
            "@type": "Person",
            name: "Walid Moultamiss",
            url: `${site.url}/walid-moultamiss`,
            image: `${site.url}/walid-moultamiss-byte-force-maroc.png`,
            jobTitle: "Full-Stack Software Engineer",
            description:
              "Full-Stack Software Engineer with 4+ years of experience. Master's studies in computer science at Heriot-Watt University.",
            sameAs: ["https://www.linkedin.com/in/walid-moultamiss-56142b1aa"],
          },
          publisher: { "@id": `${site.url}/#business` },
          inLanguage: "fr-MA",
        }
      : {
          "@type": "Service",
          name: page.h1,
          serviceType: page.keyword,
          url,
          description: page.description,
          provider: { "@id": `${site.url}/#business` },
          areaServed: area,
        };
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: crumb.href === "/" ? `${site.url}/` : `${site.url}${crumb.href}`,
        })),
      },
      mainEntity,
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2 text-sm text-mute">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <span key={crumb.href}>
                {index > 0 ? " · " : null}
                {last ? crumb.name : <Link href={crumb.href}>{crumb.name}</Link>}
              </span>
            );
          })}
        </nav>
        <h1 className="display mt-6 max-w-[18ch] text-[clamp(2.6rem,6vw,5.4rem)]">{page.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">
          <Rich text={page.lede} />
        </p>
        <Link href="/contact" className="mt-8 inline-block border-b border-ink pb-1">
          {page.cta}
        </Link>
        {page.schema === "article" ? <AuthorByline /> : null}
      </header>

      {page.blocks.map((block) => (
        <section key={block.h} className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display max-w-[18ch] text-4xl">{block.h}</h2>
          {block.p?.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mt-6 max-w-2xl text-lg leading-relaxed">
              <Rich text={paragraph} />
            </p>
          ))}
          {block.items ? (
            <ul className="mt-8 max-w-2xl">
              {block.items.map((item) => (
                <li key={item.slice(0, 48)} className="border-t border-line py-4 text-sm leading-relaxed">
                  <Rich text={item} />
                </li>
              ))}
            </ul>
          ) : null}
          {block.table ? (
            <div className="mt-8 max-w-3xl overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-line text-mute">
                    <th className="py-3 pr-4 font-normal" />
                    <th className="py-3 pr-4 font-normal">{block.heads?.[0]}</th>
                    <th className="py-3 font-normal">{block.heads?.[1]}</th>
                  </tr>
                </thead>
                <tbody>
                  {block.table.map((row) => (
                    <tr key={row.point} className="border-b border-line align-top">
                      <th className="py-4 pr-4 font-normal">{row.point}</th>
                      <td className="py-4 pr-4">{row.a}</td>
                      <td className="py-4 text-mute">{row.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : null}
        </section>
      ))}

      {children.length > 0 ? (
        <section className="border-t border-line">
          <div className="px-6 py-16 md:px-12">
            <h2 className="display text-4xl">Aller au détail</h2>
          </div>
          {children.map((child) => (
            <Link
              key={child.path}
              href={`/${child.path}`}
              className="index-row block border-t border-line px-6 py-8 md:px-12"
            >
              <span className="display text-3xl md:text-5xl">{child.crumb}</span>
              <span className="mt-2 block max-w-xl text-sm text-mute">{child.description}</span>
            </Link>
          ))}
        </section>
      ) : null}

      {page.proof.length > 0 ? (
        <section className="border-t border-line">
          <div className="px-6 py-16 md:px-12">
            <h2 className="display text-4xl">Déjà en ligne</h2>
            <p className="mt-4 max-w-xl text-sm text-mute">Projets du catalogue public. Pas de chiffre inventé.</p>
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
            Réponse sous un jour ouvré, à {site.email} ou au {site.phoneDisplay}. Bureau au Technopark, Casablanca.
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
