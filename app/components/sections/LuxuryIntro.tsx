"use client";

export default function LuxuryIntro() {
  return (
    <section className="relative w-full py-32 overflow-hidden bg-zinc-950">
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(#fff_1px,transparent_1px),linear-gradient(to_right,#fff_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* GLOW CIRCLES */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-[#d4af37]/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-4">
            LUXURY REDEFINED
          </p>

          <h2 className="text-4xl md:text-6xl text-white font-semibold leading-tight">
            Relaxation is not a luxury, <br /> it's a necessity.
          </h2>

          <p className="mt-6 text-zinc-400 max-w-lg">
            At Lumora, every detail is crafted to immerse you in calm. From
            ambient lighting to expert touch, we redefine wellness with
            elegance.
          </p>

          <a
            href="/treatments"
            className="inline-block mt-8 text-[#d4af37] border-b border-[#d4af37] pb-1 hover:opacity-80 transition"
          >
            Explore Treatments →
          </a>
        </div>

        {/* IMAGE SIDE */}
        <div className="relative">
          {/* MAIN IMAGE */}
          <div className="rounded-xl overflow-hidden shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
              className="w-full h-[400px] object-cover"
              alt="Spa"
            />
          </div>

          {/* FLOATING IMAGE */}
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-xl overflow-hidden border border-zinc-700 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1583417319070-4a69db38a482"
              className="w-full h-full object-cover"
              alt="Spa detail"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
