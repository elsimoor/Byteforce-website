import { getImageProps, type ImageProps } from "next/image";
import { site } from "@/lib/site";

export function ResponsiveImg({ className, alt, ...image }: ImageProps & { className?: string }) {
  const resolved = getImageProps({ ...image, alt }).props;
  return <img {...resolved} alt={alt} className={className} src={new URL(resolved.src, site.url).href} />;
}
