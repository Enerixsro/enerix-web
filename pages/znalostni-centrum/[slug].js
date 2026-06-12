import Head from "next/head";
import { demoArticles, demoArticlesBySlug } from "../../data/knowledgeCenterArticles";

const safetyNote =
  "Informace v článku jsou orientační a vycházejí z podmínek známých v době přípravy textu. Programy podpory se mohou měnit a konkrétní možnost podpory vždy závisí na aktuálních pravidlech, typu domu, vlastnictví, domácnosti, rozsahu opatření a schválení příslušnými institucemi.";

const editorialContent = {
  "nova-zelena-usporam-2026-jednoduse": {
    notice:
      "Konkrétní forma podpory se liší podle zvolené cesty. U některých opatření může jít o přímou podporu, u jiných o zvýhodněné financování nebo kompenzaci úroků. Proto je vždy potřeba ověřit nejen to, zda je opatření podporované, ale také jakou formou se podpora poskytuje.",
    related: ["nzu-2026-prakticky-light-750000-komplexni-renovace"],
  },
  "nzu-2026-prakticky-light-750000-komplexni-renovace": {
    cardTitle: "Rychlý rozcestník: která cesta se vás může týkat?",
    cards: [
      {
        title: "NZÚ Light",
        text: "Může dávat smysl u seniorů, nízkopříjmových domácností nebo některých domácností s invalidním důchodem, pokud splní podmínky programu.",
      },
      {
        title: "Dílčí renovace",
        text: "Může dávat smysl, pokud řešíte jen část domu, například okna, fasádu, strop, zdroj tepla nebo fotovoltaiku.",
      },
      {
        title: "Komplexní renovace",
        text: "Může dávat smysl, pokud řešíte dům jako celek a větší rozsah opatření.",
      },
      {
        title: "Kombinace financování",
        text: "Bude důležitá tehdy, když celková rekonstrukce stojí víc než podporovaná energetická část.",
      },
    ],
    related: [
      "co-kdyz-dotace-na-rekonstrukci-nestaci",
      "renovacni-pas-2026",
      "dilci-nebo-komplexni-renovace",
      "mokry-dum-spatna-strecha-stara-okna",
    ],
  },
  "co-kdyz-dotace-na-rekonstrukci-nestaci": {
    notice:
      "U běžné NZÚ pro rodinné domy je potřeba rozlišovat podporu a samotné financování. Část podpory může být navázána na zvýhodněný úvěr poskytovaný bankou nebo stavební spořitelnou. Schválení úvěru ale není automatické a vždy záleží na posouzení konkrétní finanční instituce.",
    cardTitle: "Rychlé shrnutí: co si z článku odnést",
    cards: [
      { text: "Dotace obvykle neřeší celou rekonstrukci domu." },
      {
        text: "NZÚ a zvýhodněný úvěr se týkají hlavně energetických opatření.",
      },
      {
        text: "Koupelna, kuchyň, rozvody, podlahy nebo interiéry se často financují jinak.",
      },
      {
        text: "U větší rekonstrukce je potřeba sestavit celkový finanční plán.",
      },
      {
        text: "Enerix pomáhá rozdělit záměr na energetickou část, ostatní práce, podporu, úvěr a etapy realizace.",
      },
    ],
    comparison: [
      {
        title: "Energetická část",
        items: [
          "zateplení fasády",
          "zateplení střechy nebo stropu",
          "výměna oken",
          "zdroj vytápění",
          "ohřev vody",
          "fotovoltaika",
          "větrání",
        ],
      },
      {
        title: "Ostatní část rekonstrukce",
        items: [
          "koupelna",
          "kuchyň",
          "elektroinstalace",
          "rozvody vody a odpadů",
          "podlahy",
          "interiéry",
          "dispozice",
          "schodiště",
          "vybavení domu",
        ],
      },
    ],
    extra:
      "Enerix nepřebírá roli banky a nemůže garantovat schválení úvěru. Pomáháme ale připravit záměr tak, aby bylo jasnější, co je energetická část, co je ostatní rekonstrukce, jaké podklady budou potřeba a jaké možnosti financování má smysl prověřit.",
    related: [
      "nzu-2026-prakticky-light-750000-komplexni-renovace",
      "renovacni-pas-2026",
    ],
  },
  "renovacni-pas-2026": {
    cardTitle: "Jednoduše řečeno: co je renovační pas",
    cardIntro:
      "Renovační pas je plán renovace domu. Ukazuje současný stav budovy, navržená opatření, vhodné pořadí kroků, orientační náklady, možné úspory a návaznost na dotace nebo financování. Nenahrazuje projektovou dokumentaci ani stavební povolení, ale pomáhá rozhodnout, jak s domem postupovat dál.",
    cards: [
      { title: "Současný stav domu", text: "Výchozí stav budovy a její hlavní slabiny." },
      { title: "Navržená opatření", text: "Kroky, které mohou dávat smysl pro konkrétní dům." },
      { title: "Pořadí a etapy", text: "Návaznosti a možné rozdělení renovace v čase." },
      {
        title: "Náklady, úspory a financování",
        text: "Orientační rámec pro další rozhodování.",
      },
    ],
    notice:
      "Renovační pas není rozhodnutí o přiznání podpory. Je to podklad, který pomáhá navrhnout a ověřit vhodný postup. Konkrétní možnost podpory se vždy posuzuje podle aktuálních podmínek programu, domu, domácnosti a navržených opatření.",
    warningTitle: "Pozor: renovační pas není projekt",
    warning:
      "Renovační pas nenahrazuje projektovou dokumentaci, stavební povolení, rozpočet od realizační firmy ani specializované posudky. Pokud má dům vážnější technický problém, například vlhkost, zatékání, statické trhliny nebo památkovou ochranu, může být potřeba další odborné posouzení.",
    related: [
      "nzu-2026-prakticky-light-750000-komplexni-renovace",
      "co-kdyz-dotace-na-rekonstrukci-nestaci",
      "dilci-nebo-komplexni-renovace",
    ],
  },
  "dilci-nebo-komplexni-renovace": {
    notice:
      "Komplexní renovace v programu neznamená jen to, že je rekonstrukce dražší. Musí jít o záměr, který splní konkrétní technické podmínky programu, zejména ve vztahu k obálce budovy, energetickému hodnocení a návazným opatřením.",
    related: [
      "nzu-2026-prakticky-light-750000-komplexni-renovace",
      "renovacni-pas-2026",
      "chci-rekonstruovat-dum-koho-oslovit",
    ],
  },
  "chci-rekonstruovat-dum-koho-oslovit": {
    notice:
      "Pokud záměr vyžaduje specializované posouzení, například projektanta, statika, specialistu na vlhkost, památkáře nebo banku, cílem Enerixu je pomoci určit, kdy má takový odborník vstoupit do procesu.",
    related: [
      "renovacni-pas-2026",
      "dilci-nebo-komplexni-renovace",
      "mokry-dum-spatna-strecha-stara-okna",
    ],
  },
  "mokry-dum-spatna-strecha-stara-okna": {
    notice:
      "Enerix v takové situaci nepředstírá, že každou technickou poruchu vyřeší přímo sám. Pomáhá ale rozpoznat, že je potřeba nejdříve přizvat vhodného odborníka a až následně řešit dotační nebo finanční cestu.",
    related: ["chci-rekonstruovat-dum-koho-oslovit", "renovacni-pas-2026"],
  },
};

