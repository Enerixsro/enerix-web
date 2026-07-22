import Head from "next/head";
import Image from "next/image";
import CampaignForm from "../components/CampaignForm";
import {
  CampaignFooter,
  CampaignHeader,
  MobileCampaignCta,
} from "../components/CampaignChrome";
import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";

const deliverables = [
  {
    title: "Posouzení současného stavu",
    text: "Zpracovatel vyhodnotí energetický stav domu a oblasti, ve kterých vznikají největší ztráty.",
  },
  {
    title: "Návrh efektivní renovace",
    text: "Pas navrhne opatření, která mohou dům postupně přiblížit parametrům velice úsporné budovy.",
  },
  {
    title: "Optimální pořadí opatření",
    text: "Získáte doporučenou návaznost jednotlivých kroků, aby se hotové úpravy nemusely zbytečně předělávat.",
  },
  {
    title: "Předpokládanou investici",
    text: "Součástí dokumentu je vyčíslení předpokládaných nákladů na navrženou energetickou renovaci.",
  },
  {
    title: "Očekávané energetické úspory",
    text: "Uvidíte předpokládaný přínos opatření a směr, kterým lze snížit budoucí výdaje na bydlení.",
  },
  {
    title: "Podklad pro podporu NZÚ",
    text: "U dílčí renovace může pas sloužit k žádosti o NZÚ Light nebo k posouzení vhodnosti projektu pro bezúročný úvěr.",
  },
];

const process = [
  ["Objednávka", "Vyplníte základní údaje o sobě, lokalitě a situaci vašeho domu."],
  ["Potvrzení zadání", "Telefonicky ověříme, že je renovační pas pro váš dům vhodný, a domluvíme termín."],
  ["Prohlídka domu", "Na místě projdeme stav domu, vaše priority a zamýšlené úpravy."],
  ["Předání pasu", "Registrovaný zpracovatel připraví renovační pas a společně si vysvětlíme jednotlivá opatření i možnosti NZÚ."],
];

const faqs = [
  {
    question: "Co přesně je renovační pas NZÚ?",
    answer:
      "Je to dokument a průvodce energetickou renovací konkrétního domu. Obsahuje posouzení současného stavu, návrh efektivní renovace, doporučené pořadí opatření, předpokládanou investici a očekávané energetické úspory. Nenahrazuje projektovou dokumentaci ani další odborné posudky potřebné pro realizaci.",
  },
  {
    question: "Kdo může renovační pas NZÚ vystavit?",
    answer:
      "Energetický specialista nebo autorizovaná osoba registrovaná jako poradce NZÚ. Zpracování proto zajistí oprávněný zpracovatel splňující podmínky programu.",
  },
  {
    question: "Kdy renovační pas potřebuji pro Novou zelenou úsporám?",
    answer:
      "Slouží jako doklad k žádosti o NZÚ Light pro zranitelné domácnosti a k posouzení vhodnosti projektu dílčí renovace pro bezúročný úvěr NZÚ. U bezúročného úvěru na komplexní renovaci se místo něj dokládá průkaz energetické náročnosti budovy.",
  },
  {
    question: "Mohu mít renovační pas zdarma?",
    answer:
      "Podle aktuálních pravidel je vystavení pasu podpořeno z Národního plánu obnovy. Pro domácnosti s nižšími příjmy je zdarma, ostatní domácnosti mají zvýhodněnou cenu. Před potvrzením objednávky proto nejprve ověříme, do které skupiny patříte.",
  },
  {
    question: "Musím pak realizaci objednat u Enerixu?",
    answer:
      "Ne. Pokud ale následnou realizaci svěříte Enerixu, zaplacených 4 800 Kč odečteme z ceny zakázky.",
  },
  {
    question: "Platím hned při odeslání formuláře?",
    answer:
      "Ne. Na této stránce platbu neprovádíte. Nejprve ověříme váš nárok, vhodnost služby a termín. Poté dostanete další pokyny.",
  },
];

