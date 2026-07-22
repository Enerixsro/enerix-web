import Head from "next/head";
import Image from "next/image";
import CampaignForm from "../components/CampaignForm";
import {
  CampaignFooter,
  CampaignHeader,
  MobileCampaignCta,
} from "../components/CampaignChrome";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";

const situations = [
  {
    number: "01",
    title: "Renovaci už nechcete dál odkládat",
    text: "Dům potřebuje víc úprav, ale nejste si jistí, co má přijít jako první a co ještě může počkat.",
  },
  {
    number: "02",
    title: "Zdědili jste nebo koupili starší dům",
    text: "Potřebujete odhadnout rozsah prací a najít cestu od současného stavu k pohodlnému bydlení.",
  },
  {
    number: "03",
    title: "Řešíte jednu konkrétní technologii",
    text: "Nechcete objednat okna, zateplení nebo vytápění bez jistoty, že správně navážou na další úpravy.",
  },
];

const steps = [
  {
    title: "Vyplníte krátký formulář",
    text: "Stačí kontakt, okres a stručná informace o tom, v jaké situaci se nacházíte.",
  },
  {
    title: "Krátce si zavoláme",
    text: "Projdeme stav domu, vaše cíle, přibližný časový plán a to, co vás právě nejvíc brzdí.",
  },
  {
    title: "Doporučíme další krok",
    text: "Řekneme vám, zda dává smysl prohlídka, renovační pas, dotační příprava nebo už konkrétní realizace.",
  },
];

const faqs = [
  {
    question: "Musím už přesně vědět, co chci rekonstruovat?",
    answer:
      "Nemusíte. Tato konzultace je právě pro majitele, kteří vědí, že dům potřebuje změnu, ale nejsou si jistí správným rozsahem nebo pořadím.",
  },
  {
    question: "Je konzultace závazná?",
    answer:
      "Ne. Jejím cílem je rychle zjistit, zda vám Enerix umí pomoci a jaký další krok bude pro váš dům nejrozumnější.",
  },
  {
    question: "Jak do renovace zapadá Nová zelená úsporám?",
    answer:
      "Renovace je hlavní projekt a podpora pomáhá s jeho financováním. NZÚ 2026+ nabízí zranitelným domácnostem přímou dotaci NZÚ Light a běžným domácnostem bezúročný úvěr na dílčí nebo komplexní renovaci. Společně prověříme, která cesta odpovídá vašemu domu a situaci.",
  },
  {
    question: "Kde působíte?",
    answer:
      "Projekty realizujeme především v Jihočeském kraji a okolí. Ve formuláři vyberte okres a ověříme možnosti pro váš dům.",
  },
];

