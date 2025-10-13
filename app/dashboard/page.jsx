import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const { userId } = await auth()

  if (!userId) {
    // If unauthenticated, show a simple call to action
    return (
      <main className="min-h-[70vh] grid place-items-center px-6">
        <div className="max-w-lg w-full text-center space-y-4">
          <h1 className="text-2xl font-semibold text-white">You must be signed in to view the dashboard</h1>
          <p className="text-white/70">Please sign in to continue.</p>
          <div className="flex items-center justify-center gap-3">
            <Link href="/sign-in" className="inline-flex items-center rounded-md border border-white/10 bg-white/10 px-4 py-2 text-sm text-white/90 hover:bg-white/20">Sign In</Link>
            <Link href="/" className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10">Go Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-[70vh] grid place-items-center px-6">
      <div className="max-w-xl w-full text-center space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
        <p className="text-white/70">Welcome! Your userId is:</p>
        <code className="block mx-auto max-w-full break-all rounded-md bg-white/10 px-3 py-2 text-white/90">{userId}</code>
        <p className="text-white/60">Use this page as a starting point for protected features.</p>
      </div>
    </main>
  )
}
