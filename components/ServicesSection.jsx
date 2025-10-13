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

      // Reveal/zoom-in cards
      gsap.from(q('[data-anim="reveal"]'), {
        opacity: 0,
        y: 36,
        scale: 0.96,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      })

      // Parallax decor
      gsap.to(q('[data-parallax="slow"]'), {
        yPercent: -20,
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

  return (
    <section id={id} ref={sectionRef} className="relative z-10 py-24 md:py-32">
      {/* Parallax background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-parallax="slow"
          className="absolute -left-24 top-1/4 h-72 w-72 rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.35), transparent 60%)',
          }}
        />
        <div
          data-parallax="slow"
          className="absolute -right-24 bottom-0 h-80 w-80 rounded-full blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient(circle at 70% 70%, rgba(99,102,241,0.35), transparent 60%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Services</h2>
          <p className="mt-3 text-white/70">Everything you need to launch, scale, and delight your users.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'API Integrations', desc: 'Robust, well‑documented endpoints with real‑time webhooks.' },
            { title: 'Authentication', desc: 'Enterprise‑grade auth with SSO, MFA, and fine‑grained roles.' },
            { title: 'Analytics', desc: 'Actionable insights with anomaly detection and cohort analysis.' },
            { title: 'Automation', desc: 'Powerful workflows with retries, scheduling, and branching.' },
            { title: 'Security', desc: 'End‑to‑end encryption, audit logs, and compliance tooling.' },
            { title: 'Support', desc: '24/7 global support and dedicated success engineers.' },
          ].map((item, i) => (
            <div
              key={i}
              data-anim="reveal"
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 ring-1 ring-inset ring-white/5 hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
