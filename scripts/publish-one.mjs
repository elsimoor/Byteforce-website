import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { hasKeyword } from "../node_modules/seo-audit-kit/src/util.mjs";
const drafts = readdirSync(new URL(".", import.meta.url))
  .filter((name) => name.startsWith("insight-drafts") && name.endsWith(".json"))
  .flatMap((name) => JSON.parse(readFileSync(new URL(name, import.meta.url), "utf8")));
const articlesPath = "lib/articles.ts";
const llmsPath = "app/llms.txt/route.ts";
const aiPath = "app/ai/page.tsx";
let articles = readFileSync(articlesPath, "utf8");
const draft = drafts.find((item) => !articles.includes(`slug: "${item.slug}"`));
if (!draft) {
  console.log("QUEUE_EMPTY");
  process.exit(0);
}

const fullTitle = `${draft.title} · Byte Force`;
if (fullTitle.length < 30 || fullTitle.length > 65) {
  throw new Error(`title length ${fullTitle.length} for ${draft.slug}`);
}
if (draft.description.length < 100 || draft.description.length > 165) {
  throw new Error(`description length ${draft.description.length} for ${draft.slug}`);
}
for (const [label, text] of [
  ["title", fullTitle],
  ["h1", draft.h1],
  ["meta", draft.description],
  ["lede", draft.lede],
]) {
  if (!hasKeyword(text, draft.keyword)) throw new Error(`keyword missing in ${label} for ${draft.slug}`);
}
if (articles.includes(`title: "${draft.title}"`)) throw new Error(`duplicate title ${draft.title}`);

const q = (value) => JSON.stringify(value);
const sections = (list) =>
  list
    .map(
      (section) => `      {
        heading: ${q(section.heading)},
        paragraphs: [
${section.paragraphs.map((paragraph) => `          ${q(paragraph)},`).join("\n")}
        ],
      },`,
    )
    .join("\n");
const links = draft.links
  .map((link) => `      { href: ${q(link.href)}, label: ${q(link.label)} },`)
  .join("\n");
const block = `  {
    slug: ${q(draft.slug)},
    title: ${q(draft.title)},
    description:
      ${q(draft.description)},
    h1: ${q(draft.h1)},
    date: "2026-10-08",
    lede: ${q(draft.lede)},
    sections: [
${sections(draft.sections)}
    ],
    links: [
${links}
    ],
    en: {
      title: ${q(draft.en.title)},
      description:
        ${q(draft.en.description)},
      h1: ${q(draft.en.h1)},
      lede: ${q(draft.en.lede)},
      sections: [
${sections(draft.en.sections)}
      ],
    },
  },
`;

const marker = "\n];\n\nconst slugs";
if (!articles.includes(marker)) throw new Error("articles marker missing");
articles = articles.replace(marker, `\n${block}];\n\nconst slugs`);
writeFileSync(articlesPath, articles);

let llms = readFileSync(llmsPath, "utf8");
const llmsLine = `    \`- [${draft.llmsLabel}](\${origin}/insights/${draft.slug}) : ${draft.llmsNote}.\`,\n`;
const auditLine = "    `- [Audit](${origin}/audit)";
if (!llms.includes(auditLine)) throw new Error("llms marker missing");
if (!llms.includes(draft.slug)) llms = llms.replace(auditLine, llmsLine + auditLine);
writeFileSync(llmsPath, llms);

if (draft.ai) {
  let ai = readFileSync(aiPath, "utf8");
  const aiItem = `          <li>\n            <Link href="/insights/${draft.slug}">${draft.ai}</Link>. Puis <Link href="/contact">écrire</Link>.\n          </li>\n`;
  const anchor = '<Link href="/audit/json?url=https://byteforce.ma">/audit/json</Link>';
  if (!ai.includes(draft.slug)) {
    const at = ai.indexOf(anchor);
    if (at === -1) throw new Error("ai marker missing");
    const li = ai.lastIndexOf("<li>", at);
    if (li === -1) throw new Error("ai list item missing");
    ai = ai.slice(0, li) + aiItem + ai.slice(li);
    writeFileSync(aiPath, ai);
  }
}

const origin = "http://localhost:3011";
const url = `${origin}/insights/${draft.slug}`;
let page = null;
for (let attempt = 0; attempt < 8; attempt += 1) {
  const result = spawnSync("npx", ["seokit", "page", url, "--lang", "fr", "--no-write", "--json"], {
    encoding: "utf8",
    shell: true,
    cwd: process.cwd(),
  });
  const raw = `${result.stdout || ""}\n${result.stderr || ""}`;
  const start = raw.indexOf("{");
  if (start === -1) {
    console.log(raw.slice(0, 400));
    continue;
  }
  page = JSON.parse(raw.slice(start));
  if (page.page?.status === 200 && page.page.wordCount >= 700) break;
  await new Promise((resolve) => setTimeout(resolve, 2000));
}

if (!page?.page || page.page.status !== 200) {
  throw new Error(`page not ready ${page?.page?.status}`);
}
if (page.page.wordCount < 700) throw new Error(`thin ${page.page.wordCount}`);
if (!hasKeyword(page.page.title, draft.keyword)) throw new Error("rendered title missed keyword");
if (!hasKeyword(page.page.h1[0] || "", draft.keyword)) throw new Error("rendered h1 missed keyword");
if (!hasKeyword(page.page.metaDescription || "", draft.keyword)) throw new Error("rendered meta missed keyword");
const errors = Object.entries(page.issues || {}).filter(([, group]) => group.severity === "error");
if (errors.length) throw new Error(errors.map(([id]) => id).join(","));

const files = [articlesPath, llmsPath, ...(draft.ai ? [aiPath] : [])];
const git = (args) => {
  const result = spawnSync("git", args, { encoding: "utf8", cwd: process.cwd() });
  if (result.status !== 0) throw new Error(result.stderr || result.stdout);
  return result.stdout;
};
git(["add", ...files]);
git(["commit", "-m", draft.commit]);
git(["push"]);
console.log(`PUSHED ${draft.slug} words=${page.page.wordCount} title=${page.page.titleLen} desc=${page.page.descLen}`);
