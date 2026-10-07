const status = document.getElementById("status");

fetch("http://127.0.0.1:3947/health", { signal: AbortSignal.timeout(1500) })
  .then((response) => response.json())
  .then((body) => {
    status.textContent = body?.ok
      ? "Localhost is live. Open Search Console and press Collect on the page you want saved."
      : "Localhost answered, but it is not the field-notes server.";
  })
  .catch(() => {
    status.textContent = "Localhost is down. In the project folder, run: npm run seo-capture";
  });
