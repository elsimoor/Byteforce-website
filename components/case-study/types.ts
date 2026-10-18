import type { ReactNode } from "react";

/** A single image. `src` can be a URL, a static import, or a public path. */
export interface ImageSrc {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

/** Paragraph text. A string[] renders one <p> per item. */
export type Body = string | string[];

/** Small mono-style label above a section, e.g. "/ 01 / Logo / App icon". */
export type Label = string | string[];

/** Heading + paragraph(s) with an optional label and bullet list. */
export interface TextBlock {
  type: "text";
  label?: Label;
  title?: string;
  body?: Body;
  bullets?: string[];
  /** Text column placement on wide screens. Default: "left". */
  align?: "left" | "right" | "center";
}

/** One image, optionally full-bleed (edge to edge). */
export interface ImageBlock {
  type: "image";
  image: ImageSrc;
  /** Stretch to the full viewport width. Default: false. */
  bleed?: boolean;
  caption?: string;
}

/** Row of images, great for phone screens. */
export interface GalleryBlock {
  type: "gallery";
  images: ImageSrc[];
  /** Columns on desktop. Default: number of images (max 4). */
  columns?: 1 | 2 | 3 | 4;
  /** "phones" removes card chrome and bottom-aligns the images. Default: "card". */
  variant?: "card" | "phones" | "plain";
}

/** Text next to an image (stacks on mobile). */
export interface SplitBlock {
  type: "split";
  label?: Label;
  title?: string;
  body?: Body;
  bullets?: string[];
  image: ImageSrc;
  /** Image on the left instead of the right. */
  reverse?: boolean;
}

export interface PaletteColor {
  name: string;
  /** Any CSS color, e.g. "#0B1220". */
  hex: string;
  /** Optional usage note, e.g. "Primary / CTA". */
  usage?: string;
}

/** Color swatches rendered in CSS (no image needed). */
export interface PaletteBlock {
  type: "palette";
  label?: Label;
  title?: string;
  body?: Body;
  colors: PaletteColor[];
}

export interface FontSpec {
  name: string;
  /** CSS font-family value used for the live specimen. */
  family: string;
  weights?: (number | string)[];
  usage?: string;
  /** Specimen text. Default: "Aa Bb Cc 0123". */
  sample?: string;
}

/** Font specimens rendered live in CSS (load the fonts in your app). */
export interface TypographyBlock {
  type: "typography";
  label?: Label;
  title?: string;
  body?: Body;
  fonts: FontSpec[];
}

/** Big numbers row (results / KPIs). */
export interface StatsBlock {
  type: "stats";
  label?: Label;
  items: { value: string; label: string }[];
}

/** Escape hatch: render anything inside the page rhythm. */
export interface CustomBlock {
  type: "custom";
  render: ReactNode;
}

export type Block =
  | TextBlock
  | ImageBlock
  | GalleryBlock
  | SplitBlock
  | PaletteBlock
  | TypographyBlock
  | StatsBlock
  | CustomBlock;

export interface CaseMeta {
  label: string;
  value: string;
}

export interface Cta {
  title?: string;
  text?: string;
  buttonLabel: string;
  href: string;
  /** Secondary line, e.g. "Don't like forms? Email us." */
  secondary?: { label: string; href: string };
}

export interface NextCase {
  title: string;
  href: string;
  label?: string;
}

export interface CaseStudyData {
  /** Project name, shown as the big title. */
  title: string;
  /** One-line summary under the title. */
  tagline?: string;
  /** Small facts row: Client, Year, Role, Platform, Stack... */
  meta?: CaseMeta[];
  /** Tech/skills chips. */
  tags?: string[];
  hero?: ImageSrc;
  /** "The Scope" style intro block. */
  scope?: { title?: string; body: Body };
  /** The page body, rendered in order. */
  blocks: Block[];
  nextCase?: NextCase;
  cta?: Cta;
}

export interface CaseStudyProps {
  data: CaseStudyData;
  /** "dark" (default) or "light". */
  theme?: "dark" | "light";
  /** Accent color (links, labels, buttons). Default: "#7C5CFF". */
  accent?: string;
  /** Max content width in px. Default: 1200. */
  maxWidth?: number;
  /** Animate sections in on scroll. Default: true. */
  animate?: boolean;
  /** Plug in next/image or any other renderer. */
  renderImage?: (image: ImageSrc, className?: string) => ReactNode;
  /** Plug in next/link or your router's Link. */
  renderLink?: (props: {
    href: string;
    className?: string;
    children: ReactNode;
  }) => ReactNode;
  className?: string;
}
