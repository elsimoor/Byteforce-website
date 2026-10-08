import { readFileSync } from "node:fs";

const text = readFileSync("lib/articles.ts", "utf8");
const marker = 'slug: "developpement-logiciel-sur-mesure-maroc"';
const chunk = text.slice(text.lastIndexOf(marker));
const words = chunk.split(/\s+/).filter(Boolean);
console.log(words.length);
