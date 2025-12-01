'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

export default function CarouselSection({ className = '' }) {
  const slides = [
    {
      src: '/igor-miske-JVSgcV8_vb4-unsplash.jpg',
      alt: 'Binary code with globe on a laptop screen',
    },
    {
      src: '/lee-campbell-DtDlVpy-vvQ-unsplash.jpg',
      alt: 'Abstract neon lights by Lee Campbell',
    },
    {
      src: '/view-neon-illuminated-gaming-desk-setup-with-keyboard.jpg',
      alt: 'Person coding HTML on a computer',
    },
    {
      src: '/man-using-vr-glasses.jpg',
      alt: 'Person coding HTML on a computer',
    },
    {
      src: '/ilya-pavlov-OqtafYT5kTw-unsplash.jpg',
      alt: 'Person coding HTML on a computer',
    },
  ]

  useEffect(() => {
    // Simple GSAP reveal for images when the section mounts
    gsap.fromTo(
      '.slide-img',
      { autoAlpha: 0, scale: 0.96, y: 12 },
      { autoAlpha: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.15 }
    )
  }, [])

  return (
    <div className={`mt-16 ${className}`}>
      <Carousel className="mx-auto max-w-5xl relative">
        <CarouselPrevious />
        <CarouselNext />
        <CarouselContent>
          {slides.map((s, i) => (
            <CarouselItem key={i}>
              <div className="h-[22rem] sm:h-[26rem] md:h-[28rem] overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md ring-1 ring-inset ring-white/5">
            <Image
      src={s.src}
      width={100%}
      height={100%}
      alt={s.alt}
    />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}
