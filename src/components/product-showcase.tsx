import React from 'react'
import Image from 'next/image'
type Props = {}

const ProductShowcase = (props: Props) => {
  return (
    <div className="bg-black bg-gradient-to-b from-black to-[#5D2CA8] pb-[72px] text-white">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter">
          Intuitive interface
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70 sm:text-2xl">
            Enjoy the intuitive interface and the powerful features of Findev.
          </p>
          {/* WIP: ADD IMAGE OF THE PRODUCT */}
          <Image
            src={'https://picsum.photos/id/237/600/400'}
            alt={'asd'}
            width={600}
            height={400}
            className="mt-8"
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase
