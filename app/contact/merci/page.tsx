import type { Metadata } from "next";
import { LeadThanks } from "@/components/lead-thanks";

export const metadata: Metadata = {
  title: "Demande reçue",
  description: "La demande est arrivée à Casablanca. Byte Force répond sous un jour ouvré, par email.",
  robots: { index: false, follow: true },
};

export default function ContactThanksPage() {
  return (
    <main>
      <article>
        <LeadThanks />
      </article>
    </main>
  );
}
