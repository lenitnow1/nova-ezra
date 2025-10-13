'use client'

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Card from '@/components/Infocard'
import PixelBlast from "@/components/PixelBlast";


export default function LearnMorePage() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // Intro
      gsap.from("[data-anim='title']", { y: 24, opacity: 0, duration: 0.7, ease: 'power3.out' })
      gsap.from("[data-anim='intro']", { y: 20, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })

      // Cards (clear inline transform after entrance so hover effects work)
      gsap.set("[data-anim='card']", { opacity: 0, x: 48 })
      const tlCards = gsap.timeline()
      tlCards.to("[data-anim='card']", { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', stagger: 0.25, delay: 0.8 })
      // Remove inline transform so Tailwind hover:rotate-* can take effect
      tlCards.set("[data-anim='card']", { clearProps: 'transform' })

      // Web Projects section heading
      gsap.from("[data-anim='section-title']", { y: 16, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.15 })
      gsap.from("[data-anim='section-intro']", { y: 16, opacity: 0, duration: 0.7, ease: 'power3.out', delay: 0.18 })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen  text-white">
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

      <div className="mx-auto max-w-6xl px-6 py-16">
        <h1 data-anim="title" className="text-4xl sm:text-5xl font-bold tracking-tight">Learn More</h1>
        <p data-anim="intro" className="mt-4 text-white/70 max-w-2xl">
          Discover how Nova helps you build, launch, and scale faster. This page provides an overview of our
          features, technology, and the principles guiding our product.
        </p>

        <section className="mt-12 grid gap-8 sm:grid-cols-2">
          <Card
            label="About"
            title="What is Nova?"
            description="Nova is a modern starter that blends beautiful UI, delightful motion, and pragmatic tooling to help you ship production-ready apps quickly."
            categories={["UI", "Motion", "Tooling"]}
          />

          <Card
            label="Highlights"
            title="Key Features"
            description="A curated set of features to accelerate your workflow."
            categories={[
              'Responsive',
              'Animations',
              'Auth-ready',
              'Tailwind'
            ]}
          />

          <Card
            label="Stack"
            title="Technology"
            description="Built with Next.js App Router, React, Tailwind CSS, and a sprinkle of GSAP for motion."
            categories={["Next.js", "React", "Tailwind", "GSAP"]}
          />

          <Card
            label="Start Here"
            title="Get Started"
            description="Explore the dashboard, sign in to sync your data, or return to the home page to learn more about Nova."
            categories={["Dashboard", "Sign In", "Home"]}
          />
        </section>

        {/* Web Projects Section */}
        <section className="mt-16">


          <h2 data-anim="section-title" className="text-3xl font-semibold tracking-tight">Web Projects</h2>
          <p data-anim="section-intro" className="mt-3 text-white/70 max-w-3xl">
            From fast marketing sites to data-rich dashboards, Nova accelerates delivery across a wide range of web projects.
            Here are some common project types we help teams ship quickly and beautifully.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-2">

            <Card
              label="Web Projects"
              title="Portfolio Websites"
              description="Beautiful, blazing-fast personal and brand sites tuned for accessibility, SEO, and performance."
              categories={["Next.js", "SEO", "Tailwind"]}
            />
            <Card
              label="Web Projects"
              title="E‑commerce Stores"
              description="Conversion-focused storefronts with secure checkout, product search, and analytics."
              categories={["Stripe", "Products", "Analytics"]}
            />
            <Card
              label="Web Projects"
              title="SaaS Dashboards"
              description="Data-rich admin panels and customer dashboards with charts and real-time updates."
              categories={["SaaS", "Charts", "Realtime"]}
            />
            <Card
              label="Web Projects"
              title="Marketing Landing Pages"
              description="A/B-tested pages with crisp motion, forms, and integrations that convert."
              categories={["Landing", "A/B", "GSAP"]}
            />
            <Card
              label="Web Projects"
              title="Blogs & CMS"
              description="Content platforms powered by headless CMSs like Sanity, Contentful, or MDX."
              categories={["Headless", "CMS", "MDX"]}
            />
            <Card
              label="Web Projects"
              title="Internal Tools"
              description="Custom internal apps to automate workflows, approvals, and reporting."
              categories={["Automation", "Internal", "APIs"]}
            />
          </div>
        </section>

        <div className="mt-12">
          <a href="/" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:text-white hover:bg-white/10 transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </main>
  )
}
