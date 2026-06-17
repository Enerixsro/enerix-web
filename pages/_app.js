import Head from "next/head";
import ConsentManager from "../components/ConsentManager";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="color-scheme" content="light" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
      </Head>

      <Component {...pageProps} />
      <ConsentManager />
    </>
  );
}
