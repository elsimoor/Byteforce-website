const frame = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function AnswerMark({ id }: { id: string }) {
  return (
    <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0 text-secondary" aria-hidden="true" {...frame}>
      <Mark id={id} />
    </svg>
  );
}

function Mark({ id }: { id: string }) {
  if (id.includes("rien") || id.endsWith("aucun")) return <Window dashed />;
  if (id.includes("ecran") || id.includes("site") || id === "page" || id.includes("access-lien")) return <Screen />;
  if (id.includes("en-ligne") || id === "cas" || id.includes("corriger")) return <Blocked />;
  if (id.includes("suivi") || id.includes("garder")) return <Watch />;
  if (id.includes("mobile")) return <Phone />;
  if (id.includes("logiciel") || id === "donnees") return <Records />;
  if (id.includes("inconnu") || id === "task") return <Question />;
  if (id === "comptes" || id.includes("author-autre")) return <People />;
  if (id === "ligne" || id.includes("finir")) return <Live />;
  if (id === "depot" || id.includes("access-depot")) return <Repo />;
  if (id.includes("author-moi") || id.includes("help-oui")) return <Person />;
  if (id.includes("author-ia")) return <Model />;
  if (id.includes("byteforce")) return <Studio />;
  if (id.includes("ecrire")) return <Write />;
  if (id.includes("help-non")) return <Alone />;
  if (id === "geste") return <Write />;
  return <Window />;
}

function Window({ dashed = false }: { dashed?: boolean }) {
  return (
    <g>
      <rect x="6" y="8" width="36" height="32" rx="6" fill="var(--color-surface-container-lowest)" strokeDasharray={dashed ? "3 2" : undefined} />
      <path d="M6 16h36" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" />
    </g>
  );
}

function Screen() {
  return (
    <g>
      <Window />
      <path d="M12 24h16M12 30h10" />
    </g>
  );
}

function Blocked() {
  return (
    <g>
      <Window />
      <circle cx="32" cy="28" r="6" />
      <path d="M28 32l8-8" />
    </g>
  );
}

function Watch() {
  return (
    <g>
      <Window />
      <circle cx="24" cy="28" r="6" />
      <circle cx="24" cy="28" r="2" fill="currentColor" />
    </g>
  );
}

function Phone() {
  return (
    <g>
      <rect x="16" y="6" width="16" height="36" rx="4" fill="var(--color-surface-container-lowest)" />
      <path d="M20 12h8M22 36h4" />
    </g>
  );
}

function Records() {
  return (
    <g>
      <rect x="8" y="10" width="32" height="8" rx="2" fill="var(--color-surface-container)" />
      <rect x="8" y="20" width="32" height="8" rx="2" fill="var(--color-surface-container-lowest)" />
      <rect x="8" y="30" width="32" height="8" rx="2" />
    </g>
  );
}

function Question() {
  return (
    <g>
      <Window dashed />
      <path d="M20 24h8" strokeDasharray="2 2" />
    </g>
  );
}

function People() {
  return (
    <g>
      <circle cx="16" cy="16" r="4" fill="var(--color-surface-container-lowest)" />
      <path d="M8 32c1-6 4-8 8-8s7 2 8 8" fill="var(--color-surface-container)" />
      <circle cx="32" cy="16" r="4" />
      <path d="M24 32c1-6 4-8 8-8s7 2 8 8" strokeDasharray="2 2" />
    </g>
  );
}

function Person() {
  return (
    <g>
      <circle cx="24" cy="14" r="5" fill="var(--color-surface-container-lowest)" />
      <path d="M12 38c2-8 6-12 12-12s10 4 12 12" fill="var(--color-surface-container)" />
    </g>
  );
}

function Live() {
  return (
    <g>
      <rect x="6" y="20" width="16" height="8" rx="4" fill="var(--color-surface-container)" />
      <path d="M24 24h8" />
      <path d="M30 20l4 4-4 4" fill="currentColor" stroke="none" />
      <path d="M36 20l4 4-4 4" />
    </g>
  );
}

function Repo() {
  return (
    <g>
      <rect x="6" y="12" width="18" height="24" rx="3" fill="var(--color-surface-container)" />
      <path d="M10 20h10M10 26h7" />
      <path d="M26 24h8" />
      <circle cx="38" cy="18" r="4" fill="var(--color-surface-container-lowest)" />
    </g>
  );
}

function Model() {
  return (
    <g>
      <circle cx="14" cy="24" r="4" fill="var(--color-surface-container)" />
      <circle cx="34" cy="14" r="3" />
      <circle cx="34" cy="34" r="3" />
      <path d="M18 24h12M18 22l14-6M18 26l14 6" opacity="0.7" />
    </g>
  );
}

function Studio() {
  return (
    <g>
      <rect x="10" y="16" width="28" height="22" rx="3" fill="var(--color-surface-container-lowest)" />
      <path d="M10 16l14-8 14 8" />
    </g>
  );
}

function Write() {
  return (
    <g>
      <rect x="8" y="8" width="24" height="32" rx="3" fill="var(--color-surface-container-lowest)" />
      <path d="M14 18h12M14 24h10M14 30h8" />
      <path d="M30 30l8 8" />
    </g>
  );
}

function Alone() {
  return (
    <g>
      <Person />
      <path d="M34 12h8" strokeDasharray="2 2" />
    </g>
  );
}

export function ChatGptLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path
        fill="#10a37f"
        d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zm-9.022 12.608a4.476 4.476 0 0 1-2.876-1.04l.142-.081 4.778-2.758a.795.795 0 0 0 .393-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.495 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.814 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855-5.833-3.387 2.016-1.164a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.104v-5.677a.79.79 0 0 0-.408-.667zm2.01-3.023-.142-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zM8.307 12.863l-2.02-1.164a.08.08 0 0 1-.038-.057V6.074a4.5 4.5 0 0 1 7.376-3.453l-.142.08-2.902 1.675a.795.795 0 0 0-.393.681zm1.098-2.365 2.602-1.5 2.608 1.5v2.999l-2.598 1.5-2.607-1.5z"
      />
    </svg>
  );
}

export function ClaudeLogo() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <g fill="#d97757">
        {Array.from({ length: 12 }, (_, index) => {
          const angle = (index * Math.PI) / 6;
          const x = 12 + Math.sin(angle) * 8;
          const y = 12 - Math.cos(angle) * 8;
          return <circle key={index} cx={x} cy={y} r={index % 2 === 0 ? 2.1 : 1.35} />;
        })}
        <circle cx="12" cy="12" r="2.4" />
      </g>
    </svg>
  );
}
