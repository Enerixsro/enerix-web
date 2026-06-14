import { absoluteUrl } from "../data/knowledgeCenterArticleMeta";

export function getServerSideProps({ res }) {
  const body = [
    "User-agent: *",
    "Allow: /",
    "Disallow: /dekujeme",
    "",
    `Sitemap: ${absoluteUrl("/sitemap.xml")}`,
  ].join("\n");

  res.setHeader("Content-Type", "text/plain");
  res.write(body);
  res.end();

  return { props: {} };
}

export default function Robots() {
  return null;
}
