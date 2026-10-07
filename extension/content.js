function text(node) {
  return (node?.innerText || node?.textContent || "").replace(/\s+/g, " ").trim();
}

function walk(root, found = []) {
  if (!root?.querySelectorAll) return found;
  for (const node of root.querySelectorAll("*")) {
    found.push(node);
    if (node.shadowRoot) walk(node.shadowRoot, found);
  }
  return found;
}

function rowsFrom(nodes) {
  const rows = [];
  for (const node of nodes) {
    if (node.getAttribute?.("role") !== "row" && node.tagName !== "TR") continue;
    const cells = [...node.querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"], td, th')]
      .map(text)
      .filter(Boolean)
      .slice(0, 12);
    if (cells.length > 1) rows.push(cells);
    if (rows.length >= 80) break;
  }
  const seen = new Set();
  return rows.filter((row) => {
    const key = row.join(" | ");
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function urlsFrom(nodes) {
  const found = new Set();
  for (const node of nodes) {
    if (node.tagName === "A" && node.href) found.add(node.href.split("#")[0]);
  }
  const body = text(document.body);
  for (const match of body.match(/https?:\/\/[^\s<>"')]+/g) || []) found.add(match.replace(/[.,;]+$/, ""));
  return [...found]
    .filter((href) => {
      try {
        const url = new URL(href);
        if (url.protocol !== "http:" && url.protocol !== "https:") return false;
        if (url.hostname === "search.google.com" || url.hostname === "accounts.google.com") return false;
        if (url.hostname.endsWith("gstatic.com") || url.hostname.endsWith("googleusercontent.com")) return false;
        return true;
      } catch {
        return false;
      }
    })
    .slice(0, 150);
}

function scrape() {
  const nodes = walk(document);
  const params = new URL(location.href).searchParams;
  return {
    kind: "gsc",
    consoleUrl: location.href,
    title: document.title,
    property: params.get("resource_id") || "",
    collectedAt: new Date().toISOString(),
    tabs: nodes
      .filter((node) => node.getAttribute?.("role") === "tab" || node.getAttribute?.("aria-selected") === "true")
      .map(text)
      .filter(Boolean)
      .slice(0, 12),
    urls: urlsFrom(nodes),
    rows: rowsFrom(nodes),
  };
}

function note(message) {
  const existing = document.getElementById("bf-field-note");
  if (existing) existing.remove();
  const el = document.createElement("div");
  el.id = "bf-field-note";
  el.textContent = message;
  el.style.cssText =
    "position:fixed;z-index:2147483647;right:16px;bottom:64px;max-width:280px;padding:10px 12px;background:#111;color:#fff;font:13px/1.4 sans-serif;border-radius:8px";
  document.documentElement.appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function mount() {
  if (document.getElementById("bf-collect")) return;
  const button = document.createElement("button");
  button.id = "bf-collect";
  button.type = "button";
  button.textContent = "Collect";
  button.style.cssText =
    "position:fixed;z-index:2147483647;right:16px;bottom:16px;padding:10px 14px;border:0;border-radius:8px;background:#1a43d6;color:#fff;font:600 13px/1 sans-serif;cursor:pointer";
  button.addEventListener("click", async () => {
    button.disabled = true;
    button.textContent = "Collecting…";
    try {
      const response = await chrome.runtime.sendMessage({ type: "capture", payload: scrape() });
      if (!response?.ok) note("Localhost is not live. Start npm run seo-capture, then press Collect again.");
      else note("Saved this Search Console page.");
    } catch {
      note("Could not reach the extension. Reload it from chrome://extensions.");
    }
    button.disabled = false;
    button.textContent = "Collect";
  });
  document.documentElement.appendChild(button);
}

mount();
setInterval(mount, 2000);
