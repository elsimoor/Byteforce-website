function Menu() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2 4h12M2 8h12M2 12h12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function Search() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="7" cy="7" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.2 10.2 13.5 13.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function LeafMark() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 13.5c0-4 2.2-7.2 6-8.2-1.2 4.6-3.6 7-6 8.2Z" fill="#1aa37a" />
      <path d="M8 13.5C8 9.5 5.8 6.3 2 5.3c1.2 4.6 3.6 7 6 8.2Z" fill="#0d6a56" />
    </svg>
  );
}

function Heart() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 13.4 3.1 8.6a2.7 2.7 0 0 1 3.8-3.8L8 6l1.1-1.2a2.7 2.7 0 0 1 3.8 3.8Z" fill="none" stroke="#d25b73" strokeWidth="1.4" />
    </svg>
  );
}

function Home() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M2.5 7.2 8 2.8l5.5 4.4V13a1 1 0 0 1-1 1h-3.2V9.6H6.7V14H3.5a1 1 0 0 1-1-1Z" fill="currentColor" />
    </svg>
  );
}

function Circle() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function Gear() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="2.1" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8 1.8v1.7M8 12.5v1.7M1.8 8h1.7M12.5 8h1.7M3.4 3.4l1.2 1.2M11.4 11.4l1.2 1.2M12.6 3.4l-1.2 1.2M4.6 11.4l-1.2 1.2" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function Drop() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.2c2.4 3 4 4.8 4 7.1a4 4 0 0 1-8 0c0-2.3 1.6-4.1 4-7.1Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function Soil() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M3 10.5c1.2-2 2.4-2 3.2 0s2 .2 3.2-2 2.2-2 3.6 0" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M2.5 12.5h11" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function Sun() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="2.2" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 2.4v1.5M8 12.1v1.5M2.4 8h1.5M12.1 8h1.5M4 4l1.1 1.1M10.9 10.9 12 12M12 4l-1.1 1.1M5.1 10.9 4 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function Thermo() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M7 2.5h2v6.2a2.4 2.4 0 1 1-2 0Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 8.2v2.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function Warn() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 2.4 14.2 13H1.8Z" fill="none" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 6.2v3.2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="8" cy="11.2" r="0.6" fill="currentColor" />
    </svg>
  );
}

