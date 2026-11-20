import type { Metadata } from "next";
import { LandingMobilePage } from "@/components/landing-mobile-page";
import { openGraph } from "@/lib/open-graph";

const title = "Application mobile Casablanca · Byte Force";
const description =
  "Agence de développement d'applications mobiles à Casablanca (Technopark) : iOS, Android et React Native. Applications métier & MVP. Devis gratuit sous 24h.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/developpement-application-mobile-casablanca" },
  openGraph: openGraph("/developpement-application-mobile-casablanca", title, description),
};

export default function DeveloppementApplicationMobileCasablancaPage() {
  return (
    <main data-landing className="w-full">
      <LandingMobilePage />
    </main>
  );
}
