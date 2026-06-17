import Head from "next/head";
import { demoArticles, demoArticlesBySlug } from "../../data/knowledgeCenterArticles";
import {
  nzu2026Series,
  SHOW_KNOWLEDGE_CENTER_REVIEW_BADGES,
} from "../../data/knowledgeCenterSeries";
import { absoluteUrl } from "../../data/knowledgeCenterArticleMeta";
import NzuSeriesCover from "../../components/NzuSeriesCover";
import CookieSettingsLink from "../../components/CookieSettingsLink";

const safetyNote =
  "Informace v článku jsou orientační a vycházejí z podmínek známých v době přípravy textu. Programy podpory se mohou měnit a konkrétní možnost podpory vždy závisí na aktuálních pravidlech, typu domu, vlastnictví, domácnosti, rozsahu opatření a schválení příslušnými institucemi.";

const editorialContent = {
  "kdy-se-vyplati-fotovoltaika": {
    related: ["strecha-pri-renovaci-domu", "tepelne-cerpadlo-v-rodinnem-dome"],
  },
  "zatepleni-domu-neni-jen-cena-za-metr": {
    related: ["okna-a-dvere-pri-renovaci-domu", "strecha-pri-renovaci-domu"],
  },
  "okna-a-dvere-pri-renovaci-domu": {
    related: ["zatepleni-domu-neni-jen-cena-za-metr", "strecha-pri-renovaci-domu"],
  },
  "strecha-pri-renovaci-domu": {
    related: ["kdy-se-vyplati-fotovoltaika", "zatepleni-domu-neni-jen-cena-za-metr", "okna-a-dvere-pri-renovaci-domu"],
  },
  "tepelne-cerpadlo-v-rodinnem-dome": {
    related: ["kdy-se-vyplati-fotovoltaika", "zatepleni-domu-neni-jen-cena-za-metr", "okna-a-dvere-pri-renovaci-domu"],
  },
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

  return /^(?:\d+\.|A co|Bez |Co |Dílčí |Dotace |Dvě |Energetická |Jak |Jednoduch|Jednoduše|Je chybějící|Kam |Kde |Kdy |Když |Komplexní |Lepší |Mokrý |Nejdřív|Nejčastější|NZÚ |Okna|Pasport |Podklad |Pozor|Pro koho|Proč |Příklad|První dům|Renovační|Role |Rychlé|Rychlý|Stará |Špatná |Typick|Závěr)/.test(
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

function EditorialBlocks({
  config,
  parts = ["notice", "cards", "comparison", "extra", "warning"],
}) {
  if (!config) return null;

  return (
    <div className="mt-8 space-y-6">
      {parts.includes("notice") && config.notice && (
        <InfoBox>
          <p className="leading-7 text-slate-700">{config.notice}</p>
        </InfoBox>
      )}

      {parts.includes("cards") && (config.cardIntro || config.cards) && (
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

      {parts.includes("comparison") && config.comparison && (
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

      {parts.includes("extra") && config.extra && (
        <InfoBox>
          <p className="leading-7 text-slate-700">{config.extra}</p>
        </InfoBox>
      )}

      {parts.includes("warning") && config.warning && (
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

function isListLead(text) {
  return /:$/.test(text) && text.length < 150;
}

function isLikelyListItem(text, hasPreviousItems = false) {
  const trimmed = text.trim();
  if (!trimmed || isSectionHeading(trimmed) || trimmed.includes("\n")) {
    return false;
  }

  const startsLikeItem =
    /^[a-záčďéěíňóřšťúůýž0-9„]/.test(trimmed) ||
    /^(NZÚ|Dílčí|Komplexní|Energetická|Ostatní|První|Druhý|Třetí)/.test(
      trimmed
    );
  const itemPunctuation = /[,;]$/.test(trimmed) || !/[.!?]$/.test(trimmed);
  const finalItem = hasPreviousItems && trimmed.length < 135 && /[.]$/.test(trimmed);

  return trimmed.length < 150 && startsLikeItem && (itemPunctuation || finalItem);
}

function isMicroBlockLead(text) {
  return /^(Typická situace|Příklad|Jednoduchý příklad|Laicky řečeno):?$/.test(
    text
  );
}

function buildArticleBlocks(paragraphs, insertionIndexes) {
  const source = paragraphs.slice(1).map((text, index) => ({
    text,
    sourceIndex: index + 1,
  }));
  const blocks = [];

  for (let index = 0; index < source.length; index += 1) {
    const current = source[index];

    if (isMicroBlockLead(current.text) && source[index + 1]) {
      const next = source[index + 1];
      blocks.push({
        type: "micro",
        title: current.text.replace(/:$/, ""),
        text: next.text,
        sourceIndex: next.sourceIndex,
      });
      index += 1;
      continue;
    }

    if (isSectionHeading(current.text)) {
      blocks.push({ type: "heading", ...current });
      continue;
    }

    if (current.text.includes("\n")) {
      const items = current.text.split("\n").filter(Boolean);
      blocks.push({
        type: "list",
        items,
        variant: getListVariant(items),
        sourceIndex: current.sourceIndex,
      });
      continue;
    }

    if (isListLead(current.text)) {
      const items = [];
      let cursor = index + 1;
      while (
        cursor < source.length &&
        !insertionIndexes.has(source[cursor - 1]?.sourceIndex) &&
        isLikelyListItem(source[cursor].text, items.length > 0)
      ) {
        items.push(source[cursor]);
        cursor += 1;
      }

      if (items.length >= 2) {
        blocks.push({ type: "lead", ...current });
        blocks.push({
          type: "list",
          items: items.map((item) => item.text),
          variant: getListVariant(items.map((item) => item.text)),
          sourceIndex: items[items.length - 1].sourceIndex,
        });
        index = cursor - 1;
        continue;
      }
    }

    const joined = [current.text];
    let lastSourceIndex = current.sourceIndex;
    let cursor = index + 1;
    while (cursor < source.length && joined.length < 3) {
      const next = source[cursor];
      const wouldCrossInsertion = insertionIndexes.has(lastSourceIndex);
      const canJoin =
        !wouldCrossInsertion &&
        !isSectionHeading(next.text) &&
        !next.text.includes("\n") &&
        !isListLead(next.text) &&
        !isMicroBlockLead(next.text) &&
        joined.join(" ").length + next.text.length < 430;

      if (!canJoin) break;
      joined.push(next.text);
      lastSourceIndex = next.sourceIndex;
      cursor += 1;
    }

    blocks.push({
      type: "paragraph",
      text: joined.join(" "),
      sourceIndex: lastSourceIndex,
    });
    index = cursor - 1;
  }

  return blocks;
}

function getListVariant(items) {
  const normalized = items.map((item) => item.trim());
  const containsSentenceLikeItem = normalized.some(
    (item) =>
      item.length > 74 ||
      /^[„"“]/.test(item) ||
      /[.!?]$/.test(item) ||
      /[,;:].{18,}$/.test(item)
  );

  return containsSentenceLikeItem ? "bullets" : "checklist";
}

function ArticleList({ items, variant = "bullets" }) {
  if (variant === "checklist") {
    return (
      <ul className="my-6 grid gap-x-7 gap-y-3 sm:grid-cols-2">
        {items.map((line) => (
          <li
            key={line}
            className="grid grid-cols-[22px_minmax(0,1fr)] items-start gap-3 text-sm leading-6 text-slate-700"
          >
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-[22px] w-[22px] items-center justify-center rounded-full border border-green-200 bg-green-50 text-[11px] font-bold text-green-700"
            >
              ✓
            </span>
            <span>{line.replace(/,$/, "")}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <ul className="my-6 space-y-3 border-l border-green-200 pl-5">
      {items.map((line) => (
        <li
          key={line}
          className="grid grid-cols-[8px_minmax(0,1fr)] items-start gap-3 leading-7 text-slate-700"
        >
          <span
            aria-hidden="true"
            className="mt-[11px] h-1.5 w-1.5 rounded-full bg-green-600"
          />
          <span>{line.replace(/,$/, "")}</span>
        </li>
      ))}
    </ul>
  );
}

function SourceArticleBody({ article }) {
  const paragraphs = article.paragraphs || [];
  const config = editorialContent[article.slug];
  const delayedEditorialSlugs = [
    "nzu-2026-prakticky-light-750000-komplexni-renovace",
    "co-kdyz-dotace-na-rekonstrukci-nestaci",
  ];
  const topParts =
    article.slug === "renovacni-pas-2026"
      ? ["notice", "cards"]
      : delayedEditorialSlugs.includes(article.slug)
        ? []
        : ["notice", "cards", "comparison", "extra", "warning"];

  const insertsAfterParagraph = (sourceIndex) => {
    if (
      article.slug ===
        "nzu-2026-prakticky-light-750000-komplexni-renovace" &&
      sourceIndex === 6
    ) {
      return <EditorialBlocks config={config} parts={["cards"]} />;
    }

    if (
      article.slug === "co-kdyz-dotace-na-rekonstrukci-nestaci" &&
      sourceIndex === 10
    ) {
      return <EditorialBlocks config={config} parts={["notice", "cards"]} />;
    }

    if (
      article.slug === "co-kdyz-dotace-na-rekonstrukci-nestaci" &&
      sourceIndex === 41
    ) {
      return <EditorialBlocks config={config} parts={["comparison"]} />;
    }

    if (
      article.slug === "co-kdyz-dotace-na-rekonstrukci-nestaci" &&
      sourceIndex === 144
    ) {
      return <EditorialBlocks config={config} parts={["extra"]} />;
    }

    if (article.slug === "renovacni-pas-2026" && sourceIndex === 103) {
      return <EditorialBlocks config={config} parts={["warning"]} />;
    }

    return null;
  };
  const insertionIndexes = new Set(
    article.slug ===
      "nzu-2026-prakticky-light-750000-komplexni-renovace"
      ? [6]
      : article.slug === "co-kdyz-dotace-na-rekonstrukci-nestaci"
        ? [10, 41, 144]
        : article.slug === "renovacni-pas-2026"
          ? [103]
          : []
  );
  const blocks = buildArticleBlocks(paragraphs, insertionIndexes);

  return (
    <>
      {topParts.length > 0 && (
        <EditorialBlocks config={config} parts={topParts} />
      )}
      <ResponsiveTables tables={article.tables} />
      <div className="mt-10">
        {blocks.map((block, index) => {
          const insertedContent = insertsAfterParagraph(block.sourceIndex);

          if (block.type === "heading") {
            return (
              <div key={index}>
                <h2 className="mb-4 mt-11 text-2xl font-bold leading-tight text-slate-900">
                  {block.text}
                </h2>
                {insertedContent}
              </div>
            );
          }

          if (block.type === "list") {
            return (
              <div key={index}>
                <ArticleList items={block.items} variant={block.variant} />
                {insertedContent}
              </div>
            );
          }

          if (block.type === "micro") {
            return (
              <div key={index}>
                <aside className="my-7 rounded-lg border-l-4 border-green-600 bg-green-50 px-5 py-4">
                  <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
                    {block.title}
                  </div>
                  <p className="mt-2 leading-7 text-slate-700">{block.text}</p>
                </aside>
                {insertedContent}
              </div>
            );
          }

          if (block.type === "lead") {
            return (
              <div key={index}>
                <p className="mb-2 mt-5 font-semibold leading-7 text-slate-800">
                  {block.text}
                </p>
                {insertedContent}
              </div>
            );
          }

          return (
            <div key={index}>
              <p className="my-4 leading-8 text-slate-600">{block.text}</p>
              {insertedContent}
            </div>
          );
        })}
      </div>
    </>
  );
}

function SeriesPartBadge({ article }) {
  if (!article.seriesIndex) return null;

  return (
    <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.1em] text-white">
      Část {article.seriesIndex}/{article.seriesTotal}
    </span>
  );
}

function ArticleGallery({ images }) {
  if (!images?.length) return null;

  return (
    <section className="mt-12 border-t border-slate-200 pt-8">
      <h2 className="text-2xl font-bold">Fotky z přípravy podkladů</h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {images.map((image) => (
          <figure
            key={image.src}
            className="overflow-hidden rounded-lg border border-slate-200 bg-white"
          >
            <img
              src={image.src}
              alt={image.alt || ""}
              loading="lazy"
              className="aspect-[16/10] h-full w-full object-cover"
            />
            {image.caption && (
              <figcaption className="px-4 py-3 text-sm leading-6 text-slate-600">
                {image.caption}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

function SeriesNavigation({ article, compact = false }) {
  if (!article.seriesId) return null;

  const previous = article.previousSlug
    ? demoArticlesBySlug[article.previousSlug]
    : null;
  const next = article.nextSlug ? demoArticlesBySlug[article.nextSlug] : null;

  return (
    <nav
      aria-label="Navigace série Průvodce NZÚ 2026"
      className={`rounded-lg border border-green-200 bg-green-50 ${
        compact ? "p-5" : "mt-8 p-5 md:p-6"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-green-700">
            {nzu2026Series.title}
          </div>
          <div className="mt-1 font-bold">
            Část {article.seriesIndex}/{article.seriesTotal}
          </div>
        </div>
        <a
          href="/blog#pruvodce-nzu-2026"
          className="text-sm font-semibold text-green-800 hover:text-green-900"
        >
          Přehled celé série →
        </a>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {previous ? (
          <a
            href={`/znalostni-centrum/${previous.slug}`}
            className="rounded-md border border-green-200 bg-white p-4 transition hover:border-green-500"
          >
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-green-700">
              ← Předchozí · Část {previous.seriesIndex}/{previous.seriesTotal}
            </div>
            <div className="mt-2 font-semibold leading-6">{previous.shortTitle}</div>
          </a>
        ) : (
          <div className="hidden sm:block" />
        )}
        {next && (
          <a
            href={`/znalostni-centrum/${next.slug}`}
            className="rounded-md border border-green-200 bg-white p-4 transition hover:border-green-500"
          >
            <div className="text-xs font-bold uppercase tracking-[0.1em] text-green-700">
              Další · Část {next.seriesIndex}/{next.seriesTotal} →
            </div>
            <div className="mt-2 font-semibold leading-6">{next.shortTitle}</div>
          </a>
        )}
      </div>
    </nav>
  );
}

function SeriesSidebar({ article }) {
  if (!article.seriesId) return null;

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-6 space-y-5">
        <div className="rounded-lg border border-green-200 bg-green-50 p-5">
          <div className="text-xs font-bold uppercase tracking-[0.12em] text-green-700">
            Téma série
          </div>
          <h2 className="mt-2 text-lg font-bold">Nová zelená úsporám 2026</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600">
            Enerix není poskytovatelem podpory. Pomáháme klientům zorientovat
            se v renovaci domu, podkladech, možnostech podpory, financování a
            dalším postupu.
          </p>
        </div>

        <nav
          aria-label="Všechny články série"
          className="rounded-lg border border-slate-200 bg-white p-5"
        >
          <div className="text-sm font-bold">{nzu2026Series.title}</div>
          <div className="mt-4 space-y-1">
            {nzu2026Series.articles.map((item, index) => {
              const isActive = item.slug === article.slug;
              return (
                <a
                  key={item.slug}
                  href={`/znalostni-centrum/${item.slug}`}
                  aria-current={isActive ? "page" : undefined}
                  className={`grid grid-cols-[30px_minmax(0,1fr)] gap-2 rounded-md px-2 py-2.5 text-sm leading-5 transition ${
                    isActive
                      ? "bg-green-50 font-bold text-green-800"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <span className="font-bold text-green-700">{index + 1}/7</span>
                  <span>{item.shortTitle}</span>
                </a>
              );
            })}
          </div>
        </nav>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-5">
          <h2 className="font-bold">Nejste si jistí, kde začít?</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Pomůžeme vám určit rozumný první krok podle stavu domu a vašeho
            záměru.
          </p>
          <a
            href="/#kontakt"
            className="mt-4 inline-flex text-sm font-bold text-green-700 hover:text-green-800"
          >
            Nezávazná konzultace →
          </a>
        </div>
      </div>
    </aside>
  );
}

export default function KnowledgeCenterArticle({ article }) {
  const editorial = editorialContent[article.slug];
  const relatedSlugs = editorial?.related || article.relatedArticles || [];
  const relatedArticles = relatedSlugs
    .map((slug) => demoArticlesBySlug[slug])
    .filter(Boolean);
  const isPublished = article.status === "published";
  const canonicalUrl = absoluteUrl(`/znalostni-centrum/${article.slug}`);
  const coverImageUrl = article.coverImage?.startsWith("http")
    ? article.coverImage
    : absoluteUrl(article.coverImage || "/favicon-32x32.png");

  return (
    <>
      <Head>
        <title>{article.seoTitle}</title>
        <meta name="description" content={article.seoDescription} />
        <meta
          name="robots"
          content={isPublished ? "index,follow" : "noindex,follow"}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={article.seoTitle} />
        <meta property="og:description" content={article.seoDescription} />
        <meta property="og:image" content={coverImageUrl} />
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
                <SeriesPartBadge article={article} />
              </div>

              <h1 className="mt-5 text-[clamp(2rem,9vw,3rem)] font-bold leading-[1.08] tracking-tight md:text-5xl md:leading-tight">
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
                  {article.seriesId && (
                    <span className="rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                      Téma série: Nová zelená úsporám 2026
                    </span>
                  )}
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
                {article.seriesId ? (
                  <NzuSeriesCover article={article} />
                ) : (
                  <img
                    src={article.image}
                    alt={article.coverAlt || ""}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>
            </div>

            <div
              className={`mx-auto grid gap-12 px-6 py-12 md:px-10 md:py-16 ${
                article.seriesId
                  ? "max-w-6xl lg:grid-cols-[minmax(0,1fr)_300px]"
                  : "max-w-3xl"
              }`}
            >
              <div className="min-w-0">
                <p className="border-l-4 border-green-600 pl-6 text-lg leading-8 text-slate-700">
                  {article.intro || article.paragraphs?.[0]}
                </p>

                <div className="lg:hidden">
                  <SeriesNavigation article={article} />
                </div>

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

                <ArticleGallery images={article.gallery} />

                {article.paragraphs && (
                  <>
                    <aside id="orientace" className="mt-12 rounded-lg border border-green-200 bg-green-50 p-6 md:p-7">
                      <div className="max-w-2xl">
                        <h2 className="text-2xl font-bold tracking-tight text-slate-950">
                          Nejste si jistí, co z toho platí pro váš dům?
                        </h2>
                        <p className="mt-3 leading-7 text-slate-700">
                          U renovace domu často nejde o jedno opatření, ale o správné
                          pořadí kroků. První kontakt může sloužit jen k základní
                          orientaci — nemusíte hned vědět, jestli potřebujete dotaci,
                          projekt, renovační pas nebo konkrétní nabídku.
                        </p>
                      </div>
                      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a
                          href="/blog#kde-zacit"
                          className="inline-flex justify-center rounded-md border border-green-300 bg-white px-5 py-3 text-sm font-bold text-green-800 transition hover:border-green-500 hover:bg-green-100"
                        >
                          Chci se nejdřív zorientovat
                        </a>
                        <a
                          href="/#kontakt"
                          className="inline-flex justify-center rounded-md bg-green-700 px-5 py-3 text-sm font-bold text-white transition hover:bg-green-800"
                        >
                          Domluvit konzultaci
                        </a>
                        <a
                          href="/blog"
                          className="inline-flex justify-center rounded-md px-5 py-3 text-sm font-bold text-slate-700 transition hover:bg-white"
                        >
                          Zpět do Znalostního centra
                        </a>
                      </div>
                    </aside>

                    {relatedArticles.length > 0 && (
                      <section className="mt-12">
                        <h2 className="text-xl font-bold">
                          {article.seriesId
                            ? nzu2026Series.title
                            : "Pokračujte v sérii"}
                        </h2>
                        {article.seriesId && (
                          <p className="mt-2 text-sm leading-6 text-slate-600">
                            Navazující díly rozvíjejí jednotlivá rozhodnutí při
                            přípravě renovace.
                          </p>
                        )}
                        <div className="mt-4 grid gap-3">
                          {relatedArticles.map((related) => (
                            <a
                              key={related.slug}
                              href={`/znalostni-centrum/${related.slug}`}
                              className="rounded-md border border-slate-200 p-4 font-semibold leading-6 text-slate-800 transition hover:border-green-400 hover:bg-green-50"
                            >
                              {related.seriesIndex && (
                                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.1em] text-green-700">
                                  Část {related.seriesIndex}/{related.seriesTotal}
                                </span>
                              )}
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

              </div>

              <SeriesSidebar article={article} />
            </div>
          </article>
        </main>

        <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-3 sm:flex-row">
          © 2026 Enerix s.r.o. · Průvodce renovací vašeho domu
            <CookieSettingsLink className="text-slate-400 underline-offset-4 hover:text-white hover:underline" />
          </div>
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
