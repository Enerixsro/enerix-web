<section id="kontakt" className="bg-green-600 py-20 text-white">
  <div className="mx-auto max-w-5xl px-6 text-center md:px-10">
    <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-100">
      Kontakt
    </div>

    <h2 className="mt-3 text-3xl font-bold md:text-5xl">
      Začněme nezávaznou konzultací
    </h2>

    <p className="mx-auto mt-5 max-w-2xl text-lg text-green-50">
      Řekněte nám, co plánujete. Připravíme vám návrh řešení, které bude
      dávat smysl technicky, ekonomicky i z pohledu dotací.
    </p>

    <div className="mt-10 grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
        <div className="text-sm text-green-100">Telefon</div>
        <div className="mt-1 text-xl font-semibold">720 480 861</div>
      </div>

      <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
        <div className="text-sm text-green-100">E-mail</div>
        <div className="mt-1 text-xl font-semibold break-all">
          jiri.cecka@enerix.cz
        </div>
      </div>

      <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
        <div className="text-sm text-green-100">Spolupráce</div>
        <div className="mt-1 text-xl font-semibold">
          Rodinné domy a renovace
        </div>
      </div>
    </div>

    <form
      action="https://formspree.io/f/xrejyodb"
      method="POST"
      className="mx-auto mt-12 max-w-3xl space-y-4 rounded-[2rem] bg-white p-8 text-slate-900 shadow-2xl"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <input
          type="text"
          name="jmeno"
          placeholder="Jméno a příjmení"
          required
          className="rounded-xl border border-slate-300 p-4"
        />

        <input
          type="tel"
          name="telefon"
          placeholder="Telefon"
          required
          className="rounded-xl border border-slate-300 p-4"
        />
      </div>

      <input
        type="email"
        name="email"
        placeholder="E-mail"
        required
        className="w-full rounded-xl border border-slate-300 p-4"
      />

      <input
        type="text"
        name="obec"
        placeholder="Obec / město"
        className="w-full rounded-xl border border-slate-300 p-4"
      />

      <select
        name="typ_poptavky"
        required
        className="w-full rounded-xl border border-slate-300 p-4"
      >
        <option value="">Typ poptávky</option>
        <option>Zateplení fasády</option>
        <option>Výměna oken a dveří</option>
        <option>Rekonstrukce střechy</option>
        <option>Tepelné čerpadlo</option>
        <option>Fotovoltaika</option>
        <option>Rekuperace</option>
        <option>Dotace a poradenství</option>
        <option>Jiné</option>
      </select>

      <textarea
        name="zprava"
        placeholder="Stručně popište váš projekt"
        rows="6"
        required
        className="w-full rounded-xl border border-slate-300 p-4"
      />

      <label className="flex items-start gap-3 text-left text-sm text-slate-600">
        <input type="checkbox" required className="mt-1" />

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
        className="w-full rounded-2xl bg-green-600 px-6 py-4 text-lg font-semibold text-white transition hover:bg-green-700"
      >
        Odeslat nezávaznou poptávku
      </button>
    </form>
  </div>
</section>
