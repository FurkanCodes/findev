'use client'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
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
      className="cursor-pointer border-b border-purple-200 py-7 dark:border-white/[0.2]"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-base font-bold text-purple-900 dark:text-white">
          {question}
        </span>
        {isOpen ? (
          <MinusIcon className="h-5 w-5 text-purple-600 dark:text-white" />
        ) : (
          <PlusIcon className="h-5 w-5 text-purple-600 dark:text-white" />
        )}
      </div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
              marginTop: 0,
            }}
            animate={{
              marginTop: '16px',
              height: 'auto',
              opacity: 1,
            }}
            exit={{
              marginTop: 0,
              height: 0,
              opacity: 0,
            }}
            className="text-purple-700 dark:text-white/70"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Faq = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-white pb-20 text-purple-900 dark:from-[#5D2CA8] dark:to-black dark:text-white">
      <div className="container sm:py-24">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
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
