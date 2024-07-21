'use client'
import { signIn } from 'next-auth/react'
import { SetStateAction, useState } from 'react'
import { useRouter } from 'next/navigation'

import { GitHubLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    })
    if (result?.ok) {
      router.push('/dashboard') // Redirect to dashboard or home page
    } else {
      // Handle errors
      console.error(result?.error)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-purple-50 to-white px-4 py-12 dark:from-black dark:to-[#1a1a1a] sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-purple-900 dark:text-white">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Input
                disabled
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-t-md"
                placeholder="Email address"
                value={email}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setEmail(e.target.value)
                }
              />
            </div>
            <div>
              <Input
                disabled
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-b-md"
                placeholder="Password"
                value={password}
                onChange={(e: { target: { value: SetStateAction<string> } }) =>
                  setPassword(e.target.value)
                }
              />
            </div>
          </div>

          <div>
            <Button
              disabled
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            >
              Sign in (Use google for now)
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-purple-300 dark:border-gray-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-purple-50 px-2 text-purple-700 dark:bg-gray-900 dark:text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <Button
                disabled
                onClick={() => signIn('github')}
                className="inline-flex w-full justify-center rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <GitHubLogoIcon className="h-5 w-5" />
                <span className="sr-only">Sign in with GitHub</span>
              </Button>
            </div>
            <div>
              <Button
                disabled
                onClick={() => signIn('twitter')}
                className="inline-flex w-full justify-center rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <TwitterLogoIcon className="h-5 w-5" />
                <span className="sr-only">Sign in with Twitter</span>
              </Button>
            </div>
            <div>
              <Button
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="inline-flex w-full justify-center rounded-md border border-purple-300 bg-white px-4 py-2 text-sm font-medium text-purple-700 shadow-sm hover:bg-purple-50 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                  />
                </svg>
                <span className="sr-only">Sign in with Google</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
