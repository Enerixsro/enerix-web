import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { demoArticles } from "../data/knowledgeCenterArticles";
import {
  nzu2026Series,
  SHOW_KNOWLEDGE_CENTER_REVIEW_BADGES,
} from "../data/knowledgeCenterSeries";
import NzuSeriesCover from "../components/NzuSeriesCover";

const SORO_EMBED_URL =
  "https://app.trysoro.com/api/embed/03aa2964-6d5b-4a94-8c67-2d7d9439c483";
const PAGE_SIZE = 6;

const practiceArticles = demoArticles.filter(
  (article) => article.category === "practice"
);
const expertArticles = demoArticles.filter(
  (article) => article.category === "expert" && !article.seriesId
);
const seriesArticles = nzu2026Series.articles
  .map((item) => demoArticles.find((article) => article.slug === item.slug))
  .filter(Boolean);
const newsArticles = demoArticles.filter(
  (article) => article.category === "news"
);

const demoHref = (slug) => `/znalostni-centrum/${slug}`;

const starterScenarios = [
  {
    title: "Slyšel/a jsem o NZÚ 2026",
    situation: "Chci vědět, jestli se mě dotace týká a co má smysl řešit.",
    firstStep:
      "Začněte přehledem možností podpory, ale berte ji jako součást renovace, ne jako jediný cíl.",
    href: demoHref("nova-zelena-usporam-2026-jednoduse"),
    linkLabel: "Začít přehledem NZÚ 2026",
  },
  {
    title: "Mám starší dům a nevím, co první",
    situation: "Nechci udělat drahé rozhodnutí ve špatném pořadí.",
    firstStep:
      "Nejdřív zmapujte stav domu, slabá místa a technické problémy, které mohou ovlivnit další kroky.",
    href: demoHref("mokry-dum-spatna-strecha-stara-okna"),
    linkLabel: "Zjistit, kdy dotace není první krok",
  },
  {
    title: "Řeším zateplení, okna nebo vytápění",
    situation: "Potřebuji vědět, co na sebe navazuje a co může počkat.",
    firstStep:
      "Ověřte správné pořadí opatření, aby se investice nepřebíjely a dům směřoval k jednomu cílovému stavu.",
    href: demoHref("poradi-renovacnich-opatreni-a-proc-na-nem-zalezi"),
    linkLabel: "Pochopit pořadí opatření",
  },
  {
    title: "Chci renovovat postupně",
    situation: "Rozpočet nejde vyřešit najednou, ale nechci si zavřít budoucí možnosti.",
    firstStep:
      "Uvažujte v etapách a hlídejte návaznosti, aby první krok dával smysl i po dokončení celé renovace.",
    href: demoHref("jak-jsme-pripravili-renovaci-domu-po-etapach"),
    linkLabel: "Podívat se na etapový postup",
  },
  {
    title: "Mám nabídky a nevím, čemu věřit",
    situation: "Porovnávám různé firmy, technologie a ceny.",
    firstStep:
      "Srovnávejte nabídky podle cílového stavu domu, ne jen podle nejnižší ceny nebo jedné izolované technologie.",
    href: demoHref("chci-rekonstruovat-dum-koho-oslovit"),
    linkLabel: "Ujasnit si první kontakt",
  },
];

function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <a href="/" className="flex items-center gap-3">
          <img src="/favicon-32x32.png" alt="" className="h-10 w-10" />
          <div>
            <div className="font-bold tracking-[0.2em]">ENERIX</div>
            <div className="text-xs text-slate-500">
              Průvodce renovací vašeho domu
            </div>
          </div>
        </a>

        <nav
          aria-label="Hlavní navigace"
          className="grid w-full min-w-0 grid-cols-3 gap-2 text-center text-[11px] font-semibold text-slate-700 sm:flex sm:w-auto sm:items-center sm:gap-x-5 sm:text-left sm:text-sm"
        >
          <a href="/#sluzby" className="transition hover:text-green-700">
            Služby
          </a>
          <a href="/#realizace" className="transition hover:text-green-700">
            Realizace
          </a>
          <a href="/o-enerixu" className="transition hover:text-green-700">
            O Enerixu
          </a>
          <a href="/spoluprace" className="transition hover:text-green-700">
            Spolupráce
          </a>
          <a
            href="/blog"
            className="border-b-2 border-green-600 py-2 text-green-700"
          >
            Znalostní centrum
          </a>
          <a href="/#kontakt" className="transition hover:text-green-700">
            Kontakt
          </a>
        </nav>
      </div>
    </header>
  );
}

