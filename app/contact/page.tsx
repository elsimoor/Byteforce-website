import type { Metadata } from "next";
import { LeadForm } from "@/components/lead-form";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { MailLink } from "@/components/mail-link";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const contactMeta = seoMeta["/contact"];

export const metadata: Metadata = {
  title: { absolute: contactMeta.title },
  description: contactMeta.description,
  alternates: { canonical: "/contact" },
  openGraph: openGraph("/contact", contactMeta.title, contactMeta.description),
};

type Props = { searchParams: Promise<{ sent?: string; error?: string; service?: string; budget?: string; message?: string }> };

const whatsappText = "Bonjour, je souhaite parler d'un projet.";

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <path d="M8 4h2l1.5 3.5-1.5 1a12 12 0 0 0 5.5 5.5l1-1.5L20 14v2a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2A8.7 8.7 0 0 0 4.6 16.3L3.4 20.6l4.4-1.2A8.7 8.7 0 1 0 12 3.2zm4.8 12.3c-.2.6-1.2 1.1-1.6 1.1-.4.1-.9.2-2.9-.6-2.4-1-4-3.5-4.1-3.6-.1-.2-1.1-1.4-1.1-2.7s.7-1.9 1-2.2c.2-.2.5-.3.7-.3h.5c.2 0 .4 0 .6.5.2.6.8 2 .8 2.1.1.1.1.3 0 .4-.1.2-.2.3-.3.5l-.4.4c-.1.1-.2.3-.1.5.2.3.7 1.2 1.6 1.9 1.1.9 2 1.1 2.3 1.3.2.1.4.1.5-.1l.6-.7c.2-.2.3-.2.5-.1.2.1 1.4.7 1.6.8.2.1.4.2.4.3.1.3.1.8-.1 1.1z" />
    </svg>
  );
}

const lines = [
  ["01", "Qui vous êtes", "Votre nom et un email."],
  ["02", "Ce qui existe", "Un site, un fichier ou un outil."],
  ["03", "Ce qui doit changer", "Qui fait l'action aujourd'hui, où elle se passe, ce qui bloque."],
];

export default async function ContactPage({ searchParams }: Props) {
  const query = await searchParams;

  return (
    <main data-landing className="w-full bg-[#F4F6FC] text-[#14161F]">
      <article className="mx-auto w-full max-w-[1120px] px-5 py-12 sm:px-8 lg:py-16">
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Contact", path: "/contact" }]} />
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,32rem)] lg:gap-14">
          <div className="min-w-0">
            <p className="font-mono text-xs tracking-[0.08em] text-primary uppercase">Contact · Devis gratuit sous 24 h</p>
            <h1 className="mt-4 max-w-[12ch] font-headline text-[clamp(2.75rem,5vw,3.75rem)] leading-[1.02] font-extrabold tracking-[-0.04em]">
              Contactez-nous.
            </h1>
            <p className="mt-5 max-w-[34rem] text-base leading-relaxed text-[#3A3F55]">
              Un fichier Excel, un outil en place ou un site qui ne produit pas de demandes : c&apos;est assez pour commencer. Pas besoin de cahier des charges complet.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <a href={`tel:${site.phone}`} className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF1FF] text-primary">
                  <PhoneIcon />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">Téléphone</span>
                  <span className="mt-0.5 block font-semibold">{site.phoneDisplay}</span>
                </span>
              </a>
              <div className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(20,22,31,0.05)]">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EEF1FF] text-primary">
                  <MailIcon />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">Email</span>
                  <MailLink className="mt-0.5 block font-semibold text-[#14161F]" label={site.email} />
                </span>
              </div>
              <a
                href={`https://wa.me/212666650696?text=${encodeURIComponent(whatsappText)}`}
                className="flex items-center gap-4 rounded-2xl bg-white px-4 py-4 shadow-[0_10px_30px_rgba(20,22,31,0.05)]"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#E7F8EE] text-[#1E7A46]">
                  <WhatsAppIcon />
                </span>
                <span>
                  <span className="block font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">WhatsApp</span>
                  <span className="mt-0.5 block font-semibold">Message déjà rédigé</span>
                </span>
              </a>
              <div className="grid gap-6 rounded-2xl bg-white px-5 py-5 shadow-[0_10px_30px_rgba(20,22,31,0.05)] sm:grid-cols-2">
                <div>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">Bureau</p>
                  <p className="mt-2 text-sm leading-relaxed font-medium">
                    {site.street}
                    <br />
                    {site.locality}, {site.postal} {site.city}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[11px] tracking-[0.08em] text-[#8B90A5] uppercase">Réponse</p>
                  <p className="mt-2 text-sm leading-relaxed font-medium">
                    Lundi au vendredi
                    <br />9 h à 19 h
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_24px_60px_rgba(20,22,31,0.08)] sm:p-8">
            <h2 className="font-headline text-[1.75rem] font-extrabold tracking-[-0.03em]">Décrivez votre projet</h2>
            <p className="mt-1.5 text-sm text-[#5C6278]">Aucun prix n&apos;est demandé dans ce premier message.</p>
            {query.sent ? (
              <p className="mt-8 text-2xl leading-snug" role="status">
                Demande enregistrée. On revient vers vous.
              </p>
            ) : null}
            {query.error ? (
              <p className="mt-6 text-sm" role="alert">
                Le nom, l&apos;email et le message sont nécessaires.
              </p>
            ) : null}
            {!query.sent ? (
              <div className="mt-6">
                <LeadForm variant="sheet" initial={{ service: query.service, budget: query.budget, message: query.message }} />
              </div>
            ) : null}
          </div>
        </div>

        <section className="mt-16" aria-labelledby="message-utile">
          <p className="font-mono text-xs tracking-[0.08em] text-primary uppercase">Le message utile</p>
          <h2 id="message-utile" className="mt-3 font-headline text-[2rem] font-extrabold tracking-[-0.03em]">
            Trois lignes suffisent.
          </h2>
          <ol className="mt-6 grid gap-4 md:grid-cols-3">
            {lines.map(([index, title, text]) => (
              <li key={index} className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_rgba(20,22,31,0.04)]">
                <p className="font-headline text-lg font-extrabold text-primary">{index}</p>
                <p className="mt-3 font-semibold">{title}</p>
                <p className="mt-1 text-sm leading-relaxed text-[#5C6278]">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-[62rem] text-sm leading-relaxed text-[#5C6278]">
            Si le sujet n&apos;est pas un logiciel, un site ou une application, la réponse le dit. Il n&apos;y a pas de bureau en France ni au Canada : les projets lillois et montréalais du catalogue ont été faits depuis Casablanca.
          </p>
        </section>
      </article>
    </main>
  );
}
