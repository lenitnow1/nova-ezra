"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function HistorySection({ id = 'history' }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      const q = gsap.utils.selector(sectionRef)

      // Slide in the whole section content from the left
      gsap.from(q('[data-anim="slide-left"]'), {
        x: -80,
        autoAlpha: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      // Timeline items stagger in
      gsap.from(q('[data-anim="item"]'), {
        opacity: 0,
        y: 28,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      // Subtle parallax on line
      gsap.to(q('[data-parallax="line"]'), {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const events = [
    { year: '2021', label: 'MVP Launched', desc: 'Shipped the first public beta with core features.' },
    { year: '2022', label: 'Series A', desc: 'Raised funding and scaled the team internationally.' },
    { year: '2023', label: 'Global Launch', desc: 'Expanded to 40+ regions with localized experiences.' },
    { year: '2024', label: 'Realtime Engine', desc: 'Introduced low‑latency streaming APIs and edge compute.' },
  ]

  return (
    <section id={id} ref={sectionRef} className="relative z-10 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">History</h2>
          <p className="mt-3 text-white/70">Milestones that shaped the journey.</p>
        </div>

        <div className="relative mt-12">
          {/* Vertical line with parallax */}
          <div data-parallax="line" className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent" />

          <ol className="relative grid grid-cols-1 gap-8">
            {events.map((e, i) => (
              <li key={i} data-anim="item" className="relative">
                <div className={`flex flex-col ${i % 2 ? 'md:items-end' : ''}`}>
                  <div className="inline-flex items-center gap-3">
                    <span className="text-white/40 text-sm tracking-widest uppercase">{e.year}</span>
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-500" />
                  </div>
                  <div className="mt-2 max-w-xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 ring-1 ring-inset ring-white/5">
                    <div className="font-semibold text-white">{e.label}</div>
                    <div className="mt-1 text-sm text-white/70">{e.desc}</div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
