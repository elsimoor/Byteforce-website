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
});

const jetbrains = localFont({
  src: "../fonts/jetbrains-mono-latin.woff2",
  variable: "--font-jetbrains",
  weight: "400 800",
  display: "swap",
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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <OrganizationJsonLd />
        <Header />
        <div className="min-h-[calc(100vh-240px)] bg-surface pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
