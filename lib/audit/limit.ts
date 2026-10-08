const hits = new Map<string, number[]>();

export function auditClientIp(request: Request) {
  return (request.headers.get("x-forwarded-for") ?? "").split(",")[0]?.trim() || "local";
}

export function auditLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((time) => now - time < 60_000);
  if (recent.length >= 20) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}
