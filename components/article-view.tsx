import Link from "next/link";
import type { Article } from "@/lib/articles";
import { site } from "@/lib/site";

function Rich({ text }: { text: string }) {
  const bits = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {bits.map((bit, index) => {
        const match = /^\[\[([^|\]]+)\|([^\]]+)\]\]$/.exec(bit);
        if (!match) return <span key={index}>{bit}</span>;
        if (match[1].startsWith("http")) {
          return (
            <a key={index} href={match[1]} className="border-b border-ink">
              {match[2]}
            </a>
          );
        }
        return (
          <Link key={index} href={match[1]} className="border-b border-ink">
            {match[2]}
          </Link>
        );
      })}
    </>
  );
}

export function ArticleView({ article }: { article: Article }) {
  const path = `/insights/${article.slug}`;
  const url = `${site.url}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Accueil", item: `${site.url}/` },
          { "@type": "ListItem", position: 2, name: "Décisions", item: `${site.url}/insights` },
          { "@type": "ListItem", position: 3, name: article.h1, item: url },
        ],
      },
      {
        "@type": "Article",
        headline: article.h1,
        description: article.description,
        inLanguage: "fr",
        datePublished: article.date,
        url,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
          logo: { "@type": "ImageObject", url: `${site.url}/logo.png` },
        },
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="px-6 pb-10 pt-16 md:px-12 md:pt-24">
        <p className="text-sm text-mute">
          <Link href="/insights">Décisions</Link>
          {" · "}
          <time dateTime={article.date}>8 octobre 2026</time>
        </p>
        <h1 className="display mt-6 max-w-[18ch] text-[clamp(2.6rem,6vw,5.5rem)]">{article.h1}</h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed">{article.lede}</p>
        <p className="mt-6">
          <Link href="/contact" className="border-b border-ink pb-1">
            Parler du projet
          </Link>
        </p>
        {article.figures?.length ? (
          <div className="mt-10 grid max-w-3xl gap-8">
            {article.figures.map((figure) => (
              <figure key={figure.src}>
                <img src={figure.src} alt={figure.alt} className="w-full border border-line" />
                <figcaption className="mt-3 text-sm text-mute">{figure.caption}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>
      {article.sections.map((section) => (
        <section key={section.heading} className="border-t border-line px-6 py-14 md:px-12">
          <h2 className="display max-w-[20ch] text-4xl">{section.heading}</h2>
          <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                <Rich text={paragraph} />
              </p>
            ))}
          </div>
        </section>
      ))}
      {article.en ? (
        <div lang="en">
          <div className="border-t border-line px-6 py-14 md:px-12">
            <p className="text-sm text-mute">English</p>
            <h2 className="display mt-6 max-w-[18ch] text-[clamp(2.2rem,5vw,4rem)]">{article.en.h1}</h2>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed">
              <Rich text={article.en.lede} />
            </p>
            <p className="mt-6">
              <Link href="/contact" className="border-b border-ink pb-1">
                Talk about the project
              </Link>
            </p>
          </div>
          {article.en.sections.map((section) => (
            <section key={section.heading} className="border-t border-line px-6 py-14 md:px-12">
              <h2 className="display max-w-[20ch] text-4xl">{section.heading}</h2>
              <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>
                    <Rich text={paragraph} />
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>
      ) : null}
      <section className="border-t border-line px-6 py-14 md:px-12">
        <h2 className="text-sm text-mute">Pages liées</h2>
        <ul className="mt-4 flex flex-col gap-2">
          {article.links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="border-b border-ink pb-1">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
