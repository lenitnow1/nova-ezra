'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

export default function CarouselSection({ className = '' }) {
  const slides = [
    {
      src: '/igor-miske-JVSgcV8_vb4-unsplash.jpg',
      alt: 'Scholarly workspace with warm lighting',
    },
    {
      src: '/lee-campbell-DtDlVpy-vvQ-unsplash.jpg',
      alt: 'Atmospheric library interior',
    },
    {
      src: '/view-neon-illuminated-gaming-desk-setup-with-keyboard.jpg',
      alt: 'Reading desk with books and notes',
    },
    {
      src: '/man-using-vr-glasses.jpg',
      alt: 'Immersive study environment',
    },
    {
      src: '/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
      alt: 'Classic study setting',
    },
  ]

  useEffect(() => {
    gsap.fromTo(
      '.slide-img',
      { autoAlpha: 0, y: 8 },
      { autoAlpha: 1, y: 0, duration: 0.9, ease: 'power2.out', stagger: 0.12 }
    )
  }, [])

  return (
    <div className={`mt-16 w-full flex flex-col items-center ${className}`}>
      <p className="chapter-label mb-4 w-full max-w-5xl text-center">Illustrated Plates</p>
      <Carousel className="relative w-full max-w-5xl mx-auto px-12">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="slide-img relative h-[20rem] sm:h-[24rem] md:h-[26rem] overflow-hidden rounded-lg page-panel emboss-border mx-auto w-full">
                <Image src={s.src} fill sizes="(max-width: 768px) 100vw, 80vw" alt={s.alt} className="object-cover sepia-[0.15]" />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/50 via-transparent to-transparent pointer-events-none" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
