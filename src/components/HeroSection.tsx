"use client";

import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showWand, setShowWand] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleEmailCopy = () => {
    navigator.clipboard.writeText('hello@ravindraverma.in');
  };

  return (
    <main className="relative flex flex-col items-center justify-center w-full">
      <section id="hero-section" className="relative w-full min-h-screen overflow-hidden flex flex-col">
        {/* Background blur effect */}
        <div
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 z-0 h-[500px] w-full max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-purple-300/75 blur-[150px] dark:bg-[#0b0218]"
        />

        {/* Main content */}
        <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-36 pb-12 flex flex-col items-center justify-center flex-1">
          {/* Announcement Banner */}
          <a 
            className="group flex cursor-pointer items-center rounded-full border border-black/5 bg-neutral-200 text-sm backdrop-blur-xs transition-transform duration-300 ease-in lg:text-base dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 animate-fadeInDown"
            href="/projects/next-venture"
          >
            <span className="mx-1 rounded-full bg-blue-700 px-1.5 text-xs leading-relaxed text-white">New</span>
            <span 
              className="relative text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] px-1 py-0.5" 
              style={{
                maskImage: 'linear-gradient(-75deg,var(--primary) calc(var(--x) + 20%),transparent calc(var(--x) + 30%),var(--primary) calc(var(--x) + 100%))',
                textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)',
                '--x': '100%'
              } as React.CSSProperties}
            >
              Next Ventures is live!
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none"
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="lucide lucide-chevron-right mr-1 size-4 text-black dark:text-neutral-100/70 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 hover:duration-300"
              aria-hidden="true"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </a>

          {/* Main Heading */}
          <h2 className="animate-fadeInUp w-full max-w-5xl mx-auto my-4 md:my-6 py-px text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-semibold text-balance text-zinc-700 opacity-90 dark:text-zinc-100">
            <span className="block sm:inline font-instrument-serif font-normal" style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}>I help founders turn ideas</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline font-instrument-serif font-normal" style={{ fontFamily: 'var(--font-instrument-serif), serif', fontWeight: 400 }}>into seamless&nbsp;</span>
            <span className="font-nyght bg-linear-to-b from-zinc-500 via-zinc-600 to-zinc-900 bg-clip-text font-light tracking-wide text-transparent dark:from-zinc-700 dark:via-zinc-200 dark:to-zinc-50">
              digital experiences
            </span>
          </h2>

          {/* Introduction with Profile Image */}
          <h1 className="animate-fadeInUp grad-white relative z-20 w-full max-w-4xl mx-auto mt-6 mb-8 md:mt-8 md:mb-10 flex flex-col sm:flex-row items-center justify-center text-center text-lg sm:text-xl md:text-2xl gap-2 sm:gap-0">
            <span className="grad-white flex items-center justify-center">
              Hello, I'm Ravindra
              <div 
                className="group relative z-300 mx-2 md:mx-3"
                onMouseEnter={() => setShowWand(true)}
                onMouseLeave={() => setShowWand(false)}
              >
                <div className="w-16 cursor-pointer overflow-hidden rounded-3xl md:w-20 lg:mx-3">
                  <Image
                    alt="Ravindra Verma Image" 
                    width={854}
                    height={425}
                    className="transition-transform duration-300 group-hover:rotate-6 hover:scale-110"
                    src="/assets/profile/aayush-wide-img.webp"
                  />
                </div>
                
                {/* Magic Wand */}
                {showWand && (
                  <div
                    className="pointer-events-none absolute bottom-0 left-0 z-50 flex items-center justify-center rounded-full border border-white/[0.25] backdrop-blur-sm"
                    style={{
                      transform: 'translate(0, 12px)'
                    }}
                  >
                    <svg 
                      className="w-8 h-8 text-white animate-pulse" 
                      viewBox="0 0 36 36" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m4.861 9.147c.94-.657 2.357-.531 3.201.166l-.968-1.407c-.779-1.111-.5-2.313.612-3.093 1.112-.777 4.263 1.312 4.263 1.312-.786-1.122-.639-2.544.483-3.331 1.122-.784 2.67-.513 3.456.611l10.42 14.72-1.328 12.875-11.083-4.042-9.667-14.333c-.793-1.129-.519-2.686.611-3.478z"
                        fill="#ef9645"
                      />
                      <path
                        d="m2.695 17.336s-1.132-1.65.519-2.781c1.649-1.131 2.78.518 2.78.518l5.251 7.658c.181-.302.379-.6.6-.894l-7.288-10.627s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l6.855 9.997c.255-.208.516-.417.785-.622l-7.947-11.591s-1.131-1.649.519-2.78c1.649-1.131 2.78.518 2.78.518l7.947 11.589c.292-.179.581-.334.871-.498l-7.428-10.832s-1.131-1.649.518-2.78 2.78.518 2.78.518l7.854 11.454 1.194 1.742c-4.948 3.394-5.419 9.779-2.592 13.902.565.825 1.39.26 1.39.26-3.393-4.949-2.357-10.51 2.592-13.903l-1.459-7.302s-.545-1.924 1.378-2.47c1.924-.545 2.47 1.379 2.47 1.379l1.685 5.004c.668 1.984 1.379 3.961 2.32 5.831 2.657 5.28 1.07 11.842-3.94 15.279-5.465 3.747-12.936 2.354-16.684-3.11z"
                        fill="#ffdc5d"
                      />
                      <g fill="#5dadec">
                        <path d="m12 32.042c-4 0-8.042-4.042-8.042-8.042 0-.553-.405-1-.958-1s-1.042.447-1.042 1c0 6 4.042 10.042 10.042 10.042.553 0 1-.489 1-1.042s-.447-.958-1-.958z" />
                        <path d="m7 34c-3 0-5-2-5-5 0-.553-.447-1-1-1s-1 .447-1 1c0 4 3 7 7 7 .553 0 1-.447 1-1s-.447-1-1-1zm17-32c-.552 0-1 .448-1 1s.448 1 1 1c4 0 8 3.589 8 8 0 .552.448 1 1 1s1-.448 1-1c0-5.514-4-10-10-10z" />
                        <path d="m29 .042c-.552 0-1 .406-1 .958s.448 1.042 1 1.042c3 0 4.958 2.225 4.958 4.958 0 .552.489 1 1.042 1s.958-.448.958-1c0-3.837-2.958-6.958-6.958-6.958z" />
                      </g>
                    </svg>
                  </div>
                )}
              </div>
            </span>
            <span className="grad-white leading-relaxed">a Full Stack Developer</span>
          </h1>

          {/* CTA Buttons */}
          <div className="animate-fadeInUp z-100 w-full max-w-2xl mx-auto mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 px-4">
            <button className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10">
              <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black">
                Let's Connect
              </span>
              <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white"></span>
              <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24"
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                  aria-hidden="true"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </span>
            </button>
            
            <button 
              type="button"
              onClick={handleEmailCopy}
              className="flex items-center gap-2 py-3 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24"
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round"
                strokeLinejoin="round" 
                className="lucide lucide-copy" 
                aria-hidden="true"
              >
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg>
              ravindraverma37@gmail.com
            </button>
          </div>
        </div>

        {/* Floating stars and shooting stars background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
          {/* Static stars - More dots */}
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '5%', 
              top: '15%',
              width: '1px',
              height: '1px',
              opacity: 0.8,
              animationDelay: '0s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '15%', 
              top: '25%',
              width: '0.5px',
              height: '0.5px',
              opacity: 0.6,
              animationDelay: '1s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '25%', 
              top: '35%',
              width: '0.8px',
              height: '0.8px',
              opacity: 0.7,
              animationDelay: '2s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '35%', 
              top: '45%',
              width: '0.6px',
              height: '0.6px',
              opacity: 0.5,
              animationDelay: '3s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '45%', 
              top: '55%',
              width: '0.9px',
              height: '0.9px',
              opacity: 0.8,
              animationDelay: '1.5s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '55%', 
              top: '65%',
              width: '0.7px',
              height: '0.7px',
              opacity: 0.6,
              animationDelay: '2.5s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '65%', 
              top: '75%',
              width: '0.4px',
              height: '0.4px',
              opacity: 0.7,
              animationDelay: '0.5s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '75%', 
              top: '85%',
              width: '0.8px',
              height: '0.8px',
              opacity: 0.5,
              animationDelay: '2.8s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '85%', 
              top: '95%',
              width: '0.7px',
              height: '0.7px',
              opacity: 0.6,
              animationDelay: '1.7s'
            }}
          ></span>

          {/* Additional random stars */}
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '12%', 
              top: '8%',
              width: '0.6px',
              height: '0.6px',
              opacity: 0.7,
              animationDelay: '0.8s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '28%', 
              top: '18%',
              width: '0.9px',
              height: '0.9px',
              opacity: 0.5,
              animationDelay: '1.2s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '42%', 
              top: '28%',
              width: '0.5px',
              height: '0.5px',
              opacity: 0.8,
              animationDelay: '2.2s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '58%', 
              top: '38%',
              width: '0.7px',
              height: '0.7px',
              opacity: 0.6,
              animationDelay: '3.2s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '72%', 
              top: '48%',
              width: '0.8px',
              height: '0.8px',
              opacity: 0.7,
              animationDelay: '0.3s'
            }}
          ></span>
          
          <span 
            className="absolute bg-white rounded-full animate-twinkle"
            style={{ 
              left: '88%', 
              top: '58%',
              width: '0.4px',
              height: '0.4px',
              opacity: 0.9,
              animationDelay: '1.8s'
            }}
          ></span>


          {/* Vertical shooting stars - top to bottom with tilted angles */}
          <div 
            className="absolute animate-vertical-shooting-star-slow-30deg"
            style={{ 
              left: '5%', 
              top: '0%',
              width: '1.5px',
              height: '1.5px',
              animationDelay: '0.5s',
              animationDuration: '8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-45deg"
            style={{ 
              left: '15%', 
              top: '0%',
              width: '1.2px',
              height: '1.2px',
              animationDelay: '1.8s',
              animationDuration: '9s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-60deg"
            style={{ 
              left: '25%', 
              top: '0%',
              width: '1.8px',
              height: '1.8px',
              animationDelay: '2.3s',
              animationDuration: '7s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random1"
            style={{ 
              left: '35%', 
              top: '0%',
              width: '1px',
              height: '1px',
              animationDelay: '3.2s',
              animationDuration: '8.5s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random2"
            style={{ 
              left: '45%', 
              top: '0%',
              width: '1.3px',
              height: '1.3px',
              animationDelay: '0.9s',
              animationDuration: '10s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random3"
            style={{ 
              left: '55%', 
              top: '0%',
              width: '0.8px',
              height: '0.8px',
              animationDelay: '2.7s',
              animationDuration: '9.5s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random4"
            style={{ 
              left: '65%', 
              top: '0%',
              width: '1.6px',
              height: '1.6px',
              animationDelay: '1.4s',
              animationDuration: '6.5s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random5"
            style={{ 
              left: '75%', 
              top: '0%',
              width: '1.1px',
              height: '1.1px',
              animationDelay: '3.8s',
              animationDuration: '8.8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-30deg"
            style={{ 
              left: '85%', 
              top: '0%',
              width: '1.4px',
              height: '1.4px',
              animationDelay: '0.2s',
              animationDuration: '9.2s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-45deg"
            style={{ 
              left: '95%', 
              top: '0%',
              width: '0.9px',
              height: '0.9px',
              animationDelay: '2.1s',
              animationDuration: '10.5s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-60deg"
            style={{ 
              left: '8%', 
              top: '0%',
              width: '1.7px',
              height: '1.7px',
              animationDelay: '1.6s',
              animationDuration: '7.5s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random1"
            style={{ 
              left: '18%', 
              top: '0%',
              width: '1.2px',
              height: '1.2px',
              animationDelay: '3.5s',
              animationDuration: '8.2s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random2"
            style={{ 
              left: '28%', 
              top: '0%',
              width: '0.7px',
              height: '0.7px',
              animationDelay: '0.8s',
              animationDuration: '9.8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random3"
            style={{ 
              left: '38%', 
              top: '0%',
              width: '1.5px',
              height: '1.5px',
              animationDelay: '2.4s',
              animationDuration: '9.2s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random4"
            style={{ 
              left: '48%', 
              top: '0%',
              width: '1.0px',
              height: '1.0px',
              animationDelay: '1.1s',
              animationDuration: '6.8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random5"
            style={{ 
              left: '58%', 
              top: '0%',
              width: '1.3px',
              height: '1.3px',
              animationDelay: '3.9s',
              animationDuration: '8.7s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-30deg"
            style={{ 
              left: '68%', 
              top: '0%',
              width: '0.6px',
              height: '0.6px',
              animationDelay: '0.3s',
              animationDuration: '10.2s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-45deg"
            style={{ 
              left: '78%', 
              top: '0%',
              width: '1.8px',
              height: '1.8px',
              animationDelay: '2.8s',
              animationDuration: '6.2s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-60deg"
            style={{ 
              left: '88%', 
              top: '0%',
              width: '1.1px',
              height: '1.1px',
              animationDelay: '1.7s',
              animationDuration: '7.8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
          
          <div 
            className="absolute animate-vertical-shooting-star-slow-random1"
            style={{ 
              left: '98%', 
              top: '0%',
              width: '0.9px',
              height: '0.9px',
              animationDelay: '3.6s',
              animationDuration: '10.8s'
            }}
          >
            <div className="w-full h-full bg-white rounded-full shadow-lg shadow-white/50"></div>
          </div>
        </div>

        {/* Bottom gradient effects */}
        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 z-[19] mt-auto">
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0 h-[600px] w-full max-w-[2200px] transform overflow-hidden"
            style={{
              maskImage: 'linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 5%, black 15%, black 85%, transparent 95%)'
            }}
          >
            {/* Purple radial gradient blur */}
            <div className="absolute bottom-[250px] left-1/2 h-[150px] w-[1000px] -translate-x-1/2 transform overflow-hidden bg-[radial-gradient(50%_50%_at_50%_50%,#5506ba_0%,rgba(10,10,10,0)_100%)] blur-[70px] dark:bg-[radial-gradient(50%_50%_at_50%_50%,#8b5cf6_0%,rgba(255,255,255,0)_100%)]"></div>

            {/* Large circular gradient element */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1005px] w-[2400px] h-[1200px] rounded-[100%] bg-gradient-to-b from-black to-transparent dark:from-white dark:to-transparent"></div>

            {/* Main curved element with shadow */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-[-1015px] w-[2500px] h-[1200px] rounded-[100%] bg-white-1 shadow-[inset_0_2px_20px_#fff,0_-10px_50px_1px_#ffffff7d] dark:!bg-black dark:!shadow-[inset_0_2px_20px_#000,0_-10px_50px_1px_#0000007d] transition-colors duration-300"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
