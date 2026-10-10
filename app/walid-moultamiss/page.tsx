import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbJsonLd } from "@/components/json-ld";
import { openGraph } from "@/lib/open-graph";
import { site } from "@/lib/site";

const description =
  "Walid Moultamiss, ingénieur logiciel full-stack à Casablanca. Plus de 4 ans d'expérience. Bureau Byte Force au Technopark.";

const cvFr = "/walid_moultamiss%20CV%20Fr.pdf";
const cvEn = "/walid_moultamiss%20CV%20Eng.pdf";
const linkedin = "https://www.linkedin.com/in/walid-moultamiss-56142b1aa";

export const metadata: Metadata = {
  title: "Walid Moultamiss",
  description,
  alternates: { canonical: "/walid-moultamiss" },
  openGraph: openGraph("/walid-moultamiss", "Walid Moultamiss", description),
};

const roles = [
  {
    when: "mars 2026 – aujourd'hui",
    title: "Ingénieur logiciel full-stack, ProcheDeMoi",
    place: "France, télétravail",
    text: "Travail sur prochedemoi.fr et booking.prochedemoi.fr : recherche locale, headless CMS avec Next.js, TypeScript et Strapi, fiches de commerces, et données structurées.",
  },
  {
    when: "août 2025 – mars 2026",
    title: "Développeur full-stack, YourSoft Run",
    place: "France, télétravail",
    text: "Maintenance d'un parc de sites WordPress et d'hébergements OVHcloud. Le CV indique plus de 30 environnements mutualisés, des extensions sur mesure, Stripe, Power BI, DNS, SSL et des migrations.",
  },
  {
    when: "janvier 2025 – juillet 2025",
    title: "Ingénieur logiciel full-stack, YourSmile Run",
    place: "Maroc",
    text: "CRM orthodontique : parcours pour l'administration, les dentistes et le back-office, API GraphQL, Node.js, MongoDB, droits d'accès, et interfaces Next.js.",
  },
  {
    when: "janvier 2024 – décembre 2024",
    title: "Ingénieur logiciel, Cocoinbox",
    place: "Canada, télétravail",
    text: "Plateforme et CRM : email, notes et fichiers, avec un accent sur la confidentialité. Next.js, Node.js, GraphQL et MongoDB. Fonctions d'aide à la lecture et à la réponse des emails.",
  },
  {
    when: "2022 – janvier 2024",
    title: "Développeur logiciel full-stack, ByteForce SARL",
    place: "Casablanca",
    text: "Fondation et direction du studio. Le CV indique plus de 20 projets web et logiciels, du besoin jusqu'à la mise en ligne, avec Next.js, React, TypeScript, Node.js, GraphQL, MongoDB, WordPress et WooCommerce.",
  },
];

