import Head from "next/head";
import Script from "next/script";

const practiceArticles = [
  {
    title: "Komplexní renovace rodinného domu bez chyb",
    slug: "komplexni-renovace-rodinneho-domu-bez-chyb",
    excerpt:
      "Komplexní renovace rodinného domu snižuje náklady, zvyšuje komfort a dává smysl jen při správném pořadí prací, rozpočtu a dotacích.",
    date: "2. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/ac188a54-c3e7-42b3-9305-985b07ea1b67.webp",
    label: "Praktický průvodce",
    readingTime: "7 min čtení",
  },
  {
    title: "Jak naplánovat rekonstrukci domu bez chyb",
    slug: "jak-naplanovat-rekonstrukci-domu-bez-chyb",
    excerpt:
      "Jak sestavit postup, který dává technický i finanční smysl a správně navazuje.",
    date: "1. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/90a34141-3586-46bf-bad2-16db22fe4090.webp",
    readingTime: "6 min čtení",
  },
  {
    title: "Výměna oken a dveří bez drahých chyb",
    slug: "vymena-oken-a-dveri-bez-drahych-chyb",
    excerpt:
      "Proč okna posuzovat společně se zateplením, větráním a dalšími kroky renovace.",
    date: "3. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/2fc147aa-61ee-43f0-8a8f-99cf881909e7.webp",
    readingTime: "5 min čtení",
  },
];

const expertArticles = [
  {
    title: "Zateplení domu – návratnost investice reálně",
    slug: "zatepleni-domu-navratnost-investice",
    date: "5. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/35ef79a5-0555-4449-9ed4-a875825cb5ad.webp",
    label: "Ekonomika renovace",
    readingTime: "8 min čtení",
  },
  {
    title: "Tepelné čerpadlo pro starý dům: kdy dává smysl",
    slug: "tepelne-cerpadlo-pro-stary-dum",
    date: "8. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/d554b212-4530-4d44-96fa-3d986fce28f0.webp",
    label: "Technické řešení",
    readingTime: "7 min čtení",
  },
  {
    title: "Fotovoltaika pro rodinný dům: kdy dává smysl",
    slug: "fotovoltaika-pro-rodinny-dum-kdy-dava-smysl",
    date: "9. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/ad1977cb-9be7-4b96-a556-feeb1286d70c.webp",
    label: "Energetika domu",
    readingTime: "6 min čtení",
  },
];

const newsArticles = [
  {
    title: "Nová zelená úsporám: rekonstrukce domu chytře",
    slug: "nova-zelena-usporam-rekonstrukce-domu",
    date: "7. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/ac08c4a9-b793-47ff-a162-74cbfd372b3e.webp",
    readingTime: "5 min čtení",
  },
  {
    title: "Kdy měnit střechu na domě a nečekat zbytečně",
    slug: "kdy-menit-strechu-na-dome",
    date: "11. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/153bf26d-1cff-4d7e-836b-e704e7f8e784.webp",
    readingTime: "4 min čtení",
  },
  {
    title: "Má rekuperace smysl v domě?",
    slug: "ma-rekuperace-smysl-v-dome",
    date: "10. června 2026",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/18f790d5-5683-4ccc-a083-7bf5fe39952b.webp",
    readingTime: "4 min čtení",
  },
];

const articleHref = (slug) => `/blog?post=${slug}`;

function ArticleMeta({ date, readingTime, light = false }) {
  const colorClass = light ? "text-slate-300" : "text-slate-500";

  return (
    <div
      className={`flex flex-wrap items-center gap-x-5 gap-y-2 text-xs ${colorClass}`}
    >
      <span className="inline-flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <path
            d="M6 3v3M18 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {date}
      </span>
      <span className="inline-flex items-center gap-1.5">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="h-4 w-4"
        >
          <circle
            cx="12"
            cy="12"
            r="8"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M12 8v4l3 2"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {readingTime}
      </span>
    </div>
  );
}

function SectionLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-lg border border-green-300 bg-white px-5 py-2.5 text-sm font-semibold text-green-800 transition hover:border-green-500 hover:bg-green-50"
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </a>
  );
}

