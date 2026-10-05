import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Écrire à Byte Force à Casablanca pour un site, une application ou un logiciel sur mesure.",
  alternates: { canonical: "/contact" },
};

type Props = { searchParams: Promise<{ sent?: string; error?: string }> };

export default async function ContactPage({ searchParams }: Props) {
  const query = await searchParams;

  return (
    <main className="grid gap-16 px-6 py-16 md:grid-cols-12 md:px-12 md:py-24">
      <div className="md:col-span-5">
        <h1 className="display text-[clamp(3.2rem,7vw,6.5rem)]">Écrire.</h1>
        <p className="mt-10 text-2xl tracking-tight">
          <a href={`tel:${site.phone}`}>{site.phoneDisplay}</a>
        </p>
        <p className="mt-3">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <p className="mt-3">
          <a href="https://wa.me/212666650696">WhatsApp</a>
        </p>
        <p className="mt-6 text-sm text-mute">Réponse sous un jour ouvré.</p>
        <p className="mt-8 text-sm text-mute">
          {site.street}
          <br />
          {site.locality}, {site.postal} {site.city}
          <br />
          {site.hoursLabel}
        </p>
      </div>
      <div className="md:col-span-6 md:col-start-7">
        {query.sent ? (
          <p className="text-3xl leading-snug" role="status">
            Demande enregistrée. On revient vers vous.
          </p>
        ) : null}
        {query.error ? (
          <p className="mb-6 text-sm" role="alert">
            Le nom, l&apos;email et le message sont nécessaires.
          </p>
        ) : null}
        {!query.sent ? <LeadForm /> : null}
      </div>
    </main>
  );
}
