import type { Metadata } from "next";
import { LandingMobilePage } from "@/components/landing-mobile-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement Application Mobile Casablanca : iOS, Android & React Native",
  description:
    "Agence de développement d'applications mobiles à Casablanca (Technopark) : iOS, Android et React Native. Applications métier & MVP. Devis gratuit sous 24h.",
  alternates: { canonical: "/developpement-application-mobile-casablanca" },
  openGraph: openGraph(
    "/developpement-application-mobile-casablanca",
    "Développement Application Mobile Casablanca : iOS, Android & React Native",
    "Agence de développement d'applications mobiles à Casablanca (Technopark) : iOS, Android et React Native. Applications métier & MVP. Devis gratuit sous 24h."
  ),
};

export default function DeveloppementApplicationMobileCasablancaPage() {
  return (
    <main data-landing className="w-full">
      <LandingMobilePage />
    </main>
  );
}
