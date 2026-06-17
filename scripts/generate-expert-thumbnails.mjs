import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = path.join(process.cwd(), "public", "knowledge-center", "expert-thumbnails");

const articles = [
  {
    slug: "kdy-se-vyplati-fotovoltaika",
    number: "01",
    label: "FVE",
    tone: "green",
    variant: "fve",
  },
  {
    slug: "zatepleni-domu-neni-jen-cena-za-metr",
    number: "02",
    label: "FASÁDA",
    tone: "sand",
    variant: "facade",
  },
  {
    slug: "okna-a-dvere-pri-renovaci-domu",
    number: "03",
    label: "OKNA",
    tone: "blue",
    variant: "windows",
  },
  {
    slug: "strecha-pri-renovaci-domu",
    number: "04",
    label: "STŘECHA",
    tone: "slate",
    variant: "roof",
  },
  {
    slug: "tepelne-cerpadlo-v-rodinnem-dome",
    number: "05",
    label: "TČ",
    tone: "mint",
    variant: "heatPump",
  },
  {
    slug: "foukana-a-strikana-izolace",
    number: "06",
    label: "IZOLACE",
    tone: "olive",
    variant: "insulation",
  },
  {
    slug: "rekuperace-a-rizene-vetrani",
    number: "07",
    label: "VĚTRÁNÍ",
    tone: "teal",
    variant: "ventilation",
  },
  {
    slug: "sadrokartony-pri-rekonstrukci-domu",
    number: "08",
    label: "SÁDROKARTON",
    tone: "neutral",
    variant: "drywall",
  },
  {
    slug: "poradi-renovacnich-opatreni-a-proc-na-nem-zalezi",
    number: "09",
    label: "POSTUP",
    tone: "green",
    variant: "sequence",
  },
  {
    slug: "jak-se-rozhodnout-mezi-zdroji-tepla",
    number: "10",
    label: "ZDROJE",
    tone: "teal",
    variant: "sources",
  },
  {
    slug: "jak-funguji-dotace-na-renovace-v-roce-2026",
    number: "11",
    label: "DOTACE",
    tone: "sand",
    variant: "subsidy",
  },
];

const tones = {
  green: { bg: "#eff6ef", ink: "#168449", soft: "#dfeee4", grid: "#b9d6c5", accent: "#0f8a49", muted: "#9ca3af" },
  sand: { bg: "#f7f1e6", ink: "#6f5b3c", soft: "#f1e6cf", grid: "#d7c7a9", accent: "#e5b943", muted: "#8a8175" },
  blue: { bg: "#edf6fb", ink: "#1f5f9b", soft: "#dcecf7", grid: "#b9d4e8", accent: "#1f5f9b", muted: "#7890a7" },
  slate: { bg: "#f0f3f5", ink: "#475569", soft: "#e4eaee", grid: "#c7d0d7", accent: "#6b7f62", muted: "#8d99a3" },
  mint: { bg: "#eef7f1", ink: "#2c7a54", soft: "#e0f0e6", grid: "#b9d6c5", accent: "#2c7a54", muted: "#7c8b83" },
  olive: { bg: "#f4f6e9", ink: "#65733a", soft: "#edf1d3", grid: "#cfd7a7", accent: "#a8b851", muted: "#8c9275" },
  teal: { bg: "#edf7f7", ink: "#23727a", soft: "#dff0f1", grid: "#b7d9dc", accent: "#23727a", muted: "#79979a" },
  neutral: { bg: "#f5f3ef", ink: "#64615a", soft: "#ece7de", grid: "#d2ccc1", accent: "#73906d", muted: "#8c8880" },
};

const stroke = (color, width = 4) =>
  `fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"`;

function grid(tone) {
  return `
    <g opacity="0.34" stroke="${tone.grid}" stroke-width="1.4" stroke-dasharray="5 7">
      <path d="M250 110v220M304 110v220M358 110v220" />
      <path d="M205 156h210M205 210h210M205 264h210" />
      <path d="M732 78v232M812 78v232M892 78v232" />
      <path d="M684 132h248M684 212h248M684 292h248" />
    </g>`;
}

