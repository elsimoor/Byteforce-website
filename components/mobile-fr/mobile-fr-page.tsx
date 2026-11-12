"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "@/components/crm-canada/motion";
import { PlantPhones } from "@/components/mobile-example/plant-phones";
import "@/components/crm-canada/crm-canada.css";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);
const pagePath = "/geo-location/applications-mobiles/fr";
const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite décrire une application mobile en France.");

type LinkItem = { href: string; label: string };
type Faq = { q: string; a: string };

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("mobile_france_cta", { position, page: pagePath });
}

export function MobileFrancePage({ faqs, offers, cities }: { faqs: Faq[]; offers: LinkItem[]; cities: LinkItem[] }) {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node, {
      intro: "Bonjour Byte Force, je souhaite décrire un projet (application mobile en France).",
      subject: "Projet application mobile en France",
      country: "France",
      city: "France",
      pageUrl: `https://byteforce.ma${pagePath}`,
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
              <Link href="/geo-location">Lieux</Link>
              <span aria-hidden="true"> · </span>
              <Link href="/developpement-application-mobile-maroc">Application mobile au Maroc</Link>
              <span aria-hidden="true"> · </span>
              <span>Applications mobiles en France</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              APPLICATION MOBILE · FRANCE
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Applications mobiles en France
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Byte Force prend une application mobile en France depuis Casablanca. Il n’y a pas de bureau en France. Les points tiennent dans la journée française. Le cadre de l’offre est l’<Link href="/developpement-application-mobile-maroc">application mobile au Maroc</Link>.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Décrire le projet <span>↗</span>
              </a>
              <Link className="btn" href="/developpement-application-mobile-maroc">
                Voir l’offre Maroc
              </Link>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Trente minutes pour cadrer.</b> Réponse sous un jour ouvré.
              </span>
            </div>
          </div>
          <PlantPhones />
        </div>
      </section>

      <section className="s" id="france">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">France</p>
            <h2 data-build="text" data-by="Stratégie">Pas de bureau en France. Les points tiennent dans la journée.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Byte Force travaille avec des entreprises en France depuis Casablanca. Le décalage est d’une heure une partie de l’année, nul le reste. Les heures du studio sont 9 h–19 h, lundi au vendredi, heure de Casablanca.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Bureau</span>
                <h3>Casablanca</h3>
                <p>Le seul bureau est au Technopark. Le travail en France se fait en visio. Un déplacement se décide seulement s’il est écrit dans le périmètre.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">Catalogue</span>
                <h3>Pas une app française</h3>
                <p>Escapade Florale, Nu Lille, Proche de moi, Meubles de Septentrion, Ambulances Valcq, Les Hauts Paysages et Snapchat Collect sont des mises en ligne en France. Aucune n’est une application mobile. Ces pages ne sont pas des agences.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">Échange</span>
                <h3>En euros</h3>
                <p>Cadrage en français. Aucun prix n’est publié. Trente minutes pour commencer, réponse sous un jour ouvré, au +212 666 650 696.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="offre">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offre</p>
            <h2 data-build="text" data-by="Produit">Ce qu’une application mobile désigne ici.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Une application mobile est un programme que la personne installe, ou que l’entreprise déploie sur les téléphones de l’équipe. Elle a un sens quand le geste quitte le bureau : une tournée, une photo prise sur place, une notification qui doit arriver même si aucun onglet n’est ouvert, un écran qui reste utilisable quand le réseau coupe. Si le même geste tient dans un navigateur avec du réseau, Byte Force le dit avant d’ouvrir un compte sur un store. Le choix se fait sur le parc réel : Android d’abord quand les téléphones le sont, iOS quand l’App Store fait partie du contrat, une base commune quand les deux stores sont exigés. Le compte développeur reste au nom de l’entreprise.
            </p>
            <div className="callout" data-build="box" data-by="UX">
              <p>
                <strong>Aucun projet du catalogue n’est étiqueté France pour Applications mobiles.</strong> Le témoignage et la fiche restent à fournir. On n’invente pas un client pour remplir la page.
              </p>
              <Link className="btn" href="/developpement-application-mobile-maroc">
                Lire l’offre Maroc <span>↗</span>
              </Link>
            </div>
            <p data-build="text">Les plantes de l’écran d’exemple sont fictives. Elles ne sont pas un client, ni un nombre de téléchargements.</p>
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
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Geste</span><p>Un geste principal écrit, avec ce qui est hors de la première version.</p></div>
            <div className="cell" data-build="box" data-by="Frontend"><span className="mono">Parc</span><p>Android, iOS ou base commune, justifié par les téléphones réellement utilisés.</p></div>
            <div className="cell" data-build="box" data-by="Design"><span className="mono">Écrans</span><p>Les écrans, les comptes de test, et la build prête à être soumise sur le compte de l’entreprise.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">API</span><p>Le lien avec l’API ou le logiciel déjà en place, si le geste doit y remonter.</p></div>
            <div className="cell" data-build="box" data-by="Tests"><span className="mono">Réseau</span><p>Ce qui doit marcher sans réseau, et ce qui peut attendre une connexion.</p></div>
            <div className="cell" data-build="box" data-by="Contenu"><span className="mono">Fiche</span><p>Les textes de la fiche store, sans promesse de téléchargements.</p></div>
          </div>
        </div>
      </section>

      <section className="s alt" id="passage">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le passage</p>
            <h2 data-build="text" data-by="Stratégie">Du geste à la remise, en 4 étapes.</h2>
          </div>
          <ol className="steps">
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Le geste</h3><p>On nomme le geste pour la France, et ce qui attend la première version.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Trente minutes</h3><p>Pour dire si le sujet est bien cette offre. La réponse part sous un jour ouvré.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Le montant</h3><p>Les points tiennent dans la journée française. Le montant se discute en euros, après le périmètre, pas avant.</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>La remise</h3><p>Le dépôt et les comptes d’hébergement livrés sont à l’entreprise.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Aucune fourchette en euros n’est publiée.</h2>
          </div>
          <div className="prose">
            <p data-build="text" data-by="Rédaction">
              Le montant suit le périmètre : rôles, outils déjà en place, langues, reprise des données, déplacement s’il est écrit. Ce qui fait bouger une note d’application est sur <Link href="/insights/cout-application-mobile">combien coûte une application mobile</Link>.
            </p>
            <p data-build="text">
              Pas sûr du geste ? <a href="#contact" onClick={() => trackCta("price")}>Décrivez-le</a>. Le périmètre écrit vient avant le code et avant le montant.
            </p>
          </div>
        </div>
      </section>

      <section className="s alt" id="liens">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offres</p>
            <h2 data-build="text" data-by="Produit">Le cadre, puis les pages liées.</h2>
          </div>
          <div className="cities">
            {offers.map((item) => (
              <Link key={item.href + item.label} className="city" data-build="box" data-by="Produit" href={item.href}>
                {item.label} <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s" id="villes">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Villes</p>
            <h2 data-build="text" data-by="SEO">La même offre, dans une ville de France.</h2>
          </div>
          <div className="cities">
            {cities.map((item) => (
              <Link key={item.href} className="city" data-build="box" data-by="SEO" href={item.href}>
                {item.label} <span>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="s alt" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu’on demande le plus.</h2>
          </div>
          <div>
            {faqs.map((item) => (
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
            <h2 data-build="text" data-by="Marketing">Décrire le projet.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Réponse sous un jour ouvré, à contact@byteforce.ma ou au +212 666 650 696. Le bureau reste à Casablanca.
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
              <select id="offre" name="offre" defaultValue="Applications mobiles">
                <option>Applications mobiles</option>
                <option>Logiciel sur mesure</option>
                <option>Création de site web à Casablanca</option>
                <option>Agence SEO à Casablanca</option>
                <option>Audit et correction d’un site</option>
              </select>
            </div>
            <div className="f">
              <label htmlFor="type">Type de demande</label>
              <select id="type" name="type" defaultValue="Un nouveau produit">
                <option>Pas encore défini</option>
                <option>Un correctif ou un audit</option>
                <option>Un nouveau produit</option>
                <option>Un suivi après livraison</option>
              </select>
            </div>
            <div className="f full"><label htmlFor="projet">Projet <i>*</i></label><textarea id="projet" name="projet" placeholder="Le geste qui quitte le bureau, les téléphones utilisés, et ce qui doit marcher sans réseau." required /></div>
            <div className="f full"><label htmlFor="site">Site</label><input id="site" name="site" inputMode="url" placeholder="https://" /></div>
            <div className="f full">
              <TurnstileCheck onToken={(token) => root.current?.querySelector("#f")?.setAttribute("data-turnstile", token)} />
            </div>
            <div className="f full"><button className="btn primary" type="submit" style={{ width: "100%" }}>Envoyer la demande <span>↗</span></button></div>
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
