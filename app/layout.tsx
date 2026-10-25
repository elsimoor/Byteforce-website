import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OrganizationJsonLd } from "@/components/json-ld";
import { StickyMobileCta } from "@/components/sticky-mobile-cta";
import { site } from "@/lib/site";
import "./globals.css";

const publicSans = localFont({
  src: "../fonts/public-sans-latin.woff2",
  variable: "--font-public-sans",
  weight: "300 900",
  display: "swap",
  adjustFontFallback: "Arial",
});

const jetbrains = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains",
  weight: "400 800",
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Développement logiciel sur mesure Maroc · Byte Force",
    template: "%s | BYTE FORCE",
  },
  description: site.description,
  alternates: {
    canonical: site.url,
    languages: {
      "fr-MA": site.url,
      fr: site.url,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_MA",
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Byte Force, Casablanca" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
  other: {
    "geo.region": "MA-06",
    "geo.placename": "Casablanca",
    "geo.position": `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
  authors: [
    { name: site.name, url: `${site.url}/studio` },
    { name: "Walid Moultamiss", url: `${site.url}/walid-moultamiss` },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${publicSans.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased pb-16 md:pb-0">
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(window.trustedTypes&&!trustedTypes.defaultPolicy){trustedTypes.createPolicy('default',{createHTML:function(s){return s},createScript:function(s){return s},createScriptURL:function(s){return s}})}",
          }}
        />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-surface focus:px-4 focus:py-2"
        >
          Aller au contenu
        </a>
        <OrganizationJsonLd />
        <Header />
        <div id="content" className="min-h-[calc(100vh-240px)] bg-surface pt-20">
          {children}
        </div>
        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
