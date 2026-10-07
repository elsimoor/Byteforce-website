import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Développement logiciel sur mesure à Casablanca · Byte Force" },
  description:
    "Byte Force conçoit des logiciels, des applications et des sites sur mesure à Casablanca. Écrire pour un premier échange. Réponse sous un jour ouvré.",
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    locale: "fr_FR",
    url: `${site.url}/`,
    title: "Développement logiciel sur mesure à Casablanca · Byte Force",
    description:
      "Byte Force conçoit des logiciels, des applications et des sites sur mesure à Casablanca. Écrire pour un premier échange. Réponse sous un jour ouvré.",
  },
};

export default function HomePage() {
  return (
    <main>
      <StudioHome />
    </main>
  );
}
