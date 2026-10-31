import type { Metadata } from "next";
import { LandingCrmPage } from "@/components/landing-crm-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "CRM Sur Mesure Maroc : Logiciel CRM Personnalisé pour PME",
  description:
    "Développement de CRM sur mesure au Maroc et à Casablanca : pipeline commercial, relances WhatsApp, gestion client et 0 abonnement par utilisateur. Devis sous 24h.",
  alternates: { canonical: "/crm/logiciel-crm-personnalise" },
  openGraph: openGraph(
    "/crm/logiciel-crm-personnalise",
    "CRM Sur Mesure Maroc : Logiciel CRM Personnalisé pour PME",
    "Développement de CRM sur mesure au Maroc et à Casablanca : pipeline commercial, relances WhatsApp, gestion client et 0 abonnement par utilisateur. Devis sous 24h."
  ),
};

export default function CrmLogicielPersonnalisePage() {
  return (
    <main data-landing className="w-full">
      <LandingCrmPage />
    </main>
  );
}
