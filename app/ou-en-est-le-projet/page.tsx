import type { Metadata } from "next";
import { Suspense } from "react";
import { OuEnEst } from "@/components/ou-en-est";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";

const meta = seoMeta["/ou-en-est-le-projet"];

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: { canonical: "/ou-en-est-le-projet" },
  openGraph: openGraph("/ou-en-est-le-projet", meta.title, meta.description),
};

export default function OuEnEstPage() {
  return (
    <main>
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Où en est le travail", path: "/ou-en-est-le-projet" },
        ]}
      />
      <Suspense>
        <OuEnEst />
      </Suspense>
    </main>
  );
}
