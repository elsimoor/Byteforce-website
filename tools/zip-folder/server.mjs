import { randomBytes } from "node:crypto";
import { createReadStream, createWriteStream } from "node:fs";
import { readFile, readdir, stat, unlink } from "node:fs/promises";
import { createServer } from "node:http";
import { tmpdir } from "node:os";
import path from "node:path";
import { pipeline } from "node:stream/promises";
import { Transform } from "node:stream";
import { deflateRawSync, crc32, createDeflateRaw } from "node:zlib";
import { once } from "node:events";

const PORT = Number(process.env.PORT) || 3955;
const HOST = "127.0.0.1";
const MEMORY_LIMIT = 8 * 1024 * 1024;
const ZIP_LIMIT = 0xffffffff;
const UTF8 = 0x800;
const STORE_EXT = new Set([
  "png", "jpg", "jpeg", "gif", "webp", "avif", "mp4", "mov", "zip", "gz",
  "tgz", "br", "woff", "woff2", "mp3", "ogg", "webm", "pdf", "7z", "rar", "wasm",
]);

const page = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Zip a folder</title>
  <style>
    :root {
      color-scheme: light;
      --ink: #070b33;
      --mute: #4a5168;
      --line: #c5cce0;
      --paper: #f4f6ff;
      --blue: #000dbf;
      --error: #b3261e;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      background: var(--paper);
      color: var(--ink);
      font: 16px/1.5 "Segoe UI", sans-serif;
    }
    main { max-width: 38rem; margin: 0 auto; padding: 4.5rem 1.5rem 3rem; }
    h1 { margin: 0; font-size: 2rem; font-weight: 650; letter-spacing: -0.03em; }
    .lead { margin: 0.75rem 0 2rem; color: var(--mute); max-width: 34rem; }
    label { display: block; margin-bottom: 0.45rem; font-size: 0.82rem; font-weight: 650; }
    input {
      width: 100%;
      border: 1px solid var(--line);
      background: #fff;
      color: var(--ink);
      font: 0.92rem/1.4 Consolas, "Cascadia Mono", monospace;
      padding: 0.75rem 0.8rem;
    }
    input:focus { outline: 2px solid var(--blue); outline-offset: 1px; }
    .actions { display: flex; gap: 0.9rem; align-items: center; margin-top: 0.9rem; }
    button {
      border: 0;
      background: var(--blue);
      color: #fff;
      font: 0.95rem/1 "Segoe UI", sans-serif;
      padding: 0.75rem 1rem;
      cursor: pointer;
    }
    button:disabled { cursor: wait; opacity: 0.6; }
    .status { min-height: 1.5em; color: var(--mute); font-size: 0.9rem; }
    .status.error { color: var(--error); }
    .note { margin-top: 2rem; color: var(--mute); font-size: 0.82rem; }
    code { font-family: Consolas, "Cascadia Mono", monospace; font-size: 0.92em; }
  </style>
</head>
<body>
  <main>
    <h1>Zip a folder</h1>
    <p class="lead">Paste a folder path from this computer. The download is a zip of that folder with every <code>node_modules</code> directory left out.</p>
    <form id="form">
      <label for="path">Folder path</label>
      <input id="path" name="path" spellcheck="false" autocomplete="off" placeholder="C:\\Users\\Dell\\Documents\\GitHub\\Byteforce-website" required>
      <div class="actions">
        <button type="submit" id="go">Download zip</button>
        <p class="status" id="status" role="status"></p>
      </div>
    </form>
    <p class="note">This page only works while this server is running on your computer. Symbolic links are skipped. The folder name stays at the top of the zip.</p>
  </main>
  <script>
    const form = document.getElementById("form");
    const input = document.getElementById("path");
    const button = document.getElementById("go");
    const status = document.getElementById("status");
    const saved = localStorage.getItem("zip-folder-path");
    if (saved) input.value = saved;

    function formatBytes(bytes) {
      if (bytes < 1024) return bytes + " B";
      if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB";
      if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + " MB";
      return (bytes / 1073741824).toFixed(2) + " GB";
    }

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const folder = input.value.trim().replace(/^["']|["']$/g, "");
      input.value = folder;
      status.className = "status";
      status.textContent = "Reading the folder…";
      button.disabled = true;
      try {
        const response = await fetch("/inspect", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ path: folder })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Could not read that folder.");
        localStorage.setItem("zip-folder-path", folder);
        const skipped = data.skipped === 1 ? "1 node_modules left out" : data.skipped + " node_modules left out";
        status.textContent = data.files + " files · " + formatBytes(data.bytes) + " · " + skipped;
        const link = document.createElement("a");
        link.href = "/download?path=" + encodeURIComponent(folder);
        document.body.appendChild(link);
        link.click();
        link.remove();
      } catch (error) {
        status.className = "status error";
        status.textContent = error.message || "Could not build the zip.";
      } finally {
        button.disabled = false;
      }
    });
  </script>
