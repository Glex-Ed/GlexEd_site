// Lightweight analytics wrapper.
// Pushes events to GTM dataLayer and gtag (if loaded). Falls back to
// console.debug in development. Safe for SSR.

type Props = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export function track(event: string, props: Props = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    ...props,
    timestamp: new Date().toISOString(),
    page_path: window.location.pathname + window.location.search,
  };

  try {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
    if (typeof window.gtag === "function") {
      window.gtag("event", event, props);
    }
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", event, props);
    }
  } catch (err) {
    // Never let analytics break the UI
    // eslint-disable-next-line no-console
    console.warn("[analytics] failed", err);
  }
}

// Convenience helpers used across CTAs / forms.
export const trackCtaClick = (location: string, label: string, destination?: string) =>
  track("cta_click", { location, label, destination });

export const trackFormSubmit = (
  formName: string,
  status: "success" | "error",
  source?: string,
) => track("form_submit", { form_name: formName, status, source });
