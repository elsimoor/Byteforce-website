import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      {
        source: "/services/logiciel-sur-mesure",
        destination: "/developpement-logiciel-sur-mesure-maroc",
        permanent: true,
      },
      {
        source: "/services/applications-mobiles",
        destination: "/developpement-application-mobile-maroc",
        permanent: true,
      },
      {
        source: "/villes/casablanca",
        destination: "/developpement-logiciel-casablanca",
        permanent: true,
      },
      { source: "/crm-sur-mesure-maroc", destination: "/developpement-logiciel-sur-mesure-maroc/crm", permanent: true },
      { source: "/erp-sur-mesure-maroc", destination: "/developpement-logiciel-sur-mesure-maroc/erp", permanent: true },
      {
        source: "/logiciel-metier-sur-mesure-maroc",
        destination: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier",
        permanent: true,
      },
      {
        source: "/automatisation-processus-entreprise-maroc",
        destination: "/developpement-logiciel-sur-mesure-maroc/automatisation",
        permanent: true,
      },
      { source: "/remplacer-excel-par-logiciel", destination: "/solutions/remplacer-excel", permanent: true },
      {
        source: "/remplacer-saas-par-logiciel-sur-mesure",
        destination: "/solutions/remplacer-saas",
        permanent: true,
      },
      { source: "/refonte-application-web", destination: "/solutions/moderniser-application", permanent: true },
      { source: "/mvp-startup-maroc", destination: "/developpement-saas-maroc", permanent: true },
      {
        source: "/integration-api-maroc",
        destination: "/developpement-logiciel-sur-mesure-maroc/automatisation",
        permanent: true,
      },
      { source: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion", destination: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", permanent: true },
      { source: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier/outil-interne", destination: "/developpement-logiciel-sur-mesure-maroc/logiciel-metier", permanent: true },
      { source: "/developpement-logiciel-sur-mesure-maroc/automatisation/entreprise", destination: "/developpement-logiciel-sur-mesure-maroc/automatisation", permanent: true },
      { source: "/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api", destination: "/developpement-logiciel-sur-mesure-maroc/automatisation", permanent: true },
      { source: "/application-web-sur-mesure-maroc/application-metier", destination: "/application-web-sur-mesure-maroc", permanent: true },
      { source: "/application-web-sur-mesure-maroc/portail-client", destination: "/application-web-sur-mesure-maroc", permanent: true },
      { source: "/application-web-sur-mesure-maroc/dashboard", destination: "/application-web-sur-mesure-maroc", permanent: true },
      { source: "/application-web-sur-mesure-maroc/refonte", destination: "/application-web-sur-mesure-maroc", permanent: true },
      { source: "/developpement-saas-maroc/mvp", destination: "/developpement-saas-maroc", permanent: true },
      { source: "/developpement-saas-maroc/saas-b2b", destination: "/developpement-saas-maroc", permanent: true },
      { source: "/developpement-saas-maroc/multi-tenant", destination: "/developpement-saas-maroc", permanent: true },
      { source: "/developpement-saas-maroc/remplacer-saas", destination: "/solutions/remplacer-saas", permanent: true },
      { source: "/developpement-application-mobile-maroc/ios", destination: "/developpement-application-mobile-maroc", permanent: true },
      { source: "/developpement-application-mobile-maroc/android", destination: "/developpement-application-mobile-maroc", permanent: true },
      { source: "/developpement-application-mobile-maroc/cross-platform", destination: "/developpement-application-mobile-maroc", permanent: true },
      { source: "/developpement-application-mobile-maroc/application-metier", destination: "/developpement-application-mobile-maroc", permanent: true },
      { source: "/solutions/remplacer-excel/automatisation", destination: "/solutions/remplacer-excel", permanent: true },
      { source: "/solutions/remplacer-excel/centralisation-donnees", destination: "/solutions/remplacer-excel", permanent: true },
      { source: "/solutions/remplacer-saas/reduire-couts", destination: "/solutions/remplacer-saas", permanent: true },
      { source: "/solutions/remplacer-saas/logiciel-personnalise", destination: "/solutions/remplacer-saas", permanent: true },
      { source: "/solutions/automatisation-entreprise/workflow", destination: "/solutions/automatisation-entreprise", permanent: true },
      { source: "/solutions/automatisation-entreprise/integration-outils", destination: "/solutions/automatisation-entreprise", permanent: true },
      { source: "/solutions/moderniser-application/refonte-web", destination: "/solutions/moderniser-application", permanent: true },
      { source: "/solutions/moderniser-application/migration", destination: "/solutions/moderniser-application", permanent: true },
      { source: "/solutions/digitalisation-entreprise", destination: "/solutions/logiciel-entreprise", permanent: true },
      { source: "/developpement-logiciel-casablanca/crm", destination: "/developpement-logiciel-casablanca", permanent: true },
      { source: "/developpement-logiciel-casablanca/application-web", destination: "/developpement-logiciel-casablanca", permanent: true },
      { source: "/developpement-logiciel-france/saas", destination: "/developpement-logiciel-france", permanent: true },
      { source: "/developpement-logiciel-france/logiciel-sur-mesure", destination: "/developpement-logiciel-france", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
