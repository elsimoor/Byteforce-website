import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Byte Force · We build software for businesses that want to move faster" },
  description:
    "Byte Force builds, fixes and maintains software from Casablanca. A first 30-minute call is free. We reply within one business day.",
  alternates: { canonical: `${site.url}/` },
  openGraph: {
    locale: "en_US",
    url: `${site.url}/`,
    title: "Byte Force · We build software for businesses that want to move faster",
    description:
      "Byte Force builds, fixes and maintains software from Casablanca. A first 30-minute call is free. We reply within one business day.",
  },
};

export default function HomePage() {
  return (
    <main lang="en">
      <StudioHome />
    </main>
  );
}
