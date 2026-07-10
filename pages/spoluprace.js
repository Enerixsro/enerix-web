import Head from "next/head";
import CookieSettingsLink from "../components/CookieSettingsLink";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";

const SHOW_PREVIEW_BADGES =
  process.env.NEXT_PUBLIC_SHOW_PREVIEW_BADGES === "true" ||
  process.env.NEXT_PUBLIC_BUILD_ENV !== "production";
const SHOW_REFERENCE_CONTENT =
  process.env.NEXT_PUBLIC_SHOW_REFERENCE_CONTENT === "true" ||
  process.env.NEXT_PUBLIC_BUILD_ENV !== "production";

const cooperationSteps = [
  "Klient se obrátí na Enerix",
  "Připravíme návrh řešení a rozsah projektu",
  "Vybereme vhodného partnera pro realizaci",
  "Enerix koordinuje průběh zakázky",
  "Partner se soustředí na svou odbornost a realizaci",
];

const partnerBenefits = [
  {
    title: "Nové zakázky",
    text: "Pomáháme získávat nové klienty a projekty.",
  },
  {
    title: "Jasné zadání",
    text: "Snažíme se předávat zakázky s definovaným rozsahem prací.",
  },
  {
    title: "Méně administrativy",
    text: "Řešíme komunikaci s klientem, návrh řešení i související agendu.",
  },
  {
    title: "Dlouhodobou spolupráci",
    text: "Nejde nám o jednorázové realizace, ale o budování stabilní sítě partnerů.",
  },
  {
    title: "Silnou značku",
    text: "Partner je součástí projektu realizovaného pod značkou Enerix.",
  },
];

const prioritySpecializations = [
  "Fasády a zateplení",
  "Projektanti",
  "Stavební firmy",
];

const otherSpecializations = [
  "Okna a dveře",
  "Tepelná čerpadla",
  "Fotovoltaické elektrárny",
  "Stříkané a foukané izolace",
  "SDK a interiéry",
  "Energetičtí specialisté",
  "Další specializované profese",
];

const cooperationValues = [
  "Kvalitně odvedená práce",
  "Dodržování domluvených termínů",
  "Slušná komunikace s klientem",
  "Férové jednání",
  "Otevřená komunikace",
  "Dlouhodobý přístup ke spolupráci",
];

