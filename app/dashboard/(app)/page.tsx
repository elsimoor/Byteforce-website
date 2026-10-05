import type { Metadata } from "next";
import Link from "next/link";
import { listActions, listKeywords, listLeads } from "@/lib/db";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Demandes",
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  const leads = listLeads();
  const keywords = listKeywords();
  const actions = listActions();
  const openActions = actions.filter((item) => item.status !== "fait").length;
  const principals = keywords.filter((item) => item.role === "principal").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-serif text-5xl">Demandes</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Chaque envoi du formulaire est enregistré ici, dans SQLite, sur cette machine.
      </p>
      <dl className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="border border-line p-4">
          <dt className="text-sm text-muted">Demandes</dt>
          <dd className="font-serif text-4xl">{leads.length}</dd>
        </div>
        <div className="border border-line p-4">
          <dt className="text-sm text-muted">Mots-clés principaux</dt>
          <dd className="font-serif text-4xl">{principals}</dd>
        </div>
        <div className="border border-line p-4">
          <dt className="text-sm text-muted">Travaux ouverts</dt>
          <dd className="font-serif text-4xl">{openActions}</dd>
        </div>
      </dl>
      <p className="mt-6 text-sm">
        <Link href="/dashboard/strategie" className="border-b border-ink">
          Ouvrir la carte de mots-clés
        </Link>
      </p>

      <h2 className="mt-12 font-serif text-3xl">Dernières demandes</h2>
      {leads.length === 0 ? (
        <p className="mt-4 text-muted">Aucune demande pour le moment.</p>
      ) : (
        <ul className="mt-6 divide-y divide-line border-y border-line">
          {leads.map((lead) => (
            <li key={lead.id} className="grid gap-2 py-5 md:grid-cols-4">
              <div>
                <p className="font-medium">{lead.name}</p>
                <p className="text-sm text-muted">{lead.company || "Sans société"}</p>
              </div>
              <div className="text-sm">
                <p>{lead.email}</p>
                <p>{lead.phone}</p>
              </div>
              <p className="text-sm">{lead.service || "Offre non précisée"}</p>
              <div className="text-sm">
                <p>{lead.message}</p>
                <p className="mt-2 text-muted">{lead.created_at.slice(0, 16).replace("T", " ")}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
