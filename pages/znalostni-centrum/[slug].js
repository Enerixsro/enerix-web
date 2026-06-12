import Head from "next/head";
import { demoArticles, demoArticlesBySlug } from "../../data/knowledgeCenterArticles";

function MetaItem({ children, icon }) {
  return (
    <span className="inline-flex items-center gap-2">
      <span aria-hidden="true">{icon}</span>
      {children}
    </span>
  );
}

export default function KnowledgeCenterArticle({ article }) {
  return (
    <>
      <Head>
        <title>{article.title} | Znalostní centrum Enerixu</title>
        <meta name="description" content={article.excerpt} />
      </Head>

      <div className="min-h-screen bg-white text-slate-900">
        <header className="border-b border-slate-200 bg-white">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
            <a href="/" className="flex items-center gap-3">
              <img src="/favicon-32x32.png" alt="" className="h-10 w-10" />
              <div>
                <div className="font-bold tracking-[0.2em]">ENERIX</div>
                <div className="text-xs text-slate-500">
                  Průvodce renovací vašeho domu
                </div>
              </div>
            </a>
            <nav className="flex items-center gap-6 text-sm font-semibold text-slate-700">
              <a href="/#sluzby" className="hover:text-green-700">
                Služby
              </a>
              <a href="/blog" className="text-green-700">
                Znalostní centrum
              </a>
              <a href="/#kontakt" className="hover:text-green-700">
                Kontakt
              </a>
            </nav>
          </div>
        </header>

        <main>
          <article>
            <div className="mx-auto max-w-4xl px-6 pb-12 pt-10 md:px-10 md:pt-14">
              <a
                href="/blog"
                className="text-sm font-semibold text-green-700 hover:text-green-800"
              >
                ← Zpět do znalostního centra
              </a>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-green-700 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-white">
                  {article.label}
                </span>
                <span className="rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-900">
                  Modelový obsah pro předprodukční demo
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                {article.title}
              </h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {article.excerpt}
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
                {article.location && (
                  <MetaItem icon="⌖">{article.location}</MetaItem>
                )}
                {article.propertyType && (
                  <MetaItem icon="⌂">{article.propertyType}</MetaItem>
                )}
                <MetaItem icon="◷">{article.readingTime}</MetaItem>
              </div>
            </div>

            <div className="mx-auto max-w-6xl px-6 md:px-10">
              <div className="aspect-[16/8] overflow-hidden rounded-lg bg-slate-100">
                <img
                  src={article.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mx-auto max-w-3xl px-6 py-12 md:px-10 md:py-16">
              <p className="border-l-4 border-green-600 pl-6 text-lg leading-8 text-slate-700">
                {article.intro}
              </p>

              <div className="mt-12 space-y-11">
                {article.sections.map((section) => (
                  <section key={section.title}>
                    <h2 className="text-2xl font-bold">{section.title}</h2>
                    <p className="mt-4 leading-8 text-slate-600">
                      {section.text}
                    </p>
                    {section.bullets && (
                      <ul className="mt-5 space-y-3">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex gap-3 leading-7 text-slate-700"
                          >
                            <span
                              aria-hidden="true"
                              className="mt-2.5 h-2 w-2 shrink-0 rounded-full bg-green-600"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                  </section>
                ))}
              </div>

              <aside className="mt-14 rounded-lg border border-green-200 bg-green-50 p-6">
                <h2 className="text-lg font-bold">Poznámka k demu</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Tento článek ukazuje budoucí formát příběhu nebo odborného
                  obsahu. Před případným zveřejněním bude text zkontrolován,
                  doplněn o skutečná data a propojen s reálnými fotografiemi.
                </p>
              </aside>
            </div>
          </article>
        </main>

        <footer className="bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
          © 2026 Enerix s.r.o. · Průvodce renovací vašeho domu
        </footer>
      </div>
    </>
  );
}

export function getStaticPaths() {
  return {
    paths: demoArticles.map((article) => ({
      params: { slug: article.slug },
    })),
    fallback: false,
  };
}

export function getStaticProps({ params }) {
  return {
    props: {
      article: demoArticlesBySlug[params.slug],
    },
  };
}
