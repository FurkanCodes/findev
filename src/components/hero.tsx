'use client'
import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

type Props = { session: any | null }

function Hero({ session }: Props) {
  const router = useRouter()
  const isLoggedIn = session?.user ? true : false
  console.log(session)
  if (isLoggedIn) router.push('/dashboard')
  return (
    <div className="relative overflow-clip bg-gradient-to-b from-purple-50 via-purple-100 to-purple-200 py-32 dark:bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)]">
      <div className="absolute left-1/2 h-[375px] w-[750px] -translate-x-1/2 -translate-y-1 rotate-45 rounded-[100%] border border-purple-300 bg-purple-100 bg-[radial-gradient(closest-side,#f3e8ff_82%,#d8b4fe)] blur-xl dark:border-[#B48CDE] dark:bg-black dark:bg-[radial-gradient(closest-side,#000_82%,#9560EB)]"></div>
      <div className="container relative">
        <div className="flex min-w-max items-center justify-center">
          <Link
            href={'/create-room'}
            className="inline-flex gap-4 rounded-lg border border-purple-300 px-2 py-1 dark:border-white/30"
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent dark:bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)]">
              Version 1 is Here
            </span>
            <span className="inline-flex items-center gap-1 text-purple-800 dark:text-white">
              <span>Read More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>
        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-full w-full rounded-xl border border-purple-300 bg-white p-6 hover:shadow-2xl hover:shadow-purple-500/[0.1] dark:border-white/[0.2] dark:bg-black dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="60"
              className="mt-2 max-w-full text-sm text-purple-700 dark:text-neutral-300"
            >
              <div>
                <h1 className="text-4xl font-bold tracking-tighter text-purple-900 dark:text-white">
                  Code together, code better.
                </h1>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <p className="mt-4 text-center text-xl text-purple-800 dark:text-white">
          A place where you can find developers to code with.
        </p>
        <div className="z-10 mt-8 flex justify-center">
          <Link
            className="group relative inline-block px-8 py-4 font-medium"
            href={'/api/auth/signin'}
          >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-purple-800 transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0 dark:bg-black"></span>
            <span className="absolute inset-0 h-full w-full border-2 border-purple-800 bg-white group-hover:bg-purple-800 dark:border-black dark:group-hover:bg-black"></span>
            <span className="relative text-purple-800 group-hover:text-white dark:text-black dark:group-hover:text-white">
              GET STARTED
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
