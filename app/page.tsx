import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";
import { openGraph } from "@/lib/open-graph";
import { seoMeta } from "@/lib/seo-meta";
import { site } from "@/lib/site";

const home = seoMeta["/"];

export const metadata: Metadata = {
  title: { absolute: home.title },
  description: home.description,
  alternates: { canonical: `${site.url}/` },
  openGraph: openGraph("/", home.title, home.description),
};

export default function HomePage() {
  return (
    <main data-home>
      <StudioHome />
    </main>
  );
}
