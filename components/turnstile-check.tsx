"use client";

import { useEffect, useRef } from "react";

type TurnstileApi = {
  render: (
    element: HTMLElement,
    options: {
      sitekey: string;
      theme: "light";
      callback: (token: string) => void;
      "expired-callback": () => void;
      "error-callback": () => void;
    },
  ) => string;
  remove: (id: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const scriptSrc = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function TurnstileCheck({ onToken }: { onToken: (token: string) => void }) {
  const holder = useRef<HTMLDivElement>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

  useEffect(() => {
    if (!siteKey || !holder.current) return;
    let widgetId = "";
    let alive = true;

    function render() {
      if (!alive || !holder.current || !window.turnstile || widgetId) return;
      widgetId = window.turnstile.render(holder.current, {
        sitekey: siteKey,
        theme: "light",
        callback: (token) => onTokenRef.current(token),
        "expired-callback": () => onTokenRef.current(""),
        "error-callback": () => onTokenRef.current(""),
      });
    }

    if (window.turnstile) {
      render();
      return () => {
        alive = false;
        if (widgetId) window.turnstile?.remove(widgetId);
      };
    }

    let script = document.querySelector<HTMLScriptElement>(`script[src="${scriptSrc}"]`);
    if (!script) {
      script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
    script.addEventListener("load", render);
    return () => {
      alive = false;
      script?.removeEventListener("load", render);
      if (widgetId) window.turnstile?.remove(widgetId);
    };
  }, [siteKey]);

  if (!siteKey) {
    return <p className="text-sm">La vérification Cloudflare n&apos;est pas prête sur ce site.</p>;
  }

  return <div ref={holder} className="min-h-16" />;
}
