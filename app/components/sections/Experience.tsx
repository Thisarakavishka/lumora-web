export default function Experience() {
  return (
    <section className="w-full py-24 bg-zinc-950 px-6">
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d4af37] mb-4">
            LUMORA EXPERIENCE
          </p>

          <h2 className="text-3xl md:text-5xl text-white font-semibold">
            A Sanctuary of Calm & Luxury
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Step into a world where relaxation meets luxury. Every treatment is
            designed to restore your body, calm your mind, and awaken your
            senses.
          </p>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* ITEM 1 */}
          <div className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:-translate-y-2 transition duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt="Spa massage"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-lg font-medium">
                Expert Therapists
              </h3>
              <p className="text-zinc-400 mt-3 text-sm">
                Highly trained professionals delivering personalized treatments.
              </p>
            </div>
          </div>

          {/* ITEM 2 */}
          <div className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:-translate-y-2 transition duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1552693673-1bf958298935"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt="Luxury spa"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-lg font-medium">
                Premium Atmosphere
              </h3>
              <p className="text-zinc-400 mt-3 text-sm">
                A calming environment designed for complete relaxation.
              </p>
            </div>
          </div>

          {/* ITEM 3 */}
          <div className="group rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 hover:-translate-y-2 transition duration-300">
            <div className="h-64 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1583417319070-4a69db38a482"
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                alt="Aromatherapy"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-white text-lg font-medium">
                Natural Therapies
              </h3>
              <p className="text-zinc-400 mt-3 text-sm">
                Using organic oils and techniques for deep healing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
