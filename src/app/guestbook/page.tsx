'use client';

import Image from 'next/image';

export default function GuestbookPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image Section */}
      <div className="absolute inset-0 h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80"
        style={{ maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)', opacity: 1 }}>
        <Image
          alt="crumpled paper texture"
          fill
          className="pointer-events-none absolute inset-0 h-[450px] w-full object-cover mix-blend-overlay select-none"
          src="/crumpled-paper.avif"
          priority
        />
      </div>

      <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-36">
        <h2 
          style={{ textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)' }}
          className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-8 max-w-xl mx-auto text-balance"
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            The Guestbook
          </p>
          <span className="">
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">Got a message? </span>
            <span className="">I'd love to hear from you!</span>
          </span>
        </h2>
        {/* <p className="mt-2 text-center text-lg leading-7 text-balance text-black/65 md:text-xl dark:text-white/65">
          Sign my guestbook and share your idea. You can tell me anything here!
        </p> */}
        
        <div className="mx-auto mt-10 mb-28 max-w-xl">
          <div className="flex w-full flex-col">
            {/* Guestbook Entries */}
            <ul className="flex flex-col gap-y-5 pt-7">
              <div className="flex flex-col gap-y-6">
                {/* Alpha Dev */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-blue-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AD</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Alpha Dev</div>
                      <div className="text-sm text-white/60">Sep 10, 2025 (3 d ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">This is Literally the best portfolio site i've ever seen, no jokes. 👍</div>
                </div>
                
                {/* SAmmyuxh */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-purple-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">SAmmyuxh</div>
                      <div className="text-sm text-white/60">Sep 3, 2025 (11 d ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Excellent portfolio Man..Hats off</div>
                </div>
                
                {/* Daniel Coronel */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-gray-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DC</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Daniel Coronel</div>
                      <div className="text-sm text-white/60">Aug 28, 2025 (16 d ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Best personal website. It's awesome, I'm inspired now.</div>
                </div>
                
                {/* Salah */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-gray-600 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Salah</div>
                      <div className="text-sm text-white/60">Aug 24, 2025 (20 d ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Awesome! I'm inspired now.</div>
                </div>
                
                {/* Preeti Priyanka */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-orange-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">PP</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Preeti Priyanka</div>
                      <div className="text-sm text-white/60">Aug 19, 2025 (25 d ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">OSM</div>
                </div>
                
                {/* Rishabh Mishra */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-indigo-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">RM</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Rishabh Mishra</div>
                      <div className="text-sm text-white/60">Jul 17, 2025 (about 2 mo ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Its awesome</div>
                </div>
                
                {/* Abraham Opuba */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-green-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">AO</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Abraham Opuba</div>
                      <div className="text-sm text-white/60">Jul 15, 2025 (2 mo ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Best personal website I've ever seen in my life!</div>
                </div>
                
                {/* Dhruv Panchal */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-red-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">DP</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Dhruv Panchal</div>
                      <div className="text-sm text-white/60">Jul 2, 2025 (2 mo ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">Loved your website. perfect blending example of interface and experience!</div>
                </div>
                
                {/* Stacey */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-emerald-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">S</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Stacey</div>
                      <div className="text-sm text-white/60">Jun 23, 2025 (3 mo ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">this is very beautiful. I love it</div>
                </div>
                
                {/* Charvi Vatsh */}
                <div className="border-white-3 bg-white-2 rounded-lg border p-4 shadow-xs dark:border-white/10 dark:bg-zinc-900/30">
                  <div className="flex w-full items-center gap-x-4">
                    <div className="size-10 rounded-3xl bg-pink-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">CV</span>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <div className="font-semibold text-white">Charvi Vatsh</div>
                      <div className="text-sm text-white/60">Jun 21, 2025 (3 mo ago)</div>
                    </div>
                  </div>
                  <div className="mt-2 text-white">AMAZING!!! beautifully designed. very unique. thoughtfully put together.</div>
                </div>
              </div>
              <div className="h-4"></div>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}