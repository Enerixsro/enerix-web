import Head from "next/head";

export default function OEnerixu() {
  return (
    <>
      <Head>
        <title>O Enerixu | Chytré renovace domů</title>
        <meta
          name="description"
          content="Enerix je česká firma zaměřená na chytré renovace domů, energetiku, dotace a koordinaci realizací."
        />
      </Head>

      <main className="min-h-screen bg-white text-slate-900">
        <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 via-white to-green-50 px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <a
                href="/"
                className="text-sm font-semibold text-green-700 transition hover:text-green-800"
              >
                ← Zpět na hlavní stránku
              </a>
              <div className="mt-10 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                O Enerixu
              </div>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                Renovace domu potřebuje odpovědnost za celek
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                Enerix je česká firma zaměřená na chytré renovace domů, dotace,
                energetiku a koordinaci realizací. Pomáháme majitelům domů
                proměnit jednotlivé nápady a opatření v postup, který dává smysl
                technicky, ekonomicky i v čase.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <div className="flex items-center gap-5">
                <img
                  src="/enerix-symbol.png"
                  alt=""
                  className="h-20 w-20 rounded-2xl border border-green-100 bg-white p-3"
                />
                <div>
                  <div className="text-2xl font-bold">Enerix s.r.o.</div>
                  <div className="mt-1 text-slate-500">
                    Chytré renovace pro váš dům
                  </div>
                </div>
              </div>
              <div className="mt-8 grid gap-3 text-sm text-slate-600">
                <div className="rounded-xl bg-slate-50 px-4 py-3">
                  Energetika a technické souvislosti
                </div>
                <div className="rounded-xl bg-slate-50 px-4 py-3">
                  Dotace a projektová příprava
                </div>
                <div className="rounded-xl bg-slate-50 px-4 py-3">
                  Koordinace dalšího postupu a realizace
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Přístup firmy
            </div>
            <h2 className="mt-3 text-3xl font-bold">
              Neřešíme opatření odděleně od domu
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Zateplení, okna, střecha, vytápění, fotovoltaika i větrání se
              navzájem ovlivňují. Stejně tak se technický návrh potkává s
              rozpočtem, možnostmi dotace a plánem realizace. Úlohou Enerixu je
              tyto části držet pohromadě a pomoci klientovi zvolit rozumné pořadí.
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Výsledkem nemá být jen seznam doporučení, ale srozumitelný podklad
              pro rozhodnutí, přípravu projektu a případnou realizaci.
            </p>
          </div>

          <div className="rounded-[2rem] border border-green-100 bg-green-50/60 p-8">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Vedení Enerixu
            </div>
            <h2 className="mt-3 text-3xl font-bold">Jiří Čečka</h2>
            <p className="mt-5 leading-8 text-slate-600">
              Jiří Čečka vede Enerix a zastřešuje přístup firmy k přípravě
              renovací. Opírá se o zkušenosti z energetiky, dotačních projektů,
              projektového řízení a posuzování renovací jako vzájemně propojeného
              celku.
            </p>
            <p className="mt-5 leading-8 text-slate-600">
              Důraz klade na věcnou komunikaci, realistické možnosti konkrétního
              domu a koordinaci kroků, které na sebe musí správně navazovat.
            </p>
          </div>
        </section>

        <section className="bg-slate-950 px-6 py-16 text-white md:px-10">
          <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                Váš dům a další postup
              </div>
              <h2 className="mt-3 text-3xl font-bold">
                Začněme základním posouzením záměru
              </h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Projdeme stav domu, plánovaná opatření a možnosti, které pro vás
                mohou dávat smysl.
              </p>
            </div>
            <a
              href="/#kontakt"
              className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Nezávazná konzultace
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
