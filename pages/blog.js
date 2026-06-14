import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { demoArticles } from "../data/knowledgeCenterArticles";
import { nzu2026Series } from "../data/knowledgeCenterSeries";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";
import NzuSeriesCover from "../components/NzuSeriesCover";

const SORO_EMBED_URL =
  "https://app.trysoro.com/api/embed/03aa2964-6d5b-4a94-8c67-2d7d9439c483";
const PAGE_SIZE = 6;
const SHOW_PREVIEW_SOURCE_BADGES = true;

const practiceArticles = demoArticles.filter(
  (article) => article.category === "practice"
);
const expertArticles = demoArticles.filter(
  (article) => article.category === "expert" && !article.seriesId
);
const guideArticles = demoArticles.filter(
  (article) =>
    article.category === "renovation-guide" &&
    article.topicLabel === "Průvodce pojmy"
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
    title: "Nevím, kde začít",
    situation:
      "Potřebujete nejdřív pochopit stav domu, pořadí opatření a co má smysl řešit jako první.",
    href: "#pruvodce-nzu-2026",
    linkLabel: "Přejít na průvodce",
  },
  {
    title: "Řeším dotace / NZÚ 2026",
    situation:
      "Chcete se zorientovat v podpoře, rozdílu mezi Light, dílčí a komplexní renovací nebo v roli renovačního pasu.",
    href: "#pruvodce-nzu-2026",
    linkLabel: "Projít dotační kontext",
  },
  {
    title: "Zvažuji konkrétní opatření",
    situation:
      "Zateplení, okna, fotovoltaika, tepelné čerpadlo, střecha nebo větrání - tady se hodí odborný pohled v souvislostech.",
    href: "#expert",
    linkLabel: "Otevřít Enerix Expert",
  },
  {
    title: "Potřebuji pochopit pojmy a podklady",
    situation:
      "PENB, renovační pas, projektová dokumentace, pasport, výkaz výměr nebo technické parametry oken.",
    href: "#pruvodce",
    linkLabel: "Zobrazit pojmy",
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

function PreviewSourceBadge({ article }) {
  if (!SHOW_PREVIEW_SOURCE_BADGES || article.source !== "soro") return null;

  return (
    <span className="inline-flex w-fit items-center rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-amber-800">
      Interní zdroj: Soro
    </span>
  );
}

function ExpertTechnicalVisual({ article }) {
  const slug = article.slug || "";

  if (slug.includes("fotovoltaika")) {
    const production = ["h-5", "h-8", "h-12", "h-16", "h-20", "h-24", "h-24", "h-20", "h-14", "h-10", "h-6", "h-4"];
    const consumption = ["h-12", "h-11", "h-10", "h-9", "h-8", "h-8", "h-8", "h-8", "h-9", "h-10", "h-12", "h-14"];

    return (
      <div className="aspect-[16/9] bg-slate-50 p-5">
        <div className="flex h-full flex-col rounded-md border border-slate-200 bg-white p-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                FVE a spotřeba
              </div>
              <div className="mt-1 text-sm font-semibold text-slate-900">
                měsíční profil domu
              </div>
            </div>
            <div className="text-right text-[11px] leading-5 text-slate-500">
              výroba<br />spotřeba
            </div>
          </div>
          <div className="mt-auto grid h-28 grid-cols-12 items-end gap-1 border-b border-l border-slate-200 pl-2">
            {production.map((height, barIndex) => (
              <div key={`${article.slug}-pv-${barIndex}`} className="flex items-end justify-center gap-0.5">
                <div className={`w-2 rounded-t bg-green-600 ${height}`} />
                <div className={`w-2 rounded-t bg-slate-300 ${consumption[barIndex]}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (slug.includes("zatepleni") || slug.includes("fasada")) {
    return (
      <div className="aspect-[16/9] bg-stone-50 p-5">
        <div className="grid h-full grid-cols-[1fr_1.1fr] overflow-hidden rounded-md border border-slate-200 bg-white">
          <div className="flex flex-col">
            <div className="h-1/5 bg-stone-200" />
            <div className="h-2/5 bg-emerald-100" />
            <div className="h-2/5 bg-slate-300" />
          </div>
          <div className="flex flex-col justify-center gap-3 p-5 text-sm">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
                Řez fasádou
              </div>
              <div className="mt-1 font-semibold text-slate-900">
                vrstvy a návaznosti
              </div>
            </div>
            <div className="space-y-2 text-xs text-slate-600">
              <div className="flex items-center gap-2"><span className="h-2 w-5 rounded bg-stone-200" /> omítka</div>
              <div className="flex items-center gap-2"><span className="h-2 w-5 rounded bg-emerald-100" /> izolace</div>
              <div className="flex items-center gap-2"><span className="h-2 w-5 rounded bg-slate-300" /> zdivo</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (slug.includes("okna")) {
    return (
      <div className="aspect-[16/9] bg-sky-50 p-5">
        <div className="relative h-full rounded-md border border-slate-200 bg-white p-5">
          <div className="absolute left-6 top-5 text-xs font-bold uppercase tracking-[0.14em] text-green-700">
            Připojovací spára
          </div>
          <div className="absolute bottom-5 right-5 rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-bold text-slate-900">
            Uw jako výsledek celku
          </div>
          <div className="mx-auto mt-7 grid h-32 w-44 grid-cols-[1fr_2fr_1fr] overflow-hidden rounded border border-slate-300">
            <div className="bg-slate-200" />
            <div className="border-x border-slate-300 bg-sky-100" />
            <div className="bg-slate-200" />
          </div>
          <div className="mx-auto mt-2 h-3 w-52 rounded-full bg-green-200" />
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] bg-slate-50 p-5">
      <div className="flex h-full items-center justify-center rounded-md border border-slate-200 bg-white p-5">
        <div className="grid w-full max-w-sm grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-3 text-center text-sm font-semibold text-slate-700">
          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-4">stav domu</div>
          <div className="text-green-700">→</div>
          <div className="rounded-md border border-green-200 bg-green-50 px-3 py-4">návrh</div>
          <div className="text-green-700">→</div>
          <div className="rounded-md border border-slate-200 bg-slate-50 px-3 py-4">realizace</div>
        </div>
      </div>
    </div>
  );
}

function ConceptGuideVisual({ index }) {
  const palettes = [
    "from-rose-500 to-rose-200",
    "from-violet-600 to-violet-200",
    "from-emerald-700 to-emerald-200",
    "from-indigo-600 to-indigo-200",
    "from-teal-700 to-teal-200",
    "from-amber-700 to-amber-200",
  ];
  const palette = palettes[index % palettes.length];

  return (
    <div className={`relative h-full min-h-[126px] overflow-hidden bg-gradient-to-br ${palette} md:aspect-[16/9] md:min-h-0`}>
      <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-white/12 md:h-32 md:w-32" />
      <div className="absolute -bottom-10 -right-8 h-24 w-24 rounded-full bg-white/18 md:h-32 md:w-32" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-20 w-20 rounded-lg bg-white/95 shadow-sm md:h-28 md:w-28">
          <div className="absolute left-4 right-4 top-6 h-1 rounded-full bg-green-800 md:left-6 md:right-6 md:top-8" />
          <div className="absolute left-4 right-4 top-10 h-1 rounded-full bg-green-800 md:left-6 md:right-6 md:top-14" />
          <div className="absolute left-4 right-8 top-14 h-1 rounded-full bg-green-800 md:left-6 md:right-12 md:top-20" />
          <div className="absolute bottom-3 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-green-500 md:bottom-4 md:h-7 md:w-7" />
        </div>
      </div>
    </div>
  );
}

function StarterGuide() {
  return (
    <section
      id="kde-zacit"
      className="scroll-mt-6 border-b border-slate-200 bg-slate-50/80 px-6 py-8 md:px-10 md:py-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
              Praktický rozcestník
            </div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Co teď řešíte?
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-slate-600 md:text-base md:leading-7">
            Vyberte si cestu podle toho, v jaké fázi renovace právě jste.
            Nemusíte hned znát správné technické řešení ani dotační program.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {starterScenarios.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="group flex min-h-[170px] flex-col justify-between rounded-md border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md md:p-5"
            >
              <div>
                <div className="mb-3 h-1.5 w-10 rounded-full bg-green-600" />
                <h3 className="text-base font-bold leading-6 text-slate-950 md:text-lg md:leading-7">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.situation}
                </p>
              </div>
              <div className="mt-5 text-sm font-bold text-green-700">
                {item.linkLabel} <span aria-hidden="true">→</span>
              </div>
            </a>
          ))}
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
              Kompletní archiv včetně pracovních návrhů obsahu pro redakční kontrolu.
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
            ["renovation-guide", "Průvodce renovací"],
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
                      alt={article.coverAlt || ""}
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
                  {article.source === "soro" && (
                    <div className="mb-2">
                      <PreviewSourceBadge article={article} />
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
      <Head>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl("/blog")} />
      </Head>
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
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={absoluteUrl("/blog")} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <Header />

        <main>
          <section className="border-b border-slate-200 bg-white px-6 pb-6 pt-10 md:px-10 md:pb-0 md:pt-12">
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Znalostní centrum Enerixu
                </span>
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

              <nav
                aria-label="Kategorie znalostního centra"
                className="mt-8 hidden gap-7 border-t border-slate-200 pt-5 text-sm font-semibold md:flex"
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
                  href="#pruvodce"
                  className="whitespace-nowrap border-b-2 border-transparent pb-4 text-slate-700 hover:border-green-300 hover:text-green-700"
                >
                  Průvodce renovací
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

          <section id="praxe" className="scroll-mt-6 border-b border-slate-200 px-6 py-11 md:px-10">
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
                      alt={leadArticle.coverAlt || ""}
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
                          alt={article.coverAlt || ""}
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
            className="scroll-mt-6 border-y border-slate-200 bg-slate-100/70 px-6 py-11 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="text-sm font-bold uppercase tracking-[0.16em] text-green-700">
                    Technické souvislosti
                  </div>
                  <h2 className="mt-2 text-3xl font-bold">Enerix Expert</h2>
                </div>
                <p className="max-w-2xl text-sm leading-6 text-slate-600">
                  Analytické články pro rozhodování: grafy, skladby konstrukcí,
                  technické detaily a návaznosti opatření místo další inspirace
                  fotkami domů.
                </p>
              </div>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {expertArticles.slice(0, 3).map((article) => (
                  <a
                    key={article.slug}
                    href={demoHref(article.slug)}
                    className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:border-green-300 hover:shadow-md"
                  >
                    <ExpertTechnicalVisual article={article} />
                    <div className="p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        {article.label}
                      </div>
                      <h3 className="mt-3 text-lg font-bold leading-7 text-slate-950">
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
            id="pruvodce"
            className="scroll-mt-6 border-b border-slate-200 bg-white px-6 py-11 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <h2 className="text-3xl font-bold">Průvodce pojmy</h2>
              <p className="mt-2 text-sm text-slate-600">
                Srozumitelně vysvětlené dokumenty, technické parametry a
                podklady, které se při renovaci často pletou.
              </p>

              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {guideArticles.slice(0, 6).map((article, index) => (
                  <a
                    key={article.slug}
                    href={demoHref(article.slug)}
                    className="group grid grid-cols-[112px_minmax(0,1fr)] overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm transition hover:border-green-300 hover:shadow-md md:block"
                  >
                    <ConceptGuideVisual index={index} />
                    <div className="p-4 md:p-5">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        Pojem
                      </div>
                      <h3 className="mt-2 text-base font-bold leading-6 md:mt-3 md:text-lg md:leading-7">
                        {article.title}
                      </h3>
                      <div className="mt-3 md:mt-4">
                        <ArticleMeta article={article} compact />
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-7 text-center">
                <SectionLink href="#clanky">
                  Zobrazit všechny průvodce
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
                Aktuální změny, kratší vysvětlení a pracovní návrhy obsahu pro redakční kontrolu.
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-3">
                {newsArticles.map((article) => (
                  <a
                    key={article.slug}
                    href={demoHref(article.slug)}
                    className="group rounded-md border border-slate-200 bg-slate-50/70 p-5 transition hover:border-green-300 hover:bg-green-50/50"
                  >
                    <div className="min-w-0">
                      <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                        {article.label}
                      </div>
                      <h3 className="mt-2 font-bold leading-6">
                        {article.title}
                      </h3>
                      <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-600">
                        {article.excerpt}
                      </p>
                      <div className="mt-4">
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
        date: article.date || "Pracovní návrh",
        readingTime: "4 min čtení",
        href: `/blog?post=${article.slug}`,
        source: "soro",
        internalSource: "soro",
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