export default function BlogPage() {
  const leadArticle = practiceArticles[0];

  return (
    <>
      <Head>
        <title>
          Znalostní centrum Enerixu | Renovace domu v souvislostech
        </title>
        <meta
          name="description"
          content="Zkušenosti, odborné souvislosti a praktické rady k renovaci domu, správnému pořadí opatření, dotacím a přípravě realizace."
        />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/favicon-32x32.png"
                alt=""
                className="h-10 w-10 rounded-lg"
              />
              <div>
                <div className="font-bold tracking-[0.2em]">ENERIX</div>
                <div className="text-xs text-slate-500">
                  Průvodce renovací vašeho domu
                </div>
              </div>
            </a>

            <nav
              aria-label="Hlavní navigace"
              className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-semibold text-slate-700"
            >
              <a href="/#sluzby" className="transition hover:text-green-700">
                Služby
              </a>
              <a
                href="/blog"
                className="border-b-2 border-green-600 py-2 text-green-700"
              >
                Blog
              </a>
              <a href="/#kontakt" className="transition hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 px-6 pb-0 pt-12 md:px-10 md:pt-16">
            <div className="mx-auto max-w-7xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Znalostní centrum Enerixu
              </div>
              <h1 className="mt-3 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl">
                Zkušenosti, souvislosti a praktické rady
              </h1>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-600">
                Blog jsme rozdělili podle účelu, abyste snadno našli to, co
                právě řešíte – z praxe, odborné postupy i aktuální informace.
              </p>

              <nav
                aria-label="Kategorie znalostního centra"
                className="mt-8 flex gap-7 overflow-x-auto text-sm font-semibold"
              >
                <a
                  href="#praxe"
                  className="whitespace-nowrap border-b-2 border-green-600 pb-4 text-green-700"
                >
                  Z praxe Enerixu
                </a>
                <a
                  href="#expert"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 transition hover:border-green-300 hover:text-green-700"
                >
                  Enerix Expert
                </a>
                <a
                  href="#novinky"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 transition hover:border-green-300 hover:text-green-700"
                >
                  Rady a novinky
                </a>
              </nav>
            </div>
          </section>

          <section id="praxe" className="scroll-mt-6 px-6 py-12 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold">Z praxe Enerixu</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Konkrétní zkušenosti z projektů, konzultací a přípravy
                  renovací.
                </p>
              </div>

              <div className="mt-7 grid gap-6 lg:grid-cols-[1.65fr_0.85fr]">
                <a
                  href={articleHref(leadArticle.slug)}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
                >
                  <div className="relative aspect-[16/8] overflow-hidden bg-slate-100">
                    <img
                      src={leadArticle.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute left-4 top-4 rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                      {leadArticle.label}
                    </div>
                  </div>
                  <div className="p-6 md:p-7">
                    <h3 className="text-2xl font-bold leading-8 md:text-3xl">
                      {leadArticle.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
                      {leadArticle.excerpt}
                    </p>
                    <div className="mt-5">
                      <ArticleMeta
                        date={leadArticle.date}
                        readingTime={leadArticle.readingTime}
                      />
                    </div>
                  </div>
                </a>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
                  {practiceArticles.slice(1).map((article) => (
                    <a
                      key={article.slug}
                      href={articleHref(article.slug)}
                      className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
                    >
                      <div className="aspect-[16/7] overflow-hidden bg-slate-100">
                        <img
                          src={article.image}
                          alt=""
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold leading-7">
                          {article.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                          {article.excerpt}
                        </p>
                        <div className="mt-4">
                          <ArticleMeta
                            date={article.date}
                            readingTime={article.readingTime}
                          />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit další praktické články
                </SectionLink>
              </div>
            </div>
          </section>

          <section
            id="expert"
            className="scroll-mt-6 border-y border-green-100 bg-green-50/60 px-6 py-12 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold">Enerix Expert</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Odborné know-how pro správná rozhodnutí při renovaci.
                </p>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {expertArticles.map((article) => (
                  <a
                    key={article.slug}
                    href={articleHref(article.slug)}
                    className="group overflow-hidden rounded-lg border border-green-100 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={article.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        {article.label}
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-7">
                        {article.title}
                      </h3>
                      <div className="mt-4">
                        <ArticleMeta
                          date={article.date}
                          readingTime={article.readingTime}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit všechny odborné články
                </SectionLink>
              </div>
            </div>
          </section>

          <section
            id="novinky"
            className="scroll-mt-6 border-b border-slate-200 px-6 py-12 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div>
                <h2 className="text-3xl font-bold">Rady a novinky</h2>
                <p className="mt-2 text-sm text-slate-600">
                  Aktuální změny, kratší vysvětlení a praktické informace.
                </p>
              </div>

              <div className="mt-7 grid gap-6 md:grid-cols-3">
                {newsArticles.map((article) => (
                  <a
                    key={article.slug}
                    href={articleHref(article.slug)}
                    className="group grid grid-cols-[110px_1fr] gap-4 border-b border-slate-200 pb-5 transition hover:border-green-400 sm:grid-cols-[140px_1fr] md:grid-cols-1 md:border-b-0 md:pb-0 lg:grid-cols-[120px_1fr]"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-lg bg-slate-100">
                      <img
                        src={article.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-6">{article.title}</h3>
                      <div className="mt-3">
                        <ArticleMeta
                          date={article.date}
                          readingTime={article.readingTime}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit všechny rady a novinky
                </SectionLink>
              </div>
            </div>
          </section>

          <section className="px-6 py-10 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-6 rounded-lg border border-green-100 bg-green-50/70 p-7 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <h2 className="text-2xl font-bold">
                  Nevíte, kde s renovací začít?
                </h2>
                <p className="mt-2 max-w-2xl leading-7 text-slate-600">
                  Pomůžeme vám propojit technické možnosti domu, dotace,
                  financování a správné pořadí realizace.
                </p>
              </div>
              <a
                href="/#kontakt"
                className="inline-flex items-center justify-center rounded-lg bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Domluvit nezávaznou konzultaci
              </a>
            </div>
          </section>

          <section
            id="clanky"
            className="scroll-mt-6 border-t border-slate-200 px-6 py-12 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold">Všechny články</h2>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
                  Kompletní archiv článků Enerixu včetně obsahu publikovaného
                  přes Soro. Vyhledávání, filtrování a stránkování zůstávají
                  součástí výpisu.
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
    </>
  );
}
