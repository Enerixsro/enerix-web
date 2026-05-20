export default function EnerixLandingPage() {
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
      text: "Návrh skladby, návaznosti detailů a realizace s ohledem na úsporu i dlouhou životnost.",
    },
    {
      title: "Výměna oken a dveří",
      text: "Výběr řešení, které zapadá do celkové renovace domu a nekomplikuje další opatření.",
    },
    {
      title: "Rekonstrukce střechy",
      text: "Od posouzení stavu po návaznost na zateplení, fotovoltaiku nebo budoucí využití půdy.",
    },
    {
      title: "Tepelná čerpadla",
      text: "Volba zdroje tepla podle domu, spotřeby, komfortu a ekonomiky provozu.",
    },
    {
      title: "Fotovoltaika",
      text: "Návrh FVE v kontextu spotřeby domu, vytápění, ohřevu vody a budoucích potřeb.",
    },
    {
      title: "Foukaná a stříkaná izolace",
      text: "Rychlá opatření pro půdy, podhledy a problematická místa, kde dává izolace smysl.",
    },
    {
      title: "Sádrokartony a interiéry",
      text: "Navazující stavební práce při rekonstrukci, zateplení nebo úpravě dispozic.",
    },
    {
      title: "Rekuperace",
      text: "Řízené větrání pro zdravější vnitřní prostředí, nižší ztráty a vyšší komfort bydlení.",
    },
  ];

  const reasons = [
    {
      title: "Nejprve dáváme věci do souvislostí",
      text: "Renovace domu není jen soupis prací. Hlídáme, aby na sebe navazoval návrh, dotace, energetika, financování i samotná realizace.",
    },
    {
      title: "Jedno kontaktní místo pro celý proces",
      text: "Klient nemusí zvlášť řešit projektanta, energetiku, dotaci, řemeslníky a koordinaci návazností. Enerix drží celek pohromadě.",
    },
    {
      title: "Pomáháme vyhnout se drahým chybám",
      text: "Upozorňujeme na špatné pořadí prací, technicky nevhodná řešení i místa, kde by klient mohl utratit peníze bez skutečného efektu.",
    },
  ];

  const steps = [
    {
      title: "Nezávazná konzultace",
      text: "Nejdřív si projdeme váš záměr, stav domu a očekávání. Na první schůzce ještě nemusíte mít jasno ani hotový projekt.",
    },
    {
      title: "Návrh vhodného postupu",
      text: "Navrhneme, co má smysl řešit hned, co později a jaká opatření mohou být vhodná z pohledu dotací, úspor a komfortu.",
    },
    {
      title: "Příprava podkladů a nabídky",
      text: "Podle potřeby zajistíme zaměření, projektové podklady, energetické posouzení, dotační administraci a nacenění realizace.",
    },
    {
      title: "Koordinace realizace",
      text: "Po schválení řešení koordinujeme navazující profese tak, aby klient měl jasný postup, termíny a jednoho hlavního partnera.",
    },
  ];

  const trustPoints = [
    "Energetické poradenství a dotační agenda nejsou doplněk, ale základ návrhu.",
    "Řešíme renovaci jako celek — technicky, ekonomicky i prakticky.",
    "Klient před rozhodnutím dostává srozumitelný postup a ví, za co platí.",
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-green-600 font-bold text-white">
              E
            </div>
            <div>
              <div className="text-lg font-bold leading-none text-slate-950">
                Enerix
              </div>
              <div className="text-xs text-slate-500">
                Renovace • energie • dotace
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-sm font-medium text-slate-700 md:flex">
            <a href="#sluzby" className="transition hover:text-green-700">
              Služby
            </a>
            <a href="#duvera" className="transition hover:text-green-700">
              Proč Enerix
            </a>
            <a href="#postup" className="transition hover:text-green-700">
              Postup
            </a>
            <a href="#kontakt" className="transition hover:text-green-700">
              Kontakt
            </a>
          </nav>

          <a
            href="#kontakt"
            className="hidden rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 sm:inline-flex"
          >
            Domluvit konzultaci
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-green-50">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-green-200 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-slate-200 blur-3xl" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-12 md:px-10 lg:grid-cols-2 lg:items-center lg:py-20">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-sm font-medium text-green-700 shadow-sm">
                Enerix s.r.o. • Renovace domů v Jihočeském kraji
              </div>

              <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl lg:text-6xl">
                Partner pro renovaci domu, kterému svěříte celý proces.
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
                Pomáháme majitelům domů promyslet renovaci, vyřídit dotaci,
                připravit podklady a zkoordinovat realizaci. Neřešíme jen jednu
                zakázku, ale celý postup tak, aby dával technický i ekonomický
                smysl.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#duvera"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
                >
                  Proč nám svěřit renovaci
                </a>

                <a
                  href="#kontakt"
                  className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400"
                >
                  Domluvit konzultaci
                </a>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  ["Konkrétní člověk", "Osobní přístup a jasná odpovědnost"],
                  ["Dotace a energetika", "Návrh včetně podkladů a administrace"],
                  ["Realizace na klíč", "Koordinace profesí a návazností"],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm"
                  >
                    <div className="font-semibold text-slate-950">{title}</div>
                    <div className="mt-1 text-sm leading-5 text-slate-600">
                      {text}
                    </div>
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

              <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl border border-green-200 bg-white p-4 shadow-xl">
                <div className="text-sm font-medium text-slate-500">
                  Co klient nejčastěji řeší
                </div>
                <div className="mt-2 text-lg font-semibold text-slate-900">
                  Komu svěřit peníze, dům a celý průběh renovace.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white py-8">
          <div className="mx-auto grid max-w-7xl gap-4 px-6 md:grid-cols-3 md:px-10">
            {trustPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <div className="mt-1 h-5 w-5 shrink-0 rounded-full bg-green-100 ring-1 ring-green-300" />
                <p className="text-sm leading-6 text-slate-700">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="duvera" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-2xl md:p-10">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                Kdo za Enerixem stojí
              </div>

              <h2 className="mt-4 text-3xl font-bold md:text-4xl">
                Malá firma nemusí být slabina. Když víte, kdo za ní stojí.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Za Enerixem stojí Jiří Čečka. Věnuje se energetice, dotačním
                projektům a koordinaci renovací. Cílem není klientovi prodat
                jednotlivé opatření, ale pomoci mu správně rozhodnout, co má pro
                jeho dům opravdu smysl.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <div className="text-sm text-slate-300">Odbornost</div>
                  <div className="mt-2 font-semibold">
                    Energetické poradenství, dotace a renovační pasy
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <div className="text-sm text-slate-300">Přístup</div>
                  <div className="mt-2 font-semibold">
                    Jeden partner pro návrh, přípravu i realizaci
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Proč právě Enerix
              </div>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Když dáváte do renovace stovky tisíc, potřebujete víc než jen
                nejnižší cenu.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                U větší renovace nejde jen o to, kdo zateplí fasádu nebo dodá
                okna. Důležité je správně nastavit pořadí kroků, technické
                návaznosti, dotace, financování a odpovědnost za celý výsledek.
              </p>

              <div className="mt-8 grid gap-4">
                {reasons.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-7 text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="sluzby" className="bg-slate-50 px-6 py-20 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Co umíme zajistit
              </div>

              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Stavební a energetická opatření skládáme do jednoho plánu.
              </h2>

              <p className="mt-4 text-lg leading-8 text-slate-600">
                Některý klient řeší jen fasádu. Jiný chce postupnou renovaci
                celého domu. V obou případech hlídáme, aby jednotlivá opatření
                dávala smysl i ve vztahu k budoucím krokům.
              </p>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-lg font-bold text-green-700">
                    ✓
                  </div>
                  <div className="font-semibold text-slate-950">
                    {service.title}
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {service.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-20 text-white">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Co má klient získat
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Nejen hotovou stavbu. Hlavně klid, že postup dává smysl.
                </h2>
              </div>

              <div className="grid gap-5 md:grid-cols-3">
                {[
                  ["Jasný plán", "Víte, co se bude dělat, proč a v jakém pořadí."],
                  ["Méně koordinace", "Nemusíte sami hlídat každou návaznost mezi profesemi."],
                  ["Lepší rozhodnutí", "Dostanete doporučení podle techniky, ekonomiky a dotací."],
                ].map(([title, text]) => (
                  <div
                    key={title}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur"
                  >
                    <div className="text-xl font-semibold">{title}</div>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="postup" className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Jak spolupráce probíhá
            </div>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Od první konzultace po konkrétní nabídku a realizaci.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Na začátku není potřeba mít všechno připravené. Důležité je vědět,
              co chcete řešit, jaký je stav domu a jaký výsledek od renovace
              očekáváte.
            </p>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-950">
                      {step.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {step.text}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Než se rozhodnete
            </div>

            <h3 className="mt-3 text-3xl font-bold">
              Dobrá nabídka není jen číslo na konci tabulky.
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Při porovnávání firem má smysl dívat se nejen na cenu, ale i na to,
              kdo drží odpovědnost za celek, jak jsou řešené návaznosti prací,
              jestli nabídka počítá s dotací a zda navržené řešení odpovídá
              skutečnému stavu domu.
            </p>

            <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
              <div className="font-semibold">Typický cíl klienta</div>
              <div className="mt-2 text-slate-600">
                Snížit náklady na energie, zvýšit komfort bydlení a zhodnotit dům
                bez zbytečných chyb v pořadí renovace.
              </div>
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
                  Chcete vědět, jaký postup dává smysl pro váš dům?
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  Napište nám pár základních informací. Ozveme se vám, projdeme
                  záměr a navrhneme, jaké další kroky mají smysl. Nejde o
                  závazek k realizaci, ale o první orientaci v možnostech.
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
                    <div className="mt-1 text-xl font-semibold">
                      720 480 861
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                    <div className="text-sm text-slate-300">E-mail</div>
                    <div className="mt-1 break-all text-xl font-semibold">
                      jiri.cecka@enerix.cz
                    </div>
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
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 text-slate-900 shadow-xl md:p-8"
            >
              <div className="mb-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Nezávazná poptávka
                </div>

                <h3 className="mt-2 text-2xl font-bold md:text-3xl">
                  Nemusíte mít jasno. Stačí popsat, co řešíte.
                </h3>

                <p className="mt-3 text-slate-600">
                  Ozveme se vám a domluvíme další postup podle typu domu,
                  rozsahu záměru a aktuálních možností dotací.
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
                  placeholder="Popište váš dům, co chcete řešit a v jaké fázi se nacházíte. Pokud máte projekt, fotografie nebo rozhodnutí k dotaci, můžete nám je následně poslat e-mailem."
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
      </main>

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
              <a href="#sluzby" className="transition hover:text-white">
                Služby
              </a>
              <a href="#duvera" className="transition hover:text-white">
                Proč Enerix
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
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          © 2026 Enerix s.r.o. Všechna práva vyhrazena.
        </div>
      </footer>
    </div>
  );
}
