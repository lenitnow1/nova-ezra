'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'


import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import ServicesSection from '@/components/ServicesSection'
import PaymentsSection from '@/components/PaymentsSection'
import HistorySection from '@/components/HistorySection'
import PixelBlast from "@/components/PixelBlast";
import MagicBento from '@/components/MagicBento'


export default function Home() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctasRef = useRef(null)
  const headerRef = useRef(null)
  const orbsRef = useRef([])




  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Intro reveal
      tl.from('.reveal-cover', {
        yPercent: 100,
        skewY: 6,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power4.inOut'
      })
        .from(
          headerRef.current?.querySelectorAll('[data-anim="nav"]'),
          {
            y: -24,
            opacity: 0,
            duration: 0.8,
            stagger: 0.06
          },
          '-=0.6'
        )
        .from(
          titleRef.current?.querySelectorAll('.char'),
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.03,
            rotateX: 40,
            transformOrigin: '50% 100% -20',
          },
          '-=0.4'
        )
        .from(
          subtitleRef.current,
          { y: 24, opacity: 0, duration: 0.8 },
          '-=0.6'
        )
        .from(
          ctasRef.current?.querySelectorAll('a'),
          { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 },
          '-=0.5'
        )

      // Floating orbs animation
      orbsRef.current.forEach((el, i) => {
        if (!el) return
        const rnd = 8 + i * 2
        gsap.to(el, {
          y: `+=${rnd}`,
          x: `+=${rnd / 2}`,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        })
      })
    })

    return () => ctx.revert()
  }, [])

  // Utility to split a string into spans for animation
  const splitText = (text) =>
    text.split('').map((ch, i) => (
      <span key={i} className="char inline-block will-change-transform">
        {ch === ' ' ? '\u00A0' : ch}
      </span>
    ))

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden selection:bg-cyan-400/20 selection:text-cyan-200">
        <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
            <PixelBlast
                variant="circle"
                pixelSize={6}
                color="#0000FF"
                patternScale={3}
                patternDensity={1.2}
                pixelSizeJitter={0.5}

                rippleSpeed={0.4}
                rippleThickness={0.12}
                rippleIntensityScale={1.5}
                liquid
                liquidStrength={0.12}
                liquidRadius={1.2}
                liquidWobbleSpeed={5}
                speed={0.6}
                edgeFade={0.25}
                transparent
            />
        </div>







      {/* Header */}
      <Header headerRef={headerRef} />

      <div
className='justify-center  lg:flex hidden'>
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

      {/* Hero */}
      <Hero titleRef={titleRef} subtitleRef={subtitleRef} ctasRef={ctasRef} splitText={splitText} />

      {/* Sections */}
      <ServicesSection />
      <PaymentsSection />
      <HistorySection />

      {/* Footer */}
      <Footer />

    </div>  
  )
}