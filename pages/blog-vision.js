import Head from "next/head";
import { useMemo, useState } from "react";

const practiceArticles = [
  {
    title: "Jak jsme připravili renovaci domu po jednotlivých etapách",
    excerpt:
      "Ukázka rozhodování, kdy dává smysl začít obálkou domu, co připravit dopředu a jak jednotlivé kroky neposkládat proti sobě.",
    meta: "Případová studie · 8 min čtení",
    image: "/FrontPageImg.png",
    imagePosition: "object-center",
  },
  {
    title: "Když klient neví, kde začít",
    excerpt:
      "Co obvykle řešíme při první konzultaci a jak z různých představ vznikne srozumitelný plán renovace.",
    meta: "Z konzultací · 5 min čtení",
    visual: "consultation",
  },
  {
    title: "Co ukázala příprava zateplení staršího domu",
    excerpt:
      "Praktický pohled na detaily fasády, návaznost oken a rozhodnutí, která je dobré udělat před zahájením prací.",
    meta: "Z realizace · 6 min čtení",
    visual: "facade",
  },
];

const expertArticles = [
  {
    title: "V jakém pořadí renovovat rodinný dům",
    excerpt:
      "Jak přemýšlet o obálce domu, zdroji tepla, fotovoltaice a větrání jako o jednom systému.",
    meta: "Renovace domu · 9 min",
    visual: "sequence",
  },
  {
    title: "Jak poznat, které technické řešení dává smysl",
    excerpt:
      "Rozhodování podle stavu domu, budoucího provozu a skutečného přínosu, ne jen podle parametrů technologie.",
    meta: "Technická rozhodnutí · 7 min",
    visual: "technology",
  },
  {
    title: "Dotace jako součást plánu, ne jeho jediný cíl",
    excerpt:
      "Kdy podpora pomůže správné renovaci a proč by neměla určovat všechna technická rozhodnutí.",
    meta: "Dotace · 6 min",
    visual: "subsidy",
  },
];

const newsArticles = [
  {
    title: "Co sledovat u dalšího vývoje Nové zelené úsporám",
    category: "Aktualita",
    date: "Ukázkové datum",
    visual: "news",
  },
  {
    title: "Pět podkladů, které se hodí mít před první konzultací",
    category: "Praktická rada",
    date: "Ukázkové datum",
    visual: "documents",
  },
  {
    title: "Kdy začít připravovat renovaci na další stavební sezonu",
    category: "Plánování",
    date: "Ukázkové datum",
    visual: "calendar",
  },
];

const archiveArticles = [
  {
    title: "Jak rozdělit renovaci domu do zvládnutelných etap",
    category: "Z praxe Enerixu",
    excerpt: "Modelový příklad přípravy dlouhodobého plánu renovace.",
  },
  {
    title: "Zateplení, okna a střecha: co má navazovat",
    category: "Enerix Expert",
    excerpt: "Přehled technických návazností před zahájením realizace.",
  },
  {
    title: "Jaké podklady mohou být potřeba pro dotační projekt",
    category: "Rady a novinky",
    excerpt: "Krátký orientační seznam pro první přípravu.",
  },
  {
    title: "Co jsme řešili při konzultaci staršího rodinného domu",
    category: "Z praxe Enerixu",
    excerpt: "Ukázka otázek, které ovlivnily navržené pořadí kroků.",
  },
  {
    title: "Tepelné čerpadlo před nebo po zateplení?",
    category: "Enerix Expert",
    excerpt: "Jak se může změnit potřebný výkon a ekonomika provozu.",
  },
  {
    title: "Novinky v energetickém poradenství",
    category: "Rady a novinky",
    excerpt: "Místo pro kratší aktuality a změny důležité pro majitele domů.",
  },
  {
    title: "Příprava projektu fotovoltaiky v širším kontextu domu",
    category: "Z praxe Enerixu",
    excerpt: "Co je vhodné znát o spotřebě a budoucích změnách provozu.",
  },
  {
    title: "Renovační pas jako mapa dalších rozhodnutí",
    category: "Enerix Expert",
    excerpt: "K čemu může sloužit a jakou úroveň detailu od něj čekat.",
  },
  {
    title: "Na co myslet před výměnou oken",
    category: "Rady a novinky",
    excerpt: "Rychlý přehled návazností na fasádu, větrání a ostění.",
  },
];

const categoryFilters = [
  "Vše",
  "Z praxe Enerixu",
  "Enerix Expert",
  "Rady a novinky",
];

