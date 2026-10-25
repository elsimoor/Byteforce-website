import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { SolutionsLanding } from "@/components/solutions-landing";
import { SiteIndex } from "@/components/site-index";

const title = "Solutions · Logiciel d'entreprise";
const description =
  "Pages Byte Force pour un problème précis : Excel, un SaaS trop rigide, l'automatisation, une application à reprendre, une PME, une entreprise.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/solutions" },
  openGraph: openGraph("/solutions", title, description),
};

export default function SolutionsPage() {
  const pages = moneyPages.filter((page) => page.path.startsWith("solutions/"));

  return (
    <main data-landing className="w-full">
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Solutions", path: "/solutions" }]} />
        <SolutionsLanding pages={pages} />
        <div className="border-t border-slate-200/80 bg-white">
          <SiteIndex part={2} />
        </div>
      </article>
    </main>
  );
}
