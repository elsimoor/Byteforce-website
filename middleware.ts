import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { countryByCode, isAllowedCity, isGeoModifier } from "@/lib/geo/coverage";

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  const url = request.nextUrl.clone();

  if (host === "www.byteforce.ma") {
    url.protocol = "https:";
    url.hostname = "byteforce.ma";
    url.port = "";
    return NextResponse.redirect(url, 301);
  }

  const parts = url.pathname.split("/").filter(Boolean);
  if (parts[0] !== "geo-location" || parts.length < 4) return NextResponse.next();

  const service = parts[1];
  const code = parts[2];
  if (!service || !countryByCode(code)) return NextResponse.next();

  const countryPath = `/geo-location/${service}/${code}`;

  if (parts.length === 4 && isGeoModifier(parts[3])) {
    url.pathname = countryPath;
    return NextResponse.redirect(url, 301);
  }

  if (parts.length === 4 && !isAllowedCity(code, parts[3])) {
    url.pathname = countryPath;
    return NextResponse.redirect(url, 301);
  }

  if (parts.length >= 5) {
    const city = parts[3];
    url.pathname = isAllowedCity(code, city) ? `${countryPath}/${city}` : countryPath;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