export default function WalidPage() {
  const person = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: `${site.url}/walid-moultamiss`,
    inLanguage: ["fr", "en"],
    author: {
      "@type": "Person",
      name: "Walid Moultamiss",
      jobTitle: "Full-Stack Software Engineer",
      description:
        "Full-Stack Software Engineer with 4+ years of experience. Master's studies in computer science at Heriot-Watt University. Lead of Byte Force in Casablanca.",
      url: `${site.url}/walid-moultamiss`,
      email: site.email,
      telephone: site.phone,
      worksFor: { "@id": `${site.url}/#business` },
      sameAs: [linkedin],
    },
  };

  return (
    <main>
      <article className="author">
        <BreadcrumbJsonLd
          items={[
            { name: "Accueil", path: "/" },
            { name: "Studio", path: "/studio" },
            { name: "Walid Moultamiss", path: "/walid-moultamiss" },
          ]}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }} />
        <header className="grid gap-10 px-6 pb-12 pt-16 md:grid-cols-12 md:px-12 md:pt-28">
          <img
            src="/walid-moultamiss-byte-force-maroc.png"
            alt="Walid Moultamiss, Byte Force Maroc"
            width={420}
            height={520}
            className="aspect-[4/5] w-full max-w-sm rounded-lg object-cover object-[center_18%] md:col-span-5"
          />
          <div className="md:col-span-7">
          <h1 className="display max-w-[14ch] text-[clamp(3.2rem,8vw,6.5rem)]">Walid Moultamiss</h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed">
            Ingénieur logiciel full-stack, à Casablanca. Plus de 4 ans d&apos;expérience. Il a fondé Byte Force, dont le
            bureau est au Technopark.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-mute">
            {site.email}
            <br />
            {site.phoneDisplay}
            <br />
            <a href={linkedin}>LinkedIn de Walid Moultamiss</a>
          </p>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={cvFr}>CV en français (PDF)</a>
            <a href={cvEn}>CV in English (PDF)</a>
            <Link href="/contact">Écrire au studio</Link>
          </p>
          </div>
        </header>

        <section className="border-t border-line px-6 py-16 md:px-12">
          <h2 className="display text-4xl">Parcours en français</h2>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed">
            <p>
              Le texte suit le CV. Walid Moultamiss conçoit des logiciels, des CRM, des sites et des applications, puis
              les met en ligne. Les outils cités dans le CV sont React, Next.js, TypeScript, Node.js, GraphQL, MongoDB,
              WordPress, WooCommerce, PHP, Vercel, OVHcloud et Cloudflare. Power BI est nommé pour la maintenance des sites WordPress. D&apos;autres outils du studio : Microsoft Clarity, PostHog, Expo, Mailgun, Mailchimp, Hostinger, Namecheap et Nindohost. Aucune fiche de réalisation ne leur attribue un produit, sauf quand le CV le dit déjà.
            </p>
            <p>
              Les études en cours sont un Master en informatique et ingénierie informatique à Heriot-Watt University, au
              Royaume-Uni, de septembre 2025 à mai 2027. Le diplôme n&apos;est pas encore terminé. Les langues du CV :
              arabe langue maternelle, français professionnel, anglais professionnel.
            </p>
          </div>
          <ol className="mt-12 max-w-3xl">
            {roles.map((role) => (
              <li key={role.title} className="border-t border-line py-8">
                <p className="text-sm text-mute">{role.when}</p>
                <h3 className="mt-2 text-2xl">{role.title}</h3>
                <p className="mt-1 text-sm text-mute">{role.place}</p>
                <p className="mt-4 max-w-2xl leading-relaxed">{role.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-2xl leading-relaxed">
            Les travaux publics du studio sont sur la page des réalisations. Cette fiche ne vend pas un agent
            conversationnel. Quand une tâche tient dans une règle stable, c&apos;est la règle qui est écrite.
          </p>
        </section>

        <section lang="en" className="border-t border-line px-6 py-16 md:px-12">
          <h2 className="display text-4xl">Profile in English</h2>
          <div className="mt-8 max-w-2xl space-y-4 leading-relaxed">
            <p>
              Walid Moultamiss is a full-stack software engineer based in Casablanca, with 4+ years of experience. He
              founded Byte Force. The studio office is at Technopark, Bd Dammam, Aïn Chock.
            </p>
            <p>
              He is doing Master&apos;s studies in computer science and computer engineering at Heriot-Watt University,
              from September 2025 to May 2027. The degree is not finished. Languages on the CV: Arabic native, French
              professional, English professional.
            </p>
            <p>
              Since March 2026 he works with ProcheDeMoi in France, remote, on prochedemoi.fr and booking.prochedemoi.fr.
              From August 2025 to March 2026 he maintained WordPress sites and OVHcloud hosting at YourSoft Run. The CV
              states 30+ shared hosting environments. From January to July 2025 he built features for an orthodontic CRM
              at YourSmile Run in Morocco. Through 2024 he worked on the Cocoinbox platform and CRM from Canada. From
              2022 to January 2024 he led ByteForce SARL in Casablanca. The CV states 20+ web and software projects in
              that period. Power BI is named for the WordPress maintenance. Other studio tools: Microsoft Clarity, PostHog, Expo, Mailgun, Mailchimp, Hostinger, Namecheap and Nindohost. A realisation page does not assign one of them to a product unless the CV already does.
            </p>
            <p>
              The public proof of the studio is the live work, with its city and year. This page does not add a team
              photo, a client quote, or a price.
            </p>
          </div>
          <p className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            <a href={cvEn}>Download the English CV</a>
            <a href={cvFr}>Télécharger le CV français</a>
            <a href={linkedin}>LinkedIn de Walid Moultamiss</a>
          </p>
        </section>
      </article>
    </main>
  );
}
