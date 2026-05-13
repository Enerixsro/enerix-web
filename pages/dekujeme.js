import Head from "next/head";
import Script from "next/script";

export default function Dekujeme() {
  return (
    <>
      <Head>
        <title>Děkujeme za poptávku | Enerix</title>
        <meta
          name="description"
          content="Děkujeme za odeslání poptávky. Ozveme se vám co nejdříve."
        />
      </Head>

      <Script
        id="sklik-conversion"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function fireSklikConversion() {
              function run() {
                if (
                  window.sznIVA &&
                  window.sznIVA.IS &&
                  window.rc &&
                  window.rc.conversionHit
                ) {
                  window.sznIVA.IS.updateIdentities({
                    eid: null
                  });

                  var conversionConf = {
                    id: 100275958,
                    value: 1000,
                    consent: 0
                  };

                  window.rc.conversionHit(conversionConf);
                } else {
                  setTimeout(run, 300);
                }
              }

              run();
            })();
          `,
        }}
      />

      <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6">
        <section className="max-w-2xl text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-400 mb-4">
            Poptávka odeslána
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Děkujeme, ozveme se vám.
          </h1>

          <p className="text-lg text-slate-300 mb-8">
            Vaši poptávku jsme přijali. Co nejdříve vás kontaktujeme a společně
            projdeme možnosti renovace, dotace nebo energetického řešení.
          </p>

          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 font-semibold text-slate-950 hover:bg-emerald-300 transition"
          >
            Zpět na hlavní stránku
          </a>
        </section>
      </main>
    </>
  );
}
