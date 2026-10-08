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
    `- [Email](mailto:${site.email}) : ${site.email}`,
    `- [Téléphone](tel:${site.phone}) : ${site.phoneDisplay}`,
    "- [WhatsApp](https://wa.me/212666650696)",
    `- [Formulaire](${origin}/contact) : décrire le projet. Réponse sous un jour ouvré. Pas de prix public.`,
    "",
    "## Pages utiles",
    `- [Accueil](${origin}/) : le studio, à Casablanca.`,
    `- [Services](${origin}/services) : ce que Byte Force construit.`,
    `- [Travaux](${origin}/realisations) : projets publiés.`,
    `- [À propos](${origin}/a-propos) : le bureau et les faits.`,
    `- [Décisions](${origin}/insights) : questions avant de construire.`,
    `- [Un site qu'une machine peut lire](${origin}/insights/site-lisible-par-une-machine) : citer l'offre, le lieu et le contact.`,
    `- [Rouvrir l'application le lendemain](${origin}/insights/rouvrir-l-application) : le geste qui fait revenir.`,
    `- [Tester le parcours avant de le copier](${origin}/insights/tester-le-parcours) : mesurer avant de copier un accueil, un compte ou un essai.`,
    `- [Audit](${origin}/audit) : lecture d'une page.`,
    `- [Pour les agents](${origin}/ai) : fiche factuelle.`,
    `- [Contact](${origin}/contact) : décrire le projet.`,
    `- [Version longue](${origin}/llms-full.txt) : offres, travaux et décisions.`,
    "",
    "## À ne pas inventer",
    "- Pas d'avis, de note, ni de nombre de clients publié.",
    "- Pas de grille de prix.",
    `- Le catalogue des projets est [catalogue](${site.catalogue}).`,
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
