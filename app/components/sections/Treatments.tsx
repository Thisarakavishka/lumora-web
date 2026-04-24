"use client";

const treatments = [
  {
    title: "Relaxation Massage",
    price: "Rs 4,300",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935",
  },
  {
    title: "Turmeric Facial",
    price: "Rs 5,600",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881",
  },
  {
    title: "Aroma Therapy",
    price: "Rs 3,500",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482",
  },
  {
    title: "Luxury Spa Ritual",
    price: "Rs 6,200",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
  },
];

export default function Treatments() {
  return (
    <section className="w-full py-28 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-3">
              SIGNATURE COLLECTION
            </p>
            <h2 className="text-4xl md:text-5xl text-white font-semibold">
              Award Winning Treatments
            </h2>
          </div>

          <a
            href="/treatments"
            className="text-[#d4af37] border-b border-[#d4af37] pb-1 hover:opacity-80 transition"
          >
            View Full Menu →
          </a>
        </div>

        {/* LAYOUT */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* FEATURED CARD */}
          <div className="lg:col-span-2 relative group rounded-2xl overflow-hidden">
            <img
              src={treatments[0].image}
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* CONTENT */}
            <div className="absolute bottom-6 left-6">
              <h3 className="text-2xl md:text-3xl text-white font-semibold">
                {treatments[0].title}
              </h3>
              <p className="text-[#d4af37] mt-2 text-lg font-medium">
                {treatments[0].price}
              </p>
            </div>
          </div>

          {/* SIDE CARDS */}
          <div className="flex flex-col gap-6">
            {treatments.slice(1).map((item, i) => (
              <div
                key={i}
                className="group flex gap-4 items-center border border-zinc-800 rounded-xl p-3 bg-zinc-900 hover:bg-zinc-800 transition"
              >
                <div className="w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                <div>
                  <h3 className="text-white text-sm font-medium">
                    {item.title}
                  </h3>
                  <p className="text-[#d4af37] text-sm mt-1">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
