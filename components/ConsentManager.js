import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  CONSENT_CHANGED_EVENT,
  getStoredConsent,
  hasAnalyticsConsent,
  hasMarketingConsent,
  pagePath,
  saveConsent,
  trackEvent,
} from "../lib/tracking";

const GA_ID = process.env.NEXT_PUBLIC_GA4_MEASUREMENT_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const SKLIK_RETARGETING_ID = process.env.NEXT_PUBLIC_SKLIK_RETARGETING_ID;
const SKLIK_CONVERSION_ID = process.env.NEXT_PUBLIC_SKLIK_CONVERSION_ID;
const SKLIK_CONVERSION_VALUE =
  process.env.NEXT_PUBLIC_SKLIK_CONVERSION_VALUE || "1000";

function loadScript(id, src, onLoad) {
  if (typeof document === "undefined") return;
  if (document.getElementById(id)) {
    onLoad?.();
    return;
  }

  const script = document.createElement("script");
  script.id = id;
  script.async = true;
  script.src = src;
  script.onload = onLoad;
  document.head.appendChild(script);
}

function loadGa4() {
  if (!GA_ID || !hasAnalyticsConsent()) return;
  if (window.__enerixGa4Configured) return;

  loadScript("enerix-ga4", `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`);
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: hasMarketingConsent() ? "granted" : "denied",
    ad_user_data: hasMarketingConsent() ? "granted" : "denied",
    ad_personalization: hasMarketingConsent() ? "granted" : "denied",
  });
  window.gtag("config", GA_ID, {
    send_page_view: false,
  });
  window.__enerixGa4Configured = true;
}

function loadMetaPixel() {
  if (!META_PIXEL_ID || !hasMarketingConsent() || window.fbq) return;

  window.fbq = function fbq() {
    window.fbq.callMethod
      ? window.fbq.callMethod.apply(window.fbq, arguments)
      : window.fbq.queue.push(arguments);
  };
  if (!window._fbq) window._fbq = window.fbq;
  window.fbq.push = window.fbq;
  window.fbq.loaded = true;
  window.fbq.version = "2.0";
  window.fbq.queue = [];

  loadScript("enerix-meta-pixel", "https://connect.facebook.net/en_US/fbevents.js");
  window.fbq("init", META_PIXEL_ID);
}

function fireSklikRetargeting() {
  if (!SKLIK_RETARGETING_ID || !hasMarketingConsent()) return;

  const run = () => {
    if (window.sznIVA?.IS && window.rc?.retargetingHit) {
      window.sznIVA.IS.updateIdentities({ eid: null });
      window.rc.retargetingHit({
        rtgId: Number(SKLIK_RETARGETING_ID),
        consent: 1,
      });
      return;
    }

    window.setTimeout(run, 300);
  };

  loadScript("enerix-sklik-rc", "https://c.seznam.cz/js/rc.js", run);
}

function fireSklikConversion() {
  if (!SKLIK_CONVERSION_ID || !hasMarketingConsent()) return;

  const run = () => {
    if (window.sznIVA?.IS && window.rc?.conversionHit) {
      window.sznIVA.IS.updateIdentities({ eid: null });
      window.rc.conversionHit({
        id: Number(SKLIK_CONVERSION_ID),
        value: Number(SKLIK_CONVERSION_VALUE),
        consent: 1,
      });
      return;
    }

    window.setTimeout(run, 300);
  };

  loadScript("enerix-sklik-rc", "https://c.seznam.cz/js/rc.js", run);
}

function activateConsentedTools() {
  loadGa4();
  loadMetaPixel();
}

function trackPageView(path) {
  if (hasAnalyticsConsent() && typeof window.gtag === "function" && GA_ID) {
    window.gtag("event", "page_view", { page_path: path });
  }

  if (hasMarketingConsent() && typeof window.fbq === "function") {
    window.fbq("track", "PageView");
  }

  fireSklikRetargeting();
}

