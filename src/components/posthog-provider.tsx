"use client";

import posthog from "posthog-js";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Key comes from .env.production, so `next dev` never sends events.
const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;

if (key && typeof window !== "undefined" && !posthog.__loaded) {
  posthog.init(key, {
    api_host: "/ingest",
    ui_host: "https://us.posthog.com",
    defaults: "2026-08-30",
    capture_pageview: "history_change",
    capture_pageleave: true,
    autocapture: true,
    enable_heatmaps: true,
    capture_dead_clicks: true,
    capture_exceptions: true,
    capture_performance: { web_vitals: true },
    session_recording: { maskAllInputs: true },
  });
  posthog.register({ app: "builder-os-landing" });
}

export function track(event: string, properties?: Record<string, unknown>) {
  if (key) posthog.capture(event, properties);
}

// Where on the page a click happened: header, mobile drawer, a landing section id, or the route.
function locate(el: Element): string {
  if (el.closest("[data-vaul-drawer]")) return "drawer";
  if (el.closest("header")) return "header";
  if (el.closest("footer")) return "footer";
  const section = el.closest("section[id]");
  if (section) return section.id;
  return window.location.pathname;
}

function label(el: Element): string {
  return (el.getAttribute("aria-label") || el.textContent || "").trim().slice(0, 80);
}

function onClick(event: MouseEvent) {
  const target = event.target as Element | null;
  const tracked = target?.closest?.("[data-track-event]");
  if (tracked) {
    const props: Record<string, string> = { location: locate(tracked) };
    for (const [name, value] of Object.entries((tracked as HTMLElement).dataset)) {
      if (name.startsWith("track") && name !== "trackEvent") {
        props[name.slice(5).replace(/^./, (c) => c.toLowerCase())] = value ?? "";
      }
    }
    track(tracked.getAttribute("data-track-event")!, props);
    return;
  }

  const link = target?.closest?.("a[href]");
  if (!link) return;
  const href = link.getAttribute("href") ?? "";
  if (href === "/signup") track("signup_cta_clicked", { location: locate(link), label: label(link) });
  else if (href === "/login") track("login_cta_clicked", { location: locate(link), label: label(link) });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!key) return;
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  // section_viewed fires once per section per page load, so scroll depth on the landing page is visible.
  useEffect(() => {
    if (!key) return;
    const seen = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = (entry.target as HTMLElement).id;
          if (!entry.isIntersecting || seen.has(section)) continue;
          seen.add(section);
          track("section_viewed", { section, page: pathname });
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -40% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return <>{children}</>;
}