function Chevron() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M4.5 6.2 8 9.8l3.5-3.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function Back() {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10 3.5 5.5 8 10 12.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Pot() {
  return (
    <>
      <path d="M24 68h32v6c0 9-7 15-16 15S24 83 24 74Z" fill="#e7cb8c" />
      <path d="M22 66h36v5c0 2-2 3-4 3H26c-2 0-4-1-4-3Z" fill="#3d3428" />
    </>
  );
}

function Snake({ onDark = false }: { onDark?: boolean }) {
  const a = onDark ? "#d9fbe8" : "#0e6b54";
  const b = onDark ? "#9ee0bf" : "#14956f";
  const c = onDark ? "#f4fff8" : "#1aa37a";
  const d = onDark ? "#6fbf96" : "#8fd4ae";
  return (
    <svg viewBox="0 0 80 96" aria-hidden="true">
      <path d="M36 72 16 36c-3-10 2-18 12-14Z" fill={a} />
      <path d="M44 72 66 32c5-12-2-18-12-12Z" fill={b} />
      <path d="M40 74 28 22c-2-12 6-18 14-10Z" fill={c} />
      <path d="M40 74 54 20c4-12-6-18-14-8Z" fill={d} />
      <path d="M40 74 46 28c2-8-2-12-6-8Z" fill={onDark ? "#3e9a72" : "#e8fff4"} />
      <Pot />
    </svg>
  );
}

function Bush() {
  return (
    <svg viewBox="0 0 80 96" aria-hidden="true">
      <ellipse cx="26" cy="42" rx="14" ry="18" fill="#d9fbe8" />
      <ellipse cx="54" cy="40" rx="14" ry="18" fill="#9ee0bf" />
      <ellipse cx="40" cy="48" rx="16" ry="18" fill="#f4fff8" />
      <ellipse cx="34" cy="34" rx="10" ry="14" fill="#7dceaa" />
      <ellipse cx="48" cy="32" rx="9" ry="12" fill="#c8f3dc" />
      <Pot />
    </svg>
  );
}

function MiniPlant() {
  return (
    <svg className="thumb" viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="16" cy="16" r="15" fill="#e7f8ef" />
      <path d="M16 22 11 12c-1-3 1-5 4-4Z" fill="#0e6b54" />
      <path d="M16 22 21 11c1-3-1-5-4-4Z" fill="#1aa37a" />
      <path d="M16 22 16 10c0-3 2-4 3-2Z" fill="#8fd4ae" />
      <path d="M11 21h10v2c0 2-2 3-5 3s-5-1-5-3Z" fill="#e7cb8c" />
      <path d="M10 20h12v1.6H10Z" fill="#3d3428" />
    </svg>
  );
}

function Nav() {
  return (
    <div className="device-nav" aria-hidden="true">
      <Home />
      <Search />
      <Circle />
      <Gear />
    </div>
  );
}

export function PlantPhones() {
  return (
    <div className="stage">
      <div className="devices">
        <div className="device" data-build="box" data-by="Design">
          <div className="device-screen">
            <div className="device-bar">
              <Menu />
              <LeafMark />
              <Search />
            </div>
            <p className="device-title">Mes plantes</p>
            <div className="plant-grid" data-build="box" data-by="UX">
              <article className="plant-tile">
                <Snake onDark />
                <b>Plante A</b>
                <small>À arroser</small>
              </article>
              <article className="plant-tile">
                <Bush />
                <b>Plante B</b>
                <small>Lumière douce</small>
              </article>
            </div>
            <div className="shop" data-build="box" data-by="Contenu">
              <p className="shop-label">Boutique</p>
              <div className="shop-row">
                <MiniPlant />
                <div>
                  <b>Plante C</b>
                  <small>Intérieur</small>
                </div>
                <Heart />
              </div>
              <div className="shop-row">
                <MiniPlant />
                <div>
                  <b>Plante D</b>
                  <small>Balcon</small>
                </div>
                <Heart />
              </div>
              <div className="shop-row">
                <MiniPlant />
                <div>
                  <b>Plante E</b>
                  <small>Bureau</small>
                </div>
                <Heart />
              </div>
            </div>
            <Nav />
          </div>
        </div>
        <div className="device" data-build="box" data-by="Frontend">
          <div className="device-screen">
            <div className="device-bar">
              <span className="device-back">
                <Back />
                Mes plantes
              </span>
              <LeafMark />
              <Search />
            </div>
            <p className="device-title">Plante A</p>
            <p className="device-sub">3 semaines</p>
            <div className="detail" data-build="box" data-by="Produit">
              <Snake />
              <ul className="stats">
                <li className="stat">
                  <Drop />
                  <span>
                    <b>14 %</b>
                    humidité
                  </span>
                </li>
                <li className="stat">
                  <Soil />
                  <span>
                    <b>73 %</b>
                    terreau
                  </span>
                </li>
                <li className="stat">
                  <Sun />
                  <span>
                    <b>douce</b>
                    lumière
                  </span>
                </li>
                <li className="stat">
                  <Thermo />
                  <span>
                    <b>18–23 °C</b>
                    météo
                  </span>
                </li>
              </ul>
            </div>
            <div className="sheet" data-build="box" data-by="Tests">
              <div className="alert-row">
                <Warn />
                <div>
                  <b>Alerte</b>
                  <span>À arroser</span>
                </div>
                <Chevron />
              </div>
              <b>Plante A</b>
              <p>Un rappel d’arrosage pour cette fiche, avant le prochain geste.</p>
            </div>
            <Nav />
          </div>
        </div>
      </div>
      <p className="cap" data-build="box">
        ÉCRAN D’EXEMPLE · DONNÉES FICTIVES
      </p>
    </div>
  );
}
