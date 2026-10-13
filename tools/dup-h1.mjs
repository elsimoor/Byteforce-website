import fs from "fs";
import path from "path";

const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) walk(full);
    else if (/\.(ts|tsx)$/.test(name)) files.push(full);
  }
}
walk("lib");
walk("app");
const hits = [];
for (const file of files) {
  const text = fs.readFileSync(file, "utf8");
  for (const match of text.matchAll(/h1:\s*"([^"]+)"/g)) {
    hits.push([match[1], file]);
  }
}
const groups = new Map();
for (const [h1, file] of hits) {
  if (!groups.has(h1)) groups.set(h1, []);
  groups.get(h1).push(file);
}
for (const [h1, list] of groups) {
  const unique = [...new Set(list)];
  if (unique.length > 1) console.log(h1, "=>", unique.join(" | "));
}
