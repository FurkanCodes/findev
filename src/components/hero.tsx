import React from 'react'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

type Props = {}

function Hero({}: Props) {
  return (
    <div className="relative overflow-clip bg-[linear-gradient(to_bottom,#000000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-32">
      <div className="absolute left-1/2 h-[375px] w-[750px] -translate-x-1/2 -translate-y-1 rotate-45 rounded-[100%] border border-[#B48CDE] bg-black bg-[radial-gradient(closest-side,#000_82%,#9560EB)] blur-xl"></div>
      <div className="container relative">
        <div className="flex min-w-max items-center justify-center">
          <Link
            href={'/create-room'}
            className="inline-flex gap-4 rounded-lg border border-white/30 px-2 py-1"
          >
            <span className="bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2)] bg-clip-text text-transparent">
              Version 1 is Here
            </span>
            <span className="inline-flex items-center gap-1">
              <span>Read More</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </span>
          </Link>
        </div>

        <CardContainer className="inter-var">
          <CardBody className="group/card relative h-full w-full rounded-xl border border-black/[0.1] bg-gray-50 p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]">
            <CardItem
              translateZ="60"
              className="mt-2 max-w-full text-sm text-neutral-500 dark:text-neutral-300"
            >
              <div>
                <h1 className="text-4xl font-bold tracking-tighter">
                  Code together, code better.
                </h1>
              </div>
            </CardItem>
          </CardBody>
        </CardContainer>
        <p className="mt-4 text-center text-xl">
          A place where you can find developers to code with.
        </p>
        <div className="z-10 mt-8 flex justify-center">
          <Link
            className="group relative inline-block px-8 py-4 font-medium"
            href={'/api/auth/signin'}
          >
            <span className="absolute inset-0 h-full w-full translate-x-1 translate-y-1 transform bg-black transition duration-200 ease-out group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
            <span className="absolute inset-0 h-full w-full border-2 border-black bg-white group-hover:bg-black"></span>
            <span className="relative text-black group-hover:text-white">
              GET STARTED
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Hero
