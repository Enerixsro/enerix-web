import Head from "next/head";

const principles = [
  {
    number: "01",
    title: "Nejdřív souvislosti, potom technologie",
    text: "Samotné zateplení, nové vytápění nebo fotovoltaika nemusí přinést očekávaný výsledek, pokud nenavazují na stav domu a další plánované kroky. Začínáme proto celkovým pohledem: kde dům ztrácí energii, co omezuje komfort, jaká opatření se ovlivňují a v jakém pořadí mají smysl.",
  },
  {
    number: "02",
    title: "Dotace jsou nástroj, ne cíl",
    text: "Dobrá renovace nevzniká maximalizací dotační částky. Podpora má pomoci uskutečnit technicky a ekonomicky rozumný záměr. Nejprve hledáme vhodné řešení pro konkrétní dům a teprve potom prověřujeme, jak jej lze podpořit dostupnými programy.",
  },
  {
    number: "03",
    title: "Renovace je proces, ne jednorázový nákup",
    text: "Ne každý dům je potřeba renovovat najednou. Umíme navrhnout etapy tak, aby dnešní rozhodnutí nekomplikovala další kroky za několik let. Klient tak získává dlouhodobý plán, podle kterého může postupovat s ohledem na rozpočet, technický stav i vlastní priority.",
  },
];

const projectAreas = [
  "Návrh renovace",
  "Energetické poradenství",
  "Renovační pas",
  "Dotační podpora",
  "Projektová příprava",
  "Koordinace realizace",
  "Financování",
];

const specialistAreas = [
  {
    title: "Projektová a energetická příprava",
    text: "Energetické posouzení, dokumentace a návrh technických návazností.",
  },
  {
    title: "Stavební a technické profese",
    text: "Odbornosti potřebné pro jednotlivé části renovace a jejich provedení.",
  },
  {
    title: "Technologie domu",
    text: "Vytápění, fotovoltaika, větrání a další systémy v kontextu celého domu.",
  },
  {
    title: "Dotace a financování",
    text: "Příprava podpory projektu a hledání realistického finančního rámce.",
  },
];

const selectedExperience = [
  {
    title: "Energetika veřejných budov",
    text: "Zkušenosti s energetickou agendou Jihočeského kraje a energetickým managementem portfolia přibližně 800 budov.",
  },
  {
    title: "Energie ve větším měřítku",
    text: "Práce s energetickým hospodářstvím v rozsahu přibližně 50 GWh elektřiny a 70 GWh plynu ročně, včetně nákupu energií v řádu stovek milionů korun za rok.",
  },
  {
    title: "Dotace a modernizace",
    text: "Příprava a řízení dotačních projektů, zkušenosti s obnovitelnými zdroji, akumulací, energetickými úsporami a modernizací budov.",
  },
  {
    title: "Studie a inovativní projekty",
    text: "Manažerská role u studií energeticky efektivních budov ve spolupráci s UCEEB ČVUT a zkušenost s inovativním projektem spotového dobíjení elektromobilů ve veřejné správě.",
  },
];

