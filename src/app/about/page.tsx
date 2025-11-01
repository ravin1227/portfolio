'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import MySiteSection from '@/components/MySiteSection';
import GitHubActivity from '@/components/GitHubActivity';

const AboutPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isExperienceVisible, setIsExperienceVisible] = useState(false);
  const experienceRef = useRef<HTMLDivElement>(null);
  
  const images = [
    { src: '/assets/images/aayush-blue.jpg', alt: 'Coding image', title: 'I Code' },
    { src: '/assets/images/travel.jpg', alt: 'Travel image', title: 'I Travel' },
    { src: '/assets/images/gym.webp', alt: 'GYM image', title: 'I Lift' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (experienceRef.current) {
        const rect = experienceRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = experienceRef.current.offsetHeight;
        
        // Check if experience section is visible
        const isVisible = rect.top < windowHeight && rect.bottom > 0;
        setIsExperienceVisible(isVisible);
        
        if (isVisible) {
          // Calculate progress based on how much of the element is visible
          const scrollTop = window.scrollY;
          const elementTop = experienceRef.current.offsetTop;
          
          // Calculate progress from 0 to 1, but start from center (0.5)
          const rawProgress = Math.max(0, Math.min(1, (scrollTop - elementTop + windowHeight) / elementHeight));
          // Map progress so it grows from center outward
          const progress = Math.max(0, Math.min(1, (rawProgress - 0.5) * 2));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative">
        {/* Background Texture */}
        <div 
          className="absolute inset-0 h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80"
          style={{
            maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)',
            opacity: 1
          }}
        >
          <Image
            alt="crumpled paper texture"
            src="/assets/images/crumpled-paper.avif"
            fill
            className="pointer-events-none absolute inset-0 h-[450px] w-full object-cover mix-blend-overlay select-none"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-28 pb-12 md:pt-36 md:pb-20">
          <h2 
            className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center mb-8 md:mb-0 lg:text-left max-w-lg"
            style={{
              textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
            }}
          >
            <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
              More About Me
            </p>
            <span>
              I'm Ravindra, a creative{' '}
              <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
                engineer
              </span>
            </span>
          </h2>

          <div className="flex flex-col items-center justify-between lg:flex-row lg:items-start">
            {/* Text Content */}
            <div className="relative mt-10 z-5 mx-auto flex max-w-xl flex-col gap-y-8 text-center text-base font-light tracking-wider text-black/80 lg:mx-0 lg:max-w-[550px] lg:text-left lg:text-lg dark:text-neutral-300">
              <p>
                I'm Ravindra Verma, a proactive full-stack developer passionate about creating dynamic web
                experiences. From frontend to backend, I thrive on solving complex problems with clean,
                efficient code. My expertise spans React, Next.js, and Node.js, and I'm always eager to
                learn more.
              </p>
              <p>
                When I'm not immersed in work, I'm exploring new ideas and staying curious. Life's
                about balance, and I love embracing every part of it.
              </p>
              <p>I believe in waking up each day eager to make a difference!</p>
              
              {/* Social Links */}
              <div className="flex gap-3 mx-auto -mt-4 w-fit lg:mx-0">
                <a 
                  href="https://linkedin.com/in/ravindraverma" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" className="stroke-1">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a 
                  href="https://github.com/ravindraverma" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                >
                  <span className="sr-only">GitHub</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" className="stroke-1">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                </a>
                <a 
                  href="https://x.com/ravindraverma" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-900 dark:text-neutral-300 transition-colors hover:text-neutral-700 dark:hover:text-neutral-100"
                >
                  <span className="sr-only">Twitter</span>
                  <svg stroke="currentColor" fill="none" strokeWidth="1.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="20" width="20" className="stroke-1">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>

            {/* 3D Image Carousel */}
            <div className="relative flex h-[350px] w-full max-w-[200px] flex-col items-center justify-center max-lg:mt-12 lg:h-[450px] lg:max-w-[270px] lg:me-20 lg:flex-shrink-0">
              <div className="relative h-full w-full">
                {/* Left Image */}
                <div
                  className="absolute transition-all duration-700 ease-out rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] left-[5%] z-10 brightness-75"
                  style={{
                    transform: 'translateX(-50%) perspective(1000px) rotateY(45deg) scale(0.85)',
                    filter: 'brightness(0.7)'
                  }}
                >
                  <div className="relative aspect-[4/5] w-[220px] lg:w-[300px]">
                    <Image
                      alt={images[(currentImage - 1 + images.length) % images.length].alt}
                      src={images[(currentImage - 1 + images.length) % images.length].src}
                      fill
                      className="rounded-3xl object-cover"
                      sizes="(max-width: 768px) 220px, 300px"
                    />
                  </div>
                </div>

                {/* Center Image */}
                <div
                  className="absolute transition-all duration-700 ease-out rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] left-1/2 z-30"
                  style={{
                    transform: 'translateX(-50%) perspective(1000px) scale(1)'
                  }}
                >
                  <div className="relative aspect-[4/5] w-[220px] lg:w-[300px]">
                    <Image
                      alt={images[currentImage].alt}
                      src={images[currentImage].src}
                      fill
                      className="rounded-3xl object-cover"
                      sizes="(max-width: 768px) 220px, 300px"
                    />
                  </div>
                </div>

                {/* Right Image */}
                <div
                  className="absolute transition-all duration-700 ease-out rounded-3xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] left-[95%] z-10 brightness-75"
                  style={{
                    transform: 'translateX(-50%) perspective(1000px) rotateY(-45deg) scale(0.85)',
                    filter: 'brightness(0.7)'
                  }}
                >
                  <div className="relative aspect-[4/5] w-[220px] lg:w-[300px]">
                    <Image
                      alt={images[(currentImage + 1) % images.length].alt}
                      src={images[(currentImage + 1) % images.length].src}
                      fill
                      className="rounded-3xl object-cover"
                      sizes="(max-width: 768px) 220px, 300px"
                    />
                  </div>
                </div>
              </div>
              <h3 className="text-center text-2xl font-light transition-opacity duration-500 mt-4">
                {images[currentImage].title}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" ref={experienceRef} className="relative px-4 pt-24 pb-12 md:pt-32 md:pb-20" aria-labelledby="experience-heading">
        <div className="mx-auto w-full max-w-6xl md:px-10">
          <h2 
            className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center mb-4 md:mb-0 max-w-lg mx-auto text-balance"
            style={{
              textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
            }}
          >
            <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
              The Experience
            </p>
            <span>
              Experience That Brings{' '}
              <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
                Ideas to Life
              </span>
            </span>
          </h2>

          <div className="relative mx-auto mt-20 mb-20 max-w-7xl">
            <div className="flex w-full flex-col max-md:ps-16 md:gap-10">
              {/* First Experience - Roboto Studio */}
              <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
                <div className="w-full lg:max-w-sm">
                  <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                    <time className="text-muted-foreground text-xs font-medium tracking-wide uppercase" dateTime="JAN 2025 - Present">
                      JAN 2025 - Present
                    </time>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
                        Roboto Studio
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-muted-foreground flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin h-3.5 w-3.5 flex-shrink-0" aria-hidden="true">
                          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span className="text-sm">London Area, United Kingdom</span>
                      </div>
                      <div className="text-muted-foreground flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-3.5 w-3.5 flex-shrink-0" aria-hidden="true">
                          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <span className="text-sm font-medium">Remote work</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="relative w-full">
                  <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                    <header>
                      <h3 className="text-xl font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
                        Frontend Engineer
                      </h3>
                    </header>
                    <section aria-label="Key achievements">
                      <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                        <li className="leading-relaxed">
                          Architected enterprise-scale, <strong className="font-semibold text-neutral-900 dark:text-neutral-200">CMS-driven reusable pagebuilder blocks</strong> with dynamic configurability using <strong className="font-semibold text-neutral-900 dark:text-neutral-200">Sanity and Contentful</strong>, enabling non-technical teams to manage content across <strong className="font-semibold text-neutral-900 dark:text-neutral-200">6+ production websites</strong>. Designed custom schemas and optimized GROQ queries, resulting in <strong className="font-semibold text-neutral-900 dark:text-neutral-200">40% faster content delivery</strong>.
                        </li>
                        <li className="leading-relaxed">
                          Delivered <strong className="font-semibold text-neutral-900 dark:text-neutral-200">high-performance web applications</strong> using <strong className="font-semibold text-neutral-900 dark:text-neutral-200">Next.js, React, and Tailwind CSS</strong> with advanced rendering strategies (SSG/SSR), achieving <strong className="font-semibold text-neutral-900 dark:text-neutral-200">25% increase in user engagement</strong> and <strong className="font-semibold text-neutral-900 dark:text-neutral-200">20% improvement in Core Web Vitals</strong>.
                        </li>
                        <li className="leading-relaxed">
                          Implemented <strong className="font-semibold text-neutral-900 dark:text-neutral-200">TypeScript across full-stack codebases</strong>, reducing production defects by <strong className="font-semibold text-neutral-900 dark:text-neutral-200">15%</strong> and establishing type-safe development standards for enhanced code quality and maintainability.
                        </li>
                        <li className="leading-relaxed">
                          Enhanced team productivity via a <strong className="font-semibold text-neutral-900 dark:text-neutral-200">scalable Monorepo architecture (Turborepo)</strong> and rigorous peer code reviews, contributing <strong className="font-semibold text-neutral-900 dark:text-neutral-200">40+ hours weekly</strong> while maintaining high engineering standards.
                        </li>
                        <li className="leading-relaxed">
                          Collaborated with <strong className="font-semibold text-neutral-900 dark:text-neutral-200">cross-functional teams (Design, Product)</strong> to ship <strong className="font-semibold text-neutral-900 dark:text-neutral-200">WCAG 2.1 AA-compliant</strong>, user-centered interfaces using <strong className="font-semibold text-neutral-900 dark:text-neutral-200">Agile methodologies</strong>, managing sprints in Linear and coordinating communication via Slack.
                        </li>
                        <li className="leading-relaxed">
                          Optimized performance and SEO by implementing <strong className="font-semibold text-neutral-900 dark:text-neutral-200">lazy loading, strategic code splitting</strong>, and adhering to <strong className="font-semibold text-neutral-900 dark:text-neutral-200">SEO best practices</strong>, resulting in higher search rankings and better UX metrics.
                        </li>
                      </ul>
                    </section>
                    <section aria-label="Technologies used">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          TypeScript
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Next.js
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Sanity CMS
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Contentful CMS
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Tailwind CSS
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Figma
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Turborepo
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Vercel AI SDK
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Agile
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Teamwork
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Research
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Problem-solving
                        </span>
                      </div>
                    </section>
                  </div>
                </div>
              </article>

              {/* Second Experience - GitHub */}
              <article className="grid grid-cols-1 gap-6 py-12 first:pt-0 last:pb-0 md:grid-cols-[2fr_1fr_4fr]">
                <div className="w-full lg:max-w-sm">
                  <div className="flex flex-col items-start gap-y-3 text-sm font-light">
                    <time className="text-muted-foreground text-xs font-medium tracking-wide uppercase" dateTime="JUN 2024 - Present">
                      JUN 2024 - Present
                    </time>
                    <div className="flex items-center gap-2">
                      <h2 className="text-xl font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
                        Github
                      </h2>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-muted-foreground flex items-center gap-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-briefcase h-3.5 w-3.5 flex-shrink-0" aria-hidden="true">
                          <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                          <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                        </svg>
                        <span className="text-sm font-medium">Remote work</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden md:block"></div>
                <div className="relative w-full">
                  <div className="flex flex-col gap-y-6 text-xs leading-relaxed md:text-sm">
                    <header>
                      <h3 className="text-xl font-bold text-neutral-900 md:text-2xl dark:text-neutral-100">
                        Open Source Contributor
                      </h3>
                    </header>
                    <section aria-label="Key achievements">
                      <ul className="flex list-none flex-col gap-y-4 text-neutral-700 dark:text-neutral-300/90">
                        <li className="leading-relaxed">
                          Contributed to <strong className="font-semibold text-neutral-900 dark:text-neutral-200">open-source projects with 15,000+ Github stars</strong>, improving code quality, feature implementations, and documentation.
                        </li>
                        <li className="leading-relaxed">
                          Engaged with <strong className="font-semibold text-neutral-900 dark:text-neutral-200">developer communities</strong>, collaborating on innovative solutions and best practices.
                        </li>
                      </ul>
                    </section>
                    <section aria-label="Technologies used">
                      <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          React
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Next.js
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          TypeScript
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Tailwind CSS
                        </span>
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 w-fit whitespace-nowrap shrink-0 gap-2 text-xs md:text-sm text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2">
                          Turborepo
                        </span>
                      </div>
                    </section>
                  </div>
                </div>
              </article>
            </div>

            {/* Timeline Line */}
            <div className="absolute top-0 h-full w-8 max-md:ms-2 md:left-[calc(32%_-_1rem)]">
              <div className="relative h-full w-full">
                {/* Profile Image */}
                <div 
                  className="absolute -left-0.5 z-10 flex transition-all duration-300 ease-out" 
                  style={{
                    top: `${scrollProgress * 100}%`,
                    transform: 'translateY(-50%)'
                  }}
                >
                  <div className="border-bg-primary bg-bg-primary relative h-9 w-9 overflow-hidden rounded-full border-2 shadow-md">
                    <Image
                      alt="Profile"
                      src="/assets/images/aayush-blue.jpg"
                      fill
                      className="object-cover"
                      sizes="36px"
                    />
                  </div>
                </div>
                
                {/* Animated Timeline Line */}
                <div className="absolute top-0 bottom-0 left-1/2 w-1.5 -translate-x-1/2 rounded-full dark:bg-neutral-800 bg-neutral-200 shadow-[inset_0_2px_1.5px_rgba(165,174,184,0.62)]">
                  <div 
                    className="absolute inset-0 w-full origin-top rounded-full bg-gradient-to-t from-pink-600 from-[0%] via-blue-500 via-[10%] to-transparent transition-all duration-300 ease-out"
                    style={{
                      transform: `scaleY(${scrollProgress})`,
                      opacity: scrollProgress > 0 ? 1 : 0
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section id="github" className="mx-auto my-24 w-full max-w-[984px] px-4 mt-10 mb-32">
        <h2 
          className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance mb-12 md:mb-12 text-center"
          style={{
            textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
          }}
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            Developer Insights
          </p>
          <span>
            GitHub{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              Activity
            </span>
          </span>
        </h2>
        
        <GitHubActivity username="ravin1227" />
        
        {/* <div className="mx-auto mt-4 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <div className="relative overflow-hidden rounded-xl border p-3 transition-all duration-300 md:p-4 bg-zinc-900/50 border-purple-500/30 hover:bg-purple-500/5 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 bg-purple-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users h-6 w-6 text-purple-400" aria-hidden="true">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                </svg>
              </div>
              <div>
                <p className="line-clamp-1 text-sm text-zinc-400">Followers</p>
                <p className="text-xl font-bold text-zinc-100 md:text-2xl">256</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl border p-3 transition-all duration-300 md:p-4 bg-zinc-900/50 border-yellow-500/30 hover:bg-yellow-500/5 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 bg-yellow-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star h-6 w-6 text-yellow-400" aria-hidden="true">
                  <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                </svg>
              </div>
              <div>
                <p className="line-clamp-1 text-sm text-zinc-400">Total Stars</p>
                <p className="text-xl font-bold text-zinc-100 md:text-2xl">452</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl border p-3 transition-all duration-300 md:p-4 bg-zinc-900/50 border-green-500/30 hover:bg-green-500/5 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 bg-green-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open h-6 w-6 text-green-400" aria-hidden="true">
                  <path d="M12 7v14"></path>
                  <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                </svg>
              </div>
              <div>
                <p className="line-clamp-1 text-sm text-zinc-400">Public Repos</p>
                <p className="text-xl font-bold text-zinc-100 md:text-2xl">51</p>
              </div>
            </div>
          </div>
          
          <div className="relative overflow-hidden rounded-xl border p-3 transition-all duration-300 md:p-4 bg-zinc-900/50 border-blue-500/30 hover:bg-blue-500/5 col-span-1">
            <div className="flex items-center gap-3 md:gap-4">
              <div className="rounded-lg p-3 bg-blue-900/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-git-fork h-6 w-6 text-blue-400" aria-hidden="true">
                  <circle cx="12" cy="18" r="3"></circle>
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="18" cy="6" r="3"></circle>
                  <path d="M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9"></path>
                  <path d="M12 12v3"></path>
                </svg>
              </div>
              <div>
                <p className="line-clamp-1 text-sm text-zinc-400">Total Forks</p>
                <p className="text-xl font-bold text-zinc-100 md:text-2xl">49</p>
              </div>
            </div>
          </div>
        </div> */}
      </section>

      {/* Timezone Section */}

      {/* My Site Section */}
      <MySiteSection />
    </div>
  );
};

export default AboutPage;