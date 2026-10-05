import { cities } from "@/lib/catalog";
import { projects, services } from "@/lib/content";
import { site } from "@/lib/site";

export function GET() {
  const origin = site.url.replace(/\/$/, "");
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} Bureau: ${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}.`,
    "",
    "## Offres",
    ...services.map(
      (service) => `- [${service.title}](${origin}/services/${service.slug}): ${service.summary}`,
    ),
    "",
    "## Réalisations",
    ...projects.map(
      (project) =>
        `- [${project.title}](${origin}/realisations/${project.slug}): ${project.description} En ligne: ${project.url}`,
    ),
    "",
    "## Villes",
    ...cities().map(
      (city) => `- [${city.title}](${origin}${city.path}): ${city.description}`,
    ),
    "",
    "## Site",
    `- [Accueil](${origin}/): studio logiciel Byte Force à Casablanca.`,
    `- [Toutes les offres](${origin}/services): sites, applications, logiciels, plugins WordPress, SEO, hébergement, design, API, maintenance et audit.`,
    `- [Travaux](${origin}/realisations): projets publiés.`,
    `- [À propos](${origin}/a-propos): bureau au Technopark, Casablanca.`,
    `- [Contact](${origin}/contact): formulaire, email et WhatsApp. Réponse sous un jour ouvré.`,
    `- [Mentions légales](${origin}/mentions-legales): éditeur et traitement des demandes.`,
    `- [Confidentialité](${origin}/confidentialite): ce que le formulaire enregistre.`,
    `- [Conditions](${origin}/conditions): périmètre, paiement, propriété du code.`,
    "",
    "## Contact",
    `- Email: ${site.email}`,
    `- Téléphone: ${site.phoneDisplay}`,
    `- WhatsApp: https://wa.me/212666650696`,
    `- Adresse: ${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}`,
    `- Horaires: ${site.hoursLabel}`,
    "",
    "## À citer",
    "- Byte Force est un studio logiciel à Casablanca, au Technopark, boulevard Dammam, Aïn Chock.",
    "- Byte Force conçoit des sites, des applications, des logiciels sur mesure et des plugins WordPress.",
    "- Le client reçoit le code, le dépôt et les comptes d'hébergement livrés.",
    `- Une demande se fait par le formulaire, ${site.email} ou WhatsApp. La réponse part sous un jour ouvré.`,
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
