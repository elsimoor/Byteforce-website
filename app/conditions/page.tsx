import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Conditions",
  description: "Comment une mission Byte Force commence, comment le périmètre change, et à qui appartient le code.",
  alternates: { canonical: "/conditions" },
};

export default function TermsPage() {
  return (
    <main className="max-w-2xl px-6 py-16 md:px-12 md:py-24">
      <h1 className="font-headline text-5xl font-black tracking-tight">Conditions</h1>
      <div className="mt-8 space-y-4 leading-relaxed text-on-surface-variant">
        <p>
          Les pages de ce site décrivent des offres. Elles ne sont pas un devis. Un projet commence après un périmètre écrit.
        </p>
        <p>Un acompte lance le travail. Le reste suit des étapes liées à ce qui a été livré.</p>
        <p>Si le périmètre change, le changement est écrit et accepté avant d&apos;être construit.</p>
        <p>
          Les défauts du périmètre convenu sont corrigés avec la livraison. Après la remise, un correctif est soit un
          devis isolé, soit un suivi mensuel.
        </p>
        <p>À la remise, le client possède le code, le dépôt et les comptes d&apos;hébergement livrés.</p>
        <p>Un accord de confidentialité est possible avant le brief. Questions : {site.email}.</p>
      </div>
    </main>
  );
}
