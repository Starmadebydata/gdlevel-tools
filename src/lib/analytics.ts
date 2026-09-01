/**
 * GA4 事件封装。Consent Mode 为 denied 时仍会发无 cookie ping。
 * 在 GA4 后台把 search / planner_complete / submit_level 标成关键事件。
 */

export type AnalyticsParams = Record<string, string | number | boolean | undefined>;

function isDebugMode(): boolean {
  return /(?:^|[?&])debug_mode=(?:1|true)(?:&|$)/i.test(window.location.search);
}

export function trackEvent(name: string, params?: AnalyticsParams): void {
  if (typeof window === "undefined") return;

  const payload: AnalyticsParams = { ...(params ?? {}) };
  if (isDebugMode()) payload.debug_mode = true;

  const cleaned = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined)
  );

  if (typeof window.gtag === "function") {
    window.gtag("event", name, cleaned);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(["event", name, cleaned]);
}

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
