export default function Offers() {
  return (
    <section className="w-full bg-zinc-900">

      {/* 💎 TOP STRIP (REPLACES MARQUEE) */}
      <div className="flex justify-center py-6">
        <div className="px-6 py-3 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#d4af37] text-xs uppercase tracking-[0.3em]">
          Limited Time Luxury Offers • Up to 40% Off
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-20 px-6">

        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-14 gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-3">
              SPECIAL OFFERS
            </p>

            <h2 className="text-4xl md:text-5xl text-white font-semibold">
              Indulge in Exclusive Deals
            </h2>
          </div>

          <a
            href="/offers"
            className="text-[#d4af37] border-b border-[#d4af37] pb-1 hover:opacity-80 transition"
          >
            View All Offers →
          </a>
        </div>

        {/* FEATURED OFFER */}
        <div className="relative group rounded-2xl overflow-hidden">

          <img
            src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
            className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* GLASS BADGE */}
          <div className="absolute top-6 left-6 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-xs text-[#d4af37] tracking-[0.2em]">
            SAVE RS 12,100
          </div>

          {/* CONTENT */}
          <div className="absolute bottom-8 left-8 max-w-lg">
            <h3 className="text-3xl md:text-4xl text-white font-semibold">
              Wellness & Beauty Collection
            </h3>

            <div className="flex items-center gap-4 mt-4">
              <span className="line-through text-zinc-400 text-lg">
                Rs 27,000
              </span>
              <span className="text-[#d4af37] text-2xl font-bold">
                Rs 14,900
              </span>
            </div>

            <a
              href="https://wa.me/94704438074"
              target="_blank"
              className="inline-block mt-6 bg-[#d4af37] text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
            >
              Book Now
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}