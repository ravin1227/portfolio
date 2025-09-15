'use client';

import { useEffect, useRef } from 'react';

export default function SkillsSection() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scrollY = window.scrollY;
        const rotation = scrollY * 0.1; // Adjust rotation speed
        imageRef.current.style.transform = `rotate(${rotation}deg)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'ReactJS', icon: 'react' },
    { name: 'NextJS', icon: 'nextdotjs/white' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Motion', icon: 'framer' },
    { name: 'Sanity', icon: 'sanity' },
    { name: 'Contentful', icon: 'contentful' },
    { name: 'NodeJS', icon: 'nodedotjs/darkgreen' },
    { name: 'ExpressJS', icon: 'express/white' },
    { name: 'PostgreSQL', icon: 'postgresql/sky' },
    { name: 'MongoDB', icon: 'mongodb/darkgreen' },
    { name: 'Prisma', icon: 'prisma/blue' },
    { name: 'Zustand', icon: 'redux/pink' },
    { name: 'Zod', icon: 'zod' },
    { name: 'pnpm', icon: 'pnpm' },
    { name: 'Bun', icon: 'bun/white' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github/white' },
    { name: 'Vercel', icon: 'vercel/white' },
    { name: 'AWS', icon: 'amazonwebservices/gray' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Expo', icon: 'expo/gray' },
    { name: 'Clerk', icon: 'clerk' },
    { name: 'Linux', icon: 'linux' }
  ];

  return (
    <section id="skills" className="relative mx-auto flex h-full flex-col rounded-3xl py-0 md:px-10">
      <div className="relative mx-auto size-fit overflow-hidden">
        <div
          className="[mask-image:linear-gradient(to_top,transparent,black_50%,black_90%,transparent)] [masak-image:linear-gradient(to_top,transparent,#000_100%)]"
        >
          <div 
            ref={imageRef}
            className="relative mx-auto size-[350px] translate-y-36 md:size-[480px] md:translate-y-40"
            style={{ transform: 'none' }}
          >
            <img 
              src="/steel-flower.webp" 
              alt="skills cover rotating image" 
              className="z-10 w-full opacity-65 select-none"
              width={480}
              height={480}
              draggable={false}
            />
          </div>
        </div>
      </div>
      
      <h2 
        style={{
          textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
        }}
        className="relative text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center z-30 mb-0 md:mb-0 size-full -translate-y-6 md:-translate-y-10"
      >
        <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
          My Skills
        </p>
        <span className="">
          <span className="">The Secret</span>{' '}
          <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">Sauce</span>
        </span>
      </h2>
      
      <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-2 lg:gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            data-slot="badge"
            className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-gray-400 dark:bg-neutral-900 dark:border-gray-700 bg-white-9 [a&]:hover:bg-primary/90 md:px-4 md:py-1.5"
            aria-label={skill.name}
          >
            <img 
              height="18" 
              width="18" 
              alt={skill.name}
              src={`https://cdn.simpleicons.org/${skill.icon}`} 
              className="w-4" 
            />
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  );
}
