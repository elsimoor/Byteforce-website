import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Développement logiciel sur mesure à Casablanca · Byte Force" },
  description:
    "Logiciels, applications et sites sur mesure à Casablanca. Écrire ici pour un premier échange. Réponse sous un jour ouvré.",
  alternates: { canonical: `${site.url}/` },
  openGraph: openGraph(
    "/",
    "Développement logiciel sur mesure à Casablanca · Byte Force",
    "Logiciels, applications et sites sur mesure à Casablanca. Écrire ici pour un premier échange. Réponse sous un jour ouvré.",
  ),
};

export default function HomePage() {
  return (
    <main data-home>
      <StudioHome />
    </main>
  );
}
