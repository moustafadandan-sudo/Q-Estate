import Link from "next/link";

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m20 20-3.5-3.5" />
    </svg>
  );
}

const stats = [
  { value: "500+", label: "Projects" },
  { value: "50+", label: "Developers" },
  { value: "8", label: "Prime Locations" },
  { value: "15K+", label: "Monthly Visitors" },
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/projects/skala/cover.jpeg')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-slate-950/75" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/95" />

      <div className="mx-auto flex min-h-[54vh] max-w-7xl flex-col items-center justify-center px-6 py-10 text-center lg:px-8">
        <p className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300 backdrop-blur-md">
          Qatar Real Estate
        </p>

        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl lg:text-[3.4rem]">
          Discover Exceptional Properties Across Qatar
        </h1>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base md:text-lg">
          Explore luxury villas, waterfront apartments and premium investment
          opportunities across Lusail, The Pearl, West Bay and Qetaifan Island.
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/projects"
            className="inline-flex min-w-44 items-center justify-center rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-cyan-400"
          >
            Explore Projects
          </Link>

          <Link
            href="/contact"
            className="inline-flex min-w-44 items-center justify-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-slate-950"
          >
            Contact Us
          </Link>
        </div>

        <div className="mt-5 w-full max-w-4xl rounded-2xl border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur-xl">
          <div className="flex flex-col gap-2 rounded-xl bg-white p-2 sm:flex-row">
            <input
              type="text"
              placeholder="Search by location, project or property type..."
              className="min-w-0 flex-1 rounded-lg px-4 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400"
            />

            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
            >
              <SearchIcon />
              Search
            </Link>
          </div>
        </div>

        <div className="mt-5 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/10 px-3 py-3 backdrop-blur-md"
            >
              <p className="text-2xl font-bold text-cyan-300 md:text-3xl">
                {stat.value}
              </p>

              <p className="mt-0.5 text-xs text-slate-200 md:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}