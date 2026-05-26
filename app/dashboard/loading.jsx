'use client'

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-8 animate-fade-in">
      <div className="spinner-refined" />
      <div className="space-y-2 text-center">
        <h2 className="font-display text-xl font-medium tracking-wide text-ivory">
          Opening the Reading Room
        </h2>
        <p className="text-sm text-sepia font-body">Please wait a moment…</p>
      </div>
    </div>
  )
}
