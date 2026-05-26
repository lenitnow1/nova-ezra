'use client'

import CarouselSection from '@/components/CarouselSection'

export default function Hero({ titleRef, subtitleRef, ctasRef, splitText }) {
  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 md:pb-28 lg:pt-20">
        <div className="relative max-w-4xl">
          <p className="chapter-label mb-6">Chapter I — Welcome</p>

          <h1
            ref={titleRef}
            className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.08] text-ivory"
          >
            <span className="block drop-shadow-[0_2px_32px_rgba(200,169,107,0.12)]">
              {splitText('Knowledge, Illuminated')}
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-8 max-w-2xl text-lg md:text-xl text-sepia font-body leading-relaxed"
          >
            Step into an AI-powered private library. Upload texts, unfold lessons like
            open volumes, and study in a calm, scholarly reading room built for long sessions.
          </p>

          <div ref={ctasRef} className="mt-12 flex flex-col sm:flex-row items-start gap-4">
            <a href="/dashboard" className="btn-leather">
              Enter the Reading Room
            </a>
            <a href="/learn-more" className="btn-embossed">
              Explore the Archive
            </a>
          </div>
        </div>

        <CarouselSection />
      </section>
    </main>
  )
}
