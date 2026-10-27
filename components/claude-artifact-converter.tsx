"use client";

import { useState, useId } from "react";
import Link from "next/link";
import { ClaudeLogo } from "@/components/ou-en-est-marks";

function htmlToMarkdown(html: string): string {
  if (!html) return "";

  // If input doesn't look like HTML, return as-is
  if (!/<[a-z][\s\S]*>/i.test(html)) {
    return html.trim();
  }

  let text = html;

  // Remove doctype, head, style, script, svg
  text = text.replace(/<!DOCTYPE[\s\S]*?>/gi, "");
  text = text.replace(/<head[\s\S]*?<\/head>/gi, "");
  text = text.replace(/<style[\s\S]*?<\/style>/gi, "");
  text = text.replace(/<script[\s\S]*?<\/script>/gi, "");
  text = text.replace(/<svg[\s\S]*?<\/svg>/gi, "");
  text = text.replace(/<nav[\s\S]*?<\/nav>/gi, "");
  text = text.replace(/<footer[\s\S]*?<\/footer>/gi, "");

  // Code blocks: <pre><code>...</code></pre>
  text = text.replace(/<pre[^>]*><code(?:\s+class="[^"]*language-([^"]+)[^"]*")?[^>]*>([\s\S]*?)<\/code><\/pre>/gi, (_, lang, code) => {
    const l = lang ? lang.trim() : "";
    const cleanCode = code
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    return `\n\n\`\`\`${l}\n${cleanCode.trim()}\n\`\`\`\n\n`;
  });

  // Inline code: <code>...</code>
  text = text.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, code) => {
    return ` \`${code.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&")}\` `;
  });

  // Headings h1..h6
  text = text.replace(/<h1[^>]*>([\s\S]*?)<\/h1>/gi, "\n\n# $1\n\n");
  text = text.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/gi, "\n\n## $1\n\n");
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, "\n\n### $1\n\n");
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, "\n\n#### $1\n\n");
  text = text.replace(/<h5[^>]*>([\s\S]*?)<\/h5>/gi, "\n\n##### $1\n\n");
  text = text.replace(/<h6[^>]*>([\s\S]*?)<\/h6>/gi, "\n\n###### $1\n\n");

  // Bold & Italic
  text = text.replace(/<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi, "**$1**");
  text = text.replace(/<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi, "*$1*");

  // Links
  text = text.replace(/<a\s+[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, "[$2]($1)");

  // Lists
  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
  text = text.replace(/<\/(?:ul|ol)>/gi, "\n");
  text = text.replace(/<(?:ul|ol)[^>]*>/gi, "\n");

  // Blockquotes
  text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, content) => {
    return `\n> ${content.replace(/<[^>]+>/g, "").trim()}\n\n`;
  });

  // Tables
  text = text.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, tableHtml) => {
    const rows = tableHtml.match(/<tr[^>]*>([\s\S]*?)<\/tr>/gi) || [];
    if (!rows.length) return "";

    const parsedRows = rows.map((r: string) => {
      const cells = r.match(/<(?:th|td)[^>]*>([\s\S]*?)<\/(?:th|td)>/gi) || [];
      return cells.map((c: string) => c.replace(/<[^>]+>/g, "").trim().replace(/\|/g, "-"));
    });

    if (!parsedRows.length || !parsedRows[0].length) return "";

    const header = `| ${parsedRows[0].join(" | ")} |`;
    const separator = `| ${parsedRows[0].map(() => "---").join(" | ")} |`;
    const body = parsedRows
      .slice(1)
      .map((row: string[]) => `| ${row.join(" | ")} |`)
      .join("\n");

    return `\n\n${header}\n${separator}\n${body}\n\n`;
  });

  // Paragraphs & Breaks
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n");
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<hr\s*\/?>/gi, "\n\n---\n\n");

  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode common HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&mdash;/g, "—")
    .replace(/&ndash;/g, "–");

  // Clean consecutive blank lines
  return text.replace(/\n{3,}/g, "\n\n").trim();
}

