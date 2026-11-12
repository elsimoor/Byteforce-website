import type { Metadata } from "next";
import { site } from "@/lib/site";

const image = {
  url: "/opengraph-image.jpg",
  width: 1024,
  height: 537,
  alt: "Le logiciel suit votre métier. Byte Force, studio logiciel à Casablanca.",
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
