export default function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.4em] text-cyan-400">
          Qatar Real Estate
        </p>

        <h1 className="max-w-4xl text-6xl font-extrabold leading-tight">
          Find Your Dream Property in Qatar
        </h1>

        <p className="mt-6 max-w-2xl text-xl text-slate-300">
          Discover luxury villas, apartments and investment opportunities
          across Lusail, The Pearl, West Bay and Qetaifan Island.
        </p>

        <div className="mt-10 flex w-full max-w-3xl rounded-xl bg-white p-2 shadow-2xl">
          <input
            type="text"
            placeholder="Search by location..."
            className="flex-1 rounded-lg px-5 py-4 text-slate-900 outline-none"
          />

          <button className="rounded-lg bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600">
            Search
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-10 md:grid-cols-4">

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">500+</h2>
            <p className="text-slate-300">Projects</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">50+</h2>
            <p className="text-slate-300">Developers</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">8</h2>
            <p className="text-slate-300">Cities</p>
          </div>

          <div>
            <h2 className="text-4xl font-bold text-cyan-400">15K+</h2>
            <p className="text-slate-300">Monthly Visitors</p>
          </div>

        </div>
      </div>
    </section>
  );
}