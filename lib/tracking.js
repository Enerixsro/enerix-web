export const CONSENT_STORAGE_KEY = "enerix_cookie_consent_v1";
export const CONSENT_CHANGED_EVENT = "enerix:consent-changed";

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getStoredConsent() {
  if (typeof window === "undefined") return null;

  try {
    const stored = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!stored) return null;

    return {
      ...defaultConsent,
      ...JSON.parse(stored),
      necessary: true,
    };
  } catch {
    return null;
  }
}

export function saveConsent(consent) {
  if (typeof window === "undefined") return;

  const nextConsent = {
    ...defaultConsent,
    ...consent,
    necessary: true,
  };

  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(nextConsent));
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGED_EVENT, { detail: nextConsent })
  );
}

export function hasAnalyticsConsent() {
  return Boolean(getStoredConsent()?.analytics);
}

export function hasMarketingConsent() {
  return Boolean(getStoredConsent()?.marketing);
}

export function pagePath() {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

export function slugify(value = "") {
  return value
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    page_path: pagePath(),
    ...params,
  };

  if (hasAnalyticsConsent() && typeof window.gtag === "function") {
    window.gtag("event", eventName, payload);
  }

  if (hasMarketingConsent() && typeof window.fbq === "function") {
    const metaEventName =
      eventName === "lead_form_submit" ? "Lead" : eventName;
    window.fbq("trackCustom", metaEventName, payload);
  }

  if (hasAnalyticsConsent() || hasMarketingConsent()) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }
}
