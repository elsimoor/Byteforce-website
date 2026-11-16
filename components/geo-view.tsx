import Link from "next/link";
import { GeoHeroStage } from "@/components/geo-hero-stage";
import { LeadForm } from "@/components/lead-form";
import { EmailText } from "@/components/mail-link";
import type { GeoBlock, GeoPage } from "@/lib/geo/pages";
import { ldJson, site } from "@/lib/site";

function Rich({ text }: { text: string }) {
  const bits = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {bits.map((bit, index) => {
        const match = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(bit);
        if (!match) return <span key={index}>{bit}</span>;
        return (
          <Link key={index} href={match[1]} className="font-semibold text-[#1D2BD1]">
            {match[2]}
          </Link>
        );
      })}
    </>
  );
}

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M7 17L17 7M8 7h9v9" />
    </svg>
  );
}

function block(page: GeoPage, heading: string): GeoBlock | undefined {
  return page.blocks.find((item) => item.h === heading);
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
          item: crumb.href.startsWith("http") ? crumb.href : `${site.url}${crumb.href === "/" ? "/" : crumb.href}`,
        })),
      },
      {
        "@type": "Service",
        name: page.keyword,
        serviceType: page.h1,
        url,
        areaServed: area,
        provider: { "@type": "Organization", name: site.name, url: site.url },
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
  const place = block(page, page.areaName);
  const serviceBlock = page.blocks.find((item) => item.p && item.h !== page.areaName && item.h !== "Le montant" && item.h !== "Cas à écrire");
  const delivered = block(page, "Ce qui est livré");
  const steps = block(page, "Le passage");
  const price = block(page, "Le montant");
  const missing = block(page, "Cas à écrire");
  const stepTitles = ["Le geste", "Trente minutes", "Le montant", "La remise"];
  const offerLinks = page.links.filter((item) => item.href !== "/contact" && item.href !== "/geo-location");
  const whatsapp = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}`;

  return (
    <main className="bg-[#F5F6FF] text-[#0E1030]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />

      <section className="mx-auto flex max-w-[1200px] flex-wrap items-center gap-14 px-6 pb-24 pt-10">
        <div className="min-w-0 flex-[1_1_420px]">
          <nav aria-label="Fil d'Ariane" className="mb-6 flex flex-wrap gap-x-2 text-sm text-[#4A4D6A]">
            {page.crumbs.map((crumb, index) => {
              const last = index === page.crumbs.length - 1;
              return (
                <span key={crumb.href}>
                  {index > 0 ? <span className="mr-2">/</span> : null}
                  {last ? crumb.label : <Link href={crumb.href}>{crumb.label}</Link>}
                </span>
              );
            })}
          </nav>
          <p className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-[#E6E8FF] px-3 py-1.5 font-mono text-xs uppercase tracking-[0.1em] text-[#1A24A8]">
            <span className="size-2 rounded-full bg-[#1D2BD1]" />
            {page.eyebrow}
          </p>
          <h1 className="mb-6 max-w-[16ch] text-[clamp(2.5rem,5.2vw,4.25rem)] font-bold leading-[1.04] tracking-[-0.035em]">{page.h1}</h1>
          <p className="mb-8 max-w-[560px] text-lg leading-relaxed text-[#3A3D60]">
            <Rich text={page.lede} />
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-[10px] bg-[#1D2BD1] px-6 font-semibold text-white">
              {page.cta} <Arrow />
            </a>
            <Link href={page.links[0]?.href ?? "/contact"} className="inline-flex min-h-12 items-center rounded-[10px] border border-[#C5C9EA] bg-white px-6 font-semibold">
              Voir l&apos;offre
            </Link>
          </div>
          <p className="mt-7 flex items-center gap-2.5 text-sm text-[#4A4D6A]">
            <span className="size-2 rounded-full bg-[#1D2BD1]" />
            <span><strong className="font-semibold text-[#0E1030]">Trente minutes pour cadrer.</strong> Réponse sous un jour ouvré.</span>
          </p>
        </div>
        <GeoHeroStage />
      </section>

      {place ? (
        <section className="border-t border-[#E3E6F8] bg-white py-24">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
            <div className="max-w-[400px] flex-[1_1_300px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">{page.areaName}</p>
              <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">Le bureau reste à Casablanca.</h2>
            </div>
            <div className="min-w-0 flex-[999_1_560px]">
              {place.p?.slice(0, 1).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-8 max-w-[640px] text-lg leading-relaxed text-[#3A3D60]">
                  <Rich text={paragraph} />
                </p>
              ))}
              <div className="flex flex-wrap gap-4">
                <article className="min-w-[240px] flex-1 rounded-2xl border border-[#E3E6F8] bg-[#F5F6FF] p-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1D2BD1]">Bureau</p>
                  <h3 className="mb-2 text-lg">Technopark</h3>
                  <p className="text-[15px] leading-relaxed text-[#3A3D60]">Boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h.</p>
                </article>
                <article className="min-w-[240px] flex-1 rounded-2xl border border-[#E3E6F8] bg-[#F5F6FF] p-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1D2BD1]">Cette page</p>
                  <h3 className="mb-2 text-lg">{page.areaName}</h3>
                  <p className="text-[15px] leading-relaxed text-[#3A3D60]">{page.keyword}. Le travail se discute depuis le bureau de Casablanca.</p>
                </article>
                <article className="min-w-[240px] flex-1 rounded-2xl border border-[#E3E6F8] bg-[#F5F6FF] p-6">
                  <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1D2BD1]">Premier échange</p>
                  <h3 className="mb-2 text-lg">Trente minutes</h3>
                  <p className="text-[15px] leading-relaxed text-[#3A3D60]">Le contact se fait par le formulaire. Le devis vient après le périmètre.</p>
                </article>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {serviceBlock ? (
        <section className="border-t border-[#E3E6F8] py-24">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
            <div className="max-w-[400px] flex-[1_1_300px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Offre</p>
              <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">{serviceBlock.h}</h2>
            </div>
            <div className="min-w-0 flex-[999_1_560px]">
              {serviceBlock.p?.map((paragraph) => (
                <p key={paragraph.slice(0, 48)} className="mb-5 max-w-[680px] text-lg leading-relaxed text-[#3A3D60]">
                  <Rich text={paragraph} />
                </p>
              ))}
              {offerLinks.length > 0 ? (
                <div className="mt-6 rounded-2xl bg-[#E6E8FF] p-7">
                  <p className="mb-4 text-[15px] leading-relaxed text-[#1A1F6B]">Les pages déjà publiées pour cette offre. Celle-ci dit comment on en parle pour {page.areaName}.</p>
                  <div className="flex flex-wrap gap-2.5">
                    {offerLinks.map((item) => (
                      <Link key={item.href + item.label} href={item.href} className="inline-flex min-h-11 items-center gap-2 rounded-[10px] bg-white px-4 text-sm font-semibold">
                        {item.label} <Arrow />
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      ) : null}

      {delivered?.items ? (
        <section className="border-t border-[#E3E6F8] bg-white py-24">
          <div className="mx-auto max-w-[1200px] px-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Ce qui est livré</p>
            <h2 className="mb-12 max-w-[760px] text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">Écrit avant le code, pour {page.areaName}.</h2>
            <div className="flex flex-wrap gap-4">
              {delivered.items.map((item, index) => (
                <article key={item.slice(0, 48)} className="min-w-[280px] flex-[1_1_320px] rounded-2xl border border-[#E3E6F8] bg-[#F5F6FF] p-7">
                  <p className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#1D2BD1]">{String(index + 1).padStart(2, "0")}</p>
                  <p className="text-base leading-relaxed text-[#2B2E52]">{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {steps?.items ? (
        <section className="border-t border-[#E3E6F8] py-24">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
            <div className="max-w-[400px] flex-[1_1_300px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Le passage</p>
              <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">Du geste à la remise, en {steps.items.length} étapes.</h2>
            </div>
            <ol className="flex min-w-0 flex-[999_1_560px] flex-col gap-3.5">
              {steps.items.map((item, index) => (
                <li key={item.slice(0, 40)} className="flex gap-5 rounded-2xl border border-[#E3E6F8] bg-white p-6">
                  <span className="flex size-9 flex-none items-center justify-center rounded-full bg-[#1D2BD1] text-sm font-bold text-white">{index + 1}</span>
                  <div>
                    <h3 className="mb-1 text-lg">{stepTitles[index] ?? `Étape ${index + 1}`}</h3>
                    <p className="text-[15px] leading-relaxed text-[#3A3D60]">{item}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ) : null}

      {price?.p ? (
        <section className="bg-[#0E1030] py-24 text-white">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
            <div className="max-w-[400px] flex-[1_1_300px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#AEB4FF]">Le montant</p>
              <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">{price.p[0]?.split(". ")[0]}.</h2>
            </div>
            <div className="min-w-0 flex-[999_1_560px]">
              {[price.p[0]?.split(". ").slice(1).join(". "), ...price.p.slice(1)].filter(Boolean).map((paragraph) => (
                <p key={paragraph.slice(0, 40)} className="mb-5 max-w-[640px] text-lg leading-relaxed text-[#D5D8F5]">{paragraph}</p>
              ))}
              <a href="#contact" className="inline-flex min-h-12 items-center gap-2 rounded-[10px] bg-white px-6 font-semibold text-[#0E1030]">
                Demander un cadrage <Arrow />
              </a>
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Dans le catalogue</p>
          <h2 className="mb-3 max-w-[760px] text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">
            {page.proof.length ? `Projets publiés, liés à ${page.areaName}.` : `Pas encore de fiche pour ${page.keyword}.`}
          </h2>
          <p className="mb-10 text-base text-[#4A4D6A]">La ville est écrite sur la fiche. Ce n&apos;est pas un bureau local.</p>
          {page.proof.length ? (
            <div className="flex flex-wrap gap-4">
              {page.proof.map((item) => (
                <Link key={item.href} href={item.href} className="flex min-h-[220px] min-w-[280px] flex-1 flex-col justify-between gap-10 rounded-2xl border border-[#D5D9F2] bg-white p-7">
                  <div>
                    <h3 className="mb-2 text-2xl tracking-[-0.02em]">{item.title}</h3>
                    <p className="text-[15px] leading-relaxed text-[#3A3D60]">{item.note}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#1D2BD1]">Voir la fiche <Arrow /></span>
                </Link>
              ))}
            </div>
          ) : missing?.p ? (
            missing.p.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="max-w-[640px] text-lg leading-relaxed text-[#3A3D60]">{paragraph}</p>
            ))
          ) : null}
        </div>
      </section>

      {page.cities.length > 0 ? (
        <section className="border-t border-[#E3E6F8] bg-white py-24">
          <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
            <div className="max-w-[400px] flex-[1_1_300px]">
              <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Villes</p>
              <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">La même offre, pour un autre lieu.</h2>
            </div>
            <div className="flex min-w-0 flex-[999_1_560px] flex-wrap content-start gap-3">
              {page.cities.map((item) => (
                <Link key={item.href} href={item.href} className="inline-flex min-h-16 min-w-[200px] flex-1 items-center justify-between rounded-[14px] border border-[#E3E6F8] bg-[#F5F6FF] px-5 font-semibold">
                  {item.label} <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-[#E3E6F8] py-24">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
          <div className="max-w-[400px] flex-[1_1_300px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Questions</p>
            <h2 className="text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">Ce qu&apos;on nous demande le plus.</h2>
          </div>
          <div className="min-w-0 flex-[999_1_560px] border-t border-[#C5C9EA]">
            {page.faqs.map((item) => (
              <details key={item.q} className="group border-b border-[#C5C9EA]">
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="text-2xl text-[#1D2BD1] group-open:hidden" aria-hidden="true">+</span>
                  <span className="hidden text-2xl text-[#1D2BD1] group-open:inline" aria-hidden="true">–</span>
                </summary>
                <p className="mb-6 max-w-[640px] text-base leading-relaxed text-[#3A3D60]">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-[#E3E6F8] bg-white py-24">
        <div className="mx-auto flex max-w-[1200px] flex-wrap gap-x-16 gap-y-10 px-6">
          <div className="max-w-[400px] flex-[1_1_300px]">
            <p className="mb-4 font-mono text-xs uppercase tracking-[0.12em] text-[#1D2BD1]">Contact</p>
            <h2 className="mb-5 text-[clamp(1.875rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.03em]">{page.cta}</h2>
            <p className="mb-7 text-base leading-relaxed text-[#3A3D60]">
              Réponse sous un jour ouvré, à <EmailText />. Bureau au Technopark, Casablanca. Sujet : {page.keyword}.
            </p>
            <a href={whatsapp} className="inline-flex min-h-12 items-center gap-2 rounded-[10px] border border-[#C5C9EA] bg-[#F5F6FF] px-5 font-semibold">
              Écrire sur WhatsApp <Arrow />
            </a>
          </div>
          <div className="min-w-0 flex-[999_1_560px] rounded-[20px] border border-[#E3E6F8] bg-[#F5F6FF] p-8">
            <LeadForm variant="sheet" />
          </div>
        </div>
      </section>
    </main>
  );
}
