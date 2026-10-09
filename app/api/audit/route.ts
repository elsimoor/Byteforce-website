import { after } from "next/server";

import { SeverityNumber, loggerProvider, posthogLogCapture } from "@/instrumentation";
import { auditClientIp, auditLimited } from "@/lib/audit/limit";
import { auditPage } from "@/lib/site-audit";

export const dynamic = "force-dynamic";

function flushPostHogLogs() {
  after(async () => {
    try {
      await loggerProvider.forceFlush();
    } catch {
      // Log delivery must not affect the audit response.
    }
  });
}

export async function POST(request: Request) {
  if (auditLimited(auditClientIp(request))) {
    posthogLogCapture.emit({
      body: "audit_request_rate_limited",
      severityNumber: SeverityNumber.WARN,
      attributes: { endpoint: "/api/audit" },
    });
    flushPostHogLogs();
    return Response.json({ error: "Trop de demandes. Réessayez dans une minute." }, { status: 429 });
  }

  let url = "";
  try {
    const body = (await request.json()) as { url?: unknown };
    url = String(body.url ?? "");
  } catch {
    posthogLogCapture.emit({
      body: "audit_request_rejected",
      severityNumber: SeverityNumber.WARN,
      attributes: { endpoint: "/api/audit", reason: "invalid_json" },
    });
    flushPostHogLogs();
    return Response.json({ error: "Demande illisible." }, { status: 400 });
  }

  posthogLogCapture.emit({
    body: "audit_request_started",
    severityNumber: SeverityNumber.INFO,
    attributes: { endpoint: "/api/audit" },
  });

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const item of auditPage(url)) {
          controller.enqueue(encoder.encode(`${JSON.stringify(item)}\n`));
        }
        posthogLogCapture.emit({
          body: "audit_request_completed",
          severityNumber: SeverityNumber.INFO,
          attributes: { endpoint: "/api/audit" },
        });
      } catch {
        posthogLogCapture.emit({
          body: "audit_request_failed",
          severityNumber: SeverityNumber.ERROR,
          attributes: { endpoint: "/api/audit" },
        });
        controller.enqueue(
          encoder.encode(`${JSON.stringify({ id: "response", label: "La page répond", state: "fail", detail: "Lecture impossible." })}\n`),
        );
      } finally {
        controller.close();
      }
    },
  });

  flushPostHogLogs();
  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
