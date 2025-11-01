'use client';

import Link from 'next/link';
import ABLogo from './ABLogo';

export default function Footer() {
  return (
    <footer className="w-full mx-auto my-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="bg-neutral-900 relative mx-auto flex flex-col items-center gap-6 rounded-3xl px-6 sm:px-8 md:px-10 py-10 shadow-sm backdrop-blur-lg md:flex-row dark:bg-neutral-900 border border-white/10">
        <div className="flex flex-1 flex-col items-start gap-4 md:flex-row md:gap-10 md:px-8">
          {/* Left Section - Logo and Description */}
          <div className="hidden flex-col gap-y-6 md:flex md:w-1/2">
            <Link href="/" className="inline-block">
              <ABLogo size={40} />
            </Link>
            <p className="w-60 text-sm leading-5 dark:text-gray-300">
              I'm Ravindra - a passionate full-stack developer crafting digital experiences. Whether it's building scalable applications or solving complex problems, I love turning ideas into reality. Thanks for visiting!
            </p>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="flex flex-col items-start justify-between gap-6 md:mx-4 md:w-1/2 md:flex-row md:gap-16">
            {/* General Column */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="text-base text-neutral-700 dark:text-white">General</h4>
              <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-sm md:flex-col md:gap-y-3 dark:text-neutral-300">
                <li>
                  <Link
                    href="/"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/work"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Specifics Column */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="text-base text-neutral-700 dark:text-white">Specifics</h4>
              <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-sm md:flex-col md:gap-y-3 dark:text-neutral-300">
                <li>
                  <Link
                    href="https://calendly.com/ravindraverma373"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Book a Call
                  </Link>
                </li>
                <li>
                  <Link
                    href="/bucket-list"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Bucket List
                  </Link>
                </li>
                <li>
                  <Link
                    href="/uses"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Uses
                  </Link>
                </li>
                <li className="pointer-events-none opacity-50">
                  <Link
                    href="https://ravindrave.in/attribution"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Attribution
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Column */}
            <div className="flex flex-col gap-2 md:gap-4">
              <h4 className="text-base text-neutral-700 dark:text-white">More</h4>
              <ul className="flex flex-wrap items-start gap-x-4 gap-y-2 text-sm md:flex-col md:gap-y-3 dark:text-neutral-300">
                <li>
                  <Link
                    href="/contact"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Book a call
                  </Link>
                </li>
                <li>
                  <Link
                    href="/links"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    Links
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rss"
                    className="after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100"
                  >
                    RSS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-4 flex flex-col items-center justify-between gap-4 text-sm text-neutral-600 md:flex-row md:px-8 dark:text-neutral-400">
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p className="whitespace-nowrap">
            © 2025{' '}
            <Link
              href="/"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Ravi Veer
            </Link>
            . All rights reserved
          </p>
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            <Link
              href="/privacy"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="whitespace-nowrap transition-colors hover:text-black dark:hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-end">
          {/* Calendar Widget Placeholder */}
          <div className="h-10 w-[124px] rounded-full bg-neutral-200 dark:bg-neutral-800"></div>
          
          {/* Social Media Icons */}
          <div className="flex gap-3">
            <Link
              href="https://www.linkedin.com/in/ravindraverma12/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-1"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </Link>

            <Link
              href="https://github.com/ravin1227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
            >
              <span className="sr-only">GitHub</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-1"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                <path d="M9 18c-4.51 2-5-2-7-2"></path>
              </svg>
            </Link>

            <Link
              href="https://x.com/80_ravindra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
            >
              <span className="sr-only">Twitter</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-1"
              >
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z"></path>
              </svg>
            </Link>

            <Link
              href="https://t.me/Ucant_see_me1210"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
            >
              <span className="sr-only">Telegram</span>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-1"
              >
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}