import { auditClientIp, auditLimited } from "@/lib/audit/limit";
import { auditReport } from "@/lib/audit/report";
import { auditPage, parseAuditUrl } from "@/lib/site-audit";
import type { AuditStep } from "@/lib/site-audit";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  if (auditLimited(auditClientIp(request))) {
    return Response.json({ error: "Trop de demandes. Réessayez dans une minute." }, { status: 429 });
  }

  const raw = new URL(request.url).searchParams.get("url") ?? "";
  try {
    parseAuditUrl(raw);
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : "Adresse refusée.";
    return Response.json({ error: message }, { status: 400 });
  }

  const steps: AuditStep[] = [];
  try {
    for await (const step of auditPage(raw)) {
      const index = steps.findIndex((item) => item.id === step.id);
      if (index === -1) steps.push(step);
      else steps[index] = step;
    }
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : "Lecture impossible.";
    return Response.json({ error: message }, { status: 502 });
  }

  const target = parseAuditUrl(raw).href;
  return Response.json(auditReport(target, steps), {
    headers: { "Cache-Control": "no-store" },
  });
}
