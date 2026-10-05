import type { Metadata } from "next";
import Link from "next/link";
import { savePageMeta } from "@/lib/actions";
import { listPageMeta, type PageMeta } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Métas des pages",
  robots: { index: false, follow: false },
};

const groups: Array<{ kind: PageMeta["kind"]; title: string }> = [
  { kind: "client", title: "Pages clients" },
  { kind: "category", title: "Pages catégories" },
  { kind: "city", title: "Pages villes" },
];

type Props = { searchParams: Promise<{ saved?: string; error?: string }> };

export default async function PageMetaAdmin({ searchParams }: Props) {
  const query = await searchParams;
  const rows = listPageMeta();

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-serif text-5xl">Titres et meta descriptions</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Chaque fiche client, chaque catégorie et chaque ville a sa balise title et sa
        meta description. L&apos;enregistrement est immédiat sur la page publique.
      </p>
      {query.saved ? (
        <p className="mt-6 border border-moss bg-white p-4 text-sm" role="status">
          Enregistré pour {query.saved}.
        </p>
      ) : null}
      {query.error ? (
        <p className="mt-6 border border-copper bg-white p-4 text-sm" role="alert">
          Le titre et la meta description sont requis.
        </p>
      ) : null}

      {groups.map((group) => (
        <section key={group.kind} className="mt-12">
          <h2 className="font-serif text-3xl">{group.title}</h2>
          <ul className="mt-6 space-y-6">
            {rows
              .filter((row) => row.kind === group.kind)
              .map((row) => (
                <li key={row.path} className="border border-line p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="font-serif text-2xl">{row.label}</h3>
                    <Link href={row.path} className="text-sm hover:text-copper">
                      {row.path}
                    </Link>
                  </div>
                  <form action={savePageMeta} className="mt-4 grid gap-3">
                    <input type="hidden" name="path" value={row.path} />
                    <label className="grid gap-1 text-sm">
                      Balise title
                      <input
                        name="meta_title"
                        required
                        maxLength={70}
                        defaultValue={row.meta_title}
                        className="border border-line bg-white px-3 py-2"
                      />
                      <span className="text-muted">{row.meta_title.length}/60 visé, 70 maximum</span>
                    </label>
                    <label className="grid gap-1 text-sm">
                      Meta description
                      <textarea
                        name="meta_description"
                        required
                        maxLength={180}
                        rows={3}
                        defaultValue={row.meta_description}
                        className="border border-line bg-white px-3 py-2"
                      />
                      <span className="text-muted">
                        {row.meta_description.length}/160 visé, 180 maximum
                      </span>
                    </label>
                    <button type="submit" className="justify-self-start bg-ink px-4 py-2 text-paper">
                      Enregistrer
                    </button>
                  </form>
                </li>
              ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
