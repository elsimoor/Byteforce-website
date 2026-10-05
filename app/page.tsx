import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";

export const metadata: Metadata = {
  title: "We build software for businesses that want to move faster",
  description:
    "Byte Force builds, fixes and maintains software from Casablanca. A first 30-minute call is free. We reply within one business day.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "We build software for businesses that want to move faster",
    description:
      "Byte Force builds, fixes and maintains software from Casablanca. A first 30-minute call is free. We reply within one business day.",
  },
};

export default function HomePage() {
  return (
    <main>
      <StudioHome />
    </main>
  );
}
