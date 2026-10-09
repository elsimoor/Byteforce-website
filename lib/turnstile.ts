export async function verifyTurnstile(token: string) {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim();
  const response = token.trim();
  if (!secret || !response) return false;
  try {
    const result = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response }),
      cache: "no-store",
      signal: AbortSignal.timeout(8000),
    });
    if (!result.ok) return false;
    const data = (await result.json()) as { success?: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}
