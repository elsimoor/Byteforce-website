import { services } from "@/lib/content";
import { site } from "@/lib/site";

export function GET() {
  const origin = site.url.replace(/\/$/, "");
  const lines = [
    "# Services Byte Force",
    "",
    `Studio logiciel à ${site.street}, ${site.locality}, ${site.postal} ${site.city}, ${site.countryLabel}.`,
    "Aucun prix public. La réponse part sous un jour ouvré.",
    "",
    ...services.flatMap((service) => {
      const href = service.href ?? `/services/${service.slug}`;
      return [`## ${service.title}`, "", service.summary, "", `Page : ${origin}${href}`, ""];
    }),
    `Contact : ${origin}/contact`,
  ];
  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "X-Robots-Tag": "noindex, follow",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
