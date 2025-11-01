'use client';

import Image from 'next/image';

export default function UsesPage() {
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

      <main className="px-4 py-16 pt-36 md:px-1">
        <h2 
          style={{ textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)' }}
          className="relative z-2 mb-12 md:mb-16 lg:mb-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-balance text-center max-w-xl mx-auto px-4 sm:px-6"
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            My Tools
          </p>
          <span className="">
            <span className="md:text-6xl">The </span>
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">Setup</span>
          </span>
        </h2>

        {/* MacBook Image Section */}
        <div className="relative mx-auto mb-16 flex flex-col items-center justify-center">
          <div className="relative">
            <img 
              src="/assets/backgrounds/mac-m4-air.avif" 
              alt="MacBook Air M4 Sky Blue" 
              className="h-auto w-full max-w-5xl rounded-2xl"
            />
          </div>
          <p className="mt-4 text-lg font-medium text-white/90">MacBook Air M4 midnight Black</p>
        </div>

        {/* Software & Tools Title */}
        <div className="mx-auto max-w-5xl mb-8">
          <h3 className="text-2xl font-bold text-white">Software & Tools</h3>
        </div>

        <div className="relative mx-auto grid max-w-5xl grid-cols-3 place-items-center gap-y-8 md:grid-cols-4 lg:grid-cols-7 lg:gap-6">
          {/* Raycast */}
          <a 
            href="https://raycast.com/?via=braydon" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Raycast - Productivity launcher"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Raycast" src="/assets/logos/raycast_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Raycast</p>
              </div>
            </div>
          </a>

          {/* Arc */}
          <a 
            href="https://arc.net/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Arc - Web browser"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Arc" src="/assets/logos/arc_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Arc</p>
              </div>
            </div>
          </a>

          {/* VSCode */}  
          <a 
            href="https://code.visualstudio.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="VSCode - Code editor"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="VSCode" src="/assets/logos/vscode_logo.png" />
                </div>  
                <p className="mt-6 text-sm text-gray-500">VSCode</p>
              </div>
            </div>
          </a>

          {/* Obsidian */}
          <a 
            href="https://obsidian.md/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Obsidian - Note-taking app"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Obsidian" src="/assets/logos/obsidian_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Obsidian</p>
              </div>
            </div>
          </a>

          {/* Notion */}
          <a 
            href="https://www.notion.so/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Notion - Workspace tool"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Notion" src="/assets/logos/notion_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Notion</p>
              </div>
            </div>
          </a>

          {/* mymind */}
          <a 
            href="https://mymind.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="mymind - Knowledge management"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="mymind" src="/assets/logos/mymind_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">mymind</p>
              </div>
            </div>
          </a>

          {/* Tana */}
          <a 
            href="https://try.tana.inc/66bqr1sp5wkb" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Tana - Note-taking platform"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Tana" src="/assets/logos/tana_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Tana</p>
              </div>
            </div>
          </a>

          {/* Gap between first and second row */}
          <div className="col-span-3 md:col-span-4 lg:col-span-7 h-1"></div>

          {/* Spotify */}
          <a 
            href="https://www.spotify.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Spotify - Music streaming"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Spotify" src="/assets/logos/spotify_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Spotify</p>
              </div>
            </div>
          </a>

          {/* Figma */}
          <a 
            href="https://www.figma.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Figma - Design tool"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Figma" src="/assets/logos/figma_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Figma</p>
              </div>
            </div>
          </a>

          {/* Things 3 */}
          <a 
            href="https://culturedcode.com/things/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Things 3 - Task management"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Things 3" src="/assets/logos/things3_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Things 3</p>
              </div>
            </div>
          </a>

          {/* Fantastical */}
          <a 
            href="https://flexibits.com/fantastical" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Fantastical - Calendar app"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Fantastical" src="/assets/logos/fantastical_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Fantastical</p>
              </div>
            </div>
          </a>

          {/* 1Password */}
          <a 
            href="https://1password.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="1Password - Password manager"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="1Password" src="/assets/logos/1password_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">1Password</p>
              </div>
            </div>
          </a>

          {/* Framer */}
          <a 
            href="https://www.framer.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Framer - Design tool"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Framer" src="/assets/logos/framer_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Framer</p>
              </div>
            </div>
          </a>

          {/* Cleanshot X */}
          <a 
            href="https://getcleanshot.com/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
            title="Cleanshot X - Screenshot tool"
          >
            <div className="group inline-block text-center">
              <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                <div 
                  className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                  style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                >
                  <img className="h-10 w-10" alt="Cleanshot X" src="/assets/logos/cleanshotx_logo.png" />
                </div>
                <p className="mt-6 text-sm text-gray-500">Cleanshot X</p>
              </div>
            </div>
          </a>

          {/* Gap between second and third row */}
          <div className="col-span-3 md:col-span-4 lg:col-span-7 h-1"></div>

          {/* Centered container for last 2 items */}
          <div className="col-span-3 md:col-span-4 lg:col-span-7 flex justify-center gap-6">
            {/* PixelSnap 2 */}
            <a 
              href="https://getpixelsnap.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              title="PixelSnap 2 - Design measurement"
            >
              <div className="group inline-block text-center">
                <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                  <div 
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                    style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                  >
                  <img className="h-10 w-10" alt="PixelSnap 2" src="/assets/logos/pixelsnap2_logo.png" />
                  </div>
                  <p className="mt-6 text-sm text-gray-500">PixelSnap 2</p>
                </div>
              </div>
            </a>

            {/* Linear */}
            <a 
              href="https://linear.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group no-underline transition-all duration-500 group-hover:-translate-y-3"
              title="Linear - Project management"
            >
              <div className="group inline-block text-center">
                <div className="h-28 w-28 rounded-[20px] border-2 p-2 transition-all duration-300 md:group-hover:-translate-y-3 md:group-hover:border-indigo-400">
                  <div 
                    className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] dark:border-[#5A5F661F]/10 dark:bg-[#1A1B1E]"
                    style={{ boxShadow: '0px 2px 1.5px 0px #A5AEB852 inset' }}
                  >
                    <img className="h-10 w-10" alt="Linear" src="/assets/logos/linear_logo.png" />
                  </div>
                  <p className="mt-6 text-sm text-gray-500">Linear</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}