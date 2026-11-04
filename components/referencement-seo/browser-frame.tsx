import Image from "next/image";
import styles from "./landing.module.css";

type BrowserFrameProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  label: string;
  priority?: boolean;
  sizes?: string;
};

export function BrowserFrame({
  src,
  alt,
  width,
  height,
  label,
  priority = false,
  sizes = "(min-width: 1024px) 540px, 100vw",
}: BrowserFrameProps) {
  return (
    <div className={styles.shot}>
      <div className="flex items-center gap-2 border-b border-line px-3 py-2.5">
        <span className="h-2 w-2 bg-line" aria-hidden="true" />
        <span className="h-2 w-2 bg-line" aria-hidden="true" />
        <span className="h-2 w-2 bg-line" aria-hidden="true" />
        <span className="ml-2 truncate font-mono text-[11px] tracking-wide text-mute">{label}</span>
      </div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={75}
        sizes={sizes}
        className="h-auto w-full max-w-full"
      />
    </div>
  );
}
