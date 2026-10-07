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
      { source: "/refonte-application-web", destination: "/application-web-sur-mesure-maroc/refonte", permanent: true },
      { source: "/mvp-startup-maroc", destination: "/developpement-saas-maroc/mvp", permanent: true },
      {
        source: "/integration-api-maroc",
        destination: "/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api",
        permanent: true,
      },
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