function PlaceholderVisual({ type, className = "" }) {
  const paths = {
    consultation: (
      <>
        <path d="M23 34h74v49H59L41 98V83H23V34Z" />
        <path d="M39 51h42M39 65h28" />
      </>
    ),
    facade: (
      <>
        <path d="M19 58 60 24l41 34" />
        <path d="M29 53v45h62V53M48 98V72h24v26" />
        <path d="M82 35V22H70" />
      </>
    ),
    sequence: (
      <>
        <circle cx="27" cy="60" r="12" />
        <circle cx="60" cy="60" r="12" />
        <circle cx="93" cy="60" r="12" />
        <path d="M39 60h9M72 60h9" />
      </>
    ),
    technology: (
      <>
        <path d="M60 21v13M60 86v13M21 60h13M86 60h13" />
        <circle cx="60" cy="60" r="24" />
        <path d="m50 61 7 7 15-17" />
      </>
    ),
    subsidy: (
      <>
        <path d="M28 31h64v58H28V31Z" />
        <path d="M42 48h36M42 62h25M42 76h19" />
        <circle cx="88" cy="83" r="15" />
        <path d="M88 76v14M83 81h8" />
      </>
    ),
    news: (
      <>
        <path d="M28 27h57v68H28V27Z" />
        <path d="M40 43h33M40 58h33M40 73h22" />
        <path d="M85 42h9v53H42" />
      </>
    ),
    documents: (
      <>
        <path d="M36 22h43l13 13v63H36V22Z" />
        <path d="M78 22v15h14M48 53h31M48 67h31M48 81h20" />
      </>
    ),
    calendar: (
      <>
        <path d="M27 35h66v60H27V35Z" />
        <path d="M27 51h66M43 23v23M77 23v23" />
        <path d="M43 65h10v10H43zM67 65h10v10H67z" />
      </>
    ),
  };

  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-slate-800 ${className}`}
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:28px_28px]" />
      <svg
        viewBox="0 0 120 120"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="relative h-20 w-20 text-white/85"
      >
        {paths[type]}
      </svg>
    </div>
  );
}

export default function BlogVisionPage() {
  const [activeCategory, setActiveCategory] = useState("Vše");
  const [searchQuery, setSearchQuery] = useState("");
  const [archivePage, setArchivePage] = useState(1);
  const articlesPerPage = 6;

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLocaleLowerCase("cs");

    return archiveArticles.filter((article) => {
      const matchesCategory =
        activeCategory === "Vše" || article.category === activeCategory;
      const matchesQuery =
        normalizedQuery.length === 0 ||
        `${article.title} ${article.excerpt}`
          .toLocaleLowerCase("cs")
          .includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, searchQuery]);

  const pageCount = Math.max(
    1,
    Math.ceil(filteredArticles.length / articlesPerPage)
  );
  const visibleArticles = filteredArticles.slice(
    (archivePage - 1) * articlesPerPage,
    archivePage * articlesPerPage
  );

  const selectCategory = (category) => {
    setActiveCategory(category);
    setArchivePage(1);
  };

  const updateSearch = (event) => {
    setSearchQuery(event.target.value);
    setArchivePage(1);
  };

  return (
    <>
      <Head>
        <title>Blog Vision | Enerix Knowledge Center</title>
        <meta
          name="description"
          content="Preview koncept budoucího znalostního centra Enerixu."
        />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
            <a href="/" className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-100 bg-green-50 text-green-700">
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
                  Chytré renovace pro váš dům
                </div>
              </div>
            </a>

            <nav
              aria-label="Hlavní navigace konceptu"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700"
            >
              <a href="/#sluzby" className="transition hover:text-green-700">
                Služby
              </a>
              <span className="text-slate-400">O Enerixu</span>
              <span className="text-slate-400">Spolupráce</span>
              <a href="/blog-vision" className="text-green-700">
                Blog
              </a>
              <a href="/#kontakt" className="transition hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="border-b border-slate-200 bg-slate-50 px-6 py-14 md:px-10 md:py-16">
            <div className="mx-auto max-w-7xl">
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                Preview koncept – není určeno k nasazení
              </div>
              <div className="mt-8 max-w-4xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Znalostní centrum Enerixu
                </div>
                <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
                  Zkušenosti, souvislosti a praktické rady
                </h1>
                <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
                  Obsah řadíme podle toho, k čemu vám má pomoci. Nejprve
                  konkrétní zkušenosti z praxe, potom odborné souvislosti a
                  nakonec kratší rady a aktuální informace.
                </p>
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                {["Z praxe Enerixu", "Enerix Expert", "Rady a novinky"].map(
                  (label, index) => (
                    <a
                      key={label}
                      href={`#${["praxe", "expert", "novinky"][index]}`}
                      className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-green-400 hover:text-green-700"
                    >
                      {label}
                    </a>
                  )
                )}
              </div>
            </div>
          </section>

          <section id="praxe" className="px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Z praxe Enerixu
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Konkrétní zkušenosti z projektů a konzultací
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Obsah, který ukazuje skutečné rozhodování, průběh přípravy a
                  zkušenosti využitelné u dalších renovací.
                </p>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-[1.55fr_0.85fr]">
                <article className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg shadow-slate-200/60">
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={practiceArticles[0].image}
                      alt="Ukázkový rodinný dům pro případovou studii"
                      className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.02] ${practiceArticles[0].imagePosition}`}
                    />
                    <div className="absolute left-5 top-5 rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white">
                      Případová studie
                    </div>
                  </div>
                  <div className="p-7 md:p-8">
                    <div className="text-sm font-semibold text-green-700">
                      {practiceArticles[0].meta}
                    </div>
                    <h3 className="mt-3 text-2xl font-bold leading-9 md:text-3xl">
                      {practiceArticles[0].title}
                    </h3>
                    <p className="mt-4 max-w-3xl leading-7 text-slate-600">
                      {practiceArticles[0].excerpt}
                    </p>
                    <div className="mt-6 font-semibold text-green-700">
                      Otevřít ukázkový článek →
                    </div>
                  </div>
                </article>

                <div className="grid gap-6">
                  {practiceArticles.slice(1).map((article) => (
                    <article
                      key={article.title}
                      className="grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm sm:grid-cols-[0.85fr_1.15fr] lg:grid-cols-1"
                    >
                      <PlaceholderVisual
                        type={article.visual}
                        className="aspect-[16/9] sm:aspect-auto lg:aspect-[16/7]"
                      />
                      <div className="p-6">
                        <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                          {article.meta}
                        </div>
                        <h3 className="mt-3 text-xl font-bold leading-7">
                          {article.title}
                        </h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">
                          {article.excerpt}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section
            id="expert"
            className="border-y border-green-100 bg-green-50/60 px-6 py-20 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                    Enerix Expert
                  </div>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Odborné know-how pro správná rozhodnutí
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Systematické články o technických, energetických,
                    ekonomických a dotačních souvislostech renovace.
                  </p>
                </div>
                <div className="text-sm font-semibold text-green-700">
                  Projít odborná témata →
                </div>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {expertArticles.map((article) => (
                  <article
                    key={article.title}
                    className="overflow-hidden rounded-lg border border-green-100 bg-white shadow-sm"
                  >
                    <PlaceholderVisual
                      type={article.visual}
                      className="aspect-[16/9] bg-slate-900"
                    />
                    <div className="p-6">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        {article.meta}
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-7">
                        {article.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="novinky" className="px-6 py-20 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Rady a novinky
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Rychlá orientace v aktuálních tématech
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Kratší vysvětlení, praktické seznamy a změny, které je dobré
                  znát při plánování renovace.
                </p>
              </div>

              <div className="border-t border-slate-200">
                {newsArticles.map((article) => (
                  <article
                    key={article.title}
                    className="grid gap-5 border-b border-slate-200 py-5 sm:grid-cols-[120px_1fr] sm:items-center"
                  >
                    <PlaceholderVisual
                      type={article.visual}
                      className="aspect-[4/3] rounded-lg"
                    />
                    <div>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold uppercase tracking-[0.12em]">
                        <span className="text-green-700">
                          {article.category}
                        </span>
                        <span className="text-slate-400">{article.date}</span>
                      </div>
                      <h3 className="mt-2 text-lg font-bold leading-7">
                        {article.title}
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-slate-50 px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Všechny články
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Archiv znalostního centra
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Společné místo pro vlastní obsah Enerixu i budoucí články
                  publikované přes Soro.
                </p>
              </div>

              <div className="mt-9 flex flex-col gap-4 border-y border-slate-200 py-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap gap-2">
                  {categoryFilters.map((category) => (
                    <button
                      key={category}
                      type="button"
                      onClick={() => selectCategory(category)}
                      className={`rounded-lg border px-4 py-2 text-sm font-semibold transition ${
                        activeCategory === category
                          ? "border-green-700 bg-green-700 text-white"
                          : "border-slate-300 bg-white text-slate-700 hover:border-green-400"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <label className="relative block w-full lg:max-w-sm">
                  <span className="sr-only">Hledat v článcích</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                  >
                    <circle
                      cx="11"
                      cy="11"
                      r="7"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                    <path
                      d="m16.5 16.5 4 4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                  <input
                    type="search"
                    value={searchQuery}
                    onChange={updateSearch}
                    placeholder="Hledat téma..."
                    className="w-full rounded-lg border border-slate-300 bg-white py-3 pl-11 pr-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </label>
              </div>

              {visibleArticles.length > 0 ? (
                <div className="mt-8 grid gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 md:grid-cols-2">
                  {visibleArticles.map((article) => (
                    <article key={article.title} className="bg-white p-6">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        {article.category}
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-7">
                        {article.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {article.excerpt}
                      </p>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
                  Pro zvolený filtr nejsou v ukázkových datech žádné články.
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="text-sm text-slate-500">
                  Zobrazeno {visibleArticles.length} z {filteredArticles.length}{" "}
                  ukázkových článků
                </div>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setArchivePage((page) => Math.max(1, page - 1))
                    }
                    disabled={archivePage === 1}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Předchozí
                  </button>
                  <span className="min-w-16 text-center text-sm font-semibold text-slate-600">
                    {archivePage} / {pageCount}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setArchivePage((page) => Math.min(pageCount, page + 1))
                    }
                    disabled={archivePage === pageCount}
                    className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Další
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
          Preview koncept znalostního centra Enerixu · není určeno k nasazení
        </footer>
      </div>
    </>
  );
}
