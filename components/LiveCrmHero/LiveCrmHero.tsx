import Link from "next/link";
import styles from "./LiveCrmHero.module.css";

const columns = [
  {
    title: "Nouveau",
    color: "#8B5CF6",
    leads: [
      { name: "Entreprise A", note: "Demande reçue" },
      { name: "Entreprise B", note: "À rappeler", tag: "Relance" },
    ],
  },
  {
    title: "Qualifié",
    color: "#3B82F6",
    leads: [{ name: "Entreprise C", note: "Besoin confirmé" }],
  },
  {
    title: "Devis",
    color: "#F59E0B",
    leads: [
      { name: "Entreprise D", note: "Devis envoyé" },
      { name: "Entreprise E", note: "Relance mardi", tag: "Relance" },
    ],
  },
  {
    title: "Gagné",
    color: "#10B981",
    leads: [{ name: "Entreprise F", note: "Signé" }],
  },
] as const;

export function LiveCrmHero() {
  return (
    <section className={styles.hero} aria-labelledby="crm-canada-titre">
      <div className={styles.wrap}>
        <div>
          <nav className={styles.crumbs} aria-label="Fil d'Ariane">
            <Link href="/" className={styles.crumb}>
              Accueil
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/geo-location" className={styles.crumb}>
              Lieux
            </Link>
            <span aria-hidden="true">·</span>
            <Link href="/developpement-logiciel-sur-mesure-maroc/crm" className={styles.crumb}>
              CRM sur mesure
            </Link>
            <span aria-hidden="true">·</span>
            <span>CRM au Canada</span>
          </nav>
          <div className={styles.eyebrow}>
            <span className={styles.live} />
            CRM SUR MESURE · CANADA
          </div>
          <h1 id="crm-canada-titre">
            CRM au
            <br />
            <span className={styles.grad}>Canada</span>
          </h1>
          <p className={styles.lede}>
            Byte Force conçoit des CRM sur mesure pour des entreprises au Canada, depuis Casablanca. Il n&apos;y a pas de bureau au Canada : le studio est au Technopark. Les projets canadiens du catalogue sont à Montréal, Coco Inbox et Tourispeak depuis 2024, CRM Cocoinbox en ligne en 2026. Le cadre de l&apos;offre est{" "}
            <Link href="/developpement-logiciel-sur-mesure-maroc/crm" className={styles.inline}>
              CRM sur mesure
            </Link>
            .
          </p>
          <div className={styles.actions}>
            <a href="#contact" className={styles.primary}>
              Décrire le projet <span>↗</span>
            </a>
            <a href="#livre" className={styles.secondary}>
              Voir ce qui est livré
            </a>
          </div>
          <div className={styles.note}>
            <span className={styles.live} />
            <span>
              <b>Trente minutes, réponse sous un jour ouvré.</b>
              Devis en dollars canadiens, studio ouvert 9 h à 19 h, heure de Casablanca.
            </span>
          </div>
        </div>

        <div>
          <div className={styles.mock} aria-hidden="true">
            <div className={styles.mockTop}>
              <div className={styles.tabs}>
                <span>Boîte</span>
                <span className={styles.on}>Fiches</span>
                <span>Relances</span>
                <span>Devis</span>
              </div>
              <span className={styles.chip}>EXEMPLE</span>
            </div>
            <div className={styles.board}>
              {columns.map((column) => (
                <div className={styles.col} key={column.title}>
                  <h4>
                    <i style={{ background: column.color }} />
                    {column.title}
                    <span>{column.leads.length}</span>
                  </h4>
                  {column.leads.map((lead, index) => (
                    <div className={styles.lead} key={lead.name} style={{ ["--n" as string]: index }}>
                      <b>{lead.name}</b>
                      <small>{lead.note}</small>
                      {"tag" in lead ? <span className={styles.tag}>{lead.tag}</span> : null}
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className={styles.mockFoot}>
              <span>Droits : qui voit, qui exporte, qui efface</span>
              <strong>Étapes nommées par l&apos;équipe</strong>
            </div>
          </div>
          <p className={styles.cap}>Écran d&apos;exemple · données fictives</p>
        </div>
      </div>
    </section>
  );
}
