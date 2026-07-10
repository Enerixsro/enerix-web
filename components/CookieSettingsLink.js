export default function CookieSettingsLink({ className = "" }) {
  return (
    <button
      type="button"
      onClick={() => window.EnerixConsent?.openPreferences?.()}
      className={className}
    >
      Nastavení cookies
    </button>
  );
}
