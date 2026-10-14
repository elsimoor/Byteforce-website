const frame = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function WindowFrame({ x, y, w, h }: { x: number; y: number; w: number; h: number }) {
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" fill="var(--color-surface-container-lowest)" stroke="currentColor" />
      <path d={`M${x} ${y + 16}H${x + w}`} stroke="currentColor" />
      <circle cx={x + 10} cy={y + 8} r="2" fill="currentColor" />
      <circle cx={x + 17} cy={y + 8} r="2" fill="currentColor" opacity="0.35" />
    </g>
  );
}

function Person({ x, y }: { x: number; y: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="7" fill="var(--color-surface-container-lowest)" stroke="currentColor" />
      <path d={`M${x - 12} ${y + 22}c2-8 7-12 12-12s10 4 12 12`} fill="var(--color-surface-container)" stroke="currentColor" />
    </g>
  );
}

export function OfferMark({ name }: { name: "logiciel" | "saas" | "ia" | "plateforme" }) {
  return (
    <svg viewBox="0 0 240 148" className="mb-4 h-28 w-full text-secondary" aria-hidden="true" {...frame}>
      {name === "logiciel" ? <Logiciel /> : null}
      {name === "saas" ? <Saas /> : null}
      {name === "ia" ? <Ia /> : null}
      {name === "plateforme" ? <Plateforme /> : null}
    </svg>
  );
}

function Logiciel() {
  return (
    <g>
      <WindowFrame x={28} y={10} w={184} h={128} />
      <rect x="40" y="32" width="40" height="94" rx="3" fill="var(--color-surface-container)" stroke="currentColor" />
      <path d="M48 46h24M48 58h18M48 70h22M48 82h16" />
      <rect x="92" y="40" width="14" height="36" fill="currentColor" opacity="0.28" />
      <rect x="112" y="28" width="14" height="48" fill="currentColor" opacity="0.45" />
      <rect x="132" y="48" width="14" height="28" fill="currentColor" opacity="0.28" />
      <rect x="152" y="36" width="14" height="40" fill="currentColor" opacity="0.45" />
      <path d="M96 108l22-16 18 8 28-22 16 6" />
      <path d="M92 96h108" opacity="0.35" />
    </g>
  );
}

function Saas() {
  return (
    <g>
      <WindowFrame x={36} y={14} w={168} h={112} />
      <path d="M52 96c18-8 28-28 42-32 16-4 22 18 40 10 14-6 22-22 40-28" />
      <path d="M52 108h136" opacity="0.35" />
      <circle cx="186" cy="108" r="16" fill="var(--color-surface-container-lowest)" />
      <circle cx="186" cy="108" r="8" />
      <path d="M196 118l10 10" />
    </g>
  );
}

function Ia() {
  return (
    <g>
      <Person x={46} y={36} />
      <Person x={78} y={62} />
      <path d="M58 40h24M90 70h18" strokeDasharray="3 3" />
      <WindowFrame x={112} y={28} w={100} h={86} />
      <path d="M124 54h76M124 70h76M124 86h76M148 46v56M172 46v56" opacity="0.8" />
    </g>
  );
}

function Plateforme() {
  return (
    <g>
      <WindowFrame x={28} y={18} w={150} h={100} />
      <path d="M42 48h122M42 66h122M42 84h122M78 40v66" opacity="0.75" />
      <WindowFrame x={132} y={48} w={80} h={72} />
      <circle cx="172" cy="86" r="14" fill="var(--color-surface-container)" />
      <circle cx="172" cy="86" r="6" />
      <path d="M172 66v6M172 100v6M152 86h6M186 86h6M158 72l4 4M182 96l4 4M182 72l-4 4M158 96l-4 4" />
    </g>
  );
}

