import { auditPage } from "@/lib/site-audit";

export const dynamic = "force-dynamic";

const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 8) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

export async function POST(request: Request) {
  const ip = (request.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || "local";
  if (limited(ip)) {
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
