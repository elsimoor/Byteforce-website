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
    { name: city.pillarCrumb, path: city.pillar.href },
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
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(schema) }} />
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
        <nav aria-label="Fil d'Ariane" className="flex flex-wrap gap-x-2 text-sm text-mute">
          {crumbs.map((crumb, index) => {
            const last = index === crumbs.length - 1;
            return (
              <span key={crumb.path}>
                {index > 0 ? " · " : null}
                {last ? crumb.name : <Link href={crumb.path}>{crumb.name}</Link>}
              </span>
            );
          })}
        </nav>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(3rem,7vw,6.4rem)]">{city.h1}</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">{city.lede}</p>
        <p className="mt-6">
          <Link href="/contact" className="border-b border-ink">
            Écrire pour en parler
          </Link>
        </p>
      </header>

      {city.sections.map((section) => (
        <section key={section.heading} className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display max-w-[18ch] text-4xl">{section.heading}</h2>
          <div className="mt-6 max-w-2xl space-y-4 leading-relaxed">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      ))}

      <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <h2 className="display text-4xl">Pages liées</h2>
        <ul className="mt-8 max-w-xl space-y-3 text-sm">
          <li className="border-t border-line pt-3">
            <Link href={city.pillar.href}>{city.pillar.label}</Link>
          </li>
          {city.services.map((service) => (
            <li key={service.href} className="border-t border-line pt-3">
              <Link href={service.href}>{service.label}</Link>
            </li>
          ))}
          <li className="border-t border-line pt-3">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
        {studies.length > 0 ? (
          <ul className="mt-12 space-y-6">
            {studies.map((project) => (
              <li key={project.slug}>
                <Link href={`/realisations/${project.slug}`} className="text-2xl">
                  {project.title}
                </Link>
                <p className="mt-2 text-sm text-mute">{project.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-12 max-w-xl text-sm text-mute">
            Aucun projet du catalogue n&apos;est publié à {city.city}. On n&apos;en ajoute pas un pour remplir la page.
          </p>
        )}
      </section>

      <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
        <h2 className="display text-4xl">Questions avant d&apos;écrire</h2>
        <dl className="mt-10 max-w-3xl">
          {questions.map((item) => (
            <div key={item.q} className="border-t border-line py-6">
              <dt className="text-lg">{item.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-mute">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-12 border-t border-line px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-5">
          <h2 className="display text-5xl">Écrire.</h2>
          <p className="mt-6 max-w-sm leading-relaxed">
            Décrivez le projet pour {city.city}. Réponse sous un jour ouvré, à <EmailText /> ou sur{" "}
            <a href="https://wa.me/212666650696">WhatsApp</a>.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <LeadForm city={city.city} country={city.country} />
        </div>
      </section>
    </main>
  );
}
