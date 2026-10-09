"use client";

import { Depot, Ecran, Theme } from "@/components/illustrations/routes";
import { Couches, Hote } from "@/components/illustrations/systems";
import { Nom } from "@/components/illustrations/work";

function NextSlot({ heading, lang }: { heading: string; lang: "fr" | "en" }) {
  if (heading === "Où le cadre est déjà nommé" || heading === "Where the frame is already named") {
    return <Couches lang={lang} />;
  }
  if (heading === "La page et le produit" || heading === "The page and the product") {
    return <Ecran lang={lang} />;
  }
  if (heading === "Quand le thème suffit encore" || heading === "When the theme still holds") {
    return <Theme lang={lang} />;
  }
  return null;
}

function VercelSlot({ heading, lang }: { heading: string; lang: "fr" | "en" }) {
  if (heading === "Ce qui est public, et ce qui ne l'est pas" || heading === "What is public, and what is not") {
    return <Nom lang={lang} />;
  }
  if (heading === "Du dépôt à l'adresse" || heading === "From the repository to the address") {
    return <Depot lang={lang} />;
  }
  if (heading === "L'hôte qu'on ne déplace pas" || heading === "The host you do not move") {
    return <Hote lang={lang} />;
  }
  return null;
}

export function ArticleDrawings({ slug, heading, lang }: { slug: string; heading: string; lang: "fr" | "en" }) {
  if (slug === "nextjs-dans-les-produits") return <NextSlot heading={heading} lang={lang} />;
  if (slug === "vercel-pour-publier") return <VercelSlot heading={heading} lang={lang} />;
  return null;
}
