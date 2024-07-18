import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
} from '@radix-ui/react-icons'
import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className="border-t border-white/20 bg-black py-5 text-white/60">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-center">2024 Findev</div>
          <ul className="flex justify-center gap-4">
            <li>
              <InstagramLogoIcon></InstagramLogoIcon>
            </li>
            <li>
              <TwitterLogoIcon></TwitterLogoIcon>
            </li>
            <li>
              <GitHubLogoIcon></GitHubLogoIcon>
            </li>
          </ul>
          {/* <div className="flex">
            <h4>Quick Links</h4>
            <ul className="flex flex-row">
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
