import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getService, projectsForService, services } from "@/lib/content";
import { site } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/services/${service.slug}`;
  const title = `${service.title} · Byte Force`;
  return {
    title: { absolute: title },
    description: service.summary,
    alternates: { canonical: path },
    openGraph: { title, description: service.summary, locale: "fr_FR", url: path },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = projectsForService(service.slug);
  const path = `/services/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${site.url}/services` },
          { "@type": "ListItem", position: 3, name: service.title, item: `${site.url}${path}` },
        ],
      },
      {
        "@type": "Service",
        name: service.title,
        serviceType: service.primaryKeyword,
        url: `${site.url}${path}`,
        description: service.summary,
        areaServed: "MA",
        provider: { "@id": `${site.url}/#business` },
      },
      ...(service.faqs?.length
        ? [
            {
              "@type": "FAQPage",
              mainEntity: service.faqs.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="px-6 pb-16 pt-16 md:px-12 md:pt-24">
        <p className="text-sm text-mute">
          <Link href="/services">Pratique</Link>
        </p>
        <h1 className="display mt-6 max-w-[14ch] text-[clamp(3.2rem,8vw,7rem)]">{service.title}</h1>
        <p className="mt-8 max-w-md text-lg">{service.summary}</p>
      </header>

      <section className="grid gap-16 border-t border-line px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
        <div className="md:col-span-6">
          <p className="max-w-md text-lg leading-relaxed">{service.problem}</p>
          <ul className="mt-10 space-y-3 text-sm">
            {service.includes.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md text-mute">{service.audience}</p>
          {service.links?.length ? (
            <nav aria-label="Pages liées" className="mt-8 flex flex-col gap-2 text-sm">
              {service.links.map((item) => (
                <Link key={item.href} href={item.href} className="border-b border-line py-2">
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 className="display text-4xl">Écrire</h2>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

      {service.sections?.map((section) => (
        <section key={section.heading} className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display max-w-[18ch] text-4xl md:text-5xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 max-w-2xl text-lg leading-relaxed">
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      {service.faqs?.length ? (
        <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display text-4xl">Questions</h2>
          <dl className="mt-10 max-w-3xl">
            {service.faqs.map((item) => (
              <div key={item.q} className="border-t border-line py-6">
                <dt className="text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-mute">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      ) : null}

      {related.length > 0 ? (
        <section className="border-t border-line">
          {related.map((project) => (
            <Link
              key={project.slug}
              href={`/realisations/${project.slug}`}
              className="index-row flex items-baseline justify-between gap-6 border-b border-line px-6 py-8 md:px-12"
            >
              <span className="display text-3xl md:text-5xl">{project.title}</span>
              <span className="text-sm text-mute">
                {project.city} · {project.year}
              </span>
            </Link>
          ))}
        </section>
      ) : null}
    </main>
  );
}
