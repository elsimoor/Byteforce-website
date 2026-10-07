const LOCAL = "http://127.0.0.1:3947";

async function live() {
  try {
    const response = await fetch(`${LOCAL}/health`, { signal: AbortSignal.timeout(1500) });
    if (!response.ok) return false;
    const body = await response.json();
    return body?.ok === true;
  } catch {
    return false;
  }
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message?.type !== "capture") return;
  (async () => {
    const up = await live();
    if (!up) {
      sendResponse({ ok: false, reason: "down" });
      return;
    }
    try {
      const response = await fetch(`${LOCAL}/capture`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(message.payload),
        signal: AbortSignal.timeout(8000),
      });
      sendResponse({ ok: response.ok });
    } catch {
      sendResponse({ ok: false, reason: "send" });
    }
  })();
  return true;
});
