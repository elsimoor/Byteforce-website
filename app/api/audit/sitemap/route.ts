import { auditClientIp, auditLimited } from "@/lib/audit/limit";
import { listSitemapPages } from "@/lib/site-audit";

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

  try {
    const listed = await listSitemapPages(url);
    return Response.json(listed, { headers: { "Cache-Control": "no-store" } });
  } catch (caught) {
    const message = caught instanceof Error ? caught.message : "Ce sitemap n'a pas pu être lu.";
    return Response.json({ error: message }, { status: 400 });
  }
}
