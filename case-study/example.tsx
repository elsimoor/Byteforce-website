import { CaseStudy } from "./index";
import type { CaseStudyData } from "./types";

const ph = (w: number, h: number, text: string) => ({
  src: `https://placehold.co/${w}x${h}/15151c/ffffff?text=${encodeURIComponent(text)}`,
  alt: text,
  width: w,
  height: h,
});

export const exampleData: CaseStudyData = {
  title: "My App",
  tagline: "A mobile app that makes managing X effortless.",
  meta: [
    { label: "Client", value: "BYTE FORCE" },
    { label: "Year", value: "2026" },
    { label: "Platform", value: "iOS · Android" },
    { label: "Role", value: "Design & Development" },
  ],
  tags: ["Flutter", "BLoC", "REST API", "Figma"],
  hero: ph(1600, 900, "Hero"),
  scope: {
    title: "The Scope",
    body: "What you designed and built, the stack, and the key integrations.",
  },
  blocks: [
    {
      type: "split",
      label: ["01", "Logo", "App icon"],
      title: "Brand & identity",
      body: "Why the logo and icon look the way they do.",
      image: ph(800, 800, "Logo"),
    },
    {
      type: "gallery",
      variant: "phones",
      images: [ph(400, 800, "Screen 1"), ph(400, 800, "Screen 2"), ph(400, 800, "Screen 3")],
    },
    {
      type: "palette",
      label: ["02", "Colors"],
      title: "Colors",
      body: "A clean, minimal palette.",
      colors: [
        { name: "Midnight", hex: "#0B1220", usage: "Background" },
        { name: "Violet", hex: "#7C5CFF", usage: "Primary" },
        { name: "Mint", hex: "#2EE6A6", usage: "Success" },
        { name: "Snow", hex: "#F4F4F6", usage: "Text" },
      ],
    },
    {
      type: "typography",
      label: ["03", "Typography"],
      title: "Typography",
      fonts: [
        { name: "Inter", family: "Inter, sans-serif", weights: [400, 600, 700], usage: "UI & body" },
      ],
    },
    { type: "image", bleed: true, image: ph(1600, 700, "Full-width screen") },
    {
      type: "stats",
      label: ["04", "Results"],
      items: [
        { value: "+42%", label: "Retention" },
        { value: "4.8★", label: "Store rating" },
        { value: "50k", label: "Downloads" },
      ],
    },
  ],
  nextCase: { title: "Next project", href: "/cases/next" },
  cta: {
    title: "Let's build something.",
    buttonLabel: "Become a client",
    href: "https://byteforce.ma",
    secondary: { label: "Or email us", href: "mailto:elhanouniazeddine992@gmail.com" },
  },
};

export default function Example() {
  return <CaseStudy data={exampleData} theme="dark" accent="#7C5CFF" />;
}
