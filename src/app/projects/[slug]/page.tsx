type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const projects = {
  "skala-villas": {
    name: "Skala Villas",
    location: "Qetaifan Island North",
    developer: "Ariane Real Estate",
    price: "Starting from QAR 4.8M",
    type: "3 • 4 • 5 • 6 • 7 BHK",
    handover: "End of 2027",
    payment: "9 Years (Until End of 2034)",
    downpayment: "2%",
    handoverPayment: "30% Till Handover",
    image: "/images/projects/skala/cover.jpeg",
    gallery: [
  "/images/projects/skala/cover.jpeg",
  "/images/projects/skala/aerial.jpeg",
  "/images/projects/skala/beach.jpeg",
  "/images/projects/skala/bathroom.jpeg",
  "/images/projects/skala/bedroom.jpeg",
  "/images/projects/skala/kitchen.jpeg",
  "/images/projects/skala/hotel.jpeg",
  "/images/projects/skala/lobby.jpeg",
  "/images/projects/skala/villafront.jpeg",
  "/images/projects/skala/villafront2.jpeg",
  "/images/projects/skala/masterplan1.jpeg",
],
  },

  "city-avenue": {
    name: "City Avenue",
    location: "Lusail",
    developer: "Ariane Real Estate",
    price: "Starting from QAR 1.1M",
    type: "1 • 2 • 3 BHK",
    handover: "End of 2027",
    payment: "6 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "25% Till Handover",
    image: "/images/projects/cityavenue/cover.jpeg",
    gallery: [],
  },

  "marina-44": {
    name: "Marina 44",
    location: "Lusail Marina",
    developer: "Ariane Real Estate",
    price: "Starting from QAR 1.2M",
    type: "1 • 2 BHK",
    handover: "End of 2028",
    payment: "7 Years (Until End of 2033)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
    image: "/images/projects/marina44/cover.jpeg",
    gallery: [],
  },

  milos: {
    name: "Milos",
    location: "Al Qutaifiya",
    developer: "Ariane Real Estate",
    price: "Starting from QAR 1.65M",
    type: "1 • 2 • 3 BHK",
    handover: "End of 2027",
    payment: "7 Years (Until End of 2032)",
    downpayment: "2%",
    handoverPayment: "40% Till Handover",
    image: "/images/projects/milos/cover.jpeg",
    gallery: [],
  },
};

export default async function ProjectPage({ params }: ProjectPageProps) {
const { slug } = await params;
const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Project Not Found</h1>
          <p className="mt-4 text-slate-300">
            The requested project does not exist.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section
        className="relative min-h-[65vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="absolute inset-0 bg-slate-950/60" />

        <div className="relative mx-auto flex min-h-[65vh] max-w-7xl items-end px-6 pb-16 text-white">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Featured Development
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-7xl">
              {project.name}
            </h1>

            <p className="mt-4 text-xl text-slate-200">
              📍 {project.location}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-slate-900">
              Project Overview
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              Discover {project.name}, a premium development in{" "}
              {project.location}, offering flexible payment plans and a strong
              investment opportunity.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Developer</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.developer}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Starting Price</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.price}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Unit Types</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.type}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Handover</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.handover}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Payment Plan</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.payment}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow">
                <p className="text-sm text-slate-500">Down Payment</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.downpayment}
                </p>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow sm:col-span-2">
                <p className="text-sm text-slate-500">Payment Till Handover</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {project.handoverPayment}
                </p>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white">
            <h3 className="text-2xl font-bold">Interested in this project?</h3>

            <p className="mt-4 text-slate-300">
              Contact Q Estate for availability, prices, and payment plan
              details.
            </p>

            <button className="mt-8 w-full rounded-xl bg-cyan-500 px-5 py-3 font-semibold transition hover:bg-cyan-600">
              Request More Information
            </button>
          </aside>
        </div>
      </section>
            <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Project Gallery
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {project.gallery?.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl bg-white shadow"
              >
                <img
                  src={image}
                  alt={`${project.name} image ${index + 1}`}
                  className="h-72 w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}