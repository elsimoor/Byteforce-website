"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import posthog from "posthog-js";
import { TurnstileCheck } from "@/components/turnstile-check";
import { startCrmCanadaMotion } from "@/components/crm-canada/motion";
import { iaEntrepriseFaqs } from "./copy";
import "@/components/crm-canada/crm-canada.css";

const posthogEnabled = Boolean(process.env.NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN && process.env.NEXT_PUBLIC_POSTHOG_HOST);
const pagePath = "/insights/intelligence-artificielle-entreprise-maroc";
const waHref =
  "https://wa.me/212666650696?text=" +
  encodeURIComponent("Bonjour Byte Force, je souhaite décrire un geste pour une entreprise au Maroc.");

function trackCta(position: "hero" | "price" | "form") {
  if (posthogEnabled) posthog.capture("ia_entreprise_maroc_cta", { position, page: pagePath });
}

function AgentMark({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 20 24" aria-hidden="true">
      <path d="M2 1L2 19L7 14L11 22L15 20L11 12L18 11Z" fill={color} stroke="#fff" strokeWidth="1.5" />
    </svg>
  );
}

export function IaEntreprisePage() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = root.current;
    if (!node) return;
    return startCrmCanadaMotion(node, {
      intro: "Bonjour Byte Force, je souhaite décrire un projet (intelligence artificielle pour une entreprise au Maroc).",
      subject: "Projet intelligence artificielle au Maroc",
      country: "Maroc",
      city: "Casablanca",
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
              <Link href="/insights">Décisions</Link>
              <span aria-hidden="true"> · </span>
              <span>Intelligence artificielle entreprise Maroc</span>
            </nav>
            <div className="eyebrow" data-build="box" data-by="Design">
              <span className="live" />
              INTELLIGENCE ARTIFICIELLE · MAROC
            </div>
            <h1 data-build="text" data-by="Rédaction">
              Intelligence artificielle entreprise Maroc
            </h1>
            <p className="lede" data-build="text" data-by="Contenu">
              Ce n’est pas un produit à part. Le plus souvent, le geste tient avec une règle stable dans le logiciel. Byte Force, à Casablanca, n’écrit un modèle que si cette règle ne suffit pas. Pas de prix public. <Link href="/contact">Écrire</Link> pour le geste, pas pour le mot.
            </p>
            <div className="actions" data-build="box" data-by="Frontend">
              <a className="btn primary" href="#contact" onClick={() => trackCta("hero")}>
                Décrire le geste <span>↗</span>
              </a>
              <Link className="btn" href="/developpement-logiciel-sur-mesure-maroc/automatisation">
                Voir l’automatisation
              </Link>
            </div>
            <div className="note" data-build="box">
              <span className="live" />
              <span>
                <b>Trente minutes, gratuites.</b> Une règle peut suffire. Réponse sous un jour ouvré.
              </span>
            </div>
          </div>
          <div>
            <div className="mock decide" data-build="box" data-by="Automatisation">
              <div className="mock-top">
                <div className="tabs">
                  <span>Geste</span>
                  <span className="on">Décision</span>
                  <span>Humain</span>
                </div>
                <span className="chip">EXEMPLE</span>
              </div>
              <div className="decide-board">
                <article className="decide-card">
                  <div className="decide-agent" style={{ color: "#4F46E5" }}>
                    <AgentMark color="#4F46E5" />
                    Règle
                  </div>
                  <b>Dossier A</b>
                  <small>L’étape est déjà connue</small>
                  <em>Règle suffit</em>
                </article>
                <article className="decide-card">
                  <div className="decide-agent" style={{ color: "#0D9488" }}>
                    <AgentMark color="#0D9488" />
                    Lecture
                  </div>
                  <b>Dossier B</b>
                  <small>La forme du document change</small>
                  <em>Doute</em>
                </article>
                <article className="decide-card">
                  <div className="decide-agent" style={{ color: "#DC2626" }}>
                    <AgentMark color="#DC2626" />
                    Humain
                  </div>
                  <b>Dossier C</b>
                  <small>La réponse n’est pas sûre</small>
                  <em>À valider</em>
                </article>
                <span className="decide-runner" aria-hidden="true">
                  <AgentMark color="#111827" />
                </span>
              </div>
              <div className="mock-foot">
                <span>Les agents préparent</span>
                <strong>Une personne décide</strong>
              </div>
            </div>
            <p className="cap" data-build="box">
              ÉCRAN D’EXEMPLE · DONNÉES FICTIVES
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="casablanca">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Casablanca</p>
            <h2 data-build="text" data-by="Stratégie">Le bureau est au Technopark. Il n’y a pas d’agent à vendre.</h2>
          </div>
          <div>
            <div className="prose">
              <p data-build="text">
                Byte Force cadre ce geste depuis Casablanca. Le premier échange peut conclure qu’une règle suffit. On ne construit pas un modèle pour habiller un tableur.
              </p>
            </div>
            <div className="facts">
              <div className="fact" data-build="box" data-by="Architecture">
                <span className="mono">Bureau</span>
                <h3>Technopark</h3>
                <p>Boulevard Dammam, Aïn Chock, Casablanca. Du lundi au vendredi, de 9 h à 19 h.</p>
              </div>
              <div className="fact" data-build="box" data-by="Contenu">
                <span className="mono">Preuve</span>
                <h3>Pas une démo d’IA</h3>
                <p>Dealkhir, Coco Inbox et Zainek ne sont pas des preuves d’intelligence artificielle. On ne leur prête pas cette fonction.</p>
              </div>
              <div className="fact" data-build="box" data-by="Analytique">
                <span className="mono">Échange</span>
                <h3>Trente minutes</h3>
                <p>Gratuites. La réponse peut être qu’une règle suffit. Téléphone +212 666 650 696.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="s alt" id="offre">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offre</p>
            <h2 data-build="text" data-by="Produit">La règle avant le modèle.</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Beaucoup de gestes d’entreprise sont une règle : si le dossier est à cette étape, cette personne doit agir. Ça s’écrit dans le logiciel. Ça ne demande pas un modèle. L’<Link href="/developpement-logiciel-sur-mesure-maroc/automatisation">automatisation</Link> est cette offre. L’intelligence artificielle n’en est pas le synonyme. Un modèle a un sens quand le geste n’est pas une règle stable : classer des textes très variables, lire un document dont la forme change. Encore faut-il dire ce qui est une bonne réponse, et ce qui se passe quand le modèle se trompe.
            </p>
            <div className="callout" data-build="box" data-by="UX">
              <p>
                <strong>Pas un agent qui remplacerait l’équipe.</strong> Pas une promesse de gain. La fiche <Link href="/ai">pour les machines</Link> dit ce que le site affirme, et ce qu’il ne faut pas inventer.
              </p>
              <Link className="btn" href="/developpement-logiciel-sur-mesure-maroc/automatisation">
                Lire l’automatisation <span>↗</span>
              </Link>
            </div>
            <p data-build="text">Les dossiers de l’écran d’exemple sont fictifs. Ils ne sont pas un client, ni un taux de précision.</p>
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
            <div className="cell" data-build="box" data-by="Stratégie"><span className="mono">Règle</span><p>Si l’étape est connue, elle s’écrit. Un modèle n’est pas ajouté pour le nom.</p></div>
            <div className="cell" data-build="box" data-by="Automatisation"><span className="mono">Modèle</span><p>Seulement si la forme change trop pour tenir dans une règle stable.</p></div>
            <div className="cell" data-build="box" data-by="Tests"><span className="mono">Erreur</span><p>Ce qui est une bonne réponse, et ce qui se passe quand le modèle se trompe.</p></div>
            <div className="cell" data-build="box" data-by="UX"><span className="mono">Humain</span><p>Une validation, un refus, un cas exceptionnel. Le logiciel prépare. Il ne signe pas à la place.</p></div>
            <div className="cell" data-build="box" data-by="Architecture"><span className="mono">Périmètre</span><p>Quel geste, quelles données, qui valide, et quel outil déjà payé reste.</p></div>
            <div className="cell" data-build="box" data-by="Frontend"><span className="mono">Remise</span><p>Le code, le dépôt et l’hébergement livrés reviennent à l’entreprise.</p></div>
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
            <li className="step" data-build="box" data-by="Stratégie"><span className="n">1</span><div className="b"><h3>Le geste</h3><p>Dire s’il tient dans une règle, ou s’il change à chaque dossier. Trois exemples suffisent si ce n’est pas clair.</p></div></li>
            <li className="step" data-build="box" data-by="Marketing"><span className="n">2</span><div className="b"><h3>Trente minutes</h3><p>La réponse peut être qu’une règle suffit. C’est une réponse.</p></div></li>
            <li className="step" data-build="box" data-by="Architecture"><span className="n">3</span><div className="b"><h3>Le périmètre</h3><p>Écrit avant le code. Pas de délai fixe : souvent plusieurs semaines pour le geste, pas pour « l’IA de l’entreprise ».</p></div></li>
            <li className="step" data-build="box" data-by="Produit"><span className="n">4</span><div className="b"><h3>La remise</h3><p>Code, dépôt et hébergement au nom de l’entreprise.</p></div></li>
          </ol>
        </div>
      </section>

      <section className="s" id="montant">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Le montant</p>
            <h2 data-build="text" data-by="Analytique">Pas de prix public pour « mettre de l’IA ».</h2>
          </div>
          <div className="prose">
            <p data-build="text" data-by="Rédaction">
              On ne publie pas un taux de précision, un nombre de dossiers traités, ou une économie en dirhams. Ces chiffres ne sont pas des faits du studio. Le montant suit le périmètre.
            </p>
            <p data-build="text">
              Pas sûr que ce soit un modèle ? <a href="#contact" onClick={() => trackCta("price")}>Décrivez le geste</a>. Le périmètre écrit vient avant le code et avant le montant.
            </p>
          </div>
        </div>
      </section>

      <section className="s alt" id="liens">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Offres</p>
            <h2 data-build="text" data-by="Produit">Le cadre, puis les décisions liées.</h2>
          </div>
          <div className="cities">
            <Link className="city" data-build="box" data-by="Automatisation" href="/developpement-logiciel-sur-mesure-maroc/automatisation">L’automatisation <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="SEO" href="/ai">La fiche pour les machines <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Contenu" href="/insights/automatisation-entreprise-avec-ia">Automatisation avec IA <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Rédaction" href="/insights/modele-apres-la-regle">Un modèle après la règle <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="Marketing" href="/insights/category/intelligence-artificielle">Décisions sur l’IA <span>↗</span></Link>
            <Link className="city" data-build="box" data-by="UX" href="/contact">Décrire le geste <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="s" id="faq">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Questions</p>
            <h2 data-build="text" data-by="Rédaction">Ce qu’on demande le plus.</h2>
          </div>
          <div>
            {iaEntrepriseFaqs.map((item) => (
              <details key={item.q} data-build="box">
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="s alt" id="english" lang="en">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">English</p>
            <h2 data-build="text" data-by="Rédaction">Artificial intelligence for a company in Morocco</h2>
          </div>
          <div className="prose">
            <p data-build="text">
              Artificial intelligence in a company in Morocco is not a separate product. Most often the action holds with a stable rule in the software. Byte Force, in Casablanca, writes a model only when that rule is not enough. No public price. <Link href="/contact">Write</Link> for the action, not for the word.
            </p>
            <p data-build="text">
              Many company actions are a rule: if the file is at this step, this person must act. That is written in the software. It does not need a model. A model makes sense when the action is not a stable rule: sorting very variable texts, reading a document whose shape changes. Someone must still be able to say what a good answer is, and what happens when the model is wrong.
            </p>
            <p data-build="text">
              Not an agent that would replace the team. Not a promise of gain. The software can prepare. It does not sign instead of the person when the company has not said it wanted that. Dealkhir, Coco Inbox and Zainek are not proof of artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="s" id="contact">
        <div className="wrap split">
          <div className="stick">
            <p className="label" data-build="box">Contact</p>
            <h2 data-build="text" data-by="Marketing">Envoyer les exemples.</h2>
            <p className="lede" data-build="text" style={{ marginTop: 18, fontSize: 15 }}>
              Réponse sous un jour ouvré, de 9 h à 19 h, à contact@byteforce.ma ou au +212 666 650 696. Article de <Link href="/walid-moultamiss">Walid Moultamiss</Link>.
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
              <select id="offre" name="offre" defaultValue="Logiciel sur mesure">
                <option>Logiciel sur mesure</option>
                <option>Automatisation</option>
                <option>Applications mobiles</option>
                <option>Audit et correction d’un site</option>
              </select>
            </div>
            <div className="f">
              <label htmlFor="type">Type de demande</label>
              <select id="type" name="type" defaultValue="Pas encore défini">
                <option>Pas encore défini</option>
                <option>Un correctif ou un audit</option>
                <option>Un nouveau produit</option>
                <option>Un suivi après livraison</option>
              </select>
            </div>
            <div className="f full"><label htmlFor="projet">Projet <i>*</i></label><textarea id="projet" name="projet" placeholder="Le geste, trois exemples, et si une personne doit encore valider." required /></div>
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
