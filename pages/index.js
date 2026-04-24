export default function EnerixLandingPage() {
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
              Pomáháme majitelům domů s renovací na klíč – od návrhu po realizaci. Zajišťujeme
              zateplení, střechy, okna, tepelná čerpadla, fotovoltaiku i větrání. Vyřídíme dotace
              NZÚ, energetické poradenství i financování.
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
                <div key={title} className="rounded-2xl border border-slate-200 bg-white/80 p-4 shadow-sm">
                  <div className="font-semibold">{title}</div>
                  <div className="mt-1 text-sm text-slate-600">{text}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-200">
              <img
                src="/Discount.png"
                alt="Moderní rodinný dům po renovaci"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 rounded-2xl border border-green-200 bg-white p-4 shadow-xl">
              <div className="text-sm font-medium text-slate-500">Na co se zaměřujeme</div>
              <div className="mt-2 text-lg font-semibold text-slate-900">Úspora • Komfort • Hodnota domu</div>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="max-w-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Služby</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Co pro vás zajistíme</h2>
          <p className="mt-4 text-lg text-slate-600">
            Stavební a energetická opatření řešíme jako jeden celek, aby na sebe vše správně navazovalo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-3 h-10 w-10 rounded-xl bg-green-100" />
              <div className="font-semibold text-slate-900">{service}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-950 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:px-10 lg:grid-cols-4">
          {benefits.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur">
              <div className="text-xl font-semibold">{item.title}</div>
              <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-2">
        <div>
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Jak spolupráce probíhá</div>
          <h2 className="mt-3 text-3xl font-bold md:text-4xl">Jednoduchý a srozumitelný postup</h2>
          <div className="mt-8 space-y-4">
            {steps.map((step, index) => (
              <div key={step} className="flex items-start gap-4 rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                  {index + 1}
                </div>
                <div className="pt-1 text-slate-700">{step}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">Proč Enerix</div>
          <h3 className="mt-3 text-3xl font-bold">Nehledáme jen řešení, které jde udělat. Hledáme řešení, které dává smysl.</h3>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Naší výhodou není jen samotná realizace. Každý projekt posuzujeme i z pohledu energetiky,
            návratnosti a dostupných dotací. Díky tomu klient ví, co se vyplatí udělat hned, co později
            a kde naopak neutrácet zbytečně.
          </p>
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-sm">
            <div className="font-semibold">Typický cíl klienta</div>
            <div className="mt-2 text-slate-600">
              Snížit náklady na energie, zvýšit komfort bydlení a zhodnotit dům bez zbytečných chyb v pořadí renovace.
            </div>
          </div>
        </div>
      </section>

      <section id="kontakt" className="bg-green-600 py-20 text-white">
        <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-100">Kontakt</div>
          <h2 className="mt-3 text-3xl font-bold md:text-5xl">Začněme nezávaznou konzultací</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
            Řekněte nám, co plánujete. Připravíme vám návrh řešení, které bude dávat smysl technicky,
            ekonomicky i z pohledu dotací.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-green-100">Telefon</div>
              <div className="mt-1 text-xl font-semibold">720 480 861</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-green-100">E-mail</div>
              <div className="mt-1 text-xl font-semibold break-all">jiri.cecka@enerix.cz</div>
            </div>
            <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
              <div className="text-sm text-green-100">Spolupráce</div>
              <div className="mt-1 text-xl font-semibold">Rodinné domy a renovace</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
