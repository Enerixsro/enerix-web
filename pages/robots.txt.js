import { siteUrl } from "../data/knowledgeCenterArticleMeta";

export function getServerSideProps({ res }) {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /dekujeme",
    "",
    `Sitemap: ${siteUrl}/sitemap.xml`,
  ].join("\n");

  res.setHeader("Content-Type", "text/plain");
  res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate=86400");
  res.write(body);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
