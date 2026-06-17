export const siteUrl = "https://www.enerix.cz";

export const staticIndexablePages = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/o-enerixu", priority: "0.7", changefreq: "monthly" },
  { path: "/spoluprace", priority: "0.7", changefreq: "monthly" },
  { path: "/ochrana-osobnich-udaju", priority: "0.2", changefreq: "yearly" },
];

export function absoluteUrl(path) {
  return `${siteUrl}${path}`;
}
