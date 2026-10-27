"use client";

import { useState, useId } from "react";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ClaudeLogo } from "@/components/ou-en-est-marks";

function isSafeUrl(url?: string): boolean {
  if (!url) return false;
  try {
    if (url.startsWith("/") || url.startsWith("#") || url.startsWith("./") || url.startsWith("../")) {
      return true;
    }
    const parsed = new URL(url);
    return ["http:", "https:", "mailto:", "tel:"].includes(parsed.protocol);
  } catch {
    return false;
  }
}

function isProbablyHtml(content: string): boolean {
  if (!content) return false;
  const trimmed = content.trim();

  // Clear HTML documents
  if (/^<!DOCTYPE/i.test(trimmed) || /<html[\s>]/i.test(trimmed) || /<body[\s>]/i.test(trimmed)) {
    return true;
  }

  // Count HTML block tags
  const htmlTagCount = (content.match(/<\/?(?:div|p|h[1-6]|table|tr|td|th|ul|ol|li|pre|code|blockquote|section|article)[\s>]/gi) || []).length;

  // Count Markdown structural markers
  const mdHeadingCount = (content.match(/^#{1,6}\s+/gm) || []).length;
  const mdListCount = (content.match(/^[\s]*[-*+]\s+/gm) || []).length;
  const mdTableCount = (content.match(/^\|.+\|$/gm) || []).length;
  const mdCodeBlockCount = (content.match(/^```/gm) || []).length;
  const mdScore = mdHeadingCount * 2 + mdListCount + mdTableCount + mdCodeBlockCount * 2;

  // If Markdown elements dominate or no HTML structural tags exist, treat as Markdown
  if (mdScore >= 2 && mdScore >= htmlTagCount) {
    return false;
  }

  return htmlTagCount >= 2;
}

function htmlToMarkdown(input: string): string {
  if (!input) return "";

  // If input is already Markdown, preserve it untouched
  if (!isProbablyHtml(input)) {
    return input.trim();
  }

  let text = input;

  // Remove doctype, head, style, script, svg, nav, footer
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

  return text.replace(/\n{3,}/g, "\n\n").trim();
}

const SAMPLE_ARTIFACT = `# Spécifications Techniques : Cluster SEO & Gestion de Paie

Ce document de référence définit l'architecture de contenu et les exigences techniques pour positionner la solution sur les requêtes à forte intention d'achat.

## 1. Objectifs Stratégiques & Périmètre
L'objectif est d'accélérer l'acquisition organique tout en garantissant une conversion fluide vers l'outil de simulation.

### 1.1 Cible et Personas
- **Cible prioritaire** : Dirigeants de TPE et PME (10 à 250 salariés)
  - Décideurs RH et directeurs administratifs & financiers (DAF)
  - Entreprises souhaitant internaliser ou changer de prestataire
- **Enjeux clés** : Conformité légale DSN, gain de temps et *zéro pénalité URSSAF*

### 1.2 Parcours Utilisateur
1. Découverte de la page spoke ciblée via recherche Google
2. Consultation du comparatif et calcul des économies
3. Demande de devis instantané ou prise de rendez-vous en ligne

---

## 2. Structure des URLs & Mots-Clés Cibles
Le tableau suivant détaille le maillage interne et les intentions de recherche :

| Page / URL | Mot-clé Principal | Volume Mensuel | Intention | Priorité |
| :--- | :--- | :---: | :---: | ---: |
| /gestion-paie-en-ligne | gestion paie en ligne | 4 400 | Commerciale | P1 |
| /externalisation-paie-pme | externalisation paie pme | 1 900 | Transactionnelle | P1 |
| /cout-gestion-paie | cout fiche de paie entreprise | 1 300 | Informationnelle | P2 |
| /changer-prestataire-paie | changer gestionnaire paie | 720 | Décision | P2 |

---

## 3. Données Structurées Schema.org
Chaque page doit intégrer ce balisage JSON-LD valide :

\`\`\`json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Zepay Logiciel Paie",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "11",
    "priceCurrency": "EUR"
  }
}
\`\`\`

> **Note importante** : Chaque page fille doit lier la page pilier avec une ancre descriptive exacte. Pour en savoir plus, consultez notre [guide d'implémentation SEO](https://byteforce.ma/insights).`;

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

          {/* Right Column: Live Formatted Preview & Code Output using ReactMarkdown */}
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
                  <div className="text-on-surface">
                    <ReactMarkdown
                      remarkPlugins={[remarkGfm]}
                      components={{
                        h1: ({ children, ...props }) => (
                          <h1
                            className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tight text-on-surface mt-6 mb-4 border-b border-line pb-2.5"
                            {...props}
                          >
                            {children}
                          </h1>
                        ),
                        h2: ({ children, ...props }) => (
                          <h2
                            className="font-headline text-xl sm:text-2xl font-bold tracking-tight text-on-surface mt-6 mb-3 border-b border-outline-variant/40 pb-2"
                            {...props}
                          >
                            {children}
                          </h2>
                        ),
                        h3: ({ children, ...props }) => (
                          <h3
                            className="font-headline text-lg sm:text-xl font-bold tracking-tight text-on-surface mt-5 mb-2"
                            {...props}
                          >
                            {children}
                          </h3>
                        ),
                        h4: ({ children, ...props }) => (
                          <h4
                            className="font-headline text-base sm:text-lg font-bold text-on-surface mt-4 mb-2"
                            {...props}
                          >
                            {children}
                          </h4>
                        ),
                        h5: ({ children, ...props }) => (
                          <h5
                            className="font-headline text-sm sm:text-base font-bold text-on-surface mt-3 mb-1"
                            {...props}
                          >
                            {children}
                          </h5>
                        ),
                        h6: ({ children, ...props }) => (
                          <h6
                            className="font-headline text-xs sm:text-sm font-bold text-outline uppercase tracking-wider mt-3 mb-1"
                            {...props}
                          >
                            {children}
                          </h6>
                        ),
                        p: ({ children, ...props }) => (
                          <p className="my-3 text-sm leading-relaxed text-on-surface" {...props}>
                            {children}
                          </p>
                        ),
                        strong: ({ children, ...props }) => (
                          <strong className="font-bold text-on-surface" {...props}>
                            {children}
                          </strong>
                        ),
                        em: ({ children, ...props }) => (
                          <em className="italic text-on-surface" {...props}>
                            {children}
                          </em>
                        ),
                        ul: ({ children, ...props }) => (
                          <ul className="my-3 list-disc pl-6 space-y-1 text-sm text-on-surface-variant" {...props}>
                            {children}
                          </ul>
                        ),
                        ol: ({ children, ...props }) => (
                          <ol className="my-3 list-decimal pl-6 space-y-1 text-sm text-on-surface-variant" {...props}>
                            {children}
                          </ol>
                        ),
                        li: ({ children, ...props }) => (
                          <li className="leading-relaxed pl-1" {...props}>
                            {children}
                          </li>
                        ),
                        blockquote: ({ children, ...props }) => (
                          <blockquote
                            className="my-4 border-l-4 border-primary bg-surface-container-low px-4 py-2.5 text-sm italic text-on-surface-variant"
                            {...props}
                          >
                            {children}
                          </blockquote>
                        ),
                        hr: () => <hr className="my-6 border-line" />,
                        a: ({ href, children, ...props }) => {
                          const safe = isSafeUrl(href);
                          const isExternal = href?.startsWith("http");
                          return (
                            <a
                              href={safe ? href : "#"}
                              target={isExternal ? "_blank" : undefined}
                              rel={isExternal ? "noopener noreferrer" : undefined}
                              className="text-primary font-medium underline hover:text-primary-container transition-colors"
                              {...props}
                            >
                              {children}
                            </a>
                          );
                        },
                        table: ({ children, ...props }) => (
                          <div className="my-5 w-full overflow-x-auto border border-line bg-surface-container-lowest">
                            <table className="w-full min-w-[540px] border-collapse text-xs sm:text-sm text-left" {...props}>
                              {children}
                            </table>
                          </div>
                        ),
                        thead: ({ children, ...props }) => (
                          <thead className="border-b border-line bg-surface-container-low font-bold text-on-surface" {...props}>
                            {children}
                          </thead>
                        ),
                        tbody: ({ children, ...props }) => (
                          <tbody className="divide-y divide-outline-variant/40 bg-surface-container-lowest" {...props}>
                            {children}
                          </tbody>
                        ),
                        tr: ({ children, ...props }) => (
                          <tr className="transition-colors hover:bg-surface-container-low/40" {...props}>
                            {children}
                          </tr>
                        ),
                        th: ({ children, ...props }) => (
                          <th className="px-3.5 py-2.5 font-semibold text-on-surface border-r border-line last:border-r-0" {...props}>
                            {children}
                          </th>
                        ),
                        td: ({ children, ...props }) => (
                          <td className="px-3.5 py-2.5 text-on-surface-variant border-r border-line last:border-r-0" {...props}>
                            {children}
                          </td>
                        ),
                        code: ({ className, children, ...props }: any) => {
                          const match = /language-(\w+)/.exec(className || "");
                          const isMultiLine = String(children).includes("\n");
                          if (!match && !isMultiLine) {
                            return (
                              <code
                                className="rounded bg-surface-container px-1.5 py-0.5 font-mono text-[12px] text-primary font-semibold border border-outline-variant/50"
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          }
                          return (
                            <div className="my-4 overflow-hidden rounded border border-line bg-surface-container">
                              {match ? (
                                <div className="border-b border-line/60 bg-surface-container-high px-3 py-1 font-mono text-[10px] font-bold text-outline uppercase tracking-wider">
                                  {match[1]}
                                </div>
                              ) : null}
                              <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed text-on-surface">
                                <code className={className} {...props}>
                                  {children}
                                </code>
                              </pre>
                            </div>
                          );
                        },
                      }}
                    >
                      {markdownOutput}
                    </ReactMarkdown>
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
              Comment fonctionne le rendu Markdown ?
            </h3>
            <p>
              Le moteur analyse l&apos;arbre syntaxique Markdown (AST) complet : titres H1 à H6, tableaux GitHub Flavored Markdown (GFM), listes imbriquées, blocs de code, citations et liens avec validation stricte des protocoles de sécurité.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-bold text-base text-on-surface mb-2">
              Compatibilité universelle & Confidentialité
            </h3>
            <p>
              Le fichier .md généré conserve son balisage d&apos;origine intact, compatible avec Obsidian, Notion, VS Code, GitHub ou pour alimenter d&apos;autres contextes d&apos;IA. L&apos;exécution est 100% locale à votre navigateur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
