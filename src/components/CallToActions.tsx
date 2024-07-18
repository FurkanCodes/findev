import React from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'
import Image from 'next/image'
import Terminal from '../../public/terminal.png'

type Props = {}

function CallToActions({}: Props) {
  return (
    <div className="bg-black pb-[72px] text-center text-white sm:py-14">
      <div className="container relative max-w-xl">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Get started today!
        </h2>
        <p className="mt-5 text-base text-white/70">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu
        </p>
        <form className="mx-auto mt-10 flex max-w-sm flex-1 flex-col gap-2.5 px-5 sm:flex-row">
          <Input
            type="email"
            placeholder="Enter your email"
            className="roundeed-lg h-12 bg-white/20 px-5 font-medium"
          />
          <Button type="submit" className="h-12 rounded-lg bg-white text-black">
            Get access
          </Button>
        </form>
      </div>
    </div>
  )
}

export default CallToActions
