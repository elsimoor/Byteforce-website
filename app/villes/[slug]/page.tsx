import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { cityPages, getCityPage } from "@/lib/city-pages";
import { projects } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
import { EmailText } from "@/components/mail-link";
import { ldJson, site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cityPages.map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityPage(slug);
  if (!city) return {};
  const path = `/villes/${city.slug}`;
  return {
    title: { absolute: city.title },
    description: city.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, city.title, city.description),
    robots: { index: true, follow: true },
  };
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCityPage(slug);
  if (!city) notFound();
  const path = `/villes/${city.slug}`;
  const studies = city.studies
    .map((item) => projects.find((project) => project.slug === item))
    .filter((project) => project !== undefined);
  const crumbs = [
    { name: "Accueil", path: "/" },
    { name: "Villes", path: "/villes" },
    { name: city.city, path },
  ];
  const questions = [
    {
      q: `Le bureau est-il à ${city.city} ?`,
      a:
        city.slug === "casablanca"
          ? "Oui. Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. Sur rendez-vous, en semaine, de 9 h à 19 h."
          : `Non. Le seul bureau est à Casablanca, au Technopark. Le travail pour ${city.city} se fait en visio. Un déplacement se décide seulement s'il est écrit dans le périmètre.`,
    },
    {
      q: "Comment démarrer ?",
      a: "Le formulaire demande le nom, l'email et le projet. La réponse part sous un jour ouvré. Le code, le dépôt et les comptes d'hébergement livrés reviennent au client.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: crumbs.map((crumb, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: crumb.name,
          item: `${site.url}${crumb.path === "/" ? "/" : crumb.path}`,
        })),
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        name: site.name,
        url: `${site.url}${path}`,
        description: city.description,
        email: site.email,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: site.street,
          addressLocality: site.city,
          postalCode: site.postal,
          addressCountry: site.country,
        },
        areaServed: {
          "@type": city.city === "Nord" ? "AdministrativeArea" : "City",
          name: city.city,
        },
      },
      {
        "@type": "FAQPage",
        mainEntity: questions.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <main data-landing className="w-full bg-[#F4F6FC] text-[#14161F]">
      <article className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 lg:py-16">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap items-center gap-2.5 font-mono text-[13px] text-[#4B5070]">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <span key={crumb.path} className="inline-flex items-center gap-2.5">
                {index > 0 ? <span aria-hidden="true">/</span> : null}
                {last ? (
                  <span className="text-[#14161F]">{crumb.name}</span>
                ) : (
                  <Link href={crumb.path} className="text-primary underline decoration-primary underline-offset-[3px]">
                    {crumb.name}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>
        <p className="mt-6 font-mono text-xs tracking-[0.08em] text-primary uppercase">
          {city.country} · {city.city}
        </p>
        <h1 className="mt-3 max-w-[16ch] font-headline text-[clamp(2.5rem,5vw,4.25rem)] leading-[0.98] font-extrabold tracking-[-0.04em]">
          {city.h1}
          <span className="text-primary">.</span>
        </h1>
        <p className="mt-5 max-w-[40rem] text-lg leading-relaxed text-[#3A3F55]">{city.lede}</p>
        <p className="mt-6">
          <Link href="/contact" className="inline-flex min-h-12 items-center rounded-xl bg-primary px-6 text-[15px] font-semibold text-white">
            Écrire pour en parler
          </Link>
        </p>

        <div className="mt-12 flex flex-col gap-4">
          {city.sections.map((section) => (
            <section key={section.heading} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(20,22,31,0.05)] sm:p-8">
              <h2 className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">{section.heading}</h2>
              <div className="mt-4 max-w-3xl space-y-4 text-[15px] leading-relaxed text-[#3A3F55]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-12" aria-labelledby="city-links">
          <h2 id="city-links" className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">
            Pages liées
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            <li>
              <Link href={city.pillar.href} className="flex min-h-16 items-center rounded-2xl bg-white px-5 py-4 font-semibold shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                {city.pillar.label}
              </Link>
            </li>
            {city.services.map((service) => (
              <li key={service.href}>
                <Link href={service.href} className="flex min-h-16 items-center rounded-2xl bg-white px-5 py-4 font-semibold shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                  {service.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="flex min-h-16 items-center rounded-2xl bg-white px-5 py-4 font-semibold shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                Contact
              </Link>
            </li>
          </ul>
        </section>

        <section className="mt-12" aria-labelledby="city-work">
          <h2 id="city-work" className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">
            Projets publiés
          </h2>
          {studies.length > 0 ? (
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {studies.map((project) => (
                <li key={project.slug}>
                  <Link href={`/realisations/${project.slug}`} className="block h-full rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                    <span className="font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">{project.year}</span>
                    <span className="mt-2 block font-headline text-2xl font-extrabold tracking-[-0.03em]">{project.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[#5C6278]">{project.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-4 max-w-xl rounded-2xl bg-white p-6 text-sm leading-relaxed text-[#5C6278] shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
              Aucun projet du catalogue n&apos;est publié à {city.city}. On n&apos;en ajoute pas un pour remplir la page.
            </p>
          )}
        </section>

        <section className="mt-12 rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(20,22,31,0.05)] sm:p-8" aria-labelledby="city-questions">
          <h2 id="city-questions" className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">
            Questions avant d&apos;écrire
          </h2>
          <dl className="mt-4">
            {questions.map((item) => (
              <div key={item.q} className="border-t border-[#EEF0F6] py-5 first:border-t-0">
                <dt className="font-semibold">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-[#5C6278]">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="mt-12 rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(20,22,31,0.08)] sm:p-8">
          <h2 className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">Décrivez le projet pour {city.city}</h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#5C6278]">
            Réponse sous un jour ouvré, à <EmailText /> ou sur <a href="https://wa.me/212666650696">WhatsApp</a>. Aucun prix n&apos;est demandé dans ce premier message.
          </p>
          <div className="mt-6">
            <LeadForm variant="sheet" city={city.city} country={city.country} />
          </div>
        </section>
      </article>
    </main>
  );
}
