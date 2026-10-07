import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Confidentialité",
  description: "Comment Byte Force traite les messages envoyés par le formulaire de contact.",
  alternates: { canonical: "/confidentialite" },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="font-headline text-5xl font-black tracking-tight">Confidentialité</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-on-surface-variant">
        <p>
          Byte Force, {site.street}, {site.locality}, {site.postal} {site.city}, {site.countryLabel}. Contact :{" "}
          {site.email}, {site.phoneDisplay}.
        </p>
        <p>
          Le formulaire enregistre le nom, l&apos;email, le téléphone, la société, l&apos;offre et le message pour
          pouvoir répondre. Ces messages ne sont pas publiés.
        </p>
        <p>Réponse sous un jour ouvré. {site.hoursLabel}.</p>
        <p>Pour demander ce qui est conservé sur un message envoyé, écrire à {site.email}.</p>
      </div>
    </main>
  );
}
