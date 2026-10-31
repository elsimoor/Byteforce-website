import type { Metadata } from "next";
import { LandingCasablancaPage } from "@/components/landing-casablanca-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement Logiciel Sur Mesure Casablanca : Agence & Studio IT",
  description:
    "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h.",
  alternates: { canonical: "/developpement-logiciel-sur-mesure-casablanca" },
  openGraph: openGraph(
    "/developpement-logiciel-sur-mesure-casablanca",
    "Développement Logiciel Sur Mesure Casablanca : Agence & Studio IT",
    "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h."
  ),
};

export default function DeveloppementLogicielCasablancaPage() {
  return (
    <main data-landing className="w-full">
      <LandingCasablancaPage />
    </main>
  );
}
