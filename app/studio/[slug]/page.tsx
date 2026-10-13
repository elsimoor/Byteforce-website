import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { getStudioSection, studioSections } from "@/lib/studio-sections";
import { ldJson, site } from "@/lib/site";
import { openGraph } from "@/lib/open-graph";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return studioSections.map((section) => ({ slug: section.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const section = getStudioSection(slug);
  if (!section) return {};
  const path = `/studio/${section.slug}`;
  return {
    title: { absolute: section.titleTag },
    description: section.description,
    alternates: { canonical: path },
    openGraph: openGraph(path, section.titleTag, section.description),
  };
}

export default async function StudioSectionPage({ params }: Props) {
  const { slug } = await params;
  const section = getStudioSection(slug);
  if (!section) notFound();
  const path = `/studio/${section.slug}`;
  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: section.faqs.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
  const linked = new Set(section.links.map((item) => item.href));
  const others = studioSections.filter((item) => item.slug !== section.slug && !linked.has(`/studio/${item.slug}`));

  return (
    <main>
      <article>
        <BreadcrumbJsonLd
          items={[
            { name: "Accueil", path: "/" },
            { name: "Studio", path: "/studio" },
            { name: section.title, path },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: ldJson(faq) }} />
        <header className="px-6 pb-12 pt-16 md:px-12 md:pt-28">
          <p className="font-mono text-xs font-bold tracking-[0.16em] text-primary uppercase">Le studio</p>
          <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.6rem,6vw,5.2rem)]">{section.h1}</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">{section.lede}</p>
          <Link href="/contact" className="btn mt-8">
            Parler d&apos;un projet
          </Link>
        </header>
        {section.blocks.map((block) => (
          <section key={block.h} className="border-t border-line px-6 py-14 md:px-12">
            <h2 className="display max-w-[18ch] text-4xl">{block.h}</h2>
            <div className="mt-8 max-w-xl space-y-4 leading-relaxed">
              {block.p.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
        <section className="border-t border-line px-6 py-16 md:px-12 md:py-24">
          <h2 className="display text-4xl">Questions sur cette page</h2>
          <dl className="mt-10 max-w-3xl">
            {section.faqs.map((item) => (
              <div key={item.q} className="border-t border-line py-6">
                <dt className="text-lg">{item.q}</dt>
                <dd className="mt-2 text-sm leading-relaxed text-mute">{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
        <section className="border-t border-line px-6 py-16 md:px-12">
          <h2 className="display text-4xl">Continuer sur le site</h2>
          <nav aria-label="Pages liées" className="mt-8 flex max-w-xl flex-col">
            {section.links.map((item) => (
              <Link key={item.href + item.label} href={item.href} className="border-b border-line py-3">
                {item.label}
              </Link>
            ))}
            {others.map((item) => (
              <Link key={item.slug} href={`/studio/${item.slug}`} className="border-b border-line py-3">
                {item.title}
              </Link>
            ))}
          </nav>
          <p className="mt-8 max-w-xl text-sm leading-relaxed text-mute">
            {site.street}, {site.locality}, {site.postal} {site.city}. {site.phoneDisplay}. {site.hoursLabel}.
          </p>
        </section>
      </article>
    </main>
  );
}
