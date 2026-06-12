export const SHOW_KNOWLEDGE_CENTER_REVIEW_BADGES = true;

export const nzu2026Series = {
  id: "nzu-2026",
  title: "Průvodce NZÚ 2026 krok za krokem",
  description:
    "Sedmidílná série pro majitele starších domů, kteří chtějí pochopit, jak v roce 2026 uvažovat o renovaci, dotaci, zvýhodněném úvěru, renovačním pasu a správném pořadí kroků.",
  articles: [
    {
      slug: "nova-zelena-usporam-2026-jednoduse",
      shortTitle: "Jak se v NZÚ 2026 vyznat",
      coverTitle: "Jak se v NZÚ 2026 vyznat",
      coverIcon: "orientation",
      summary:
        "Základní orientace: proč nezačínat žádostí, ale stavem domu.",
    },
    {
      slug: "nzu-2026-prakticky-light-750000-komplexni-renovace",
      shortTitle: "Light, 750 000 Kč, nebo 2 miliony?",
      coverTitle: "Tři cesty k renovaci",
      coverIcon: "paths",
      summary:
        "Rozcestník mezi hlavními cestami podle domácnosti a rozsahu renovace.",
    },
    {
      slug: "co-kdyz-dotace-na-rekonstrukci-nestaci",
      shortTitle: "Co když dotace nestačí?",
      coverTitle: "Dotace a financování",
      coverIcon: "financing",
      summary:
        "Jak rozdělit energetickou část a zbytek rekonstrukce.",
    },
    {
      slug: "renovacni-pas-2026",
      shortTitle: "Renovační pas",
      coverTitle: "Renovační pas domu",
      coverIcon: "document",
      summary: "Co ukazuje, kdy pomáhá a co nenahrazuje.",
    },
    {
      slug: "dilci-nebo-komplexni-renovace",
      shortTitle: "Dílčí nebo komplexní renovace",
      coverTitle: "Dílčí, nebo komplexní?",
      coverIcon: "scope",
      summary: "Proč je rozdíl důležitý hned na začátku.",
    },
    {
      slug: "chci-rekonstruovat-dum-koho-oslovit",
      shortTitle: "Koho oslovit jako prvního",
      coverTitle: "Koho oslovit jako prvního",
      coverIcon: "workflow",
      summary:
        "Kdy začít Enerixem, projektantem, technickým posouzením nebo bankou.",
    },
    {
      slug: "mokry-dum-spatna-strecha-stara-okna",
      shortTitle: "Kdy dotace není první krok",
      coverTitle: "Kdy dotace není první krok",
      coverIcon: "warning",
      summary:
        "Vlhkost, střecha, okna a technické problémy, které je potřeba řešit dřív.",
    },
  ],
};

export const nzu2026SeriesBySlug = Object.fromEntries(
  nzu2026Series.articles.map((item, index, items) => [
    item.slug,
    {
      ...item,
      seriesId: nzu2026Series.id,
      seriesTitle: nzu2026Series.title,
      seriesIndex: index + 1,
      seriesTotal: items.length,
      previousSlug: items[index - 1]?.slug || null,
      nextSlug: items[index + 1]?.slug || null,
    },
  ])
);
