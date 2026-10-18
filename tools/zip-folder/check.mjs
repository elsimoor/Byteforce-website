import { execFile } from "node:child_process";
import { mkdir, mkdtemp, readFile, rm, symlink, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import path from "node:path";
import { promisify } from "node:util";

const exec = promisify(execFile);
const root = await mkdtemp(path.join(tmpdir(), "zip-app-"));
const name = path.basename(root);
await mkdir(path.join(root, "src", "pkg"), { recursive: true });
await mkdir(path.join(root, "src", "node_modules", "left"), { recursive: true });
await mkdir(path.join(root, "node_modules", "nope"), { recursive: true });
await mkdir(path.join(root, "empty"), { recursive: true });
await writeFile(path.join(root, "readme.txt"), "hello folder");
await writeFile(path.join(root, "src", "app.js"), "console.log(1)\n".repeat(50));
await writeFile(path.join(root, "src", "pkg", "keep.js"), "keep");
await writeFile(path.join(root, "src", "node_modules", "left", "secret.js"), "secret");
await writeFile(path.join(root, "node_modules", "nope", "nope.js"), "nope");
await writeFile(path.join(root, "node_modules.txt"), "not a folder");
await writeFile(path.join(root, "café.txt"), "cafe");
await writeFile(path.join(root, "pic.png"), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10, 1, 2, 3, 4]));
const big = path.join(root, "big.txt");
await writeFile(big, "aaaaaaaaaa\n".repeat(900000));
try {
  await symlink(path.join(root, "readme.txt"), path.join(root, "link.txt"), "file");
} catch (error) {
  console.log("symlink skipped", error.code);
}

const base = "http://127.0.0.1:3955";
const missing = await fetch(base + "/inspect", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ path: root + "-missing" }),
});
const relative = await fetch(base + "/inspect", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ path: "relative\\folder" }),
});
const inspect = await fetch(base + "/inspect", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify({ path: `"${root}"` }),
});
const summary = await inspect.json();
console.log("inspect", inspect.status, summary);
console.log("missing", missing.status, await missing.json());
console.log("relative", relative.status, await relative.json());
if (inspect.status !== 200) throw new Error("inspect failed");
if (summary.skipped !== 2) throw new Error("expected 2 skipped node_modules, got " + summary.skipped);
if (summary.files !== 7) throw new Error("expected 7 files, got " + summary.files);

const dl = await fetch(base + "/download?path=" + encodeURIComponent(root));
if (!dl.ok) throw new Error("download " + dl.status + " " + await dl.text());
const zipPath = path.join(tmpdir(), name + ".zip");
const outDir = path.join(tmpdir(), name + "-out");
await writeFile(zipPath, Buffer.from(await dl.arrayBuffer()));
await rm(outDir, { recursive: true, force: true });
await mkdir(outDir);
await exec("tar", ["-xf", zipPath, "-C", outDir]);
const { stdout } = await exec("tar", ["-tf", zipPath]);
const names = stdout.split(/\r?\n/).filter(Boolean);
console.log(names.join("\n"));
const bad = names.filter((item) => /(^|\/)node_modules(\/|$)/i.test(item));
if (bad.length) throw new Error("node_modules leaked: " + bad.join(","));
const text = await readFile(path.join(outDir, name, "readme.txt"), "utf8");
if (text !== "hello folder") throw new Error("readme mismatch");
const note = await readFile(path.join(outDir, name, "node_modules.txt"), "utf8");
if (note !== "not a folder") throw new Error("node_modules.txt dropped");
const png = await readFile(path.join(outDir, name, "pic.png"));
if (png[0] !== 137) throw new Error("png broken");
const cafe = await readFile(path.join(outDir, name, "café.txt"), "utf8");
if (cafe !== "cafe") throw new Error("unicode name broken");
const bigText = await readFile(path.join(outDir, name, "big.txt"), "utf8");
if (!bigText.startsWith("aaaaaaaaaa")) throw new Error("big file broken");
console.log("OK");
