'use client'

import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 ring-1 ring-inset ring-white/5">
        <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" />
      </div>
    </div>
  )
}
