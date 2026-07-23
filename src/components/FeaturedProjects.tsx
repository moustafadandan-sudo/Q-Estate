import Link from "next/link";
import { getFeaturedProjects } from "@/data/projects";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3 11 9-8 9 8"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 10v10h14V10M9 20v-6h6v6"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 3v4M16 3v4M3 10h18"
      />
    </svg>
  );
}

function FurnitureIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 11V8a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 11a2 2 0 0 0-2 2v4h20v-4a2 2 0 0 0-4 0v1H6v-1a2 2 0 0 0-2-2Z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4 17v2M20 17v2"
      />
    </svg>
  );
}

function PaymentIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-4 w-4 shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 10h18M7 15h3"
      />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="h-5 w-5 text-cyan-400 transition-all duration-300 group-hover/view-button:translate-x-1 group-hover/view-button:text-black"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 12h14M13 6l6 6-6 6"
      />
    </svg>
  );
}

function getPaymentPlan(slug: string) {
  const paymentPlans: Record<string, string> = {
    "skala-villas": "8-Year Payment Plan",
    "city-avenue": "7-Year Payment Plan",
    "marina-44": "8-Year Payment Plan",
    milos: "7-Year Payment Plan",
  };

  return paymentPlans[slug] || "Flexible Payment Plan";
}

export default function FeaturedProjects() {
  const featuredProjects = getFeaturedProjects();

  return (
    <section id="projects" className="bg-slate-50 px-6 py-20 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-600">
            Featured Developments
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Explore Qatar&apos;s Top Projects
          </h2>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            Discover selected properties across Qatar&apos;s most desirable
            locations.
          </p>
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="group/card flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="relative block h-64 overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover/card:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                  Featured
                </span>

                <div className="absolute inset-x-0 bottom-0 px-5 pb-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-white">
                    <LocationIcon />
                    <span>{project.location}</span>
                  </div>
                </div>
              </Link>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-2xl font-bold leading-tight text-slate-900">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="transition hover:text-cyan-600"
                  >
                    {project.name}
                  </Link>
                </h3>

                <p className="mt-4 text-sm font-medium text-slate-500">
                  Starting from
                </p>

                <p className="mt-1 text-xl font-bold text-slate-900">
                  {project.price}
                </p>

                <div className="mt-5 grid grid-cols-1 gap-2">
                  <div className="flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2.5 text-sm font-semibold text-cyan-800">
                    <FurnitureIcon />
                    <span>Fully Furnished</span>
                  </div>

                  <div className="flex items-center gap-2 rounded-xl bg-cyan-50 px-3 py-2.5 text-sm font-semibold text-cyan-800">
                    <PaymentIcon />
                    <span>{getPaymentPlan(project.slug)}</span>
                  </div>
                </div>

                <div className="mt-5 space-y-3 border-t border-slate-200 pt-5">
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <HomeIcon />
                      <span className="text-sm font-medium">Unit Types</span>
                    </div>

                    <span className="text-right text-sm font-semibold text-slate-800">
                      {project.type}
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <CalendarIcon />
                      <span className="text-sm font-medium">Handover</span>
                    </div>

                    <span className="text-right text-sm font-semibold text-slate-800">
                      {project.handover}
                    </span>
                  </div>
                </div>

                <Link
                  href={`/projects/${project.slug}`}
                  className="group/view-button mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3.5 font-semibold text-white transition duration-300 hover:bg-cyan-500"
                >
                  View Project
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-600"
          >
            View All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}