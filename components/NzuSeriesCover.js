const iconPaths = {
  orientation: (
    <>
      <path d="M5 19V9l7-5 7 5v10" />
      <path d="M9 19v-6h6v6" />
      <path d="M4 21h16" />
      <path d="M17 4h4v4" />
      <path d="m21 4-5 5" />
    </>
  ),
  paths: (
    <>
      <path d="M12 21V11" />
      <path d="M12 11 6 5" />
      <path d="M12 11 18 5" />
      <path d="M4 5h4v4" />
      <path d="M16 5h4v4" />
      <path d="M9 21h6" />
    </>
  ),
  financing: (
    <>
      <path d="M3 10h18" />
      <path d="M5 10V7l7-4 7 4v3" />
      <path d="M6 10v8" />
      <path d="M10 10v8" />
      <path d="M14 10v8" />
      <path d="M18 10v8" />
      <path d="M3 21h18" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v14H7z" />
      <path d="M14 3v5h5" />
      <path d="m10 13 1.5 1.5L15 11" />
      <path d="M10 18h5" />
    </>
  ),
  scope: (
    <>
      <path d="M4 19V8l5-4 5 4v11" />
      <path d="M14 19V11l3-3 3 3v8" />
      <path d="M2 21h20" />
      <path d="M8 21v-6h3v6" />
    </>
  ),
  workflow: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="12" cy="18" r="2.5" />
      <path d="M8.5 6h7" />
      <path d="m17 8-3.5 7" />
      <path d="M7 8.5 10.5 15" />
    </>
  ),
  warning: (
    <>
      <path d="M4 19h16L12 4z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
      <path d="M5 21h14" />
    </>
  ),
};

function CoverIcon({ icon }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="h-full w-full"
    >
      {iconPaths[icon] || iconPaths.orientation}
    </svg>
  );
}

export default function NzuSeriesCover({
  article,
  compact = false,
  thumbnail = false,
}) {
  if (thumbnail) {
    return (
      <div className="relative flex h-full w-full items-center justify-between overflow-hidden bg-[#f3f8f3] p-2 text-green-800">
        <div
          aria-hidden="true"
          className="absolute -right-3 -top-5 h-16 w-16 rounded-full border-[12px] border-green-700/10"
        />
        <div className="relative text-xs font-bold text-slate-900">
          {article.seriesIndex}/{article.seriesTotal}
        </div>
        <div className="relative h-8 w-8 rounded-full border border-green-700/20 bg-white/90 p-2">
          <CoverIcon icon={article.coverIcon} />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative isolate h-full w-full overflow-hidden bg-[#f3f8f3] text-slate-900 ${
        compact ? "p-3" : "p-5 md:p-10"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-45"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,101,52,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(22,101,52,.08) 1px, transparent 1px)",
          backgroundSize: compact ? "18px 18px" : "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-[12%] -top-[28%] h-[90%] w-[56%] rounded-full border-[28px] border-green-700/10 md:border-[56px]"
      />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className={`font-bold uppercase text-green-800 ${
                compact
                  ? "text-[8px] tracking-[0.12em]"
                  : "text-xs tracking-[0.18em]"
              }`}
            >
              Enerix · Průvodce NZÚ 2026
            </div>
            {!compact && (
              <div className="mt-2 text-sm text-slate-600">
                Renovace domu krok za krokem
              </div>
            )}
          </div>
          <div
            className={`shrink-0 rounded-full bg-green-700 font-bold text-white ${
              compact
                ? "px-2 py-1 text-[9px]"
                : "px-4 py-2 text-sm md:text-base"
            }`}
          >
            {article.seriesIndex}/{article.seriesTotal}
          </div>
        </div>

        <div
          className={`flex items-end justify-between ${
            compact ? "mt-4 gap-2" : "mt-8 gap-8"
          }`}
        >
          <div className="min-w-0">
            {!compact && (
              <div className="mb-3 h-1 w-12 rounded-full bg-green-600" />
            )}
            <div
              className={`font-bold leading-tight ${
                compact
                  ? "line-clamp-2 text-[11px]"
                  : "max-w-2xl text-2xl sm:text-3xl md:text-5xl"
              }`}
            >
              {article.coverTitle || article.shortTitle}
            </div>
          </div>
          <div
            className={`shrink-0 rounded-full border border-green-700/20 bg-white/85 text-green-800 shadow-sm ${
              compact
                ? "h-10 w-10 p-2.5"
                : "h-16 w-16 p-4 sm:h-20 sm:w-20 sm:p-5 md:h-32 md:w-32 md:p-8"
            }`}
          >
            <CoverIcon icon={article.coverIcon} />
          </div>
        </div>
      </div>
    </div>
  );
}
