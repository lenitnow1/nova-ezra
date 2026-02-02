'use client'

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center space-y-8">
      <div className="relative">
        <div className="size-24 rounded-full border-t-2 border-blue-500 animate-spin" />
        <div className="absolute inset-0 size-24 rounded-full border-b-2 border-purple-500 animate-spin-reverse" />
      </div>
      <div className="space-y-2 text-center">
        <h2 className="text-xl font-black tracking-tighter text-white uppercase italic">Initialising_Nova</h2>
        <div className="flex gap-1 justify-center">
          {[1, 2, 3].map(i => (
            <div key={i} className="size-1 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
        </div>
      </div>
      <style jsx>{`
        .animate-spin-reverse {
          animation: spin-reverse 1s linear infinite;
        }
        @keyframes spin-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
      `}</style>
    </div>
  )
}
