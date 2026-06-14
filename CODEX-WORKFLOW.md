# Codex workflow pro Enerix preview

Tento soubor drzi prakticka pravidla pro praci Codexu na preview verzi webu.
Cil je zkratit cas prace, omezit obchazeni nefunkcnich nastroju a predejit
zamenam vetvi nebo pracovnich slozek.

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

`package-lock.json` zatim zustava viditelny. U npm projektu dava smysl ho
commitnout, pokud odpovida `package.json` a chceme opakovatelne instalace.

## Pravidlo pri selhani nastroje

Kdyz prikaz selze:

1. Jednou overit chybu.
2. Pojmenovat pricinu: chybejici nastroj, opravneni, sit, nebo chyba projektu.
3. Nepokracovat pres tri ruzne okliky bez vysvetleni.
4. Pokud je potreba instalace nebo opravneni, rict uzivateli presne co chybi.

## Overovani

- Male textove zmeny: zkontrolovat diff a relevantni stranku.
- UI zmeny: overit preview a podle potreby screenshot.
- Vetsi zmeny: spustit build, pokud je dostupne `npm`.
- Commit / push / PR delat jen po jasnem schvaleni uzivatelem.

## Co ma udelat uzivatel pro zrychleni

Doporucene systemove kroky:

- nainstalovat Node.js LTS vcetne `npm`,
- nainstalovat Git for Windows nebo opravit PATH tak, aby fungovalo `git`,
- volitelne nainstalovat GitHub CLI `gh` a prihlasit ho.

Kontrolni prikazy v PowerShellu:

```powershell
git --version
node --version
npm --version
gh --version
```
