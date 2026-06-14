export const siteUrl = "https://www.enerix.cz";

export const staticIndexablePages = [
  { path: "/", priority: "1.0" },
  { path: "/blog", priority: "0.8" },
  { path: "/o-enerixu", priority: "0.7" },
  { path: "/spoluprace", priority: "0.7" },
  { path: "/ochrana-osobnich-udaju", priority: "0.2" },
];

export function absoluteUrl(path) {
  return `${siteUrl}${path}`;
}
