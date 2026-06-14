import { publishedDemoArticles } from "../data/knowledgeCenterArticles";
import { absoluteUrl, staticIndexablePages } from "../data/knowledgeCenterArticleMeta";

function escapeXml(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function buildSitemap() {
  const staticUrls = staticIndexablePages.map((page) => ({
    loc: absoluteUrl(page.path),
    priority: page.priority,
  }));

  const articleUrls = publishedDemoArticles.map((article) => ({
    loc: absoluteUrl(`/znalostni-centrum/${article.slug}`),
    lastmod: article.updatedAt,
    priority: "0.6",
  }));

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${[...staticUrls, ...articleUrls]
  .map(
    (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>${
      url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ""
    }
    <priority>${url.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;
}

export function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "application/xml");
  res.write(buildSitemap());
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
