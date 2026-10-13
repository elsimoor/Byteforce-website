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
    <main className="max-w-xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="display text-[clamp(3rem,7vw,5rem)]">Tableau de bord</h1>
      <p className="mt-6 text-mute">Les demandes et la carte de mots-clés restent hors du site public.</p>
      {!passwordConfigured() ? (
        <p className="mt-6 text-sm" role="alert">
          Ajoutez DASHBOARD_PASSWORD dans .env.local, puis relancez le serveur.
        </p>
      ) : (
        <form action={login} className="mt-10 max-w-md">
          {query.error ? (
            <p className="mb-4 text-sm" role="alert">
              Mot de passe refusé.
            </p>
          ) : null}
          <label className="grid gap-1 text-sm">
            Mot de passe
            <input name="password" type="password" required autoComplete="current-password" className="field" />
          </label>
          <button type="submit" className="mt-6 border-b border-ink pb-1 text-left text-sm">
            Entrer
          </button>
        </form>
      )}
    </main>
  );
}
