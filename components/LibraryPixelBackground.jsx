'use client'

import PixelBlast from '@/components/PixelBlast'

/** Site-wide PixelBlast — warm library palette (gold, bronze, leather). */
export default function LibraryPixelBackground() {
  return (
    <div className="library-pixelblast pointer-events-none fixed inset-0 z-[1]" aria-hidden>
      <PixelBlast
        variant="circle"
        pixelSize={6}
        color="#C8A96B"
        patternScale={3}
        patternDensity={1.1}
        pixelSizeJitter={0.45}
        rippleSpeed={0.35}
        rippleThickness={0.1}
        rippleIntensityScale={1.25}
        liquid
        liquidStrength={0.1}
        liquidRadius={1.2}
        liquidWobbleSpeed={4.5}
        speed={0.55}
        edgeFade={0.3}
        transparent
      />
    </div>
  )
}
