import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { cities, getCity } from "@/lib/catalog";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

const offers = [
  { href: "/services/logiciel-sur-mesure", label: "Logiciel sur mesure" },
  { href: "/services/creation-site-web", label: "Site web" },
  { href: "/services/applications-mobiles", label: "Application mobile" },
  { href: "/services/audit-correction", label: "Audit d'un produit déjà écrit" },
];

export function generateStaticParams() {
  return cities().map((city) => ({ slug: city.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) return {};
  return {
    title: { absolute: city.title },
    description: city.description,
    alternates: { canonical: city.path },
    openGraph: { title: city.title, description: city.description },
  };
}

function joinNames(names: string[]) {
  if (names.length <= 1) return names[0] ?? "";
  return `${names.slice(0, -1).join(", ")} et ${names[names.length - 1]}`;
}

export default async function CityPage({ params }: Props) {
  const { slug } = await params;
  const city = getCity(slug);
  if (!city) notFound();
  const names = joinNames(city.projects.map((project) => project.title));
  const shipped =
    city.projects.length > 1 ? `Les projets déjà en ligne sont ${names}.` : `Le projet déjà en ligne est ${names}.`;
  const questions = [
    {
      q: `Peut-on confier un projet ${city.placeLabel} à une équipe à Casablanca ?`,
      a: `Oui. Byte Force travaille depuis le Technopark, à Casablanca, pour une entreprise ${city.placeLabel}. ${shipped}`,
    },
    {
      q: "Que faire si le logiciel a déjà été écrit par quelqu'un d'autre ?",
      a: "On peut lire le produit, corriger ce qui bloque l'usage, ou continuer dessus. Si une reprise complète est le chemin honnête, on le dit avant de construire.",
    },
    {
      q: "Comment démarrer ?",
      a: "Le formulaire demande le nom, l'email et le projet. La réponse part sous un jour ouvré. Le code, le dépôt et les comptes d'hébergement livrés reviennent au client.",
    },
  ];
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: city.title,
    serviceType: "Développement logiciel",
    url: `${site.url}${city.path}`,
    description: city.description,
    areaServed: {
      "@type": city.city === "Nord" ? "AdministrativeArea" : "City",
      name: city.city,
    },
    provider: {
      "@type": "ProfessionalService",
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.street,
        addressLocality: site.city,
        postalCode: site.postal,
        addressCountry: site.country,
      },
    },
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
        <p className="text-sm text-mute">
          <Link href="/realisations">Travaux</Link>
          {" · "}
          {city.country}
        </p>
        <h1 className="display mt-6 max-w-[16ch] text-[clamp(3rem,7vw,6.4rem)]">{city.title}</h1>
        <p className="mt-8 max-w-xl text-lg leading-relaxed">
          Byte Force conçoit le logiciel, le site ou l&apos;application d&apos;une entreprise qui cherche quelqu&apos;un
          pour mener un projet {city.placeLabel}. Le bureau est à Casablanca.{" "}
          <Link href="/contact" className="border-b border-ink">
            Écrire pour en parler
          </Link>
          .
        </p>
      </header>

      <section className="grid gap-12 border-t border-line px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-6">
          <h2 className="display text-4xl">Le projet</h2>
          <p className="mt-6 max-w-md leading-relaxed">
            Une entreprise {city.placeLabel} peut arriver avec un outil à créer, un site qui ne produit pas de demandes,
            ou un produit déjà en ligne à reprendre. Le périmètre s&apos;écrit avant le démarrage.
          </p>
          <ul className="mt-8 space-y-3 text-sm">
            {offers.map((offer) => (
              <li key={offer.href} className="border-t border-line pt-3">
                <Link href={offer.href}>{offer.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 className="display text-4xl">Déjà en ligne {city.placeLabel}</h2>
          <ul className="mt-8 space-y-6">
            {city.projects.map((project) => (
              <li key={project.slug}>
                <Link href={`/realisations/${project.slug}`} className="text-2xl">
                  {project.title}
                </Link>
                <p className="mt-2 text-sm text-mute">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
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
            Décrivez le projet {city.placeLabel}. Réponse sous un jour ouvré, à {site.email} ou sur{" "}
            <a href="https://wa.me/212666650696">WhatsApp</a>.
          </p>
        </div>
        <div className="md:col-span-6 md:col-start-7">
          <LeadForm />
        </div>
      </section>
    </main>
  );
}
