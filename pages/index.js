import Script from "next/script";

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
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }

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
    "Zateplení fasády",
    "Výměna oken a dveří",
    "Rekonstrukce střechy",
    "Tepelná čerpadla",
    "Fotovoltaika",
    "Foukaná a stříkaná izolace",
    "Sádrokartony",
    "Rekuperace",
  ];

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

  const steps = [
    "Nezávazná konzultace a základní posouzení domu",
    "Návrh vhodných opatření a ekonomiky projektu",
    "Vyřízení dotací a příprava realizace",
    "Koordinace a realizace na klíč",
  ];

  return (
    <>
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;
          n.version='2.0';n.queue=[];t=b.createElement(e);
          t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1547450486949189');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=1547450486949189&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <div className="min-h-screen bg-white text-slate-900">
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
              <div
                key={service}
                className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-3 h-10 w-10 rounded-xl bg-green-100" />
                <div className="font-semibold text-slate-900">{service}</div>
              </div>
            ))}
          </div>
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

        <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Jak spolupráce probíhá
            </div>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Jednoduchý a srozumitelný postup
            </h2>

            <div className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                    {index + 1}
                  </div>
                  <div className="pt-1 text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
              Proč Enerix
            </div>

            <h3 className="mt-3 text-3xl font-bold">
              Nehledáme jen řešení, které jde udělat. Hledáme řešení, které dává
              smysl.
            </h3>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Naší výhodou není jen samotná realizace. Každý projekt posuzujeme i z
              pohledu energetiky, návratnosti a dostupných dotací. Díky tomu klient
              ví, co se vyplatí udělat hned, co později a kde naopak neutrácet
              zbytečně.
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
    </>
  );
}
