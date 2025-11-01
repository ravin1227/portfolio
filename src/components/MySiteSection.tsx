export default function MySiteSection() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-20">
      <h2 
        className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center mb-4 md:mb-4 max-w-xl mx-auto"
        style={{
          textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
        }}
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
          My Site
        </p>
        <span>
          Explore, experiment{' '}
          <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
            && say hello
          </span>
        </span>
      </h2>
      
      <div className="mt-20 grid grid-cols-1 gap-3 md:grid-cols-12 px-16 sm:px-24 lg:px-40">
        {/* Uses Card */}
        <a
          className="group relative flex flex-col justify-between rounded-xl col-span-12 h-[300px] md:col-span-12 md:row-span-6 lg:col-span-4"
          href="/uses"
        >
          <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl bg-zinc-900/50 border border-purple-500/30 hover:bg-purple-500/5 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
            <div className="absolute right-4 bottom-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 dark:bg-white/15">
              <svg className="h-6 w-6 text-neutral-700 dark:text-neutral-200" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 15.25V6.75H8.75"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7L6.75 17.25"></path>
              </svg>
            </div>
            <div className="size-full">
              <div className="group-hover:from-bg-white from-bg-primary absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r to-transparent"></div>
              <div className="group-hover:from-bg-white from-bg-primary absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l to-transparent"></div>
              <div className="mt-10 flex items-center justify-center gap-3 transition-all duration-500 ease-in-out md:mt-12">
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border-2 p-2 transition-all duration-500 border-[#ffffff1a] group-hover:border-indigo-400 size-[90px] md:size-[110px] delay-200 group-hover:-translate-y-3">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]" style={{boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset'}}>
                      <div className="h-10 w-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">R</div>
                    </div>
                  </div>
                </div>
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border-2 p-2 transition-all duration-500 border-[#ffffff1a] group-hover:border-indigo-400 size-[90px] md:size-[110px] delay-100 group-hover:-translate-y-3">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]" style={{boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset'}}>
                      <div className="h-10 w-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">A</div>
                    </div>
                  </div>
                </div>
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border-2 p-2 transition-all duration-500 border-[#ffffff1a] group-hover:border-indigo-400 size-[110px] md:size-[130px] delay-0 group-hover:-translate-y-3">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]" style={{boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset'}}>
                      <div className="h-10 w-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">V</div>
                    </div>
                  </div>
                </div>
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border-2 p-2 transition-all duration-500 border-[#ffffff1a] group-hover:border-indigo-400 size-[90px] md:size-[110px] delay-100 group-hover:-translate-y-3">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]" style={{boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset'}}>
                      <div className="h-10 w-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">S</div>
                    </div>
                  </div>
                </div>
                <div className="group inline-block text-center">
                  <div className="rounded-[20px] border-2 p-2 transition-all duration-500 border-[#ffffff1a] group-hover:border-indigo-400 size-[90px] md:size-[110px] delay-200 group-hover:-translate-y-3">
                    <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]" style={{boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset'}}>
                      <div className="h-10 w-10 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">C</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
              <h3 className="max-w-lg text-neutral-400">Uses</h3>
              <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Check out my favorite tools and spots around the web.</p>
            </div>
            <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
          </div>
        </a>

        {/* Guestbook Card */}
        <div className="relative w-full col-span-12 h-[300px] md:col-span-6 md:row-span-6 lg:col-span-4">
          <a className="group col-span-6 flex flex-col justify-between rounded-xl relative h-full w-full" href="/guestbook">
            <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)]">
              <div className="absolute right-4 bottom-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-black/15 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100 dark:bg-white/15">
                <svg className="h-6 w-6 text-neutral-700 dark:text-neutral-200" width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 15.25V6.75H8.75"></path>
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7L6.75 17.25"></path>
                </svg>
              </div>
              <div className="size-full">
                <div className="absolute bottom-0 h-full w-full bg-[radial-gradient(#333333_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] [background-size:16px_16px]"></div>
                {/* Guestbook Cards - Left card with purple to pink gradient */}
                <div className="absolute top-2 w-48 fill-[#666666] group-hover:rotate-[-12deg] transition-transform duration-300 ease-out origin-top" style={{transform: 'translateY(-5px) rotate(-8deg)'}}>
                  <div className="w-full h-32 bg-gradient-to-br from-purple-600 via-green-500 to-pink-500 rounded-lg border border-gray-600/30 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                    <div className="absolute top-3 left-3 space-y-2">
                      <div className="h-2 bg-gray-400/60 rounded w-16"></div>
                      <div className="h-2 bg-gray-400/60 rounded w-12"></div>
                      <div className="h-2 bg-gray-400/60 rounded w-20"></div>
                    </div>
                    <div className="absolute bottom-1 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
                {/* Right card with solid purple */}
                <div className="absolute top-10 -right-5 w-56 md:top-2 md:right-0 group-hover:rotate-[12deg] transition-transform duration-300 ease-out origin-top" style={{transform: 'translateY(5px) rotate(8deg)'}}>
                  <div className="w-full h-32 bg-purple-500 rounded-lg border border-gray-600/30 relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-[radial-gradient(#333333_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                    <div className="absolute top-3 left-3 space-y-2">
                      <div className="h-2 bg-gray-400/60 rounded w-16"></div>
                      <div className="h-2 bg-gray-400/60 rounded w-12"></div>
                      <div className="h-2 bg-gray-400/60 rounded w-20"></div>
                    </div>
                    <div className="absolute bottom-1 left-2 w-3 h-3 bg-gray-600 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="pointer-events-none z-10 flex flex-col gap-1 p-6">
                <h3 className="max-w-lg text-neutral-400">Guestbook</h3>
                <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Let me know you were here</p>
              </div>
              <div className="user-select-none pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-white/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"></div>
              <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
            </div>
          </a>
        </div>

        {/* Coming Soon Card */}
        <div className="group flex size-full flex-col justify-between rounded-xl [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.1)] relative overflow-hidden p-6 col-span-12 h-[300px] md:col-span-6 md:row-span-6 lg:col-span-4">
          <div className="size-full">
            <div className="flex h-full w-full flex-col items-center justify-center gap-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-disc3 lucide-disc-3 h-16 w-16 animate-spin text-zinc-800" aria-hidden="true">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M6 12c0-1.7.7-3.2 1.8-4.2"></path>
                <circle cx="12" cy="12" r="2"></circle>
                <path d="M18 12c0 1.7-.7 3.2-1.8 4.2"></path>
              </svg>
              <div className="h-6 w-48 animate-pulse rounded-full bg-zinc-900"></div>
              <div className="h-4 w-32 animate-pulse rounded-full bg-zinc-900"></div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>
      </div>
    </section>
  );
}
