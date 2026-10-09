import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  htmlLimitedBots: /.*/,
  images: { minimumCacheTTL: 2678400 },
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
      { source: "/about", destination: "/studio", permanent: true },
      { source: "/a-propos", destination: "/studio", permanent: true },
      { source: "/portfolio", destination: "/realisations", permanent: true },
      { source: "/go", destination: "/", permanent: true },
      { source: "/category/:path*", destination: "/insights", permanent: true },
      { source: "/tag/:path*", destination: "/insights", permanent: true },
      { source: "/author/:path*", destination: "/studio", permanent: true },
      {
        source: "/wordpress-plugin-map-with-pins-transform-your-website-with-interactive-3d-mapping-2025",
        destination: "/services/plugins-wordpress",
        permanent: true,
      },
      { source: "/atlastrip-wordpress-plugin-3d-map", destination: "/services/plugins-wordpress", permanent: true },
      {
        source: "/introducing-the-atlatrip-map-plugin-a-free-powerful-solution-for-interactive-map-integration",
        destination: "/services/plugins-wordpress",
        permanent: true,
      },
      {
        source: "/un-joyau-surplombant-le-lac-de-bin-ouidane-maps",
        destination: "/services/plugins-wordpress",
        permanent: true,
      },
      { source: "/bin-el-ouidan", destination: "/services/plugins-wordpress", permanent: true },
      { source: "/my-cig-platforme-web", destination: "/realisations", permanent: true },
      { source: "/union-auto-service-platforme-web", destination: "/realisations", permanent: true },
      { source: "/my-fleet-plateforme-web", destination: "/realisations", permanent: true },
      { source: "/layli-applicatioon-mobile-et-plateforme-backoffice", destination: "/realisations", permanent: true },
      { source: "/atlastrip-application-mobile-et-plateform-backoffice", destination: "/realisations", permanent: true },
      {
        source: "/des-commandes-de-faible-valeur-limitaient-les-performances-de-layli",
        destination: "/realisations",
        permanent: true,
      },
      { source: "/scaling-media-platforme-web", destination: "/realisations", permanent: true },
      { source: "/a-house-guru", destination: "/realisations", permanent: true },
    ];
  },
  webpack: (config, { isServer, webpack }) => {
    if (!isServer) {
      config.plugins.push({
        apply(compiler: {
          hooks: {
            thisCompilation: {
              tap: (
                name: string,
                fn: (compilation: {
                  hooks: { processAssets: { tap: (options: { name: string; stage: number }, fn: () => void) => void } };
                  getAssets: () => { name: string; source: { source: () => { toString(): string } } }[];
                  deleteAsset: (name: string) => void;
                  updateAsset: (name: string, source: unknown) => void;
                }) => void,
              ) => void;
            };
          };
        }) {
          compiler.hooks.thisCompilation.tap("DropLegacyPolyfill", (compilation) => {
            compilation.hooks.processAssets.tap(
              {
                name: "DropLegacyPolyfill",
                stage: webpack.Compilation.PROCESS_ASSETS_STAGE_OPTIMIZE,
              },
              () => {
                for (const asset of [...compilation.getAssets()]) {
                  if (/(^|\/)polyfills([.-]|$)/.test(asset.name)) {
                    compilation.deleteAsset(asset.name);
                    continue;
                  }
                  if (!asset.name.endsWith("build-manifest.json") && !asset.name.endsWith("middleware-build-manifest.js")) continue;
                  const text = asset.source.source().toString();
                  if (!text.includes('"polyfillFiles"')) continue;
                  const next = asset.name.endsWith(".json")
                    ? JSON.stringify({ ...JSON.parse(text), polyfillFiles: [] })
                    : text.replace(/"polyfillFiles": \[[^\]]*\]/, '"polyfillFiles": []');
                  compilation.updateAsset(asset.name, new webpack.sources.RawSource(next));
                }
              },
            );
          });
        },
      });
    }
    return config;
  },
  async headers() {
    return [
      {
        source: "/villes/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        source: "/categories/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, follow" }],
      },
      {
        source: "/:path*",
        headers: [
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
