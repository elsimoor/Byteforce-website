import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

function simpleHtmlToMarkdown(html: string): string {
  if (!html) return "";
  let text = html;

  text = text.replace(/<!DOCTYPE[\s\S]*?>/gi, "");
  text = text.replace(/<head[\s\S]*?<\/head>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // Code blocks
  text = text.replace(/<pre[^>]*><code(?:\s+class="[^"]*language-([^"]+)[^"]*")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, lang, code) => {
    const l = lang ? lang.trim() : "";
    const clean = code
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    return `\n\n\`\`\`${l}\n${clean.trim()}\n\`\`\`\n\n`;
  });

  // Inline code
  text = text.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, " `$1` ");

  // Headings
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n\n# $1\n\n");
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n\n## $1\n\n");
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n\n### $1\n\n");
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n\n#### $1\n\n");

  // Bold & Italic
  text = text.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, "**$1**");
  text = text.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, "*$1*");

  // Links
  text = text.replace(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Lists
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
  text = text.replace(/<\/(?:ul|ol)>/gi, "\n");
  text = text.replace(/<(?:ul|ol)[^>]*>/gi, "\n");

  // Paragraphs & Breaks
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n");
  text = text.replace(/<br\s*\/?>/gi, "\n");

  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode common HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");

  // Clean extra blank lines
  return text.replace(/\n{3,}/g, "\n\n").trim();
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const targetUrl = searchParams.get("url");

    if (!targetUrl) {
      return NextResponse.json({ ok: false, error: "Veuillez fournir une URL valide." }, { status: 400 });
    }

    let parsed: URL;
    try {
      parsed = new URL(targetUrl);
    } catch {
      return NextResponse.json({ ok: false, error: "Format d'URL invalide." }, { status: 400 });
    }

    if (!["http:", "https:"].includes(parsed.protocol)) {
      return NextResponse.json({ ok: false, error: "Seules les requêtes HTTP/HTTPS sont supportées." }, { status: 400 });
    }

    // Attempt to fetch public page
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    try {
      const response = await fetch(parsed.toString(), {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,text/plain;q=0.8,*/*;q=0.7",
          "Accept-Language": "fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7",
        },
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (!response.ok) {
        if (response.status === 403 || response.status === 401) {
          return NextResponse.json(
            {
              ok: false,
              error:
                "Cet artefact Claude nécessite une connexion ou est protégé par Cloudflare. Copiez directement son contenu dans Claude et collez-le dans la zone de texte ci-dessous pour une conversion instantanée.",
            },
            { status: 200 }
          );
        }
        return NextResponse.json(
          {
            ok: false,
            error: `Le serveur distant a retourné une erreur (HTTP ${response.status}). Copiez-collez le contenu manuellement.`,
          },
          { status: 200 }
        );
      }

      const bodyText = await response.text();

      // Extract title if available
      const titleMatch = bodyText.match(/<title[^>]*>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1].replace(/Claude\s*[-|]\s*/i, "").trim() : "claude-artifact";

      const markdown = simpleHtmlToMarkdown(bodyText);

      return NextResponse.json({
        ok: true,
        title,
        markdown,
      });
    } catch (err: unknown) {
      clearTimeout(timeout);
      const msg = err instanceof Error ? err.message : String(err);
      return NextResponse.json(
        {
          ok: false,
          error:
            "Impossible d'accéder à l'URL distante (" +
            msg +
            "). Les artefacts privés Claude ne sont pas accessibles publiquement : collez directement votre texte dans le champ de conversion ci-dessous.",
        },
        { status: 200 }
      );
    }
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : "Erreur interne";
    return NextResponse.json({ ok: false, error: message }, { status: 500 });
  }
}
