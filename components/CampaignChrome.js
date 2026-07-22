import CookieSettingsLink from "./CookieSettingsLink";

export function CampaignHeader({ ctaHref, ctaLabel }) {
  return (
    <header className="border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
        <a href="/" className="flex min-h-11 items-center gap-3" aria-label="Enerix – hlavní stránka">
          <img src="/enerix-symbol.png" alt="" className="h-10 w-10" />
          <div>
            <div className="font-bold tracking-[0.12em] text-slate-950">ENERIX</div>
            <div className="hidden text-xs text-slate-500 sm:block">
              Chytré renovace pro váš dům
            </div>
          </div>
        </a>

        <div className="flex items-center gap-3">
          <a
            href="tel:+420720480861"
            data-cta-location="campaign_header"
            className="hidden min-h-11 items-center font-semibold text-slate-700 transition hover:text-green-700 sm:inline-flex"
          >
            720 480 861
          </a>
          <a
            href={ctaHref}
            data-campaign-cta={ctaLabel}
            data-cta-location="campaign_header"
            className="inline-flex min-h-11 items-center justify-center rounded-xl bg-green-700 px-4 text-sm font-bold text-white shadow-sm transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 sm:px-5"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}

export function CampaignFooter() {
  return (
    <footer className="bg-[#0b1120] px-5 py-8 text-sm text-slate-400 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>© 2026 Enerix s.r.o. · Nádražní 641, 379 01 Třeboň</div>
        <div className="flex flex-wrap gap-x-5 gap-y-2">
          <a href="/ochrana-osobnich-udaju" className="hover:text-white">
            Ochrana osobních údajů
          </a>
          <CookieSettingsLink className="hover:text-white" />
        </div>
      </div>
    </footer>
  );
}

export function MobileCampaignCta({ href, label }) {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_30px_rgba(15,23,42,0.12)] backdrop-blur md:hidden">
      <a
        href={href}
        data-campaign-cta={label}
        data-cta-location="campaign_mobile_sticky"
        className="flex min-h-12 items-center justify-center rounded-xl bg-green-700 px-5 text-center font-bold text-white"
      >
        {label}
      </a>
    </div>
  );
}
