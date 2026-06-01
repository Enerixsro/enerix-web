mport Script from "next/script";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="mb-10">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-green-700">
            Blog Enerix
          </div>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Praktické články o renovacích, dotacích a energetice
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Přehledně vysvětlujeme, jak správně plánovat renovaci domu, jak využít
            dotace a na co si dát pozor před realizací.
          </p>
        </div>

        <div id="soro-blog"></div>

        <Script
          src="https://app.trysoro.com/api/embed/03aa2964-6d5b-4a94-8c67-2d7d9439c483"
          strategy="afterInteractive"
        />
      </section>
    </div>
  );
}
