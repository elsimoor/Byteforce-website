export function Frame({
  title,
  children,
  className = "",
  light = false,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`overflow-hidden rounded-lg border ${light ? "border-line bg-white text-ink" : "border-white/10 bg-[#121211] text-[#eceae4]"} ${className}`}
    >
      <div className={`flex items-center justify-between border-b px-3 py-2 ${light ? "border-line" : "border-white/10"}`}>
        <span className={`font-mono text-[10px] tracking-wide ${light ? "text-mute" : "text-white/40"}`}>{title}</span>
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      </div>
      {children}
    </div>
  );
}

function Chart() {
  return (
    <svg viewBox="0 0 280 72" className="mt-3 h-16 w-full" aria-hidden="true">
      <path d="M0 58 L28 52 L56 54 L84 36 L112 40 L140 22 L168 28 L196 14 L224 18 L252 8 L280 12" fill="none" stroke="#ff4d1a" strokeWidth="1.5" />
      <path d="M0 58 L28 52 L56 54 L84 36 L112 40 L140 22 L168 28 L196 14 L224 18 L252 8 L280 12 V72 H0 Z" fill="#ff4d1a" opacity="0.12" />
    </svg>
  );
}

export function Dashboard() {
  const rows = [
    ["Atlas Logistics", "Onboarding", "Active"],
    ["Northline", "Billing", "Review"],
    ["Harbor Clinic", "Portal", "Live"],
    ["Fieldnote", "Automation", "Draft"],
  ];
  return (
    <Frame title="workspace / overview">
      <div className="grid min-h-[300px] grid-cols-[108px_1fr]">
        <aside className="space-y-1 border-r border-white/10 p-2">
          {["Overview", "Pipeline", "Customers", "Billing", "Automation"].map((item, index) => (
            <div
              key={item}
              className={`rounded px-2 py-1 text-[11px] ${index === 0 ? "bg-white/10 text-white" : "text-white/45"}`}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-3">
          <div className="flex items-center justify-between font-mono text-[10px] text-white/35">
            <span>Workspace · Operations</span>
            <span className="text-accent">Live</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {[
              ["Records", "128"],
              ["In review", "6"],
              ["Queues", "3"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-md border border-white/10 px-2 py-2">
                <div className="font-mono text-[9px] tracking-wide text-white/35 uppercase">{label}</div>
                <div className="mt-1 text-sm font-medium">{value}</div>
              </div>
            ))}
          </div>
          <Chart />
          <div className="mt-2 space-y-1">
            {rows.map(([name, area, status]) => (
              <div key={name} className="grid grid-cols-3 border-t border-white/8 py-1.5 font-mono text-[10px] text-white/70">
                <span>{name}</span>
                <span className="text-white/40">{area}</span>
                <span className="text-right">{status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function CrmPanel() {
  const deals = [
    ["Meridian SA", "Qualification"],
    ["Kite & Co", "Proposal"],
    ["Orchard", "Discovery"],
  ];
  return (
    <Frame title="crm / pipeline">
      <div className="space-y-2 p-3">
        {deals.map(([name, stage]) => (
          <div key={name} className="flex items-center justify-between rounded-md border border-white/10 px-2 py-2">
            <span className="text-[11px]">{name}</span>
            <span className="font-mono text-[9px] text-white/40">{stage}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function AiPanel() {
  return (
    <Frame title="assistant">
      <div className="space-y-2 p-3">
        <div className="rounded-md bg-white/6 px-2 py-2 text-[11px] text-white/70">Summarize the open opportunities and draft a follow-up.</div>
        <div className="rounded-md border border-white/10 px-2 py-2 text-[11px]">
          3 opportunities need a next step. Draft is ready for Meridian SA.
        </div>
        <div className="flex gap-1.5">
          {["Qualify", "Draft", "Assign"].map((action) => (
            <span key={action} className="rounded border border-white/10 px-1.5 py-1 font-mono text-[9px] text-white/55">
              {action}
            </span>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function WorkflowNodes() {
  const nodes = ["New lead", "Qualify", "Update CRM"];
  return (
    <Frame title="automation / run">
      <div className="flex items-center gap-2 p-3">
        {nodes.map((node, index) => (
          <div key={node} className="flex items-center gap-2">
            <div className="rounded-md border border-white/10 px-2 py-2 text-[10px]">
              <div className="font-mono text-[9px] text-accent">0{index + 1}</div>
              {node}
            </div>
            {index < nodes.length - 1 ? <span className="text-white/25">→</span> : null}
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function MobileApp() {
  return (
    <div className="w-[132px] rounded-[22px] border border-white/15 bg-[#0c0c0b] p-1.5">
      <div className="overflow-hidden rounded-[16px] bg-[#161615] px-2 pt-2 pb-3">
        <div className="mx-auto mb-2 h-1 w-8 rounded-full bg-white/20" />
        <div className="font-mono text-[8px] text-white/35">Today</div>
        <div className="mt-2 space-y-1.5">
          {["Visit confirmed", "Invoice sent", "Note added"].map((item) => (
            <div key={item} className="rounded-md bg-white/6 px-1.5 py-1.5 text-[9px] text-white/80">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SaasPreview() {
  return (
    <Frame title="platform / roles">
      <div className="grid grid-cols-[120px_1fr]">
        <div className="space-y-1 border-r border-white/10 p-3">
          {["Admin", "Operator", "Finance", "Client"].map((role, index) => (
            <div key={role} className={`rounded px-2 py-1 text-[11px] ${index === 1 ? "bg-white/10" : "text-white/45"}`}>
              {role}
            </div>
          ))}
        </div>
        <div className="p-3">
          <div className="font-mono text-[10px] text-white/35">Multi-tenant workspace</div>
          <div className="mt-3 space-y-2">
            {["Permissions", "Audit log", "Environments"].map((item) => (
              <div key={item} className="flex items-center justify-between border-b border-white/8 py-2 text-[12px]">
                <span>{item}</span>
                <span className="font-mono text-[10px] text-white/35">Configured</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function BusinessPreview() {
  return (
    <Frame title="operations / orders">
      <div className="p-3">
        <div className="grid grid-cols-4 font-mono text-[9px] tracking-wide text-white/35 uppercase">
          <span>Order</span>
          <span>Owner</span>
          <span>System</span>
          <span className="text-right">State</span>
        </div>
        {[
          ["1048", "Leila", "ERP", "Synced"],
          ["1049", "Omar", "CRM", "Waiting"],
          ["1050", "Sara", "Billing", "Posted"],
          ["1051", "Youssef", "Portal", "Open"],
        ].map((row) => (
          <div key={row[0]} className="grid grid-cols-4 border-t border-white/8 py-2 text-[11px]">
            <span>{row[0]}</span>
            <span className="text-white/55">{row[1]}</span>
            <span className="text-white/55">{row[2]}</span>
            <span className="text-right">{row[3]}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PipelinePreview() {
  const columns = [
    ["New", ["Atlas", "Kite"]],
    ["Active", ["Harbor", "Northline"]],
    ["Won", ["Fieldnote"]],
  ];
  return (
    <Frame title="crm / board">
      <div className="grid grid-cols-3 gap-2 p-3">
        {columns.map(([title, cards]) => (
          <div key={String(title)}>
            <div className="font-mono text-[10px] text-white/35">{title}</div>
            <div className="mt-2 space-y-2">
              {(cards as string[]).map((card) => (
                <div key={card} className="rounded-md border border-white/10 px-2 py-2 text-[11px]">
                  {card}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function AgentPreview() {
  return (
    <Frame title="agent / run 18">
      <div className="space-y-2 p-3 text-[12px]">
        <div className="flex items-center justify-between font-mono text-[10px] text-white/40">
          <span>Lead qualification</span>
          <span className="text-accent">Running</span>
        </div>
        {["Read the inquiry", "Match an existing account", "Draft the next action"].map((step, index) => (
          <div key={step} className="flex items-center gap-2 rounded-md border border-white/10 px-2 py-2">
            <span className="font-mono text-[10px] text-white/35">0{index + 1}</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function PortalPreview() {
  return (
    <Frame title="portal / client">
      <div className="p-3">
        <div className="text-[12px]">Good morning, Harbor Clinic</div>
        <div className="mt-3 grid grid-cols-2 gap-2">
          {["Documents", "Invoices", "Requests", "Messages"].map((item) => (
            <div key={item} className="rounded-md border border-white/10 px-2 py-3 text-[11px]">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Frame>
  );
}

export function Cocoinbox() {
  return (
    <Frame title="cocoinbox / inbox">
      <div className="grid min-h-[420px] grid-cols-1 md:grid-cols-[150px_180px_1fr]">
        <aside className="hidden border-r border-white/10 p-3 md:block">
          {["Inbox", "CRM", "Contacts", "Files", "Automation"].map((item, index) => (
            <div key={item} className={`py-1.5 text-[12px] ${index === 0 ? "text-white" : "text-white/40"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="border-r border-white/10">
          {[
            ["Meridian SA", "Contract thread"],
            ["Northline", "Onboarding"],
            ["Harbor", "Secure file"],
          ].map(([name, topic], index) => (
            <div key={name} className={`border-b border-white/8 px-3 py-3 ${index === 0 ? "bg-white/5" : ""}`}>
              <div className="text-[12px]">{name}</div>
              <div className="mt-1 text-[11px] text-white/40">{topic}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col p-4">
          <div className="text-sm">Meridian SA</div>
          <div className="mt-3 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-[12px] text-white/80">
            AI summary · Three open points. A reply is drafted. The file is sealed.
          </div>
          <div className="mt-3 flex-1 rounded-md border border-white/10 p-3 text-[12px] text-white/60">
            Please confirm the workspace access for the finance seat.
          </div>
          <div className="mt-3 flex items-center justify-between rounded-md border border-white/10 px-3 py-2 text-[12px] text-white/35">
            <span>Write a reply</span>
            <span className="font-mono text-[10px] text-accent">Secure</span>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function YourSmile() {
  return (
    <Frame title="yoursmile / patient 204">
      <div className="grid min-h-[420px] md:grid-cols-[200px_1fr]">
        <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">
          <div className="font-mono text-[10px] text-white/35">Patients</div>
          {["A. Benali", "L. Martin", "S. El Idrissi"].map((name, index) => (
            <div key={name} className={`mt-3 text-[13px] ${index === 0 ? "text-white" : "text-white/40"}`}>
              {name}
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">Treatment · Stage 4 of 14</div>
            <div className="font-mono text-[10px] text-white/35">Scan aligned</div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-[1fr_180px]">
            <div className="flex items-center justify-center rounded-md border border-white/10 bg-[#0c0c0b] py-6">
              <svg viewBox="0 0 220 90" className="h-24 w-full" aria-hidden="true">
                <path d="M20 70 C 20 20, 200 20, 200 70" fill="none" stroke="#eceae4" strokeWidth="1.5" />
                {[30, 55, 85, 110, 135, 165, 190].map((x, index) => (
                  <circle key={x} cx={x} cy={index === 3 ? 28 : 42 + (index % 2) * 8} r={index === 3 ? 4 : 3} fill={index === 3 ? "#ff4d1a" : "#eceae4"} />
                ))}
              </svg>
            </div>
            <div className="space-y-2 text-[12px]">
              {["Records", "Plan", "Review", "Message"].map((item) => (
                <div key={item} className="border-b border-white/8 py-2">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ProcheDeMoi() {
  return (
    <Frame title="prochedemoi / search">
      <div className="grid min-h-[420px] md:grid-cols-[1fr_220px]">
        <div className="p-4">
          <div className="rounded-md border border-white/10 px-3 py-2 text-[12px] text-white/50">Search a service, a street, a business</div>
          <div className="mt-3 rounded-md border border-accent/30 bg-accent/10 px-3 py-2 text-[12px]">
            AI · Three florists are open nearby. The closest has a same-day slot.
          </div>
          {[
            ["Atelier Nord", "Open · 400 m"],
            ["Maison Lierre", "Open · 1.1 km"],
            ["Comptoir 19", "Closes 19:00"],
          ].map(([name, meta]) => (
            <div key={name} className="flex items-center justify-between border-b border-white/8 py-3 text-[13px]">
              <span>{name}</span>
              <span className="font-mono text-[10px] text-white/40">{meta}</span>
            </div>
          ))}
        </div>
        <div className="relative hidden border-l border-white/10 bg-[#0c0c0b] md:block">
          <div className="absolute inset-4 rounded-md border border-white/10" />
          <span className="absolute top-16 left-10 h-2 w-2 rounded-full bg-accent" />
          <span className="absolute top-28 left-24 h-2 w-2 rounded-full bg-white/70" />
          <span className="absolute top-40 left-14 h-2 w-2 rounded-full bg-white/70" />
          <div className="absolute right-6 bottom-6 left-6 rounded-md border border-white/10 bg-[#161615] px-2 py-2 text-[11px]">
            Atelier Nord
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function AutomationPlatform() {
  const nodes = [
    ["Trigger", "New lead created"],
    ["Agent", "Lead qualification"],
    ["Agent", "Research company"],
    ["Agent", "Write the reply"],
    ["CRM", "Update opportunity"],
    ["Notify", "Alert the team"],
  ];
  return (
    <Frame title="automation / builder">
      <div className="grid gap-3 p-4 md:grid-cols-3">
        {nodes.map(([kind, label], index) => (
          <div key={label} className="rounded-md border border-white/10 p-3">
            <div className="font-mono text-[10px] text-accent">
              0{index + 1} · {kind}
            </div>
            <div className="mt-2 text-[13px]">{label}</div>
          </div>
        ))}
      </div>
    </Frame>
  );
}

export function Architecture() {
  const layers = [
    ["Experience", "Web · Mobile · Dashboards · Portals"],
    ["Application", "Next.js · React · TypeScript · Node.js"],
    ["Data", "MongoDB · PostgreSQL · Firebase · Redis"],
    ["Intelligence", "AI · LLMs · Agents · Automation"],
    ["Infrastructure", "Vercel · Cloudflare · OVHcloud · APIs · CI/CD"],
  ];
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-white">
      {layers.map(([name, detail], index) => (
        <div key={name} className="grid gap-2 border-b border-line px-4 py-4 last:border-b-0 md:grid-cols-[180px_1fr] md:px-6">
          <div className="flex items-baseline gap-3">
            <span className="font-mono text-[11px] text-mute">0{index + 1}</span>
            <span className="text-sm font-medium">{name}</span>
          </div>
          <div className="font-mono text-[12px] text-mute">{detail}</div>
        </div>
      ))}
    </div>
  );
}

export function BusinessSystem() {
  const nodes = ["Website", "CRM", "Payments", "ERP", "Email", "Analytics", "AI", "Operations"];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {nodes.map((node, index) => (
        <div key={node} className="rounded-lg border border-line bg-white px-4 py-4">
          <div className="font-mono text-[10px] text-mute">0{index + 1}</div>
          <div className="mt-2 text-sm font-medium">{node}</div>
          {index < nodes.length - 1 ? <div className="mt-3 font-mono text-[10px] text-mute">connects to the next system</div> : <div className="mt-3 font-mono text-[10px] text-accent">one system</div>}
        </div>
      ))}
    </div>
  );
}

export function EngineeringStack() {
  const layers = ["Architecture", "API", "Database", "Authentication", "Permissions", "Integrations", "Infrastructure", "Monitoring", "Security"];
  return (
    <Frame title="system / internal">
      <div className="grid md:grid-cols-[200px_1fr]">
        <div className="border-b border-white/10 p-4 md:border-r md:border-b-0">
          {layers.map((layer, index) => (
            <div key={layer} className={`py-1.5 font-mono text-[11px] ${index === 0 ? "text-white" : "text-white/40"}`}>
              {layer}
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="font-mono text-[10px] text-white/35">POST /v1/opportunities</div>
          <pre className="mt-3 overflow-hidden font-mono text-[11px] leading-relaxed text-white/70">{`{
  "account": "meridian",
  "stage": "qualification",
  "owner": "sales",
  "source": "portal"
}`}</pre>
          <div className="mt-4 grid grid-cols-2 gap-2 text-[11px] text-white/55">
            <div className="rounded-md border border-white/10 px-2 py-2">Auth · session + role</div>
            <div className="rounded-md border border-white/10 px-2 py-2">Deploy · production</div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function Platform() {
  return (
    <Frame title="byteforce / platform">
      <div className="grid min-h-[520px] lg:grid-cols-[180px_1fr_240px]">
        <aside className="border-b border-white/10 p-4 lg:border-r lg:border-b-0">
          {["Dashboard", "CRM", "AI assistant", "Analytics", "Workflows", "Notifications", "Users", "Settings"].map((item, index) => (
            <div key={item} className={`py-1.5 text-[13px] ${index === 0 ? "text-white" : "text-white/40"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="text-sm">Operations</div>
            <div className="font-mono text-[10px] text-accent">All systems nominal</div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {["Pipeline", "Billing", "Support"].map((item) => (
              <div key={item} className="rounded-md border border-white/10 px-2 py-3 text-[12px]">
                {item}
              </div>
            ))}
          </div>
          <Chart />
          <div className="mt-3">
            {[
              ["Atlas Logistics", "Workflow running"],
              ["Harbor Clinic", "Portal active"],
              ["Northline", "Invoice posted"],
            ].map(([name, state]) => (
              <div key={name} className="flex justify-between border-t border-white/8 py-2 text-[12px]">
                <span>{name}</span>
                <span className="text-white/40">{state}</span>
              </div>
            ))}
          </div>
        </div>
        <aside className="border-t border-white/10 p-4 lg:border-t-0 lg:border-l">
          <div className="font-mono text-[10px] text-white/35">Assistant</div>
          <div className="mt-3 rounded-md border border-white/10 px-3 py-3 text-[12px] text-white/70">
            The onboarding workflow finished. Two accounts are waiting on a document.
          </div>
          <div className="mt-3 font-mono text-[10px] text-white/35">Notifications</div>
          <div className="mt-2 space-y-2 text-[12px] text-white/60">
            <div>Sales team alerted</div>
            <div>Deploy completed</div>
          </div>
        </aside>
      </div>
    </Frame>
  );
}
