import type { Metadata } from "next";
import { Suspense } from "react";
import { OuEnEst } from "@/components/ou-en-est";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";

const meta = seoMeta["/ou-en-est-le-projet"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/ou-en-est-le-projet" },
  openGraph: openGraph("/ou-en-est-le-projet", meta.title, meta.description),
};

export default function OuEnEstPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Où en est le travail", path: "/ou-en-est-le-projet" },
        ]}
      />
      <section className="mx-auto max-w-3xl px-6 pb-2 pt-16 md:px-12 md:pt-24">
        <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">Où en est le travail.</h1>
        <div className="mt-8 space-y-4 text-lg leading-relaxed text-on-surface-variant">
          <p>
            Cette page sert à situer un projet déjà commencé, ou pas encore commencé. Elle ne donne pas un prix et elle ne crée pas de compte. Cinq questions suffisent : ce qui existe aujourd&apos;hui, ce qui tient, ce qui doit avancer, la tâche en une phrase, puis la liste de ce qu&apos;il reste.
          </p>
          <p>
            Les réponses restent dans le navigateur de la personne qui répond. Rien n&apos;est envoyé tant qu&apos;elle ne choisit pas d&apos;écrire. À la fin, le message de contact est déjà préparé pour le bureau de Byte Force, au Technopark, boulevard Dammam, Aïn Chock, 20001 Casablanca. La réponse part sous un jour ouvré, en semaine, de 9 h à 19 h.
          </p>
          <p>
            Le suivi n&apos;est pas un tableau public. Il n&apos;y a pas de statut affiché pour un client nommé, et pas de pourcentage d&apos;avancement. La liste dit seulement ce que les réponses ont montré : un écran qui tourne déjà, un site en ligne qui bloque, ou un travail qui n&apos;a pas commencé.
          </p>
          <p>
            Si le besoin est un devis plutôt qu&apos;un point d&apos;étape, le formulaire de contact décrit le geste, les outils déjà en place, et qui doit s&apos;en servir. Cette page prépare ce message. Elle ne le remplace pas. On s&apos;en sert avant un appel, ou entre deux étapes, quand la question est où on en est, et non combien ça coûte. Le montant, le délai et le périmètre s&apos;écrivent après, dans un échange, pas ici.
          </p>
        </div>
      </section>
      <Suspense>
        <OuEnEst />
      </Suspense>
    </main>
  );
}
