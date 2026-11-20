import type { Metadata } from "next";
import { LandingCasablancaPage } from "@/components/landing-casablanca-page";
import { openGraph } from "@/lib/open-graph";

const title = "Logiciel sur mesure Casablanca · Byte Force";
const description =
  "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/developpement-logiciel-sur-mesure-casablanca" },
  openGraph: openGraph("/developpement-logiciel-sur-mesure-casablanca", title, description),
};

export default function DeveloppementLogicielCasablancaPage() {
  return (
    <main data-landing className="w-full">
      <LandingCasablancaPage />
    </main>
  );
}
