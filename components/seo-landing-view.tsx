"use client";

import Link from "next/link";
import { site } from "@/lib/site";
import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { LeadForm } from "@/components/lead-form";

export type LandingSection = {
  h2: string;
  p: string[];
  bullets?: string[];
};

export type LandingFaq = {
  q: string;
  a: string;
};

export type LandingComparison = {
  title: string;
  headers: [string, string, string];
  rows: { feature: string; byteforce: string; alternative: string }[];
};

export type SeoLandingProps = {
  path: string;
  badge: string;
  h1: string;
  directAnswerSnippet: string; // 40-60 words for Google featured snippet
  metaDescription: string;
  priceStartingFrom?: string;
  turnaroundTime?: string;
  sections: LandingSection[];
  comparison?: LandingComparison;
  faqs: LandingFaq[];
  relatedLinks: { href: string; label: string }[];
  cityLinks?: { href: string; label: string }[];
};

export function SeoLandingView({
  path,
  badge,
  h1,
  directAnswerSnippet,
  metaDescription,
  priceStartingFrom,
  turnaroundTime,
  sections,
  comparison,
  faqs,
  relatedLinks,
  cityLinks,
}: SeoLandingProps) {
  const whatsappUrl = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    `Bonjour Byte Force, je souhaite un devis gratuit pour : ${h1}`
  )}`;

  return (
    <article className="w-full bg-[#fcfcfd] text-slate-900">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: h1, path },
        ]}
      />
      <ServiceJsonLd
        name={h1}
        description={metaDescription}
        path={path}
        serviceType={badge}
        priceRange={priceStartingFrom}
      />
      <FaqJsonLd faqs={faqs} />

      {/* 1. HERO SECTION (Above the fold CTA + Snippet) */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-white to-slate-50/70 px-4 pt-10 pb-16 md:px-8 lg:px-12 lg:pt-16">
        <div className="mx-auto max-w-5xl">
          {/* Breadcrumb row */}
          <nav aria-label="Fil d'ariane" className="mb-6 flex items-center gap-2 text-xs font-mono text-slate-500">
            <Link href="/" className="hover:text-primary transition-colors">Accueil</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-slate-800 font-semibold">{badge}</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1 text-xs font-bold text-blue-700">
            <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
            <span>{badge} · Studio Casablanca</span>
          </div>

          {/* Main H1 matching Search Query */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {h1}
          </h1>

          {/* Featured Snippet Direct Answer Box (40-60 words) */}
          <div className="mt-6 rounded-2xl border-l-4 border-primary bg-white p-5 shadow-sm ring-1 ring-slate-200/60 md:p-6">
            <p className="font-sans text-base leading-relaxed text-slate-800 md:text-lg">
              {directAnswerSnippet}
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-600">
              {priceStartingFrom && (
                <span className="rounded-md bg-emerald-50 px-2.5 py-1 font-semibold text-emerald-800 ring-1 ring-emerald-200/70">
                  {priceStartingFrom}
                </span>
              )}
              {turnaroundTime && (
                <span className="rounded-md bg-slate-100 px-2.5 py-1 text-slate-700">
                  Délai moyen : {turnaroundTime}
                </span>
              )}
              <span className="rounded-md bg-blue-50 px-2.5 py-1 text-blue-800">
                100% Propriété du code source
              </span>
            </div>
          </div>

          {/* Primary Above-The-Fold CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#demande-devis"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 font-sans text-sm font-bold text-white shadow-md transition hover:bg-primary/90 active:scale-95"
            >
              <span>Demander un devis gratuit</span>
              <span aria-hidden="true">→</span>
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300 bg-emerald-50 px-5 py-3.5 font-sans text-sm font-bold text-emerald-800 transition hover:bg-emerald-100/80 active:scale-95"
            >
              <svg className="h-4 w-4 fill-emerald-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              <span>Échanger sur WhatsApp (+212 666 650 696)</span>
            </a>
          </div>

          {/* Trust Guarantees */}
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-slate-200/60 pt-6">
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase">Localisation</span>
              <span className="text-sm font-semibold text-slate-800">Technopark Casablanca</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase">Réactivité</span>
              <span className="text-sm font-semibold text-slate-800">Réponse sous 24h ouvrées</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase">Propriété</span>
              <span className="text-sm font-semibold text-slate-800">Code source 100% cédé</span>
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-bold text-slate-400 uppercase">Contrat</span>
              <span className="text-sm font-semibold text-slate-800">Cadrage écrit & garanti</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BODY CONTENT (Detailed, Question-Style Sections 600+ words) */}
      <section className="px-4 py-16 md:px-8 lg:px-12">
        <div className="mx-auto max-w-5xl space-y-16">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {section.h2}
              </h2>
              <div className="space-y-3 font-sans text-base leading-relaxed text-slate-700 md:text-lg">
                {section.p.map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2 rounded-xl bg-white p-5 ring-1 ring-slate-200/70">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700 md:text-base">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* 3. COMPARISON TABLE */}
          {comparison && (
            <div className="space-y-4 pt-6">
              <h2 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                {comparison.title}
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="border-b border-slate-200 bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-600">
                    <tr>
                      <th className="px-6 py-4">{comparison.headers[0]}</th>
                      <th className="px-6 py-4 text-primary bg-blue-50/50">{comparison.headers[1]}</th>
                      <th className="px-6 py-4">{comparison.headers[2]}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {comparison.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-slate-50/50">
                        <td className="px-6 py-4 font-semibold text-slate-900">{row.feature}</td>
                        <td className="px-6 py-4 font-medium text-blue-900 bg-blue-50/30">{row.byteforce}</td>
                        <td className="px-6 py-4 text-slate-600">{row.alternative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. FAQ SECTION (Accordion / Structured Q&A) */}
          <div className="space-y-6 pt-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue-600">FAQ</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Questions fréquentes
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {faqs.map((faq, fIdx) => (
                <div key={fIdx} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="font-sans text-lg font-bold text-slate-900">
                    {faq.q}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 5. INTERNAL LINKING SECTION (Cities & Services) */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                Services complémentaires et expertises
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {relatedLinks.map((link, lIdx) => (
                  <Link
                    key={lIdx}
                    href={link.href}
                    className="rounded-lg border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-primary hover:text-primary"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {cityLinks && cityLinks.length > 0 && (
              <div className="border-t border-slate-200 pt-4">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
                  Intervention et accompagnement par ville
                </h4>
                <div className="mt-2 flex flex-wrap gap-2">
                  {cityLinks.map((city, cIdx) => (
                    <Link
                      key={cIdx}
                      href={city.href}
                      className="text-xs text-slate-600 underline hover:text-primary"
                    >
                      {city.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* 6. CONVERSION SECTION (Direct Form) */}
          <div id="demande-devis" className="rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-lg">
            <div className="max-w-xl">
              <span className="font-mono text-xs font-bold text-primary uppercase">Cadrage & Chiffrage</span>
              <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
                Obtenez un devis précis sous 24h
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Décrivez votre projet en quelques lignes. Un ingénieur logiciel étudie votre besoin et vous répond avec une première estimation de coût et de délai.
              </p>
            </div>
            <div className="mt-8">
              <LeadForm
                initial={{ service: badge, message: `Demande de devis pour : ${h1}` }}
                city="Casablanca"
                country="Maroc"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
