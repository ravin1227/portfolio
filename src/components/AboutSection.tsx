'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const tilesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (tilesRef.current) {
      const updateOpacity = () => {
        const rect = tilesRef.current!.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Calculate distance from cursor to image center
        const distanceX = Math.abs(mousePosition.x - centerX);
        const distanceY = Math.abs(mousePosition.y - centerY);
        const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        
        // Reveal image when cursor is close to the image
        const maxDistance = 150;
        const fullRevealDistance = 50;
        
        let finalOpacity = 0;
        if (distance <= maxDistance) {
          if (distance <= fullRevealDistance) {
            finalOpacity = 1; // Full reveal when very close
          } else {
            finalOpacity = 1 - (distance - fullRevealDistance) / (maxDistance - fullRevealDistance);
          }
        }
        
        // Update CSS custom properties for image reveal
        tilesRef.current!.style.setProperty('--opacity', finalOpacity.toString());
        tilesRef.current!.style.setProperty('--blur', (1 - finalOpacity).toString());
        tilesRef.current!.style.setProperty('--logo-opacity', (1 - finalOpacity).toString());
      };

      updateOpacity();
    }
  }, [mousePosition]);

  return (
    <section id="about" className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="relative pb-10">
        <section className="relative mx-auto flex w-full flex-col items-center justify-center gap-8 lg:flex-row lg:justify-between">
          {/* Left Side - Content */}
          <div className="max-w-[60%]">
            <h2 
              style={{
                textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
              }}
              className="relative z-2 mb-20 font-medium tracking-tight md:mb-36 md:text-6xl text-center lg:text-left !mb-8 text-3xl sm:text-4xl text-balance md:mt-28"
            >
              <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
                KNOW ABOUT ME
              </p>
              <span className="">
                <span className="">Full-Stack Developer and a little bit of</span>{' '}
                <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">everything</span>
              </span>
            </h2>
            
            <div className="relative z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
              <p>
                I'm Ravindra Verma, a proactive full-stack developer passionate about creating
                dynamic web experiences. From frontend to backend, I thrive on solving complex problems
                with clean, efficient code. My expertise spans React, Next.js, and Node.js, and I'm
                always eager to learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious.
                Life's about balance, and I love embracing every part of it.
              </p>
              <p>
                I believe in waking up each day eager to make a difference!
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3 mx-auto -mt-4 w-fit lg:mx-0">
                <button data-state="closed" data-slot="tooltip-trigger">
                  <a 
                    href="https://linkedin.com/in/ravindraverma"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect width="4" height="12" x="2" y="9"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </button>
                
                <button data-state="closed" data-slot="tooltip-trigger">
                  <a 
                    href="https://github.com/ravindraverma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                      <path d="M9 18c-4.51 2-5-2-7-2"></path>
                    </svg>
                  </a>
                </button>
                
                <button data-state="closed" data-slot="tooltip-trigger">
                  <a 
                    href="https://x.com/ravindraverma" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="stroke-1">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                </button>
              </div>
            </div>
            
            {/* Work Experience Link */}
            <Link
              className="group flex w-fit items-center justify-center gap-2 text-neutral-800 transition-colors hover:text-black dark:text-white dark:hover:text-white mt-10 lg:justify-start"
              href="/about#experience"
            >
              Work Experience
              <div className="size-[25px] overflow-hidden rounded-full border border-neutral-300 bg-white-1/50 transition-all duration-500 group-hover:bg-neutral-200 dark:border-white/10 dark:bg-white/5 dark:group-hover:bg-white/10">
                <div className="flex w-12 -translate-x-1/2 transition-transform duration-500 ease-in-out group-hover:translate-x-0">
                  <span className="flex size-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right m-auto size-[14px]" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                  <span className="flex size-6">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right m-auto size-[14px]" aria-hidden="true">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Right Side - Image with Magic Effect */}
          <div 
            ref={tilesRef}
            className="tile relative grid aspect-square w-52 place-content-center lg:me-10 lg:mt-20 lg:w-[500px]"
          >
            {/* RV Logo */}
            <Image 
              alt="RV Logo" 
              src="/assets/logos/ChatGPT Image Nov 1, 2025, 02_49_17 PM-Photoroom.png"
              fill
              className="abLogo rotate-3 lg:opacity-100"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent'
              }}
            />
            
            {/* Profile Image */}
            <Image 
              alt="Ravindra Verma blue pic"
              src="/assets/profile/ravi.jpeg"
              fill
              className="abImg absolute inset-0 rotate-3 rounded-[58px] object-cover opacity-[var(--opacity)] blur-[calc(var(--blur)*10px)]"
              style={{
                position: 'absolute',
                height: '100%',
                width: '100%',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                color: 'transparent',
                backgroundSize: 'cover',
                backgroundPosition: '50% 50%',
                backgroundRepeat: 'no-repeat'
              }}
            />
          </div>
        </section>
      </div>

      
      
    </section>
  );
}
