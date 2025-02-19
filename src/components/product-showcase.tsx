'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'

const ProductShowcase = () => {
  const appImage = useRef<HTMLImageElement>(null)
  const { scrollYProgress } = useScroll({
    target: appImage,
    offset: ['start end', 'end end'],
  })
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0])
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className="bg-gradient-to-b from-white to-purple-100 pb-[72px] text-purple-900 dark:from-black dark:to-[#5D2CA8] dark:text-white sm:py-24">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Intuitive interface
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-purple-700 dark:text-white/70 sm:text-2xl">
            Enjoy the intuitive interface and the powerful features of Findev.
          </p>
          {/* WIP: ADD IMAGE OF THE PRODUCT */}
          <motion.div
            initial={{
              opacity: 0.5,
              rotateX: 15,
              transformPerspective: '800px',
            }}
            style={{
              opacity: opacity,
              rotateX: rotateX,
              transformPerspective: '800px',
            }}
            className="mt-8 overflow-hidden rounded-lg shadow-lg"
          >
            <Image
              ref={appImage}
              src={'https://picsum.photos/id/237/600/400'}
              alt={'Product interface showcase'}
              width={600}
              height={400}
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase
