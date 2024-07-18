import {
  Camera,
  CodeIcon,
  HeartHandshake,
  Share2,
  SquareTerminal,
} from 'lucide-react'
import React from 'react'

const features = [
  {
    icon: <CodeIcon className="h-8 w-8" />,
    title: 'Code together',
    description: 'Code together, code better.',
  },
  {
    icon: <HeartHandshake className="h-8 w-8" />,
    title: 'Collaborate',
    description: 'Collaborate with your teammates.',
  },
  {
    icon: <Share2 className="h-8 w-8" />,
    title: 'Share',
    description: 'Share your code with the world.',
  },
  {
    icon: <SquareTerminal className="h-8 w-8" />,
    title: 'Live Coding',
    description: 'Collobrate in real time with built-in terminal.',
  },
  {
    icon: <Camera className="h-8 w-8" />,
    title: 'Video Conferencing',
    description: 'Do video calls, screen share, and more.',
  },
]

function Features() {
  return (
    <div className="bg-black py-[72px] text-white">
      <div className="container">
        <h2 className="text-center text-5xl font-bold tracking-tighter sm:text-6xl">
          Everthing you need
        </h2>
        <div className="mx-auto max-w-xl">
          <p className="mt-5 text-center text-xl text-white/70 sm:text-2xl">
            Findev is a place where you can find developers to code with.
          </p>
        </div>
        <div className="mt-16 flex flex-col gap-4 sm:flex-row">
          {features.map(
            (
              {
                title,
                description,
                icon,
              }: { title: string; description: string; icon: React.ReactNode },
              index: number,
            ) => (
              <div
                key={index}
                className="rounded-xl border border-white/30 px-5 py-10 text-center sm:flex-1"
              >
                <span className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-lg border border-white/30 bg-white p-2 text-black">
                  {icon}
                </span>
                <h3 className="mt-6 text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-white/70">{description}</p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Features
