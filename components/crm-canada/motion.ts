"use client";

import { recordLead } from "@/lib/actions";

type BuildEl = HTMLElement & {
  _ws?: HTMLElement[];
  _q?: number;
  _qt?: number;
  _done?: number;
  _active?: number;
};

type Cursor = {
  el: HTMLElement;
  name: string;
  color: string;
  x: number;
  y: number;
  tx: number;
  ty: number;
  bx: number;
  by: number;
  vx: number;
  rot: number;
  ph: number;
  g: string;
  next: number;
  boost: number;
  op?: number;
  merged?: boolean;
  task: null | {
    el: BuildEl;
    phase: string;
    t0: number;
    ov: HTMLElement | null;
    dms?: number;
    fms?: number;
  };
};

const agents = [
  ["Design", "#EC4899"],
  ["Stratégie", "#8B5CF6"],
  ["Frontend", "#3B82F6"],
  ["Contenu", "#D97706"],
  ["UX", "#059669"],
  ["Logique CRM", "#DB2777"],
  ["Analytique", "#0891B2"],
  ["SEO", "#9333EA"],
  ["Motion", "#EA580C"],
  ["Architecture", "#0D9488"],
  ["Rédaction", "#C026D3"],
  ["Tests", "#64748B"],
  ["Marketing", "#DC2626"],
  ["Produit", "#65A30D"],
  ["Automatisation", "#4F46E5"],
] as const;

type MotionCopy = {
  intro: string;
  subject: string;
  country: string;
  city: string;
  pageUrl: string;
};

const canadaCopy: MotionCopy = {
  intro: "Bonjour Byte Force, je souhaite décrire un projet (CRM au Canada).",
  subject: "Projet CRM au Canada",
  country: "Canada",
  city: "Canada",
  pageUrl: "https://byteforce.ma/geo-location/crm/ca",
};

