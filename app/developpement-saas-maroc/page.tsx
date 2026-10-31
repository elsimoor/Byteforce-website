import type { Metadata } from "next";
import { LandingSaasPage } from "@/components/landing-saas-page";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement SaaS Maroc : Création de Plateforme Logiciel Cloud",
  description:
    "Développement SaaS au Maroc et MVP à Casablanca : architecture multi-tenant, gestion des abonnements CMI/Stripe et code 100% cédé. Devis sous 24h.",
  alternates: { canonical: "/developpement-saas-maroc" },
  openGraph: openGraph(
    "/developpement-saas-maroc",
    "Développement SaaS Maroc : Création de Plateforme Logiciel Cloud",
    "Développement SaaS au Maroc et MVP à Casablanca : architecture multi-tenant, gestion des abonnements CMI/Stripe et code 100% cédé. Devis sous 24h."
  ),
};

export default function DeveloppementSaasMarocPage() {
  return (
    <main data-landing className="w-full">
      <LandingSaasPage />
    </main>
  );
}
