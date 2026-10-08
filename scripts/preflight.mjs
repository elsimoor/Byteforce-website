import { readFileSync, readdirSync } from "node:fs";
import { hasKeyword } from "../node_modules/seo-audit-kit/src/util.mjs";

const articles = readFileSync("lib/articles.ts", "utf8");
const drafts = readdirSync("scripts")
  .filter((name) => name.startsWith("insight-drafts") && name.endsWith(".json"))
  .flatMap((name) => JSON.parse(readFileSync(`scripts/${name}`, "utf8")));

let failed = 0;
for (const draft of drafts) {
  if (articles.includes(`slug: "${draft.slug}"`)) continue;
  const full = `${draft.title} · Byte Force`;
  const problems = [];
  if (full.length < 30 || full.length > 65) problems.push(`title ${full.length}`);
  if (draft.description.length < 100 || draft.description.length > 165) problems.push(`desc ${draft.description.length}`);
  for (const [label, text] of [
    ["title", full],
    ["h1", draft.h1],
    ["meta", draft.description],
    ["lede", draft.lede],
  ]) {
    if (!hasKeyword(text, draft.keyword)) problems.push(label);
  }
  const outside = (draft.links || []).filter((link) => link.href !== "/contact" && !link.href.startsWith("/insights"));
  if (outside.length < 2) problems.push(`links ${outside.length}`);
  if (problems.length) {
    failed += 1;
    console.log(draft.slug, problems.join(", "));
  } else {
    console.log(draft.slug, "ok");
  }
}
process.exit(failed ? 1 : 0);