function MetaItem({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true">{icon}</span>
      {children}
    </span>
  );
}

function isSectionHeading(text) {
  if (text.length > 92 || /[.,?!:;]$/.test(text) || text.includes("\n")) {
    return false;
  }

  return /^(?:\d+\.|A co|Co |Dílčí |Dotace |Dvě |Energetická |Jak |Jednoduch|Jednoduše|Kde |Kdy |Když |Komplexní |Lepší |Mokrý |Nejdřív|Nejčastější|NZÚ |Pozor|Pro koho|Proč |Příklad|První dům|Renovační|Rychlé|Rychlý|Stará |Špatná |Typick|Závěr)/.test(
    text
  );
}

function InfoBox({ children, title, tone = "green" }) {
  const styles =
    tone === "amber"
      ? "border-amber-200 bg-amber-50"
      : "border-green-200 bg-green-50";

  return (
    <aside className={`rounded-lg border p-5 md:p-6 ${styles}`}>
      {title && <h2 className="text-lg font-bold">{title}</h2>}
      <div className={title ? "mt-3" : ""}>{children}</div>
    </aside>
  );
}

function EditorialBlocks({ config }) {
  if (!config) return null;

  return (
    <div className="mt-8 space-y-6">
      {config.notice && (
        <InfoBox>
          <p className="leading-7 text-slate-700">{config.notice}</p>
        </InfoBox>
      )}

      {(config.cardIntro || config.cards) && (
        <InfoBox title={config.cardTitle}>
          {config.cardIntro && (
            <p className="leading-7 text-slate-700">{config.cardIntro}</p>
          )}
          {config.cards && (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {config.cards.map((card, index) => (
                <div
                  key={`${card.title || "bod"}-${index}`}
                  className="rounded-md border border-green-100 bg-white p-4"
                >
                  {card.title && <h3 className="font-bold">{card.title}</h3>}
                  <p className={`${card.title ? "mt-2 " : ""}text-sm leading-6 text-slate-600`}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          )}
        </InfoBox>
      )}

      {config.comparison && (
        <div className="grid gap-4 md:grid-cols-2">
          {config.comparison.map((column) => (
            <InfoBox key={column.title} title={column.title}>
              <ul className="space-y-2 text-sm leading-6 text-slate-700">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-green-700">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </InfoBox>
          ))}
        </div>
      )}

      {config.extra && (
        <InfoBox>
          <p className="leading-7 text-slate-700">{config.extra}</p>
        </InfoBox>
      )}

      {config.warning && (
        <InfoBox title={config.warningTitle} tone="amber">
          <p className="leading-7 text-slate-700">{config.warning}</p>
        </InfoBox>
      )}
    </div>
  );
}

function ResponsiveTables({ tables }) {
  return tables?.map((table, tableIndex) => {
    const [header, ...rows] = table;
    return (
      <section key={tableIndex} className="mt-8">
        <div className="grid gap-3 md:grid-cols-2">
          {rows.map((row) => (
            <div
              key={row.join("-")}
              className="rounded-lg border border-slate-200 bg-white p-5"
            >
              <h3 className="font-bold">{row[0]}</h3>
              {row.slice(1).map((cell, cellIndex) => (
                <div key={cell} className="mt-3">
                  <div className="text-xs font-bold uppercase tracking-[0.1em] text-green-700">
                    {header[cellIndex + 1]}
                  </div>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{cell}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  });
}

function SourceArticleBody({ article }) {
  const paragraphs = article.paragraphs || [];

  return (
    <>
      <EditorialBlocks config={editorialContent[article.slug]} />
      <ResponsiveTables tables={article.tables} />
      <div className="mt-12">
        {paragraphs.slice(1).map((paragraph, index) => {
          if (isSectionHeading(paragraph)) {
            return (
              <h2 key={index} className="mb-4 mt-10 text-2xl font-bold leading-tight">
                {paragraph}
              </h2>
            );
          }

          if (paragraph.includes("\n")) {
            return (
              <ul key={index} className="my-5 space-y-2">
                {paragraph.split("\n").map((line) => (
                  <li key={line} className="flex gap-3 leading-7 text-slate-700">
                    <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                    {line}
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <p key={index} className="my-3 leading-8 text-slate-600">
              {paragraph}
            </p>
          );
        })}
      </div>
    </>
  );
}

export default function KnowledgeCenterArticle({ article }) {
  const editorial = editorialContent[article.slug];
  const relatedArticles = (editorial?.related || [])
    .map((slug) => demoArticlesBySlug[slug])
    .filter(Boolean);

  return (
    <>
      <Head>
        <title>{article.title} | Znalostní centrum Enerixu</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
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
              <a href="/#sluzby" className="hover:text-green-700">
                Služby
              </a>
              <a href="/#realizace" className="hover:text-green-700">
                Realizace
              </a>
              <a href="/o-enerixu" className="hover:text-green-700">
                O Enerixu
              </a>
              <a href="/spoluprace" className="hover:text-green-700">
                Spolupráce
              </a>
              <a href="/blog" className="text-green-700">
                Znalostní centrum
              </a>
              <a href="/#kontakt" className="hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main>
          <article>
            <div className="mx-auto max-w-4xl px-6 pb-12 pt-10 md:px-10 md:pt-14">
              <a
                href="/blog"
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                ← Zpět do znalostního centra
              </a>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {article.label}
                </span>
                <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                  Čeká na kontrolu článku
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                {article.location && (
                  <MetaItem icon="⌖">{article.location}</MetaItem>
                )}
                {article.propertyType && (
                  <MetaItem icon="⌂">{article.propertyType}</MetaItem>
                )}
                <MetaItem icon="◷">{article.readingTime}</MetaItem>
              </div>

              {article.tags && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="mx-auto max-w-6xl px-6 md:px-10">
              <div className="aspect-[16/8] overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
              <p className="border-l-4 border-green-600 pl-6 text-lg leading-8 text-slate-700">
                {article.intro || article.paragraphs?.[0]}
              </p>

              {article.paragraphs ? (
                <SourceArticleBody article={article} />
              ) : (
                <div className="mt-12 space-y-11">
                  {article.sections.map((section) => (
                    <section key={section.title}>
                      <h2 className="text-2xl font-bold">{section.title}</h2>
                      <p className="mt-4 leading-8 text-slate-600">{section.text}</p>
                      {section.bullets && (
                        <ul className="mt-5 space-y-3">
                          {section.bullets.map((bullet) => (
                            <li key={bullet} className="flex gap-3 leading-7 text-slate-700">
                              <span aria-hidden="true" className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  ))}
                </div>
              )}

              {article.paragraphs && (
                <>
                  <aside className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6">
                    <h2 className="text-xl font-bold">Řešíte podobnou situaci?</h2>
                    <p className="mt-2 leading-7 text-slate-600">
                      Řešíte starší dům a nejste si jistí, kde začít? Pomůžeme
                      vám zorientovat se v možnostech renovace, podpory,
                      financování a dalším postupu.
                    </p>
                    <a
                      href="/#kontakt"
                      className="mt-5 inline-flex rounded-md bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                    >
                      Chci konzultaci renovace domu
                    </a>
                  </aside>

                  {relatedArticles.length > 0 && (
                    <section className="mt-12">
                      <h2 className="text-xl font-bold">Pokračujte v sérii</h2>
                      <div className="mt-4 grid gap-3">
                        {relatedArticles.map((related) => (
                          <a
                            key={related.slug}
                            href={`/znalostni-centrum/${related.slug}`}
                            className="rounded-md border border-slate-200 p-4 font-semibold leading-6 text-slate-800 transition hover:border-green-400 hover:bg-green-50"
                          >
                            {related.title} <span aria-hidden="true">→</span>
                          </a>
                        ))}
                      </div>
                    </section>
                  )}

                  <aside className="mt-12 border-t border-slate-200 pt-6 text-xs leading-6 text-slate-500">
                    {safetyNote}
                  </aside>
                </>
              )}

              {!article.paragraphs && (
                <aside className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6">
                  <h2 className="text-lg font-bold">Poznámka k demu</h2>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Tento článek ukazuje budoucí formát příběhu nebo odborného
                    obsahu. Před případným zveřejněním bude text zkontrolován,
                    doplněn o skutečná data a propojen s reálnými fotografiemi.
                  </p>
                </aside>
              )}
            </div>
          </article>
        </main>

        <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
          © 2026 Enerix s.r.o. · Průvodce renovací vašeho domu
        </footer>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: demoArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      article: demoArticlesBySlug[params.slug],
    },
  };
}
