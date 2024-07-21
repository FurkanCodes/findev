import {
  Camera,
  CodeIcon,
  HeartHandshake,
  Share2,
  SquareTerminal,
} from 'lucide-react'
import React from 'react'
import Feature from './Feature'

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
              <Feature
                title={title}
                description={description}
                icon={icon}
                index={index}
              />
            ),
          )}
        </div>
      </div>
    </div>
  )
}

export default Features
