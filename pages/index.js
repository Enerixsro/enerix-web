import Head from "next/head";
import { useState } from "react";
import CookieSettingsLink from "../components/CookieSettingsLink";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";
import { slugify } from "../lib/tracking";

export default function EnerixLandingPage() {
  const [activeService, setActiveService] = useState(null);
  const [referencePage, setReferencePage] = useState(0);

  async function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xrejyodb", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/dekujeme";
      } else {
        alert(
          "Formulář se nepodařilo odeslat. Zkuste to prosím znovu nebo nás kontaktujte e-mailem."
        );
      }
    } catch (error) {
      alert(
        "Formulář se nepodařilo odeslat. Zkuste to prosím znovu nebo nás kontaktujte e-mailem."
      );
    }
  }

  const services = [
    {
      title: "Zateplení fasády",
      icon: "facade",
      short:
        "Pomůžeme navrhnout zateplení tak, aby dávalo smysl technicky, ekonomicky i dotačně.",
      detail:
        "Zateplení fasády řešíme jako důležitou část celkové renovace domu. Nejde jen o nový vzhled, ale hlavně o snížení tepelných ztrát, lepší komfort bydlení a správnou návaznost na okna, střechu a další opatření. Připravíme návrh, posoudíme možnosti dotace a provedeme vás celým procesem od prvního rozhodnutí až po realizaci.",
      points: [
        "vhodnou skladbu zateplení a tloušťku izolace",
        "návaznosti na okna, sokl, střechu a detaily fasády",
        "podklady pro dotace a smysluplné pořadí renovace",
      ],
    },
    {
      title: "Výměna oken a dveří",
      icon: "window",
      short:
        "Zajistíme výměnu výplní tak, aby navazovala na zateplení, komfort i energetiku domu.",
      detail:
        "Okna a dveře výrazně ovlivňují úniky tepla, hluk, větrání i každodenní komfort. Pomůžeme vybrat řešení, které odpovídá stavu domu a plánované renovaci. Hlídáme technické návaznosti, aby výměna nebyla jen samostatný zásah, ale součást promyšleného celku.",
      points: [
        "výběr vhodných parametrů oken a dveří",
        "správné napojení na zateplení a ostění",
        "dopad na energetické hodnocení a dotace",
      ],
    },
    {
      title: "Rekonstrukce střechy",
      icon: "roof",
      short:
        "Střechu posuzujeme z pohledu konstrukce, izolace, životnosti i návaznosti na další úpravy.",
      detail:
        "Rekonstrukce střechy bývá u starších domů jedním z klíčových kroků. Řešíme, co je potřeba opravit, jak správně pracovat s izolací a jak střechu připravit na budoucí provoz domu. Cílem je spolehlivé řešení, které pomůže ochránit dům a podpoří jeho energetickou úspornost.",
      points: [
        "stav konstrukce, krytiny a tepelných úniků",
        "zateplení střechy nebo podkroví",
        "návaznost na fotovoltaiku, větrání a další opatření",
      ],
    },
    {
      title: "Tepelná čerpadla",
      icon: "heatPump",
      short:
        "Navrhneme vytápění podle potřeb domu, ne podle univerzální šablony.",
      detail:
        "Tepelné čerpadlo má smysl tehdy, když odpovídá tepelným ztrátám domu, způsobu vytápění a očekáváním domácnosti. Pomůžeme posoudit vhodnost řešení, výkon, provozní náklady i návaznost na zateplení, fotovoltaiku nebo úpravy otopné soustavy.",
      points: [
        "vhodný výkon a typ tepelného čerpadla",
        "stav otopné soustavy a přípravu teplé vody",
        "provozní ekonomiku, dotace a dlouhodobý komfort",
      ],
    },
    {
      title: "Fotovoltaika",
      icon: "solar",
      short:
        "Fotovoltaiku zapojujeme do širší energetiky domu, aby dávala praktický i ekonomický smysl.",
      detail:
        "Fotovoltaiku navrhujeme s ohledem na spotřebu domácnosti, technické možnosti domu a další plánovaná opatření. Nejde jen o počet panelů, ale o to, jak systém využijete v běžném provozu, zda dává smysl baterie a jak se řešení propojí s vytápěním nebo ohřevem vody.",
      points: [
        "spotřebu domu a vhodnou velikost systému",
        "baterii, ohřev vody a řízení spotřeby",
        "dotace, návratnost a návaznost na další technologie",
      ],
    },
    {
      title: "Foukaná a stříkaná izolace",
      icon: "insulation",
      short:
        "Řešení pro místa, kde je potřeba rychle a účinně doplnit tepelnou izolaci.",
      detail:
        "Foukaná a stříkaná izolace se hodí pro půdy, stropy, dutiny i hůře přístupná místa. Pomůžeme určit, kde má toto řešení smysl, jaký přinese efekt a jak jej správně zařadit do celkové renovace domu.",
      points: [
        "posouzení míst s největšími tepelnými úniky",
        "vhodný typ izolace podle konstrukce",
        "rychlou realizaci s ohledem na další práce v domě",
      ],
    },
    {
      title: "Sádrokartony",
      icon: "drywall",
      short:
        "Zajistíme sádrokartonové konstrukce jako součást rekonstrukcí, podkroví i technických úprav.",
      detail:
        "Sádrokartonové konstrukce často navazují na zateplení, rozvody, podkroví nebo změnu dispozic. Řešíme je tak, aby výsledné provedení bylo praktické, čisté a připravené pro další užívání domu.",
      points: [
        "podhledy, příčky a úpravy interiéru",
        "návaznost na izolace, rozvody a technické prvky",
        "přípravu prostoru pro dokončovací práce",
      ],
    },
    {
      title: "Rekuperace",
      icon: "ventilation",
      short:
        "Pomůžeme nastavit řízené větrání tak, aby dům lépe dýchal a neztrácel zbytečně teplo.",
      detail:
        "Rekuperace pomáhá zajistit pravidelný přísun čerstvého vzduchu bez velkých tepelných ztrát. Dává smysl zejména u domů, kde se zlepšuje obálka budovy a přirozené netěsnosti mizí. Posoudíme vhodnost řešení, rozsah rozvodů i návaznost na ostatní opatření.",
      points: [
        "vhodný typ řízeného větrání pro konkrétní dům",
        "trasy rozvodů a dopad na interiér",
        "komfort, vlhkost a energetické souvislosti",
      ],
    },
  ];

  const selectedService = services.find(
    (service) => service.title === activeService
  );

  const renderServiceIcon = (icon) => {
    const iconPaths = {
      facade: (
        <>
          <path d="M4 5h16v14H4z" />
          <path d="M4 10h16M9 5v5m6 0v5M7 15h5m4 0h4" />
        </>
      ),
      window: (
        <>
          <path d="M5 3h14v18H5z" />
          <path d="M12 3v18M5 12h14" />
          <path d="m9 9 3 3 3-3" />
        </>
      ),
      roof: (
        <>
          <path d="m3 11 9-7 9 7" />
          <path d="M5 10v10h14V10M9 20v-6h6v6" />
        </>
      ),
      heatPump: (
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 8v4l3 2M7 7l-2-2m12 2 2-2M7 17l-2 2m12-2 2 2" />
        </>
      ),
      solar: (
        <>
          <path d="M4 14h16l-2 7H6z" />
          <path d="m8 14-1 7m5-7v7m4-7 1 7M5 18h14" />
          <path d="M12 2v3m-5.7-.7 2.1 2.1m9.3-2.1-2.1 2.1M4 10h3m10 0h3" />
        </>
      ),
      insulation: (
        <>
          <path d="M4 7h10v4H4zM4 15h10v4H4z" />
          <path d="M14 9h3l3 3-3 3h-3" />
          <path d="M7 7V5m4 2V5M7 21v-2m4 2v-2" />
        </>
      ),
      drywall: (
        <>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 3v18m6-18v18M5 8h14m-14 8h14" />
        </>
      ),
      ventilation: (
        <>
          <path d="M4 8h10a3 3 0 1 0-3-3" />
          <path d="M4 12h14a3 3 0 1 1-3 3" />
          <path d="M4 16h6" />
        </>
      ),
    };

    return (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-6 w-6"
        aria-hidden="true"
      >
        {iconPaths[icon]}
      </svg>
    );
  };

  const renderServiceDetail = (service, className = "") => (
    <div
      className={`rounded-[2rem] border border-green-100 bg-green-50/60 p-6 shadow-sm md:p-8 ${className}`}
    >
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Vybraná oblast
          </div>
          <h3 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 text-lg leading-8 text-slate-700">
            {service.detail}
          </p>
        </div>

        <div className="border-l-4 border-green-500 pl-5">
          <div className="font-semibold text-slate-900">
            Co u toho typicky řešíme
          </div>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
            {service.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-600" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href="#kontakt"
            className="mt-6 inline-flex items-center justify-center rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
          >
            Chci řešit tuto oblast
          </a>
        </div>
      </div>
    </div>
  );

  const benefits = [
    {
      title: "Renovace na klíč",
      text: "Od prvního návrhu až po finální realizaci. Jedno kontaktní místo, jasný postup a méně starostí.",
    },
    {
      title: "Dotace NZÚ",
      text: "Pomůžeme s návrhem opatření, podklady i kompletním vyřízením dotace Nová zelená úsporám.",
    },
    {
      title: "Energetické poradenství",
      text: "Řešení navrhujeme technicky i ekonomicky tak, aby renovace dávala dlouhodobý smysl.",
    },
    {
      title: "Pomoc s financováním",
      text: "Vedle dotací pomáháme také najít vhodný způsob financování renovace.",
    },
  ];

  const cooperationSteps = [
    {
      title: "Úvodní konzultace a základní posouzení domu – zdarma",
      text: "Krátce projdeme stav domu, vaše cíle a možnosti dalšího postupu. Cílem je zjistit, zda a jak dává smysl renovaci řešit.",
    },
    {
      title: "Návrh renovace, dotací a financování",
      text: "Navrhneme vhodné pořadí opatření, prověříme možnosti dotací a případně i financování.",
    },
    {
      title: "Podklady, renovační pas a projektová příprava",
      text: "Připravíme nebo pomůžeme zajistit potřebné podklady, renovační pas, energetické posouzení a další dokumentaci.",
    },
    {
      title: "Koordinace realizace",
      text: "Pokud se rozhodnete pokračovat do realizace, pomůžeme sladit jednotlivé profese a návaznosti tak, aby renovace dávala smysl jako celek.",
    },
    {
      title: "Předání a další doporučení",
      text: "Po dokončení zhodnotíme výsledek, doporučíme další kroky a pomůžeme plánovat případné další etapy renovace.",
    },
  ];

  const references = [
    {
      title: "Zateplení rodinného domu",
      location: "Tábor",
      type: "Fasáda + dotační podpora",
      description:
        "Klient chtěl začít zateplením fasády. Enerix pomohl ověřit dotační možnosti, připravit rozsah prací a sladit realizaci s dalšími možnými kroky renovace.",
      results: [
        "zateplení fasády",
        "dotační podpora",
        "příprava na další etapy",
      ],
      image: null,
      imageAlt: "Ukázkový vizuál zateplení rodinného domu",
      visual: "house",
      visualClass: "bg-emerald-950",
      preview: true,
      href: null,
    },
    {
      title: "Plán postupné renovace domu",
      location: "Jihočeský kraj",
      type: "Renovační pas",
      description:
        "Majitelé domu nevěděli, kde začít. Enerix pomohl pojmenovat priority, rozdělit renovaci do etap a posoudit, které kroky dávají technický i ekonomický smysl.",
      results: [
        "návrh etap renovace",
        "orientační rozpočet",
        "přehled dotačních možností",
      ],
      image: null,
      imageAlt: "Ukázkový vizuál plánu postupné renovace domu",
      visual: "plan",
      visualClass: "bg-slate-800",
      preview: true,
      href: null,
    },
    {
      title: "Energetická studie veřejné budovy",
      location: "Jihočeský kraj",
      type: "Studie + návrh opatření",
      description:
        "Projekt zaměřený na posouzení provozu budovy, návrh úsporných opatření a přípravu dalšího postupu. Ukazuje zkušenost Enerixu s komplexnějšími projekty a souvislostmi.",
      results: [
        "návrh opatření",
        "ekonomické vyhodnocení",
        "podklad pro rozhodování",
      ],
      image: null,
      imageAlt: "Ukázkový vizuál energetické studie veřejné budovy",
      visual: "study",
      visualClass: "bg-stone-700",
      preview: true,
      href: null,
    },
  ];

  const referencesPerPage = 3;
  const referencePageCount = Math.ceil(
    references.length / referencesPerPage
  );
  const visibleReferences = references.slice(
    referencePage * referencesPerPage,
    (referencePage + 1) * referencesPerPage
  );

  const showPreviousReferences = () => {
    setReferencePage((currentPage) =>
      currentPage === 0 ? referencePageCount - 1 : currentPage - 1
    );
  };

  const showNextReferences = () => {
    setReferencePage((currentPage) =>
      currentPage === referencePageCount - 1 ? 0 : currentPage + 1
    );
  };

  const contentAreas = [
    {
      title: "Z praxe Enerixu",
      text: "Praktické zkušenosti z renovací, dotací a jednání s klienty.",
    },
    {
      title: "Enerix Expert",
      text: "Odbornější pohledy na pořadí renovace, energetiku, dotace, financování a časté chyby.",
    },
    {
      title: "Rady a novinky",
      text: "Praktické články a novinky z oblasti renovací, dotací a energetiky.",
    },
  ];

  const renderReferencePlaceholder = (reference) => (
    <div
      role="img"
      aria-label={reference.imageAlt}
      className={`relative flex aspect-[16/10] items-center justify-center overflow-hidden ${reference.visualClass}`}
    >
      <div className="absolute right-4 top-4 z-10 rounded-full border border-amber-200 bg-white/95 px-3 py-1 text-xs font-semibold text-amber-800 shadow-sm">
        Čeká na fotky
      </div>
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:32px_32px]" />
      <svg
        viewBox="0 0 120 120"
        fill="none"
        aria-hidden="true"
        className="relative h-24 w-24 text-white/90"
      >
        {reference.visual === "house" && (
          <>
            <path
              d="M20 57 60 24l40 33"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30 52v44h60V52M50 96V70h20v26"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M90 36V23H78"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {reference.visual === "plan" && (
          <>
            <path
              d="M29 20h48l14 14v66H29V20Z"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinejoin="round"
            />
            <path
              d="M76 20v16h15M43 51h34M43 65h34M43 79h23"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
        {reference.visual === "study" && (
          <>
            <path
              d="M22 96h76M30 96V43h60v53M24 43l36-21 36 21"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43 56h10v10H43zM67 56h10v10H67zM43 75h10v10H43zM67 75h10v10H67z"
              fill="currentColor"
            />
          </>
        )}
      </svg>
      <div className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
        Ukázkový vizuál
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Enerix | Chytrá renovace domu</title>
        <meta
          name="description"
          content="Enerix pomáhá s renovací domu, energetickým poradenstvím, dotacemi a realizací opatření od zateplení po fotovoltaiku."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={absoluteUrl("/")} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/enerix-symbol.png"
                alt=""
                className="h-10 w-10"
              />
              <div>
                <div className="font-bold tracking-wide text-slate-900">
                  ENERIX
                </div>
                <div className="text-xs text-slate-500">
                  Chytré renovace pro váš dům
                </div>
              </div>
            </a>

            <nav
              aria-label="Hlavní navigace"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700"
            >
              <a href="#sluzby" className="transition hover:text-green-700">
                Služby
              </a>
              <a href="#realizace" className="transition hover:text-green-700">
                Realizace
              </a>
              <a href="/o-enerixu" className="transition hover:text-green-700">
                O Enerixu
              </a>
              <a href="/spoluprace" className="transition hover:text-green-700">
                Spolupráce
              </a>
              <a href="/blog" className="transition hover:text-green-700">
                Znalostní centrum
              </a>
              <a href="#kontakt" className="transition hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-green-200 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-200 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-10 md:px-10 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                Enerix • Chytrá renovace pro váš dům
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
                Renovace domu, která dává technický i ekonomický smysl.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Pomáháme majitelům domů s renovací na klíč – od návrhu po
                realizaci. Zajišťujeme zateplení, střechy, okna, tepelná čerpadla,
                fotovoltaiku i větrání. Vyřídíme dotace NZÚ, energetické
                poradenství i financování.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
                >
                  Nezávazná konzultace
                </a>

                <a
                  href="#sluzby"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  Co umíme zajistit
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Komplexní řešení", "Od návrhu po realizaci"],
                  ["Dotace NZÚ", "Včetně podkladů a poradenství"],
                  ["Ekonomika projektu", "Úspory, návratnost, financování"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="font-semibold">{title}</div>
                    <div className="mt-1 text-sm text-slate-600">{text}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
                <img
                  src="/FrontPageImg.png"
                  alt="Moderní rodinný dům po renovaci"
                  className="h-[520px] w-full rounded-[1.5rem] object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-green-200 bg-white p-4 shadow-xl">
                <div className="text-sm font-medium text-slate-500">
                  Na co se zaměřujeme
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  Úspora • Komfort • Hodnota domu
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 pt-12 md:px-10 md:pt-16">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-green-100 bg-green-50/70 p-6 shadow-sm md:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Nová zelená úsporám 2026
              </div>
              <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
                Dotace Nová zelená úsporám 2026 jsou spuštěny
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Pomůžeme vám připravit renovační pas, zorientovat se v možnostech
                dotace a navržená opatření převést do skutečné realizace. Vše řešíme
                v souvislostech, aby renovace dávala smysl technicky i ekonomicky.
              </p>
              <a
                href="#kontakt"
                className="mt-6 inline-flex items-center justify-center rounded-2xl bg-green-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
              >
                Chci probrat možnosti renovace
              </a>
            </div>

            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                "Renovační pas",
                "Dotace a financování",
                "Realizace na klíč",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-2xl border border-green-100 bg-white px-4 py-3 font-semibold text-slate-800 shadow-sm"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path d="m6 12 4 4 8-8" />
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="sluzby" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-2xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Služby
            </div>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Co pro vás zajistíme
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Stavební a energetická opatření řešíme jako jeden celek, aby na sebe
              vše správně navazovalo.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <div key={service.title}>
                <button
                  type="button"
                  data-service-slug={slugify(service.title)}
                  data-cta-location="services_grid"
                  onClick={() =>
                    setActiveService(
                      activeService === service.title ? null : service.title
                    )
                  }
                  className={`w-full rounded-2xl border bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                    activeService === service.title
                      ? "border-green-500 shadow-lg shadow-green-100"
                      : "border-slate-200"
                  }`}
                  aria-expanded={activeService === service.title}
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-700">
                    {renderServiceIcon(service.icon)}
                  </div>
                  <div className="font-semibold text-slate-900">
                    {service.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.short}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-green-700">
                    Zjistit více →
                  </div>
                </button>

                {activeService === service.title &&
                  renderServiceDetail(service, "mt-4 lg:hidden")}
              </div>
            ))}
          </div>

          {selectedService &&
            renderServiceDetail(selectedService, "mt-8 hidden lg:block")}
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-4">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
              >
                <div className="text-xl font-semibold">{item.title}</div>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Jak probíhá spolupráce s Enerixem
            </div>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Jasný postup od prvního rozhovoru po další etapy renovace
            </h2>

            <p className="mt-4 text-lg leading-8 text-slate-600">
              Každý dům i záměr jsou jiné. Proto nejdřív skládáme dohromady
              technické možnosti, dotace, financování a správné pořadí kroků.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {cooperationSteps.map((step, index) => (
              <article
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  {index + 1}
                </div>
                <h3 className="mt-5 font-semibold leading-6 text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        {references.length > 0 && (
          <section
            id="realizace"
            className="scroll-mt-6 border-y border-slate-200 bg-slate-50 px-6 py-20 md:px-10"
          >
            <div className="mx-auto max-w-7xl">
              <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                    Reference a projekty
                  </div>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Vybrané realizace a projekty
                  </h2>
                  <p className="mt-4 text-lg leading-8 text-slate-600">
                    Ukázky typů projektů, které Enerix pomáhá připravovat,
                    koordinovat nebo realizovat.
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {references.some((reference) => reference.preview) && (
                    <div className="w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                      Čeká na reference
                    </div>
                  )}

                  {referencePageCount > 1 && (
                    <div
                      className="flex items-center gap-2"
                      aria-label="Procházení referencí"
                    >
                      <button
                        type="button"
                        onClick={showPreviousReferences}
                        aria-label="Předchozí reference"
                        title="Předchozí reference"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 transition hover:border-green-500 hover:text-green-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            d="m15 18-6-6 6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                      <span className="min-w-12 text-center text-sm font-semibold text-slate-500">
                        {referencePage + 1} / {referencePageCount}
                      </span>
                      <button
                        type="button"
                        onClick={showNextReferences}
                        aria-label="Další reference"
                        title="Další reference"
                        className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-300 bg-white text-slate-700 transition hover:border-green-500 hover:text-green-700"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          aria-hidden="true"
                          className="h-5 w-5"
                        >
                          <path
                            d="m9 18 6-6-6-6"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                {visibleReferences.map((reference) => (
                  <article
                    key={reference.title}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg shadow-slate-200/70"
                  >
                    {reference.image ? (
                      <img
                        src={reference.image}
                        alt={reference.imageAlt}
                        className="aspect-[16/10] w-full object-cover"
                      />
                    ) : (
                      renderReferencePlaceholder(reference)
                    )}

                    <div className="p-6">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                        <span className="rounded-full bg-green-50 px-3 py-1 text-green-800">
                          {reference.type}
                        </span>
                        <span className="text-slate-500">
                          {reference.location}
                        </span>
                      </div>

                      <h3 className="mt-4 text-xl font-bold leading-7 text-slate-900">
                        {reference.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {reference.description}
                      </p>

                      <div className="mt-6 border-t border-slate-100 pt-5">
                        <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">
                          Rozsah a výstupy
                        </div>
                        <ul className="mt-3 space-y-2">
                          {reference.results.map((result) => (
                            <li
                              key={result}
                              className="flex items-center gap-3 text-sm font-medium text-slate-700"
                            >
                              <span className="h-2 w-2 shrink-0 rounded-full bg-green-600" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {reference.href && (
                        <a
                          href={reference.href}
                          className="mt-6 inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
                        >
                          Zobrazit detail projektu →
                        </a>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="bg-slate-50 px-6 py-16 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Kdo za Enerixem stojí
              </div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Odpovědnost za celý kontext renovace
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Enerix vede Jiří Čečka. Při přípravě renovací propojuje zkušenosti
                s energetikou, dotačními projekty a projektovým řízením tak, aby
                klient dostal srozumitelný plán a jedno místo pro koordinaci dalších
                kroků.
              </p>
              <a
                href="/o-enerixu"
                className="mt-6 inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
              >
                Více o Enerixu a jeho přístupu →
              </a>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-5">
                <img
                  src="/enerix-symbol.png"
                  alt=""
                  className="h-16 w-16 rounded-2xl border border-green-100 bg-white p-2"
                />
                <div>
                  <div className="text-xl font-bold text-slate-900">
                    Enerix s.r.o.
                  </div>
                  <div className="mt-1 text-sm text-slate-500">
                    Chytré renovace pro váš dům
                  </div>
                </div>
              </div>
              <div className="mt-6 border-l-4 border-green-500 pl-5 text-slate-600">
                Renovaci posuzujeme jako celek: technicky, energeticky,
                ekonomicky i z pohledu dostupné podpory.
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Proč Enerix
            </div>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Renovace musí fungovat jako jeden celek
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Naší výhodou není jen samotná realizace. Každý projekt posuzujeme
              také z pohledu energetiky, návratnosti a dostupných dotací. Klient
              tak ví, co se vyplatí udělat hned, co později a kde naopak neutrácet
              zbytečně.
            </p>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-bold">
              Nejdřív souvislosti, potom jednotlivá opatření
            </h3>

            <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
              <div className="font-semibold">Typický cíl klienta</div>
              <div className="mt-2 text-slate-600">
                Snížit náklady na energie, zvýšit komfort bydlení a zhodnotit dům
                bez zbytečných chyb v pořadí renovace.
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Z praxe a poradny Enerixu
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Zkušenosti, souvislosti a praktické rady
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Obsah rozdělujeme podle toho, zda vychází z praxe, jde více do
                  odborné hloubky, nebo shrnuje aktuální změny a doporučení.
                </p>
              </div>
              <a
                href="/blog"
                className="inline-flex items-center font-semibold text-green-700 transition hover:text-green-800"
              >
                Přejít na blog →
              </a>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {contentAreas.map((area) => (
                <a
                  key={area.title}
                  href="/blog"
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-green-300 hover:bg-green-50/50"
                >
                  <h3 className="text-xl font-semibold text-slate-900">
                    {area.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate-600">{area.text}</p>
                  <div className="mt-5 text-sm font-semibold text-green-700">
                    Číst články →
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-slate-900 to-green-950 p-8 text-white shadow-2xl md:p-10">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-green-500/20 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-green-300/10 blur-3xl" />

              <div className="relative">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Kontakt
                </div>

                <h2 className="mt-4 text-3xl font-bold md:text-5xl">
                  Začněme nezávaznou konzultací
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Řekněte nám, co plánujete. Připravíme návrh řešení, které bude
                  dávat smysl technicky, ekonomicky i z pohledu dotací.
                </p>

                <div className="mt-8 space-y-4">
                  {[
                    "Základní posouzení záměru",
                    "Doporučení vhodného postupu",
                    "Prověření možností dotace a financování",
                    "Návrh dalších kroků bez zbytečných závazků",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-green-500" />
                      <div className="text-slate-200">{item}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="text-sm text-slate-300">Telefon</div>
                    <a
                      href="tel:+420720480861"
                      data-cta-location="contact_panel"
                      className="mt-1 block text-xl font-semibold transition hover:text-green-200"
                    >
                      720 480 861
                    </a>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="text-sm text-slate-300">E-mail</div>
                    <a
                      href="mailto:jiri.cecka@enerix.cz"
                      data-cta-location="contact_panel"
                      className="mt-1 block break-all text-xl font-semibold transition hover:text-green-200"
                    >
                      jiri.cecka@enerix.cz
                    </a>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-green-400/20 bg-green-400/10 p-5">
                  <div className="text-sm font-semibold text-green-200">
                    Zaměření
                  </div>
                  <div className="mt-1 text-slate-200">
                    Rodinné domy, renovace, dotace, energetické poradenství a
                    příprava realizace.
                  </div>
                </div>
              </div>
            </div>

            <form
              id="contact_form"
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-xl md:p-8"
            >
              <div className="mb-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Nezávazná poptávka
                </div>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                  Napište nám pár základních informací
                </h3>

                <p className="mt-3 text-slate-600">
                  Ozveme se vám a domluvíme další postup podle typu projektu.
                </p>
              </div>

              <div className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="text"
                    name="jmeno"
                    placeholder="Jméno"
                    required
                    className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                  <input
                    type="text"
                    name="prijmeni"
                    placeholder="Příjmení"
                    required
                    className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <input
                    type="tel"
                    name="telefon"
                    placeholder="Telefon"
                    required
                    className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    required
                    className="rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <select
                  name="okres"
                  required
                  className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">Vyberte okres</option>
                  <option>České Budějovice</option>
                  <option>Český Krumlov</option>
                  <option>Jindřichův Hradec</option>
                  <option>Písek</option>
                  <option>Prachatice</option>
                  <option>Strakonice</option>
                  <option>Tábor</option>
                  <option>Jiný okres</option>
                </select>

                <div className="rounded-xl border border-slate-300 p-4 text-left">
                  <div className="mb-3 text-sm font-semibold text-slate-700">
                    O jaké služby máte zájem?
                  </div>

                  <div className="grid gap-3 md:grid-cols-2">
                    {[
                      "Komplexní renovace",
                      "Dotační poradenství",
                      "Zateplení fasády",
                      "Výměna oken a dveří",
                      "Rekonstrukce střechy",
                      "Tepelné čerpadlo",
                      "Fotovoltaika",
                      "Rekuperace",
                      "Projektová dokumentace / Pasport stavby / Legalizace stavby",
                      "Jiné",
                    ].map((sluzba) => (
                      <label
                        key={sluzba}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <input
                          type="checkbox"
                          name="typ_poptavky"
                          value={sluzba}
                          className="h-4 w-4"
                        />
                        <span>{sluzba}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <textarea
                  name="zprava"
                  placeholder="Popište váš projekt. Fotografie, projektovou dokumentaci nebo jiné podklady k rekonstrukci či dotaci nám můžete následně zaslat e-mailem."
                  rows="5"
                  className="w-full rounded-xl border border-slate-300 p-4 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />

                <label className="flex items-start gap-3 text-left text-sm text-slate-600">
                  <input
                    type="checkbox"
                    name="souhlas_osobni_udaje"
                    value="ano"
                    required
                    className="mt-1"
                  />

                  <span>
                    Souhlasím se zpracováním osobních údajů za účelem vyřízení
                    poptávky. Více informací naleznete na stránce{" "}
                    <a
                      href="/ochrana-osobnich-udaju"
                      className="font-semibold underline"
                    >
                      Ochrana osobních údajů
                    </a>.
                  </span>
                </label>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-green-600 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-green-100 transition hover:bg-green-700"
                >
                  Odeslat nezávaznou poptávku
                </button>
              </div>
            </form>
          </div>
        </section>

        <footer className="bg-[#0b1120] px-6 py-14 text-gray-300">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
            <div>
              <h3 className="mb-4 text-2xl font-bold text-white">
                Enerix s.r.o.
              </h3>

              <p className="leading-relaxed text-gray-300">
                Energetické poradenství, dotační administrace a komplexní renovace
                rodinných i bytových domů.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Kontakt</h4>

              <div className="space-y-2 text-gray-300">
                <p>jiri.cecka@enerix.cz</p>
                <p>+420 720 480 861</p>
                <p>IČO: 295 09 351</p>
                <p>Sídlo: Nádražní 641, 37901 Třeboň</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-white">Odkazy</h4>

              <div className="flex flex-col space-y-2 text-gray-300">
                <a href="/blog" className="transition hover:text-white">
                  Blog
                </a>

                <a href="#kontakt" className="transition hover:text-white">
                  Kontakt
                </a>

                <a
                  href="/ochrana-osobnich-udaju"
                  className="transition hover:text-white"
                >
                  Ochrana osobních údajů
                </a>
                <CookieSettingsLink className="w-fit text-left transition hover:text-white" />
              </div>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">
            © 2026 Enerix s.r.o. Všechna práva vyhrazena.
          </div>
        </footer>
      </div>
    </>
  );
}
