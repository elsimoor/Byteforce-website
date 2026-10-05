import type { Metadata } from "next";
import { addAction, addKeyword, removeKeyword, updateAction, updateKeyword } from "@/lib/actions";
import { services } from "@/lib/content";
import { listActions, listKeywords, type KeywordRow } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stratégie SEO",
  description: "Carte de mots-clés et travaux en cours pour attirer des clients.",
  robots: { index: false, follow: false },
};

const statusLabel: Record<string, string> = {
  a_creer: "À créer",
  en_cours: "En cours",
  publie: "Publié",
  a_faire: "À faire",
  fait: "Fait",
};

type Props = { searchParams: Promise<{ error?: string }> };

function clustersOf(keywords: KeywordRow[]) {
  const groups = new Map<string, KeywordRow[]>();
  for (const keyword of keywords) {
    const list = groups.get(keyword.cluster) ?? [];
    list.push(keyword);
    groups.set(keyword.cluster, list);
  }
  return [...groups.entries()];
}

function conflicts(keywords: KeywordRow[]) {
  const principals = keywords.filter((keyword) => keyword.role === "principal");
  const byPath = new Map<string, string[]>();
  for (const keyword of principals) {
    const list = byPath.get(keyword.target_path) ?? [];
    list.push(keyword.keyword);
    byPath.set(keyword.target_path, list);
  }
  return [...byPath.entries()].filter(([, words]) => words.length > 1);
}

