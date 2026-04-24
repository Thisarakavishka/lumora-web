"use client";

export default function Hero() {
  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/hero-video.mp4" type="video/mp4" />
      </video>

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-[#d4af37] mb-4">
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

      <div className="absolute bottom-6 w-full text-center text-white text-sm opacity-80 animate-bounce">
        ↓ Scroll
      </div>
    </section>
  );
}
