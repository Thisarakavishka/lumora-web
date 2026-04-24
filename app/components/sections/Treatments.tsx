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
    <section className="w-full py-20 px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-semibold text-white">Award Winners</h2>
          <a href="/treatments" className="text-[#d4af37] hover:underline">
            View Spa Menu
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {treatments.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl overflow-hidden border border-zinc-700 bg-zinc-800/50 hover:-translate-y-2 transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>

              <div className="p-4">
                <h3 className="text-white">{item.title}</h3>
                <p className="text-[#d4af37] font-semibold mt-2">
                  {item.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
