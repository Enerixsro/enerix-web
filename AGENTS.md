# Projektový kontext pro Enerix web

Tento soubor slouží jako trvalý kontext pro další práci na webu Enerix. Při úpravách webu se drž těchto pravidel, aby změny odpovídaly značce, účelu webu a technickému nastavení projektu.

## Kontext značky

Enerix je česká firma zaměřená na renovace domů, energetiku, dotace a realizace na klíč.

Enerix má vystupovat jako hlavní partner klienta pro celý proces renovace. Zajišťuje návrh, energetické posouzení, dotace, koordinaci i realizaci. Klient má mít pocit, že má jednoho odpovědného partnera, který celý proces drží pohromadě.

## Účel webu

Web Enerixu není primárně landing page z reklamy. Jeho hlavním účelem je budovat důvěru u klientů, kteří:

- už vyplnili Facebook lead form,
- mají domluvenou schůzku,
- nebo po schůzce zvažují nabídku v hodnotě stovek tisíc Kč.

Web má klientovi potvrdit, že Enerix je důvěryhodný, konkrétní a schopný partner pro větší rozhodnutí kolem renovace domu.

## Komunikační styl

Texty mají být:

- profesionální,
- důvěryhodné,
- konkrétní,
- přirozeně česky napsané,
- obchodně použitelné,
- spíš klidně odborné než agresivně prodejní.

Vyhýbat se:

- přehnaně reklamním formulacím,
- generickým AI frázím,
- laciným slibům,
- příliš korporátnímu tónu,
- nepodloženým tvrzením.

Preferovat formulace, které působí věcně, jistě a srozumitelně.

## Pozicování Enerixu

Enerix je hlavní partner klienta pro celý proces renovace.

Při popisu služeb používat formulace jako:

- „zajišťujeme“,
- „koordinujeme“,
- „realizujeme jako celek“,
- „renovace na klíč“,
- „provedeme vás celým procesem“.

Zbytečně neotvírat téma subdodavatelů nebo partnerů, pokud to není výslovně zadáno.

Nepsat nepravdivě, že vše provádějí vlastní zaměstnanci. Místo toho zdůraznit odpovědnost Enerixu za návrh, koordinaci, dotace a celkový průběh zakázky.

## Technické instrukce

Projekt je postavený na Next.js / React.

Hlavní stránka webu je:

- `pages/index.js`

Při úpravách:

- používat stávající Tailwind styl,
- zachovat současný vizuální směr webu,
- bez výslovného zadání nepřepisovat celý web,
- dělat změny po menších částech,
- nerozbíjet existující strukturu stránky,
- vždy zachovat funkčnost kontaktního formuláře přes Formspree.

Pokud se upravují texty, držet češtinu přirozenou, obchodně použitelnou a ne moc korporátní.

## Doporučený workflow

1. Nejprve navrhnout změnu.
2. Potom upravit konkrétní část.
3. Zachovat existující strukturu stránky.
4. Po změně stručně shrnout, které soubory byly upraveny a proč.

## Praktické zásady pro další úpravy

- Nezasahovat do kontaktního formuláře bez jasného důvodu.
- Nepřidávat velké nové sekce, pokud nejsou výslovně zadány.
- U textových změn hlídat, aby web působil jako podpora důvěry před nebo po obchodní schůzce.
- U vizuálních změn respektovat aktuální směr, barevnost a Tailwind strukturu.
- Pokud je potřeba něco výrazně změnit, postupovat po menších, kontrolovatelných krocích.