export default function PlanRenovace() {
  const ctaLabel = "Ověřit renovaci a možnosti NZÚ";

  return (
    <>
      <Head>
        <title>Čím začít při renovaci domu | Enerix</title>
        <meta
          name="description"
          content="Nezávazně proberte renovaci staršího domu a možnosti Nové zelené úsporám. Pomůžeme určit správný postup, podporu i realizaci."
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl("/plan-renovace")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:title" content="Než začnete renovovat, zjistěte správný první krok" />
        <meta
          property="og:description"
          content="Krátká nezávazná konzultace pro majitele starších domů v Jihočeském kraji."
        />
        <meta property="og:url" content={absoluteUrl("/plan-renovace")} />
        <meta property="og:image" content={absoluteUrl("/FrontPageImg.png")} />
      </Head>

      <div className="min-h-screen bg-white pb-20 text-slate-950 md:pb-0">
        <CampaignHeader ctaHref="#formular" ctaLabel={ctaLabel} />

        <main id="main-content">
          <section className="relative overflow-hidden bg-[#f5f7f3]">
            <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-200/60 blur-3xl" />
            <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-amber-100 blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[1.06fr_0.94fr] lg:items-center lg:py-20">
              <div>
                <div className="inline-flex rounded-full border border-green-200 bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-800">
                  Renovace domu + Nová zelená úsporám 2026+
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.06] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-6xl">
                  Než objednáte okna, fasádu nebo tepelné čerpadlo, zjistěte, co váš dům potřebuje jako první.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl">
                  Nejsme jen dotační administrativa. V krátké nezávazné konzultaci projdeme váš záměr, doporučíme další krok a prověříme možnosti NZÚ. Navržená opatření pak umíme také zrealizovat — od zateplení a výměny oken po fotovoltaiku a tepelné čerpadlo.
                </p>

                <ul className="mt-7 grid gap-3 text-sm font-semibold text-slate-800 sm:grid-cols-2 sm:text-base">
                  {[
                    "Správné pořadí jednotlivých úprav",
                    "Realizujeme zateplení, okna, FVE i tepelná čerpadla",
                    "NZÚ Light nebo bezúročný úvěr",
                    "Řešení podle konkrétního domu",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-700 text-xs text-white">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-lg shadow-slate-950/5 sm:max-w-xl">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <Image
                      src="/FrontPageImg.png"
                      alt="Renovovaný rodinný dům"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/80 to-transparent px-5 pb-4 pt-16 text-sm font-semibold text-white">
                      Promyšlená renovace místo série izolovaných rozhodnutí
                    </div>
                  </div>
                </div>
              </div>

              <div id="formular" className="scroll-mt-6">
                <div className="mb-4 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950 shadow-sm">
                  <strong>Každý měsíc přijímáme pouze 8 nových domů.</strong>{" "}
                  Každý záměr nejprve individuálně posoudíme, proto je kapacita úvodních konzultací omezená.
                </div>
                <CampaignForm variant="lead" />
              </div>
            </div>
          </section>

          <section className="border-y border-slate-200 bg-white px-5 py-5 md:px-10">
            <div className="mx-auto grid max-w-7xl gap-4 text-center text-sm font-semibold text-slate-700 sm:grid-cols-3 sm:text-left">
              <div>Renovační pas a energetické poradenství</div>
              <div className="sm:text-center">NZÚ Light a bezúročný úvěr</div>
              <div className="sm:text-right">Realizace renovace na klíč</div>
            </div>
          </section>

          <section className="border-y border-green-100 bg-green-50/60 px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">Nová zelená úsporám 2026+</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Nejdřív zjistíme, na jakou podporu můžete dosáhnout.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  Podpora se dnes liší podle rozsahu renovace i situace domácnosti. Nechceme vám slibovat „dotaci pro každého“. Chceme vybrat reálnou cestu, kterou lze spojit se správným technickým řešením domu.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-2xl border border-green-200 bg-white p-6">
                  <div className="text-sm font-black text-green-800">NZÚ Light</div>
                  <h3 className="mt-3 text-xl font-bold">Přímá dotace pro domácnosti s nižšími příjmy</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Podpora může pomoci se zateplením, okny, dveřmi, zdrojem tepla nebo obnovitelnými zdroji. U dílčí renovace slouží renovační pas jako podklad k žádosti.
                  </p>
                </article>
                <article className="rounded-2xl border border-green-200 bg-white p-6">
                  <div className="text-sm font-black text-green-800">Bezúročný úvěr NZÚ</div>
                  <h3 className="mt-3 text-xl font-bold">Financování pro běžné domácnosti</h3>
                  <p className="mt-3 leading-7 text-slate-600">
                    Pro dílčí renovace rodinných domů lze financovat až 750 000 Kč, pro komplexní renovace až 2 miliony Kč. U dílčí renovace je důležitým podkladem renovační pas.
                  </p>
                </article>
                <div className="rounded-2xl bg-green-800 p-6 text-white sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-6">
                  <div>
                    <div className="font-bold">Nevíte, do které skupiny patříte?</div>
                    <p className="mt-2 text-sm leading-6 text-green-100">Vyplňte formulář a při úvodním hovoru prověříme renovaci i vhodnou cestu podpory.</p>
                  </div>
                  <a href="#formular" data-campaign-cta={ctaLabel} data-cta-location="lead_nzu" className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 font-bold text-green-900 sm:mt-0">
                    {ctaLabel}
                  </a>
                </div>
              </div>
            </div>
            <p className="mx-auto mt-6 max-w-7xl text-xs leading-5 text-slate-500">Parametry programu jsou uvedeny podle pravidel NZÚ platných v červenci 2026 a mohou se měnit.</p>
          </section>

          <section className="px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Nejdřív souvislosti, potom výrobky</div>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                    Jedna chyba na začátku může ovlivnit celou renovaci.
                  </h2>
                </div>
                <p className="text-lg leading-8 text-slate-600">
                  Nový zdroj tepla se navrhuje podle budoucí tepelné ztráty. Okna musí navázat na zateplení. Střecha může ovlivnit izolaci i fotovoltaiku. Proto dává smysl nejdřív promyslet dům jako celek — i když budete renovovat postupně.
                </p>
              </div>

              <div className="mt-12 grid gap-5 lg:grid-cols-3">
                {situations.map((situation) => (
                  <article key={situation.number} className="border-t-4 border-green-700 bg-slate-50 p-6 sm:p-7">
                    <div className="text-sm font-black text-green-700">{situation.number}</div>
                    <h3 className="mt-5 text-xl font-bold">{situation.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{situation.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-950 px-5 py-16 text-white md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">Co se stane po odeslání</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">První krok bez složité přípravy</h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  Nemusíte mít projekt, rozpočet ani vybrané technologie. Pro začátek potřebujeme pochopit váš dům a cíl.
                </p>
              </div>

              <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 lg:grid-cols-3">
                {steps.map((step, index) => (
                  <li key={step.title} className="bg-slate-950 p-7 sm:p-9">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 font-black text-slate-950">{index + 1}</div>
                    <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{step.text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-10 text-center">
                <a
                  href="#formular"
                  data-campaign-cta={ctaLabel}
                  data-cta-location="lead_process"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-green-500 px-7 py-4 font-bold text-slate-950 transition hover:bg-green-400"
                >
                  {ctaLabel}
                </a>
                <p className="mt-3 text-sm text-slate-400">Vyplnění zabere přibližně 2 minuty.</p>
              </div>
            </div>
          </section>

          <section className="px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Proč Enerix</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Nemusíte skládat renovaci z pěti nesouvisejících nabídek.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Nevyřídíme jen podklady k dotaci a tím nekončíme. Díváme se na technické řešení, podporu i samotnou realizaci společně a vybraná opatření provedeme s návazností na celý plán domu.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ["Návrh řešení", "Rozsah a pořadí opatření podle stavu domu a vašich priorit."],
                  ["NZÚ a financování", "Prověření NZÚ Light nebo bezúročného úvěru a zajištění potřebných podkladů."],
                  ["Koordinace profesí", "Jedno hlavní kontaktní místo a návaznost jednotlivých částí renovace."],
                  ["Realizace opatření", "Zajistíme zateplení, výměnu oken, fotovoltaiku i tepelné čerpadlo — samostatně nebo jako navazující části renovace."],
                ].map(([title, text]) => (
                  <article key={title} className="rounded-2xl border border-slate-200 p-6">
                    <h3 className="font-bold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-[#f5f7f3] px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Časté otázky</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Co je dobré vědět předem</h2>
              </div>
              <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group py-5">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-lg font-bold marker:content-none">
                      {faq.question}
                      <span className="text-2xl font-normal text-green-700 transition group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pb-2 pt-4 leading-7 text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-green-800 px-5 py-16 text-white md:px-10 md:py-20">
            <div className="mx-auto grid max-w-5xl gap-8 text-center">
              <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
                Přestaňte renovaci odkládat jen proto, že nevíte, čím začít.
              </h2>
              <p className="mx-auto max-w-3xl text-lg leading-8 text-green-50">
                Vyplňte krátký formulář. Společně si ujasníme, co váš dům potřebuje, jaký první krok dává smysl a zda lze renovaci spojit s podporou Nová zelená úsporám.
              </p>
              <div>
                <a
                  href="#formular"
                  data-campaign-cta={ctaLabel}
                  data-cta-location="lead_final"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-green-900 transition hover:bg-green-50"
                >
                  {ctaLabel}
                </a>
              </div>
              <p className="text-sm text-green-100">Úvodní konzultace nenahrazuje technický posudek domu.</p>
            </div>
          </section>
        </main>

        <CampaignFooter />
        <MobileCampaignCta href="#formular" label={ctaLabel} />
      </div>
    </>
  );
}
