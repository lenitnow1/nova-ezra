'use client'

import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import gsap from 'gsap'
import Card from '@/components/Infocard'

export default function LearnMorePage() {
  const mainRef = useRef(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReduced = window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.from("[data-anim='title']", { y: 16, opacity: 0, duration: 0.7, ease: 'power2.out' })
      gsap.from("[data-anim='intro']", { y: 12, opacity: 0, duration: 0.7, ease: 'power2.out', delay: 0.08 })
      gsap.from("[data-anim='card']", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        ease: 'power2.out',
        stagger: 0.12,
        delay: 0.2,
      })
      gsap.from("[data-anim='section-title']", { y: 12, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.15 })
      gsap.from("[data-anim='section-intro']", { y: 12, opacity: 0, duration: 0.6, ease: 'power2.out', delay: 0.18 })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef} className="min-h-screen">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 btn-embossed text-sm py-2 px-4 mb-10"
        >
          ← Return to Library
        </Link>

        <p className="chapter-label" data-anim="title">
          The Archive
        </p>
        <h1
          data-anim="title"
          className="font-display text-4xl sm:text-5xl font-semibold tracking-tight text-ivory mt-2"
        >
          Learn More
        </h1>
        <p
          data-anim="intro"
          className="mt-5 text-sepia max-w-2xl font-body leading-relaxed"
        >
          Discover how SambiSono transforms documents into scholarly, interactive lessons — a modern
          knowledge archive with the warmth of a private library.
        </p>

        <section className="mt-14 grid gap-8 sm:grid-cols-2">
          <Card
            label="About"
            title="What is Nova?"
            description="Nova is your AI-powered reading room — blending classic book aesthetics with intelligent study tools for long, comfortable learning sessions."
            categories={['Library', 'AI', 'Study']}
          />

          <Card
            label="Highlights"
            title="Key Features"
            description="Upload PDFs, explore structured learning paths, and receive thoughtful feedback on your understanding."
            categories={['PDF', 'Lessons', 'Progress']}
          />

          <Card
            label="Stack"
            title="Technology"
            description="Built with Next.js, React, and Tailwind — with gentle motion via GSAP and Framer Motion where it serves the reader."
            categories={['Next.js', 'React', 'Tailwind']}
          />

          <Card
            label="Begin"
            title="Get Started"
            description="Enter the reading room, sign in to sync your session, or return home to explore the full collection."
            categories={['Dashboard', 'Sign In', 'Home']}
          />
        </section>

        <section className="mt-20">
          <p className="chapter-label" data-anim="section-title">
            Collections
          </p>
          <h2
            data-anim="section-title"
            className="font-display text-3xl font-semibold text-ivory mt-2 tracking-tight"
          >
            Project Types
          </h2>
          <p
            data-anim="section-intro"
            className="mt-4 text-sepia max-w-3xl font-body leading-relaxed"
          >
            From personal study archives to team knowledge bases — Nova supports a wide range of
            learning projects with elegance and clarity.
          </p>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            <Card
              label="Collections"
              title="Personal Study"
              description="Transform textbooks, papers, and notes into guided lessons tailored to your pace."
              categories={['PDF', 'Self-study']}
            />
            <Card
              label="Collections"
              title="Team Knowledge"
              description="Share structured learning paths across your organization like a shared reference library."
              categories={['Teams', 'Archive']}
            />
            <Card
              label="Collections"
              title="Course Material"
              description="Instructors can upload syllabi and readings for students to explore interactively."
              categories={['Education', 'Courses']}
            />
            <Card
              label="Collections"
              title="Research Notes"
              description="Compile research PDFs into explorable concept maps and comprehension checks."
              categories={['Research', 'Notes']}
            />
          </div>
        </section>
      </div>
    </main>
  )
}
