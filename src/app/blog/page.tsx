'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  // Available images from assets
  const availableImages = [
    "/assets/illustrations/community.jpg",
    "/assets/illustrations/cover.jpg",
    "/assets/illustrations/dunning-kruger.jpg",
    "/assets/illustrations/graduation.jpg",
    "/assets/illustrations/gym.jpg",
    "/assets/illustrations/motivation.jpg",
    "/assets/illustrations/screen1.jpg",
    "/assets/illustrations/steel-flower.webp",
    "/assets/illustrations/thumbnail.jpg",
    "/assets/illustrations/travel.jpg"
  ];

  // Sample blog posts data with random images
  const blogPosts = [
    {
      id: 1,
      title: "My 2025 Stack as a Frontend Developer",
      description: "A comprehensive overview of the tools, frameworks, and technologies I'm using in 2025 to build modern web applications.",
      date: "Mar 19, 2025",
      readTime: "4 min read",
      tags: ["frontend", "tools", "productivity"],
      image: availableImages[0],
      isRecent: true,
      file: "1-my-2025-stack-as-a-frontend-developer"
    },
    {
      id: 2,
      title: "Building Scalable React Applications",
      description: "Best practices and patterns for creating maintainable and scalable React applications that can grow with your team.",
      date: "Mar 15, 2025",
      readTime: "6 min read",
      tags: ["react", "javascript", "architecture"],
      image: availableImages[1],
      isRecent: false,
      file: "2-building-scalable-react-applications"
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use What",
      description: "A detailed comparison of CSS Grid and Flexbox, with practical examples and use cases for each layout method.",
      date: "Mar 10, 2025",
      readTime: "5 min read",
      tags: ["css", "flexbox", "grid", "design"],
      image: availableImages[2],
      isRecent: false,
      file: "3-css-grid-vs-flexbox-when-to-use-what"
    },
    {
      id: 4,
      title: "TypeScript Best Practices for React",
      description: "Essential TypeScript patterns and practices that will make your React development more robust and maintainable.",
      date: "Mar 5, 2025",
      readTime: "7 min read",
      tags: ["typescript", "react", "javascript"],
      image: availableImages[3],
      isRecent: false,
      file: "4-typescript-best-practices-for-react"
    },
    {
      id: 5,
      title: "Optimizing Web Performance in 2025",
      description: "Modern techniques and tools for improving web performance, from Core Web Vitals to advanced optimization strategies.",
      date: "Feb 28, 2025",
      readTime: "8 min read",
      tags: ["performance", "web", "optimization"],
      image: availableImages[4],
      isRecent: false,
      file: "5-optimizing-web-performance-in-2025"
    }
  ];

  return (
    <main className="relative mx-auto w-full">
      {/* Background Image Section */}
      <div 
        className="absolute inset-0 h-[450px] w-full overflow-hidden"
        style={{
          backgroundImage: 'url(/crumpled-paper.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.3,
          zIndex: 0
        }}
      />
      {/* Top Fade Effect */}
      <div 
        className="absolute inset-0 h-[450px] w-full z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 30%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />
      {/* Bottom Fade Effect */}
      <div 
        className="absolute inset-0 h-[450px] w-full z-10"
        style={{
          background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 30%, transparent 70%)',
          pointerEvents: 'none'
        }}
      />

      {/* Main Content */}
      <main className="mx-auto w-full max-w-7xl flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
        {/* Title Section */}
        <h2 
          style={{
            textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
          }}
          className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-center max-w-2xl text-balance mx-auto mb-10 md:mb-10"
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            The Blog
          </p>
          <span className="">
            <span className="">Handpicked insights from</span>{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              the pensieve
            </span>
          </span>
        </h2>

        {/* Search Bar */}
        <div className="relative mx-auto w-full max-w-md">
          <button
            type="button"
            className="inline-flex cursor-pointer items-center gap-2 border p-1.5 text-sm transition-colors text-neutral-600 hover:text-neutral-900 border-white/30 bg-white/20 hover:bg-neutral-200 dark:hover:text-neutral-accent-foreground dark:text-neutral-300 dark:border-neutral-700 dark:bg-neutral-800/50 dark:hover:bg-neutral-700/50 w-full rounded-2xl px-4 py-3"
          >
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
              className="lucide lucide-search ms-1 size-4"
              aria-hidden="true"
            >
              <path d="m21 21-4.34-4.34"></path>
              <circle cx="11" cy="11" r="8"></circle>
            </svg>
            Search
            <div className="ms-auto inline-flex gap-0.5">
              <kbd className="rounded-md border border-neutral-300 bg-neutral-200 px-1.5 text-neutral-700 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                ⌘
              </kbd>
              <kbd className="rounded-md border border-neutral-300 bg-neutral-200 px-1.5 text-neutral-700 dark:border-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
                K
              </kbd>
            </div>
          </button>
        </div>

        {/* Coming Soon Section */}
        <div className="mt-20 flex w-full justify-center items-center min-h-[400px] py-20">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl px-4">
            {/* Icon */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 blur-3xl opacity-30 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-pen-line relative z-10 text-white/80"
              >
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"></path>
              </svg>
            </div>

            {/* Coming Soon Text */}
            <h3
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                textShadow: '0px 4px 20px rgba(255,255,255,0.1)'
              }}
            >
              Coming Soon
            </h3>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-white/70 mb-8 leading-relaxed">
              I'm working on amazing content. Stay tuned for insightful articles, tutorials, and stories from the world of development.
            </p>

            {/* Decorative Elements */}
            <div className="flex items-center gap-3 text-white/50">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
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
                className="lucide lucide-sparkles animate-pulse"
              >
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path>
                <path d="M5 3v4"></path>
                <path d="M19 17v4"></path>
                <path d="M3 5h4"></path>
                <path d="M17 19h4"></path>
              </svg>
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            </div>
          </div>
        </div>
        
      </main>
    </main>
  );
}