</body>
</html>`;

function fail(status, message) {
  const error = new Error(message);
  error.status = status;
  return error;
}

function cleanPath(input) {
  return String(input ?? "").trim().replace(/^["']|["']$/g, "");
}

function resolveFolder(input) {
  const raw = cleanPath(input);
  if (!raw) throw fail(400, "Enter a folder path.");
  if (!path.isAbsolute(raw)) throw fail(400, "Use a full path, such as C:\\Projects\\app.");
  return path.resolve(raw);
}

async function assertFolder(folder) {
  let info;
  try {
    info = await stat(folder);
  } catch (error) {
    if (error.code === "ENOENT") throw fail(404, "That folder does not exist.");
    if (error.code === "EACCES" || error.code === "EPERM") throw fail(403, "This computer refused access to that folder.");
    throw error;
  }
  if (!info.isDirectory()) throw fail(400, "That path is a file. Choose a folder.");
  return info;
}

function folderLabel(folder) {
  const base = path.basename(folder);
  if (base) return base;
  return path.parse(folder).root.replace(/[\\/:*?"<>|]+/g, "") || "folder";
}

function zipName(value) {
  return value.replace(/\\/g, "/").replace(/^\/+|\/+$/g, "");
}

function shouldStore(name) {
  return STORE_EXT.has(path.extname(name).slice(1).toLowerCase());
}

function dosDate(date) {
  const when = date instanceof Date && !Number.isNaN(date.getTime()) ? date : new Date();
  let year = when.getFullYear();
  if (year < 1980) year = 1980;
  if (year > 2107) year = 2107;
  const time = (when.getHours() << 11) | (when.getMinutes() << 5) | (when.getSeconds() >> 1);
  const day = ((year - 1980) << 9) | ((when.getMonth() + 1) << 5) | when.getDate();
  return { time, day };
}

function localHeader({ name, method, crc, compressed, uncompressed, mtime }) {
  const nameBuf = Buffer.from(name, "utf8");
  const { time, day } = dosDate(mtime);
  const buf = Buffer.alloc(30 + nameBuf.length);
  buf.writeUInt32LE(0x04034b50, 0);
  buf.writeUInt16LE(20, 4);
  buf.writeUInt16LE(UTF8, 6);
  buf.writeUInt16LE(method, 8);
  buf.writeUInt16LE(time, 10);
  buf.writeUInt16LE(day, 12);
  buf.writeUInt32LE(crc >>> 0, 14);
  buf.writeUInt32LE(compressed >>> 0, 18);
  buf.writeUInt32LE(uncompressed >>> 0, 22);
  buf.writeUInt16LE(nameBuf.length, 26);
  buf.writeUInt16LE(0, 28);
  nameBuf.copy(buf, 30);
  return buf;
}

function centralHeader({ name, method, crc, compressed, uncompressed, mtime, offset }) {
  const nameBuf = Buffer.from(name, "utf8");
  const { time, day } = dosDate(mtime);
  const buf = Buffer.alloc(46 + nameBuf.length);
  const isDir = name.endsWith("/");
  const mode = isDir ? 0o040755 : 0o100644;
  const shifted = (mode << 16) >>> 0;
  const external = isDir ? (shifted + 0x10) >>> 0 : shifted;
  buf.writeUInt32LE(0x02014b50, 0);
  buf.writeUInt16LE(0x0314, 4);
  buf.writeUInt16LE(20, 6);
  buf.writeUInt16LE(UTF8, 8);
  buf.writeUInt16LE(method, 10);
  buf.writeUInt16LE(time, 12);
  buf.writeUInt16LE(day, 14);
  buf.writeUInt32LE(crc >>> 0, 16);
  buf.writeUInt32LE(compressed >>> 0, 20);
  buf.writeUInt32LE(uncompressed >>> 0, 24);
  buf.writeUInt16LE(nameBuf.length, 28);
  buf.writeUInt16LE(0, 30);
  buf.writeUInt16LE(0, 32);
  buf.writeUInt16LE(0, 34);
  buf.writeUInt16LE(0, 36);
  buf.writeUInt32LE(external, 38);
  buf.writeUInt32LE(offset >>> 0, 42);
  nameBuf.copy(buf, 46);
  return buf;
}

function endRecord(count, size, offset) {
  const buf = Buffer.alloc(22);
  buf.writeUInt32LE(0x06054b50, 0);
  buf.writeUInt16LE(0, 4);
  buf.writeUInt16LE(0, 6);
  buf.writeUInt16LE(count, 8);
  buf.writeUInt16LE(count, 10);
  buf.writeUInt32LE(size >>> 0, 12);
  buf.writeUInt32LE(offset >>> 0, 16);
  buf.writeUInt16LE(0, 20);
  return buf;
}

async function collect(folder) {
  const label = folderLabel(folder);
  const rootStat = await assertFolder(folder);
  const items = [{ kind: "dir", rel: `${zipName(label)}/`, mtime: rootStat.mtime }];
  const summary = { name: label, files: 0, folders: 0, bytes: 0, skipped: 0, items };

  async function visit(dir, prefix) {
    let entries;
    try {
      entries = await readdir(dir, { withFileTypes: true });
    } catch (error) {
      if (error.code === "EACCES" || error.code === "EPERM") throw fail(403, `Cannot read ${dir}.`);
      throw error;
    }
    entries.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: "base" }));
    for (const entry of entries) {
      if (entry.isSymbolicLink()) continue;
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        if (entry.name.toLowerCase() === "node_modules") {
          summary.skipped += 1;
          continue;
        }
        let info;
        try {
          info = await stat(full);
        } catch {
          throw fail(400, `Cannot read ${full}.`);
        }
        const rel = `${prefix}/${entry.name}`;
        summary.folders += 1;
        items.push({ kind: "dir", rel: `${rel}/`, mtime: info.mtime });
        await visit(full, rel);
        continue;
      }
      if (!entry.isFile()) continue;
      let info;
      try {
        info = await stat(full);
      } catch {
        throw fail(400, `Cannot read ${full}.`);
      }
      summary.files += 1;
      summary.bytes += info.size;
      items.push({
        kind: "file",
        full,
        rel: `${prefix}/${entry.name}`,
        mtime: info.mtime,
        size: info.size,
      });
    }
  }

  await visit(folder, zipName(label));
  if (summary.files > 0xffff || items.length > 0xffff) {
    throw fail(400, "That folder has more files than a standard zip can list.");
  }
  return summary;
}

function disposition(name) {
  const ascii = name.replace(/[^\w.\- ]+/g, "_") || "folder";
  const utf = encodeURIComponent(`${name}.zip`);
  return `attachment; filename="${ascii}.zip"; filename*=UTF-8''${utf}`;
}

class ZipWriter {
  constructor(res) {
    this.res = res;
    this.offset = 0;
    this.entries = [];
  }

  async emit(chunk) {
    const buf = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
    if (this.offset + buf.length > ZIP_LIMIT) throw fail(400, "The folder is larger than a standard zip can hold (4 GB).");
    this.offset += buf.length;
    if (this.res.destroyed || this.res.writableEnded) throw fail(499, "Download cancelled.");
    if (this.res.write(buf)) return;
    await once(this.res, "drain");
  }

  async entry({ name, method, crc, compressed, uncompressed, mtime, payload }) {
    const localOffset = this.offset;
    await this.emit(localHeader({ name, method, crc, compressed, uncompressed, mtime }));
    if (payload) await this.emit(payload);
    this.entries.push(centralHeader({ name, method, crc, compressed, uncompressed, mtime, offset: localOffset }));
  }

  async finish() {
    const start = this.offset;
    for (const entry of this.entries) await this.emit(entry);
    await this.emit(endRecord(this.entries.length, this.offset - start, start));
    this.res.end();
  }
}

async function checksum(file) {
  let sum = 0;
  let size = 0;
  for await (const chunk of createReadStream(file)) {
    sum = crc32(chunk, sum);
    size += chunk.length;
  }
  return { crc: sum >>> 0, size };
}

async function deflateToTemp(file) {
  const destination = path.join(tmpdir(), `bf-zip-${randomBytes(8).toString("hex")}.bin`);
  let sum = 0;
  let uncompressed = 0;
  let compressed = 0;
  const crcTap = new Transform({
    transform(chunk, _encoding, callback) {
      sum = crc32(chunk, sum);
      uncompressed += chunk.length;
      callback(null, chunk);
    },
  });
  const countTap = new Transform({
    transform(chunk, _encoding, callback) {
      compressed += chunk.length;
      callback(null, chunk);
    },
  });
  try {
    await pipeline(createReadStream(file), crcTap, createDeflateRaw({ level: 6 }), countTap, createWriteStream(destination));
  } catch (error) {
    await unlink(destination).catch(() => {});
    throw error;
  }
  return { destination, crc: sum >>> 0, uncompressed, compressed };
}

async function addFile(zip, file) {
  const store = file.size === 0 || shouldStore(file.rel);
  if (file.size <= MEMORY_LIMIT) {
    const data = await readFile(file.full);
    const sum = crc32(data) >>> 0;
    let method = 0;
    let payload = data;
    if (!store && data.length > 0) {
      const deflated = deflateRawSync(data, { level: 6 });
      if (deflated.length < data.length) {
        method = 8;
        payload = deflated;
      }
    }
    await zip.entry({
      name: file.rel,
      method,
      crc: sum,
      compressed: payload.length,
      uncompressed: data.length,
      mtime: file.mtime,
      payload,
    });
    return;
  }

  if (!store) {
    const packed = await deflateToTemp(file.full);
    try {
      if (packed.compressed < packed.uncompressed) {
        await zip.entry({
          name: file.rel,
          method: 8,
          crc: packed.crc,
          compressed: packed.compressed,
          uncompressed: packed.uncompressed,
          mtime: file.mtime,
        });
        for await (const chunk of createReadStream(packed.destination)) await zip.emit(chunk);
        return;
      }
    } finally {
      await unlink(packed.destination).catch(() => {});
    }
  }

  const { crc, size } = await checksum(file.full);
  await zip.entry({
    name: file.rel,
    method: 0,
    crc,
    compressed: size,
    uncompressed: size,
    mtime: file.mtime,
  });
  for await (const chunk of createReadStream(file.full)) await zip.emit(chunk);
}

async function sendZip(res, folder) {
  const summary = await collect(folder);
  res.writeHead(200, {
    "content-type": "application/zip",
    "content-disposition": disposition(summary.name),
    "cache-control": "no-store",
    "x-content-type-options": "nosniff",
  });
  const zip = new ZipWriter(res);
  for (const item of summary.items) {
    if (item.kind === "dir") {
      await zip.entry({
        name: item.rel,
        method: 0,
        crc: 0,
        compressed: 0,
        uncompressed: 0,
        mtime: item.mtime,
      });
      continue;
    }
    await addFile(zip, item);
  }
  await zip.finish();
}

function hostOk(req) {
  const host = req.headers.host || "";
  return host === `${HOST}:${PORT}` || host === `localhost:${PORT}`;
}

function browserOk(req) {
  const site = req.headers["sec-fetch-site"];
  if (!site) return true;
  return site === "same-origin" || site === "none";
}

async function readBody(req) {
  const chunks = [];
  for await (const chunk of req) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

function sendJson(res, status, body) {
  const payload = JSON.stringify(body);
  res.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "cache-control": "no-store",
    "content-length": Buffer.byteLength(payload),
  });
  res.end(payload);
}

function publicError(error) {
  if (error.status && error.status < 500) return error.message;
  return "Could not build the zip.";
}

const server = createServer(async (req, res) => {
  try {
    if (!hostOk(req) || !browserOk(req)) {
      sendJson(res, 403, { error: "Open this tool at http://127.0.0.1:" + PORT });
      return;
    }
    const url = new URL(req.url || "/", `http://${HOST}:${PORT}`);
    if (req.method === "GET" && url.pathname === "/") {
      res.writeHead(200, { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" });
      res.end(page);
      return;
    }
    if (req.method === "POST" && url.pathname === "/inspect") {
      const raw = await readBody(req);
      let body;
      try {
        body = JSON.parse(raw);
      } catch {
        throw fail(400, "Enter a folder path.");
      }
      const folder = resolveFolder(body.path);
      const summary = await collect(folder);
      sendJson(res, 200, {
        ok: true,
        name: summary.name,
        files: summary.files,
        folders: summary.folders,
        bytes: summary.bytes,
        skipped: summary.skipped,
      });
      return;
    }
    if ((req.method === "GET" || req.method === "POST") && url.pathname === "/download") {
      let rawPath = url.searchParams.get("path");
      if (req.method === "POST") {
        const raw = await readBody(req);
        const type = req.headers["content-type"] || "";
        if (type.includes("application/json")) rawPath = JSON.parse(raw).path;
        else rawPath = new URLSearchParams(raw).get("path");
      }
      await sendZip(res, resolveFolder(rawPath));
      return;
    }
    sendJson(res, 404, { error: "Not found." });
  } catch (error) {
    if (!error.status || error.status >= 500) console.error(error);
    if (!res.headersSent) sendJson(res, error.status || 500, { error: publicError(error) });
    else if (!res.writableEnded) res.destroy();
  }
});

server.requestTimeout = 0;
server.timeout = 0;
server.listen(PORT, HOST, () => {
  console.log(`Folder zip is running at http://${HOST}:${PORT}`);
});
