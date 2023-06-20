'use client'

import { signIn } from "next-auth/react"
import { useSearchParams } from 'next/navigation'

export default function SignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'

  return (
    <form className="container">
      <button onClick={(e) => {
        e.preventDefault();
        signIn("google", { callbackUrl })
      }}>Sign In</button>
    </form>

  )

}