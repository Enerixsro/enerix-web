import Head from "next/head";
import { useEffect, useState } from "react";
import CookieSettingsLink from "../components/CookieSettingsLink";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";
import { hasRecentLeadSubmission } from "../lib/tracking";

export default function DekujemeRenovacniPas() {
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    setSubmitted(hasRecentLeadSubmission());
  }, []);

  const confirmed = submitted === true;

  return (
    <>
      <Head>
        <title>{`${confirmed ? "Objednávka přijata" : "Renovační pas"} | Enerix`}</title>
        <meta
          name="description"
          content={
            confirmed
              ? "Děkujeme za objednávku renovačního pasu Enerix. Ozveme se vám kvůli potvrzení zadání a termínu."
              : "Objednejte si renovační pas NZÚ."
          }
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl("/dekujeme-renovacni-pas")} />
      </Head>

      <main id="main-content" className="flex min-h-screen items-center justify-center bg-slate-950 px-5 text-white">
        <section className="max-w-2xl py-16 text-center" aria-live="polite">
          {submitted === null ? (
            <p className="text-slate-300">Ověřujeme stav objednávky…</p>
          ) : (
            <>
              <img src="/enerix-symbol.png" alt="" className="mx-auto h-16 w-16" />
              <p className="mt-8 text-sm font-bold uppercase tracking-[0.25em] text-green-400">
                {confirmed ? "Objednávka přijata" : "Enerix"}
              </p>
              <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
                {confirmed ? "Děkujeme. Teď je řada na nás." : "Chcete si objednat renovační pas?"}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-300">
                {confirmed
                  ? "Vaši objednávku jsme přijali. Ozveme se vám, společně potvrdíme zadání služby a domluvíme další postup i termín prohlídky domu."
                  : "Tato stránka sama o sobě objednávku nepotvrzuje. Vraťte se prosím na stránku renovačního pasu a odešlete formulář."}
              </p>
              {confirmed && (
                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
                  <div className="font-bold">Co bude následovat</div>
                  <ol className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
                    <li>1. Telefonicky si potvrdíme základní informace o domě.</li>
                    <li>2. Ověříme vhodnost služby a domluvíme termín.</li>
                    <li>3. Pošleme vám další pokyny k objednávce.</li>
                  </ol>
                </div>
              )}
              <a
                href={confirmed ? "/" : "/renovacni-pas#objednavka"}
                className="mt-8 inline-flex min-h-12 items-center justify-center rounded-xl bg-green-400 px-6 py-3 font-bold text-slate-950 transition hover:bg-green-300"
              >
                {confirmed ? "Zpět na hlavní stránku" : "Přejít k objednávce"}
              </a>
            </>
          )}

          <div className="mt-8">
            <CookieSettingsLink className="text-sm text-slate-400 underline-offset-4 hover:text-white hover:underline" />
          </div>
        </section>
      </main>
    </>
  );
}
