import Script from "next/script";

const contentCategories = [
  {
    title: "Z praxe Enerixu",
    text: "Zkušenosti z konzultací, přípravy projektů a budoucích realizací.",
    icon: "practice",
  },
  {
    title: "Enerix Expert",
    text: "Odbornější články o technických, ekonomických a dotačních souvislostech renovace.",
    icon: "expert",
  },
  {
    title: "Rady a novinky",
    text: "Aktuality, kratší vysvětlení a praktické články, včetně obsahu publikovaného přes Soro.",
    icon: "news",
  },
];

function CategoryIcon({ type }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-7 w-7"
    >
      {type === "practice" && (
        <>
          <path
            d="M8 24 24 11l16 13"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13 21v18h22V21M20 39V28h8v11"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </>
      )}

      {type === "expert" && (
        <>
          <circle
            cx="24"
            cy="24"
            r="13"
            stroke="currentColor"
            strokeWidth="2.5"
          />
          <path
            d="m18.5 24 3.5 3.5 7.5-8"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24 5v4M24 39v4M5 24h4M39 24h4"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </>
      )}

      {type === "news" && (
        <>
          <path
            d="M11 9h22v30H11V9Z"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          <path
            d="M18 17h9M18 23h9M18 29h6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M33 16h5v23H17"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </>
      )}
    </svg>
  );
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
          <a href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-green-100 bg-green-50 text-green-700">
              <svg
                viewBox="0 0 48 48"
                fill="none"
                aria-hidden="true"
                className="h-7 w-7"
              >
                <path
                  d="M8 23 24 10l16 13M13 21v18h22V21M21 39V27h7v12"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div className="font-bold tracking-wide">ENERIX</div>
              <div className="text-xs text-slate-500">
                Průvodce renovací vašeho domu
              </div>
            </div>
          </a>

          <div className="flex items-center gap-5 text-sm font-semibold">
            <a
              href="/"
              className="text-slate-600 transition hover:text-green-700"
            >
              Zpět na web
            </a>
            <a
              href="/#kontakt"
              className="rounded-xl border border-green-200 bg-green-50 px-4 py-2 text-green-800 transition hover:border-green-300 hover:bg-green-100"
            >
              Kontakt
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-6xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Znalostní centrum Enerixu
            </div>

            <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
              Zkušenosti, souvislosti a praktické rady
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Renovace domu není jen výběr jedné technologie. V článcích
              vysvětlujeme, jak přemýšlet o správném pořadí kroků, dotacích,
              financování a návaznosti jednotlivých opatření.
            </p>

            <p className="mt-4 max-w-3xl leading-7 text-slate-500">
              Jednotlivá opatření vždy posuzujeme v kontextu celého domu, jeho
              současného stavu i vašich dlouhodobých plánů.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-14 md:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Jaký obsah zde najdete
            </div>
            <h2 className="mt-3 text-2xl font-bold md:text-3xl">
              Různé typy článků pro různé fáze rozhodování
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {contentCategories.map((category) => (
              <article
                key={category.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-700">
                  <CategoryIcon type={category.icon} />
                </div>
                <h3 className="mt-5 text-xl font-bold">{category.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {category.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-14 md:px-10">
          <div className="grid gap-6 rounded-2xl border border-green-100 bg-green-50/70 p-7 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <h2 className="text-2xl font-bold">
                Nevíte, kde s renovací začít?
              </h2>
              <p className="mt-3 max-w-2xl leading-7 text-slate-600">
                Pomůžeme vám zorientovat se v možnostech domu, dotacích a
                správném pořadí kroků.
              </p>
            </div>
            <a
              href="/#kontakt"
              className="inline-flex items-center justify-center rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
            >
              Domluvit nezávaznou konzultaci
            </a>
          </div>
        </section>

        <section className="border-t border-slate-200 px-6 py-14 md:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="mb-9">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Všechny články
              </div>
              <h2 className="mt-3 text-3xl font-bold">
                Praktické informace pro promyšlenou renovaci
              </h2>
              <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                Projděte si články o renovacích, energetice a dotacích. Ať už
                přicházíte z vyhledávání, Facebooku nebo Instagramu, najdete zde
                obsah Enerixu zasazený do širších souvislostí.
              </p>
            </div>

            <div id="soro-blog"></div>

            <Script
              src="https://app.trysoro.com/api/embed/03aa2964-6d5b-4a94-8c67-2d7d9439c483"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </main>

      <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
        © 2026 Enerix s.r.o. · Průvodce renovací vašeho domu
      </footer>
    </div>
  );
}
