import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { getService, projectsForService, services } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: { title: service.title, description: service.summary },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = projectsForService(service.slug);

  return (
    <main>
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
        </div>
        <div className="md:col-span-5 md:col-start-8">
          <h2 className="display text-4xl">Écrire</h2>
          <div className="mt-8">
            <LeadForm />
          </div>
        </div>
      </section>

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
