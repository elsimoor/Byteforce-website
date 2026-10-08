import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { OrganizationJsonLd } from "@/components/json-ld";
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
    default: "Byte Force · Sites, applications et logiciels à Casablanca",
    template: "%s · Byte Force",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: site.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Byte Force, Casablanca" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${publicSans.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
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
      </body>
    </html>
  );
}
