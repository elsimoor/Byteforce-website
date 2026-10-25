import type { Metadata } from "next";
import { SeoLandingView } from "@/components/seo-landing-view";
import { openGraph } from "@/lib/open-graph";

export const metadata: Metadata = {
  title: "Agence WordPress Maroc | Création Site Pro & WooCommerce",
  description:
    "Agence WordPress au Maroc : sites vitrines, e-commerce WooCommerce et plugins sur mesure. Chargement en < 1.5s, SEO inclus. Devis gratuit sous 24h.",
  alternates: { canonical: "/agence-wordpress-maroc" },
  openGraph: openGraph(
    "/agence-wordpress-maroc",
    "Agence WordPress Maroc | Création Site Pro & WooCommerce",
    "Agence WordPress au Maroc : sites vitrines, e-commerce WooCommerce et plugins sur mesure. Chargement en < 1.5s, SEO inclus. Devis gratuit sous 24h."
  ),
};

export default function AgenceWordpressMarocPage() {
  return (
    <main data-landing className="w-full">
      <SeoLandingView
        path="/agence-wordpress-maroc"
        badge="Agence Web WordPress"
        h1="Agence WordPress au Maroc : création de sites web performants & WooCommerce"
        directAnswerSnippet="La création d'un site WordPress professionnel au Maroc coûte entre 8 000 MAD (site vitrine PME) et 35 000 MAD (boutique e-commerce WooCommerce avec paiement en ligne CMI), livré en 2 à 4 semaines. Byte Force développe des architectures WordPress légères, sans thèmes lourds, avec un temps de chargement inférieur à 1,5 seconde et un référencement Google optimisé."
        metaDescription="Agence WordPress au Maroc : sites vitrines, e-commerce WooCommerce et plugins sur mesure. Chargement en < 1.5s, SEO inclus. Devis gratuit sous 24h."
        priceStartingFrom="À partir de 8 000 MAD"
        turnaroundTime="2 à 4 semaines"
        sections={[
          {
            h2: "Pourquoi un site WordPress conçu par des ingénieurs fait toute la différence ?",
            p: [
              "Plus de 40% des sites web dans le monde tournent sous WordPress. Mais au Maroc, beaucoup d'entreprises se retrouvent avec un site lent, piraté ou cassé après chaque mise à jour, parce qu'une agence a empilé un thème Elementor lourd et 35 extensions gratuites incompatibles.",
              "Chez Byte Force, nous abordons WordPress avec une rigueur d'ingénierie logicielle : thème sur mesure épuré, zéro code inutile, sécurité blindée contre les cyberattaques et respect strict des critères Core Web Vitals de Google.",
            ],
            bullets: [
              "Vitesse de chargement fulgurante (< 1,5s) : vos visiteurs ne quittent pas la page avant d'acheter.",
              "Design 100% sur mesure : une identité visuelle premium reflétant votre marque, sans modèle générique.",
              "Optimisation SEO native : balises Schema.org, sitemap XML, temps de réponse serveur rapide et hiérarchie éditoriale propre.",
              "Sécurité et sauvegardes automatiques : pare-feu applicatif, certificats SSL et sauvegardes quotidiennes externalisées.",
            ],
          },
          {
            h2: "Nos prestations WordPress pour entreprises et commerçants au Maroc",
            p: [
              "Nous répondons à chaque besoin avec une solution adaptée à votre secteur d'activité :",
            ],
            bullets: [
              "Site vitrine d'entreprise : valorisez vos services, vos réalisations et générez des demandes de devis qualifiées.",
              "Boutique en ligne WooCommerce : vente de produits, gestion des stocks, options de livraison au Maroc et paiement par carte bancaire CMI ou à la livraison (Cash on Delivery).",
              "Développement de plugins sur mesure : fonctionnalités spécifiques introuvables sur le marché (calculateur de devis, passerelle de paiement marocaine, connecteur ERP).",
              "Refonte et optimisation de vitesse : accélération de sites existants lents, nettoyage de bases de données et correction de failles de sécurité.",
            ],
          },
          {
            h2: "Une autonomie totale pour votre équipe",
            p: [
              "Votre site vous est remis clé en main avec une interface d'administration claire et intuitive en français. Vous pouvez modifier vos textes, ajouter des photos, publier de nouveaux articles ou produits sans toucher à une seule ligne de code. Une session de formation pratique et des guides vidéo personnalisés sont inclus dans chaque livraison.",
            ],
          },
        ]}
        comparison={{
          title: "WordPress par Byte Force vs Sites WordPress 'Low-Cost'",
          headers: ["Critère", "Byte Force", "Prestataire Low-Cost"],
          rows: [
            {
              feature: "Vitesse Google PageSpeed",
              byteforce: "Score 90+ sur mobile et desktop (< 1.5s)",
              alternative: "Score 25-40 (chargement en 6 à 10 secondes)",
            },
            {
              feature: "Architecture technique",
              byteforce: "Thème sur mesure propre, 5 à 8 plugins essentiels",
              alternative: "Thème lourd acheté avec 30 à 45 plugins qui se court-circuitent",
            },
            {
              feature: "Paiement en ligne Maroc",
              byteforce: "Intégration CMI / PayZone / Stripe certifiée",
              alternative: "Bricolage instable avec abandons de panier",
            },
            {
              feature: "Propriété et accès",
              byteforce: "Accès administrateur et FTP/Base 100% au client",
              alternative: "Client captif sans accès aux fichiers",
            },
          ],
        }}
        faqs={[
          {
            q: "Combien coûte la création d'un site WordPress au Maroc ?",
            a: "Un site vitrine d'entreprise performant se situe entre 8 000 MAD et 16 000 MAD. Un site e-commerce WooCommerce complet avec paiement en ligne coûte entre 18 000 MAD et 35 000 MAD selon le nombre de références.",
          },
          {
            q: "Puis-je gérer moi-même les modifications après la mise en ligne ?",
            a: "Oui, à 100%. L'administration WordPress est configurée sur mesure pour que vous puissiez modifier textes, tarifs, images et coordonnées en totale autonomie.",
          },
          {
            q: "Prenez-vous en charge la maintenance et les sauvegardes ?",
            a: "Oui, nous proposons des forfaits d'hébergement haute performance et de maintenance mensuelle pour surveiller la sécurité de votre site et appliquer les mises à jour en toute tranquillité.",
          },
        ]}
        relatedLinks={[
          { href: "/services/creation-site-web", label: "Création de site web" },
          { href: "/services/referencement-seo", label: "Référencement SEO Maroc" },
          { href: "/services/plugins-wordpress", label: "Développement plugins WordPress" },
          { href: "/insights/wordpress-quand-le-site-existe", label: "Quand garder WordPress" },
        ]}
        cityLinks={[
          { href: "/developpement-logiciel-casablanca", label: "Agence WordPress Casablanca" },
          { href: "/villes/agadir", label: "Création site WordPress Agadir" },
          { href: "/villes/marrakech", label: "Création site WordPress Marrakech" },
          { href: "/villes/fes", label: "Création site web Fès" },
          { href: "/villes/tanger", label: "Agence WordPress Tanger" },
        ]}
      />
    </main>
  );
}
