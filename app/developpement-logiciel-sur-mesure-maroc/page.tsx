import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement logiciel sur mesure Maroc | BYTE FORCE",
  description:
    "Développement de logiciels métier et CRM sur mesure au Maroc. Automatisez vos flux, éliminez Excel et réduisez vos coûts. Devis gratuit en 24h.",
  alternates: { canonical: "/developpement-logiciel-sur-mesure-maroc" },
  openGraph: openGraph(
    "/developpement-logiciel-sur-mesure-maroc",
    "Développement logiciel sur mesure Maroc | BYTE FORCE",
    "Développement de logiciels métier et CRM sur mesure au Maroc. Automatisez vos flux, éliminez Excel et réduisez vos coûts. Devis gratuit en 24h."
  ),
};

export default function DeveloppementLogicielSurMesureMarocPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/developpement-logiciel-sur-mesure-maroc"
        badge="Logiciel Métier & Entreprise"
        h1="Développement de logiciel sur mesure au Maroc"
        directAnswerSnippet="Le développement d'un logiciel sur mesure au Maroc coûte entre 25 000 MAD et 150 000 MAD selon l'envergure du projet, avec un délai moyen de livraison de 4 à 12 semaines. Il permet d'éliminer les erreurs de saisie sur Excel, de centraliser vos opérations et de supprimer les abonnements mensuels récurrents en devenant propriétaire exclusif de votre code source."
        metaDescription="Développement de logiciels métier et CRM sur mesure au Maroc. Automatisez vos flux, éliminez Excel et réduisez vos coûts. Devis gratuit en 24h."
        priceStartingFrom="À partir de 25 000 MAD"
        turnaroundTime="4 à 10 semaines"
        sections={[
          {
            h2: "Pourquoi choisir un logiciel sur mesure plutôt qu'un outil standard ?",
            p: [
              "Au Maroc, de nombreuses entreprises démarrent leur gestion sur des tableurs Excel ou souscrivent à des SaaS américains rigides (Salesforce, HubSpot, Zoho). Très vite, les limites apparaissent : fichiers écrasés, perte d'historique client, processus métier déformés pour coller au logiciel, et coûts mensuels exorbitants par utilisateur.",
              "Le logiciel sur mesure inverse ce rapport de force : nous développons l'outil autour de vos processus réels, avec votre vocabulaire d'entreprise, vos règles de validation et vos droits d'accès. Vous ne payez aucune licence récurrente par employé et vous conservez la pleine propriété de votre base de données et de votre code source.",
            ],
            bullets: [
              "Zéro abonnement par utilisateur : ajoutez 5 ou 50 collaborateurs sans surcoût.",
              "Propriété intellectuelle intégrale : le code source et la base de données vous appartiennent.",
              "Automatisation des tâches répétitives : devis, bons de commande, factures et relances automatiques.",
              "Interface ultra-rapide et intuitive : adoptée immédiatement par vos équipes terrain et bureau.",
            ],
          },
          {
            h2: "Quels types de logiciels développons-nous pour les entreprises marocaines ?",
            p: [
              "Depuis notre studio au Technopark de Casablanca, nous concevons des plateformes robustes répondant aux réalités opérationnelles locales :",
            ],
            bullets: [
              "CRM commercial sur mesure : gestion de pipeline, devis en dirhams, relances WhatsApp et suivi commercial.",
              "ERP léger et logiciel de gestion PME : achats, stocks d'entrepôt, livraisons, facturation conforme DGI et comptabilité.",
              "Portails clients et espaces partenaires : suivi d'avancement de dossiers, téléchargement de documents et paiements en ligne.",
              "Logiciels métier spécifiques : transport et logistique, cliniques et santé, BTP et chantiers, distribution et négoce.",
            ],
          },
          {
            h2: "Comment se déroule la création de votre logiciel chez Byte Force ?",
            p: [
              "Notre méthode repose sur la transparence technique et des livraisons concrètes toutes les 2 semaines :",
              "1. Cadrage opérationnel écrit : nous analysons vos processus, identifions le goulet d'étranglement et rédigeons un cahier des charges précis sans jargon.",
              "2. Prototype et design UX : nous concevons des écrans clairs testés avec vos équipes pour valider chaque clic avant d'écrire le code.",
              "3. Développement agile : utilisation des technologies modernes (Next.js, React, Node.js, PostgreSQL) garantissant sécurité et vitesse.",
              "4. Formation et déploiement : nous installons le logiciel sur votre serveur sécurisé au Maroc ou en cloud privé et formons vos équipes.",
            ],
          },
        ]}
        comparison={{
          title: "Logiciel sur mesure vs Logiciel standard (SaaS du marché)",
          headers: ["Critère", "Byte Force (Sur Mesure)", "SaaS / Éditeurs du marché"],
          rows: [
            {
              feature: "Coût sur 3 ans",
              byteforce: "Investissement fixe unique, amorti en 6 mois",
              alternative: "Abonnement mensuel par utilisateur qui augmente sans cesse",
            },
            {
              feature: "Propriété du code",
              byteforce: "100% à vous (dépôt Git et base de données remis)",
              alternative: "0% (vous êtes locataire, données captives)",
            },
            {
              feature: "Adaptation aux règles métier",
              byteforce: "100% calqué sur votre organisation réelle",
              alternative: "Votre équipe doit tordre ses habitudes",
            },
            {
              feature: "Support et évolutivité",
              byteforce: "Direct avec les ingénieurs à Casablanca",
              alternative: "Support ticket délocalisé et rigide",
            },
          ],
        }}
        faqs={[
          {
            q: "Combien coûte un développement de logiciel sur mesure au Maroc ?",
            a: "Un outil métier ciblé ou le remplacement d'un tableur Excel démarre à 25 000 MAD. Un CRM ou ERP complet pour PME se situe généralement entre 45 000 MAD et 95 000 MAD. Un devis transparent et détaillé vous est remis gratuitement sous 24h.",
          },
          {
            q: "Quel est le délai moyen de livraison ?",
            a: "Une première version opérationnelle (MVP) est déployée en 4 à 6 semaines. Les fonctionnalités secondaires sont ensuite livrées par itérations toutes les deux semaines.",
          },
          {
            q: "Qui est propriétaire du code source ?",
            a: "Vous êtes le propriétaire exclusif. À la livraison finale, l'intégralité du code source (dépôt GitHub/GitLab), la base de données et les accès serveurs vous sont remis contractuellement.",
          },
          {
            q: "Peut-on migrer les données depuis nos fichiers Excel actuels ?",
            a: "Oui, absolument. Nous nettoyons, structurons et importons l'historique complet de vos fichiers Excel ou anciennes bases de données lors de la mise en service.",
          },
        ]}
        relatedLinks={[
          { href: "/crm-sur-mesure-maroc", label: "CRM sur mesure Maroc" },
          { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
          { href: "/developpement-application-mobile-maroc", label: "Applications mobiles Maroc" },
          { href: "/insights/prix-logiciel-sur-mesure-maroc", label: "Guide des prix logiciels 2026" },
          { href: "/solutions/remplacer-excel", label: "Remplacer Excel" },
        ]}
        cityLinks={[
          { href: "/developpement-logiciel-casablanca", label: "Développement logiciel Casablanca" },
          { href: "/villes/marrakech", label: "Développement logiciel Marrakech" },
          { href: "/villes/tanger", label: "Développement logiciel Tanger" },
          { href: "/villes/agadir", label: "Développement logiciel Agadir" },
          { href: "/villes/fes", label: "Développement logiciel Fès" },
          { href: "/villes/rabat", label: "Développement logiciel Rabat" },
        ]}
      />
    </main>
  );
}
