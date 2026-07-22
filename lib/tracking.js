export const CONSENT_STORAGE_KEY = "enerix_cookie_consent_v1";
export const CONSENT_CHANGED_EVENT = "enerix:consent-changed";
export const LEAD_SUBMISSION_KEY = "enerix_lead_submission_v1";
export const LEAD_CONVERSION_KEY = "enerix_lead_conversion_v1";

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

export function markLeadSubmission() {
  if (typeof window === "undefined") return;

  try {
    window.sessionStorage.setItem(
      LEAD_SUBMISSION_KEY,
      JSON.stringify({ submittedAt: Date.now() })
    );
    window.sessionStorage.removeItem(LEAD_CONVERSION_KEY);
  } catch {
    // A blocked storage API must never prevent a successful form redirect.
  }
}

export function hasRecentLeadSubmission(maxAgeMs = 30 * 60 * 1000) {
  if (typeof window === "undefined") return false;

  try {
    const value = JSON.parse(
      window.sessionStorage.getItem(LEAD_SUBMISSION_KEY) || "null"
    );
    return Boolean(
      value?.submittedAt && Date.now() - value.submittedAt <= maxAgeMs
    );
  } catch {
    return false;
  }
}

export function markLeadConversionTracked() {
  if (typeof window === "undefined") return;
  try {
    window.sessionStorage.setItem(LEAD_CONVERSION_KEY, "1");
  } catch {
    // Tracking remains optional when storage is unavailable.
  }
}

export function wasLeadConversionTracked() {
  if (typeof window === "undefined") return false;
  try {
    return window.sessionStorage.getItem(LEAD_CONVERSION_KEY) === "1";
  } catch {
    return false;
  }
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
    if (eventName === "lead_form_submit") {
      window.fbq("track", "Lead", payload);
    } else {
      window.fbq("trackCustom", eventName, payload);
    }
  }

  if (hasAnalyticsConsent() || hasMarketingConsent()) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...payload,
    });
  }
}
