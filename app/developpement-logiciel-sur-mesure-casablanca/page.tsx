import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Développement Logiciel Sur Mesure Casablanca : Agence & Studio IT",
  description:
    "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h.",
  alternates: { canonical: "/developpement-logiciel-sur-mesure-casablanca" },
  openGraph: openGraph(
    "/developpement-logiciel-sur-mesure-casablanca",
    "Développement Logiciel Sur Mesure Casablanca : Agence & Studio IT",
    "Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h."
  ),
};

export default function DeveloppementLogicielCasablancaPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/developpement-logiciel-sur-mesure-casablanca"
        badge="Agence IT · Casablanca Technopark"
        h1="Développement de logiciel sur mesure à Casablanca : applications métier pour entreprises"
        directAnswerSnippet="Implantée au Technopark de Casablanca, l'agence ByteForce développe des logiciels métier, CRM et ERP sur mesure pour les PME et grands comptes du Grand Casablanca. Pour un budget à partir de 25 000 MAD et un délai de 4 à 8 semaines, nous digitalisons vos processus réels, éliminons vos classeurs Excel saturés et vous remettons 100% de la propriété du code source."
        metaDescription="Agence de développement logiciel sur mesure à Casablanca (Technopark) : ERP, CRM, logiciels métier et remplacement Excel. Code cédé à 100%. Devis sous 24h."
        priceStartingFrom="À partir de 25 000 MAD"
        turnaroundTime="4 à 8 semaines"
        sections={[
          {
            h2: "Pourquoi faire appel à une agence de développement logiciel à Casablanca ?",
            p: [
              "Casablanca concentre le cœur économique et financier du Maroc : négoce, logistique portuaire, industries, services financiers et santé. Dans cet écosystème compétitif, s'appuyer sur des fichiers Excel dispersés ou des logiciels standards rigides ralentit la prise de décision et génère des erreurs de ressaisie quotidiennes.",
              "En tant qu'entreprise de développement informatique basée au Technopark de Casablanca, ByteForce conçoit des applications métier sur mesure qui s'adaptent exactement aux flux opérationnels de votre entreprise. Notre proximité géographique vous permet de travailler en prise directe avec nos ingénieurs logiciels lors d'ateliers de cadrage en présentiel, sans intermédiaires commerciaux ni décalage horaire.",
            ],
            bullets: [
              "Proximité et ateliers en face-à-face : réunions de cadrage directement à Casablanca (Technopark, Sidi Maârouf, Aïn Sebaâ, Marina).",
              "Suppression des coûts récurrents : aucun abonnement par licence utilisateur, votre investissement est amorti en moins de 6 mois.",
              "Code source cédé contractuellement : vous êtes propriétaire de votre logiciel, des dépôts Git et de votre base de données.",
              "Conformité réglementaire marocaine : conformité fiscale DGI (factures avec ICE, IF, RC) et respect des normes CNDP pour les données personnelles.",
            ],
          },
          {
            h2: "Nos expertises logicielles pour les entreprises casablancaises",
            p: [
              "Nous accompagnons les dirigeants et directeurs des opérations dans la digitalisation concrète de leurs activités :",
            ],
            bullets: [
              "Logiciels de gestion sur mesure & remplacement Excel : centralisation des opérations, suppression des doublons et fiabilisation des calculs complexes.",
              "CRM commercial adapté au marché local : pipeline de vente Kanban, devis en Dirhams, alertes WhatsApp et suivi des relances clients.",
              "ERP léger pour PME : gestion synchronisée des achats, entrées/sorties d'entrepôt, livraisons, facturation et états comptables.",
              "Applications métier spécifiques : plateformes de dispatching pour le transport routier, suivi de chantiers BTP, gestion de dossiers médicaux ou portails partenaires.",
              "Architecture API & intégrations : interconnexion sécurisée entre vos outils existants, banques marocaines, passerelles de paiement CMI et services web.",
            ],
          },
          {
            h2: "Méthodologie projet : des livraisons concrètes toutes les deux semaines",
            p: [
              "Nous croyons à la transparence technique et au pragmatisme opérationnel :",
              "1. Diagnostic initial au Technopark (30 min gratuites) : analyse de vos goulots d'étranglement actuels et qualification du retour sur investissement.",
              "2. Cadrage et spécifications fonctionnelles : rédaction d'un périmètre clair décrivant les écrans, les rôles et les règles de gestion sans jargon inutile.",
              "3. Prototypage et design UX moderne : validation visuelle de chaque interface avec vos équipes terrain avant le démarrage du code.",
              "4. Développement agile & démonstrations bi-hebdomadaires : vous testez les modules au fur et à mesure de leur avancement sur un environnement de recette dédié.",
              "5. Migration de vos données et formation sur site : nettoyage de vos anciens classeurs, importation de l'historique et formation de vos collaborateurs.",
            ],
          },
          {
            h2: "Références vérifiées et réalisations technologiques à Casablanca",
            p: [
              "Parmi nos déploiements récents :",
              "• Dealkhir (Casablanca) : conception et développement d'une plateforme solidaire robuste reliant donateurs et associations à travers le Maroc, intégrant cartographie interactive et gestion multi-organisations.",
              "• UAS - Universal Aviation Services (Casablanca) : plateforme e-commerce et solution digitale sur mesure pour le secteur aéronautique marocain.",
              "• Projets industriels et PME : digitalisation de circuits de validation de bons de commande et suivi de parcs logistiques dans la région de Casablanca-Settat.",
            ],
          },
        ]}
        comparison={{
          title: "Comparatif : Studio ByteForce Casablanca vs Agences offshore ou logiciels importés",
          headers: ["Critère stratégique", "ByteForce Casablanca", "Éditeurs étrangers / Offshore"],
          rows: [
            {
              feature: "Proximité et échanges",
              byteforce: "Équipe locale au Technopark Casablanca, réunions en présentiel",
              alternative: "Échanges distants par tickets, décalage et interlocuteurs changeants",
            },
            {
              feature: "Adaptation aux flux métier",
              byteforce: "100% sur mesure selon votre organisation et vocabulaire interne",
              alternative: "Obligation de déformer vos habitudes pour coller au logiciel",
            },
            {
              feature: "Modèle de facturation",
              byteforce: "Coût forfaitaire transparent, zéro abonnement mensuel par employé",
              alternative: "Facturation en devises (USD/EUR) qui s'alourdit à chaque embauche",
            },
            {
              feature: "Propriété intellectuelle",
              byteforce: "Code source, dépôts Git et base de données remis à 100%",
              alternative: "Vous restez locataire dépendant du bon vouloir de l'éditeur",
            },
            {
              feature: "Technologies utilisées",
              byteforce: "Stack moderne et pérenne (Next.js, Node.js, PostgreSQL, Docker)",
              alternative: "Technologies vieillissantes ou scripts propriétaires non maintenables",
            },
          ],
        }}
        faqs={[
          {
            q: "Où se situent vos bureaux à Casablanca pour vous rencontrer ?",
            a: "Nos bureaux sont situés au Technopark de Casablanca, Boulevard Dammam, Aïn Chock. Nous vous accueillons sur rendez-vous en semaine de 9h à 19h pour analyser votre projet et échanger sur vos processus opérationnels.",
          },
          {
            q: "Quel est le tarif moyen pour un logiciel sur mesure à Casablanca ?",
            a: "Le tarif démarre à 25 000 MAD pour une application métier ciblée (remplacement d'un fichier Excel critique). Un CRM ou ERP personnalisé pour PME se situe généralement entre 45 000 MAD et 95 000 MAD. Un devis transparent et détaillé vous est remis gratuitement sous 24h.",
          },
          {
            q: "En quoi cette offre locale se distingue-t-elle de votre page nationale ?",
            a: "Notre page nationale présente notre cadre d'ingénierie global pour tout le Maroc, tandis que notre offre à Casablanca s'adresse spécifiquement aux entreprises de la métropole avec un accompagnement de proximité : ateliers de cadrage sur site, compréhension approfondie du tissu économique casablancais et réactivité immédiate.",
          },
          {
            q: "Comment garantissez-vous que le logiciel sera adopté par nos équipes ?",
            a: "L'échec de nombreux logiciels vient de leur complexité. Nous concevons des interfaces épurées ne contenant que les boutons et champs indispensables, validées avec les utilisateurs finaux lors d'ateliers pratiques. Le temps moyen de prise en main est inférieur à 30 minutes.",
          },
          {
            q: "Qui assure la maintenance et les évolutions après la livraison ?",
            a: "Tous les défauts éventuels liés au périmètre initial sont corrigés dans le cadre de la garantie de livraison. Pour vos évolutions futures, nous proposons des forfaits d'assistance technique ou formons vos équipes informatiques internes sur le code source remis.",
          },
        ]}
        relatedLinks={[
          { href: "/developpement-logiciel-sur-mesure-maroc", label: "Pillier national : Développement logiciel Maroc" },
          { href: "/crm/logiciel-crm-personnalise", label: "Logiciel CRM sur mesure Casablanca" },
          { href: "/developpement-saas-maroc", label: "Développement SaaS & MVP Casablanca" },
          { href: "/solutions/remplacer-excel", label: "Remplacer Excel par un logiciel d'entreprise" },
          { href: "/realisations/dealkhir", label: "Étude de cas : Plateforme Dealkhir à Casablanca" },
        ]}
        cityLinks={[
          { href: "/developpement-application-mobile-casablanca", label: "Applications mobiles Casablanca" },
          { href: "/villes/marrakech", label: "Logiciel sur mesure Marrakech" },
          { href: "/villes/tanger", label: "Logiciel sur mesure Tanger" },
          { href: "/villes/rabat", label: "Logiciel sur mesure Rabat" },
          { href: "/villes/agadir", label: "Logiciel sur mesure Agadir" },
        ]}
      />
    </main>
  );
}