export default function RenovacniPas() {
  const ctaLabel = "Objednat renovační pas NZÚ";

  return (
    <>
      <Head>
        <title>Renovační pas NZÚ za 4 800 Kč | Enerix</title>
        <meta
          name="description"
          content="Objednejte si renovační pas NZÚ. Posouzení domu, návrh efektivní renovace, pořadí opatření, investice a očekávané úspory za 4 800 Kč."
        />
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href={absoluteUrl("/renovacni-pas")} />
        <meta property="og:type" content="product" />
        <meta property="og:locale" content="cs_CZ" />
        <meta property="og:title" content="Renovační pas NZÚ za 4 800 Kč | Enerix" />
        <meta
          property="og:description"
          content="Jasný plán renovace dřív, než začnete utrácet za jednotlivá opatření."
        />
        <meta property="og:url" content={absoluteUrl("/renovacni-pas")} />
        <meta property="og:image" content={absoluteUrl("/knowledge-center/covers/renovacni-pas.jpg")} />
      </Head>

      <div className="min-h-screen bg-white pb-20 text-slate-950 md:pb-0">
        <CampaignHeader ctaHref="#objednavka" ctaLabel={ctaLabel} />

        <main id="main-content">
          <section className="relative overflow-hidden bg-slate-950 text-white">
            <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-green-800/40 blur-3xl" />
            <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
            <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
              <div>
                <div className="inline-flex rounded-full border border-green-400/30 bg-green-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-green-300">
                  Renovační pas NZÚ · Nová zelená úsporám 2026+
                </div>
                <h1 className="mt-6 max-w-3xl text-4xl font-black leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                  Získejte jasný plán renovace dřív, než začnete utrácet.
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Oficiální průvodce energetickou renovací domu: současný stav, doporučená opatření, jejich pořadí, investice a očekávané úspory. U Enerixu ale nezůstane jen u dokumentu — zateplení, okna, fotovoltaiku i tepelné čerpadlo umíme také zrealizovat.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-center">
                  <div className="rounded-2xl bg-white px-6 py-5 text-slate-950">
                    <div className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Cena služby</div>
                    <div className="mt-1 text-4xl font-black tracking-tight">4 800 Kč</div>
                  </div>
                  <div className="text-sm leading-6 text-slate-300">
                    Pro standardní domácnosti. Před potvrzením objednávky ověříme, zda nemáte nárok na bezplatné vystavení.
                  </div>
                </div>

                <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2">
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                    <Image
                      src="/knowledge-center/covers/renovacni-pas.jpg"
                      alt="Plánování renovace rodinného domu"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-5 pb-4 pt-16 text-sm font-semibold text-white">
                      Nejdřív plán. Potom jednotlivé investice.
                    </div>
                  </div>
                </div>
              </div>

              <div id="objednavka" className="scroll-mt-6">
                <div className="mb-4 rounded-2xl border border-amber-300 bg-amber-100 px-5 py-4 text-sm leading-6 text-amber-950">
                  <strong>Od plánu k realizaci:</strong> pokud s námi následně zrealizujete vybrané opatření, zaplacených 4 800 Kč za renovační pas odečteme z ceny zakázky. Každý měsíc přijímáme pouze 8 nových domů.
                </div>
                <CampaignForm variant="order" />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#f7f5ef] px-5 py-5 md:px-10">
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-2 text-center text-sm font-semibold text-slate-700 sm:flex-row sm:gap-8">
              <span>Dokument programu NZÚ</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />
              <span>Podklad pro dílčí renovaci</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-400 sm:block" />
              <span>Navazující realizace opatření</span>
            </div>
          </section>

          <section className="px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto max-w-3xl text-center">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Co renovační pas NZÚ obsahuje</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
                  Konkrétní cestu k energeticky úspornějšímu domu.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Rozsah dokumentu vychází z programu Nová zelená úsporám. Nejde jen o obecnou konzultaci, ale o strukturovaný výstup zpracovaný oprávněným poradcem.
                </p>
              </div>

              <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {deliverables.map((item, index) => (
                  <article key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 text-sm font-black text-green-800">{index + 1}</div>
                    <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                    <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="border-y border-green-100 bg-green-50/60 px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                <div>
                  <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">Napojení na Novou zelenou úsporám</div>
                  <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Kdy pas potřebujete — a kdy se dokládá jiný dokument.</h2>
                </div>
                <p className="text-lg leading-8 text-slate-700">
                  Renovační pas NZÚ je určený především pro dílčí energetické renovace. Pomůže vám plánovat správné pořadí prací a současně může sloužit jako podklad pro konkrétní formu státní podpory.
                </p>
              </div>

              <div className="mt-10 grid gap-5 lg:grid-cols-3">
                <article className="rounded-2xl border border-green-200 bg-white p-6">
                  <div className="text-sm font-black text-green-800">NZÚ Light</div>
                  <h3 className="mt-3 text-xl font-bold">Přímá dotace až 400 000 Kč</h3>
                  <p className="mt-3 leading-7 text-slate-600">Pro zranitelné domácnosti s nižšími příjmy. Renovační pas slouží jako doklad k žádosti a jeho vystavení je pro tuto skupinu zdarma.</p>
                </article>
                <article className="rounded-2xl border border-green-200 bg-white p-6">
                  <div className="text-sm font-black text-green-800">Dílčí renovace</div>
                  <h3 className="mt-3 text-xl font-bold">Bezúročný úvěr až 750 000 Kč</h3>
                  <p className="mt-3 leading-7 text-slate-600">Pas slouží jako podklad pro posouzení vhodnosti projektu dílčí renovace rodinného domu.</p>
                </article>
                <article className="rounded-2xl border border-slate-300 bg-slate-950 p-6 text-white">
                  <div className="text-sm font-black text-green-400">Komplexní renovace</div>
                  <h3 className="mt-3 text-xl font-bold">Bezúročný úvěr až 2 000 000 Kč</h3>
                  <p className="mt-3 leading-7 text-slate-300">U komplexní renovace se k žádosti dokládá průkaz energetické náročnosti budovy; renovační pas není potřebný.</p>
                </article>
              </div>

              <div className="mt-6 rounded-2xl border border-green-200 bg-white p-5 text-sm leading-6 text-slate-600">
                Renovační pas vystavuje energetický specialista nebo autorizovaná osoba registrovaná jako poradce NZÚ. Parametry programu jsou uvedeny podle pravidel platných v červenci 2026 a mohou se měnit.
              </div>
            </div>
          </section>

          <section className="bg-amber-50 px-5 py-16 md:px-10 md:py-20">
            <div className="mx-auto grid max-w-6xl gap-8 rounded-3xl border border-amber-200 bg-white p-7 shadow-xl shadow-amber-900/5 sm:p-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-amber-800">Od plánu k realizaci</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Při realizaci s Enerixem vám cenu pasu odečteme.</h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Renovační pas vám ukáže správný směr a Enerix může navázat samotným provedením. Pokud si u nás objednáte zateplení, výměnu oken, fotovoltaiku, tepelné čerpadlo nebo jiné doporučené opatření, zaplacených 4 800 Kč odečteme z ceny realizace.
                </p>
              </div>
              <div className="rounded-2xl bg-slate-950 p-6 text-white">
                <ul className="space-y-4 text-sm leading-6 text-slate-200">
                  <li className="flex gap-3"><span className="font-black text-green-400">✓</span><span>Neřešíme jen dotaci — doporučená opatření umíme také dodat a provést.</span></li>
                  <li className="flex gap-3"><span className="font-black text-green-400">✓</span><span>Pokud vám ani po předání a konzultaci nebude další postup jasný, cenu služby vrátíme.</span></li>
                  <li className="flex gap-3"><span className="font-black text-green-400">✓</span><span>Každý měsíc přijímáme pouze 8 nových domů.</span></li>
                </ul>
                <a href="#objednavka" data-campaign-cta={ctaLabel} data-cta-location="order_offer" className="mt-6 inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-green-400 px-5 py-4 text-center font-bold text-slate-950 transition hover:bg-green-300">
                  Objednat za 4 800 Kč
                </a>
              </div>
            </div>
          </section>

          <section className="bg-[#f7f5ef] px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Proč nezačínat nabídkou dodavatele</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Nejprve potřebujete rozhodnout, co nakupovat. Až potom od koho.
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-600">
                  Nabídka na okna nebo tepelné čerpadlo odpoví na cenu konkrétního produktu. Neodpoví ale, zda je právě tento produkt pro váš dům správný první krok.
                </p>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
                <div className="grid grid-cols-2 bg-slate-950 text-sm font-bold text-white">
                  <div className="p-5 sm:p-6">Bez plánu</div>
                  <div className="border-l border-white/10 bg-green-800 p-5 sm:p-6">S renovačním pasem</div>
                </div>
                {[
                  ["Řešíte právě nejviditelnější problém", "Řešíte příčiny a správné pořadí"],
                  ["Každý dodavatel vidí svou část", "Dům vnímáte jako jeden celek"],
                  ["Hrozí předělávání hotových úprav", "Jednotlivé etapy na sebe navazují"],
                  ["Rozhodujete se pod tlakem nabídek", "Nabídky porovnáváte podle jasného zadání"],
                ].map(([without, withPlan]) => (
                  <div key={without} className="grid grid-cols-2 border-t border-slate-200 text-sm leading-6 sm:text-base">
                    <div className="p-5 text-slate-500 sm:p-6">{without}</div>
                    <div className="border-l border-slate-200 bg-green-50/60 p-5 font-semibold text-slate-800 sm:p-6">{withPlan}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="bg-slate-950 px-5 py-16 text-white md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-400">Jak objednávka probíhá</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Od formuláře k použitelnému plánu ve čtyřech krocích</h2>
              </div>

              <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {process.map(([title, text], index) => (
                  <li key={title} className="relative border-t border-white/20 pt-7">
                    <div className="text-sm font-black text-green-400">0{index + 1}</div>
                    <h3 className="mt-4 text-xl font-bold">{title}</h3>
                    <p className="mt-3 leading-7 text-slate-300">{text}</p>
                  </li>
                ))}
              </ol>

              <div className="mt-12 rounded-3xl border border-green-400/30 bg-green-400/10 p-6 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
                <div>
                  <div className="text-2xl font-black">Renovační pas NZÚ</div>
                  <p className="mt-2 text-slate-300">Objednávku nejprve osobně potvrdíme. Online nic neplatíte.</p>
                </div>
                <a
                  href="#objednavka"
                  data-campaign-cta={ctaLabel}
                  data-cta-location="order_process"
                  className="mt-6 inline-flex min-h-14 shrink-0 items-center justify-center rounded-xl bg-green-400 px-7 py-4 font-bold text-slate-950 transition hover:bg-green-300 sm:mt-0"
                >
                  {ctaLabel}
                </a>
              </div>
            </div>
          </section>

          <section className="px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
              <article className="rounded-3xl border border-green-200 bg-green-50 p-7 sm:p-9">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-800">Pas dává smysl, když</div>
                <h2 className="mt-4 text-2xl font-black">Chcete renovovat, ale potřebujete si nejdřív ujasnit cestu.</h2>
                <ul className="mt-6 space-y-3 text-slate-700">
                  {[
                    "dům potřebuje více různých opatření",
                    "renovaci chcete rozdělit do několika etap",
                    "bojíte se drahého rozhodnutí ve špatném pořadí",
                    "chcete znát souvislosti před oslovením dodavatelů",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-black text-green-700">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>

              <article className="rounded-3xl border border-slate-200 bg-slate-50 p-7 sm:p-9">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Jiná služba bude vhodnější, když</div>
                <h2 className="mt-4 text-2xl font-black">Máte hotové zadání a hledáte jen konkrétní cenovou nabídku.</h2>
                <ul className="mt-6 space-y-3 text-slate-600">
                  {[
                    "potřebujete pouze nacenit přesně definované práce",
                    "hledáte projektovou dokumentaci nebo závazný rozpočet",
                    "potřebujete havarijní zásah bez možnosti plánování",
                    "dům neleží v oblasti, kam můžeme přijet na prohlídku",
                  ].map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="font-black text-slate-400">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>

          <section className="bg-[#f7f5ef] px-5 py-16 md:px-10 md:py-24">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-green-700">Časté otázky</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">Přesně víte, co objednáváte</h2>
              </div>
              <div className="mt-10 divide-y divide-slate-300 border-y border-slate-300">
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
            <div className="mx-auto max-w-5xl">
              <div className="rounded-3xl border border-white/20 bg-white/10 p-7 sm:p-10">
                <div className="text-sm font-black uppercase tracking-[0.14em] text-green-100">P. S.</div>
                <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-4xl">
                  Nejdražší chyba při renovaci často vznikne dřív, než začne první práce.
                </h2>
                <p className="mt-5 text-lg leading-8 text-green-50">
                  Nevhodné pořadí, špatně zvolená technologie nebo úprava, která se musí později předělávat, může stát mnohem víc než plán na začátku. Za 4 800 Kč získáte renovační pas podle pravidel NZÚ. Pokud vám ani po jeho předání a konzultaci nebude další postup jasný, cenu služby vrátíme. A pokud následnou realizaci svěříte Enerixu, zaplacených 4 800 Kč odečteme z ceny zakázky.
                </p>
                <a
                  href="#objednavka"
                  data-campaign-cta={ctaLabel}
                  data-cta-location="order_final"
                  className="mt-7 inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-green-900 transition hover:bg-green-50"
                >
                  {ctaLabel}
                </a>
                <p className="mt-7 border-t border-white/20 pt-6 text-sm leading-6 text-green-100">
                  <strong>P. P. S.</strong> Každý měsíc přijímáme pouze 8 nových domů. Pokud s námi následně zrealizujete vybrané opatření, cenu renovačního pasu 4 800 Kč odečteme z realizační zakázky.
                </p>
              </div>
            </div>
          </section>
        </main>

        <CampaignFooter />
        <MobileCampaignCta href="#objednavka" label={ctaLabel} />
      </div>
    </>
  );
}
