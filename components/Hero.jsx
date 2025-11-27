'use client'

import CarouselSection from '@/components/CarouselSection'

export default function Hero({ titleRef, subtitleRef, ctasRef, splitText }) {
  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-24 md:pb-32 lg:pt-24">
        <div className="relative">


          <h1 ref={titleRef} className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70 drop-shadow-[0_2px_40px_rgba(99,102,241,0.25)]">
              {splitText('The Future, Now')}
            </span>
          </h1>

          <p ref={subtitleRef} className="mt-6 max-w-2xl text-lg md:text-xl text-white/70">
            Build immersive experiences with speed-of-light performance. Crafted for creators who dream in neon.
          </p>

          <div ref={ctasRef} className="mt-10 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-6 py-3 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] transition-shadow"
            >
              Get Started
            </a>
            <a
              href="/learn-more"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 backdrop-blur-md px-6 py-3"
            >
              learn more
            </a>
          </div>

          {/* Carousel (shadcn-style) */}
          <CarouselSection />
        </div>
      </section>
    </main>
  )
}
