import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { login } from "@/lib/actions";
import { isAuthed, passwordConfigured } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Accès tableau de bord",
  robots: { index: false, follow: false },
};

type Props = { searchParams: Promise<{ error?: string }> };

export default async function LoginPage({ searchParams }: Props) {
  if (await isAuthed()) redirect("/dashboard");
  const query = await searchParams;

  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <h1 className="font-serif text-4xl">Tableau de bord</h1>
      <p className="mt-4 text-muted">
        Les demandes et la carte de mots-clés restent hors du site public.
      </p>
      {!passwordConfigured() ? (
        <p className="mt-6 border border-copper p-4 text-sm" role="alert">
          Ajoutez DASHBOARD_PASSWORD dans .env.local, puis relancez le serveur.
        </p>
      ) : (
        <form action={login} className="mt-8 grid gap-4">
          {query.error ? (
            <p className="text-sm text-copper" role="alert">
              Mot de passe refusé.
            </p>
          ) : null}
          <label className="grid gap-1 text-sm">
            Mot de passe
            <input
              name="password"
              type="password"
              required
              autoComplete="current-password"
              className="border border-line bg-white px-3 py-2"
            />
          </label>
          <button type="submit" className="justify-self-start bg-ink px-5 py-3 text-paper">
            Entrer
          </button>
        </form>
      )}
    </main>
  );
}
