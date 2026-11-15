import Link from "next/link";
import { LeadForm } from "@/components/lead-form";
import { EmailText } from "@/components/mail-link";
import { crumbsFor, moneyPages, type MoneyPage } from "@/lib/money";
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

function Icon({ d }: { d: string }) {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const usageIcons = [
  "M4 7h16v12H4zM8 7V5h8v2",
  "M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-7 8a7 7 0 0 1 14 0",
  "M4 19V9m5 10V5m5 14v-7m5 7V8",
  "M5 19l4-6 3 3 7-9",
];

export function ApplicationWebPage({ page }: { page: MoneyPage }) {
  const url = `${site.url}/${page.path}`;
  const crumbs = crumbsFor(page, moneyPages);
  const usages = page.blocks.find((block) => block.items);
  const others = page.blocks.filter((block) => block !== usages);
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
      {
        "@type": "Service",
        name: page.h1,
        serviceType: page.keyword,
        url,
        description: page.description,
        provider: { "@id": `${site.url}/#business` },
        areaServed: "MA",
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
    <main className="overflow-x-clip bg-white text-[#14161F]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />

      <section className="relative isolate px-5 pt-8 pb-12 sm:px-8 md:pt-20 md:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[640px] overflow-hidden" aria-hidden="true">
          <div className="absolute -left-24 top-[-80px] h-[420px] w-[420px] rounded-[45%_55%_50%_50%] bg-[#d7e4ff] blur-2xl" />
          <div className="absolute -right-16 top-[-40px] h-[460px] w-[380px] rounded-[50%_40%_55%_45%] bg-[#c5d8ff] blur-2xl" />
          <div className="absolute left-1/2 top-24 h-64 w-[70%] -translate-x-1/2 rounded-full bg-white/80 blur-3xl" />
        </div>

        <nav aria-label="Fil d'Ariane" className="mx-auto flex max-w-3xl flex-wrap justify-center gap-x-2 text-sm text-[#6B728A]">
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

        <p className="mx-auto mt-5 w-fit rounded-full border border-[#d5def8] bg-white/80 px-4 py-1.5 text-center font-mono text-[11px] tracking-[0.14em] text-primary uppercase md:mt-8">
          Casablanca · {page.keyword}
        </p>
        <h1 className="mx-auto mt-6 max-w-[16ch] text-center font-headline text-[clamp(2.6rem,5.4vw,4.6rem)] leading-[1.02] font-extrabold tracking-[-0.045em]">
          Application web sur mesure <span className="text-primary">au Maroc</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[38rem] text-center text-base leading-relaxed text-[#4A5168] sm:text-lg">
          <Rich text={page.lede} />
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link href="/contact" className="inline-flex min-h-11 items-center rounded-full bg-primary px-6 text-sm font-semibold text-white">
            {page.cta}
          </Link>
          <a href="#en-ligne" className="inline-flex min-h-11 items-center rounded-full border border-[#d5def8] bg-white px-6 text-sm font-semibold text-[#14161F]">
            Déjà en ligne
          </a>
        </div>
        <form action="/contact" className="mx-auto mt-6 flex max-w-xl items-center gap-2 rounded-full border border-[#e1e7f8] bg-white py-1.5 pr-1.5 pl-5 shadow-[0_16px_50px_rgba(0,13,191,0.08)]">
          <label htmlFor="usage" className="sr-only">
            {page.cta}
          </label>
          <input
            id="usage"
            name="message"
            placeholder="Portail client, outil métier, tableau de bord…"
            className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-[#8B93A7]"
          />
          <button type="submit" aria-label={page.cta} className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-white">
            <span aria-hidden="true">→</span>
          </button>
        </form>
      </section>

      <section className="px-5 pb-8 sm:px-8" aria-label="Déjà en ligne">
        <p className="text-center font-mono text-[11px] tracking-[0.16em] text-[#8B93A7] uppercase">Projets du catalogue public. Pas de chiffre inventé.</p>
        <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap items-center justify-center gap-x-10 gap-y-3">
          {page.proof.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-headline text-lg font-extrabold tracking-[-0.03em] text-[#9AA3B8]">
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {usages ? (
        <section id="usages" className="px-5 py-16 sm:px-8 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-center font-mono text-[11px] tracking-[0.16em] text-primary uppercase">{page.crumb}</p>
            <h2 className="mx-auto mt-3 max-w-[18ch] text-center font-headline text-[clamp(2rem,4vw,3rem)] leading-tight font-extrabold tracking-[-0.04em]">
              {usages.h}
            </h2>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {usages.items?.map((item, index) => (
                <article key={item} className="rounded-[28px] border border-[#e7ecf8] bg-white p-6 shadow-[0_16px_40px_rgba(20,22,31,0.04)]">
                  <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#eef2ff] text-primary">
                    <Icon d={usageIcons[index] ?? usageIcons[0]} />
                  </span>
                  {index === 2 ? (
                    <svg viewBox="0 0 280 64" className="mt-6 h-16 w-full text-primary" aria-hidden="true">
                      <path d="M0 46h280" stroke="#e4e8ff" strokeWidth="2" />
                      <path d="M8 46 V28 M48 46 V18 M88 46 V34 M128 46 V12 M168 46 V24 M208 46 V30 M248 46 V16" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    </svg>
                  ) : null}
                  <p className="mt-5 text-[15px] leading-relaxed text-[#3A4158]">
                    <Rich text={item} />
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {others.map((block) => (
        <section key={block.h} className="px-5 py-16 sm:px-8 md:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="mx-auto max-w-[20ch] text-center font-headline text-[clamp(2rem,4vw,3rem)] leading-tight font-extrabold tracking-[-0.04em]">
              {block.h}
            </h2>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-base leading-relaxed text-[#4A5168]">
              {block.p?.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>
                  <Rich text={paragraph} />
                </p>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-6xl rounded-[32px] bg-[linear-gradient(90deg,#d9e6ff_0%,#eef3ff_45%,#f7f8ff_100%)] px-6 py-14 text-center sm:px-12">
          <h2 className="font-headline text-[clamp(1.8rem,3vw,2.6rem)] font-extrabold tracking-[-0.04em]">{page.cta}</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-[#4A5168]">
            Réponse sous un jour ouvré, à <EmailText /> ou au {site.phoneDisplay}. Bureau au Technopark, Casablanca.
          </p>
          <Link href="/contact" aria-label={page.cta} className="mx-auto mt-6 grid h-12 w-12 place-items-center rounded-full bg-primary text-lg text-white">
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section id="en-ligne" className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-headline text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em]">Déjà en ligne</h2>
          <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#6B728A]">Projets du catalogue public. Pas de chiffre inventé.</p>
          <div className="mt-10 grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
            {page.proof[0] ? (
              <Link href={page.proof[0].href} className="flex min-h-72 flex-col justify-between rounded-[28px] border border-[#e7ecf8] bg-[#f4f7ff] p-8">
                <p className="font-mono text-[11px] tracking-[0.14em] text-primary uppercase">{page.proof[0].title}</p>
                <p className="max-w-md font-headline text-3xl leading-tight font-extrabold tracking-[-0.04em]">{page.proof[0].note}</p>
              </Link>
            ) : null}
            <div className="grid gap-4">
              {page.proof.slice(1).map((item) => (
                <Link key={item.href} href={item.href} className="rounded-[28px] border border-[#e7ecf8] bg-white p-6 shadow-[0_16px_40px_rgba(20,22,31,0.04)]">
                  <p className="font-headline text-xl font-extrabold tracking-[-0.03em]">{item.title}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[#5C647C]">{item.note}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-headline text-[clamp(2rem,4vw,3rem)] font-extrabold tracking-[-0.04em]">Questions</h2>
          <div className="mt-8 space-y-3">
            {page.faqs.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-[#e7ecf8] bg-white px-5 py-4 open:shadow-[0_12px_30px_rgba(20,22,31,0.04)]">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#eef2ff] text-primary transition group-open:rotate-45" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="pt-3 text-sm leading-relaxed text-[#4A5168]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative overflow-hidden bg-[linear-gradient(180deg,#d5e4ff_0%,#eef3ff_55%,#f7f9ff_100%)] px-5 py-20 sm:px-8">
        <p aria-hidden="true" className="pointer-events-none text-center font-headline text-[clamp(3.2rem,11vw,8.5rem)] leading-none font-extrabold tracking-[-0.05em] text-white/80">
          SUR MESURE
        </p>
        <div className="relative mx-auto -mt-6 grid max-w-6xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="font-headline text-4xl font-extrabold tracking-[-0.04em]">{page.cta}</h2>
            <p className="mt-4 max-w-sm leading-relaxed text-[#3A4158]">
              Réponse sous un jour ouvré, à <EmailText /> ou au {site.phoneDisplay}. Bureau au Technopark, Casablanca.
            </p>
            <nav aria-label="Pages liées" className="mt-8 flex flex-wrap gap-2">
              {page.links.map((item) => (
                <Link key={item.href + item.label} href={item.href} className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold">
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-6 flex gap-3 text-sm font-semibold">
              <a href={site.linkedin} className="rounded-full bg-white px-4 py-2">LinkedIn</a>
              <a href={site.instagram} className="rounded-full bg-white px-4 py-2">Instagram</a>
            </div>
          </div>
          <div className="rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(20,22,31,0.08)] sm:p-8">
            <LeadForm variant="sheet" city="Casablanca" country="Maroc" />
          </div>
        </div>
      </section>
    </main>
  );
}
