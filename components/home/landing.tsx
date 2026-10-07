import Link from "next/link";
import { Ecosystem } from "@/components/home/ecosystem";
import {
  AiPanel,
  Architecture,
  AutomationPlatform,
  BusinessSystem,
  Cocoinbox,
  CrmPanel,
  Dashboard,
  EngineeringStack,
  MobileApp,
  Platform,
  ProcheDeMoi,
  WorkflowNodes,
  YourSmile,
} from "@/components/home/screens";

const journey = [
  ["01", "Idea", "Business problem / opportunity", "A workflow that still lives in inboxes and spreadsheets."],
  ["02", "Product", "UX, workflows and product architecture", "Screens, roles, and the path a user actually takes."],
  ["03", "Engineering", "Frontend + backend + database + APIs", "The application, the data, and the contracts between them."],
  ["04", "Intelligence", "AI + automation + integrations", "Agents and workflows attached to real records."],
  ["05", "Infrastructure", "Cloud + security + deployment", "Environments, access, and a path to production."],
  ["06", "Production", "Real users, real data, real business", "A system people open because the work is in it."],
];

const impact = [
  ["Manual process", "Automated workflow"],
  ["Multiple tools", "One platform"],
  ["Spreadsheet", "Real-time dashboard"],
  ["Customer emails", "Structured CRM"],
  ["Repetitive work", "AI automation"],
  ["Disconnected systems", "Integrated infrastructure"],
];

const practice = [
  ["Discover", "Understand the business."],
  ["Architect", "Design the technical system."],
  ["Design", "Create the product experience."],
  ["Engineer", "Build the software."],
  ["Deploy", "Put it into production."],
  ["Evolve", "Improve and scale it."],
];

const technology = [
  ["Next.js", "Application layer"],
  ["Node.js", "Backend"],
  ["GraphQL", "API"],
  ["MongoDB", "Data"],
  ["Redis", "Performance"],
  ["AI / LLMs", "Intelligence"],
  ["Cloudflare", "Edge / Security"],
  ["Vercel / OVHcloud", "Infrastructure"],
];

const statements = [
  "We understand the business before writing the code.",
  "We design the product and engineer the system together.",
  "We build around your actual workflows.",
  "We stay involved after launch.",
  "We build systems that can evolve.",
];

const engineeringNotes = [
  "Scalable architecture",
  "Secure authentication",
  "Reliable infrastructure",
  "Clean APIs",
  "Production-ready deployments",
  "Maintainable code",
];

