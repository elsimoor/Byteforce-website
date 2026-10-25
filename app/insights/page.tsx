import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { articles } from "@/lib/articles";
import { insightCategories } from "@/lib/insight-categories";
import { moneyPages } from "@/lib/money";
import { openGraph } from "@/lib/open-graph";
import { InsightsLanding } from "@/components/insights-landing";
import { SiteIndex } from "@/components/site-index";

export const metadata: Metadata = {
  title: "Décider avant de construire · Insights & Ingénierie",
  description:
    "Analyses franches, retours d'expérience et guides d'architecture logicielle par Byte Force à Casablanca : remplacer Excel, quitter un SaaS, automatiser ou moderniser.",
  alternates: { canonical: "/insights" },
  openGraph: openGraph(
    "/insights",
    "Décider avant de construire · Insights & Ingénierie",
    "Analyses franches, retours d'expérience et guides d'architecture logicielle par Byte Force à Casablanca : remplacer Excel, quitter un SaaS, automatiser ou moderniser.",
  ),
};

export default function InsightsPage() {
  return (
    <main data-landing className="w-full">
      <article>
        <BreadcrumbJsonLd items={[{ name: "Accueil", path: "/" }, { name: "Décisions", path: "/insights" }]} />
        <InsightsLanding
          articles={articles}
          categories={insightCategories}
          moneyPages={moneyPages}
        />
        <div className="border-t border-slate-200/80 bg-white">
          <SiteIndex part={3} />
        </div>
      </article>
    </main>
  );
}

