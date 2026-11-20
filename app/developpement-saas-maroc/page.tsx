import type { Metadata } from "next";
import { LandingSaasPage } from "@/components/landing-saas-page";
import { openGraph } from "@/lib/open-graph";

const title = "Développement SaaS au Maroc · Byte Force";
const description =
  "Développement SaaS au Maroc et MVP à Casablanca : architecture multi-tenant, gestion des abonnements CMI/Stripe et code 100% cédé. Devis sous 24h.";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/developpement-saas-maroc" },
  openGraph: openGraph("/developpement-saas-maroc", title, description),
};

export default function DeveloppementSaasMarocPage() {
  return (
    <main data-landing className="w-full">
      <LandingSaasPage />
    </main>
  );
}
