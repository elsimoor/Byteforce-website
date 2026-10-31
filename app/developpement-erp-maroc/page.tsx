import type { Metadata } from "next";
import { LandingErpPage } from "@/components/landing-erp-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement ERP Maroc : Logiciel ERP Sur Mesure pour PME",
  description:
    "Développement d'ERP sur mesure au Maroc : gestion des stocks, achats, facturation DGI et production. Zéro abonnement par licence. Devis gratuit sous 24h.",
  alternates: { canonical: "/developpement-erp-maroc" },
  openGraph: openGraph(
    "/developpement-erp-maroc",
    "Développement ERP Maroc : Logiciel ERP Sur Mesure pour PME",
    "Développement d'ERP sur mesure au Maroc : gestion des stocks, achats, facturation DGI et production. Zéro abonnement par licence. Devis gratuit sous 24h."
  ),
};

export default function DeveloppementErpMarocPage() {
  return (
    <main data-landing className="w-full">
      <LandingErpPage />
    </main>
  );
}
