"use client";

import { useState } from "react";

type ProjectGalleryProps = {
  images: string[];
};

export default function ProjectGallery({
  images,
}: ProjectGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() => setSelectedImage(image)}
            className="overflow-hidden rounded-2xl bg-gray-100"
          >
            <img
              src={image}
              alt={`Project image ${index + 1}`}
              className="h-72 w-full object-cover transition duration-300 hover:scale-105"
            />
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="absolute right-6 top-6 text-4xl text-white"
            aria-label="Close gallery"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Selected project"
            className="max-h-[90vh] max-w-[95vw] rounded-xl object-contain"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
