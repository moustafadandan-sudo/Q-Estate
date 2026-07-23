export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-4xl font-bold text-slate-900">
          Why Choose Q Estate?
        </h2>

        <p className="mt-4 text-center text-lg text-slate-600">
          Your trusted partner for premium real estate in Qatar.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              Verified Developers
            </h3>

            <p className="mt-3 text-slate-600">
              We work with trusted and established real estate developers in Qatar.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              Flexible Payment Plans
            </h3>

            <p className="mt-3 text-slate-600">
              Explore properties with convenient installment plans designed for buyers and investors.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              Prime Locations
            </h3>

            <p className="mt-3 text-slate-600">
              Discover premium properties in Lusail, Qetaifan Island, The Pearl, and other top locations across Qatar.
            </p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-center">
            <h3 className="text-xl font-semibold text-slate-900">
              Expert Real Estate Advice
            </h3>

            <p className="mt-3 text-slate-600">
              Our experienced team helps you choose the right property for living or investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}