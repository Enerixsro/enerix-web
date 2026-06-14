# AGENTS.md - aktivni pravidla pro Codex v Enerix preview

Tento soubor je aktivni instrukcni soubor pro praci Codexu v tomto worktree.
Ma prednost pred obecnou dokumentaci workflow.

## Ucel aktualniho workflow

Cilem je zrychlit a zpresnit praci na Enerix preview webu bez zameny slozek,
vetvi nebo prostredi. Nejde o automaticke publikovani produkce.

## Pracovni misto a vetve

- Pracuj primarne v:
  `C:\Users\HP755G5\Documents\GitHub\enerix-web-preview`
- Preview vetev:
  `codex/enerix-2-unified-preview`
- Produkcni zaklad:
  `main`
- Hlavni lokalni repo orientace:
  `C:\Users\HP755G5\Documents\GitHub\enerix-web`
- Nepouzivej jako hlavni pracovni misto:
  `C:\Users\HP755G5\AppData\Local\Temp\enerix-2-unified`

Pred kazdou upravou over:

```powershell
git status --short --branch
```

Pokud Codex sandbox nevidi Git nebo Node, pouzij v danem prikazu jen uzky PATH
prefix:

```powershell
$env:Path='C:\Program Files\Git\cmd;C:\Program Files\nodejs;'+$env:Path
```

## Bezpecnostni pravidla

- Necist a neukladat secrets: `.env`, tokeny, SSH klice, credential soubory,
  cookies ani jine pristupove udaje.
- Vercel share link neukladat do repozitare, PR popisu, screenshotu ani
  workflow dokumentace.
- Nepouzivat `danger-full-access` pro beznou praci.
- Sitove akce pouzivat jen ucelove a po schvaleni, pokud opousteji bezny
  read-only kontext.
- Nikdy nemenit PowerShell execution policy kvuli npm; pouzivat `npm.cmd`.
- Neprovadet `git reset --hard`, `git clean -fdx`, mazani vetvi, force push,
  merge do `main` ani zmeny produkcniho Vercelu bez explicitniho schvaleni.

## Souhlasy pro citlivejsi kroky

Commit, push, install, deploy nebo merge vyzaduji konkretni souhlas. Obecne
"ok" nestaci, pokud neni z bezprostredniho kontextu jednoznacne, co presne se
ma stat.

Bezpecny tvar souhlasu:

- "Commitni pouze soubory X, Y do vetve Z."
- "Pushni commit ABC do origin/vetev, nic jineho."
- "Nainstaluj Git a Node pres winget, nemen PowerShell execution policy."

## npm a build pravidla

Pred `npm install`, `npm ci`, `npm run ...` nebo `npm.cmd run ...` zkontroluj
`package.json`, hlavne:

- `scripts`
- `dependencies`
- `devDependencies`

Preferuj:

```powershell
npm.cmd ci --ignore-scripts
npm.cmd run build
```

`npm.cmd install` nebo instalace balicku ze site je povolena jen po jasnem
souhlasu.

## Git a preview pravidla

- Pushovat jen do preview vetvi po explicitnim souhlasu.
- Nikdy nepushovat primo do `main`.
- PR #11 je preview PR pro Enerix 2.0; zustava draft, dokud uzivatel nerekne
  jinak.
- Po pushi do preview vetve over GitHub/Vercel status.
- Produkcni `www.enerix.cz` nemenit bez samostatneho zadani.

## Ignorovane a generovane soubory

V Gitu nemaji byt sledovane:

- `node_modules/`
- `.next/`
- `*.log`
- `preview-screenshots/`

Pred upravou `.gitignore` over, ze neignoruje zdrojove slozky jako `pages/`,
`components/`, `data/`, `public/`, `styles/` nebo dokumentaci.

## Pri selhani nastroje

Kdyz prikaz selze:

1. Jednou over chybu.
2. Pojmenuj pricinu: chybejici nastroj, opravneni, sit, nebo chyba projektu.
3. U male veci smi byt maximalne jedna kratka nahradni cesta.
4. U vetsi veci hned zastav, hlas co se deje a rekni, jestli s tim muze
   uzivatel pomoci instalaci, opravnenim, prihlasenim nebo rozhodnutim.
5. Nepokracuj pres pomale nebo mene spolehlive nahrady, pokud hlavni problem
   muze jit vyresit primo.
6. Pokud je potreba instalace nebo opravneni, rekni presne co chybi.

## Kontext webu Enerix

Enerix je ceska firma zamerena na renovace domu, energetiku, dotace a
realizace na klic. Web ma pusobit duveryhodne, vecne a obchodne pouzitelne.

Pri upravach:

- zachovat soucasny Next.js / React / Tailwind smer,
- neprepisovat cely web bez zadani,
- zachovat funkcnost kontaktniho formulare,
- drzet cestinu prirozenou a ne moc korporatni,
- delat zmeny po mensich kontrolovatelnych krocich.
