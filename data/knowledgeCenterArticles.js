import expertSourceArticles from "./enerixExpertArticles.json";

const previewArticles = [
  {
    slug: "jak-jsme-pripravili-renovaci-domu-po-etapach",
    category: "practice",
    categoryLabel: "Z praxe Enerixu",
    label: "Případová studie",
    title: "Jak jsme připravili renovaci domu po jednotlivých etapách",
    excerpt:
      "Majitelé chtěli renovovat dům postupně, ale potřebovali vědět, co udělat nejdřív a jak připravit jednotlivé kroky, aby na sebe později navazovaly.",
    image: "/knowledge-center/renovace-po-etapach.webp",
    location: "Tábor",
    propertyType: "Rodinný dům",
    date: "Modelový příběh",
    readingTime: "7 min čtení",
    intro:
      "Tento demonstrační příběh ukazuje, jak může Enerix převést obecnou představu o renovaci do srozumitelného plánu. Nejde o skutečnou referenci; konkrétní údaje budou později nahrazeny ověřenými podklady.",
    sections: [
      {
        title: "Výchozí situace",
        text: "Dům měl starší okna, nezateplenou obálku a původní zdroj tepla. Majitelé nechtěli všechno realizovat najednou, ale potřebovali jistotu, že první investice neomezí další etapy.",
      },
      {
        title: "Navržený postup",
        text: "Nejprve jsme popsali cílový stav domu a rozdělili renovaci do logických kroků. Součástí přípravy bylo posouzení obálky, oken, střechy, vytápění a možností podpory.",
        bullets: [
          "příprava návazností zateplení a oken",
          "rozdělení investice do zvládnutelných etap",
          "prověření dotací a orientačních nákladů",
        ],
      },
      {
        title: "Co si z příběhu odnést",
        text: "Etapová renovace může fungovat dobře, pokud už první krok vychází z představy o výsledném celku. Právě tato příprava pomáhá předcházet předělávkám a zbytečným nákladům.",
      },
    ],
  },
  {
    slug: "tepelne-cerpadlo-a-fotovoltaika-v-rodinnem-dome",
    category: "practice",
    categoryLabel: "Z praxe Enerixu",
    label: "Modelový projekt",
    title: "Tepelné čerpadlo a fotovoltaika v rodinném domě",
    excerpt:
      "Ukázka projektu, ve kterém je potřeba sladit spotřebu domu, výkon zdroje tepla, fotovoltaiku a budoucí provoz domácnosti.",
    image: "/knowledge-center/tepelne-cerpadlo-fotovoltaika.webp",
    location: "Písek",
    propertyType: "Rodinný dům",
    date: "Modelový příběh",
    readingTime: "6 min čtení",
    intro:
      "Modelový projekt představuje způsob, jakým lze posuzovat tepelné čerpadlo a fotovoltaiku společně. Čísla a parametry budou před zveřejněním nahrazeny skutečnými podklady.",
    sections: [
      {
        title: "Nejdřív potřeby domu",
        text: "Výběr technologií začíná u tepelné ztráty, otopné soustavy a běžné spotřeby domácnosti. Samostatný návrh každé technologie může vést k předimenzování nebo horšímu využití vyrobené energie.",
      },
      {
        title: "Co je potřeba sladit",
        text: "Návrh pracuje s očekávaným provozem v průběhu roku, přípravou teplé vody a možností řídit část spotřeby.",
        bullets: [
          "odpovídající výkon tepelného čerpadla",
          "velikost fotovoltaiky podle reálné spotřeby",
          "návaznost na zateplení a budoucí změny domu",
        ],
      },
      {
        title: "Výsledek přípravy",
        text: "Klient získává jeden společný návrh místo dvou oddělených nabídek. Díky tomu může lépe posoudit investici, provozní náklady i pořadí realizace.",
      },
    ],
  },
  {
    slug: "zatepleni-domu-a-vymena-oken-s-dotacni-podporou",
    category: "practice",
    categoryLabel: "Z praxe Enerixu",
    label: "Modelová realizace",
    title: "Zateplení domu a výměna oken s dotační podporou",
    excerpt:
      "Jak připravit fasádu, okna a detaily domu jako jeden celek a současně neztratit přehled o dotačních podmínkách.",
    image: "/knowledge-center/zatepleni-okna.webp",
    location: "Strakonice",
    propertyType: "Rodinný dům",
    date: "Modelový příběh",
    readingTime: "5 min čtení",
    intro:
      "Demonstrační realizace ukazuje, jak budou na webu prezentovány skutečné fotografie, rozsah prací a zkušenosti z projektu. Nejde zatím o ověřenou referenci.",
    sections: [
      {
        title: "Proč řešit fasádu a okna společně",
        text: "Způsob osazení oken, řešení ostění a tloušťka izolace se vzájemně ovlivňují. Společná příprava umožňuje lépe vyřešit technické detaily i výsledný vzhled.",
      },
      {
        title: "Příprava před realizací",
        text: "Před zahájením prací je potřeba určit rozsah, zkontrolovat návaznosti a připravit podklady pro případnou podporu.",
        bullets: [
          "kontrola stavu fasády a okenních otvorů",
          "návrh detailů ostění, soklu a napojení střechy",
          "sladění technického řešení s dotačními podklady",
        ],
      },
      {
        title: "Co bude u skutečné reference",
        text: "Finální případová studie může doplnit fotografie před a po, konkrétní rozsah, průběh spolupráce, orientační úsporu a vyjádření klienta.",
      },
    ],
  },
  {
    slug: "poradi-renovacnich-opatreni-a-proc-na-nem-zalezi",
    category: "expert",
    categoryLabel: "Enerix Expert",
    label: "Technické řešení",
    title: "Pořadí renovačních opatření a proč na něm záleží",
    excerpt:
      "Nesprávné pořadí může vést k předělávkám, zbytečně vysokým nákladům nebo špatně navrženým technologiím.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/90a34141-3586-46bf-bad2-16db22fe4090.webp",
    date: "Návrhový článek",
    readingTime: "8 min čtení",
    intro:
      "Pořadí renovace není univerzální, ale některé závislosti se opakují téměř u každého domu. Tento základ článku je připravený k odborné kontrole a doplnění.",
    sections: [
      {
        title: "Začněte cílovým stavem",
        text: "Než se vybere první opatření, je potřeba vědět, jak má dům fungovat po dokončení celé renovace. Jinak může dílčí rozhodnutí omezit další možnosti.",
      },
      {
        title: "Typické návaznosti",
        text: "Obálka domu ovlivňuje potřebný výkon vytápění, nová okna mění způsob větrání a rekonstrukce střechy může být příležitostí pro izolaci i fotovoltaiku.",
        bullets: [
          "obálka domu před definitivním návrhem zdroje tepla",
          "okna společně s fasádou a větráním",
          "střecha s ohledem na izolaci a fotovoltaiku",
        ],
      },
      {
        title: "Kdy lze postup rozdělit",
        text: "Renovaci je možné etapizovat, ale jednotlivé etapy musí respektovat společný plán. To je hlavní role renovačního pasu nebo obdobné přípravy.",
      },
    ],
  },
  {
    slug: "jak-se-rozhodnout-mezi-zdroji-tepla",
    category: "expert",
    categoryLabel: "Enerix Expert",
    label: "Technické řešení",
    title: "Jak se rozhodnout mezi zdroji tepla a jak je správně kombinovat",
    excerpt:
      "Rozhodnutí nevychází jen z ceny zařízení. Důležitý je stav domu, otopná soustava, provoz a plánované úpravy.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/d554b212-4530-4d44-96fa-3d986fce28f0.webp",
    date: "Návrhový článek",
    readingTime: "9 min čtení",
    intro:
      "Zdroj tepla je součást energetiky celého domu. Článek nabízí praktickou osnovu rozhodování, kterou je před publikací potřeba doplnit o konkrétní výpočty a odborné příklady.",
    sections: [
      {
        title: "Co ovlivňuje výběr",
        text: "Základem je tepelná ztráta, potřebná teplota otopné vody, dostupné energie, prostorové možnosti a očekávání domácnosti.",
      },
      {
        title: "Kombinace technologií",
        text: "Fotovoltaika může podpořit provoz tepelného čerpadla, ale jejich výroba a spotřeba se během roku nepotkávají automaticky.",
        bullets: [
          "prověřit skutečný provozní profil domu",
          "nepředimenzovat jednotlivá zařízení",
          "počítat s budoucím zateplením nebo změnou užívání",
        ],
      },
      {
        title: "Rozhodujte podle celkových nákladů",
        text: "Vedle pořizovací ceny je vhodné porovnat provoz, údržbu, životnost a případné stavební úpravy.",
      },
    ],
  },
  {
    slug: "jak-funguji-dotace-na-renovace-v-roce-2026",
    category: "expert",
    categoryLabel: "Enerix Expert",
    label: "Dotace a finance",
    title: "Jak fungují dotace na renovace v roce 2026",
    excerpt:
      "Dotace mohou pomoci správně připravené renovaci, ale neměly by být jediným důvodem pro technické rozhodnutí.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/ac08c4a9-b793-47ff-a162-74cbfd372b3e.webp",
    date: "Návrhový článek",
    readingTime: "6 min čtení",
    intro:
      "Tento demonstrační text záměrně neuvádí konkrétní částky ani závazné podmínky. Před publikací musí být aktualizován podle platných pravidel programu.",
    sections: [
      {
        title: "Dotace jako součást přípravy",
        text: "Nejprve je vhodné navrhnout smysluplný rozsah renovace a potom prověřit, jaké formy podpory lze využít.",
      },
      {
        title: "Co bývá potřeba připravit",
        text: "Rozsah podkladů se liší podle programu a opatření. Obvykle je potřeba doložit stav domu, návrh a splnění technických podmínek.",
        bullets: [
          "technické a energetické posouzení",
          "doklady k nemovitosti a navrženým opatřením",
          "časový a finanční plán realizace",
        ],
      },
      {
        title: "Aktuálnost je zásadní",
        text: "Pravidla se mohou měnit. Každý konkrétní projekt je proto potřeba posoudit podle podmínek platných v době přípravy žádosti.",
      },
    ],
  },
  {
    slug: "nova-zelena-usporam-co-je-noveho-v-roce-2026",
    category: "news",
    categoryLabel: "Rady a novinky",
    label: "Aktualita",
    title: "Nová zelená úsporám: co je nového v roce 2026",
    excerpt:
      "Stručný přehled témat, která je potřeba sledovat při přípravě renovace a dotačních podkladů.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/4809855d-24ef-4e8d-b698-cee1de2cb0ad.webp",
    date: "Návrhový článek",
    readingTime: "4 min čtení",
    intro:
      "Jde o demonstrační osnovu aktuality. Konkrétní pravidla, termíny a parametry musí být před zveřejněním ověřeny podle aktuálních zdrojů.",
    sections: [
      {
        title: "Co sledovat",
        text: "U dotačních programů je důležité rozlišovat obecné oznámení, závazné podmínky a okamžik, kdy lze skutečně podat žádost.",
      },
      {
        title: "Přípravu není nutné odkládat",
        text: "Stav domu, cíle domácnosti a návaznosti jednotlivých opatření lze řešit ještě před zveřejněním všech detailů programu.",
      },
      {
        title: "Ověřte aktuální podmínky",
        text: "Před rozhodnutím je vždy potřeba pracovat s platnou dokumentací a posoudit konkrétní situaci domu.",
      },
    ],
  },
  {
    slug: "priprava-domu-na-zimu",
    category: "news",
    categoryLabel: "Rady a novinky",
    label: "Praktická rada",
    title: "Příprava domu na zimu: na co nezapomenout",
    excerpt:
      "Krátká kontrola vytápění, obálky domu a větrání může včas odhalit problémy, které se v zimě prodraží.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/153bf26d-1cff-4d7e-836b-e704e7f8e784.webp",
    date: "Návrhový článek",
    readingTime: "3 min čtení",
    intro:
      "Praktický demonstrační článek ukazuje formát kratších sezonních rad, které lze později doplnit z odborných podkladů nebo publikovat přes Soro.",
    sections: [
      {
        title: "Zkontrolujte zdroj tepla",
        text: "Servis, tlak v soustavě a správné nastavení regulace je vhodné řešit před začátkem topné sezony.",
      },
      {
        title: "Hledejte netěsnosti a vlhkost",
        text: "Okna, dveře, střecha a problematická místa obálky mohou ukázat, kde dům zbytečně ztrácí teplo.",
      },
      {
        title: "Nezapomeňte na větrání",
        text: "Úspora energie nesmí vést k nedostatečné výměně vzduchu a problémům s vlhkostí.",
      },
    ],
  },
  {
    slug: "pet-chyb-ktere-snizuji-ucinnost-renovace",
    category: "news",
    categoryLabel: "Rady a novinky",
    label: "Praktická rada",
    title: "5 častých chyb, které snižují účinnost renovace",
    excerpt:
      "Dílčí rozhodnutí bez společného plánu mohou snížit přínos investice nebo vytvořit další náklady.",
    image:
      "https://afocirmbqdxnkyescnev.supabase.co/storage/v1/object/public/featured-images/e6e6ca57-5699-472c-90bb-06b4a70b4be5/18f790d5-5683-4ccc-a083-7bf5fe39952b.webp",
    date: "Návrhový článek",
    readingTime: "4 min čtení",
    intro:
      "Tento stručný článek je připravený jako ukázka formátu pro sociální sítě a Soro. Před publikací jej lze doplnit konkrétními zkušenostmi Enerixu.",
    sections: [
      {
        title: "Nejčastější chyby",
        text: "Řada problémů nevzniká nekvalitní technologií, ale chybějící návazností a přípravou.",
        bullets: [
          "výběr zdroje tepla bez znalosti budoucí tepelné ztráty",
          "výměna oken bez řešení větrání a fasády",
          "fotovoltaika navržená bez analýzy spotřeby",
          "rozhodování pouze podle výše dotace",
          "realizace bez společného harmonogramu profesí",
        ],
      },
      {
        title: "Jak riziko snížit",
        text: "Pomáhá jednoduchý plán cílového stavu domu, kontrola návazností a jasné rozdělení kroků před podpisem jednotlivých objednávek.",
      },
    ],
  },
];

const retainedPreviewArticles = previewArticles.filter(
  (article) => article.category !== "expert"
);

export const demoArticles = [
  ...retainedPreviewArticles.slice(0, 3),
  ...expertSourceArticles,
  ...retainedPreviewArticles.slice(3),
];

export const demoArticlesBySlug = Object.fromEntries(
  demoArticles.map((article) => [article.slug, article])
);
