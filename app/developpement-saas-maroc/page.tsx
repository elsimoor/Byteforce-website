import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement SaaS Maroc | Création Logiciel Scalable",
  description:
    "Développement de plateformes SaaS et logiciels cloud au Maroc : architecture multi-tenant, abonnements CMI/Stripe et code remis. Devis sous 24h.",
  alternates: { canonical: "/developpement-saas-maroc" },
  openGraph: openGraph(
    "/developpement-saas-maroc",
    "Développement SaaS Maroc | Création Logiciel Scalable",
    "Développement de plateformes SaaS et logiciels cloud au Maroc : architecture multi-tenant, abonnements CMI/Stripe et code remis. Devis sous 24h."
  ),
};

export default function DeveloppementSaasMarocPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/developpement-saas-maroc"
        badge="Ingénierie SaaS & Cloud"
        h1="Développement SaaS au Maroc : création de logiciels cloud scalables"
        directAnswerSnippet="La création d'un logiciel SaaS (Software as a Service) au Maroc coûte généralement entre 45 000 MAD et 180 000 MAD pour une version MVP commercialisable, livrée en 6 à 10 semaines. Byte Force développe votre produit cloud avec une architecture multi-tenant sécurisée, la gestion des abonnements récurrents et la remise intégrale du code source."
        metaDescription="Développement de plateformes SaaS et logiciels cloud au Maroc : architecture multi-tenant, abonnements CMI/Stripe et code remis. Devis sous 24h."
        priceStartingFrom="À partir de 45 000 MAD"
        turnaroundTime="6 à 10 semaines"
        sections={[
          {
            h2: "Vous lancez un produit SaaS au Maroc ou à l'international ?",
            p: [
              "Transformer une idée logicielle en un produit SaaS rentable demande plus que du simple codage : il faut une architecture solide capable de gérer des milliers d'entreprises abonnées en simultané sans ralentissement, une isolation étanche des données de chaque client, et un modèle de facturation récurrente automatisé.",
              "Depuis notre bureau au Technopark de Casablanca, nous accompagnons les fondateurs de startups et les dirigeants d'entreprises marocaines dans la construction de SaaS B2B ou B2C pérennes, avec une pile technique moderne et maintenable (Next.js, Node.js, PostgreSQL/Supabase, Docker).",
            ],
            bullets: [
              "Architecture multi-tenant sécurisée : chaque entreprise cliente a ses données isolées avec chiffrement.",
              "Facturation d'abonnements récurrents : intégration des paiements par carte marocaine (CMI) ou internationale (Stripe).",
              "Portail d'onboarding autonome : inscription, choix de formule, période d'essai gratuite et tableau de bord immédiat.",
              "Super-admin pour vous : suivez vos métriques SaaS (MRR, churn, utilisateurs actifs, volume d'utilisation).",
            ],
          },
          {
            h2: "Notre méthodologie MVP : lancer vite pour valider le marché",
            p: [
              "L'erreur la plus fréquente des créateurs de logiciels est de passer 12 mois à développer 100 fonctionnalités avant le premier client. Chez Byte Force, nous adoptons une démarche pragmatique :",
              "1. Définition du Core Value : nous isolons l'unique problème critique que vos premiers clients sont prêts à payer.",
              "2. MVP en 6 à 8 semaines : nous concevons une première version élégante, ultra-rapide et fonctionnelle.",
              "3. Mesure et itérations : nous intégrons des outils d'analyse (PostHog) pour observer l'usage réel et enrichir le produit selon les retours des utilisateurs payants.",
            ],
          },
          {
            h2: "À qui appartient le logiciel développé ?",
            p: [
              "Contrairement aux agences qui conservent la propriété intellectuelle pour vous lier par des contrats de maintenance captifs, Byte Force vous cède contractuellement 100% du code source, des dépôts Git et des configurations cloud. Vous pouvez lever des fonds, recruter votre propre équipe interne ou faire auditer le code en toute liberté.",
            ],
          },
        ]}
        comparison={{
          title: "Approche Byte Force vs Agence web classique pour un SaaS",
          headers: ["Critère", "Byte Force Studio SaaS", "Agence web généraliste"],
          rows: [
            {
              feature: "Architecture logicielle",
              byteforce: "Multi-tenant éprouvé, scalable et sécurisé",
              alternative: "Souvent un WordPress ou script bricolé qui plante à 50 clients",
            },
            {
              feature: "Délai de mise sur le marché",
              byteforce: "MVP opérationnel en 6 à 10 semaines",
              alternative: "6 à 12 mois de réunions interminables",
            },
            {
              feature: "Propriété intellectuelle",
              byteforce: "100% transférée à votre société",
              alternative: "Clauses floues ou code partagé",
            },
            {
              feature: "Infrastructure",
              byteforce: "Cloud moderne automatisé (Vercel, AWS, Supabase)",
              alternative: "Serveur mutualisé lent et difficile à faire évoluer",
            },
          ],
        }}
        faqs={[
          {
            q: "Combien coûte le développement d'un MVP SaaS au Maroc ?",
            a: "Un MVP SaaS B2B ciblé démarre à partir de 45 000 MAD. Pour une plateforme complexe avec de multiples rôles et intégrations API avancées, le budget se situe entre 75 000 MAD et 150 000 MAD.",
          },
          {
            q: "Peut-on encaisser des abonnements en Dirhams au Maroc ?",
            a: "Oui. Nous intégrons le Centre Monétique Interbancaire (CMI) ou PayZone pour les abonnements au Maroc, et Stripe pour les paiements internationaux en devises (EUR, USD).",
          },
          {
            q: "Comment garantissez-vous la sécurité des données hébergées ?",
            a: "Nous appliquons les meilleures pratiques de sécurité : isolation rigoureuse par Tenant ID au niveau de la base de données, chiffrement des données sensibles, authentification multi-facteurs et sauvegardes quotidiennes automatiques.",
          },
        ]}
        relatedLinks={[
          { href: "/developpement-logiciel-sur-mesure-maroc", label: "Logiciel sur mesure Maroc" },
          { href: "/crm-sur-mesure-maroc", label: "CRM sur mesure Maroc" },
          { href: "/insights/cout-creation-saas", label: "Coût de création d'un SaaS en 2026" },
          { href: "/insights/mvp-saas-maroc", label: "Guide MVP SaaS au Maroc" },
        ]}
        cityLinks={[
          { href: "/developpement-logiciel-casablanca", label: "SaaS Casablanca" },
          { href: "/villes/marrakech", label: "Solution SaaS Marrakech" },
          { href: "/villes/tanger", label: "SaaS Tanger" },
          { href: "/villes/rabat", label: "SaaS Rabat" },
        ]}
      />
    </main>
  );
}
