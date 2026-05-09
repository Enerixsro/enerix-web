export default function OchranaOsobnichUdaju() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main className="mx-auto max-w-4xl px-6 py-16 md:px-10">
        <a
          href="/"
          className="text-sm font-semibold text-green-700 underline"
        >
          ← Zpět na hlavní stránku
        </a>

        <h1 className="mt-8 text-4xl font-bold">
          Ochrana osobních údajů
        </h1>

        <p className="mt-6 text-slate-600">
          Tyto informace vysvětlují, jak společnost Enerix s.r.o. zpracovává
          osobní údaje osob, které nás kontaktují prostřednictvím webového
          formuláře, e-mailu, telefonu nebo jiným způsobem.
        </p>

        <section className="mt-10 space-y-8">
          <div>
            <h2 className="text-2xl font-bold">1. Správce osobních údajů</h2>
            <p className="mt-3 text-slate-600">
              Správcem osobních údajů je společnost:
            </p>
            <p className="mt-3 rounded-2xl bg-slate-50 p-5 text-slate-700">
              <strong>Enerix s.r.o.</strong>
              <br />
              IČO: 295 09 351
              <br />
              Sídlo: Nádražní 641, 379 01 Třeboň, Jihočeský kraj, Okres: Jindřichův Hradec
              <br />
              E-mail: jiri.cecka@enerix.cz
              <br />
              Telefon: 720 480 861
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">2. Jaké údaje zpracováváme</h2>
            <p className="mt-3 text-slate-600">
              Zpracováváme zejména údaje, které nám sami poskytnete při
              odeslání poptávky nebo při komunikaci s námi. Může se jednat
              zejména o jméno, příjmení, telefon, e-mail, okres, informace
              o plánované rekonstrukci, zájem o konkrétní služby a další údaje,
              které nám dobrovolně sdělíte.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              3. Za jakým účelem údaje zpracováváme
            </h2>
            <p className="mt-3 text-slate-600">
              Osobní údaje zpracováváme za účelem vyřízení vaší poptávky,
              přípravy nabídky, komunikace s vámi, posouzení vhodných
              energetických a stavebních opatření, dotačního poradenství
              a případného navázání smluvní spolupráce.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              4. Právní základ zpracování
            </h2>
            <p className="mt-3 text-slate-600">
              Právním základem zpracování je zejména provedení opatření před
              uzavřením smlouvy na vaši žádost, případně oprávněný zájem
              správce na komunikaci se zájemci o služby a vyřízení jejich
              poptávek.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              5. Doba uchování osobních údajů
            </h2>
            <p className="mt-3 text-slate-600">
              Osobní údaje uchováváme po dobu nezbytnou k vyřízení poptávky
              a následné komunikaci. Pokud dojde k uzavření smlouvy, údaje
              uchováváme po dobu nezbytnou k plnění smlouvy a souvisejících
              zákonných povinností. Pokud ke spolupráci nedojde, údaje obvykle
              uchováváme nejdéle po dobu 3 let od poslední komunikace, pokud
              nepožádáte o jejich dřívější výmaz.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">
              6. Komu mohou být údaje předány
            </h2>
            <p className="mt-3 text-slate-600">
              Osobní údaje mohou být v nezbytném rozsahu předány spolupracujícím
              osobám a dodavatelům, kteří se podílejí na vyřízení poptávky,
              přípravě nabídky, energetickém posouzení, dotační administraci
              nebo realizaci projektu. Dále mohou být údaje zpracovávány
              prostřednictvím nástrojů používaných pro provoz webu, e-mailovou
              komunikaci, správu formulářů a evidenci poptávek.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">7. Vaše práva</h2>
            <p className="mt-3 text-slate-600">
              Máte právo požadovat přístup ke svým osobním údajům, jejich opravu,
              výmaz, omezení zpracování, vznést námitku proti zpracování
              a případně požadovat přenositelnost údajů. Máte také právo podat
              stížnost u Úřadu pro ochranu osobních údajů.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold">8. Kontakt</h2>
            <p className="mt-3 text-slate-600">
              V případě dotazů ke zpracování osobních údajů nás můžete kontaktovat
              na e-mailu{" "}
              <a
                href="mailto:jiri.cecka@enerix.cz"
                className="font-semibold text-green-700 underline"
              >
                jiri.cecka@enerix.cz
              </a>.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