export default function Spoluprace() {
  return (
    <>
      <Head>
        <title>Spolupráce s Enerixem | Síť realizačních partnerů</title>
        <meta
          name="description"
          content="Enerix buduje dlouhodobou síť spolehlivých partnerů pro realizaci renovací rodinných domů."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href={absoluteUrl("/spoluprace")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:title" content="Spolupráce s Enerixem" />
        <meta property="og:description" content="Enerix buduje dlouhodobou síť spolehlivých partnerů pro realizaci renovací rodinných domů." />
        <meta property="og:url" content={absoluteUrl("/spoluprace")} />
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
              className="grid w-full grid-cols-3 gap-1 text-center text-xs font-semibold text-slate-700 sm:flex sm:w-auto sm:items-center sm:gap-x-5 sm:text-left sm:text-sm"
            >
              <a href="/#sluzby" className="transition hover:text-green-700">
                Služby
              </a>
              {SHOW_REFERENCE_CONTENT && (
                <a href="/#realizace" className="transition hover:text-green-700">
                  Realizace
                </a>
              )}
              <a href="/o-enerixu" className="transition hover:text-green-700">
                O Enerixu
              </a>
              <a href="/spoluprace" aria-current="page" className="text-green-700">
                Spolupráce
              </a>
              <a href="/blog" className="transition hover:text-green-700">
                Znalostní centrum
              </a>
              <a href="/#kontakt" className="transition hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main id="main-content">
          <section className="bg-gradient-to-br from-slate-50 via-white to-green-50 px-6 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Partnerská síť Enerix
                </div>
                <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                  Spolupráce s Enerixem
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-700">
                  Pomáháme majitelům domů zvládnout renovaci od prvního návrhu
                  až po hotovou práci. Aby vše dobře navazovalo, spolupracujeme
                  se spolehlivými firmami a specialisty.
                </p>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                  Síť partnerů už máme a dál ji cíleně rozšiřujeme. Enerix drží
                  komunikaci s klientem a průběh projektu, partner se může
                  soustředit na svou práci. Projekty realizujeme především v
                  Jihočeském kraji a okolí.
                </p>
                <a
                  href="#kontakt-spoluprace"
                  className="mt-8 inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white shadow-lg shadow-green-200 transition hover:bg-green-700"
                >
                  Mám zájem o spolupráci
                </a>
              </div>

              <div className="border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
                <img
                  src="/enerix-symbol.png"
                  alt=""
                  className="h-24 w-24"
                />
                <h2 className="mt-7 text-2xl font-bold">
                  Jasně rozdělená odpovědnost
                </h2>
                <div className="mt-6 space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <div className="font-semibold">Klient řeší Enerix</div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Jsme hlavním kontaktním místem a ve většině případů také
                      smluvním partnerem klienta.
                    </p>
                  </div>
                  <div className="border-l-4 border-slate-300 pl-4">
                    <div className="font-semibold">
                      Partner řeší svou odbornost
                    </div>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Realizační partner se soustředí na kvalitní provedení své
                      části zakázky.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-20 md:px-10">
            <div className="max-w-3xl">
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Jak spolupráce funguje
              </div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Enerix drží projekt, partner svou profesi
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Enerix je pro klienta hlavním partnerem během renovace. Na
                realizaci jednotlivých částí projektu spolupracujeme s ověřenými
                specialisty podle typu zakázky.
              </p>
            </div>

            <ol className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {cooperationSteps.map((step, index) => (
                <li
                  key={step}
                  className="border-t-4 border-green-600 bg-slate-50 p-5"
                >
                  <div className="text-sm font-bold text-green-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <p className="mt-4 font-semibold leading-6 text-slate-800">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <section className="bg-slate-950 px-6 py-20 text-white md:px-10">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Co partnerům přinášíme
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Podmínky pro soustředěnou a dlouhodobou spolupráci
                </h2>
              </div>

              <div className="mt-10 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
                {partnerBenefits.map((benefit) => (
                  <article key={benefit.title} className="bg-slate-950 p-6">
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {benefit.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                Koho hledáme
              </div>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                Odbornosti pro jednotlivé části renovace
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Síť rozvíjíme podle skutečných potřeb projektů. Zajímá nás
                odbornost, spolehlivost a schopnost navazovat na práci dalších
                profesí.
              </p>
              <p className="mt-4 leading-7 text-slate-500">
                Dlouhodobě spolupracujeme s partnery v oblastech fotovoltaiky,
                tepelných čerpadel, izolací, projektové přípravy a dalších
                profesí souvisejících s renovacemi domů.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-slate-900">
                  Aktuálně rozšiřujeme síť
                </h3>
                {SHOW_PREVIEW_BADGES && (
                  <div className="mt-3 w-fit rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-semibold text-amber-800">
                    Čeká na potvrzení textu
                  </div>
                )}
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {prioritySpecializations.map((specialization) => (
                    <div
                      key={specialization}
                      className="border border-green-200 bg-green-50 px-5 py-5"
                    >
                      <span className="text-xs font-bold uppercase tracking-[0.16em] text-green-700">
                        Priorita
                      </span>
                      <div className="mt-2 font-bold text-slate-900">
                        {specialization}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-800">
                  Další oblasti spolupráce
                </h3>
                <div className="mt-4 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2">
                  {otherSpecializations.map((specialization) => (
                    <div
                      key={specialization}
                      className="flex items-center gap-3 bg-white px-5 py-4"
                    >
                      <span className="h-2 w-2 shrink-0 rounded-full bg-slate-300" />
                      <span className="font-medium text-slate-700">
                        {specialization}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-6 py-16 md:px-10">
            <div className="grid gap-8 border-y border-slate-200 py-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Pro budoucí spolupracovníky
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Přidejte se k Enerixu
                </h2>
              </div>
              <div>
                <p className="text-lg leading-8 text-slate-600">
                  Nemusíte být realizační firma, abychom se mohli poznat.
                  Enerix postupně roste a rádi si poslechneme lidi, kteří mají
                  blízko k renovacím, energetice, obchodu nebo projektovému
                  řízení a mohli by se v budoucnu zapojit do našeho týmu či
                  spolupráce.
                </p>
                <p className="mt-3 leading-7 text-slate-500">
                  Nejde o klasický nábor. Spíš o otevřené dveře pro smysluplné
                  spojení ve chvíli, kdy si profesně i lidsky sedneme.
                </p>
              </div>
            </div>
          </section>

          <section className="border-y border-green-100 bg-green-50/60 px-6 py-20 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
                  Co je pro nás důležité
                </div>
                <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                  Spolupráce, za kterou se můžeme postavit
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Hledáme partnery, které se nebudeme bát doporučit klientům pod
                  značkou Enerix.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {cooperationValues.map((value) => (
                  <li
                    key={value}
                    className="flex items-center gap-3 border border-green-100 bg-white px-5 py-4 font-semibold text-slate-800"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-600" />
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            id="kontakt-spoluprace"
            className="bg-slate-950 px-6 py-16 text-white md:px-10"
          >
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold md:text-4xl">
                  Pojďme se poznat
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Pokud si myslíte, že bychom si mohli rozumět, ozvěte se nám.
                  Rádi si s vámi nezávazně zavoláme nebo se potkáme osobně.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <a
                  href="/#kontakt"
                  className="inline-flex items-center justify-center rounded-2xl bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
                >
                  Napsat přes formulář
                </a>
                <a
                  href="tel:+420720480861"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:border-white/40"
                >
                  720 480 861
                </a>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-[#0b1120] px-6 py-8 text-center text-sm text-gray-400">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 sm:flex-row">
          © 2026 Enerix s.r.o. Všechna práva vyhrazena.
            <CookieSettingsLink className="text-gray-400 underline-offset-4 hover:text-white hover:underline" />
          </div>
        </footer>
      </div>
    </>
  );
}
