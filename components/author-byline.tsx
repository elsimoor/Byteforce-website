import Link from "next/link";

export function AuthorByline() {
  return (
    <aside className="author mt-10 flex max-w-xl items-center gap-4">
      <img
        src="/walid-moultamiss-byte-force-maroc.png"
        alt="Walid Moultamiss"
        width={72}
        height={72}
        className="h-[4.5rem] w-[4.5rem] shrink-0 rounded-full object-cover object-[center_20%]"
      />
      <div>
        <p className="text-sm text-mute">Article par</p>
        <Link href="/walid-moultamiss" className="font-semibold text-ink">
          Walid Moultamiss
        </Link>
        <p className="mt-1 text-sm leading-relaxed text-mute">
          Ingénieur logiciel à Casablanca. Full-Stack Software Engineer with 4+ years of experience. Master&apos;s
          studies at Heriot-Watt University.{" "}
          <a href="https://www.linkedin.com/in/walid-moultamiss-56142b1aa">LinkedIn de Walid Moultamiss</a>.
        </p>
      </div>
    </aside>
  );
}
