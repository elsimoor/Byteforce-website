import type { Metadata } from "next";
import { site } from "@/lib/site";

const image = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Byte Force, Casablanca",
};

export function openGraph(path: string, title: string, description: string): NonNullable<Metadata["openGraph"]> {
  return {
    title,
    description,
    locale: "fr_FR",
    url: path,
    siteName: site.name,
    images: [image],
  };
}
