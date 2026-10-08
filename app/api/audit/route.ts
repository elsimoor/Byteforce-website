import { auditClientIp, auditLimited } from "@/lib/audit/limit";
import { auditPage } from "@/lib/site-audit";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  if (auditLimited(auditClientIp(request))) {
    return Response.json({ error: "Trop de demandes. Réessayez dans une minute." }, { status: 429 });
  }

  let url = "";
  try {
    const body = (await request.json()) as { url?: unknown };
    url = String(body.url ?? "");
  } catch {
    return Response.json({ error: "Demande illisible." }, { status: 400 });
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const item of auditPage(url)) {
          controller.enqueue(encoder.encode(`${JSON.stringify(item)}\n`));
        }
      } catch {
        controller.enqueue(
          encoder.encode(`${JSON.stringify({ id: "response", label: "La page répond", state: "fail", detail: "Lecture impossible." })}\n`),
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Content-Type-Options": "nosniff",
    },
  });
}
