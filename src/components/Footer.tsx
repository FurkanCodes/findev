import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="border-t border-purple-200 bg-white py-5 text-purple-600 dark:border-white/20 dark:bg-black dark:text-white/60">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center">2024 Findev</div>
          <ul className="flex justify-center gap-4">
            <li>
              <InstagramLogoIcon className="text-purple-600 transition-colors hover:text-purple-800 dark:text-white/60 dark:hover:text-white/80" />
            </li>
            <li>
              <TwitterLogoIcon className="text-purple-600 transition-colors hover:text-purple-800 dark:text-white/60 dark:hover:text-white/80" />
            </li>
            <li>
              <GitHubLogoIcon className="text-purple-600 transition-colors hover:text-purple-800 dark:text-white/60 dark:hover:text-white/80" />
            </li>
          </ul>
          {/* <div className="flex">
            <h4>Quick Links</h4>
            <ul className="flex flex-row">
              <li>
                <a href="/about" className="text-purple-600 dark:text-white/60 hover:text-purple-800 dark:hover:text-white/80 transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="text-purple-600 dark:text-white/60 hover:text-purple-800 dark:hover:text-white/80 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="/privacy" className="text-purple-600 dark:text-white/60 hover:text-purple-800 dark:hover:text-white/80 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="text-purple-600 dark:text-white/60 hover:text-purple-800 dark:hover:text-white/80 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
