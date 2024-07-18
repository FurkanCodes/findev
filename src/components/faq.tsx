'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import clsx from 'clsx'

type Props = {}
const items = [
  {
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu urna, gravida in aliquam et, vulputate at magna. Sed justo urna, consectetur at velit vitae, tristique bibendum erat. Nam interdum eu sem quis ultrices. Donec diam ex, finibus eu vestibulum in, congue vitae dui. Sed eget enim sollicitudin, pulvinar tortor at, sagittis lacus. Fusce semper nulla consectetur condimentum faucibus. Cras eu feugiat elit.',
  },
  {
    question: 'What is the difference between a DAO and a DAC?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce arcu urna, gravida in aliquam et, vulputate at magna. Sed justo urna, consectetur at velit vitae, tristique bibendum erat. Nam interdum eu sem quis ultrices. Donec diam ex, finibus eu vestibulum in, congue vitae dui. Sed eget enim sollicitudin, pulvinar tortor at, sagittis lacus. Fusce semper nulla consectetur condimentum faucibus. Cras eu feugiat elit.',
  },
]

const AccordionItem = ({
  question,
  answer,
}: {
  question: string
  answer: string
}) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className="cursor-pointer border-b border-white/[0.1] py-7 dark:border-white/[0.2]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-base font-bold">{question} </span>
        {isOpen ? (
          <MinusIcon className="h-5 w-5" />
        ) : (
          <PlusIcon className="h-5 w-5" />
        )}
      </div>
      {isOpen && (
        <p className={clsx('mt-4', { hidden: !isOpen, '': isOpen === true })}>
          {answer}
        </p>
      )}
    </div>
  )
}

const Faq = (props: Props) => {
  return (
    <div className="bg-black bg-gradient-to-b from-[#5D2CA8] to-black pb-20 text-white">
      <div className="container">
        <h2 className="max-w-[648px]sm:text-6xl text-center text-5xl font-bold tracking-tighter">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-12 max-w-[648px]">
          {items.map(
            (
              { question, answer }: { question: string; answer: string },
              index: number,
            ) => (
              <AccordionItem question={question} answer={answer} key={index} />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Faq
