type Amenity = {
  icon: string;
  title: string;
};

type AmenitiesProps = {
  amenities: Amenity[];
};

export default function Amenities({ amenities }: AmenitiesProps) {
  return (
    <section>
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900">
          Premium Amenities
        </h2>

        <p className="mt-3 text-slate-600">
          Facilities designed for comfort, convenience, and modern living.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {amenities.map((amenity) => (
          <div
            key={amenity.title}
            className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-3xl">
              {amenity.icon}
            </div>

            <h3 className="font-semibold text-slate-900">
              {amenity.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}