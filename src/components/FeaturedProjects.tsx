import Link from "next/link";

const projects = [
  {
    name: "Skala Villas",
    image: "/images/projects/skala/cover.jpeg",
    developer: "Ariane Real Estate",
    location: "Qetaifan Island North",
    type: "3 • 4 • 5 • 6 • 7 BHK",
    price: "Starting from QAR 4.8M",
    handover: "End of 2027",
    payment: "9 Years (Until End of 2034)",
    downpayment: "2%",
    handoverPayment: "30% Till Handover",
  },
  {
    name: "City Avenue",
    developer: "Ariane Real Estate",
    location: "Lusail",
    type: "1 • 2 • 3 BHK",
    price: "Starting from QAR 1.1M",
    handover: "End of 2027",
    payment: "6 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "25% Till Handover",
  },
  {
    name: "Marina 44",
    developer: "Ariane Real Estate",
    location: "Lusail Marina",
    type: "1 • 2 BHK",
    price: "Starting from QAR 1.2M",
    handover: "End of 2028",
    payment: "7 Years (Until End of 2033)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
  },
  {
    name: "Milos",
    developer: "Ariane Real Estate",
    location: "Al Qutaifiya",
    type: "1 • 2 • 3 BHK",
    price: "Starting from QAR 1.65M",
    handover: "End of 2027",
    payment: "7 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
  },
];

export default function FeaturedProjects() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Featured Developments
          </p>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Explore Qatar&apos;s Top Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Discover selected properties with flexible payment plans across
            Qatar&apos;s prime locations.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article
              key={project.name}
              className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div
  className="flex h-56 items-end bg-cover bg-center p-6 text-white"
  style={{ backgroundImage: `url(${project.image})` }}
>
                <div>
                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold">
                    Featured
                  </span>

                  <h3 className="mt-4 text-2xl font-bold">
                    {project.name}
                  </h3>

                  <p className="mt-2 text-sm text-white-300">
                    📍 {project.location}
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-xl font-bold text-slate-900">
                  {project.price}
                </p>

                <div className="mt-5 space-y-3 text-sm text-slate-600">
                    <p>
                    🏢 <strong>Developer:</strong> {project.developer}
                </p>
                  <p>
                    🏠 <strong>Unit Types:</strong> {project.type}
                  </p>

                  <p>
                    🏗️ <strong>Handover:</strong> {project.handover}
                  </p>

                  <p>
                    📅 <strong>Payment Plan:</strong> {project.payment}
                  </p>

                  <p>
                    💳 <strong>Down Payment:</strong> {project.downpayment}
                  </p>

                  <p>
                    ✅ <strong>Till Handover:</strong>{" "}
                    {project.handoverPayment}
                  </p>
                </div>

                <Link
                 href={`/projects/${project.name.toLowerCase().replace(/\s+/g, "-")}`}
                 className="mt-7 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold text-white transition hover:bg-cyan-600"
                >
                   View Details
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}