const SAMPLE_ARTIFACT = `# Spécifications Techniques : Cluster SEO & Gestion de Paie

## 1. Objectifs Stratégiques
Ce document définit l'architecture de contenu et les exigences techniques pour positionner la solution sur les requêtes à forte intention d'achat.

- **Cible prioritaire** : Dirigeants de TPE et PME cherchant à externaliser la gestion sociale.
- **Conversion visée** : Demande de devis instantané et prise de rendez-vous en ligne.
- **Délai de mise en œuvre** : Sprint de 3 semaines avec tests de recette continus.

## 2. Structure des URLs & Mots-Clés
| Page | Mot-clé Principal | Volume Mensuel | Intention |
|---|---|---|---|
| /gestion-paie-en-ligne | gestion paie en ligne | 4 400 | Commerciale |
| /externalisation-paie-pme | externalisation paie pme | 1 900 | Transactionnelle |
| /cout-gestion-paie | cout fiche de paie entreprise | 1 300 | Informationnelle |
| /changer-prestataire-paie | changer gestionnaire paie | 720 | Décision |

## 3. Données Structurées Schema.org
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zepay Logiciel Paie",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All"
}
\`\`\`

> **Note importante** : Chaque page fille doit lier la page pilier avec une ancre descriptive exacte.`;