export default function OEnerixu() {
  return (
    <>
      <Head>
        <title>O Enerixu | Chytré renovace domů</title>
        <meta
          name="description"
          content="Poznejte přístup Enerixu k renovacím domů, energetice, dotacím a koordinaci realizací."
        />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
            <a href="/" className="flex items-center gap-3">
              <img src="/enerix-symbol.png" alt="" className="h-10 w-10" />
              <div>
                <div className="font-bold tracking-wide">ENERIX</div>
                <div className="text-xs text-slate-500">
                  Chytré renovace pro váš dům
                </div>
              </div>
            </a>

            <nav
              aria-label="Hlavní navigace"
              className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold text-slate-700"
            >
              <a href="/#sluzby" className="transition hover:text-green-700">
                Služby
              </a>
              <a href="/o-enerixu" className="text-green-700">
                O Enerixu
              </a>
              <a href="/blog" className="transition hover:text-green-700">
                Blog
              </a>
              <a href="/#kontakt" className="transition hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main>
          <section className="overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50 px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  O Enerixu
                </div>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Renovace, která dává smysl v souvislostech.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Enerix pomáhá majitelům domů plánovat renovace tak, aby dávaly
                  smysl technicky, ekonomicky i z pohledu dostupných dotací.
                  Neřešíme jednotlivá opatření izolovaně. Hledáme řešení, které
                  bude fungovat jako celek.
                </p>
                <a
                  href="/#kontakt"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
                >
                  Nezávazná konzultace zdarma
                </a>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <img
                  src="/enerix-symbol.png"
                  alt="Symbol Enerix"
                  className="h-28 w-28"
                />
                <h2 className="mt-7 text-2xl font-bold">
                  Jeden plán, propojené odbornosti
                </h2>
                <p className="mt-4 leading-7 text-slate-600">
                  Technický návrh, energetika, dotace, projektová příprava a
                  realizace musí vycházet ze stejného cíle. Úlohou Enerixu je
                  tento celek připravit a udržet srozumitelný.
                </p>
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Jak Enerix vznikl
              </div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Odpověď na opakující se problém renovací
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-slate-600">
              <p>
                Při práci na energetických a dotačních projektech jsme opakovaně
                naráželi na stejný problém. Lidé řešili jednotlivá opatření
                odděleně, přestože jejich skutečný přínos závisel na
                souvislostech.
              </p>
              <p>
                Okna se vybírala bez návaznosti na budoucí zateplení, nový zdroj
                tepla bez znalosti výsledných tepelných ztrát a fotovoltaika bez
                celkového pohledu na spotřebu domu. Dotace někdy určovala podobu
                projektu více než skutečné potřeby jeho obyvatel.
              </p>
              <p className="font-semibold text-slate-900">
                Proto vznikl Enerix: jako místo, které nejdřív skládá dohromady
                celý záměr a teprve potom řeší jednotlivé technologie, podklady
                a realizaci.
              </p>
            </div>
          </section>

          <section className="bg-slate-950 px-6 py-20 text-white md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Jak přemýšlíme o renovaci
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Tři principy, podle kterých připravujeme další postup
                </h2>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                {principles.map((principle) => (
                  <article
                    key={principle.title}
                    className="border-t-4 border-green-500 bg-white/5 p-6"
                  >
                    <div className="text-sm font-semibold text-green-300">
                      {principle.number}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">
                      {principle.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-slate-300">
                      {principle.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Co umíme zajistit
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Jednotlivé části jednoho procesu
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Rozsah se vždy přizpůsobuje konkrétnímu domu. Podstatné je, aby
                  každá část projektu vycházela ze stejného zadání a předávala
                  srozumitelné podklady dalšímu kroku.
                </p>
              </div>

              <ol className="grid gap-3 sm:grid-cols-2">
                {projectAreas.map((area, index) => (
                  <li
                    key={area}
                    className="flex items-center gap-4 border-b border-slate-200 px-2 py-4"
                  >
                    <span className="text-sm font-bold text-green-700">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-semibold text-slate-800">{area}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-y border-green-100 bg-green-50/60 px-6 py-20 md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-end">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                    Síť specialistů
                  </div>
                  <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                    Jedno kontaktní místo, odborníci pro jednotlivé oblasti
                  </h2>
                </div>
                <p className="leading-7 text-slate-600">
                  Na specializované činnosti spolupracujeme s prověřenými
                  partnery. Klient komunikuje s Enerixem jako s jedním kontaktním
                  místem, ale pro jednotlivé části projektu má k dispozici
                  odpovídající odbornost.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {specialistAreas.map((area) => (
                  <article
                    key={area.title}
                    className="min-h-48 border border-green-100 bg-white p-6 shadow-sm"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="3" />
                        <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
                      </svg>
                    </div>
                    <h3 className="mt-5 font-semibold text-slate-900">
                      {area.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {area.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Vybrané zkušenosti
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Praxe v energetice, dotacích a projektovém řízení
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Před založením Enerixu získal Jiří Čečka zkušenosti v
                  energetice veřejného sektoru, kde se podílel na práci s
                  rozsáhlým portfoliem budov, přípravě energetických projektů a
                  koordinaci odborných studií.
                </p>
                <p className="mt-5 leading-7 text-slate-600">
                  Součástí této praxe byla také spolupráce na rozvoji energetiky
                  v Jihočeském kraji. Enerix proto nevnímá renovaci domu jen jako
                  jednotlivou stavební zakázku, ale jako součást širšího systému
                  technických, ekonomických a dotačních rozhodnutí.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {selectedExperience.map((experience) => (
                  <article
                    key={experience.title}
                    className="border border-slate-200 bg-slate-50 p-6"
                  >
                    <div className="h-1 w-12 bg-green-600" />
                    <h3 className="mt-5 text-lg font-semibold text-slate-900">
                      {experience.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {experience.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div className="flex min-h-80 items-center justify-center bg-slate-50 p-10">
                <div className="text-center">
                  <img
                    src="/enerix-symbol.png"
                    alt=""
                    className="mx-auto h-32 w-32"
                  />
                  <div className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                    Enerix s.r.o.
                  </div>
                </div>
              </div>

              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Kdo za Enerixem stojí
                </div>
                <h2 className="mt-3 text-4xl font-bold">Jiří Čečka</h2>
                <div className="mt-2 text-lg font-semibold text-slate-500">
                  Zakladatel a jednatel Enerix
                </div>
                <div className="mt-6 space-y-5 text-lg leading-8 text-slate-600">
                  <p>
                    Jiří Čečka propojuje v Enerixu zkušenosti z energetiky,
                    dotačních projektů a projektového řízení. Zaměřuje se na
                    přípravu renovací, koordinaci navazujících kroků a hledání
                    řešení, která obstojí technicky i ekonomicky.
                  </p>
                  <p>
                    Jeho úlohou není klientovi nabídnout jednu technologii, ale
                    pomoci mu pochopit možnosti domu, nastavit priority a
                    připravit projekt tak, aby jednotliví odborníci pracovali se
                    stejným cílem.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-slate-950 px-6 py-16 text-white md:px-10">
            <div className="mx-auto flex max-w-7xl flex-col gap-7 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Nejste si jistí, kde začít?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Domluvme si nezávaznou konzultaci zdarma a společně projdeme
                  možnosti vašeho domu.
                </p>
              </div>
              <a
                href="/#kontakt"
                className="inline-flex shrink-0 items-center justify-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
              >
                Nezávazná konzultace
              </a>
            </div>
          </section>
        </main>

        <footer className="bg-[#0b1120] px-6 py-8 text-center text-sm text-gray-400">
          © 2026 Enerix s.r.o. Všechna práva vyhrazena.
        </footer>
      </div>
    </>
  );
}
