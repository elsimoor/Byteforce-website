import type { Metadata } from "next";
import { StudioHome } from "@/components/studio-home";

export const metadata: Metadata = {
  title: "We build software for businesses that want to move faster",
  description:
    "ByteForce designs and develops custom digital products, business platforms, mobile apps, AI systems and software that solve real operational problems.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <main>
      <StudioHome />
    </main>
  );
}
