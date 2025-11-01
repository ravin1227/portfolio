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

        {/* Blog Posts Section */}
        <div className="mt-20 flex w-full border-white/10 md:border-t">
          <div className="mx-auto flex flex-col-reverse md:flex-row">
            <div className="w-full border-white/10 md:border-r md:px-8 lg:min-w-3xl">
              <div className="mx-auto flex max-w-3xl flex-col gap-6 px-0 py-10 pb-0">
                {blogPosts.map((post) => (
                  <article 
                    key={post.id} 
                    className="flex flex-col gap-4 border-b border-dashed border-white/10 pb-8 lg:flex-row-reverse lg:items-center cursor-pointer"
                    onClick={() => {
                      // Store selected post in localStorage and navigate
                      localStorage.setItem('selectedBlogPost', JSON.stringify(post));
                      router.push('/blog-details');
                    }}
                  >
                    {/* Post Image */}
                    <div className="relative z-1 h-44 w-auto overflow-hidden rounded-sm lg:h-28 lg:w-full lg:max-w-48 group">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    
                    {/* Post Content */}
                    <div className="w-full px-2">
                      <div className="flex items-center gap-3">
                        <time className="text-muted-foreground text-xs">
                          {post.date} (6 mo ago)
                        </time>
                        {post.isRecent && (
                          <span className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-400">
                            Recently released
                          </span>
                        )}
                      </div>
                      
                      <h3 
                        className="relative mt-3 text-xl font-bold cursor-pointer"
                      >
                        {post.title}
                      </h3>
                      
                      <p className="mt-1 text-sm text-neutral-900 dark:text-white/75">
                        {post.description}
                      </p>
                      
                      <div className="mt-3 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex items-center gap-2 text-xs text-green-400">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <circle cx="12" cy="12" r="10"></circle>
                            <polyline points="12,6 12,12 16,14"></polyline>
                          </svg>
                          {post.readTime}
                        </div>
                        
                        <div className="flex flex-wrap gap-1">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border px-2 py-1 text-[10px] transition-all duration-200 border-neutral-300 bg-neutral-100 text-neutral-600 dark:border-neutral-700/50 dark:bg-neutral-800/60 dark:text-neutral-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="h-full md:max-w-[350px] md:px-6 md:pt-6 md:pb-0">
              <div className="sticky flex h-fit flex-col-reverse gap-8 md:flex-col">
                {/* Sort Dropdown */}
                <div className="bg-neutral-800/50 border border-neutral-700/50 rounded-xl px-4 py-1 backdrop-blur-sm">
                  <button
                    className="flex w-full items-center justify-between text-left"
                    type="button"
                  >
                    <div className="flex items-center gap-3">
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
                        className="text-neutral-400"
                      >
                        <path d="M8 2v4"></path>
                        <path d="M16 2v4"></path>
                        <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                        <path d="M3 10h18"></path>
                      </svg>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">Newest First</span>
                        <span className="text-xs text-neutral-400">Most recent posts first</span>
                      </div>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-neutral-400"
                    >
                      <path d="m7 15 5 5 5-5"></path>
                      <path d="m7 9 5-5 5 5"></path>
                    </svg>
                  </button>
                </div>

                {/* Topics Section */}
                <div>
                  <div className="mb-4 flex items-center gap-2">
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
                      className="text-neutral-400"
                    >
                      <line x1="4" x2="20" y1="9" y2="9"></line>
                      <line x1="4" x2="20" y1="15" y2="15"></line>
                      <line x1="10" x2="8" y1="3" y2="21"></line>
                      <line x1="16" x2="14" y1="3" y2="21"></line>
                    </svg>
                    <h3 className="text-lg font-medium text-white">Topics</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'nextjs', 'react', 'css', 'tailwindcss', 'java', 'flexbox', 
                      'design', 'tips', 'grid', 'tools', 'vite', 'core-concept',
                      'git', 'pattern', 'typescript', 'setup', 'form', 'productivity', 
                      'web', 'animation'
                    ].map((topic) => (
                      <button
                        key={topic}
                        className="rounded-lg border border-neutral-600/50 bg-neutral-800/50 px-3 py-1 text-sm text-neutral-300 transition-all duration-200 hover:border-neutral-500/50 hover:bg-neutral-700/50 hover:text-white"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </main>
  );
}
