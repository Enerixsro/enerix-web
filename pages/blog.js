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
    return (
      <div className="aspect-[16/9] bg-[#eef6f2] p-4">
        <svg viewBox="0 0 640 360" role="img" aria-label="Schéma výroby a spotřeby fotovoltaiky" className="h-full w-full">
          <rect x="18" y="18" width="604" height="324" rx="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="44" y="58" fill="#166534" fontSize="20" fontWeight="700">FVE: výroba vs. spotřeba</text>
          <text x="44" y="84" fill="#64748b" fontSize="14">roční profil rodinného domu</text>
          <line x1="60" y1="286" x2="560" y2="286" stroke="#cbd5e1" strokeWidth="2" />
          <line x1="60" y1="120" x2="60" y2="286" stroke="#cbd5e1" strokeWidth="2" />
          <polyline points="70,260 110,238 150,190 190,150 230,125 270,112 310,116 350,132 390,166 430,205 470,238 520,262" fill="none" stroke="#15803d" strokeWidth="5" strokeLinecap="round" />
          <polyline points="70,208 110,214 150,220 190,225 230,230 270,232 310,232 350,228 390,220 430,212 470,206 520,202" fill="none" stroke="#334155" strokeWidth="4" strokeLinecap="round" />
          <rect x="420" y="55" width="122" height="54" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <circle cx="440" cy="75" r="5" fill="#15803d" />
          <text x="454" y="79" fill="#334155" fontSize="13">výroba</text>
          <circle cx="440" cy="94" r="5" fill="#334155" />
          <text x="454" y="98" fill="#334155" fontSize="13">spotřeba</text>
          <text x="66" y="314" fill="#64748b" fontSize="12">zima</text>
          <text x="286" y="314" fill="#64748b" fontSize="12">léto</text>
          <text x="492" y="314" fill="#64748b" fontSize="12">zima</text>
        </svg>
      </div>
    );
  }

  if (slug.includes("zatepleni") || slug.includes("fasada")) {
    return (
      <div className="aspect-[16/9] bg-[#f4f1eb] p-4">
        <svg viewBox="0 0 640 360" role="img" aria-label="Řez skladbou zateplené fasády" className="h-full w-full">
          <rect x="18" y="18" width="604" height="324" rx="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="44" y="58" fill="#166534" fontSize="20" fontWeight="700">Řez fasádou</text>
          <text x="44" y="84" fill="#64748b" fontSize="14">skladba vrstev a tepelný most</text>
          <rect x="86" y="118" width="48" height="150" fill="#d6d3d1" stroke="#a8a29e" />
          <rect x="134" y="118" width="90" height="150" fill="#bbf7d0" stroke="#86efac" />
          <rect x="224" y="118" width="34" height="150" fill="#f5f5f4" stroke="#d6d3d1" />
          <rect x="258" y="118" width="18" height="150" fill="#94a3b8" />
          <path d="M86 118 h190 v150 h-190 z" fill="none" stroke="#334155" strokeWidth="2" />
          <path d="M150 106 c18 32 18 72 0 104 c-15 28 -13 50 6 76" fill="none" stroke="#ef4444" strokeWidth="4" strokeLinecap="round" />
          <line x1="276" y1="140" x2="462" y2="112" stroke="#94a3b8" />
          <line x1="224" y1="192" x2="462" y2="190" stroke="#94a3b8" />
          <line x1="134" y1="246" x2="462" y2="260" stroke="#94a3b8" />
          <text x="476" y="116" fill="#334155" fontSize="14" fontWeight="700">vnější omítka</text>
          <text x="476" y="195" fill="#334155" fontSize="14" fontWeight="700">izolace</text>
          <text x="476" y="264" fill="#334155" fontSize="14" fontWeight="700">nosná stěna</text>
          <text x="94" y="300" fill="#ef4444" fontSize="13" fontWeight="700">detail ostění / tepelný most</text>
        </svg>
      </div>
    );
  }

  if (slug.includes("okna")) {
    return (
      <div className="aspect-[16/9] bg-[#eef6f8] p-4">
        <svg viewBox="0 0 640 360" role="img" aria-label="Detail připojení okna ve zdivu" className="h-full w-full">
          <rect x="18" y="18" width="604" height="324" rx="14" fill="#ffffff" stroke="#cbd5e1" />
          <text x="44" y="58" fill="#166534" fontSize="20" fontWeight="700">Detail okna</text>
          <text x="44" y="84" fill="#64748b" fontSize="14">profil, spára a montážní rovina</text>
          <rect x="145" y="110" width="170" height="142" rx="8" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="5" />
          <rect x="178" y="138" width="104" height="86" rx="4" fill="#f8fafc" stroke="#64748b" strokeWidth="4" />
          <rect x="110" y="96" width="36" height="170" fill="#cbd5e1" />
          <rect x="314" y="96" width="36" height="170" fill="#cbd5e1" />
          <rect x="145" y="252" width="170" height="28" fill="#bbf7d0" />
          <line x1="315" y1="130" x2="466" y2="102" stroke="#94a3b8" />
          <line x1="315" y1="196" x2="466" y2="184" stroke="#94a3b8" />
          <line x1="232" y1="252" x2="466" y2="266" stroke="#94a3b8" />
          <text x="480" y="106" fill="#334155" fontSize="14" fontWeight="700">rám / profil</text>
          <text x="480" y="188" fill="#334155" fontSize="14" fontWeight="700">připojovací spára</text>
          <text x="480" y="270" fill="#334155" fontSize="14" fontWeight="700">těsnicí rovina</text>
          <rect x="60" y="286" width="118" height="32" rx="8" fill="#f8fafc" stroke="#cbd5e1" />
          <text x="76" y="307" fill="#334155" fontSize="14" fontWeight="700">Uw není jen sklo</text>
        </svg>
      </div>
    );
  }

  return (
    <div className="aspect-[16/9] bg-[#f1f5f9] p-4">
      <svg viewBox="0 0 640 360" role="img" aria-label="Rozhodovací mapa technického opatření" className="h-full w-full">
        <rect x="18" y="18" width="604" height="324" rx="14" fill="#ffffff" stroke="#cbd5e1" />
        <text x="44" y="58" fill="#166534" fontSize="20" fontWeight="700">Rozhodovací mapa</text>
        <text x="44" y="84" fill="#64748b" fontSize="14">stav domu, návaznosti a vhodné pořadí</text>
        <rect x="64" y="144" width="120" height="56" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
        <rect x="260" y="118" width="120" height="56" rx="10" fill="#ecfdf5" stroke="#86efac" />
        <rect x="260" y="218" width="120" height="56" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
        <rect x="456" y="168" width="120" height="56" rx="10" fill="#f8fafc" stroke="#cbd5e1" />
        <path d="M184 172 H242" stroke="#15803d" strokeWidth="3" />
        <path d="M242 172 L260 146" stroke="#15803d" strokeWidth="3" />
        <path d="M242 172 L260 246" stroke="#15803d" strokeWidth="3" />
        <path d="M380 146 L456 196" stroke="#15803d" strokeWidth="3" />
        <path d="M380 246 L456 196" stroke="#15803d" strokeWidth="3" />
        <text x="91" y="178" fill="#334155" fontSize="15" fontWeight="700">stav domu</text>
        <text x="290" y="152" fill="#334155" fontSize="15" fontWeight="700">opatření</text>
        <text x="291" y="252" fill="#334155" fontSize="15" fontWeight="700">dotace</text>
        <text x="482" y="202" fill="#334155" fontSize="15" fontWeight="700">pořadí</text>
      </svg>
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
