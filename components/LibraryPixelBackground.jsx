'use client'

import PixelBlast from '@/components/PixelBlast'

/** Site-wide PixelBlast — warm library palette (gold, bronze, leather). */
export default function LibraryPixelBackground() {
  return (
    <div className="library-pixelblast pointer-events-none fixed inset-0 z-[1]" aria-hidden>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#C8A56B"
        patternScale={4.75}
        patternDensity={1.05}
        pixelSizeJitter={0}
        enableRipples
        rippleSpeed={0.4}
        rippleThickness={0.12}
        rippleIntensityScale={1.5}
        liquid={false}
        liquidStrength={0.12}
        liquidRadius={1.2}
        liquidWobbleSpeed={5}
        speed={0.35}
        edgeFade={0.21}
        transparent
      />
    </div>
  )
}
