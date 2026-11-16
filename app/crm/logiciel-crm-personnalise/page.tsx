import type { Metadata } from "next";
import { LandingCrmPage } from "@/components/landing-crm-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Logiciel CRM personnalisé pour une PME au Maroc",
  description:
    "Un CRM personnalisé reprend les étapes, les droits et les relances de l'entreprise. Pour le cadre général, voir le CRM sur mesure au Maroc. Devis sous 24h.",
  alternates: { canonical: "/crm/logiciel-crm-personnalise" },
  openGraph: openGraph(
    "/crm/logiciel-crm-personnalise",
    "Logiciel CRM personnalisé pour une PME au Maroc",
    "Un CRM personnalisé reprend les étapes, les droits et les relances de l'entreprise. Pour le cadre général, voir le CRM sur mesure au Maroc. Devis sous 24h."
  ),
};

export default function CrmLogicielPersonnalisePage() {
  return (
    <main data-landing className="w-full">
      <LandingCrmPage />
    </main>
  );
}
