import type { Metadata } from "next";
import { CaseStudy } from "@/components/case-study";
import { exampleData } from "@/components/case-study/example";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Étude de cas",
  description: "Présentation d'une étude de cas Byte Force.",
  robots: { index: false, follow: false },
};

export default function CaseStudyPage() {
  return (
    <main data-home className="w-full max-w-none">
      <CaseStudy
        data={{
          ...exampleData,
          blocks: exampleData.blocks.filter((block) => block.type !== "stats"),
          nextCase: { title: "Réalisations", href: "/realisations", label: "Suite" },
          cta: {
            title: "Parler d'un projet.",
            text: "La réponse part sous un jour ouvré, depuis Casablanca.",
            buttonLabel: "Écrire à Casablanca",
            href: "/contact",
            secondary: { label: site.phoneDisplay, href: `tel:${site.phone}` },
          },
        }}
        theme="dark"
        accent="#7C5CFF"
      />
    </main>
  );
}
