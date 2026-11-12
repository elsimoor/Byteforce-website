"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { BrowserFrame } from "@/components/referencement-seo/browser-frame";
import shotStyles from "@/components/referencement-seo/landing.module.css";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "@/components/crm-canada/motion";
import { generativeShot, performanceShot } from "@/lib/referencement-seo";
import { prixSeoFaqs } from "./copy";
import "@/components/crm-canada/crm-canada.css";

const shots = [performanceShot, generativeShot];

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);
const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite un devis SEO pour mon site au Maroc.");

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("prix_seo_maroc_cta", { position, page: "/insights/prix-seo-maroc" });
}

export function PrixSeoPage() {
  const root = useRef<HTMLElement>(null);
  const dialogs = useRef<Array<HTMLDialogElement | null>>([]);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node, {
      intro: "Bonjour Byte Force, je souhaite décrire un projet (prix SEO au Maroc).",
      subject: "Projet SEO au Maroc",
      country: "Maroc",
      city: "Casablanca",
      pageUrl: "https://byteforce.ma/insights/prix-seo-maroc",
    });
  }, []);

  return (
    <main ref={root} className="cursor-page" data-landing>
      <section className="hero">
        <div className="wrap">
          <div>
            <nav className="crumbs" data-build="box" data-by="Design" aria-label="Fil d'Ariane">
              <Link href="/">Accueil</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/insights">Insights</Link>
              <span aria-hidden="true"> · </span>
              <span>Prix SEO Maroc</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              PRIX SEO · MAROC
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Combien coûte le SEO au Maroc ?
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Un audit SEO coûte entre 6 000 et 12 000 MAD, livré sous 10 jours ouvrés. L’accompagnement d’une PME se situe entre 5 000 et 9 000 MAD par mois. Une stratégie nationale ou e-commerce se situe entre 10 000 et 18 000 MAD par mois. Byte Force le fait depuis Casablanca, et ne promet pas une position.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Recevoir mon devis SEO <span>↗</span>
              </a>
              <Link className="btn" href="/services/referencement-seo">
                Voir l’agence SEO
              </Link>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Publié le 14 octobre 2026.</b> Réponse sous un jour ouvré.
              </span>
            </div>
          </div>
          <div>
            <div className="mock" data-build="box" data-by="Produit">
              <div className="mock-top">
                <div className="tabs">
                  <span>Audit</span>
                  <span className="on">Pages</span>
                  <span>Liens</span>
                  <span>Rapport</span>
                </div>
                <span className="chip">EXEMPLE</span>
              </div>
              <div className="board">
                <div className="col">
                  <h4>
                    <i style={{ background: "#8B5CF6" }} />
                    À auditer<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 0 }}>
                    <b>Dossier A</b>
                    <small>URL reçue</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 1 }}>
                    <b>Dossier B</b>
                    <small>Erreur à revoir</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#3B82F6" }} />
                    Pages<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 2 }}>
                    <b>Dossier C</b>
                    <small>Intention notée</small>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#F59E0B" }} />
                    Liens<span>2</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 3 }}>
                    <b>Dossier D</b>
                    <small>Source à lire</small>
                  </div>
                  <div className="lead" style={{ ["--n" as string]: 4 }}>
                    <b>Dossier E</b>
                    <small>Relance mardi</small>
                    <span className="tag">Relance</span>
                  </div>
                </div>
                <div className="col">
                  <h4>
                    <i style={{ background: "#10B981" }} />
                    Suivi<span>1</span>
                  </h4>
                  <div className="lead" style={{ ["--n" as string]: 5 }}>
                    <b>Dossier F</b>
                    <small>Rapport prêt</small>
                  </div>
                </div>
              </div>
              <div className="mock-foot">
                <span>Pas une position Google</span>
                <strong>Search Console, pas un classement inventé</strong>
              </div>
            </div>
            <p className="cap" data-build="box">
              ÉCRAN D’EXEMPLE · DONNÉES FICTIVES
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="maroc">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Maroc</p>
            <h2 data-build="text" data-by="Stratégie">Le prix du SEO se dit à Casablanca, pas dans une grille anonyme.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Le SEO au Maroc, chez Byte Force, est le référencement naturel d’un site depuis le Technopark, à Casablanca. Le montant dépend de la concurrence du secteur et de l’état technique du site. Le studio ne promet pas la première place, et ne vend pas une offre à 1 000 MAD par mois.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Audit</span>
                <h3>6 000 à 12 000 MAD</h3>
                <p>Forfait unique. Erreurs, vitesse, Schema.org, mots-clés et plan d’actions. Livré sous 10 jours ouvrés.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">PME</span>
                <h3>5 000 à 9 000 MAD / mois</h3>
                <p>Pages, 2 à 4 articles par mois, liens, Search Console et un rapport mensuel.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">National</span>
                <h3>10 000 à 18 000 MAD / mois</h3>
                <p>Catégories, maillage, SEO local sur Casablanca, Marrakech, Tanger et Rabat, et des liens d’autorité.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="seo">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">SEO</p>
            <h2 data-build="text" data-by="SEO">Ce que le mot SEO désigne ici.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Le référencement naturel est le travail qui rend une page trouvable dans Google pour une requête commerciale, puis citable dans une réponse générée. Byte Force assainit le code, aligne chaque page sur l’intention de recherche, et écrit des données structurées. Ce n’est pas une publicité Google Ads, et ce n’est pas une promesse de position. L’offre qui promet la première place en 15 jours n’est pas ce travail. Le service qui reçoit le dossier est l’agence SEO à Casablanca.
            </p>
            <div className="callout" data-build="box" data-by="Produit">
              <p>
                <strong>Pas de client inventé sur cette page de prix.</strong> Le suivi se lit dans Search Console : impressions, clics, CTR et position des pages travaillées. Ces chiffres décrivent le site du client. Ils ne deviennent pas une promesse pour un autre domaine.
              </p>
              <Link className="btn" href="/services/referencement-seo">
                Lire l’offre SEO <span>↗</span>
              </Link>
            </div>
            <div style={{ display: "grid", gap: 28, marginTop: 28 }}>
              {shots.map((item, index) => (
                <figure key={item.src} data-build="box" data-by="Analytique" style={{ margin: 0 }}>
                  <button
                    type="button"
                    onClick={() => dialogs.current[index]?.showModal()}
                    aria-haspopup="dialog"
                    aria-label={`Agrandir la capture ${item.label}`}
                    style={{ display: "block", width: "100%", padding: 0, border: 0, background: "none", textAlign: "left", cursor: "pointer" }}
                  >
                    <BrowserFrame src={item.src} alt={item.alt} width={item.width} height={item.height} label={item.label} />
                    <span className="btn sm" style={{ marginTop: 12 }}>
                      Agrandir la capture
                    </span>
                  </button>
                  <figcaption style={{ marginTop: 12 }}>
                    <p data-build="text">{item.caption}</p>
                  </figcaption>
                  <dialog
                    ref={(node) => {
                      dialogs.current[index] = node;
                    }}
                    className={shotStyles.lightbox}
                    aria-labelledby={`capture-${index}`}
                    onClick={(event) => {
                      if (event.target === dialogs.current[index]) dialogs.current[index]?.close();
                    }}
                  >
                    <div style={{ background: "#fff" }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 16px", borderBottom: "1px solid var(--line)" }}>
                        <p id={`capture-${index}`} className="mono" style={{ margin: 0 }}>
                          {item.label}
                        </p>
                        <button type="button" className="btn sm" onClick={() => dialogs.current[index]?.close()}>
                          Fermer
                        </button>
                      </div>
                      <BrowserFrame src={item.src} alt={item.alt} width={item.width} height={item.height} label={item.label} sizes="(min-width: 1024px) 1080px, 100vw" />
                    </div>
                  </dialog>
                </figure>
              ))}
            </div>
            <p data-build="text">
              Les dossiers de l’écran d’exemple sont fictifs. Le comparatif du même guide ajoute une refonte on-page de 10 000 à 20 000 MAD, un accompagnement croissance de 5 000 à 10 000 MAD par mois, et un SEO e-commerce de 12 000 à 25 000 MAD par mois.
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="livre">
        <div className="wrap">
          <p className="label" data-build="box">Ce qui est livré</p>
          <h2 data-build="text" data-by="Produit" style={{ maxWidth: 720, marginBottom: 40 }}>
            Six engagements avant de coder.
          </h2>
          <div className="grid6">
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Technique</span><p>Erreurs, vitesse et balisage, avant une nouvelle page.</p></div>
            <div className="cell" data-build="box" data-by="SEO"><span className="mono">Requêtes</span><p>Les recherches qui précèdent une demande, pas une liste décorative.</p></div>
            <div className="cell" data-build="box" data-by="Contenu"><span className="mono">Pages</span><p>Une URL par intention, avec un titre et un texte qui répondent.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">Liens</span><p>Des liens vers des pages qui existent, pas une ferme.</p></div>
            <div className="cell" data-build="box" data-by="Analytique"><span className="mono">Rapport</span><p>Impressions, clics, CTR et position dans Search Console.</p></div>
            <div className="cell" data-build="box" data-by="Tests"><span className="mono">Hors périmètre</span><p>Pas de première place datée. Pas de position garantie.</p></div>
          </div>
        </div>
      </section>

      <section className="s alt" id="passage">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le passage</p>
            <h2 data-build="text" data-by="Stratégie">De l’URL au devis, en 4 étapes.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>L’adresse du site</h3><p>2 minutes. L’URL, le secteur, et la requête qui doit ramener une demande.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Trois blocages</h3><p>Byte Force regarde les trois blocages techniques les plus lourds.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Devis</h3><p>Sous un jour ouvré, avant le travail continu.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>Livraison</h3><p>L’audit part sous 10 jours ouvrés. Le mensuel a son rapport.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Ce qui fait varier le prix du SEO.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text" data-by="Rédaction">
                Le coût d’une prestation SEO au Maroc dépend de la concurrence du secteur et de l’état technique du site. L’audit est un forfait. Le suivi est un mois, renouvelé parce que les pages, les liens et le rapport continuent. Une boutique ou plusieurs villes coûtent plus qu’un site de quelques pages, parce que les catégories et le maillage s’ajoutent.
              </p>
            </div>
            <div className="chips" data-build="box" data-by="Design">
              <span>Audit 6 000–12 000 MAD</span>
              <span>Refonte 10 000–20 000 MAD</span>
              <span>Mensuel 5 000–10 000 MAD</span>
              <span>E-commerce 12 000–25 000 MAD</span>
            </div>
            <div className="prose" style={{ marginTop: 26 }}>
              <p data-build="text">
                Pas sûr de la formule ? <a href="#contact" onClick={() => trackCta("price")}>Décrivez le site</a>, vous recevez un devis, pas une promesse de position.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="offres">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offres</p>
            <h2 data-build="text" data-by="SEO">Le prix, puis le service.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="SEO" href="/services/referencement-seo">Agence SEO <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Tests" href="/audit">Audit d’une page <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Contenu" href="/insights">Autres insights <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s" id="villes">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Villes</p>
            <h2 data-build="text" data-by="SEO">Les villes nommées dans le suivi local.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="SEO" href="/villes/casablanca">Casablanca <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/rabat">Rabat <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/marrakech">Marrakech <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/villes/tanger">Tanger <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s alt" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu’on demande le plus.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Article de Walid Moultamiss, ingénieur logiciel à Casablanca.{" "}
              <Link href="/walid-moultamiss">La page de Walid Moultamiss</Link>.
            </p>
          </div>
          <div>
            {prixSeoFaqs.map((item) => (
              <details key={item.q} data-build="box">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="contact">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Contact</p>
            <h2 data-build="text" data-by="Marketing">Recevez le devis SEO.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Envoyez l’URL. Devis sous un jour ouvré. Aucune promesse de position. Bureau au Technopark, Casablanca.
            </p>
            <div className="actions" data-build="box">
              <a className="btn" href={waHref} target="_blank" rel="noopener noreferrer">
                WhatsApp direct <span>↗</span>
              </a>
            </div>
          </div>
          <form id="f" data-build="box" data-by="UX" noValidate onSubmit={() => trackCta("form")}>
            <div className="hp" aria-hidden="true">
              <label htmlFor="company_website">Site web</label>
              <input id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
            </div>
            <div className="f"><label htmlFor="nom">Nom <i>*</i></label><input id="nom" name="nom" autoComplete="name" required /></div>
            <div className="f"><label htmlFor="email">Email <i>*</i></label><input id="email" name="email" type="email" autoComplete="email" required /></div>
            <div className="f"><label htmlFor="tel">Téléphone</label><input id="tel" name="tel" type="tel" autoComplete="tel" /></div>
            <div className="f"><label htmlFor="soc">Société</label><input id="soc" name="soc" autoComplete="organization" /></div>
            <div className="f">
              <label htmlFor="offre">Offre <i>*</i></label>
              <select id="offre" name="offre" defaultValue="Agence SEO à Casablanca">
                <option>Agence SEO à Casablanca</option>
                <option>Audit et correction d’un site</option>
                <option>Création de site web à Casablanca</option>
                <option>Logiciel sur mesure</option>
              </select>
            </div>
            <div className="f">
              <label htmlFor="type">Type de demande</label>
              <select id="type" name="type" defaultValue="Un correctif ou un audit">
                <option>Pas encore défini</option>
                <option>Un correctif ou un audit</option>
                <option>Un nouveau produit</option>
                <option>Un suivi après livraison</option>
              </select>
            </div>
            <div className="f full"><label htmlFor="projet">Site et requête <i>*</i></label><textarea id="projet" name="projet" placeholder="L'adresse du site, le secteur, et la recherche qui doit ramener une demande." required /></div>
            <div className="f full"><label htmlFor="site">Site</label><input id="site" name="site" inputMode="url" placeholder="https://" /></div>
            <div className="f full">
              <TurnstileCheck onToken={(token) => root.current?.querySelector("#f")?.setAttribute("data-turnstile", token)} />
            </div>
            <div className="f full"><button className="btn primary" type="submit" style={{ width: "100%" }}>Recevoir mon devis <span>↗</span></button></div>
            <div className="result f full" id="res" hidden>
              <p><strong>Votre message est prêt.</strong> Rien n’est envoyé tant que vous ne l’envoyez pas vous-même, par WhatsApp ou par email.</p>
              <textarea id="msg" readOnly aria-label="Message préparé" />
              <div className="row">
                <a className="btn primary sm" id="wa" href={waHref} target="_blank" rel="noopener noreferrer">Ouvrir WhatsApp <span>↗</span></a>
                <button className="btn sm" type="button" id="cp">Copier le message</button>
                <span className="addr">contact@byteforce.ma</span>
                <a className="btn sm" id="ml" href="mailto:contact@byteforce.ma">Ouvrir ma messagerie</a>
              </div>
            </div>
          </form>
        </div>
      </section>

      <a className="wa" href={waHref} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 2H4a2 2 0 0 0-2 2v18l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg>
        WhatsApp direct
        <span className="dslot" id="wslot" aria-hidden="true" />
      </a>
      <a className="dock" id="dock" href="#contact">
        Nous contacter
        <span className="dslot" id="dslot" aria-hidden="true" />
      </a>
      <div className="layer" id="layer" aria-hidden="true" />
    </main>
  );
}
