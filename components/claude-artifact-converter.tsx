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
    <div className="w-full">
      {/* Sticky Sub-Header bar spanning full max-w-7xl width */}
      <div className="sticky top-20 z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-12 py-3">
          <p className="font-mono text-[11px] font-bold tracking-[0.16em] text-primary uppercase">
            Outil · Convertisseur Claude vers MD
          </p>
          <p className="font-mono text-[11px] text-outline">
            {wordsCount > 0 ? `${wordsCount} mots détectés · ` : ""}100% sur cet appareil
          </p>
        </div>
      </div>

      {/* Main Wide Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12 py-12 md:py-16">
        <p className="text-sm text-outline">
          <Link href="/outils" className="hover:text-primary transition-colors">
            ← Outils gratuits
          </Link>
        </p>

        {/* Wide Header */}
        <div className="mt-4 flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-outline-variant/50 pb-8">
          <div>
            <h1 className="display max-w-[14ch] text-[clamp(2.6rem,6vw,4.6rem)]">
              Artifact Claude vers MD.
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-on-surface">
              Convertit le texte, les tableaux ou le HTML d&apos;un artefact Claude en fichier Markdown (.md) propre et prêt à télécharger. Le traitement s&apos;exécute sur votre navigateur : rien n&apos;est enregistré sur un serveur.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleLoadSample}
              className="btn-line min-h-12"
            >
              Charger un exemple
            </button>
            <button
              type="button"
              onClick={handleDownload}
              disabled={!markdownOutput}
              className="btn min-h-12 px-6"
            >
              Télécharger .md
            </button>
          </div>
        </div>

        {/* Side-by-side Workstation Layout on Large Screens */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Input and Configuration */}
          <div className="space-y-6">
            {/* Direct Paste Box */}
            <fieldset className="border border-line bg-surface-container-lowest p-6 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <legend className="font-headline text-xl font-bold tracking-tight text-on-surface">
                  1. Coller l&apos;artefact Claude
                </legend>
                {inputText ? (
                  <button
                    type="button"
                    onClick={() => setInputText("")}
                    className="font-mono text-xs text-outline hover:text-on-surface"
                  >
                    Effacer le texte
                  </button>
                ) : null}
              </div>

              <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-outline uppercase">
                Texte brut, markdown ou HTML copié depuis la fenêtre Claude
              </p>

              <textarea
                id={inputId}
                className="field mt-4 font-mono text-xs sm:text-sm leading-relaxed"
                rows={14}
                style={{ height: "auto", minHeight: "360px" }}
                placeholder="Collez ici le texte ou le code de votre artefact Claude..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
            </fieldset>

            {/* File Name & Export Options */}
            <div className="border border-line bg-surface-container-lowest p-6 sm:p-8">
              <p className="font-headline text-lg font-bold tracking-tight text-on-surface">
                2. Nom du fichier de sortie
              </p>

              <div className="mt-4 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <div className="flex-1 flex items-center">
                  <input
                    id={filenameId}
                    type="text"
                    className="field flex-1"
                    value={filename}
                    onChange={(e) => setFilename(e.target.value)}
                    placeholder="claude-artifact"
                  />
                  <span className="ml-2 font-mono text-sm text-outline">.md</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={!markdownOutput}
                    className="btn min-h-12 flex-1 sm:flex-none px-5"
                  >
                    Télécharger .md
                  </button>
                  <button
                    type="button"
                    onClick={handleCopy}
                    disabled={!markdownOutput}
                    className="btn-line min-h-12 px-4"
                  >
                    {copied ? "Copié !" : "Copier"}
                  </button>
                </div>
              </div>

              {copied ? (
                <p className="mt-3 text-sm text-primary font-mono" role="status">
                  ✓ Markdown copié dans le presse-papiers.
                </p>
              ) : null}
            </div>

            {/* Optional URL Import */}
            <div className="border border-line bg-surface-container-lowest p-6 sm:p-8">
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
          </div>

          {/* Right Column: Live Formatted Preview & Code Output */}
          <div className="lg:sticky lg:top-36 border border-line bg-surface-container-lowest p-6 sm:p-8">
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
                  Aperçu du rendu
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

              <div className="flex items-center gap-3">
                <p className="font-mono text-xs text-outline">
                  {wordsCount} mots · {charsCount} car.
                </p>
                {markdownOutput ? (
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="font-mono text-xs text-primary underline hover:text-primary-container"
                  >
                    {copied ? "Copié !" : "Copier"}
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-4 min-h-[460px] max-h-[720px] overflow-y-auto pr-1">
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
                  <pre className="whitespace-pre-wrap font-mono text-xs text-on-surface bg-surface-container-low p-4 border border-outline-variant/60 max-h-[660px] overflow-auto">
                    {markdownOutput}
                  </pre>
                )
              ) : (
                <div className="py-24 text-center">
                  <p className="text-sm text-outline italic">
                    Collez votre texte dans la colonne de gauche ou cliquez sur &quot;Charger un exemple&quot; pour voir l&apos;aperçu en direct.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Editorial notes across full width */}
        <div className="mt-16 border-t border-outline-variant/40 pt-10 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm leading-relaxed text-on-surface-variant">
          <div>
            <h3 className="font-headline font-bold text-base text-on-surface mb-2">
              Comment fonctionne la conversion ?
            </h3>
            <p>
              La conversion s&apos;arrête à ce que vous collez. Elle extrait le texte structuré, rétablit les titres, les listes à puces, les tableaux comparatifs et les blocs de code en syntaxe Markdown standard (Gfm).
            </p>
          </div>
          <div>
            <h3 className="font-headline font-bold text-base text-on-surface mb-2">
              Compatibilité universelle
            </h3>
            <p>
              Le fichier .md résultant est lisible par tous les éditeurs modernes : Obsidian, Notion, VS Code, GitHub ou directement par les modèles d&apos;IA (Claude, ChatGPT) pour réinjecter des briefs ou spécifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
