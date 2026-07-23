"use client";

import { useEffect, useState } from "react";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const showPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((current) =>
          current === null
            ? null
            : (current - 1 + images.length) % images.length
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((current) =>
          current === null ? null : (current + 1) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, images.length]);

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="mt-8">
        <div className="relative overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
          <button
            type="button"
            onClick={() => setSelectedIndex(activeIndex)}
            className="group block w-full"
            aria-label={`Open image ${activeIndex + 1} in fullscreen`}
          >
            <img
              key={images[activeIndex]}
              src={images[activeIndex]}
              alt={`Project image ${activeIndex + 1}`}
              className="h-[340px] w-full object-cover transition duration-500 group-hover:scale-[1.02] sm:h-[500px] lg:h-[620px]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />

            <div className="absolute bottom-5 right-5 rounded-full bg-slate-950/75 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm">
              {activeIndex + 1} / {images.length}
            </div>

            <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-slate-900 opacity-0 shadow-md backdrop-blur-sm transition group-hover:opacity-100">
              Click to view fullscreen
            </div>
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white"
            aria-label="Previous project image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-2xl text-slate-900 shadow-lg transition hover:scale-105 hover:bg-white"
            aria-label="Next project image"
          >
            ›
          </button>
        </div>

        <div className="mt-5 flex gap-3 overflow-x-auto pb-3">
          {images.map((image, index) => (
            <button
              key={`${image}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative shrink-0 overflow-hidden rounded-xl border-2 transition duration-300 ${
                activeIndex === index
                  ? "border-cyan-500 shadow-md"
                  : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`Show project image ${index + 1}`}
            >
              <img
                src={image}
                alt={`Project thumbnail ${index + 1}`}
                className="h-20 w-28 object-cover transition duration-300 hover:scale-105 sm:h-24 sm:w-36"
              />

              {activeIndex === index && (
                <div className="absolute inset-0 bg-cyan-500/10" />
              )}
            </button>
          ))}
        </div>

        <div className="mt-3 flex items-center justify-between">
          <p className="text-sm text-slate-500">
            Select a thumbnail or use the arrows to browse.
          </p>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={showPrevious}
              className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-cyan-300 hover:text-cyan-600"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={showNext}
              className="rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-cyan-600"
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setSelectedIndex(null);
            }}
            className="absolute right-5 top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-3xl text-white backdrop-blur-sm transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            ×
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex((current) =>
                current === null
                  ? null
                  : (current - 1 + images.length) % images.length
              );
            }}
            className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:left-6"
            aria-label="Previous fullscreen image"
          >
            ‹
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();

              setSelectedIndex((current) =>
                current === null ? null : (current + 1) % images.length
              );
            }}
            className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-4xl text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-6"
            aria-label="Next fullscreen image"
          >
            ›
          </button>

          <img
            src={images[selectedIndex]}
            alt={`Fullscreen project image ${selectedIndex + 1}`}
            className="max-h-[88vh] max-w-[94vw] rounded-2xl object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-5 py-2 text-sm font-semibold text-white backdrop-blur-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}