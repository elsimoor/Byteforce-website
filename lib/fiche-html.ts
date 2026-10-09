import { site } from "@/lib/site";

export function prefersHtml(request: Request) {
  if (request.headers.get("sec-fetch-dest") === "document") return true;
  const accept = request.headers.get("accept") ?? "";
  if (!accept.trim() || accept.trim() === "*/*") return false;
  return /text\/html/i.test(accept);
}

function esc(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export function ficheHtml(options: { title: string; description: string; path: string; markdown: string }) {
  const origin = site.url.replace(/\/$/, "");
  const url = `${origin}${options.path}`;
  const image = `${origin}/opengraph-image`;
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: options.title,
    description: options.description,
    url,
    inLanguage: "fr-MA",
    isPartOf: { "@type": "WebSite", name: site.name, url: origin },
  };
  const html = `<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${esc(options.title)}</title>
  <meta name="description" content="${esc(options.description)}">
  <link rel="canonical" href="${esc(url)}">
  <link rel="icon" href="/icon.png" type="image/png">
  <meta property="og:title" content="${esc(options.title)}">
  <meta property="og:description" content="${esc(options.description)}">
  <meta property="og:url" content="${esc(url)}">
  <meta property="og:image" content="${esc(image)}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="fr_FR">
  <meta name="twitter:card" content="summary_large_image">
  <script type="application/ld+json">${JSON.stringify(schema)}</script>
</head>
<body>
  <header>
    <a href="${origin}/">Byte Force</a>
  </header>
  <nav>
    <a href="${origin}/services">Services</a>
    <a href="${origin}/contact">Contact</a>
    <a href="${origin}/ai">Fiche pour les agents</a>
  </nav>
  <main>
    <article>
      <h1>${esc(options.title)}</h1>
      <p>${esc(options.description)}</p>
      <p>Le texte ci-dessous est la fiche. Un client qui demande le fichier brut reçoit le même texte, sans cette page.</p>
      <h2>Liens</h2>
      <ul>
        <li><a href="${origin}/">Accueil</a></li>
        <li><a href="${origin}/services">Services</a></li>
        <li><a href="${origin}/contact">Écrire à Casablanca</a></li>
      </ul>
      <h2>Texte de la fiche</h2>
      <pre>${esc(options.markdown)}</pre>
    </article>
  </main>
  <footer>
    <p>${esc(site.street)}, ${esc(site.locality)}, ${esc(site.postal)} ${esc(site.city)}.</p>
  </footer>
</body>
</html>
`;
  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      Vary: "Accept",
    },
  });
}

export function ficheText(markdown: string) {
  return new Response(markdown.endsWith("\n") ? markdown : `${markdown}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
      Vary: "Accept",
      "X-Robots-Tag": "noindex",
    },
  });
}
