'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogDetailsPage() {
  const [selectedPost, setSelectedPost] = useState({
    title: "My 2025 Stack as a Frontend Developer",
    description: "A comprehensive overview of the tools, frameworks, and technologies I'm using in 2025 to build modern web applications.",
    date: "Mar 19, 2025",
    readTime: "4 min read",
    tags: ["frontend", "tools", "productivity"],
    image: "/assets/illustrations/thumbnail.jpg"
  });

  useEffect(() => {
    // Get selected post from localStorage
    const storedPost = localStorage.getItem('selectedBlogPost');
    if (storedPost) {
      try {
        const parsedPost = JSON.parse(storedPost);
        setSelectedPost(parsedPost);
      } catch (error) {
        console.error('Error parsing stored post:', error);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background Image Section */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <Image
          alt={selectedPost.title}
          fill
          className="object-cover"
          src={selectedPost.image}
          priority
        />
        
        {/* Dotted/Halftone Mask Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.6) 2px, transparent 0)`,
            backgroundSize: '12px 12px',
            mixBlendMode: 'multiply'
          }}
        />
        
        {/* Dark overlay for better contrast */}
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Gradient fade effect */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 30%, transparent 60%)'
          }}
        />
      </div>
      
      <main className="relative mx-auto w-full">
        <main 
          id="nd-docs-layout" 
          className="flex flex-1 flex-col transition-[margin] xl:[--fd-toc-width:286px]"
          style={{ marginInlineStart: 'var(--fd-sidebar-width)' }}
        >
          <div 
            id="nd-page" 
            className="flex flex-1 mx-auto w-full -mt-48 relative z-10"
            style={{
              paddingTop: 'calc(var(--fd-nav-height) + var(--fd-tocnav-height))',
              maxWidth: 'min(var(--fd-page-width), calc(var(--fd-layout-width) - var(--fd-sidebar-width)))'
            }}
          >
            <article className="flex min-w-0 w-full flex-col gap-4 px-4 pt-8 md:px-6 md:mx-auto xl:pt-12 xl:px-12 mx-auto prose-lg prose-a:underline-offset-4 prose-a:decoration-blue-500">
              <header className="flex flex-col gap-y-4">
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
                  {selectedPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-2 rounded-sm px-1.5 py-0.5 text-xs border-white/20 bg-neutral-900 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h1 className="text-3xl font-bold md:text-4xl">{selectedPost.title}</h1>
                <p className="text-sm text-neutral-400 md:text-base">{selectedPost.description}</p>
                <div className="flex justify-between border-b pb-3 text-sm text-white/70">
                  <div aria-label="Author" className="my-2 flex gap-3">
                    <img src="/aayush.webp" alt="Author logo" className="size-10 rounded-full" />
                    <div className="gap-px text-sm">
                      <p className="text-white">Ravindra Verma</p>
                      <time dateTime={selectedPost.date} className="text-xs text-neutral-400">
                        {selectedPost.date} (5 mo ago)
                      </time>
                    </div>
                  </div>
                  <span className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-book-open" aria-hidden="true">
                      <path d="M12 7v14"></path>
                      <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path>
                    </svg>
                    {selectedPost.readTime}
                  </span>
                </div>
              </header>
              
              <div className="prose">
                <div className="text-white/90 leading-relaxed">
                  <h2 id="introduction" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#introduction" className="peer">Introduction</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h2>
                  <p className="mb-4">As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better applications.</p>
                  
                  <h2 id="my-stack" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#my-stack" className="peer">My Stack</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h2>
                  
                  <h3 id="development-environment" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#development-environment" className="peer">Development Environment</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h3>
                  <ul className="ml-4 mb-4">
                    <li className="mb-1"><strong className="font-bold text-white">VS Code</strong> with essential extensions</li>
                    <li className="mb-1"><strong className="font-bold text-white">Terminal</strong> with custom configurations</li>
                    <li className="mb-1"><strong className="font-bold text-white">Git</strong> for version control</li>
                  </ul>
                  
                  <h3 id="productivity-utilities" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#productivity-utilities" className="peer">Productivity & Utilities</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h3>
                  <ul className="ml-4 mb-4">
                    <li className="mb-1"><strong className="font-bold text-white">Raycast</strong> for quick actions</li>
                    <li className="mb-1"><strong className="font-bold text-white">1Password</strong> for password management</li>
                    <li className="mb-1"><strong className="font-bold text-white">CleanShot X</strong> for screenshots</li>
                  </ul>
                  
                  <h3 id="api-database" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#api-database" className="peer">API & Database Management</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h3>
                  <ul className="ml-4 mb-4">
                    <li className="mb-1"><strong className="font-bold text-white">Postman</strong> for API testing</li>
                    <li className="mb-1"><strong className="font-bold text-white">TablePlus</strong> for database management</li>
                  </ul>
                  
                  <h3 id="other-essentials" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#other-essentials" className="peer">Other Essentials</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h3>
                  <ul className="ml-4 mb-4">
                    <li className="mb-1"><strong className="font-bold text-white">Figma</strong> for design</li>
                    <li className="mb-1"><strong className="font-bold text-white">Linear</strong> for project management</li>
                    <li className="mb-1"><strong className="font-bold text-white">Notion</strong> for documentation</li>
                  </ul>
                  
                  <h2 id="workflow-improvements" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#workflow-improvements" className="peer">How This Stack Improves My Workflow</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h2>
                  <p className="mb-4">Each tool in my stack serves a specific purpose and integrates seamlessly with the others, creating a cohesive development experience that allows me to focus on what matters most: building great applications.</p>
                  
                  <h2 id="final-thoughts" className="flex scroll-m-28 flex-row items-center gap-2">
                    <a href="#final-thoughts" className="peer">Final Thoughts</a>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-neutral-400 opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                    </svg>
                  </h2>
                  <p className="mb-4">The right tools can make all the difference in your development workflow. Invest time in finding and configuring tools that work for you, and don't be afraid to experiment with new ones.</p>
                </div>
              </div>
            </article>
            
            {/* Table of Contents Sidebar */}
            <div 
              id="nd-toc" 
              className="sticky pb-2 pt-12 max-xl:hidden"
              style={{
                top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))',
                height: 'calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))'
              }}
            >
              <div className="flex h-full w-[--fd-toc-width] max-w-full flex-col pe-4">
                <div className="h-10"></div>
                <h3 className="inline-flex items-center gap-1.5 text-sm text-neutral-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-4">
                    <path d="M15 18H3"></path>
                    <path d="M17 6H3"></path>
                    <path d="M21 12H3"></path>
                  </svg>
                  On this page
                </h3>
                <div className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3">
                  <div className="flex flex-col">
                    <a href="#introduction" style={{ paddingInlineStart: '14px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10" style={{ insetInlineStart: 0 }}></div>
                      Introduction
                    </a>
                    <a href="#my-stack" style={{ paddingInlineStart: '14px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10 bottom-1.5" style={{ insetInlineStart: 0 }}></div>
                      My Stack
                    </a>
                    <a href="#development-environment" style={{ paddingInlineStart: '26px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100">
                        <line x1="0" y1="0" x2="10" y2="12" className="stroke-white/10" strokeWidth="1"></line>
                      </svg>
                      <div className="absolute inset-y-0 w-px bg-white/10 top-1.5" style={{ insetInlineStart: '10px' }}></div>
                      Development Environment
                    </a>
                    <a href="#productivity-utilities" style={{ paddingInlineStart: '26px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10" style={{ insetInlineStart: '10px' }}></div>
                      Productivity & Utilities
                    </a>
                    <a href="#api-database" style={{ paddingInlineStart: '26px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10" style={{ insetInlineStart: '10px' }}></div>
                      API & Database Management
                    </a>
                    <a href="#other-essentials" style={{ paddingInlineStart: '26px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10 bottom-1.5" style={{ insetInlineStart: '10px' }}></div>
                      Other Essentials
                    </a>
                    <a href="#workflow-improvements" style={{ paddingInlineStart: '14px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="absolute -top-1.5 start-0 size-4 rtl:-scale-x-100">
                        <line x1="10" y1="0" x2="0" y2="12" className="stroke-white/10" strokeWidth="1"></line>
                      </svg>
                      <div className="absolute inset-y-0 w-px bg-white/10 top-1.5 bottom-1.5" style={{ insetInlineStart: 0 }}></div>
                      How This Stack Improves My Workflow
                    </a>
                    <a href="#final-thoughts" style={{ paddingInlineStart: '14px' }} className="prose relative py-1.5 text-sm text-neutral-400 hover:text-white transition-colors [overflow-wrap:anywhere] first:pt-0 last:pb-0">
                      <div className="absolute inset-y-0 w-px bg-white/10" style={{ insetInlineStart: 0 }}></div>
                      Final Thoughts
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
