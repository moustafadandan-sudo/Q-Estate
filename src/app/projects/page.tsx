"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { getFeaturedProjects } from "@/data/projects";

type SortOption = "featured" | "price-low" | "price-high" | "handover";

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
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m20 20-3.5-3.5"
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

export default function ProjectsPage() {
  const projects = useMemo(() => getFeaturedProjects(), []);

  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("all");
  const [propertyType, setPropertyType] = useState("all");
  const [handoverYear, setHandoverYear] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("featured");

  const locations = useMemo(() => {
    return [...new Set(projects.map((project) => project.location))].sort();
  }, [projects]);

  const propertyTypes = useMemo(() => {
    return [
      ...new Set(projects.flatMap((project) => project.propertyTypes)),
    ].sort();
  }, [projects]);

  const handoverYears = useMemo(() => {
    return [
      ...new Set(projects.map((project) => project.handoverYear)),
    ].sort((a, b) => a - b);
  }, [projects]);

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    const matchingProjects = projects.filter((project) => {
      const matchesSearch =
        query === "" ||
        project.name.toLowerCase().includes(query) ||
        project.location.toLowerCase().includes(query) ||
        project.developer.toLowerCase().includes(query) ||
        project.type.toLowerCase().includes(query) ||
        project.propertyTypes.some((type) =>
          type.toLowerCase().includes(query)
        ) ||
        project.handover.toLowerCase().includes(query);

      const matchesLocation =
        location === "all" || project.location === location;

      const matchesPropertyType =
        propertyType === "all" ||
        project.propertyTypes.includes(propertyType);

      const matchesHandover =
        handoverYear === "all" ||
        project.handoverYear === Number(handoverYear);

      return (
        matchesSearch &&
        matchesLocation &&
        matchesPropertyType &&
        matchesHandover
      );
    });

    return [...matchingProjects].sort((a, b) => {
      if (sortBy === "price-low") {
        return a.priceValue - b.priceValue;
      }

      if (sortBy === "price-high") {
        return b.priceValue - a.priceValue;
      }

      if (sortBy === "handover") {
        return a.handoverYear - b.handoverYear;
      }

      return Number(b.featured) - Number(a.featured);
    });
  }, [
    projects,
    search,
    location,
    propertyType,
    handoverYear,
    sortBy,
  ]);

  const filtersAreActive =
    search.trim() !== "" ||
    location !== "all" ||
    propertyType !== "all" ||
    handoverYear !== "all" ||
    sortBy !== "featured";

  function clearFilters() {
    setSearch("");
    setLocation("all");
    setPropertyType("all");
    setHandoverYear("all");
    setSortBy("featured");
  }

  return (
    <main className="min-h-screen bg-slate-50">
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Q Estate
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-5xl">
            Discover Our Projects
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Browse premium real estate developments across Qatar and find the
            perfect property for your investment or future home.
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
              <SearchIcon />
            </div>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by project, location, developer, or property type..."
              className="w-full rounded-xl border border-slate-300 bg-white py-4 pl-12 pr-5 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
            />
          </div>

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <label
                htmlFor="location"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Location
              </label>

              <select
                id="location"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="all">All locations</option>

                {locations.map((projectLocation) => (
                  <option key={projectLocation} value={projectLocation}>
                    {projectLocation}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="property-type"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Property Type
              </label>

              <select
                id="property-type"
                value={propertyType}
                onChange={(event) => setPropertyType(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="all">All property types</option>

                {propertyTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="handover"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Handover Year
              </label>

              <select
                id="handover"
                value={handoverYear}
                onChange={(event) => setHandoverYear(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="all">All handover years</option>

                {handoverYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="sort"
                className="mb-2 block text-sm font-semibold text-slate-700"
              >
                Sort Projects
              </label>

              <select
                id="sort"
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value as SortOption)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-700 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
              >
                <option value="featured">Featured first</option>
                <option value="price-low">Price: Low to high</option>
                <option value="price-high">Price: High to low</option>
                <option value="handover">Handover: Earliest first</option>
              </select>
            </div>
          </div>

          {filtersAreActive && (
            <div className="mt-5 flex justify-end">
              <button
                type="button"
                onClick={clearFilters}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-600"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 pb-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              All Projects
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              Find the right property for your home or investment.
            </p>
          </div>

          <span className="rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-700">
            {filteredProjects.length}{" "}
            {filteredProjects.length === 1 ? "Project" : "Projects"}
          </span>
        </div>
      </section>

      <section className="px-6 pb-20">
        {filteredProjects.length > 0 ? (
          <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2 lg:grid-cols-4">
            {filteredProjects.map((project) => (
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
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />

                  {project.featured && (
                    <span className="absolute left-5 top-5 rounded-full bg-cyan-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
                      Featured
                    </span>
                  )}

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
                        <span className="text-sm font-medium">
                          Unit Types
                        </span>
                      </div>

                      <span className="text-right text-sm font-semibold text-slate-800">
                        {project.type}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-slate-500">
                        <CalendarIcon />
                        <span className="text-sm font-medium">
                          Handover
                        </span>
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
        ) : (
          <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <div className="text-5xl">🏠</div>

            <h3 className="mt-5 text-2xl font-bold text-slate-900">
              No projects found
            </h3>

            <p className="mt-3 text-slate-600">
              No projects match your selected search and filters.
            </p>

            <button
              type="button"
              onClick={clearFilters}
              className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}