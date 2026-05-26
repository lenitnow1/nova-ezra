'use client'

import Link from 'next/link'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12">
      <Link href="/" className="btn-embossed text-sm mb-8">
        ← Return to Library
      </Link>
      <div className="page-panel p-6 md:p-8 emboss-border max-w-md w-full">
        <p className="chapter-label text-center mb-4">Join the Archive</p>
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </div>
    </div>
  )
}
