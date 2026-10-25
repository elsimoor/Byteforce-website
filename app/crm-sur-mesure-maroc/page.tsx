import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "CRM sur mesure Maroc | Logiciel commercial personnalisé",
  description:
    "CRM sur mesure au Maroc pour PME : suivi commercial, devis, relances et WhatsApp. 0 abonnement par utilisateur, code 100% à vous. Devis sous 24h.",
  alternates: { canonical: "/crm-sur-mesure-maroc" },
  openGraph: openGraph(
    "/crm-sur-mesure-maroc",
    "CRM sur mesure Maroc | Logiciel commercial personnalisé",
    "CRM sur mesure au Maroc pour PME : suivi commercial, devis, relances et WhatsApp. 0 abonnement par utilisateur, code 100% à vous. Devis sous 24h."
  ),
};

export default function CrmSurMesureMarocPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/crm-sur-mesure-maroc"
        badge="CRM & Gestion Commerciale"
        h1="CRM sur mesure au Maroc : logiciel commercial personnalisé"
        directAnswerSnippet="Un CRM sur mesure au Maroc coûte généralement entre 30 000 MAD et 80 000 MAD en investissement fixe, sans aucun abonnement par utilisateur. Conçu pour le cycle de vente marocain, il centralise vos prospects, automatise la génération de devis en dirhams, planifie les relances et intègre les alertes WhatsApp pour décupler les conversions de vos commerciaux."
        metaDescription="CRM sur mesure au Maroc pour PME : suivi commercial, devis, relances et WhatsApp. 0 abonnement par utilisateur, code 100% à vous. Devis sous 24h."
        priceStartingFrom="À partir de 30 000 MAD"
        turnaroundTime="3 à 6 semaines"
        sections={[
          {
            h2: "Pourquoi les CRM standards (Salesforce, HubSpot, Zoho) échouent-ils au Maroc ?",
            p: [
              "La plupart des entreprises marocaines qui souscrivent à un CRM américain constatent un faible taux d'adoption par leurs commerciaux. Les raisons sont évidentes : formulaires trop longs avec 40 champs inutiles, devis rigides mal adaptés à la TVA et aux mentions légales marocaines, absence d'intégration fluide avec WhatsApp, et facturation mensuelle en dollars qui explose dès que l'équipe s'agrandit.",
              "Notre CRM sur mesure est conçu pour être utilisé en moins de 3 clics par vos commerciaux, sur PC comme sur smartphone. Il reflète fidèlement vos étapes réelles de négociation : de la qualification du lead jusqu'à la signature et l'encaissement de l'acompte.",
            ],
            bullets: [
              "Interface épurée : seulement les informations capitales pour conclure la vente.",
              "Génération de devis et bons de commande PDF aux normes marocaines (ICE, IF, RC, TVA).",
              "Relances programmées automatiques par email et notifications WhatsApp.",
              "Aucune licence par utilisateur : vos 5, 20 ou 50 commerciaux ont chacun leur compte sans frais mensuels.",
            ],
          },
          {
            h2: "Les fonctionnalités clés de votre CRM marocain sur mesure",
            p: [
              "Chaque module est configuré selon vos priorités commerciales :",
            ],
            bullets: [
              "Pipeline de vente visuel (Kanban) : suivez d'un coup d'œil vos affaires par statut (Nouveau, Visite, Devis envoyé, Négociation, Gagné).",
              "Historique client 360° : compte-rendu des appels, emails échangés, historique des devis et factures associées.",
              "Intégration WhatsApp Business : envoyez vos propositions commerciales et recevez des confirmations directement dans le CRM.",
              "Tableaux de bord de direction : suivez en temps réel le chiffre d'affaires prévisionnel, le taux de closing et la performance individuelle de chaque commercial.",
              "Droits d'accès personnalisés : chaque commercial ne voit que son portefeuille, la direction a la vision consolidée.",
            ],
          },
          {
            h2: "De la feuille Excel au CRM en moins d'un mois",
            p: [
              "La transition depuis vos fichiers Excel existants est fluide et sans interruption de votre activité commerciale. Nous prenons en charge la déduplication et l'importation de vos bases contacts, puis nous formons vos équipes lors d'un atelier pratique d'une demi-journée à Casablanca ou en visio.",
            ],
          },
        ]}
        comparison={{
          title: "Comparatif : CRM sur mesure Byte Force vs Abonnements SaaS",
          headers: ["Fonctionnalité", "CRM Byte Force", "HubSpot / Salesforce / Zoho"],
          rows: [
            {
              feature: "Prix pour 10 commerciaux",
              byteforce: "Investissement fixe (dès 30 000 MAD, 0 MAD/mois)",
              alternative: "1 500 à 4 000 MAD / mois renouvelable à vie",
            },
            {
              feature: "Devis conformes Maroc",
              byteforce: "100% conformes (ICE, RC, IF, TVA 20%)",
              alternative: "Modèles rigides anglo-saxons difficiles à adapter",
            },
            {
              feature: "Connexion WhatsApp",
              byteforce: "Intégrée nativement au flux commercial",
              alternative: "Nécessite des extensions tierces payantes complexes",
            },
            {
              feature: "Adoption par l'équipe",
              byteforce: "Prise en main en 15 minutes (écrans épurés)",
              alternative: "Usine à gaz, souvent abandonnée par les vendeurs",
            },
          ],
        }}
        faqs={[
          {
            q: "Combien de temps faut-il pour déployer un CRM sur mesure ?",
            a: "Comptez entre 3 et 6 semaines de la validation du cahier des charges jusqu'à la mise en production avec vos données migrées.",
          },
          {
            q: "Nos données clients sont-elles sécurisées et hébergées au Maroc ?",
            a: "Oui. Nous pouvons héberger votre CRM sur des serveurs souverains au Maroc (ex. Datacenter certifié) ou sur un cloud privé haute sécurité. Vos données clients restent votre propriété exclusive et ne sont jamais revendues.",
          },
          {
            q: "Peut-on connecter le CRM à notre logiciel de facturation ou ERP ?",
            a: "Oui, via API REST, nous pouvons synchroniser vos affaires gagnées avec vos outils de facturation ou de comptabilité existants.",
          },
        ]}
        relatedLinks={[
          { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure Maroc" },
          { href: "/solutions/remplacer-excel", label: "Remplacer Excel par un CRM" },
          { href: "/insights/cout-crm-personnalise", label: "Combien coûte un CRM sur mesure" },
          { href: "/insights/crm-ou-excel", label: "Guide CRM vs Excel" },
        ]}
        cityLinks={[
          { href: "/developpement-logiciel-casablanca", label: "CRM Casablanca" },
          { href: "/villes/marrakech", label: "CRM Marrakech" },
          { href: "/villes/tanger", label: "CRM Tanger" },
          { href: "/villes/agadir", label: "CRM Agadir" },
          { href: "/villes/rabat", label: "CRM Rabat" },
        ]}
      />
    </main>
  );
}
