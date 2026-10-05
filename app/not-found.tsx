import Link from "next/link";

export default function NotFound() {
  return (
    <main className="px-6 py-24 md:px-12">
      <h1 className="display text-6xl">Page introuvable.</h1>
      <p className="mt-4 text-muted">Cette adresse ne correspond à aucune offre ni réalisation.</p>
      <Link href="/" className="mt-8 inline-block border-b border-ink">
        Retour à l&apos;accueil
      </Link>
    </main>
  );
}
