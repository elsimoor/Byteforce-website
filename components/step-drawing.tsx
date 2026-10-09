export function StepDrawing({ name }: { name: "understand" | "design" | "build" | "launch" | "improve" }) {
  const common = {
    viewBox: "0 0 160 96",
    className: "h-24 w-full",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "understand") {
    return (
      <svg {...common}>
        <rect x="18" y="16" width="70" height="64" rx="3" />
        <path d="M30 34h46M30 46h38M30 58h42" />
        <circle cx="112" cy="40" r="18" />
        <path d="M124 54l14 16" />
      </svg>
    );
  }
  if (name === "design") {
    return (
      <svg {...common}>
        <rect x="16" y="18" width="128" height="60" rx="3" />
        <path d="M16 36h128" />
        <rect x="28" y="48" width="36" height="18" />
        <rect x="72" y="48" width="56" height="8" />
        <path d="M72 64h40" />
      </svg>
    );
  }
  if (name === "build") {
    return (
      <svg {...common}>
        <path d="M28 22l-16 26 16 26" />
        <path d="M58 22l16 26-16 26" />
        <rect x="86" y="22" width="52" height="14" />
        <rect x="86" y="42" width="52" height="14" />
        <rect x="86" y="62" width="36" height="14" />
      </svg>
    );
  }
  if (name === "launch") {
    return (
      <svg {...common}>
        <path d="M80 14l18 28h-10l8 40H64l8-40H62z" />
        <path d="M48 78h64" />
        <path d="M36 78c8 10 80 10 88 0" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M28 68V28h28" />
      <path d="M48 36l8-8 8 8" />
      <path d="M64 44h28v28" />
      <path d="M84 64l8 8 8-8" />
      <path d="M108 52h20" />
    </svg>
  );
}
