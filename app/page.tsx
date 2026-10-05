import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";

export const metadata: Metadata = {
  title: "We build software that moves businesses forward",
  description:
    "ByteForce is a software engineering studio in Casablanca building custom web platforms, mobile applications, and digital systems.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <StudioHome />
    </main>
  );
}
