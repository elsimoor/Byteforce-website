import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/lead-form";
import { PluginBreak, PluginFlow, PluginShelf } from "@/components/wordpress-plugin-lab";
import { getService, projectsForService, services } from "@/lib/content";
import { openGraph } from "@/lib/open-graph";
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
    openGraph: openGraph(path, title, service.summary),
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const related = projectsForService(service.slug);
  const pluginsPage = service.slug === "plugins-wordpress";
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
          {pluginsPage && section.heading === "Ajouter seulement le geste qui manque" ? <PluginFlow lang="fr" /> : null}
        </section>
      ))}

      {service.plugins?.length ? (
        <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display max-w-[16ch] text-4xl md:text-5xl">Plugins déjà écrits</h2>
          <div className="mt-12 max-w-3xl">
            {service.plugins.map((plugin) => (
              <article key={plugin.href} className="border-t border-line py-10">
                <h3 className="display text-3xl">{plugin.name}</h3>
                <p className="mt-2 text-sm text-mute">
                  {plugin.version} · {plugin.needs}
                </p>
                <p className="mt-4 max-w-2xl leading-relaxed">{plugin.summary}</p>
                <p className="mt-6">
                  <a href={plugin.href} className="border-b border-ink pb-1" download>
                    Télécharger {plugin.name}
                  </a>
                </p>
              </article>
            ))}
          </div>
          {pluginsPage ? (
            <>
              <PluginShelf lang="fr" />
              <PluginBreak lang="fr" />
            </>
          ) : null}
          <div className="mt-4 max-w-2xl border-t border-line pt-10">
            <h3 className="display text-3xl">Quand écrire</h3>
            <p className="mt-4 leading-relaxed">
              Écrivez si le site est déjà sous WordPress et qu&apos;une extension du marché force à changer le parcours, ou casse à chaque mise à jour. Dites le geste que l&apos;équipe doit pouvoir faire, et ce qui est déjà installé.
            </p>
            <p className="mt-4 leading-relaxed">
              Le premier échange dure trente minutes et il est gratuit. La réponse part sous un jour ouvré.
            </p>
            <p className="mt-6">
              <Link href="/contact" className="border-b border-ink pb-1">
                Parler d&apos;un plugin
              </Link>
            </p>
          </div>
        </section>
      ) : null}

      {service.en ? (
        <div lang="en" className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <p className="text-sm text-mute">English</p>
          <h2 className="display mt-6 max-w-[18ch] text-4xl md:text-5xl">{service.en.h1}</h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed">{service.en.summary}</p>
          {service.en.sections.map((section) => (
            <section key={section.heading} className="mt-12">
              <h3 className="display max-w-[20ch] text-3xl">{section.heading}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4 max-w-2xl leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {pluginsPage && section.heading === "Add only the missing action" ? <PluginFlow lang="en" /> : null}
            </section>
          ))}
          {pluginsPage ? (
            <>
              <PluginShelf lang="en" />
              <PluginBreak lang="en" />
            </>
          ) : null}
          <p className="mt-8">
            <Link href="/contact" className="border-b border-ink pb-1">
              Talk about the plugin
            </Link>
          </p>
        </div>
      ) : null}

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
