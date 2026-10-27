import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { ClaudeArtifactConverter } from "@/components/claude-artifact-converter";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const meta = seoMeta["/outils/claude-artifact-to-markdown"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/outils/claude-artifact-to-markdown" },
  openGraph: openGraph("/outils/claude-artifact-to-markdown", meta.title, meta.description),
  keywords: [
    "claude artifact to markdown",
    "convertir artifact claude en md",
    "telecharger artifact claude",
    "claude ai export markdown",
    "anthropic claude artifact downloader",
    "convertisseur artefact claude",
    "byteforce free tools",
  ],
};

export default function ClaudeArtifactToMdPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "Convertisseur Claude Artifact vers Markdown (.md)",
    applicationCategory: "DeveloperApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "Outil gratuit en ligne pour convertir et télécharger les artefacts d'Anthropic Claude en fichiers Markdown (.md) propres et structurés sans inscription.",
    provider: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Outils Gratuits", path: "/outils" },
          { name: "Artifact Claude vers MD", path: "/outils/claude-artifact-to-markdown" },
        ]}
      />
      <ClaudeArtifactConverter />
    </article>
  );
}
