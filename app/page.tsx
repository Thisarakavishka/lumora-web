import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const heroVideo =
    "/Users/thisarakavishka/Development/lumora-web/public/video/hero-video.mp4";

  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative w-screen h-screen overflow-hidden">

  {/* VIDEO BACKGROUND */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source src="/video/hero-video.mp4" type="video/mp4" />
  </video>

  {/* OVERLAY */}
  <div className="absolute inset-0 bg-black/60" />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

  {/* CONTENT */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    
    <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-yellow-500 mb-4">
      LUMORA RELAXATION STUDIO
    </p>

    <h1 className="text-4xl md:text-7xl font-semibold text-white leading-tight max-w-4xl">
      Find Your Inner Peace
    </h1>

    <p className="mt-6 text-lg md:text-xl text-zinc-300">
      Luxury Wellness & Relaxation Experience
    </p>

    <a
      href="https://wa.me/94704438074"
      target="_blank"
      className="mt-10 bg-[#d4af37] text-black px-8 py-4 rounded-full font-bold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
    >
      Book via WhatsApp
    </a>
  </div>

  {/* SCROLL TEXT */}
  <div className="absolute bottom-6 w-full text-center text-white text-sm opacity-80">
    ↓ Scroll
  </div>

</section>

      {/* 2. TRENDING NOW / OFFERS SECTION (Placeholder) */}
      <section className="w-full max-w-5xl py-16 px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-semibold text-white">Trending Now</h2>
          <Link href="/offers" className="text-yellow-500 hover:underline">
            View all offers
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Placeholder (Will build in TreatmentCard.tsx) */}
          <div className="p-6 border border-zinc-700 rounded-lg bg-zinc-800/50">
            <h3 className="text-xl font-medium text-white">
              Wellness & Beauty Collection
            </h3>
            <p className="text-sm text-zinc-400 mt-2 mb-4">Save Rs 12,100</p>
            <div className="flex gap-3 items-center">
              <span className="text-zinc-500 line-through">Rs 27,000</span>
              <span className="text-yellow-500 font-bold text-lg">
                Rs 14,900
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BEST SELLERS / AWARD WINNERS SECTION (Placeholder) */}
      <section className="w-full max-w-5xl py-16 px-4">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-2xl font-semibold text-white">Award Winners</h2>
          <Link href="/treatments" className="text-yellow-500 hover:underline">
            View Spa Menu
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* We will map through your treatments.ts data here later */}
          <div className="h-48 border border-zinc-700 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500">
            Treatment Card 1
          </div>
          <div className="h-48 border border-zinc-700 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500">
            Treatment Card 2
          </div>
          <div className="h-48 border border-zinc-700 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500">
            Treatment Card 3
          </div>
          <div className="h-48 border border-zinc-700 rounded-lg bg-zinc-800/50 flex items-center justify-center text-zinc-500">
            Treatment Card 4
          </div>
        </div>
      </section>
    </div>
  );
}
