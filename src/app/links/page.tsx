'use client';

import Image from 'next/image';

export default function LinksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image Section */}
      <div className="absolute inset-0  h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80"
        style={{ maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)', opacity: 1 }}>
        <Image
          alt="crumpled paper texture"
          fill
          className="pointer-events-none absolute inset-0  h-[450px] w-full object-cover mix-blend-overlay select-none"
          src="/crumpled-paper.avif"
          priority
        />
      </div>

      <main className="relative mx-auto w-full overflow-hidden">
        <section className="mx-auto w-full max-w-7xl overflow-x-hidden">
          <div className="relative mx-auto min-h-screen max-w-lg overflow-x-hidden px-4">
            {/* Profile Section */}
            <div className="relative mx-auto flex flex-col items-center justify-center gap-4 overflow-hidden pt-24 pb-6">
              <img 
                src="https://lh3.googleusercontent.com/a/ACg8ocIvRQZl9V7AbR05EQA0fSc9jHFidf9j5xV6W-rRR1-SGw3C3cy4=s317-c-no"
                width="90" 
                height="90" 
                alt="Ravindra Verma's Profile Picture" 
                className="rounded-full" 
              />
              <h1 className="text-xl font-semibold">Ravindra Verma</h1>
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
                <span className="rounded-full px-2 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-500">Developer</span>
                <span className="rounded-full px-2 py-1 bg-green-500/10 text-green-600 dark:text-green-500">Freelancer</span>
                <span className="rounded-full px-2 py-1 bg-violet-500/10 text-violet-600 dark:text-violet-500">Problem Solver</span>
              </div>
            </div>

            {/* Primary Links */}
            <div className="mx-auto mb-4 flex w-fit gap-x-2 md:text-sm">
              <a 
                href="/" 
                referrerPolicy="no-referrer" 
                target="_blank"
                className="group relative flex w-fit items-center justify-between rounded-full bg-black text-white opacity-90 hover:bg-black/80 dark:bg-neutral-200 dark:text-black dark:hover:bg-neutral-300"
              >
                <span className="pl-4 text-base font-light">Website</span>
                <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                  <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-5" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
              
              <a 
                href="mailto:hello@ravindraverma.in" 
                referrerPolicy="no-referrer" 
                target="_blank"
                className="group relative flex w-fit items-center justify-between rounded-full bg-black/20 text-black opacity-90 hover:bg-black/30 dark:bg-white/20 dark:text-white dark:hover:bg-white/30"
              >
                <span className="pl-4 text-base font-light">hello@ravindraverma.in</span>
                <div className="relative mr-1 size-9 overflow-hidden rounded-full bg-transparent">
                  <div className="absolute top-[0.85em] left-[-0.1em] grid size-full place-content-center transition-all duration-200 group-hover:translate-x-4 group-hover:-translate-y-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right size-5" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up-right mb-1 size-5 -translate-x-4" aria-hidden="true">
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>

            {/* Social Media Links */}
            <div className="flex flex-col gap-4 py-3">
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com/in/ravindraverma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-neutral-300">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">LinkedIn</div>
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/ravindra_notes" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 192 192" fill="none" strokeWidth="7" className="text-black dark:text-neutral-300">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M23.073 88.132s65.458-26.782 88.16-36.212c8.702-3.772 38.215-15.843 38.215-15.843s13.621-5.28 12.486 7.544c-.379 5.281-3.406 23.764-6.433 43.756-4.54 28.291-9.459 59.221-9.459 59.221s-.756 8.676-7.188 10.185c-6.433 1.509-17.027-5.281-18.919-6.79-1.513-1.132-28.377-18.106-38.214-26.404-2.649-2.263-5.676-6.79.378-12.071 13.621-12.447 29.891-27.913 39.728-37.72 4.54-4.527 9.081-15.089-9.837-2.264-26.864 18.483-53.35 35.835-53.35 35.835s-6.053 3.772-17.404.377c-11.351-3.395-24.594-7.921-24.594-7.921s-9.08-5.659 6.433-11.693Z"></path>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">Telegram</div>
              </a>

              {/* GitHub */}
              <a 
                href="https://github.com/ravindraverma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-neutral-300">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">GitHub</div>
              </a>

              {/* Guestbook */}
              <a 
                href="/guestbook" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-heart size-5 stroke-1 text-black dark:text-neutral-300" aria-hidden="true">
                    <path d="M16 8.2A2.22 2.22 0 0 0 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9A2.22 2.22 0 0 0 8 8.2c0 .6.3 1.2.7 1.6A226.652 226.652 0 0 0 12 13a404 404 0 0 0 3.3-3.1 2.413 2.413 0 0 0 .7-1.7"></path>
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">Guestbook</div>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/ravindraverma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-neutral-300">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">X (Twitter)</div>
              </a>

              {/* BlueSky */}
              <a 
                href="https://bsky.app/profile/ravindraverma.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border-white-3 bg-white-2 relative flex h-14 w-full items-center justify-center rounded-xl border px-8 py-4 transition-colors duration-300 dark:border-neutral-700 dark:bg-[#151414]"
              >
                <div className="absolute left-8">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-black dark:text-neutral-300">
                    <path d="M4.90172 3.06907C6.96538 4.62164 9.18496 7.76969 10 9.45892C10.815 7.76969 13.0346 4.62164 15.0983 3.06907C16.5873 1.94881 19 1.08201 19 3.84022C19 4.39105 18.6848 8.46765 18.5 9.12954C17.8575 11.4304 15.5162 12.0173 13.4335 11.6621C17.0739 12.283 18 14.3396 16 16.3962C12.2016 20.3021 10.5407 15.4162 10.1151 14.1643C10.037 13.9348 10.0005 13.8274 10 13.9187C9.99946 13.8274 9.96295 13.9348 9.88493 14.1643C9.45934 15.4162 7.79839 20.3021 4 16.3962C2 14.3396 2.92606 12.283 6.56647 11.6621C4.48379 12.0173 2.14254 11.4304 1.5 9.12954C1.31517 8.46765 1 4.39105 1 3.84022C1 1.08201 3.41271 1.94881 4.90172 3.06907Z" stroke="currentColor" strokeWidth="0.8" strokeLinejoin="round"></path>
                  </svg>
                </div>
                <div className="text-neutral-800 dark:text-neutral-200">BlueSky</div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}