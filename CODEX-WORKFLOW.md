# Codex workflow pro Enerix preview

Tento soubor drzi prakticka pravidla pro praci Codexu na preview verzi webu.
Cil je zkratit cas prace, omezit obchazeni nefunkcnich nastroju a predejit
zamenam vetvi nebo pracovnich slozek.

Aktivni pravidla pro Codex jsou v `AGENTS.md`. Tento soubor je lidska
dokumentace a kontrolni checklist.

## Pracovni slozky

- Live / hlavni lokalni repo orientace:
  `C:\Users\HP755G5\Documents\GitHub\enerix-web`
- Preview worktree pro rozpracovany web:
  `C:\Users\HP755G5\Documents\GitHub\enerix-web-preview`

Nepouzivat uz jako hlavni pracovni misto:

- `C:\Users\HP755G5\AppData\Local\Temp\enerix-2-unified`

## Vetve

- Produkcni zaklad: `main`
- Preview vetev pro Enerix 2.0: `codex/enerix-2-unified-preview`
- Aktualni preview PR: GitHub PR #11

Pred kazdou upravou overit:

```powershell
git status --short --branch
```

Pokud `git` neni v PATH, pouzit Git z GitHub Desktopu:

```powershell
& 'C:\Users\HP755G5\AppData\Local\GitHubDesktop\app-3.5.8\resources\app\git\cmd\git.exe' status --short --branch
```

## Preview

Vercel preview existuje a je chranene. Pro externi kontrolu pouzit share link
poskytnuty uzivatelem v konverzaci. Share link neukladat do repozitare.

Lokalni preview spoustet z:

```text
C:\Users\HP755G5\Documents\GitHub\enerix-web-preview
```

Pokud neni dostupne `npm`, nespoustet opakovane nahodne okliky. Nejprve rict,
ze chybi systemove `npm`, nebo pouzit existujici `node_modules` jen po overeni.

## Ignorovane generovane soubory

V Gitu nemaji byt sledovane:

- `node_modules/`
- `.next/`
- `*.log`
- `preview-screenshots/`

`package-lock.json` je soucast preview vetve, protoze odpovida `package.json`
a pomaha opakovatelne instalaci.

Pred upravou `.gitignore` overit, ze neignoruje zdrojove slozky jako `pages/`,
`components/`, `data/`, `public/`, `styles/` nebo dokumentaci.

## Bezpecnostni guardraily

- Necist a neukladat `.env`, tokeny, SSH klice, credential soubory, cookies
  ani jine pristupove udaje.
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

Pred `npm install`, `npm ci`, `npm run ...` nebo `npm.cmd run ...` zkontrolovat
`package.json`, hlavne:

- `scripts`
- `dependencies`
- `devDependencies`

Preferovat:

```powershell
npm.cmd ci --ignore-scripts
npm.cmd run build
```

`npm.cmd install` nebo instalace balicku ze site je povolena jen po jasnem
souhlasu.

## Pravidlo pri selhani nastroje

Kdyz prikaz selze:

1. Jednou overit chybu.
2. Pojmenovat pricinu: chybejici nastroj, opravneni, sit, nebo chyba projektu.
3. U male veci smi byt maximalne jedna kratka nahradni cesta.
4. U vetsi veci hned zastavit, hlasit co se deje a rict, jestli muze uzivatel
   pomoci instalaci, opravnenim, prihlasenim nebo rozhodnutim.
5. Nepokracovat pres pomale nebo mene spolehlive nahrady, pokud hlavni problem
   muze jit vyresit primo.
6. Pokud je potreba instalace nebo opravneni, rict uzivateli presne co chybi.

## Overovani

- Male textove zmeny: zkontrolovat diff a relevantni stranku.
- UI zmeny: overit preview a podle potreby screenshot.
- Vetsi zmeny: spustit build, pokud je dostupne `npm`.
- Commit / push / PR delat jen po jasnem schvaleni uzivatelem.

## Co ma udelat uzivatel pro zrychleni

Doporucene systemove kroky:

- Node.js LTS vcetne `npm` je nainstalovany,
- Git for Windows je nainstalovany,
- GitHub CLI `gh` je nainstalovane, ale neni nutne ho prihlasovat, dokud
  neni potreba pracovat s PR/CI pres CLI.

Poznamka: Codex sandbox nemusi automaticky videt systemovou PATH. Pokud prikaz
nevidi Git nebo Node, pouzit jen pro dany prikaz:

```powershell
$env:Path='C:\Program Files\Git\cmd;C:\Program Files\nodejs;'+$env:Path
```

Kontrolni prikazy v PowerShellu:

```powershell
git --version
node --version
npm.cmd --version
gh --version
```
