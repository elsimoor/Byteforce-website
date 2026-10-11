import { readFileSync } from "node:fs";
const src = readFileSync("components/studio-home.tsx", "utf8");
const tags = [...src.matchAll(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/g)];
for (const tag of tags) {
  const text = tag[1].replace(/<[^>]+>/g, "").replace(/&apos;/g, "'").replace(/&amp;/g, "&").replace(/\s+/g, " ").trim();
  if (text.length < 10) console.log(text.length, JSON.stringify(text));
}
console.log("total", tags.length, "short", tags.filter((t) => t[1].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim().length < 10).length);