export function Landing() {
  return (
    <div>
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:px-8 lg:grid-cols-12 lg:py-20">
        <div className="lg:col-span-5">
          <p className="font-mono text-[11px] tracking-wide text-mute uppercase">Software product engineering</p>
          <h1 className="mt-4 max-w-[14ch] text-4xl font-medium tracking-tight text-ink md:text-5xl md:leading-[1.05]">
            We build the software behind ambitious businesses.
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-mute">
            ByteForce designs and engineers custom digital products, SaaS platforms, business systems and AI-powered
            applications from idea to production.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex h-10 items-center rounded-md bg-ink px-4 text-sm text-paper">
              Build your product →
            </Link>
            <Link href="/services" className="text-sm text-mute hover:text-ink">
              See what we build
            </Link>
          </div>
        </div>
        <div className="relative lg:col-span-7">
          <div className="rounded-xl bg-[#0d0d0c] p-3 md:hidden">
            <Dashboard />
            <div className="mt-3 grid gap-3">
              <CrmPanel />
              <AiPanel />
              <WorkflowNodes />
            </div>
            <div className="mt-3 flex justify-end">
              <MobileApp />
            </div>
          </div>
          <div className="relative hidden h-[680px] rounded-xl bg-[#0d0d0c] md:block">
            <div className="absolute top-8 right-16 left-16">
              <Dashboard />
            </div>
            <div className="absolute top-4 left-3 w-52">
              <CrmPanel />
            </div>
            <div className="absolute top-6 right-3 w-56">
              <AiPanel />
            </div>
            <div className="absolute bottom-4 left-8 w-[320px]">
              <WorkflowNodes />
            </div>
            <div className="absolute right-8 bottom-3">
              <MobileApp />
            </div>
          </div>
        </div>
      </section>

      <section id="build" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Digital products, engineered around your business.
          </h2>
          <div className="mt-12">
            <Ecosystem />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">From an idea to a working product.</h2>
          <div className="mt-10 flex gap-px overflow-x-auto border border-line bg-line">
            {journey.map(([index, title, line, detail]) => (
              <article key={index} className="min-w-[240px] flex-1 bg-surface p-5">
                <div className="font-mono text-[11px] text-accent">{index}</div>
                <h3 className="mt-4 text-lg font-medium tracking-tight">{title}</h3>
                <p className="mt-2 text-sm text-ink">{line}</p>
                <p className="mt-4 text-sm leading-relaxed text-mute">{detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="software" className="bg-[#0d0d0c] text-[#eceae4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Software we build</h2>
          <div className="mt-14 space-y-20">
            <article>
              <div className="mb-4 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">Cocoinbox</h3>
                  <p className="mt-1 text-sm text-white/50">Secure communication platform & CRM</p>
                </div>
                <Link href="/realisations/coco-inbox" className="text-sm text-white/60 hover:text-white">
                  Open the project
                </Link>
              </div>
              <Cocoinbox />
            </article>
            <article>
              <div className="mb-4">
                <h3 className="text-2xl font-medium tracking-tight">YourSmile</h3>
                <p className="mt-1 text-sm text-white/50">Orthodontic management platform</p>
              </div>
              <YourSmile />
            </article>
            <article>
              <div className="mb-4 flex items-end justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-medium tracking-tight">Proche de moi</h3>
                  <p className="mt-1 text-sm text-white/50">AI-powered local discovery platform</p>
                </div>
                <Link href="/realisations/re-proche-de-moi" className="text-sm text-white/60 hover:text-white">
                  Open the project
                </Link>
              </div>
              <ProcheDeMoi />
            </article>
            <article>
              <div className="mb-4">
                <h3 className="text-2xl font-medium tracking-tight">Business Automation Platform</h3>
                <p className="mt-1 text-sm text-white/50">CRM, agents, workflows, and the record they write back to</p>
              </div>
              <AutomationPlatform />
            </article>
          </div>
        </div>
      </section>

      <section id="stack" className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Everything behind the interface.</h2>
          <div className="mt-10">
            <Architecture />
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0c] text-[#eceae4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Software that doesn&apos;t just work. It works for you.
          </h2>
          <div className="mt-10">
            <AutomationPlatform />
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">We connect the pieces of your business.</h2>
          <p className="mt-4 text-base text-mute">Your software should work as one system.</p>
          <div className="mt-10">
            <BusinessSystem />
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0c] text-[#eceae4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Built properly from the inside out.</h2>
          <div className="mt-10">
            <EngineeringStack />
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {engineeringNotes.map((note) => (
              <li key={note} className="border-t border-white/10 pt-3 text-sm text-white/75">
                {note}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            Software is only successful when the business feels it.
          </h2>
          <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {impact.map(([before, after]) => (
              <div key={before} className="bg-surface p-6">
                <div className="text-sm text-mute line-through decoration-mute/40">{before}</div>
                <div className="mt-3 text-lg font-medium tracking-tight">{after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            We don&apos;t disappear after development starts.
          </h2>
          <ol className="mt-12">
            {practice.map(([title, text], index) => (
              <li key={title} className="grid grid-cols-[64px_1fr] gap-4 border-t border-line py-6 md:grid-cols-[80px_240px_1fr]">
                <span className="font-mono text-[12px] text-accent">0{index + 1}</span>
                <span className="text-lg font-medium tracking-tight">{title}</span>
                <span className="text-sm text-mute md:pt-1">{text}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Modern technology. Practical decisions.</h2>
          <p className="mt-4 max-w-xl text-base text-mute">Technology is a tool. The product is the goal.</p>
          <div className="mt-10 overflow-hidden rounded-lg border border-line bg-white">
            {technology.map(([name, layer]) => (
              <div key={name} className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line px-4 py-4 last:border-b-0 md:grid-cols-[220px_1fr_auto] md:px-6">
                <span className="text-sm font-medium">{name}</span>
                <span className="hidden font-mono text-[12px] text-mute md:block">{layer}</span>
                <span className="font-mono text-[11px] text-mute md:hidden">{layer}</span>
                <span className="hidden text-mute md:block" aria-hidden="true">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
          <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-4xl">
            A software engineering partner, not a software vendor.
          </h2>
          <div className="mt-12 space-y-8">
            {statements.map((statement) => (
              <p key={statement} className="max-w-3xl border-t border-line pt-6 text-2xl font-medium tracking-tight md:text-3xl">
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d0d0c] text-[#eceae4]">
        <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-24">
          <div className="mb-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-xl text-3xl font-medium tracking-tight md:text-5xl">
              Your business deserves better software.
            </h2>
            <Link href="/contact" className="inline-flex h-10 items-center rounded-md bg-white px-4 text-sm text-[#111110]">
              Build it with ByteForce →
            </Link>
          </div>
          <Platform />
        </div>
      </section>
    </div>
  );
}
