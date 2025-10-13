'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const CarouselContext = createContext(null)

export function Carousel({
  className = '',
  options = { loop: true, align: 'start' },
  autoplay = true,
  autoplayDelay = 4000,
  children,
}) {
  const plugins = []
  if (autoplay) {
    plugins.push(
      Autoplay({ delay: autoplayDelay, stopOnInteraction: false, stopOnMouseEnter: true })
    )
  }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)

  const onSelect = useCallback((api) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
    return () => {
      emblaApi.off('select', onSelect)
      emblaApi.off('reInit', onSelect)
    }
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  return (
    <CarouselContext.Provider value={{ emblaApi, scrollPrev, scrollNext, canScrollPrev, canScrollNext }}>
      <div className={`relative ${className}`}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-4 flex" role="list">
            {children}
          </div>
        </div>
      </div>
    </CarouselContext.Provider>
  )
}

export function CarouselContent({ className = '', children }) {
  return <>{children}</>
}

export function CarouselItem({ className = '', children }) {
  return (
    <div role="listitem" className={`min-w-0 shrink-0 grow-0 basis-full pl-4 ${className}`}>
      {children}
    </div>
  )
}

export function CarouselPrevious({ className = '' }) {
  const { scrollPrev, canScrollPrev } = useContext(CarouselContext) || {}
  return (
    <button
      type="button"
      aria-label="Previous slide"
      onClick={scrollPrev}
      disabled={!canScrollPrev}
      className={`absolute left-2 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur border border-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path fillRule="evenodd" d="M15.53 4.47a.75.75 0 0 1 0 1.06L9.06 12l6.47 6.47a.75.75 0 1 1-1.06 1.06l-7-7a.75.75 0 0 1 0-1.06l7-7a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
      </svg>
    </button>
  )
}

export function CarouselNext({ className = '' }) {
  const { scrollNext, canScrollNext } = useContext(CarouselContext) || {}
  return (
    <button
      type="button"
      aria-label="Next slide"
      onClick={scrollNext}
      disabled={!canScrollNext}
      className={`absolute right-2 top-1/2 -translate-y-1/2 inline-flex size-9 items-center justify-center rounded-full bg-white/10 text-white/80 hover:bg-white/20 backdrop-blur border border-white/10 transition disabled:opacity-40 disabled:cursor-not-allowed ${className}`}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path fillRule="evenodd" d="M8.47 19.53a.75.75 0 0 1 0-1.06L14.94 12 8.47 5.53a.75.75 0 1 1 1.06-1.06l7 7a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
      </svg>
    </button>
  )
}
