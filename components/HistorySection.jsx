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

      gsap.from(q('[data-anim="slide-left"]'), {
        x: -40,
        autoAlpha: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from(q('[data-anim="item"]'), {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const events = [
    { year: '2024', label: 'The Archive Opens', desc: 'Nova begins as a vision for intelligent, beautiful reading.' },
    { year: '2025', label: 'Interactive Textbooks', desc: 'PDF ingestion and AI-guided lessons join the collection.' },
    { year: '2025', label: 'The Reading Room', desc: 'A dedicated dashboard for long-form study sessions.' },
    { year: 'Today', label: 'Your Private Library', desc: 'Upload, learn, and grow within a calm scholarly space.' },
  ]

  return (
    <section id={id} ref={sectionRef} className="chapter-section relative z-10 pb-24">
      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <div className="text-center max-w-2xl mx-auto">
          <p className="chapter-label">Chapter IV</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ivory tracking-tight">
            A Brief History
          </h2>
          <p className="mt-4 text-sepia font-body">Milestones along the shelves of our story.</p>
        </div>

        <div className="relative mt-14 max-w-2xl mx-auto">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-gold/40 via-bronze/20 to-transparent" />

          <ol className="relative space-y-10">
            {events.map((e, i) => (
              <li key={i} data-anim="item" className="relative pl-12 md:pl-0">
                <span className="absolute left-2.5 md:left-1/2 md:-translate-x-1/2 top-1.5 size-3 rounded-full bg-gold shadow-[0_0_12px_rgba(200,169,107,0.4)]" />
                <div className="page-panel p-5 emboss-border md:max-w-md md:ml-auto md:mr-8">
                  <span className="font-display text-xs tracking-[0.2em] uppercase text-bronze">{e.year}</span>
                  <div className="mt-2 font-display text-lg font-semibold text-ink">{e.label}</div>
                  <p className="mt-2 text-sm text-ink/70 font-body">{e.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
