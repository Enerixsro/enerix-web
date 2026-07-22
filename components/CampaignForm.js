import { useState } from "react";
import { markLeadSubmission } from "../lib/tracking";

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ||
  "https://formspree.io/f/xrejyodb";

const districts = [
  "České Budějovice",
  "Český Krumlov",
  "Jindřichův Hradec",
  "Písek",
  "Prachatice",
  "Strakonice",
  "Tábor",
  "Jiný okres",
];

export default function CampaignForm({ variant = "lead", className = "" }) {
  const isOrder = variant === "order";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchParams = new URLSearchParams(window.location.search);

    setIsSubmitting(true);
    setSubmitError("");
    formData.set("landing_page", window.location.href);
    formData.set("referrer", document.referrer || "direct");
    formData.set(
      "funnel_varianta",
      isOrder ? "objednavka-renovacniho-pasu" : "kontakt-plan-renovace"
    );

    ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"].forEach(
      (key) => {
        const value = searchParams.get(key);
        if (value) formData.set(key, value);
      }
    );

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      markLeadSubmission();
      window.location.href = isOrder
        ? "/dekujeme-renovacni-pas"
        : "/dekujeme";
    } catch {
      setSubmitError(
        "Formulář se nepodařilo odeslat. Zkuste to prosím znovu nebo zavolejte na 720 480 861."
      );
      setIsSubmitting(false);
    }
  }

  const inputClass =
    "min-h-12 w-full rounded-xl border border-slate-300 bg-white px-4 py-3 font-normal text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-green-700 focus:ring-2 focus:ring-green-100";

  return (
    <form
      id={isOrder ? "renovation_pass_order_form" : "renovation_plan_lead_form"}
      action={FORM_ENDPOINT}
      method="POST"
      onSubmit={handleSubmit}
      className={`rounded-[1.75rem] border border-slate-200 bg-white p-5 text-left text-slate-950 shadow-2xl shadow-slate-950/10 sm:p-7 ${className}`}
    >
      <input
        type="hidden"
        name="produkt"
        value={isOrder ? "Renovační pas NZÚ" : "Nezávazná konzultace renovace a NZÚ"}
      />
      {isOrder && <input type="hidden" name="cena" value="4 800 Kč" />}

      <div className="hidden" aria-hidden="true">
        <label htmlFor={`${variant}-company`}>Firma (nevyplňujte)</label>
        <input
          id={`${variant}-company`}
          type="text"
          name="_gotcha"
          tabIndex="-1"
          autoComplete="off"
        />
      </div>

      <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">
        {isOrder ? "Objednávka renovačního pasu" : "Nezávazná konzultace"}
      </div>
      <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        {isOrder ? "Objednejte si renovační pas NZÚ" : "Řekněte nám pár základních informací"}
      </h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">
        {isOrder
          ? "Po odeslání objednávky vám zavoláme, potvrdíme rozsah služby a domluvíme termín prohlídky."
          : "Vyplnění zabere přibližně 2 minuty. Ozveme se vám a krátce probereme, co u vašeho domu dává smysl řešit jako první."}
      </p>

      {isOrder && (
        <div className="mt-5 flex items-end justify-between gap-4 rounded-2xl bg-green-50 p-4">
          <div>
            <div className="text-sm font-semibold text-green-900">Renovační pas NZÚ</div>
            <div className="mt-1 text-xs text-green-800">Platbu nyní online neprovádíte</div>
          </div>
          <div className="whitespace-nowrap text-2xl font-black text-green-900">4 800 Kč</div>
        </div>
      )}

      <div className="mt-6 space-y-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-name`}>
          Jméno a příjmení
          <input
            id={`${variant}-name`}
            type="text"
            name="jmeno"
            autoComplete="name"
            required
            className={inputClass}
          />
        </label>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-phone`}>
            Telefon
            <input
              id={`${variant}-phone`}
              type="tel"
              name="telefon"
              autoComplete="tel"
              inputMode="tel"
              required
              className={inputClass}
            />
          </label>
          <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-email`}>
            E-mail {isOrder ? "" : <span className="font-normal text-slate-400">(nepovinný)</span>}
            <input
              id={`${variant}-email`}
              type="email"
              name="email"
              autoComplete="email"
              required={isOrder}
              className={inputClass}
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-district`}>
          Kde dům stojí?
          <select id={`${variant}-district`} name="okres" required className={inputClass} defaultValue="">
            <option value="" disabled>Vyberte okres</option>
            {districts.map((district) => (
              <option key={district}>{district}</option>
            ))}
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-situation`}>
          {isOrder ? "Co chcete na domě řešit?" : "V jaké situaci se právě nacházíte?"}
          <select id={`${variant}-situation`} name="situace" required className={inputClass} defaultValue="">
            <option value="" disabled>Vyberte nejbližší možnost</option>
            <option>Renovaci teprve začínám plánovat</option>
            <option>Řeším konkrétní část domu</option>
            <option>Mám nabídku od dodavatele</option>
            <option>Renovaci potřebuji rozdělit do etap</option>
            <option>Nevím, čím začít</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor={`${variant}-support`}>
          Jakou podporu chcete prověřit?
          <select id={`${variant}-support`} name="podpora_nzu" required className={inputClass} defaultValue="">
            <option value="" disabled>Vyberte nejbližší možnost</option>
            <option>Dotaci NZÚ Light</option>
            <option>Bezúročný úvěr NZÚ</option>
            <option>Obě možnosti podle nároku</option>
            <option>Zatím nevím, potřebuji poradit</option>
            <option>Renovaci chci financovat bez podpory</option>
          </select>
        </label>

        {isOrder && (
          <label className="grid gap-2 text-sm font-semibold text-slate-700" htmlFor="order-note">
            Poznámka <span className="font-normal text-slate-400">(nepovinná)</span>
            <textarea
              id="order-note"
              name="zprava"
              rows="3"
              placeholder="Například stáří domu nebo úpravy, které zvažujete."
              className={inputClass}
            />
          </label>
        )}

        <label className="flex items-start gap-3 text-sm leading-6 text-slate-600">
          <input
            type="checkbox"
            name="souhlas_osobni_udaje"
            value="ano"
            required
            className="mt-1.5 h-4 w-4 shrink-0 accent-green-700"
          />
          <span>
            Souhlasím se zpracováním osobních údajů za účelem vyřízení {isOrder ? "objednávky" : "poptávky"}.{" "}
            <a href="/ochrana-osobnich-udaju" className="font-semibold underline underline-offset-2">
              Více informací
            </a>
          </span>
        </label>

        {submitError && (
          <p role="alert" className="rounded-xl bg-red-50 p-4 text-sm font-semibold text-red-800">
            {submitError}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="min-h-14 w-full rounded-xl bg-green-700 px-5 py-4 text-base font-bold text-white shadow-lg shadow-green-900/15 transition hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 disabled:cursor-wait disabled:opacity-70 sm:text-lg"
        >
          {isSubmitting
            ? "Odesíláme…"
            : isOrder
              ? "Objednat renovační pas NZÚ za 4 800 Kč"
              : "Ověřit renovaci a možnosti NZÚ"}
        </button>

        <p className="text-center text-xs leading-5 text-slate-500">
          {isOrder
            ? "Odesláním formuláře nevzniká online platba. Nejdříve s vámi potvrdíme zadání a termín."
            : "Bez závazků a bez nevyžádaných obchodních sdělení."}
        </p>
      </div>
    </form>
  );
}
