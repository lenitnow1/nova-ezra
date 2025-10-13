"use client"

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function PaymentsSection({ id = 'payments' }) {
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

      // Reveal headline and cards
      gsap.from(q('[data-anim="hdr"]'), {
        opacity: 0,
        y: 24,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      })

      gsap.from(q('[data-anim="card"]'), {
        opacity: 0,
        y: 40,
        scale: 0.95,
        duration: 0.9,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      })

      // Parallax background shapes
      gsap.to(q('[data-parallax="bg"]'), {
        yPercent: -25,
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

  const features = [
    { title: 'Global Payments', desc: 'Accept 135+ currencies with intelligent routing for the best rates.' },
    { title: 'Instant Payouts', desc: 'Move money to your bank in seconds with real‑time transfers.' },
    { title: 'Fraud Shield', desc: 'Adaptive risk models and 3‑D Secure to keep chargebacks low.' },
    { title: 'Subscriptions', desc: 'Revenue tooling for trials, proration, and dunning automation.' },
  ]

  return (
    <section id={id} ref={sectionRef} className="relative z-10 py-24 md:py-32">
      {/* Parallax accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          data-parallax="bg"
          className="absolute left-1/2 -translate-x-1/2 -top-20 h-[28rem] w-[28rem] rounded-full blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.35), transparent 60%)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6" data-anim="slide-left">
        <div className="text-center max-w-2xl mx-auto" data-anim="hdr">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Payments</h2>
          <p className="mt-3 text-white/70">A delightful checkout with globe‑spanning rails and bank‑grade security.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <div key={i} data-anim="card" className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 ring-1 ring-inset ring-white/5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-400 to-indigo-500 shrink-0" />
                <div>
                  <h3 className="font-semibold text-white">{f.title}</h3>
                  <p className="mt-1 text-sm text-white/70">{f.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Demo card */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur-md p-4 ring-1 ring-inset ring-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-white/80 text-sm">Try our demo checkout — zero setup.</div>
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 text-black font-semibold px-5 py-2.5 shadow-[0_10px_30px_rgba(56,189,248,0.25)] hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)] transition-shadow">
              Launch Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
