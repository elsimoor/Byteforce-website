const http = require("http");
const fs = require("fs");

function get(url) {
  return new Promise((resolve, reject) => {
    http
      .get(url, (res) => {
        let data = "";
        res.on("data", (chunk) => {
          data += chunk;
        });
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

(async () => {
  const list = JSON.parse(await get("http://127.0.0.1:9333/json"));
  const page = list.find((target) => target.type === "page" && String(target.url).includes("localhost:3002"));
  if (!page) {
    console.log(list.map((target) => `${target.type} ${target.url}`).join("\n"));
    process.exit(1);
  }
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  let id = 0;
  const pending = new Map();
  function send(method, params = {}) {
    const msgId = ++id;
    return new Promise((resolve, reject) => {
      pending.set(msgId, { resolve, reject });
      ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const waiter = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) waiter.reject(message.error);
    else waiter.resolve(message.result);
  };
  await new Promise((resolve) => {
    ws.onopen = resolve;
  });
  await send("Page.enable");
  await send("Emulation.setDeviceMetricsOverride", { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
  await send("Runtime.evaluate", {
    expression:
      "const node=[...document.querySelectorAll('h2')].find((heading)=>heading.textContent.includes('technologie')); if(node) node.scrollIntoView({block:'center'}); node ? node.textContent : 'missing'",
    awaitPromise: true,
  });
  await new Promise((resolve) => setTimeout(resolve, 1500));
  const shot = await send("Page.captureScreenshot", { format: "png" });
  fs.writeFileSync("C:/Users/Dell/Documents/bf-tech-card.png", Buffer.from(shot.data, "base64"));
  console.log("wrote");
  ws.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