function fve(t) {
  return `
    <path d="M48 442 C110 426 132 326 206 322 C282 318 306 412 386 416 C454 420 492 396 548 402" ${stroke(t.accent, 5)} />
    <path d="M50 462 C136 448 208 392 300 392 C390 392 444 444 548 424" ${stroke(t.muted, 3)} stroke-dasharray="11 12" opacity="0.8" />
    <path d="M48 480h570" ${stroke("#c9d2cc", 2)} opacity="0.7" />
    <g transform="translate(552 182)">
      <path d="M0 96h230L282 0H52z" fill="rgba(255,255,255,0.38)" stroke="${t.ink}" stroke-width="4" />
      <path d="M52 0 0 96M104 0 54 96M156 0 108 96M208 0 164 96M260 40 27 40M242 72 12 72" ${stroke(t.ink, 2.5)} opacity="0.9" />
      <path d="M118 96v96M220 96v96M52 192h268" ${stroke(t.ink, 4)} />
    </g>
    <g transform="translate(784 88)" stroke="${t.ink}" stroke-width="4" stroke-linecap="round">
      <circle cx="32" cy="32" r="22" fill="none" />
      <path d="M32 0v-20M32 84v20M0 32h-20M84 32h20M9 9-5-5M55 55l14 14M55 9 69-5M9 55-5 69" />
    </g>`;
}

function facade(t) {
  return `
    <g transform="translate(445 122)">
      <path d="M50 50 210 10 344 62 184 114z" fill="#fffdf8" stroke="${t.ink}" stroke-width="3" />
      <path d="M50 50v210l134 62V114z" fill="#faf5ea" stroke="${t.ink}" stroke-width="3" />
      <path d="M184 114v208l160-68V62z" fill="#e8e4dc" stroke="${t.ink}" stroke-width="3" />
      <path d="M122 32 284 84v210l-100 28V114L50 50z" fill="rgba(255,255,255,0.18)" stroke="${t.ink}" stroke-width="2" opacity="0.75" />
      <path d="M214 92v214l52-18V108z" fill="#f4d56d" stroke="${t.accent}" stroke-width="3" />
      <path d="M226 118c18 10 5 24 22 36s3 24 20 36M228 162c18 10 5 24 22 36s3 24 20 36M228 206c18 10 5 24 22 36s3 24 20 36" ${stroke("#c99b2f", 2)} opacity="0.55" />
    </g>`;
}

function windows(t) {
  return `
    <g transform="translate(625 62)">
      <path d="M58 0h42v324H58zM110 0h28l94 118v206h-52V136L110 34z" ${stroke(t.ink, 4)} />
      <path d="M92 242h196v34H92zM112 276h168v48H112z" fill="rgba(255,255,255,0.45)" stroke="${t.ink}" stroke-width="4" />
      <path d="M148 244v78M184 244v78M226 244v78M104 268h174M126 304h126" ${stroke(t.ink, 2.3)} opacity="0.9" />
      <path d="M78 28v260M132 40l76 104v154" ${stroke(t.ink, 2.2)} opacity="0.55" />
    </g>`;
}

function roof(t) {
  return `
    <g transform="translate(432 176) rotate(-14)">
      <path d="M0 0h412v34H0z" fill="#dfe5e8" stroke="${t.ink}" stroke-width="3" />
      <path d="M0 34h412v30H0z" fill="#f8fafc" stroke="${t.ink}" stroke-width="2" />
      <path d="M0 64h412v72H0z" fill="${t.soft}" stroke="${t.accent}" stroke-width="3" />
      <path d="M0 136h412v36H0z" fill="#edf0f2" stroke="${t.ink}" stroke-width="2" />
      <path d="M56 0v172M182 0v172M308 0v172" ${stroke(t.ink, 3)} opacity="0.72" />
      <path d="M20 96c34-22 48 22 82 0s48 22 82 0 48 22 82 0 48 22 82 0" ${stroke(t.accent, 2.4)} opacity="0.55" />
    </g>`;
}

