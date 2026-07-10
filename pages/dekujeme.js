import Head from "next/head";
import { useEffect, useState } from "react";
import CookieSettingsLink from "../components/CookieSettingsLink";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";
import { hasRecentLeadSubmission } from "../lib/tracking";

export default function Dekujeme() {
  const [submitted, setSubmitted] = useState(null);

  useEffect(() => {
    setSubmitted(hasRecentLeadSubmission());
  }, []);

  const confirmed = submitted === true;

  return (
    <>
      <Head>
        <title>{confirmed ? "Děkujeme za poptávku" : "Kontakt"} | Enerix</title>
        <meta
          name="description"
          content={
            confirmed
              ? "Děkujeme za odeslání poptávky. Ozveme se vám co nejdříve."
              : "Kontaktujte Enerix kvůli renovaci, dotaci nebo energetickému řešení."
          }
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl("/dekujeme")} />
      </Head>

      <main id="main-content" className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <section className="max-w-2xl py-16 text-center" aria-live="polite">
          {submitted === null ? (
            <p className="text-slate-300">Ověřujeme stav poptávky…</p>
          ) : (
            <>
              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-emerald-400">
                {confirmed ? "Poptávka odeslána" : "Enerix"}
              </p>

              <h1 className="mb-6 text-4xl font-bold md:text-5xl">
                {confirmed ? "Děkujeme, ozveme se vám." : "Jak vám můžeme pomoci?"}
              </h1>

              <p className="mb-8 text-lg text-slate-300">
                {confirmed
                  ? "Vaši poptávku jsme přijali. Co nejdříve vás kontaktujeme a společně projdeme možnosti renovace, dotace nebo energetického řešení."
                  : "Tato stránka nepotvrzuje odeslání nové poptávky. Formulář i přímé kontakty najdete na hlavní stránce."}
              </p>

              <a
                href={confirmed ? "/" : "/#kontakt"}
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                {confirmed ? "Zpět na hlavní stránku" : "Přejít ke kontaktu"}
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
