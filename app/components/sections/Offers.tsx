export default function Offers() {
  return (
    <section className="w-full py-20 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">

        <div className="flex justify-between items-end mb-10">
          <h2 className="text-3xl font-semibold text-white">
            Trending Now
          </h2>
          <a href="/offers" className="text-[#d4af37] hover:underline">
            View all offers
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* CARD */}
          <div className="group overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50 hover:shadow-xl transition">

            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl text-white font-medium">
                Wellness & Beauty Collection
              </h3>

              <p className="text-zinc-400 mt-2">
                Save Rs 12,100
              </p>

              <div className="flex items-center gap-3 mt-4">
                <span className="line-through text-zinc-500">
                  Rs 27,000
                </span>
                <span className="text-[#d4af37] text-xl font-bold">
                  Rs 14,900
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}