import { SeverityNumber } from "@opentelemetry/api-logs";
import { OTLPLogExporter } from "@opentelemetry/exporter-logs-otlp-http";
import { resourceFromAttributes } from "@opentelemetry/resources";
import { BatchLogRecordProcessor, LoggerProvider } from "@opentelemetry/sdk-logs";

const projectToken = process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN;
const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;
const isConfigured = Boolean(projectToken && posthogHost);

if (!isConfigured && process.env.NODE_ENV === "development") {
  const missingVariable = !projectToken
    ? "NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN"
    : "NEXT_PUBLIC_POSTHOG_HOST";

  throw new Error(
    `${missingVariable} variable required by PostHog is missing or un-configured, this causes events to be silently missed. This error stops appearing once ${missingVariable} is configured`,
  );
}

export const loggerProvider = new LoggerProvider({
  resource: resourceFromAttributes({ "service.name": "byteforce-website" }),
  processors: isConfigured
    ? [
        new BatchLogRecordProcessor({
          exporter: new OTLPLogExporter({
            url: `${posthogHost}/i/v1/logs`,
            headers: {
              Authorization: `Bearer ${projectToken}`,
              "Content-Type": "application/json",
            },
          }),
        }),
      ]
    : [],
});

// This provider is intentionally not global: only log records emitted by this
// integration's dedicated logger are exported to PostHog.
export const posthogLogCapture = loggerProvider.getLogger("byteforce-posthog-log-capture");
export { SeverityNumber };

export function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs") return;
}
