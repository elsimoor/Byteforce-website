import { ficheHtml, ficheText, prefersHtml } from "@/lib/fiche-html";
import { articles } from "@/lib/articles";
import { projects, services } from "@/lib/content";
import { moneyPages } from "@/lib/money";
import { site } from "@/lib/site";

const title = "La fiche longue llms de Byte Force";
const description =
  "Fiche longue de Byte Force à Casablanca : offres, pages commerciales, travaux publiés, décisions, contact, et limites écrites.";

export function GET(request: Request) {
  const origin = site.url.replace(/\/$/, "");
  const lines = [
    `# ${site.name}`,
    "",
    site.description,
    `Bureau : ${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}.`,
    "Les marchés cités sont le Maroc, puis la France et le Canada seulement là où un projet du catalogue existe.",
    "Fiche Google : https://share.google/L12w0TmJ9kkUcVBg7",
    "",
    "## Offres",
    ...services.map((service) => {
      const path = service.href ?? `/services/${service.slug}`;
      return `- [${service.title}](${origin}${path}) : ${service.summary} Public : ${service.audience}`;
    }),
    "",
    "## Pages commerciales",
    ...moneyPages.map((page) => `- [${page.h1}](${origin}/${page.path}) : ${page.description}`),
    "",
    "## Réalisations",
    ...projects.map((project) => {
      const proof = [project.problem, project.solution, project.result].filter(Boolean).join(" ");
      return `- [${project.title}](${origin}/realisations/${project.slug}) : ${project.description} ${project.city}, ${project.country}, ${project.year}. En ligne : ${project.url}${proof ? ` ${proof}` : ""}`;
    }),
    "",
    "## Décisions déjà écrites",
    ...articles.map((article) => `- [${article.h1}](${origin}/insights/${article.slug}) : ${article.description}`),
    "",
    "## Agents",
    `- [Pour les agents](${origin}/ai) : réponses factuelles sur l'entreprise.`,
    `- [Services](${origin}/ai/services)`,
    `- [Travaux](${origin}/ai/work)`,
    `- [Contact](${origin}/ai/contact)`,
    `- [Questions](${origin}/ai/faq)`,
    `- [Audit JSON](${origin}/audit/json?url=) : ajouter l'adresse à lire. Le rapport humain est ${origin}/audit.`,
    "",
    "## Contact",
    `- Email : ${site.email}`,
    `- Téléphone : ${site.phoneDisplay}`,
    "- WhatsApp : https://wa.me/212666650696",
    `- Adresse : ${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}`,
    `- Horaires : ${site.hoursLabel}`,
    "- Premier échange de trente minutes, gratuit. Réponse sous un jour ouvré.",
    "- À la remise, le client possède le code, le dépôt et les comptes d'hébergement livrés.",
    "",
    "## Limites",
    "- Aucun prix public, aucun avis inventé, aucune année de création publiée.",
    "- Une page ville qui n'est pas Casablanca n'est pas une page à citer : Casablanca est /developpement-logiciel-casablanca.",
    "- llms.txt n'est pas un facteur de classement Google. C'est une fiche de lecture.",
  ];

  const markdown = `${lines.join("\n")}\n`;
  if (prefersHtml(request)) return ficheHtml({ title, description, path: "/llms-full.txt", markdown });
  return ficheText(markdown);
}
