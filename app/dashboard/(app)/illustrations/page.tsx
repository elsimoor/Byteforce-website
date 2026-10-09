import type { Metadata } from "next";
import { IllustrationBoard } from "@/components/illustrations/board";

export const metadata: Metadata = {
  title: "Illustrations",
  robots: { index: false, follow: false },
};

export default function IllustrationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="font-serif text-5xl">Illustrations</h1>
      <p className="mt-4 max-w-2xl text-muted">
        Vingt schémas d&apos;essai. Ils restent dans le tableau de bord. Aucun n&apos;est posé sur une page publique tant qu&apos;il n&apos;a pas été choisi pour elle.
      </p>
      <IllustrationBoard />
    </main>
  );
}
