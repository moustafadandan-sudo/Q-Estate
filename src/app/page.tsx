export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="flex items-center justify-between px-8 py-5 border-b">
        <h1 className="text-2xl font-bold">Q Estate</h1>

        <nav className="flex gap-6 text-sm font-medium">
          <a href="#projects">Projects</a>
          <a href="#locations">Locations</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="bg-slate-900 px-8 py-24 text-center text-white">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
          Qatar Real Estate
        </p>

        <h2 className="mx-auto max-w-4xl text-5xl font-bold leading-tight">
          Discover the best real estate projects in Qatar
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          Explore apartments, villas and investment opportunities across
          Doha, Lusail, The Pearl and Qetaifan Island.
        </p>

        <button className="mt-8 rounded-lg bg-cyan-500 px-7 py-3 font-semibold text-slate-950 hover:bg-cyan-400">
          Explore Projects
        </button>
      </section>

      <section id="projects" className="px-8 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold">Featured Projects</h2>

          <p className="mt-2 text-slate-600">
            Selected real estate opportunities across Qatar.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border p-6 shadow-sm">
              <p className="text-sm text-cyan-600">Lusail</p>
              <h3 className="mt-2 text-xl font-bold">City Avenue</h3>
              <p className="mt-3 text-slate-600">
                Modern apartments with flexible payment plans.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <p className="text-sm text-cyan-600">Qetaifan Island</p>
              <h3 className="mt-2 text-xl font-bold">Skala Villas</h3>
              <p className="mt-3 text-slate-600">
                Luxury furnished villas with private pools and gardens.
              </p>
            </div>

            <div className="rounded-2xl border p-6 shadow-sm">
              <p className="text-sm text-cyan-600">Lusail Marina</p>
              <h3 className="mt-2 text-xl font-bold">Marina Residences</h3>
              <p className="mt-3 text-slate-600">
                Fully furnished apartments with sea and city views.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
    );
}