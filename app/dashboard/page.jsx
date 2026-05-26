import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import CoreLearningSystem from '@/components/CoreLearningSystem'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    return (
      <main className="min-h-[70vh] grid place-items-center px-6">
        <div className="book-panel max-w-lg w-full text-center p-10 space-y-5 emboss-border">
          <p className="chapter-label">Restricted Wing</p>
          <h1 className="font-display text-2xl font-semibold text-ivory">
            Sign in to enter the reading room
          </h1>
          <p className="text-sepia font-body text-sm leading-relaxed">
            Your personal library awaits. Please authenticate to continue your studies.
          </p>
          <div className="flex items-center justify-center gap-3 pt-2">
            <Link href="/sign-in" className="btn-leather text-sm">
              Sign In
            </Link>
            <Link href="/" className="btn-embossed text-sm">
              Return Home
            </Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen px-6 py-10 md:py-14">
      <div className="max-w-7xl mx-auto space-y-10">
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 pb-8 border-b border-gold/10">
          <div>
            <p className="chapter-label mb-2">Reading Room</p>
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-ivory">
              Learning Dashboard
            </h1>
            <p className="mt-2 text-sepia font-body max-w-lg leading-relaxed">
              Your interactive study desk — upload volumes, follow chapters, and learn at your own pace.
            </p>
          </div>
          <div className="text-xs font-mono text-sepia/70 bg-walnut/80 border border-gold/15 px-4 py-2 rounded-md emboss-border self-start">
            Session · {userId.slice(0, 8)}…
          </div>
        </header>

        <CoreLearningSystem />
      </div>
    </main>
  )
}
