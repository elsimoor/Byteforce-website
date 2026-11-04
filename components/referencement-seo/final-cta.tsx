import Link from "next/link";
import { MailLink } from "@/components/mail-link";
import { site } from "@/lib/site";

export function FinalCta() {
  const whatsapp = `https://wa.me/${site.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    "Bonjour Byte Force, je souhaite un audit SEO."
  )}`;

  return (
    <section aria-labelledby="final-titre" className="bg-ink px-6 py-16 text-inverse-on-surface md:px-12 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 id="final-titre" className="display max-w-[16em] text-4xl md:text-6xl">
          Le référencement utile est celui qui amène une demande.
        </h2>
        <p className="mt-6 max-w-[62ch] text-base leading-relaxed text-inverse-on-surface/80 md:text-lg">
          Dites quelle offre doit être trouvée, et ce qui existe déjà. Réponse sous un jour ouvré, du lundi au vendredi, 9 h–19 h.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link href="/contact" className="inline-flex items-center justify-center bg-white px-6 py-3.5 text-sm font-medium text-ink hover:bg-primary-fixed">
            Parlons de votre projet SEO
          </Link>
          <a
            href={whatsapp}
            className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 text-sm font-medium text-white hover:border-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {site.phoneDisplay}
          </a>
        </div>
        <p className="mt-8 text-sm text-inverse-on-surface/80">
          <a href={`tel:${site.phone}`} className="underline decoration-white/40 underline-offset-4">
            {site.phoneDisplay}
          </a>
          <span aria-hidden="true"> · </span>
          <MailLink className="underline decoration-white/40 underline-offset-4" />
          <span aria-hidden="true"> · </span>
          <span>
            {site.street}, {site.locality}, {site.postal} {site.city}
          </span>
        </p>
      </div>
    </section>
  );
}