function trackBusinessPageEvents(path) {
  const articleMatch = path.match(/^\/znalostni-centrum\/([^/?#]+)/);
  if (articleMatch) {
    trackEvent("article_view", {
      article_slug: articleMatch[1],
    });
  }

  if (path.startsWith("/spoluprace")) {
    trackEvent("partner_page_view");
  }

  if (path.startsWith("/dekujeme")) {
    trackEvent("lead_form_submit", {
      cta_location: "thank_you_page",
    });
    fireSklikConversion();
  }
}

export default function ConsentManager() {
  const router = useRouter();
  const [consent, setConsent] = useState(null);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [draft, setDraft] = useState({ analytics: false, marketing: false });

  useEffect(() => {
    const storedConsent = getStoredConsent();
    setConsent(storedConsent);
    if (storedConsent) {
      setDraft(storedConsent);
      activateConsentedTools();
    }

    window.EnerixConsent = {
      openPreferences: () => {
        const current = getStoredConsent() || {
          necessary: true,
          analytics: false,
          marketing: false,
        };
        setDraft(current);
        setSettingsOpen(true);
      },
    };

    const handleConsentChanged = (event) => {
      setConsent(event.detail);
      setDraft(event.detail);
    };

    window.addEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged);
    return () => {
      window.removeEventListener(CONSENT_CHANGED_EVENT, handleConsentChanged);
    };
  }, []);

  useEffect(() => {
    if (!consent) return;

    const handleRoute = (url) => {
      activateConsentedTools();
      trackPageView(url);
      trackBusinessPageEvents(url);
    };

    handleRoute(pagePath());
    router.events.on("routeChangeComplete", handleRoute);
    return () => router.events.off("routeChangeComplete", handleRoute);
  }, [consent, router.events]);

  useEffect(() => {
    const startedForms = new WeakSet();

    const handleFocusIn = (event) => {
      const form = event.target.closest?.("form");
      if (!form || startedForms.has(form)) return;

      startedForms.add(form);
      trackEvent("lead_form_start", {
        cta_location: form.id || "contact_form",
      });
    };

    const handleClick = (event) => {
      const target = event.target.closest?.("a,button");
      if (!target) return;

      const href = target.getAttribute("href") || "";
      const path = window.location.pathname;
      const articleMatch = path.match(/^\/znalostni-centrum\/([^/?#]+)/);

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          cta_location: target.dataset.ctaLocation || "link",
        });
        return;
      }

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          cta_location: target.dataset.ctaLocation || "link",
        });
        return;
      }

      if (target.dataset.serviceSlug) {
        trackEvent("service_click", {
          service_slug: target.dataset.serviceSlug,
          cta_location: target.dataset.ctaLocation || "services_grid",
        });
        return;
      }

      if (articleMatch && href.includes("#kontakt")) {
        trackEvent("article_cta_click", {
          article_slug: articleMatch[1],
          cta_location: target.dataset.ctaLocation || "article",
        });
      }
    };

    document.addEventListener("focusin", handleFocusIn);
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("focusin", handleFocusIn);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const applyConsent = (nextConsent) => {
    saveConsent(nextConsent);
    setSettingsOpen(false);
  };

  const showBanner = consent === null && !settingsOpen;

  return (
    <>
      {showBanner && (
        <div className="fixed inset-x-0 bottom-0 z-50 px-3 pb-3 sm:px-5 sm:pb-5">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.24)] ring-1 ring-slate-900/5">
            <div className="h-1.5 bg-green-600" />
            <div className="flex flex-col gap-5 px-5 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-8">
              <div className="max-w-2xl">
                <div className="text-base font-bold text-slate-950">
                  Nastavení soukromí
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nezbytné cookies zajišťují správné fungování webu. Analytiku
                  a marketing spustíme pouze s vaším souhlasem.
                </p>
              </div>
              <div className="grid gap-2 sm:grid-cols-3 md:min-w-[430px]">
              <button
                type="button"
                onClick={() =>
                  applyConsent({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  })
                }
                className="rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={() => setSettingsOpen(true)}
                className="rounded-lg border border-green-300 bg-green-50/60 px-4 py-3 text-sm font-semibold text-green-800 transition hover:border-green-500 hover:bg-green-50"
              >
                Nastavení
              </button>
              <button
                type="button"
                onClick={() =>
                  applyConsent({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="rounded-lg bg-green-700 px-4 py-3 text-sm font-bold text-white shadow-lg shadow-green-900/20 transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Přijmout vše
              </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 z-50 flex items-end bg-slate-950/40 px-4 py-5 sm:items-center sm:justify-center">
          <div className="w-full max-w-lg rounded-lg bg-white p-5 shadow-2xl">
            <div className="text-lg font-bold text-slate-900">
              Nastavení cookies
            </div>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Souhlas můžete kdykoliv změnit přes odkaz v patičce.
            </p>

            <div className="mt-5 space-y-3">
              <label className="flex items-start justify-between gap-5 rounded-md border border-slate-200 p-4">
                <span>
                  <span className="block font-semibold text-slate-900">
                    Analytika
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-slate-600">
                    Pomáhá měřit návštěvnost a obchodní události.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={draft.analytics}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      analytics: event.target.checked,
                    }))
                  }
                  className="mt-1 h-5 w-5"
                />
              </label>

              <label className="flex items-start justify-between gap-5 rounded-md border border-slate-200 p-4">
                <span>
                  <span className="block font-semibold text-slate-900">
                    Marketing
                  </span>
                  <span className="mt-1 block text-sm leading-5 text-slate-600">
                    Umožňuje Meta Pixel a Sklik retargeting/konverze.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={draft.marketing}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      marketing: event.target.checked,
                    }))
                  }
                  className="mt-1 h-5 w-5"
                />
              </label>
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() =>
                  applyConsent({
                    necessary: true,
                    analytics: false,
                    marketing: false,
                  })
                }
                className="rounded-md border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
              >
                Odmítnout vše
              </button>
              <button
                type="button"
                onClick={() => applyConsent(draft)}
                className="rounded-md border border-green-300 px-4 py-2 text-sm font-semibold text-green-800"
              >
                Uložit nastavení
              </button>
              <button
                type="button"
                onClick={() =>
                  applyConsent({
                    necessary: true,
                    analytics: true,
                    marketing: true,
                  })
                }
                className="rounded-md bg-green-700 px-4 py-2 text-sm font-semibold text-white"
              >
                Přijmout vše
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