export default async function StrategyPage({ searchParams }: Props) {
  const query = await searchParams;
  const keywords = listKeywords();
  const actions = listActions();
  const groups = clustersOf(keywords);
  const clashes = conflicts(keywords);

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <p className="text-xs uppercase tracking-[0.18em] text-copper">Interne</p>
      <h1 className="mt-3 font-serif text-5xl">Carte de mots-clés</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        Cette page sert à choisir les recherches qui peuvent amener un client, puis
        la page qui doit y répondre. Elle n&apos;est pas indexée.
      </p>

      <section className="mt-8 border border-line bg-white p-5 text-sm leading-relaxed">
        <h2 className="font-serif text-2xl">Règles</h2>
        <ul className="mt-3 list-disc space-y-1 pl-5">
          <li>Un mot-clé principal par URL. Les autres sont des variantes de la même page.</li>
          <li>Garder les requêtes commerciales: quelqu&apos;un cherche un prestataire.</li>
          <li>Ne pas ouvrir une page ville pour une ville que Byte Force ne sert pas.</li>
          <li>Si deux principaux visent la même URL, c&apos;est une cannibalisation. On en retire un.</li>
        </ul>
      </section>

      {clashes.length > 0 ? (
        <p className="mt-6 border border-copper bg-white p-4 text-sm" role="alert">
          Cannibalisation: {clashes.map(([path, words]) => `${path} (${words.join(", ")})`).join(" · ")}
        </p>
      ) : (
        <p className="mt-6 text-sm text-moss">Aucun mot-clé principal en double sur la même URL.</p>
      )}
      {query.error === "duplicate" ? (
        <p className="mt-4 text-sm text-copper" role="alert">
          Ce mot-clé est déjà dans la carte.
        </p>
      ) : null}
      {query.error === "1" ? (
        <p className="mt-4 text-sm text-copper" role="alert">
          Le groupe, le mot-clé et une URL qui commence par / sont requis.
        </p>
      ) : null}

      <h2 className="mt-12 font-serif text-3xl">Carte</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {groups.map(([cluster, rows]) => (
          <section key={cluster} className="border border-line p-5">
            <h3 className="font-serif text-2xl">{cluster}</h3>
            <ul className="mt-4 space-y-3">
              {rows.map((row) => (
                <li key={row.id} className="border-t border-line pt-3 text-sm">
                  <p>
                    <span className="font-medium">{row.keyword}</span>
                    <span className="text-muted"> · {row.role}</span>
                  </p>
                  <p className="text-muted">
                    {row.intent} · priorité {row.priority} · {row.target_path}
                  </p>
                  {row.notes ? <p className="mt-1">{row.notes}</p> : null}
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <form action={updateKeyword} className="flex gap-2">
                      <input type="hidden" name="id" value={row.id} />
                      <select
                        name="status"
                        defaultValue={row.status}
                        className="border border-line bg-white px-2 py-1"
                        aria-label={`Statut de ${row.keyword}`}
                      >
                        <option value="a_creer">À créer</option>
                        <option value="en_cours">En cours</option>
                        <option value="publie">Publié</option>
                      </select>
                      <button type="submit" className="border border-ink px-2 py-1">
                        {statusLabel[row.status] ? "Mettre à jour" : "Mettre à jour"}
                      </button>
                    </form>
                    <form action={removeKeyword}>
                      <input type="hidden" name="id" value={row.id} />
                      <button type="submit" className="text-muted hover:text-copper">
                        Retirer
                      </button>
                    </form>
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <h2 className="mt-14 font-serif text-3xl">Ajouter un mot-clé</h2>
      <form action={addKeyword} className="mt-6 grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Groupe
          <input name="cluster" required list="clusters" className="border border-line bg-white px-3 py-2" />
          <datalist id="clusters">
            {groups.map(([cluster]) => (
              <option key={cluster} value={cluster} />
            ))}
          </datalist>
        </label>
        <label className="grid gap-1 text-sm">
          Mot-clé
          <input name="keyword" required className="border border-line bg-white px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Intention
          <select name="intent" className="border border-line bg-white px-3 py-2" defaultValue="commercial">
            <option value="commercial">Commercial</option>
            <option value="transactionnel">Transactionnel</option>
            <option value="local">Local</option>
            <option value="informationnel">Informationnel</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          URL cible
          <input name="target_path" required list="paths" placeholder="/services/..." className="border border-line bg-white px-3 py-2" />
          <datalist id="paths">
            {services.map((service) => (
              <option key={service.slug} value={`/services/${service.slug}`} />
            ))}
          </datalist>
        </label>
        <label className="grid gap-1 text-sm">
          Rôle
          <select name="role" className="border border-line bg-white px-3 py-2" defaultValue="variante">
            <option value="variante">Variante</option>
            <option value="principal">Principal</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm">
          Priorité
          <select name="priority" className="border border-line bg-white px-3 py-2" defaultValue="2">
            <option value="1">1 · d&apos;abord</option>
            <option value="2">2</option>
            <option value="3">3 · plus tard</option>
          </select>
        </label>
        <label className="grid gap-1 text-sm md:col-span-2">
          Note
          <input name="notes" className="border border-line bg-white px-3 py-2" />
        </label>
        <button type="submit" className="justify-self-start bg-ink px-5 py-3 text-paper">
          Ajouter à la carte
        </button>
      </form>

      <h2 className="mt-14 font-serif text-3xl">Travaux à mener</h2>
      <p className="mt-3 max-w-2xl text-muted">
        Ce qui reste à faire pour que la landing amène de nouveaux clients.
      </p>
      <ul className="mt-6 space-y-4">
        {actions.map((action) => (
          <li key={action.id} className="border border-line p-4">
            <p className="font-medium">{action.title}</p>
            {action.detail ? <p className="mt-1 text-sm text-muted">{action.detail}</p> : null}
            <form action={updateAction} className="mt-3 flex gap-2">
              <input type="hidden" name="id" value={action.id} />
              <select
                name="status"
                defaultValue={action.status}
                className="border border-line bg-white px-2 py-1 text-sm"
                aria-label={`Statut de ${action.title}`}
              >
                <option value="a_faire">À faire</option>
                <option value="en_cours">En cours</option>
                <option value="fait">Fait</option>
              </select>
              <button type="submit" className="border border-ink px-2 py-1 text-sm">
                Mettre à jour
              </button>
            </form>
          </li>
        ))}
      </ul>
      <form action={addAction} className="mt-6 grid gap-3">
        <label className="grid gap-1 text-sm">
          Nouveau travail
          <input name="title" required className="border border-line bg-white px-3 py-2" />
        </label>
        <label className="grid gap-1 text-sm">
          Détail
          <input name="detail" className="border border-line bg-white px-3 py-2" />
        </label>
        <button type="submit" className="justify-self-start border border-ink px-4 py-2">
          Ajouter le travail
        </button>
      </form>
    </main>
  );
}