function heatPump(t) {
  return `
    <g transform="translate(330 145)">
      <rect x="0" y="60" width="138" height="126" rx="14" fill="rgba(255,255,255,0.42)" stroke="${t.ink}" stroke-width="4" />
      <circle cx="69" cy="123" r="35" fill="${t.soft}" stroke="${t.ink}" stroke-width="3" />
      <path d="M69 88c28 28 28 42 0 70M34 123c28-20 42-20 70 0" ${stroke(t.ink, 2.8)} opacity="0.75" />
      <rect x="298" y="34" width="96" height="184" rx="48" fill="rgba(255,255,255,0.5)" stroke="${t.accent}" stroke-width="4" />
      <path d="M138 100h160M138 150h160M394 90h124M394 160h124" ${stroke(t.ink, 4)} />
      <rect x="518" y="72" width="96" height="102" rx="10" fill="rgba(255,255,255,0.34)" stroke="${t.ink}" stroke-width="3" />
      <path d="M536 98h60M536 126h60M536 154h60" ${stroke(t.ink, 2.4)} opacity="0.6" />
    </g>`;
}

function insulation(t) {
  return `
    <g transform="translate(432 132)">
      <path d="M0 72h340v126H0z" fill="${t.soft}" stroke="${t.ink}" stroke-width="3" />
      <path d="M0 72 58 20h340L340 72z" fill="#fbfcf5" stroke="${t.ink}" stroke-width="3" />
      <path d="M340 72 398 20v126l-58 52z" fill="#e5ead0" stroke="${t.ink}" stroke-width="3" />
      <path d="M22 108c34-22 48 22 82 0s48 22 82 0 48 22 82 0M22 150c34-22 48 22 82 0s48 22 82 0 48 22 82 0" ${stroke(t.accent, 2.3)} opacity="0.55" />
      <path d="M-24 246c78-66 142-86 240-86" ${stroke(t.ink, 5)} />
      <path d="M204 148l54 20-42 36z" fill="rgba(255,255,255,0.62)" stroke="${t.ink}" stroke-width="3" />
    </g>`;
}

function ventilation(t) {
  return `
    <g transform="translate(464 122)">
      <rect x="122" y="58" width="188" height="136" rx="16" fill="rgba(255,255,255,0.5)" stroke="${t.ink}" stroke-width="4" />
      <circle cx="174" cy="126" r="28" fill="${t.soft}" stroke="${t.ink}" stroke-width="3" />
      <circle cx="258" cy="126" r="28" fill="${t.soft}" stroke="${t.ink}" stroke-width="3" />
      <path d="M0 82h122M0 172h122M310 82h132M310 172h132" ${stroke(t.ink, 4)} />
      <path d="M36 58c30 18 58 18 88 0M36 196c30-18 58-18 88 0M330 58c30 18 58 18 88 0M330 196c30-18 58-18 88 0" ${stroke(t.accent, 3)} opacity="0.75" />
      <path d="M160 126h28M244 126h28" ${stroke(t.ink, 2.4)} />
    </g>`;
}

function drywall(t) {
  return `
    <g transform="translate(486 102)">
      <path d="M0 40h120v284H0zM250 0h120v324H250z" fill="rgba(255,255,255,0.38)" stroke="${t.ink}" stroke-width="3" />
      <path d="M120 150h130M120 190h130M120 230h130" ${stroke(t.ink, 4)} />
      <path d="M158 40v246M212 20v286" ${stroke(t.accent, 3)} opacity="0.65" />
      <path d="M22 90h76M22 178h76M22 266h76M272 86h76M272 174h76M272 262h76" ${stroke(t.ink, 2.2)} opacity="0.56" />
      <path d="M120 150c34-22 58 22 92 0M120 230c34-22 58 22 92 0" ${stroke(t.accent, 2.2)} opacity="0.5" />
    </g>`;
}

