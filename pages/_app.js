import Head from "next/head";
import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>

      <Script
        src="https://c.seznam.cz/js/rc.js"
        strategy="afterInteractive"
      />

      <Script
        id="sklik-retargeting"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function fireSklikRetargeting() {
              function run() {
                if (
                  window.sznIVA &&
                  window.sznIVA.IS &&
                  window.rc &&
                  window.rc.retargetingHit
                ) {
                  window.sznIVA.IS.updateIdentities({
                    eid: null
                  });

                  var retargetingConf = {
                    rtgId: 1688154,
                    consent: 0
                  };

                  window.rc.retargetingHit(retargetingConf);
                } else {
                  setTimeout(run, 300);
                }
              }

              run();
            })();
          `,
        }}
      />

      <Component {...pageProps} />
    </>
  );
}
