"use client";

import { useState, useId } from "react";
import Link from "next/link";

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
  text = text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, q) => {
    const lines = q.trim().split("\n");
    return "\n\n" + lines.map((l: string) => `> ${l.trim()}`).join("\n") + "\n\n";
  });

  // Tables
  text = text.replace(/<table[^>]*>([\s\S]*?)<\/table>/gi, (_, tableContent) => {
    const rows = [...tableContent.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    if (!rows.length) return "";
    
    let tableMd = "\n\n";
    rows.forEach((rowMatch, rIndex) => {
      const cells = [...rowMatch[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map(c => 
        c[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()
      );
      if (cells.length) {
        tableMd += `| ${cells.join(" | ")} |\n`;
        if (rIndex === 0) {
          tableMd += `| ${cells.map(() => "---").join(" | ")} |\n`;
        }
      }
    });
    return tableMd + "\n";
  });

  // Paragraphs & line breaks
  text = text.replace(/<br\s*\/?>/gi, "\n");
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, "\n\n$1\n\n");
  text = text.replace(/<hr[^>]*>/gi, "\n\n---\n\n");

  // Strip remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Unescape standard HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&");

  // Clean excessive blank lines
  text = text.replace(/\n{3,}/g, "\n\n").trim();

  return text;
}

const SAMPLE_ARTIFACT = `# Brief SEO — Refonte Stratégique Zepay

## 1. Objectifs & Enjeux
- **Cible** : PME de 5 à 150 salariés, cabinets comptables et directions RH en France.
- **Objectif** : Générer 50 demandes de devis qualifiées par mois dès le trimestre 1.

## 2. Architecture de contenu (Cluster thématique)
| Page | Mot-clé cible | Volume | Intention |
| --- | --- | --- | --- |
| Pilier : /gestion-paie-en-ligne | gestion paie en ligne | 4 400 | Commerciale |
| Spoke 1 : /externalisation-paie-pme | externalisation paie pme | 1 900 | Transactionnelle |
| Spoke 2 : /cout-gestion-paie | cout fiche de paie entreprise | 1 300 | Informationnelle |
| Spoke 3 : /changer-prestataire-paie | changer gestionnaire paie | 720 | Décision |

## 3. Spécifications Techniques & Balises
\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Zepay Gestion de Paie",
  "areaServed": "France",
  "offers": {
    "@type": "Offer",
    "price": "11",
    "priceCurrency": "EUR"
  }
}
\`\`\`

> **Note importante** : Lier obligatoirement chaque spoke vers la page pilier avec une ancre descriptive exacte.`;

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

  // Convert input into Markdown
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
      // Fallback
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
          : "URL inaccessible. Si l'artefact est privé, copiez son texte directement dans Claude et collez-le ci-dessous."
      );
    } finally {
      setIsLoadingUrl(false);
    }
  };

  const handleLoadSample = () => {
    setInputText(SAMPLE_ARTIFACT);
    setFilename("brief-seo-zepay");
  };

  const handleClear = () => {
    setInputText("");
    setUrlInput("");
    setUrlError("");
    setFilename("claude-artifact");
  };

  return (
    <div className="w-full space-y-8">
      {/* 1. Quick Helper & Mode Selection */}
      <div className="grid gap-6 lg:grid-cols-12">
        {/* Left: Input Panel */}
        <div className="flex flex-col gap-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
            <h2 className="text-lg font-bold text-on-surface">1. Coller l&apos;Artefact Claude</h2>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleLoadSample}
                className="text-xs font-semibold text-primary hover:underline"
              >
                Exemple
              </button>
              {inputText && (
                <>
                  <span className="text-outline-variant">•</span>
                  <button
                    type="button"
                    onClick={handleClear}
                    className="text-xs font-semibold text-red-500 hover:underline"
                  >
                    Effacer
                  </button>
                </>
              )}
            </div>
          </div>

          {/* URL Import bar */}
          <form onSubmit={handleFetchUrl} className="flex flex-col gap-2">
            <label htmlFor={urlId} className="text-xs font-mono font-semibold text-on-surface-variant uppercase">
              Option A : Importer depuis une URL publique Claude
            </label>
            <div className="flex gap-2">
              <input
                id={urlId}
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://claude.site/artifacts/... ou lien public"
                className="h-10 min-w-0 flex-1 rounded-lg border border-outline-variant/60 bg-surface px-3 text-sm text-on-surface outline-none transition focus:border-primary focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={isLoadingUrl || !urlInput.trim()}
                className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-4 font-sans text-xs font-bold text-white transition hover:bg-primary/90 disabled:opacity-50"
              >
                {isLoadingUrl ? "Chargement..." : "Importer"}
              </button>
            </div>
            {urlError && (
              <p className="text-xs text-amber-600 bg-amber-50 p-2.5 rounded-lg border border-amber-200/60 leading-relaxed">
                {urlError}
              </p>
            )}
          </form>

          {/* Direct Text / HTML Paste area */}
          <div className="flex flex-1 flex-col gap-2">
            <label htmlFor={inputId} className="text-xs font-mono font-semibold text-on-surface-variant uppercase">
              Option B : Coller directement le texte, HTML ou Code (100% privé)
            </label>
            <textarea
              id={inputId}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Collez ici le contenu copié depuis votre conversation ou artefact Claude.ai (texte, tableaux, HTML, code...)"
              className="min-h-[380px] w-full flex-1 rounded-xl border border-outline-variant/60 bg-surface p-4 font-mono text-sm leading-relaxed text-on-surface outline-none transition focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-outline"
            />
            <p className="text-[11px] text-outline leading-tight">
              🔒 100% Sécurisé : Vos données sont traitées instantanément dans votre navigateur et ne sont jamais stockées sur nos serveurs.
            </p>
          </div>
        </div>

        {/* Right: Output & Download Panel */}
        <div className="flex flex-col gap-5 lg:col-span-6">
          <div className="flex items-center justify-between border-b border-outline-variant/30 pb-3">
            <div className="flex items-center gap-3">
              <h2 className="text-lg font-bold text-on-surface">2. Résultat Markdown (.md)</h2>
              <div className="flex rounded-lg bg-surface-variant/40 p-0.5 text-xs font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveTab("preview")}
                  className={`rounded-md px-2.5 py-1 transition ${
                    activeTab === "preview"
                      ? "bg-surface text-primary shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Aperçu
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("raw")}
                  className={`rounded-md px-2.5 py-1 transition ${
                    activeTab === "raw"
                      ? "bg-surface text-primary shadow-xs"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  Code Brut
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="hidden sm:flex items-center gap-3 text-xs font-mono text-outline">
              <span>{wordsCount} mots</span>
              <span>•</span>
              <span>{charsCount} car.</span>
              <span>•</span>
              <span>{linesCount} lignes</span>
            </div>
          </div>

          {/* Filename configuration & actions */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-outline-variant/40 bg-surface-container/30 p-3">
            <div className="flex items-center gap-2">
              <label htmlFor={filenameId} className="text-xs font-mono text-outline uppercase">
                Fichier :
              </label>
              <div className="flex items-center">
                <input
                  id={filenameId}
                  type="text"
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  placeholder="nom-du-fichier"
                  className="h-8 w-44 rounded-md border border-outline-variant/60 bg-surface px-2 text-xs font-mono text-on-surface outline-none focus:border-primary"
                />
                <span className="ml-1 text-xs font-mono text-outline font-bold">.md</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopy}
                disabled={!markdownOutput}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg border border-outline-variant/80 bg-surface px-3 font-sans text-xs font-bold text-on-surface transition hover:bg-surface-variant/50 disabled:opacity-40"
              >
                {copied ? (
                  <>
                    <span className="text-emerald-600">✔</span>
                    <span className="text-emerald-700">Copié !</span>
                  </>
                ) : (
                  <>
                    <span>Copier</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleDownload}
                disabled={!markdownOutput}
                className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-emerald-600 px-4 font-sans text-xs font-bold text-white shadow-sm transition hover:bg-emerald-700 active:scale-95 disabled:opacity-40"
              >
                <span>Télécharger .md</span>
                <span aria-hidden="true">↓</span>
              </button>
            </div>
          </div>

          {/* Viewer area */}
          <div className="min-h-[380px] flex-1 overflow-auto rounded-xl border border-outline-variant/60 bg-surface p-4">
            {!markdownOutput ? (
              <div className="flex h-full min-h-[320px] flex-col items-center justify-center text-center text-outline">
                <svg className="h-10 w-10 text-outline/50 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-sm font-semibold text-on-surface-variant">Aucun contenu à convertir</p>
                <p className="mt-1 text-xs max-w-xs">Collez le texte ou HTML d&apos;un artefact Claude à gauche, ou cliquez sur &quot;Exemple&quot;.</p>
              </div>
            ) : activeTab === "raw" ? (
              <pre className="font-mono text-xs leading-relaxed text-on-surface whitespace-pre-wrap select-all">
                {markdownOutput}
              </pre>
            ) : (
              <div className="prose prose-slate max-w-none text-sm leading-relaxed text-on-surface dark:prose-invert">
                {/* Clean formatted visual display */}
                {markdownOutput.split("\n\n").map((block, idx) => {
                  const trimmed = block.trim();
                  if (trimmed.startsWith("# ")) {
                    return <h1 key={idx} className="text-2xl font-bold tracking-tight text-on-surface mt-6 mb-3">{trimmed.replace("# ", "")}</h1>;
                  }
                  if (trimmed.startsWith("## ")) {
                    return <h2 key={idx} className="text-xl font-bold tracking-tight text-on-surface mt-5 mb-2.5">{trimmed.replace("## ", "")}</h2>;
                  }
                  if (trimmed.startsWith("### ")) {
                    return <h3 key={idx} className="text-base font-bold text-on-surface mt-4 mb-2">{trimmed.replace("### ", "")}</h3>;
                  }
                  if (trimmed.startsWith("```")) {
                    return (
                      <pre key={idx} className="my-3 rounded-lg bg-slate-900 p-3 font-mono text-xs text-slate-100 overflow-x-auto">
                        <code>{trimmed.replace(/```[a-z]*\n?/gi, "")}</code>
                      </pre>
                    );
                  }
                  if (trimmed.startsWith("> ")) {
                    return (
                      <blockquote key={idx} className="my-3 border-l-3 border-primary bg-primary/5 p-3 rounded-r-lg text-xs italic text-on-surface-variant">
                        {trimmed.replace(/^>\s*/gm, "")}
                      </blockquote>
                    );
                  }
                  if (trimmed.startsWith("- ")) {
                    return (
                      <ul key={idx} className="my-2 list-disc pl-5 space-y-1 text-xs text-on-surface-variant">
                        {trimmed.split("\n").map((li, lIdx) => (
                          <li key={lIdx}>{li.replace(/^- /, "")}</li>
                        ))}
                      </ul>
                    );
                  }
                  if (trimmed.startsWith("|")) {
                    const rows = trimmed.split("\n").filter(r => !r.includes("---"));
                    return (
                      <div key={idx} className="my-4 overflow-x-auto">
                        <table className="w-full text-left text-xs border-collapse border border-outline-variant/40">
                          <tbody>
                            {rows.map((row, rIdx) => {
                              const cells = row.split("|").filter((c, i, a) => i > 0 && i < a.length - 1);
                              return (
                                <tr key={rIdx} className={rIdx === 0 ? "bg-surface-variant/40 font-bold" : "border-t border-outline-variant/30"}>
                                  {cells.map((cell, cIdx) => (
                                    <td key={cIdx} className="p-2 border-r border-outline-variant/30">{cell.trim()}</td>
                                  ))}
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    );
                  }
                  return <p key={idx} className="my-2.5 text-xs leading-relaxed text-on-surface-variant">{trimmed}</p>;
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 3. Steps Guide */}
      <div className="rounded-2xl border border-outline-variant/40 bg-surface-container/20 p-6 md:p-8">
        <h3 className="text-base font-bold text-on-surface">Comment exporter un artefact Claude en fichier Markdown (.md) ?</h3>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          <div className="rounded-xl border border-outline-variant/30 bg-surface p-4">
            <span className="font-mono text-xs font-bold text-primary">Étape 1</span>
            <p className="mt-1 text-sm font-semibold text-on-surface">Copier l&apos;artefact</p>
            <p className="mt-1 text-xs text-outline leading-relaxed">
              Dans Claude.ai, ouvrez votre artefact et cliquez sur l&apos;icône &quot;Copy&quot; ou sélectionnez tout le texte (`Ctrl+A` / `Ctrl+C`).
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/30 bg-surface p-4">
            <span className="font-mono text-xs font-bold text-primary">Étape 2</span>
            <p className="mt-1 text-sm font-semibold text-on-surface">Coller dans l&apos;outil</p>
            <p className="mt-1 text-xs text-outline leading-relaxed">
              Collez le contenu dans la zone de texte à gauche. L&apos;outil formate automatiquement les titres, tableaux, listes et blocs de code.
            </p>
          </div>
          <div className="rounded-xl border border-outline-variant/30 bg-surface p-4">
            <span className="font-mono text-xs font-bold text-primary">Étape 3</span>
            <p className="mt-1 text-sm font-semibold text-on-surface">Télécharger le fichier .md</p>
            <p className="mt-1 text-xs text-outline leading-relaxed">
              Personnalisez le nom du fichier si souhaité, puis cliquez sur <strong>Télécharger .md</strong> ou <strong>Copier</strong> pour l&apos;intégrer dans votre projet.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