export function ClaudeArtifactConverter() {
  const [inputText, setInputText] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [filename, setFilename] = useState("claude-artifact");
  const [isLoadingUrl, setIsLoadingUrl] = useState(false);
  const [urlError, setUrlError] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"preview" | "raw">("preview");

  const inputId = useId();
  const urlId = useId();
  const filenameId = useId();

  const markdownOutput = htmlToMarkdown(inputText);

  const wordsCount = markdownOutput ? markdownOutput.trim().split(/\s+/).filter(Boolean).length : 0;
  const charsCount = markdownOutput ? markdownOutput.length : 0;
  const linesCount = markdownOutput ? markdownOutput.split("\n").length : 0;

  const handleDownload = () => {
    if (!markdownOutput) return;
    const blob = new Blob([markdownOutput], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename.replace(/[^a-z0-9-_]/gi, "_") || "artifact"}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    if (!markdownOutput) return;
    try {
      await navigator.clipboard.writeText(markdownOutput);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = markdownOutput;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleFetchUrl = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!urlInput.trim()) return;

    setIsLoadingUrl(true);
    setUrlError("");

    try {
      const res = await fetch(`/api/convert/claude-artifact?url=${encodeURIComponent(urlInput.trim())}`);
      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Impossible d'extraire l'artefact depuis cette URL.");
      }

      if (data.title) {
        setFilename(data.title.toLowerCase().replace(/[^a-z0-9]/g, "-").slice(0, 40));
      }

      setInputText(data.markdown || data.content || "");
    } catch (err: unknown) {
      setUrlError(
        err instanceof Error
          ? err.message
          : "URL inaccessible. Si l'artefact est privé, copiez son texte directement dans Claude et collez-le ci-dessus."
      );
    } finally {
      setIsLoadingUrl(false);
    }
  };

  const handleLoadSample = () => {
    setInputText(SAMPLE_ARTIFACT);
    setFilename("specifications-cluster-seo");
  };

  return (
    <>
      {/* Sticky Sub-Header bar like /ou-en-est-le-projet */}
      <div className="sticky top-20 z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-6 py-3 md:px-12">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            Outil · Convertisseur Markdown
          </p>
          <p className="font-mono text-[11px] text-outline">
            {wordsCount > 0 ? `${wordsCount} mots · ` : ""}100% sur cet appareil
          </p>
        </div>
      </div>

      {/* Main Form Container */}
      <div className="mx-auto max-w-3xl px-6 py-12 md:px-12 md:py-16">
        <p className="text-sm text-outline">
          <Link href="/outils" className="hover:text-primary transition-colors">
            ← Outils gratuits
          </Link>
        </p>

        <h1 className="display mt-4 max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
          Artifact Claude vers MD.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-on-surface">
          Convertit le texte, les tableaux ou le HTML d&apos;un artefact Claude en fichier Markdown (.md) propre et prêt à télécharger. Le traitement s&apos;exécute sur votre navigateur : rien n&apos;est enregistré sur un serveur.
        </p>

        {/* Input Text Box */}
        <fieldset className="mt-10 border border-line bg-surface-container-lowest p-6">
          <div className="flex items-center justify-between gap-4">
            <legend className="font-headline text-xl font-bold tracking-tight text-on-surface">
              Coller l&apos;artefact Claude
            </legend>
            <button
              type="button"
              onClick={handleLoadSample}
              className="font-mono text-[11px] text-primary underline hover:text-primary-container"
            >
              Charger un exemple
            </button>
          </div>

          <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">
            Texte brut, markdown ou HTML copié depuis la fenêtre Claude
          </p>

          <textarea
            id={inputId}
            className="field mt-4 font-mono text-sm leading-relaxed"
            rows={9}
            style={{ height: "auto", minHeight: "220px" }}
            placeholder="Collez ici le texte ou le code de votre artefact Claude..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />

          {inputText ? (
            <div className="mt-3 flex items-center justify-between">
              <span className="font-mono text-xs text-outline">
                {wordsCount} mots détectés
              </span>
              <button
                type="button"
                onClick={() => setInputText("")}
                className="font-mono text-xs text-outline hover:text-on-surface"
              >
                Effacer le texte
              </button>
            </div>
          ) : null}
        </fieldset>

        {/* Optional Public URL Import */}
        <div className="mt-8 border border-line bg-surface-container-lowest p-6">
          <div className="flex items-center gap-2">
            <ClaudeLogo />
            <p className="font-headline text-base font-bold tracking-tight text-on-surface">
              Ou importer depuis une URL Claude publique
            </p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
            Si votre artefact est publié avec un lien public. Pour les artefacts privés sous session, utilisez directement le copier-coller ci-dessus.
          </p>

          <form onSubmit={handleFetchUrl} className="mt-4 flex flex-col sm:flex-row gap-3">
            <input
              id={urlId}
              type="url"
              className="field flex-1"
              placeholder="https://claude.ai/artifact/..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <button
              type="submit"
              className="btn-line shrink-0 min-h-12"
              disabled={isLoadingUrl || !urlInput.trim()}
            >
              {isLoadingUrl ? "Lecture..." : "Importer"}
            </button>
          </form>

          {urlError ? (
            <p className="mt-3 text-sm text-error" role="alert">
              {urlError}
            </p>
          ) : null}
        </div>

        {/* Export and Action Panel */}
        <div className="mt-8 border border-line bg-surface-container-lowest p-6">
          <p className="font-headline text-lg font-bold tracking-tight text-on-surface">
            Téléchargement & Exportation
          </p>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4 items-end">
            <div>
              <label htmlFor={filenameId} className="block text-sm text-on-surface-variant mb-1 font-medium">
                Nom du fichier de sortie
              </label>
              <div className="flex items-center">
                <input
                  id={filenameId}
                  type="text"
                  className="field"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="claude-artifact"
                />
                <span className="ml-2 font-mono text-sm text-outline">.md</span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={!markdownOutput}
                className="btn flex-1 min-h-12"
              >
                Télécharger .md
              </button>
              <button
                type="button"
                onClick={handleCopy}
                disabled={!markdownOutput}
                className="btn-line min-h-12"
              >
                {copied ? "Copié !" : "Copier"}
              </button>
            </div>
          </div>

          {copied ? (
            <p className="mt-3 text-sm text-primary font-mono" role="status">
              Le Markdown est copié dans le presse-papiers.
            </p>
          ) : null}
        </div>

        {/* Preview Panel */}
        <div className="mt-8 border border-line bg-surface-container-lowest p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-outline-variant pb-3 gap-2">
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setActiveTab("preview")}
                className={
                  activeTab === "preview"
                    ? "border-b-2 border-primary pb-1 font-semibold text-primary text-sm"
                    : "pb-1 text-sm text-outline hover:text-on-surface"
                }
              >
                Aperçu du contenu
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("raw")}
                className={
                  activeTab === "raw"
                    ? "border-b-2 border-primary pb-1 font-semibold text-primary text-sm"
                    : "pb-1 text-sm text-outline hover:text-on-surface"
                }
              >
                Code Markdown brut
              </button>
            </div>

            <p className="font-mono text-xs text-outline">
              {wordsCount} mots · {charsCount} car. · {linesCount} lignes
            </p>
          </div>

          <div className="mt-4">
            {markdownOutput ? (
              activeTab === "preview" ? (
                <div className="space-y-3 text-on-surface text-sm leading-relaxed">
                  {markdownOutput.split("\n\n").map((chunk, i) => {
                    const trimmed = chunk.trim();
                    if (trimmed.startsWith("# ")) {
                      return (
                        <h2 key={i} className="font-headline text-2xl font-bold tracking-tight text-on-surface mt-6 mb-2 border-b border-line pb-2">
                          {trimmed.replace(/^# /, "")}
                        </h2>
                      );
                    }
                    if (trimmed.startsWith("## ")) {
                      return (
                        <h3 key={i} className="font-headline text-xl font-bold tracking-tight text-on-surface mt-5 mb-2">
                          {trimmed.replace(/^## /, "")}
                        </h3>
                      );
                    }
                    if (trimmed.startsWith("### ")) {
                      return (
                        <h4 key={i} className="font-headline text-lg font-bold text-on-surface mt-4 mb-1">
                          {trimmed.replace(/^### /, "")}
                        </h4>
                      );
                    }
                    if (trimmed.startsWith("```")) {
                      return (
                        <pre key={i} className="bg-surface-container p-3 font-mono text-xs rounded border border-line text-on-surface overflow-x-auto my-3">
                          {trimmed.replace(/```[a-z]*\n?/gi, "").trim()}
                        </pre>
                      );
                    }
                    if (trimmed.startsWith("> ")) {
                      return (
                        <blockquote key={i} className="border-l-2 border-primary pl-3 py-1 my-2 text-on-surface-variant italic">
                          {trimmed.replace(/^> /, "")}
                        </blockquote>
                      );
                    }
                    if (trimmed.startsWith("|")) {
                      const rows = trimmed.split("\n").filter((r) => !r.includes("---"));
                      return (
                        <div key={i} className="overflow-x-auto my-3">
                          <table className="w-full border-collapse border border-line text-xs">
                            <tbody>
                              {rows.map((row, rowIdx) => {
                                const cells = row.split("|").filter((_, idx, arr) => idx !== 0 && idx !== arr.length - 1);
                                return (
                                  <tr key={rowIdx} className={rowIdx === 0 ? "bg-surface-container-low font-bold" : ""}>
                                    {cells.map((cell, cellIdx) => (
                                      <td key={cellIdx} className="border border-line p-2">
                                        {cell.trim()}
                                      </td>
                                    ))}
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      );
                    }
                    if (trimmed.startsWith("- ")) {
                      const items = trimmed.split("\n").map((line) => line.replace(/^- /, ""));
                      return (
                        <ul key={i} className="list-disc pl-5 space-y-1 text-sm text-on-surface-variant my-2">
                          {items.map((it, idx) => (
                            <li key={idx}>{it}</li>
                          ))}
                        </ul>
                      );
                    }
                    return (
                      <p key={i} className="text-sm text-on-surface leading-relaxed">
                        {trimmed}
                      </p>
                    );
                  })}
                </div>
              ) : (
                <pre className="whitespace-pre-wrap font-mono text-xs text-on-surface bg-surface-container-low p-4 border border-outline-variant/60 max-h-[500px] overflow-auto">
                  {markdownOutput}
                </pre>
              )
            ) : (
              <p className="py-12 text-center text-sm text-outline italic">
                Collez un texte ci-dessus pour afficher l&apos;aperçu et générer le fichier .md.
              </p>
            )}
          </div>
        </div>

        {/* Editorial notes matching ou-en-est & audit */}
        <div className="mt-14 space-y-4 text-sm leading-relaxed text-on-surface-variant">
          <p>
            La conversion s&apos;arrête à ce que vous collez. Elle extrait le texte structuré, rétablit les titres, les listes, les tableaux et les blocs de code en syntaxe Markdown standard.
          </p>
          <p>
            Le fichier .md résultant est lisible par tous les éditeurs modernes : Obsidian, Notion, VS Code, GitHub ou directement par les modèles d&apos;IA (Claude, ChatGPT).
          </p>
        </div>
      </div>
    </>
  );
}