export function OfferFlows() {
  return (
    <div className="mt-10 grid gap-10 border-t border-outline-variant pt-10 lg:grid-cols-2">
      <a href="/insights/intelligence-artificielle-entreprise-maroc" className="block text-secondary">
        <span className="sr-only">Une règle écrite, puis un modèle, puis des sorties</span>
        <svg viewBox="0 0 520 160" className="h-36 w-full" aria-hidden="true" {...frame}>
          <rect x="8" y="48" width="72" height="64" rx="6" fill="var(--color-surface-container)" />
          <path d="M20 70h48M20 84h36M20 98h42" />
          <path d="M88 80h36" />
          <path d="M118 74l8 6-8 6" fill="currentColor" stroke="none" />
          <Lattice x={156} y={28} />
          <path d="M292 80h28" strokeDasharray="3 3" />
          <Lattice x={328} y={28} />
          <path d="M464 80h20" strokeDasharray="3 3" />
          <circle cx="496" cy="48" r="5" fill="currentColor" opacity="0.45" />
          <circle cx="496" cy="80" r="5" fill="currentColor" opacity="0.45" />
          <circle cx="496" cy="112" r="5" fill="currentColor" opacity="0.45" />
        </svg>
      </a>
      <a href="/application-web-sur-mesure-maroc" className="block text-secondary">
        <span className="sr-only">Un portail vers le client, le partenaire et l'équipe</span>
        <svg viewBox="0 0 520 180" className="h-40 w-full" aria-hidden="true" {...frame}>
          <WindowFrame x={8} y={50} w={92} h={78} />
          <path d="M28 96h28M68 84v24" />
          <path d="M108 90h28" />
          <path d="M130 84l8 6-8 6" fill="currentColor" stroke="none" />
          <rect x="156" y="58" width="72" height="64" rx="8" fill="var(--color-surface-container)" />
          <circle cx="192" cy="90" r="16" />
          <path d="M192 78v24M180 90h24" opacity="0.6" />
          <text x="192" y="146" textAnchor="middle" fontSize="13" fill="currentColor" stroke="none">
            portail
          </text>
          <path d="M236 78c40-36 70-36 96-20" />
          <path d="M236 90h70" />
          <path d="M236 102c40 36 70 40 96 24" />
          <Party x={340} y={28} label="client" cart />
          <Party x={340} y={78} label="partenaire" />
          <Party x={340} y={128} label="équipe" />
        </svg>
      </a>
    </div>
  );
}

function Lattice({ x, y }: { x: number; y: number }) {
  const cols = [0, 36, 72];
  const rows = [0, 26, 52, 78];
  const nodes = cols.flatMap((cx, ci) => rows.filter((_, ri) => ci === 1 || ri % 2 === 0).map((cy) => [x + cx, y + cy]));
  return (
    <g>
      {nodes.slice(0, 3).flatMap(([ax, ay]) =>
        nodes.filter(([bx]) => bx === x + 36).map(([bx, by]) => <path key={`${ax}-${ay}-${bx}-${by}`} d={`M${ax} ${ay}L${bx} ${by}`} opacity="0.45" />),
      )}
      {nodes
        .filter(([bx]) => bx === x + 36)
        .flatMap(([ax, ay]) =>
          nodes.filter(([bx]) => bx === x + 72).map(([bx, by]) => <path key={`${ax}-${ay}-b-${bx}-${by}`} d={`M${ax} ${ay}L${bx} ${by}`} opacity="0.45" />),
        )}
      {nodes.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="var(--color-surface-container-low)" />
      ))}
    </g>
  );
}

function Party({ x, y, label, cart = false }: { x: number; y: number; label: string; cart?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y + 8} r="8" fill="var(--color-surface-container-lowest)" />
      <path d={`M${x - 14} ${y + 28}c2-9 8-14 14-14s12 5 14 14`} fill="var(--color-surface-container)" />
      {cart ? <path d={`M${x + 16} ${y}h16l-3 10h-12zM${x + 20} ${y + 14}h2M${x + 28} ${y + 14}h2`} /> : null}
      <text x={x + 40} y={y + 18} fontSize="14" fill="currentColor" stroke="none">
        {label}
      </text>
    </g>
  );
}
