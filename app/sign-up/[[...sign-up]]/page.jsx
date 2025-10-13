'use client'

import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 ring-1 ring-inset ring-white/5">
        <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" />
      </div>
    </div>
  )
}
