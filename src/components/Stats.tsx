export default function Stats() {
  const stats = [
    { value: "50+", label: "Projects" },
    { value: "500+", label: "Happy Clients" },
    { value: "QAR 2B+", label: "Property Value" },
    { value: "100%", label: "Verified Developers" },
  ];

  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 text-center md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl p-8 transition duration-300 hover:-translate-y-2 hover:bg-slate-800"
            >
              <h2 className="text-5xl font-bold text-cyan-400">
                {stat.value}
              </h2>

              <p className="mt-3 text-lg text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}