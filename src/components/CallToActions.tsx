import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Terminal from '../../public/terminal.png'

type Props = {}

function CallToActions({}: Props) {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white pb-[72px] text-center text-purple-900 dark:from-black dark:to-[#1a1a1a] dark:text-white sm:py-14">
      <div className="container relative max-w-xl">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Get started today!
        </h2>
        <p className="mt-5 text-base text-purple-700 dark:text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu
        </p>
        <form className="mx-auto mt-10 flex max-w-sm flex-1 flex-col gap-2.5 px-5 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="h-12 rounded-lg border-purple-200 bg-white text-purple-900 placeholder-purple-400 dark:border-white/20 dark:bg-white/20 dark:text-white dark:placeholder-white/50"
          />
          <Button
            type="submit"
            className="h-12 rounded-lg bg-purple-600 text-white hover:bg-purple-700 dark:bg-white dark:text-black dark:hover:bg-purple-100"
          >
            Get access
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CallToActions
