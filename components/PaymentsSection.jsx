"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function PaymentsSection({ id = 'access' }) {
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

      gsap.from(q('[data-anim="hdr"]'), {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 82%',
          once: true,
        },
      })

      gsap.from(q('[data-anim="card"]'), {
        opacity: 0,
        y: 20,
        duration: 0.8,
        ease: 'power2.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const features = [
    { title: 'Seamless Access', desc: 'Sign in once and return to your reading room across sessions.' },
    { title: 'Secure Vault', desc: 'Your documents and progress protected with modern authentication.' },
    { title: 'Study Anywhere', desc: 'A responsive experience that travels from desk to armchair.' },
    { title: 'Always Evolving', desc: 'Lessons and insights that grow as your archive expands.' },
  ]

  return (
    <section id={id} ref={sectionRef} className="chapter-section relative z-10">
      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <div className="text-center max-w-2xl mx-auto" data-anim="hdr">
          <p className="chapter-label">Chapter III</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-ivory tracking-tight">
            Membership & Access
          </h2>
          <p className="mt-4 text-sepia font-body">
            A dignified entry into your private library — simple, secure, and uninterrupted.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} data-anim="card" className="book-panel p-6 emboss-border">
              <div className="flex items-start gap-4">
                <div className="h-10 w-1.5 shrink-0 rounded-full bg-gradient-to-b from-gold/80 to-bronze/60" />
                <div>
                  <h3 className="font-display text-lg font-semibold text-ivory">{f.title}</h3>
                  <p className="mt-2 text-sm text-sepia font-body leading-relaxed">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 page-panel p-6 emboss-border" data-anim="card">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-ink/80 text-sm font-body">
              Ready to begin? Open the reading room and upload your first volume.
            </p>
            <a href="/dashboard" className="btn-leather shrink-0">
              Open Reading Room
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
