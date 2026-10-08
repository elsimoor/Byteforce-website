import { services } from "@/lib/content";
import { site } from "@/lib/site";

export function GET() {
  const origin = site.url.replace(/\/$/, "");
  const lines = [
    `# ${site.name}`,
    "",
    `${site.name} est un studio logiciel à ${site.city}, ${site.countryLabel}.`,
    "Il conçoit des logiciels, des applications et des sites qu'un humain et une machine peuvent trouver, comprendre, et utiliser pour écrire.",
    "",
    "## Ce que nous faisons",
    ...services.map((service) => `- ${service.title} : ${service.summary}`),
    "",
    "## Lieu",
    `${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}.`,
    "Pas de bureau en France ni au Canada. Ces projets se font depuis Casablanca.",
    `Horaires : ${site.hoursLabel}.`,
    "",
    "## Contact",
    `Email : ${site.email}`,
    `Téléphone : ${site.phoneDisplay}`,
    "WhatsApp : https://wa.me/212666650696",
    `Formulaire : ${origin}/contact`,
    "Réponse sous un jour ouvré. Pas de prix public.",
    "",
    "## Pages utiles",
    `- Accueil : ${origin}/`,
    `- Services : ${origin}/services`,
    `- Travaux : ${origin}/realisations`,
    `- À propos : ${origin}/a-propos`,
    `- Décisions : ${origin}/insights`,
    `- Audit : ${origin}/audit`,
    `- Pour les agents : ${origin}/ai`,
    `- Contact : ${origin}/contact`,
    `- Version longue : ${origin}/llms-full.txt`,
    "",
    "## À ne pas inventer",
    "- Pas d'avis, de note, ni de nombre de clients publié.",
    "- Pas de grille de prix.",
    "- Le catalogue des projets est https://catalogue-iota.vercel.app/.",
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
