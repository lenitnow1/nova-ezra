"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function ServicesSection({ id = 'services' }) {
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

      gsap.from(q('[data-anim="reveal"]'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
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

  const items = [
    { title: 'Document Ingestion', desc: 'Upload PDFs and transform them into structured, readable study material.' },
    { title: 'Guided Lessons', desc: 'AI-generated explanations and checks that feel like a patient tutor.' },
    { title: 'Learning Paths', desc: 'Concepts organized like chapters in an intelligent textbook.' },
    { title: 'Progress Tracking', desc: 'Refined progress markers that honor your study journey.' },
    { title: 'Private Archive', desc: 'Your materials, your pace — a personal knowledge collection.' },
    { title: 'Scholarly Support', desc: 'Thoughtful feedback designed for comprehension, not gamification.' },
  ]

  return (
    <section id={id} ref={sectionRef} className="chapter-section relative z-10">
      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <p className="chapter-label text-center">Chapter II</p>
        <div className="text-center max-w-2xl mx-auto mt-3">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory tracking-tight">
            The Collection
          </h2>
          <p className="mt-4 text-sepia font-body">
            Everything you need for deep, comfortable learning — curated like a well-appointed library.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} data-anim="reveal" className="page-panel p-6 emboss-border transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]">
              <div className="flex items-start gap-4">
                <div className="h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-gold to-bronze" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70 font-body leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
