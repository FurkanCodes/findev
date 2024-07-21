'use client'
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

type Props = {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}

function Feature({ title, description, icon, index }: Props) {
  const offsetX = useMotionValue(-100)
  const offsetY = useMotionValue(-100)
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`
  const border = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      const rect = border.current?.getBoundingClientRect()
      if (!rect) return
      offsetX.set(event.clientX - rect?.x)
      offsetY.set(event.clientY - rect?.y)
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  })

  return (
    <div
      key={index}
      className="relative rounded-xl border border-white/30 px-5 py-10 text-center sm:flex-1"
    >
      <motion.div
        ref={border}
        className="absolute inset-0 rounded-xl border-2 border-purple-400"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
        }}
      ></motion.div>
      <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/30 bg-white p-2 text-black">
        {icon}
      </span>
      <h3 className="mt-6 text-lg font-bold">{title}</h3>
      <p className="mt-2 text-sm text-white/70">{description}</p>
    </div>
  )
}

export default Feature