function ArticleMeta({ article, compact = false }) {
  return (
    <div
      className={`flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 ${
        compact ? "text-[11px]" : "text-xs"
      }`}
    >
      {article.location && <span>⌖ {article.location}</span>}
      {article.propertyType && <span>⌂ {article.propertyType}</span>}
      {article.date && <span>▣ {article.date}</span>}
      <span>◷ {article.readingTime}</span>
    </div>
  );
}

function SectionLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center rounded-md border border-green-300 bg-white px-5 py-2.5 text-sm font-semibold text-green-800 transition hover:border-green-500 hover:bg-green-50"
    >
      {children}
      <span aria-hidden="true" className="ml-2">
        →
      </span>
    </a>
  );
}

function SeriesPartBadge({ article, compact = false }) {
  if (!article.seriesIndex) return null;

  return (
    <span
      className={`inline-flex items-center rounded-full bg-green-700 font-bold uppercase tracking-[0.1em] text-white ${
        compact ? "px-2.5 py-1 text-[10px]" : "px-3 py-1.5 text-xs"
      }`}
    >
      Část {article.seriesIndex}/{article.seriesTotal}
    </span>
  );
}

function StarterGuide() {
  return (
    <section
      id="kde-zacit"
      className="scroll-mt-6 border-b border-slate-200 bg-slate-50/70 px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
              Praktický rozcestník
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Co právě řešíte?
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Vyberte situaci, která je vám nejbližší. Cílem není hned vybrat
              dotaci nebo technologii, ale najít první rozumný krok podle stavu
              domu, rozpočtu a návazností.
            </p>
          </div>

          <div className="grid gap-3">
            {starterScenarios.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="group rounded-md border border-slate-200 bg-white p-5 shadow-sm transition hover:border-green-300 hover:shadow-md"
              >
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="min-w-0">
                    <h3 className="text-lg font-bold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.situation}
                    </p>
                    <p className="mt-3 border-l-2 border-green-600 pl-4 text-sm leading-6 text-slate-700">
                      <span className="font-semibold">První krok: </span>
                      {item.firstStep}
                    </p>
                  </div>
                  <div className="shrink-0 text-sm font-bold text-green-700 md:pt-1">
                    {item.linkLabel} <span aria-hidden="true">→</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function NzuSeriesSection() {
  const firstArticle = seriesArticles[0];

  return (
    <section
      id="pruvodce-nzu-2026"
      className="scroll-mt-6 border-y border-green-100 bg-green-50/45 px-6 py-10 md:px-10 md:py-12"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
              NZÚ 2026 v kontextu renovace
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Řešíte Novou zelenou úsporám 2026? Začněte tady.
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Dotace může renovaci významně pomoct, ale správný postup nezačíná
              formulářem. Nejdřív je potřeba pochopit stav domu, slabá místa,
              návaznosti opatření a až potom ověřit, jaká podpora dává smysl.
            </p>

            {firstArticle && (
              <a
                href={demoHref(firstArticle.slug)}
                className="mt-6 inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
              >
                Začít prvním dílem průvodce
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </a>
            )}
          </div>

          <div className="rounded-md border border-green-200 bg-white p-5 shadow-sm md:p-6">
            <h3 className="text-lg font-bold text-slate-900">
              {nzu2026Series.title}
            </h3>
            <ol className="mt-5 grid gap-3">
              {seriesArticles.map((article) => (
                <li key={article.slug}>
                  <a
                    href={demoHref(article.slug)}
                    className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-3 rounded-md p-2 transition hover:bg-green-50"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-green-200 bg-green-50 text-sm font-bold text-green-800">
                      {article.seriesIndex}
                    </span>
                    <span className="min-w-0">
                      <span className="block font-semibold leading-6 text-slate-900">
                        {article.shortTitle}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">
                        {article.summary}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}

function Archive({ soroArticles }) {
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const archiveArticles = useMemo(() => {
    const modelArticles = demoArticles.map((article) => ({
      ...article,
      href: demoHref(article.slug),
      source: "demo",
    }));
    return [...modelArticles, ...soroArticles];
  }, [soroArticles]);

  const filteredArticles = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase("cs");
    return archiveArticles.filter((article) => {
      const matchesFilter =
        filter === "all" || article.category === filter;
      const matchesQuery =
        !normalizedQuery ||
        `${article.title} ${article.excerpt || ""}`
          .toLocaleLowerCase("cs")
          .includes(normalizedQuery);
      return matchesFilter && matchesQuery;
    });
  }, [archiveArticles, filter, query]);

  const pageCount = Math.max(1, Math.ceil(filteredArticles.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const visibleArticles = filteredArticles.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const updateFilter = (value) => {
    setFilter(value);
    setPage(1);
  };

  return (
    <section
      id="clanky"
      className="scroll-mt-6 border-t border-slate-200 px-6 py-12 md:px-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="text-3xl font-bold">Všechny články</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Kompletní archiv včetně automaticky publikovaného obsahu ze Soro.
            </p>
          </div>
          <label className="relative block w-full lg:max-w-sm">
            <span className="sr-only">Hledat v článcích</span>
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
              placeholder="Hledat v článcích..."
              className="w-full rounded-md border border-slate-300 bg-white px-4 py-2.5 pr-10 text-sm outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
            <span
              aria-hidden="true"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
            >
              ⌕
            </span>
          </label>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1">
          {[
            ["all", "Vše"],
            ["practice", "Z praxe"],
            ["expert", "Expert"],
            ["news", "Rady a novinky"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() => updateFilter(value)}
              className={`whitespace-nowrap rounded-md border px-4 py-2 text-sm font-semibold transition ${
                filter === value
                  ? "border-green-600 bg-green-50 text-green-800"
                  : "border-transparent text-slate-700 hover:border-slate-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {visibleArticles.length ? (
          <div className="mt-6 grid gap-x-8 gap-y-0 border-y border-slate-200 md:grid-cols-2">
            {visibleArticles.map((article) => (
              <a
                key={`${article.source}-${article.slug}`}
                href={article.href}
                className="group grid min-w-0 grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-slate-200 py-4 transition last:border-b-0 hover:bg-green-50/40 sm:grid-cols-[112px_minmax(0,1fr)] md:[&:nth-last-child(-n+2)]:border-b-0"
              >
                <div className="aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                  {article.seriesId ? (
                    <NzuSeriesCover article={article} thumbnail />
                  ) : (
                    <img
                      src={article.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="min-w-0 py-0.5">
                  {article.seriesIndex && (
                    <div className="mb-2">
                      <SeriesPartBadge article={article} compact />
                    </div>
                  )}
                  <h3 className="line-clamp-2 font-bold leading-6">
                    {article.title}
                  </h3>
                  <div className="mt-2 text-xs font-semibold text-green-700">
                    {article.categoryLabel}
                  </div>
                  <div className="mt-2">
                    <ArticleMeta article={article} compact />
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="mt-6 rounded-md border border-slate-200 py-12 text-center text-sm text-slate-500">
            Pro zadané hledání jsme žádný článek nenašli.
          </div>
        )}

        {pageCount > 1 && (
          <nav
            aria-label="Stránkování článků"
            className="mt-7 flex items-center justify-center gap-2"
          >
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
              className="h-9 w-9 rounded-md border border-slate-300 text-sm disabled:opacity-35"
              aria-label="Předchozí stránka"
            >
              ‹
            </button>
            {Array.from({ length: pageCount }, (_, index) => index + 1).map(
              (pageNumber) => (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setPage(pageNumber)}
                  className={`h-9 min-w-9 rounded-md px-2 text-sm font-semibold ${
                    currentPage === pageNumber
                      ? "bg-green-700 text-white"
                      : "border border-slate-300 text-slate-700"
                  }`}
                >
                  {pageNumber}
                </button>
              )
            )}
            <button
              type="button"
              disabled={currentPage === pageCount}
              onClick={() =>
                setPage((value) => Math.min(pageCount, value + 1))
              }
              className="h-9 w-9 rounded-md border border-slate-300 text-sm disabled:opacity-35"
              aria-label="Další stránka"
            >
              ›
            </button>
          </nav>
        )}

        <div className="mt-12 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-bold">Nevíte, kde s renovací začít?</h2>
            <p className="mt-1 text-sm leading-6 text-slate-600">
              Pomůžeme vám zorientovat se v souvislostech a správném pořadí
              kroků.
            </p>
          </div>
          <a
            href="/#kontakt"
            className="inline-flex items-center justify-center rounded-md border border-green-300 px-5 py-2.5 text-sm font-semibold text-green-800 transition hover:border-green-500 hover:bg-green-50"
          >
            Domluvit nezávaznou konzultaci
          </a>
        </div>
      </div>
    </section>
  );
}

function SoroArticleView() {
  return (
    <>
      <Header />
      <main className="mx-auto min-h-[70vh] max-w-7xl px-6 py-10 md:px-10">
        <div id="soro-blog"></div>
      </main>
      <Script src={SORO_EMBED_URL} strategy="afterInteractive" />
    </>
  );
}

export default function BlogPage({ soroArticles = [] }) {
  const router = useRouter();
  const leadArticle = practiceArticles[0];

  if (router.isReady && router.query.post) {
    return (
      <div className="min-h-screen overflow-x-hidden bg-white text-slate-900">
        <SoroArticleView />
      </div>
    );
  }

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
        <Header />

        <main>
          <section className="border-b border-slate-200 bg-white px-6 pb-0 pt-10 md:px-10 md:pt-12">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Znalostní centrum Enerixu
                </span>
                {SHOW_KNOWLEDGE_CENTER_REVIEW_BADGES && (
                  <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                    Čeká na kontrolu článků
                  </span>
                )}
              </div>
              <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Nevíte, kde začít s renovací domu?
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-slate-600 md:text-lg">
                Enerix pomáhá majitelům domů pochopit stav budovy, správné
                pořadí kroků, možnosti dotací, financování a realizace.
                Renovace nezačíná dotací, ale tím, že víte, co váš dům opravdu
                potřebuje.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center justify-center rounded-md bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
                >
                  Chci nezávazně probrat svůj dům
                </a>
                <a
                  href="#kde-zacit"
                  className="inline-flex items-center justify-center rounded-md border border-green-300 bg-white px-5 py-3 text-sm font-semibold text-green-800 transition hover:border-green-500 hover:bg-green-50"
                >
                  Najít, kde začít
                </a>
              </div>

              <div className="mt-8 grid gap-3 border-t border-slate-200 pt-6 text-sm text-slate-700 md:grid-cols-3">
                {[
                  ["Nejdřív stav domu", "Slabá místa a návaznosti určují, co řešit jako první."],
                  ["Dotace v kontextu", "NZÚ 2026 může pomoct, ale nemá řídit celé rozhodnutí."],
                  ["Praxe před teorií", "Ukazujeme postupy na domech, etapách a reálných otázkách klientů."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-md border border-slate-200 bg-slate-50 p-4">
                    <div className="font-bold text-slate-900">{title}</div>
                    <p className="mt-1 leading-6">{text}</p>
                  </div>
                ))}
              </div>

              <nav
                aria-label="Kategorie znalostního centra"
                className="mt-7 flex gap-7 overflow-x-auto text-sm font-semibold"
              >
                <a
                  href="#kde-zacit"
                  className="whitespace-nowrap border-b-2 border-green-600 pb-4 text-green-700"
                >
                  Kde začít
                </a>
                <a
                  href="#praxe"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 hover:border-green-300 hover:text-green-700"
                >
                  Z praxe Enerixu
                </a>
                <a
                  href="#pruvodce-nzu-2026"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 hover:border-green-300 hover:text-green-700"
                >
                  NZÚ 2026
                </a>
                <a
                  href="#expert"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 hover:border-green-300 hover:text-green-700"
                >
                  Enerix Expert
                </a>
                <a
                  href="#novinky"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 hover:border-green-300 hover:text-green-700"
                >
                  Rady a novinky
                </a>
              </nav>
            </div>
          </section>

          <StarterGuide />

          <section id="praxe" className="scroll-mt-6 px-6 py-11 md:px-10">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold">Z praxe Enerixu</h2>
              <p className="mt-2 text-sm text-slate-600">
                Konkrétní zkušenosti z projektů, konzultací a přípravy renovací.
              </p>

              <div className="mt-6 grid gap-5 lg:grid-cols-[1.65fr_0.85fr]">
                <a
                  href={demoHref(leadArticle.slug)}
                  className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
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
                  <div className="p-6">
                    <h3 className="text-2xl font-bold leading-8 md:text-3xl">
                      {leadArticle.title}
                    </h3>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
                      {leadArticle.excerpt}
                    </p>
                    <div className="mt-5">
                      <ArticleMeta article={leadArticle} />
                    </div>
                  </div>
                </a>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
                  {practiceArticles.slice(1).map((article) => (
                    <a
                      key={article.slug}
                      href={demoHref(article.slug)}
                      className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
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
                        <div className="mt-4">
                          <ArticleMeta article={article} compact />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit další příběhy z praxe
                </SectionLink>
              </div>
            </div>
          </section>

          <NzuSeriesSection />

          <section
            id="expert"
            className="scroll-mt-6 border-y border-green-100 bg-green-50/60 px-6 py-11 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold">Enerix Expert</h2>
              <p className="mt-2 text-sm text-slate-600">
                Odborné know-how pro správná rozhodnutí při renovaci.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {expertArticles.slice(0, 3).map((article) => (
                  <a
                    key={article.slug}
                    href={demoHref(article.slug)}
                    className="group overflow-hidden rounded-md border border-green-100 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md"
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
                        <ArticleMeta article={article} compact />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit všechny články Enerix Expert
                </SectionLink>
              </div>
            </div>
          </section>

          <section
            id="novinky"
            className="scroll-mt-6 border-b border-slate-200 px-6 py-11 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold">Rady a novinky</h2>
              <p className="mt-2 text-sm text-slate-600">
                Aktuální změny, kratší vysvětlení a hlavní prostor pro
                automaticky publikovaný obsah ze Soro.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {newsArticles.map((article) => (
                  <a
                    key={article.slug}
                    href={demoHref(article.slug)}
                    className="group grid min-w-0 grid-cols-[96px_minmax(0,1fr)] gap-4 border-b border-slate-200 pb-5 transition hover:border-green-400 sm:grid-cols-[140px_minmax(0,1fr)] md:grid-cols-1 md:border-b-0 md:pb-0 lg:grid-cols-[120px_minmax(0,1fr)]"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-md bg-slate-100">
                      <img
                        src={article.image}
                        alt=""
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-bold leading-6">{article.title}</h3>
                      <div className="mt-3">
                        <ArticleMeta article={article} compact />
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

          <Archive soroArticles={soroArticles} />
        </main>

        <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
          © 2026 Enerix s.r.o. · Průvodce renovací vašeho domu
        </footer>

        <div id="soro-blog" className="hidden" aria-hidden="true"></div>
        <Script src={SORO_EMBED_URL} strategy="afterInteractive" />
      </div>
    </>
  );
}

export async function getStaticProps() {
  try {
    const response = await fetch(SORO_EMBED_URL);
    if (!response.ok) {
      throw new Error(`Soro feed returned ${response.status}`);
    }

    const script = await response.text();
    const match = script.match(/var SORO_ARTICLES = (\[.*?\]);/s);
    if (!match) {
      throw new Error("Soro article data was not found");
    }

    const soroArticles = JSON.parse(match[1])
      .filter((article) => article?.slug && article?.title && article?.image)
      .map((article) => ({
        slug: article.slug,
        category: "news",
        categoryLabel: "Rady a novinky",
        title: article.title,
        excerpt: article.excerpt || "",
        image: article.image,
        date: article.date || "Soro",
        readingTime: "4 min čtení",
        href: `/blog?post=${article.slug}`,
        source: "soro",
      }));

    return {
      props: { soroArticles },
      revalidate: 3600,
    };
  } catch (error) {
    return {
      props: { soroArticles: [] },
      revalidate: 300,
    };
  }
}
