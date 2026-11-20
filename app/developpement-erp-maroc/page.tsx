import type { Metadata } from "next";
import { LandingErpPage } from "@/components/landing-erp-page";
import { openGraph } from "@/lib/open-graph";

const title = "ERP sur mesure Maroc · Byte Force";
const description =
  "Développement d'ERP sur mesure au Maroc : gestion des stocks, achats, facturation DGI et production. Zéro abonnement par licence. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/developpement-erp-maroc" },
  openGraph: openGraph("/developpement-erp-maroc", title, description),
};

export default function DeveloppementErpMarocPage() {
  return (
    <main data-landing className="w-full">
      <LandingErpPage />
    </main>
  );
}
