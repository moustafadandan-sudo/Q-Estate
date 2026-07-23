"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    name: "Skala Villas",
    location: "Qetaifan Island North",
    price: "Starting from QAR 4.8M",
    image: "/images/projects/skala/cover.jpeg",
    slug: "skala-villas",
  },
  {
    name: "City Avenue",
    location: "Lusail",
    price: "Starting from QAR 1.1M",
    image: "/images/projects/cityavenue/cover.jpeg",
    slug: "city-avenue",
  },
  {
    name: "Marina 44",
    location: "Lusail Marina",
    price: "Premium Apartments",
    image: "/images/projects/marina44/cover.jpeg",
    slug: "marina-44",
  },
  {
    name: "Milos",
    location: "Qetaifan Island",
    price: "Luxury Residences",
    image: "/images/projects/milos/cover.jpeg",
    slug: "milos",
  },
];

export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousProject = () => {
    setCurrentIndex((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const nextProject = () => {
    setCurrentIndex((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const project = projects[currentIndex];

  return (
    <section className="bg-slate-100 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
            Discover Qatar
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Explore selected residential and investment opportunities across
            Qatar.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl bg-slate-950 shadow-2xl">
          <div className="grid min-h-[520px] lg:grid-cols-2">
            <div className="relative min-h-[350px]">
              <img
                src={project.image}
                alt={project.name}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
            </div>

            <div className="flex flex-col justify-center p-8 text-white md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                {project.location}
              </p>

              <h3 className="mt-4 text-4xl font-bold md:text-5xl">
                {project.name}
              </h3>

              <p className="mt-5 text-xl text-slate-300">{project.price}</p>

              <Link
                href={`/projects/${project.slug}`}
                className="mt-8 inline-flex w-fit rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Project
              </Link>

              <div className="mt-10 flex items-center gap-4">
                <button
                  type="button"
                  onClick={previousProject}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 text-2xl transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  aria-label="Previous project"
                >
                  ←
                </button>

                <button
                  type="button"
                  onClick={nextProject}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-600 text-2xl transition hover:border-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
                  aria-label="Next project"
                >
                  →
                </button>

                <p className="ml-2 text-sm text-slate-400">
                  {currentIndex + 1} / {projects.length}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}