function sequence(t) {
  return `
    <g transform="translate(444 128)">
      <rect x="0" y="82" width="132" height="120" rx="12" fill="rgba(255,255,255,0.45)" stroke="${t.ink}" stroke-width="3" />
      <rect x="182" y="38" width="132" height="164" rx="12" fill="rgba(255,255,255,0.45)" stroke="${t.ink}" stroke-width="3" />
      <rect x="364" y="92" width="132" height="110" rx="12" fill="rgba(255,255,255,0.45)" stroke="${t.ink}" stroke-width="3" />
      <path d="M34 166h64M34 134h64M216 78h64M216 122h64M216 166h64M398 138h64M398 170h64" ${stroke(t.accent, 4)} opacity="0.75" />
      <path d="M132 142c20-28 30-42 50-48M314 136c20 22 30 32 50 38" ${stroke(t.ink, 3)} opacity="0.7" />
    </g>`;
}

function sources(t) {
  return `
    <g transform="translate(390 134)">
      <rect x="0" y="72" width="112" height="100" rx="12" fill="rgba(255,255,255,0.44)" stroke="${t.ink}" stroke-width="4" />
      <circle cx="56" cy="122" r="25" fill="${t.soft}" stroke="${t.ink}" stroke-width="3" />
      <rect x="224" y="36" width="90" height="174" rx="45" fill="rgba(255,255,255,0.5)" stroke="${t.accent}" stroke-width="4" />
      <rect x="422" y="82" width="110" height="96" rx="10" fill="rgba(255,255,255,0.4)" stroke="${t.ink}" stroke-width="3" />
      <path d="M112 104h112M112 150h112M314 104h108M314 150h108" ${stroke(t.ink, 4)} />
      <path d="M440 108h70M440 132h70M440 156h70" ${stroke(t.ink, 2.2)} opacity="0.55" />
    </g>`;
}

function subsidy(t) {
  return `
    <g transform="translate(472 100)">
      <path d="M88 0h194l58 58v246H88z" fill="rgba(255,255,255,0.55)" stroke="${t.ink}" stroke-width="4" />
      <path d="M282 0v58h58" ${stroke(t.ink, 4)} />
      <path d="M130 102h154M130 146h154M130 190h116" ${stroke(t.accent, 4)} opacity="0.7" />
      <path d="M0 226h136v78H0zM322 178h136v126H322z" fill="rgba(255,255,255,0.38)" stroke="${t.ink}" stroke-width="3" />
      <path d="M24 226v-46l44-34 44 34v46M346 178v-46l44-34 44 34v46" ${stroke(t.ink, 3)} />
    </g>`;
}

const variants = {
  fve,
  facade,
  windows,
  roof,
  heatPump,
  insulation,
  ventilation,
  drywall,
  sequence,
  sources,
  subsidy,
};

function svgFor(article) {
  const t = tones[article.tone];
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
  <defs>
    <radialGradient id="paper" cx="50%" cy="45%" r="72%">
      <stop offset="0%" stop-color="#ffffff" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="${t.bg}"/>
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="16" flood-color="#0f172a" flood-opacity="0.08"/>
    </filter>
  </defs>
  <rect width="960" height="540" fill="url(#paper)"/>
  ${grid(t)}
  <circle cx="665" cy="230" r="155" fill="#fff" opacity="0.84" filter="url(#softShadow)"/>
  <text x="66" y="118" font-family="Inter, Arial, sans-serif" font-size="78" font-weight="800" letter-spacing="2" fill="${t.ink}">${article.number}</text>
  <text x="70" y="164" font-family="Inter, Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="0.5" fill="${t.ink}">${article.label}</text>
  ${variants[article.variant](t)}
</svg>`;
}

await fs.mkdir(outDir, { recursive: true });

for (const article of articles) {
  const file = path.join(outDir, `${article.slug}.png`);
  await sharp(Buffer.from(svgFor(article))).png({ compressionLevel: 9 }).toFile(file);
  console.log(file);
}
