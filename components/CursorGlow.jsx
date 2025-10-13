"use client"

import React, { useEffect, useRef } from "react"
import gsap from 'gsap'

// Global blue glow that follows the cursor; now crisper and with a click “firework”
// - CSS variables control position; three layers: core (sharp), main, soft
// - On click, a particle burst + shockwave ring is spawned at the cursor
// - Respects prefers-reduced-motion
// - pointer-events: none so it never blocks interactions
export default function CursorGlow() {
  const ref = useRef(null)

  // Track pointer position for the glow
  useEffect(() => {
    if (typeof window === "undefined") return

    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      // Keep a subtle, centered glow for users who prefer reduced motion
      el.style.setProperty('--x', '50%')
      el.style.setProperty('--y', '50%')
      return
    }

    let rafId = 0
    let lastX = 0
    let lastY = 0

    const update = () => {
      el.style.setProperty('--x', `${lastX}px`)
      el.style.setProperty('--y', `${lastY}px`)
      rafId = 0
    }

    const onMove = (e) => {
      lastX = e.clientX
      lastY = e.clientY
      if (!rafId) {
        rafId = window.requestAnimationFrame(update)
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })

    return () => {
      window.removeEventListener('pointermove', onMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  // Firework burst on click
  useEffect(() => {
    if (typeof window === 'undefined') return
    const el = ref.current
    if (!el) return

    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const spawnPulse = (x, y) => {
      const ring = document.createElement('span')
      ring.className = 'fw-ring'
      ring.style.left = `${x}px`
      ring.style.top = `${y}px`
      ring.style.borderColor = 'rgba(59, 130, 246, 0.9)'
      ring.style.boxShadow = '0 0 12px rgba(59,130,246,0.6)'
      el.appendChild(ring)
      gsap.fromTo(ring, { scale: 0.2, opacity: 0.7 }, { scale: 1.6, opacity: 0, duration: 0.5, ease: 'power2.out', onComplete: () => ring.remove() })
    }

    const spawnFirework = (x, y) => {
      const colors = ['#60a5fa', '#22d3ee', '#a78bfa', '#93c5fd', '#ffffff']
      const count = 24

      for (let i = 0; i < count; i++) {
        const p = document.createElement('span')
        p.className = 'fw-p'
        p.style.left = `${x}px`
        p.style.top = `${y}px`
        const color = colors[Math.floor(Math.random() * colors.length)]
        p.style.background = color
        p.style.boxShadow = `0 0 8px ${color}, 0 0 16px ${color}`
        const size = 3 + Math.random() * 4
        p.style.width = `${size}px`
        p.style.height = `${size}px`
        el.appendChild(p)

        const angle = (i / count) * Math.PI * 2 + (Math.random() * 0.6 - 0.3)
        const distance = 120 + Math.random() * 160
        const duration = 0.7 + Math.random() * 0.5

        gsap.fromTo(p, { x: 0, y: 0, opacity: 1, scale: 1 }, {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
          opacity: 0,
          scale: 0.1,
          duration,
          ease: 'power2.out',
          onComplete: () => p.remove()
        })
      }

      // Central flash
      const flash = document.createElement('span')
      flash.className = 'fw-flash'
      flash.style.left = `${x}px`
      flash.style.top = `${y}px`
      el.appendChild(flash)
      gsap.fromTo(flash, { opacity: 0.9, scale: 0.6 }, { opacity: 0, scale: 1.8, duration: 0.25, ease: 'power1.out', onComplete: () => flash.remove() })

      // Shockwave ring
      const ring = document.createElement('span')
      ring.className = 'fw-ring'
      ring.style.left = `${x}px`
      ring.style.top = `${y}px`
      ring.style.borderColor = 'rgba(99, 102, 241, 0.9)'
      ring.style.boxShadow = '0 0 16px rgba(99,102,241,0.8), 0 0 32px rgba(34,211,238,0.5)'
      el.appendChild(ring)
      gsap.fromTo(ring, { scale: 0.2, opacity: 0.8 }, { scale: 2.6, opacity: 0, duration: 0.9, ease: 'power2.out', onComplete: () => ring.remove() })
    }

    const onDown = (e) => {
      const x = e.clientX
      const y = e.clientY
      if (prefersReduced) {
        spawnPulse(x, y)
      } else {
        spawnFirework(x, y)
      }
    }

    window.addEventListener('pointerdown', onDown, { passive: true })
    return () => window.removeEventListener('pointerdown', onDown)
  }, [])

  return (
    <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-[60] mix-blend-screen">
      {/* Sharp inner core */}
      <div className="cursor-glow-core absolute inset-0" />
      {/* Main crisp glow */}
      <div className="cursor-glow absolute inset-0" />
      {/* Softer outer aura */}
      <div className="cursor-glow-soft absolute inset-0" />
      <style jsx>{`
        .cursor-glow-core {
          /* Crisp core near the cursor for sharper highlight */
          background: radial-gradient(64px 64px at var(--x, 50%) var(--y, 50%), rgba(255,255,255,0.9), rgba(59,130,246,0.65) 50%, transparent 80%);
          filter: blur(2px);
          opacity: 0.95;
        }
        .cursor-glow {
          /* Position controlled by CSS vars --x / --y */
          background: radial-gradient(180px 180px at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.35), rgba(59, 130, 246, 0.18) 55%, transparent 75%);
          filter: blur(6px) saturate(1.15);
        }
        .cursor-glow-soft {
          background: radial-gradient(300px 300px at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.12), rgba(59, 130, 246, 0.06) 60%, transparent 80%);
          filter: blur(18px) saturate(1.1);
          opacity: 0.6;
        }
        .fw-p, .fw-ring, .fw-flash {
          position: absolute;
          pointer-events: none;
          transform: translate(-50%, -50%);
          will-change: transform, opacity;
          mix-blend-mode: screen;
        }
        .fw-ring {
          width: 14px;
          height: 14px;
          border: 2px solid rgba(59, 130, 246, 0.8);
          border-radius: 9999px;
        }
        .fw-flash {
          width: 16px;
          height: 16px;
          border-radius: 9999px;
          background: radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(99,102,241,0.8) 60%, transparent 70%);
          filter: blur(2px);
        }
        @media (prefers-reduced-motion: reduce) {
          .cursor-glow-core,
          .cursor-glow,
          .cursor-glow-soft {
            /* Static centered glow for reduced motion */
            background-position: 50% 50% !important;
          }
        }
      `}</style>
    </div>
  )
}
