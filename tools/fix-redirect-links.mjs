import fs from "fs";
import path from "path";

const replacements = [
  ["/developpement-logiciel-sur-mesure-maroc/logiciel-metier/gestion", "/developpement-logiciel-sur-mesure-maroc/logiciel-metier"],
  ["/developpement-logiciel-sur-mesure-maroc/logiciel-metier/outil-interne", "/developpement-logiciel-sur-mesure-maroc/logiciel-metier"],
  ["/developpement-logiciel-sur-mesure-maroc/automatisation/entreprise", "/developpement-logiciel-sur-mesure-maroc/automatisation"],
  ["/developpement-logiciel-sur-mesure-maroc/automatisation/integration-api", "/developpement-logiciel-sur-mesure-maroc/automatisation"],
  ["/application-web-sur-mesure-maroc/application-metier", "/application-web-sur-mesure-maroc"],
  ["/application-web-sur-mesure-maroc/portail-client", "/application-web-sur-mesure-maroc"],
  ["/application-web-sur-mesure-maroc/dashboard", "/application-web-sur-mesure-maroc"],
  ["/application-web-sur-mesure-maroc/refonte", "/application-web-sur-mesure-maroc"],
  ["/developpement-saas-maroc/remplacer-saas", "/solutions/remplacer-saas"],
  ["/developpement-saas-maroc/saas-b2b", "/developpement-saas-maroc"],
  ["/developpement-saas-maroc/multi-tenant", "/developpement-saas-maroc"],
  ["/developpement-saas-maroc/mvp", "/developpement-saas-maroc"],
  ["/developpement-application-mobile-maroc/cross-platform", "/developpement-application-mobile-maroc"],
  ["/developpement-application-mobile-maroc/application-metier", "/developpement-application-mobile-maroc"],
  ["/developpement-application-mobile-maroc/android", "/developpement-application-mobile-maroc"],
  ["/developpement-application-mobile-maroc/ios", "/developpement-application-mobile-maroc"],
  ["/solutions/remplacer-excel/automatisation", "/solutions/remplacer-excel"],
  ["/solutions/remplacer-excel/centralisation-donnees", "/solutions/remplacer-excel"],
  ["/solutions/remplacer-saas/reduire-couts", "/solutions/remplacer-saas"],
  ["/solutions/remplacer-saas/logiciel-personnalise", "/solutions/remplacer-saas"],
  ["/solutions/automatisation-entreprise/workflow", "/solutions/automatisation-entreprise"],
  ["/solutions/automatisation-entreprise/integration-outils", "/solutions/automatisation-entreprise"],
  ["/solutions/moderniser-application/refonte-web", "/solutions/moderniser-application"],
  ["/solutions/moderniser-application/migration", "/solutions/moderniser-application"],
  ["/solutions/digitalisation-entreprise", "/solutions/logiciel-entreprise"],
  ["/developpement-logiciel-casablanca/application-web", "/developpement-logiciel-casablanca"],
  ["/developpement-logiciel-casablanca/crm", "/developpement-logiciel-casablanca"],
  ["/developpement-logiciel-france/logiciel-sur-mesure", "/developpement-logiciel-france"],
  ["/developpement-logiciel-france/saas", "/developpement-logiciel-france"],
  ["/services/applications-mobiles", "/developpement-application-mobile-maroc"],
  ["/services/logiciel-sur-mesure", "/developpement-logiciel-sur-mesure-maroc"],
];

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name === "graphify-out") continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx)$/.test(name) && !full.endsWith("next.config.ts")) out.push(full);
  }
  return out;
}

let files = 0;
for (const file of walk(".")) {
  let text = fs.readFileSync(file, "utf8");
  const original = text;
  for (const [from, to] of replacements) {
    text = text.split(`href: "${from}"`).join(`href: "${to}"`);
    text = text.split(`[[${from}|`).join(`[[${to}|`);
    text = text.split(`href="${from}"`).join(`href="${to}"`);
  }
  if (text !== original) {
    fs.writeFileSync(file, text);
    files += 1;
    console.log(file);
  }
}
console.log("updated", files);
