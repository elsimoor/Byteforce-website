import { createLead } from "@/lib/actions";
import { services } from "@/lib/content";

export function LeadForm() {
  return (
    <form action={createLead} className="grid gap-8">
      <div className="grid gap-8 md:grid-cols-2">
        <label className="grid gap-1 text-sm">
          Nom
          <input name="name" required autoComplete="name" className="field" />
        </label>
        <label className="grid gap-1 text-sm">
          Email
          <input name="email" type="email" required autoComplete="email" className="field" />
        </label>
        <label className="grid gap-1 text-sm">
          Téléphone
          <input name="phone" autoComplete="tel" className="field" />
        </label>
        <label className="grid gap-1 text-sm">
          Société
          <input name="company" autoComplete="organization" className="field" />
        </label>
      </div>
      <label className="grid gap-1 text-sm">
        Offre
        <select name="service" className="field" defaultValue="">
          <option value="">Choisir</option>
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-1 text-sm">
        Projet
        <textarea name="message" required rows={4} className="field" />
      </label>
      <label className="absolute -left-[9999px]" aria-hidden="true">
        Site
        <input name="company_website" tabIndex={-1} autoComplete="off" />
      </label>
      <button type="submit" className="justify-self-start border-b border-ink pb-1 text-left">
        Envoyer la demande
      </button>
    </form>
  );
}
