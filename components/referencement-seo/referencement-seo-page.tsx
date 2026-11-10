import { BreadcrumbJsonLd, FaqJsonLd, ServiceJsonLd } from "@/components/json-ld";
import { GeoServiceLinks } from "@/components/geo-service-links";
import { Faq } from "./faq";
import { FinalCta } from "./final-cta";
import { GeoBlock } from "./geo-block";
import { Hero } from "./hero";
import { LocalSection } from "./local-section";
import { Method } from "./method";
import { ProofShowcase } from "./proof-showcase";
import { ServicesGrid } from "./services-grid";
import { referencementDescription, referencementFaqs, referencementPath } from "@/lib/referencement-seo";

export function ReferencementSeoPage() {
  return (
    <main data-landing className="overflow-x-clip text-on-surface">
      <BreadcrumbJsonLd
        items={[
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Agence SEO à Casablanca", path: referencementPath },
        ]}
      />
      <ServiceJsonLd
        name="Agence SEO à Casablanca"
        description={referencementDescription}
        path={referencementPath}
        serviceType="Référencement web"
      />
      <FaqJsonLd faqs={referencementFaqs} />
      <Hero />
      <ServicesGrid />
      <ProofShowcase />
      <Method />
      <GeoBlock />
      <LocalSection />
      <Faq />
      <GeoServiceLinks serviceSlug="seo" />
      <FinalCta />
    </main>
  );
}