export function startCrmCanadaMotion(root: HTMLElement, copy: MotionCopy = canadaCopy) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fx = !reduce;
  if (fx) root.classList.add("fx");

  const form = root.querySelector<HTMLFormElement>("#f");
  const result = root.querySelector<HTMLElement>("#res");
  const message = root.querySelector<HTMLTextAreaElement>("#msg");
  const onSubmit = (event: Event) => {
    event.preventDefault();
    if (!form || !result || !message) return;
    const value = (id: string) => (root.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(`#${id}`)?.value ?? "").trim();
    if (!value("nom") || !value("email") || !value("projet")) {
      form.reportValidity();
      return;
    }
    const text = [
      copy.intro,
      "",
      `Nom : ${value("nom")}`,
      `Société : ${value("soc") || "-"}`,
      `Email : ${value("email")}`,
      `Téléphone : ${value("tel") || "-"}`,
      `Offre : ${value("offre")}`,
      `Type de demande : ${value("type")}`,
      `Site : ${value("site") || "-"}`,
      "",
      `Projet : ${value("projet")}`,
    ].join("\n");
    message.value = text;
    const wa = root.querySelector<HTMLAnchorElement>("#wa");
    const mail = root.querySelector<HTMLAnchorElement>("#ml");
    if (wa) wa.href = `https://wa.me/212666650696?text=${encodeURIComponent(text)}`;
    if (mail) mail.href = `mailto:contact@byteforce.ma?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(text)}`;
    result.hidden = false;
    result.scrollIntoView({ block: "nearest", behavior: "smooth" });
    void recordLead({
      name: value("nom"),
      email: value("email"),
      phone: value("tel"),
      company: value("soc"),
      service: value("offre"),
      budget: value("type"),
      message: value("projet"),
      company_website: value("company_website"),
      country: copy.country,
      city: copy.city,
      pageUrl: copy.pageUrl,
      turnstile: form.dataset.turnstile ?? "",
    });
  };
  const onCopy = () => {
    const button = root.querySelector<HTMLButtonElement>("#cp");
    if (!button || !message) return;
    const done = (label: string) => {
      button.textContent = label;
      window.setTimeout(() => {
        button.textContent = "Copier le message";
      }, 1800);
    };
    navigator.clipboard.writeText(message.value).then(
      () => done("Copié"),
      () => {
        message.focus();
        message.select();
        done("Texte sélectionné");
      },
    );
  };
  form?.addEventListener("submit", onSubmit);
  root.querySelector("#cp")?.addEventListener("click", onCopy);

  if (!fx) {
    return () => {
      form?.removeEventListener("submit", onSubmit);
      root.querySelector("#cp")?.removeEventListener("click", onCopy);
    };
  }

  const items = [...root.querySelectorAll<BuildEl>("[data-build]")];
  const layerEl = root.querySelector<HTMLElement>("#layer");
  if (!layerEl) return () => undefined;
  const layer: HTMLElement = layerEl;

  function split(el: BuildEl) {
    if (el.dataset.split === "1") return [...el.querySelectorAll<HTMLElement>(".w")];
    el.dataset.split = "1";
    const walk = (node: Node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const fragment = document.createDocumentFragment();
          child.textContent?.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) fragment.appendChild(document.createTextNode(part));
            else {
              const word = document.createElement("span");
              word.className = "w";
              word.textContent = part;
              fragment.appendChild(word);
            }
          });
          child.replaceWith(fragment);
        } else if (child.nodeType === 1) {
          const element = child as HTMLElement;
          if (element.tagName === "BR") return;
          if (element.classList.contains("nosplit")) {
            element.classList.add("w");
            return;
          }
          walk(element);
        }
      });
    };
    walk(el);
    return [...el.querySelectorAll<HTMLElement>(".w")];
  }

  items.forEach((el) => {
    if (el.dataset.build === "text") el._ws = split(el);
  });

  const small = window.innerWidth < 700;
  const count = small ? 8 : 15;
  const maxActive = small ? 3 : 4;
  const whatsappAgents = new Set(["UX", "Architecture", "Produit"]);
  const cursors: Cursor[] = [];

  function wander(cursor: Cursor, now: number) {
    cursor.bx = 24 + Math.random() * Math.max(60, window.innerWidth - 170);
    cursor.by = 76 + Math.random() * Math.max(60, window.innerHeight - 130);
    cursor.next = now + 1600 + Math.random() * 2600;
  }

  agents.slice(0, count).forEach((agent) => {
    const el = document.createElement("div");
    el.className = "cur";
    el.style.setProperty("--c", agent[1]);
    el.innerHTML = `<svg viewBox="0 0 20 24" width="20" height="24"><path d="M2 1L2 19L7 14L11 22L15 20L11 12L18 11Z" fill="${agent[1]}" stroke="#fff" stroke-width="1.5"/></svg><span class="nm">${agent[0]}</span>`;
    layer.appendChild(el);
    const cursor: Cursor = {
      el,
      name: agent[0],
      color: agent[1],
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      tx: 0,
      ty: 0,
      bx: 0,
      by: 0,
      vx: 0,
      rot: 0,
      ph: Math.random() * 6.28,
      g: whatsappAgents.has(agent[0]) ? "wa" : "main",
      next: 0,
      boost: 0,
      task: null,
    };
    wander(cursor, 0);
    cursors.push(cursor);
  });

  const pending: BuildEl[] = [];
  let active = 0;
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as BuildEl;
        if (entry.isIntersecting && !el._q) {
          el._q = 1;
          el._qt = performance.now();
          pending.push(el);
          observer.unobserve(el);
        }
      });
    },
    { rootMargin: "0px 0px -6% 0px" },
  );
  items.forEach((el) => observer.observe(el));

  function reveal(el: BuildEl, instant: boolean) {
    if (el._done) return 0;
    el._done = 1;
    let duration = 650;
    if (el._ws) {
      const step = instant ? 0 : Math.min(30, 1000 / Math.max(el._ws.length, 1));
      el._ws.forEach((word, index) => word.style.setProperty("--k", String(Math.round(index * step))));
      duration = el._ws.length * step + 450;
    }
    if (instant) el.classList.add("now");
    el.classList.add("is-in");
    return duration;
  }

  function revealNow(el: BuildEl) {
    const index = pending.indexOf(el);
    if (index > -1) pending.splice(index, 1);
    reveal(el, true);
  }

  const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
  const ease = (progress: number) => 1 - (1 - progress) ** 3;

  function pick(el: BuildEl) {
    const idle = cursors.filter((cursor) => !cursor.task);
    const owner = el.dataset.by;
    if (owner) {
      const named = idle.find((cursor) => cursor.name === owner);
      if (named) return named;
    }
    const box = el.getBoundingClientRect();
    idle.sort((a, b) => Math.hypot(a.x - box.left, a.y - box.top) - Math.hypot(b.x - box.left, b.y - box.top));
    return idle[Math.floor(Math.random() * Math.min(3, idle.length))];
  }

  function startTasks(now: number) {
    while (active < maxActive && pending.length) {
      pending.sort((a, b) => a.getBoundingClientRect().top - b.getBoundingClientRect().top);
      const el = pending.shift();
      if (!el) break;
      const cursor = pick(el);
      if (!cursor) {
        pending.unshift(el);
        break;
      }
      cursor.task = { el, phase: "fly", t0: now, ov: null };
      active += 1;
      el._active = 1;
    }
  }

  function selection(cursor: Cursor) {
    const box = document.createElement("div");
    box.className = "sel";
    box.style.setProperty("--c", cursor.color);
    box.innerHTML = "<i></i><i></i><i></i><i></i>";
    layer.appendChild(box);
    return box;
  }

  function placeSelection(box: HTMLElement, rect: DOMRect, scale: number) {
    box.style.transform = `translate(${rect.left - 6}px,${rect.top - 6}px)`;
    box.style.width = `${Math.max(0, (rect.width + 12) * scale)}px`;
    box.style.height = `${Math.max(0, (rect.height + 12) * scale)}px`;
  }

  let mode = "work";
  let idleSince = performance.now();
  let lastScroll = performance.now();
  const dock = root.querySelector<HTMLElement>("#dock");
  const dockSlot = root.querySelector<HTMLElement>("#dslot");
  const waSlot = root.querySelector<HTMLElement>("#wslot");
  const lead = cursors[0];
  const waLead = cursors.find((cursor) => cursor.g === "wa");
  lead?.el.classList.add("cur-main");
  if (waLead) waLead.el.classList.add("cur-main", "cur-wa");

  const markScroll = () => {
    lastScroll = performance.now();
  };
  ["scroll", "wheel", "touchmove", "keydown"].forEach((name) => window.addEventListener(name, markScroll, { passive: true }));

  function dockUp() {
    mode = "dock";
    layer.classList.add("docked");
    dock?.classList.remove("boom");
    dock?.classList.add("on");
  }

  function explode(now: number) {
    mode = "work";
    layer.classList.remove("docked");
    dock?.classList.remove("on");
    dock?.classList.add("boom");
    window.setTimeout(() => dock?.classList.remove("boom"), 480);
    cursors.forEach((cursor) => {
      wander(cursor, now);
      cursor.boost = now + 800;
      cursor.next = now + 1200 + Math.random() * 2000;
    });
  }

  let last = performance.now();
  let lastSlow = 0;
  let frame = 0;

  function tick(now: number) {
    const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
    last = now;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const busy = pending.length > 0 || active > 0;
    if (busy) {
      idleSince = now;
      if (mode === "dock") explode(now);
    } else if (mode === "work" && now - idleSince > 1500 && now - lastScroll > 1200) {
      dockUp();
    }
    if (mode === "work") startTasks(now);
    const dockRect = mode === "dock" ? dockSlot?.getBoundingClientRect() : null;
    const waRect = mode === "dock" ? waSlot?.getBoundingClientRect() : null;
    const useWa = Boolean(waRect && waRect.width > 0);
    cursors.forEach((cursor) => {
      const task = cursor.task;
      if (task) {
        const rect = task.el.getBoundingClientRect();
        if (task.phase === "fly") {
          cursor.tx = clamp(rect.left, 16, width - 150);
          cursor.ty = clamp(rect.top, 70, height - 40);
          if (Math.hypot(cursor.tx - cursor.x, cursor.ty - cursor.y) < 36 || now - task.t0 > 1400) {
            task.phase = "draw";
            task.t0 = now;
            task.ov = selection(cursor);
            task.dms = clamp(260 + (rect.width + rect.height) * 0.22, 380, 950);
          }
        } else if (task.phase === "draw" && task.ov && task.dms) {
          const progress = Math.min(1, (now - task.t0) / task.dms);
          const eased = ease(progress);
          cursor.tx = clamp(rect.left + rect.width * eased, 16, width - 150);
          cursor.ty = clamp(rect.top + rect.height * eased, 70, height - 40);
          placeSelection(task.ov, rect, eased);
          if (progress >= 1) {
            task.phase = "fill";
            task.t0 = now;
            task.fms = reveal(task.el, false);
          }
        } else if (task.phase === "fill" && task.ov) {
          cursor.tx = clamp(rect.right - 10, 16, width - 150);
          cursor.ty = clamp(rect.bottom - 10, 70, height - 40);
          placeSelection(task.ov, rect, 1);
          if (task.fms != null && now - task.t0 > task.fms) {
            task.phase = "done";
            task.t0 = now;
            task.ov.classList.add("out");
          }
        } else if (task.ov) {
          placeSelection(task.ov, rect, 1);
          if (now - task.t0 > 380) {
            task.ov.remove();
            cursor.task = null;
            active -= 1;
            task.el._active = 0;
            wander(cursor, now);
          }
        }
      } else if (mode === "dock" && dockRect) {
        const target = cursor.g === "wa" && useWa && waRect ? waRect : dockRect;
        cursor.tx = target.left;
        cursor.ty = target.top;
      } else {
        if (now > cursor.next) wander(cursor, now);
        cursor.tx = cursor.bx + Math.sin(now / 900 + cursor.ph) * 34;
        cursor.ty = cursor.by + Math.cos(now / 1100 + cursor.ph) * 26;
      }
      const speed = cursor.task ? 9 : mode === "dock" ? 5.5 : now < cursor.boost ? 7 : 2.1;
      const blend = 1 - Math.exp(-speed * dt);
      const nextX = cursor.x + (cursor.tx - cursor.x) * blend;
      cursor.vx = (nextX - cursor.x) / Math.max(dt, 0.001);
      cursor.x = nextX;
      cursor.y = cursor.y + (cursor.ty - cursor.y) * blend;
      cursor.rot += (clamp(cursor.vx * 0.012, -14, 14) - cursor.rot) * 0.15;
      cursor.merged = mode === "dock" && Math.hypot(cursor.tx - cursor.x, cursor.ty - cursor.y) < 12;
      const leadCursor = cursor === lead || (useWa && cursor === waLead);
      const opacity = cursor.merged && !leadCursor ? 0 : 1;
      if (opacity !== cursor.op) {
        cursor.op = opacity;
        cursor.el.style.opacity = String(opacity);
      }
      cursor.el.style.transform = `translate3d(${cursor.x.toFixed(1)}px,${cursor.y.toFixed(1)}px,0) rotate(${cursor.rot.toFixed(1)}deg)`;
    });
    if (now - lastSlow > 300) {
      lastSlow = now;
      items.forEach((el) => {
        if (el._done || el._active) return;
        const rect = el.getBoundingClientRect();
        if (rect.bottom < -10 || (el._qt && now - el._qt > 7000)) revealNow(el);
      });
    }
    frame = requestAnimationFrame(tick);
  }
  frame = requestAnimationFrame(tick);

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    form?.removeEventListener("submit", onSubmit);
    root.querySelector("#cp")?.removeEventListener("click", onCopy);
    ["scroll", "wheel", "touchmove", "keydown"].forEach((name) => window.removeEventListener(name, markScroll));
    layer.replaceChildren();
  };
}
