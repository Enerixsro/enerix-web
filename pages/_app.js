import Script from "next/script";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
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
