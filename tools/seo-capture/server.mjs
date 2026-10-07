import { createServer } from "node:http";
import { appendFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PORT = 3947;
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..", "..", "seo-field");

function dayParts(date = new Date()) {
  const year = String(date.getFullYear());
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return { year, month, day };
}

function clip(value, max) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, max);
}

function list(value, maxItems, maxLen) {
  if (!Array.isArray(value)) return [];
  return value.map((item) => clip(item, maxLen)).filter(Boolean).slice(0, maxItems);
}

function parseGsc(body) {
  const consoleUrl = clip(body.consoleUrl, 2000);
  if (!consoleUrl.startsWith("https://search.google.com/search-console")) return null;
  const rows = Array.isArray(body.rows) ? body.rows.slice(0, 80) : [];
  return {
    kind: "gsc",
    consoleUrl,
    title: clip(body.title, 300) || "Search Console",
    property: clip(body.property, 200),
    collectedAt: clip(body.collectedAt, 40) || new Date().toISOString(),
    tabs: list(body.tabs, 12, 80),
    urls: list(body.urls, 150, 500).filter((href) => href.startsWith("http://") || href.startsWith("https://")),
    rows: rows
      .map((row) => (Array.isArray(row) ? row.map((cell) => clip(cell, 180)).filter(Boolean).slice(0, 12) : []))
      .filter((row) => row.length > 1),
  };
}

function parseEvent(raw) {
  let body;
  try {
    body = JSON.parse(raw);
  } catch {
    return null;
  }
  if (body.kind === "gsc" || body.consoleUrl) return parseGsc(body);
  const url = clip(body.url, 2000);
  const query = clip(body.query, 300);
  if (!url.startsWith("http://") && !url.startsWith("https://")) return null;
  if (!query) return null;
  const position = Number(body.position);
  const page = Number(body.page);
  return {
    kind: "serp",
    query,
    url,
    title: clip(body.title, 300),
    position: Number.isInteger(position) && position > 0 && position < 100 ? position : null,
    page: Number.isInteger(page) && page > 0 && page < 50 ? page : 1,
    serp: clip(body.serp, 2000),
    engine: clip(body.engine, 80),
    clickedAt: clip(body.clickedAt, 40) || new Date().toISOString(),
  };
}

function clock(iso) {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", hour12: false });
}

function cell(value) {
  return String(value).replace(/\|/g, "\\|").replace(/\n/g, " ");
}

function table(rows) {
  if (rows.length === 0) return ["No table was visible on that screen.", ""];
  const width = Math.max(...rows.map((row) => row.length));
  const head = rows[0].concat(Array(width - rows[0].length).fill(""));
  const lines = [
    `| ${head.map(cell).join(" | ")} |`,
    `| ${head.map(() => "---").join(" | ")} |`,
  ];
  for (const row of rows.slice(1)) {
    const padded = row.concat(Array(Math.max(0, width - row.length)).fill(""));
    lines.push(`| ${padded.map(cell).join(" | ")} |`);
  }
  lines.push("");
  return lines;
}

function report(events, parts) {
  const lines = [
    `# Field notes ${parts.year}-${parts.month}-${parts.day}`,
    "",
    `${events.length} ${events.length === 1 ? "capture" : "captures"} saved on this machine.`,
    "",
  ];
  for (const event of events) {
    if (event.kind === "gsc") {
      lines.push(`## ${clock(event.collectedAt)} — ${event.title}`, "");
      if (event.property) lines.push(`Property: \`${event.property}\``, "");
      lines.push(`Screen: ${event.consoleUrl}`, "");
      if (event.tabs?.length) lines.push(`Selected: ${event.tabs.join(", ")}`, "");
      lines.push("### URLs", "");
      if (event.urls.length === 0) lines.push("No site URL was visible on that screen.", "");
      else for (const href of event.urls) lines.push(`- ${href}`);
      lines.push("", "### Table", "");
      lines.push(...table(event.rows));
      continue;
    }
    const when = clock(event.clickedAt);
    const where = event.position ? `position ${event.position}` : "position unknown";
    const title = event.title || event.url;
    lines.push(`## ${when} — ${event.query}`, "");
    lines.push(`- ${where}, page ${event.page} on ${event.engine}: [${title}](${event.url})`, "");
  }
  return `${lines.join("\n").trim()}\n`;
}

async function save(event) {
  const parts = dayParts();
  const dir = path.join(root, parts.year, parts.month, parts.day);
  await mkdir(dir, { recursive: true });
  const log = path.join(dir, "events.jsonl");
  await appendFile(log, `${JSON.stringify(event)}\n`, "utf8");
  const text = await readFile(log, "utf8");
  const events = text
    .split("\n")
    .filter(Boolean)
    .map((line) => JSON.parse(line));
  await writeFile(path.join(dir, "report.md"), report(events, parts), "utf8");
  return { dir, count: events.length };
}

const server = createServer(async (req, res) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  }
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }
  const url = new URL(req.url || "/", "http://127.0.0.1");
  if (req.method === "GET" && url.pathname === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true }));
    return;
  }
  if (req.method === "POST" && url.pathname === "/capture") {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 400_000) {
        res.writeHead(413, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ ok: false }));
        return;
      }
      chunks.push(chunk);
    }
    const event = parseEvent(Buffer.concat(chunks).toString("utf8"));
    if (!event) {
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ ok: false }));
      return;
    }
    const saved = await save(event);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ ok: true, count: saved.count }));
    return;
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ ok: false }));
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Field notes listening on http://127.0.0.1:${PORT}`);
});
