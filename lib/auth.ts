import { createHash } from "crypto";
import { cookies } from "next/headers";

const COOKIE = "bf_dash";

function expectedToken() {
  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) return "";
  return createHash("sha256").update(`bf:${password}`).digest("hex");
}

export async function isAuthed() {
  const token = expectedToken();
  if (!token) return false;
  const jar = await cookies();
  return jar.get(COOKIE)?.value === token;
}

export async function setSession() {
  const token = expectedToken();
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
  });
}

export async function clearSession() {
  const jar = await cookies();
  jar.delete(COOKIE);
}

export function passwordConfigured() {
  return Boolean(process.env.DASHBOARD_PASSWORD);
}
