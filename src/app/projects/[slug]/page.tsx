import Link from "next/link";
import { notFound } from "next/navigation";
import Amenities from "@/components/Amenities";
import ProjectGallery from "@/components/ProjectGallery";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type IconName =
  | "developer"
  | "price"
  | "home"
  | "calendar"
  | "payment"
  | "card"
  | "check"
  | "location";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

function ProjectIcon({ name }: { name: IconName }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    className: "h-6 w-6",
    "aria-hidden": true,
  };

  if (name === "developer") {
    return (
      <svg {...commonProps}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 9h2a2 2 0 0 1 2 2v10M8 7h4M8 11h4M8 15h4M9 21v-3h2v3M2 21h20"
        />
      </svg>
    );
  }

  if (name === "price") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 8.5c-.7-.5-1.7-.8-2.8-.8-1.5 0-2.7.7-2.7 1.9 0 1.1.9 1.6 2.8 2 1.9.4 2.8.9 2.8 2.1 0 1.3-1.2 2.1-2.9 2.1-1.3 0-2.5-.4-3.3-1.1M12 6.5v11"
        />
      </svg>
    );
  }

  if (name === "home") {
    return (
      <svg {...commonProps}>
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

  if (name === "calendar") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 3v4M16 3v4M3 10h18"
        />
      </svg>
    );
  }

  if (name === "payment") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 10h18M7 15h4"
        />
      </svg>
    );
  }

  if (name === "card") {
    return (
      <svg {...commonProps}>
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 11h18M7 15h3"
        />
      </svg>
    );
  }

  if (name === "check") {
    return (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="9" />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8 12 2.5 2.5L16 9"
        />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
      />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function OverviewCard({
  icon,
  label,
  value,
  wide = false,
}: {
  icon: IconName;
  label: string;
  value: string;
  wide?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600">
          <ProjectIcon name={icon} />
        </div>

        <div>
          <p className="text-sm font-medium text-slate-500">{label}</p>

          <p className="mt-2 text-lg font-semibold text-slate-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
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
            <div className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-200">
              <Link href="/" className="transition hover:text-cyan-300">
                Home
              </Link>

              <span>/</span>

              <Link
                href="/projects"
                className="transition hover:text-cyan-300"
              >
                Projects
              </Link>

              <span>/</span>

              <span className="text-white">{project.name}</span>
            </div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Featured Development
            </p>

            <h1 className="mt-4 text-5xl font-bold md:text-7xl">
              {project.name}
            </h1>

            <div className="mt-4 flex items-center gap-2 text-xl text-slate-200">
              <ProjectIcon name="location" />

              <span>{project.location}</span>
            </div>
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
              <OverviewCard
                icon="developer"
                label="Developer"
                value={project.developer}
              />

              <OverviewCard
                icon="price"
                label="Starting Price"
                value={project.price}
              />

              <OverviewCard
                icon="home"
                label="Unit Types"
                value={project.type}
              />

              <OverviewCard
                icon="calendar"
                label="Handover"
                value={project.handover}
              />

              <OverviewCard
                icon="payment"
                label="Payment Plan"
                value={project.payment}
              />

              <OverviewCard
                icon="card"
                label="Down Payment"
                value={project.downpayment}
              />

              <OverviewCard
                icon="check"
                label="Payment Till Handover"
                value={project.handoverPayment}
                wide
              />
            </div>
          </div>

          <aside className="h-fit rounded-3xl bg-slate-950 p-8 text-white lg:sticky lg:top-24">
            <h3 className="text-2xl font-bold">
              Interested in this project?
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Contact Q Estate for availability, prices, and payment plan
              details.
            </p>

            <a
              href={`https://wa.me/97433279898?text=${encodeURIComponent(
                `Hi! I'm interested in ${project.name}.

Location: ${project.location}
Price: ${project.price}

Could you please send me:
• The brochure
• The payment plan
• Current availability

Thank you!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-xl bg-cyan-500 px-5 py-3 text-center font-semibold transition hover:bg-cyan-600"
            >
              Request More Information
            </a>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-12">
        <div className="mx-auto max-w-7xl">
          <Amenities amenities={project.amenities} />
        </div>
      </section>

      <section className="px-6 pb-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-slate-900">
            Project Gallery
          </h2>

          <ProjectGallery images={project.gallery} />
        </div>
      </section>
    </main>
  );
}