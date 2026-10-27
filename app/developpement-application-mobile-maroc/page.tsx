import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement Application Mobile Maroc : iOS, Android & Devis 24h",
  description:
    "Création d'applications mobiles sur mesure au Maroc (iOS & Android). Design UX moderne, publication sur les stores et code source cédé. Devis sous 24h.",
  alternates: { canonical: "/developpement-application-mobile-maroc" },
  openGraph: openGraph(
    "/developpement-application-mobile-maroc",
    "Développement Application Mobile Maroc : iOS, Android & Devis 24h",
    "Création d'applications mobiles sur mesure au Maroc (iOS & Android). Design UX moderne, publication sur les stores et code source cédé. Devis sous 24h."
  ),
};

export default function DeveloppementApplicationMobileMarocPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/developpement-application-mobile-maroc"
        badge="Applications Mobiles iOS & Android"
        h1="Développement d'application mobile au Maroc : iOS & Android sur mesure"
        directAnswerSnippet="Le coût de développement d'une application mobile au Maroc varie entre 35 000 MAD (MVP ciblé ou application vitrine) et 140 000 MAD (application complexe avec géolocalisation, paiement en ligne et gestion de commandes en temps réel), pour un délai de 6 à 12 semaines. Byte Force développe en React Native / Expo pour publier simultanément sur iPhone et Android à moindre coût."
        metaDescription="Création d'applications mobiles sur mesure au Maroc (iOS & Android). Design UX moderne, publication sur les stores et code source cédé. Devis sous 24h."
        priceStartingFrom="À partir de 35 000 MAD"
        turnaroundTime="6 à 12 semaines"
        sections={[
          {
            h2: "Pourquoi développer une application mobile pour votre entreprise ?",
            p: [
              "Au Maroc, plus de 80% des interactions digitales se font sur smartphone. Une application mobile dédiée permet d'installer votre marque directement dans la poche de vos clients : notifications push avec un taux d'ouverture de 90%, accès instantané hors-ligne, géolocalisation et parcours d'achat en un clic.",
              "Pour vos opérations internes, l'application mobile transforme le quotidien de vos équipes nomades (chauffeurs, livreurs, techniciens de maintenance, commerciaux terrain) qui peuvent enregistrer des données et des signatures directement sur place.",
            ],
            bullets: [
              "Publication officielle sur Apple App Store et Google Play Store.",
              "Base de code unique React Native / Expo : réduisez vos coûts de 40% par rapport à deux développements séparés.",
              "Notifications push ciblées : engagez vos utilisateurs avec des alertes promotions ou des rappels de commande.",
              "Mode déconnecté (Offline-first) : saisie de données même sans connexion internet 4G.",
            ],
          },
          {
            h2: "Nos réalisations d'applications mobiles au Maroc et à l'international",
            p: [
              "Byte Force conçoit des applications éprouvées sur le terrain :",
            ],
            bullets: [
              "Applications de services et de réservation : prise de rendez-vous, paiement d'acomptes et suivi d'agenda (ex. projet Zainek).",
              "Applications e-commerce et livraison : catalogue de produits, géolocalisation des livreurs et paiement sécurisé.",
              "Applications audio et tourisme : parcours de visites géolocalisés (ex. projet Tourispeak avec audio guide).",
              "Outils métiers nomades pour PME : suivi de chantiers BTP, rapports d'intervention avec photos et signatures électroniques.",
            ],
          },
          {
            h2: "Du design d'expérience à la validation sur les stores",
            p: [
              "Publier sur l'App Store d'Apple et Google Play exige le respect strict de critères techniques et de sécurité. Nous nous chargeons de tout :",
              "1. Wireframes & Design UI/UX : maquettes interactives testées sur écran réel.",
              "2. Développement backend & API : base de données robuste et synchronisation en temps réel.",
              "3. Tests multi-appareils : validation sur iPhone, Samsung, Xiaomi et différentes versions d'OS.",
              "4. Validation et mise en ligne sur les stores : accompagnement complet jusqu'à la publication officielle.",
            ],
          },
        ]}
        comparison={{
          title: "Approche Cross-Platform (Byte Force) vs Développement Natif Séparé",
          headers: ["Critère", "React Native / Expo (Byte Force)", "Natif séparé (Swift + Kotlin)"],
          rows: [
            {
              feature: "Coût de développement",
              byteforce: "35 000 à 95 000 MAD (base de code unique)",
              alternative: "80 000 à 200 000 MAD (payer deux équipes distinctes)",
            },
            {
              feature: "Délai de livraison",
              byteforce: "6 à 10 semaines en moyenne",
              alternative: "4 à 8 mois",
            },
            {
              feature: "Mises à jour futures",
              byteforce: "Modifications déployées simultanément sur iOS & Android",
              alternative: "Double maintenance et risques de décalage de versions",
            },
            {
              feature: "Performance perçue",
              byteforce: "60 images/seconde, animations fluides et rendu natif",
              alternative: "Idem, sans avantage perceptible pour 98% des applications",
            },
          ],
        }}
        faqs={[
          {
            q: "Combien coûte une application mobile au Maroc ?",
            a: "Pour une application MVP simple (présentation, formulaires, compte utilisateur), comptez 35 000 à 50 000 MAD. Pour une application e-commerce ou service complet avec géolocalisation et paiement en ligne, le tarif se situe entre 60 000 et 110 000 MAD.",
          },
          {
            q: "Faut-il payer des frais aux stores Apple et Google ?",
            a: "Oui, les stores facturent un compte développeur : Google Play coûte 25 $ (paiement unique à vie), et Apple Developer coûte 99 $ / an. Nous vous accompagnons pour ouvrir ces comptes au nom officiel de votre entreprise.",
          },
          {
            q: "L'application fonctionne-t-elle sur tous les téléphones ?",
            a: "Oui, nous garantissons la compatibilité avec toutes les versions modernes d'iOS (iPhone) et Android (Samsung, Huawei, Xiaomi, etc.).",
          },
        ]}
        relatedLinks={[
          { href: "/insights/prix-application-mobile-maroc", label: "Guide des prix applications mobiles Maroc" },
          { href: "/developpement-logiciel-sur-mesure-maroc", label: "Développement logiciel sur mesure" },
          { href: "/developpement-saas-maroc", label: "Développement SaaS Maroc" },
          { href: "/realisations/tourispeak", label: "Étude de cas Tourispeak (App mobile)" },
        ]}
        cityLinks={[
          { href: "/developpement-logiciel-casablanca", label: "Application mobile Casablanca" },
          { href: "/villes/marrakech", label: "Application mobile Marrakech" },
          { href: "/villes/tanger", label: "Application mobile Tanger" },
          { href: "/villes/agadir", label: "Application mobile Agadir" },
          { href: "/villes/rabat", label: "Application mobile Rabat" },
        ]}
      />
    </main>
  );
}
