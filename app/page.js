'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import PaymentsSection from '@/components/PaymentsSection'
import HistorySection from '@/components/HistorySection'
import MagicBento from '@/components/MagicBento'

export default function Home() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const headerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })

      tl.from(headerRef.current?.querySelectorAll('[data-anim="nav"]'), {
        y: -12,
        opacity: 0,
        duration: 0.7,
        stagger: 0.05,
      })
        .from(
          titleRef.current?.querySelectorAll('.char'),
          {
            y: 24,
            opacity: 0,
            duration: 0.9,
            stagger: 0.02,
          },
          '-=0.3'
        )
        .from(subtitleRef.current, { y: 12, opacity: 0, duration: 0.7 }, '-=0.5')
        .from(
          ctasRef.current?.querySelectorAll('a'),
          { y: 12, opacity: 0, duration: 0.6, stagger: 0.06 },
          '-=0.4'
        )
    })

    return () => ctx.revert()
  }, [])

  const splitText = (text) =>
    text.split('').map((ch, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))

  return (
    <div className="min-h-screen text-ivory relative overflow-hidden">
      <Header headerRef={headerRef} />

      <div className="relative z-10 flex justify-center lg:flex hidden px-6">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="0, 0, 255"
        />
      </div>

      <Hero titleRef={titleRef} subtitleRef={subtitleRef} ctasRef={ctasRef} splitText={splitText} />
      <ServicesSection />
      <PaymentsSection />
      <HistorySection />
      <Footer />
    </div>
  )
}
