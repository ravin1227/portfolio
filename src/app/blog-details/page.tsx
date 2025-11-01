'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './blog-details.css';

export default function BlogDetailsPage() {
  const [selectedPost, setSelectedPost] = useState({
    title: "My 2025 Stack as a Frontend Developer",
    description: "As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better, faster, and more maintainable projects!",
    date: "Mar 19, 2025",
    readTime: "4 min read",
    tags: ["frontend", "tools", "productivity"],
    image: "/assets/illustrations/thumbnail.jpg"
  });

  const [activeSection, setActiveSection] = useState('');
  console.log('Current activeSection:', activeSection);

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

    // Intersection Observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the most visible section
        let mostVisible = null;
        let maxRatio = 0;

        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            mostVisible = entry.target;
          }
        });

        if (mostVisible) {
          console.log('Setting active section:', mostVisible.id);
          setActiveSection(mostVisible.id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: '-10% 0px -60% 0px',
      }
    );

    // Observe all heading elements
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, []);

  return (
    <div className="blog-details bg-white-1 relative h-full antialiased selection:bg-purple-600/20 selection:text-purple-400 dark:bg-black">
      {/* Navigation blur effect */}
      <div className="pointer-events-none fixed top-0 left-1/2 z-40 h-24 w-full -translate-x-1/2">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none absolute inset-0 z-10 opacity-100" style={{
            backdropFilter: 'blur(3px)',
            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)'
          }} />
          <div className="pointer-events-none absolute inset-0 z-20 opacity-100" style={{
            backdropFilter: 'blur(5px)',
            maskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 1) 85%, rgba(0, 0, 0, 1) 100%)'
          }} />
        </div>
      </div>

      {/* Hero Background Image */}
      <div className="relative h-96 w-full overflow-hidden">
        <Image
          alt={selectedPost.title}
          fill
          className="object-cover"
          src={selectedPost.image}
          priority
        />

        {/* Enhanced Halftone Dots Pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.8) 1.5px, transparent 0)`,
            backgroundSize: '8px 8px',
            mixBlendMode: 'multiply',
            opacity: 0.9
          }}
        />

        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Top border black mask */}
        <div
          className="absolute top-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 85%, transparent 100%)'
          }}
        />

        {/* Bottom border black mask */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 25%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 85%, transparent 100%)'
          }}
        />

        {/* Enhanced black dots pattern for top border */}
        <div
          className="absolute top-0 left-0 right-0 h-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,1) 1px, transparent 0)`,
            backgroundSize: '4px 4px',
            mixBlendMode: 'multiply',
            opacity: 0.7
          }}
        />

        {/* Enhanced black dots pattern for bottom border */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,1) 1px, transparent 0)`,
            backgroundSize: '4px 4px',
            mixBlendMode: 'multiply',
            opacity: 0.7
          }}
        />
      </div>

      {/* Main content area */}
      <main
        id="nd-docs-layout"
        className="flex flex-1 flex-col transition-[margin] xl:[--fd-toc-width:286px]"
        style={{ marginInlineStart: 'var(--fd-sidebar-width)' }}
      >
        <div
          id="nd-page"
          className="flex flex-1 mx-auto w-full -mt-48 relative z-10 max-w-7xl px-4 sm:px-6 lg:px-8"
          style={{
            paddingTop: 'calc(var(--fd-nav-height) + var(--fd-tocnav-height))'
          }}
        >
          <article className="flex min-w-0 w-full flex-col gap-4 pt-8 max-w-4xl mx-auto prose-lg prose-a:underline-offset-4 prose-a:decoration-blue-500">

            {/* Header */}
            <header className="flex flex-col gap-y-4">
              <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs md:text-sm">
                {selectedPost.tags.map((tag) => (
                  <span
                    key={tag}
                    data-slot="badge"
                    className="inline-flex items-center justify-center border w-fit whitespace-nowrap shrink-0 gap-2 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden text-black dark:text-white border-white-3 dark:bg-neutral-900 dark:border-white/[0.14] bg-white-2 [a&]:hover:bg-primary/90 rounded-sm px-1.5 py-0.5 text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl font-bold md:text-4xl">{selectedPost.title}</h1>

              <p className="text-sm text-neutral-400 md:text-base">
                {selectedPost.description}
              </p>

              <div className="flex justify-between border-b pb-3 text-sm text-white/70">
                <div aria-label="Author" className="my-2 flex gap-3">
                  <img src="/aayush.webp" alt="Author logo" className="size-10 rounded-full" />
                  <div className="gap-px text-sm">
                    <p className="text-white">Aayush Bharti</p>
                    <time
                      dateTime={selectedPost.date}
                      className="text-xs text-neutral-400"
                    >
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

            {/* Content */}
            <div className="prose">
              {/* Info callout */}
              <div className="flex gap-2 my-4 rounded-xl border bg-fd-card callout-bg p-3 ps-1 text-sm text-fd-card-foreground shadow-md">
                <div role="none" className="w-0.5 callout-border rounded-sm"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-5 -me-0.5 callout-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <p className="font-medium !my-0">💡 Why the Right Stack Matters</p>
                  <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
                    <p>The tools you choose shape your development experience. A well-curated stack not only boosts productivity but also makes coding enjoyable and sustainable in the long run.</p>
                  </div>
                </div>
              </div>

              {/* Introduction */}
              <h2 id="-introduction" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-introduction" className="peer">🧠 Introduction</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>

              <p>As a Frontend Developer in 2025, I've fine-tuned my development environment with a set of powerful tools that enhance productivity, efficiency, and customization. Let me walk you through my stack and how these tools help me build better, faster, and more maintainable projects!</p>

              {/* My Stack */}
              <h2 id="️-my-stack" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#️-my-stack" className="peer">⚙️ My Stack</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>

              <p>Here's a comprehensive overview of the tools, frameworks, and technologies I'm using in 2025 to build modern web applications:</p>

              {/* Development Environment */}
              <h3 id="-development-environment" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-development-environment" className="peer">🧑‍💻 Development Environment</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h3>

              <div className="flex gap-2 my-4 rounded-xl border bg-fd-card callout-bg p-3 ps-1 text-sm text-fd-card-foreground shadow-md">
                <div role="none" className="w-0.5 callout-border rounded-sm"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-5 -me-0.5 callout-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <p className="font-medium !my-0">The Foundation of Great Development</p>
                  <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
                    <p>Having a solid development environment is crucial. These core tools form the backbone of my daily workflow and significantly impact my productivity.</p>
                  </div>
                </div>
              </div>

              <ul>
                <li><strong>VS Code</strong> with essential extensions</li>
                <li><strong>Terminal</strong> with custom configurations</li>
                <li><strong>Git</strong> for version control</li>
              </ul>

              {/* Productivity & Utilities */}
              <h3 id="-productivity--utilities" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-productivity--utilities" className="peer">⚡ Productivity & Utilities</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h3>

              <div className="flex gap-2 my-4 rounded-xl border bg-fd-card callout-bg p-3 ps-1 text-sm text-fd-card-foreground shadow-md">
                <div role="none" className="w-0.5 callout-border rounded-sm"></div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-5 -me-0.5 callout-icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 16v-4"></path>
                  <path d="M12 8h.01"></path>
                </svg>
                <div className="flex flex-col gap-2 min-w-0 flex-1">
                  <p className="font-medium !my-0">Supercharge Your Workflow</p>
                  <div className="text-fd-muted-foreground prose-no-margin empty:hidden">
                    <p>These utility apps streamline repetitive tasks and enhance overall system productivity, allowing me to focus more on actual development work.</p>
                  </div>
                </div>
              </div>

              <ul>
                <li><strong>Raycast</strong> for quick actions</li>
                <li><strong>1Password</strong> for password management</li>
                <li><strong>CleanShot X</strong> for screenshots</li>
              </ul>

              {/* API & Database Management */}
              <h3 id="-api--database-management" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-api--database-management" className="peer">🧪 API & Database Management</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h3>

              <ul>
                <li><strong>Postman</strong> for API testing</li>
                <li><strong>TablePlus</strong> for database management</li>
              </ul>

              {/* Other Essentials */}
              <h3 id="-other-essentials" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-other-essentials" className="peer">🎨 Other Essentials</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h3>

              <ul>
                <li><strong>Figma</strong> for design</li>
                <li><strong>Linear</strong> for project management</li>
                <li><strong>Notion</strong> for documentation</li>
              </ul>

              {/* How This Stack Improves My Workflow */}
              <h2 id="-how-this-stack-improves-my-workflow" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-how-this-stack-improves-my-workflow" className="peer">🚀 How This Stack Improves My Workflow</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>

              <p>Each tool in my stack serves a specific purpose and integrates seamlessly with the others, creating a cohesive development experience that allows me to focus on what matters most: building great applications.</p>

              {/* Final Thoughts */}
              <h2 id="-final-thoughts" className="flex scroll-m-28 flex-row items-center gap-2">
                <a href="#-final-thoughts" className="peer">💭 Final Thoughts</a>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-3.5 shrink-0 text-fd-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100" aria-label="Link to section">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </h2>

              <p>The right tools can make all the difference in your development workflow. Invest time in finding and configuring tools that work for you, and don't be afraid to experiment with new ones.</p>
            </div>
          </article>

          {/* Table of Contents */}
          <div
            id="nd-toc"
            className="sticky pb-2 pt-12 max-xl:hidden"
            style={{
              top: 'calc(var(--fd-banner-height) + var(--fd-nav-height))',
              height: 'calc(100dvh - var(--fd-banner-height) - var(--fd-nav-height))'
            }}
          >
            <div className="flex h-full w-(--fd-toc-width) max-w-full flex-col pe-4">
              <div className="h-10"></div>
              <h3 className="inline-flex items-center gap-1.5 text-sm text-fd-muted-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide size-4">
                  <path d="M15 18H3"></path>
                  <path d="M17 6H3"></path>
                  <path d="M21 12H3"></path>
                </svg>
                On this page
              </h3>
              <div className="relative min-h-0 text-sm ms-px overflow-auto [scrollbar-width:none] [mask-image:linear-gradient(to_bottom,transparent,white_16px,white_calc(100%-16px),transparent)] py-3">
                <div className="flex flex-col relative">
                  {/* Main vertical line */}
                  <div className="absolute left-2 top-0 bottom-0 w-px bg-white/10 toc-main-line"></div>

                  <a
                    data-active={activeSection === '-introduction'}
                    href="#-introduction"
                    style={{ paddingInlineStart: '18px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🧠 Introduction
                  </a>

                  <a
                    data-active={activeSection === '️-my-stack'}
                    href="#️-my-stack"
                    style={{ paddingInlineStart: '18px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    ⚙️ My Stack
                  </a>

                  {/* Sub-section vertical line */}
                  <div className="absolute left-5 w-px bg-white/08 toc-sub-line" style={{ top: '76px', height: '144px' }}></div>

                  <a
                    data-active={activeSection === '-development-environment'}
                    href="#-development-environment"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🧑‍💻 Development Environment
                  </a>

                  <a
                    data-active={activeSection === '-productivity--utilities'}
                    href="#-productivity--utilities"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    ⚡ Productivity & Utilities
                  </a>

                  <a
                    data-active={activeSection === '-api--database-management'}
                    href="#-api--database-management"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🧪 API & Database Management
                  </a>

                  <a
                    data-active={activeSection === '-other-essentials'}
                    href="#-other-essentials"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🎨 Other Essentials
                  </a>

                  <a
                    data-active={activeSection === '-how-this-stack-improves-my-workflow'}
                    href="#-how-this-stack-improves-my-workflow"
                    style={{ paddingInlineStart: '18px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🚀 How This Stack Improves My Workflow
                  </a>

                  {/* Sub-section vertical line for workflow improvements */}
                  <div className="absolute left-5 w-px bg-white/08 toc-sub-line" style={{ top: '256px', height: '180px' }}></div>

                  <a
                    data-active={activeSection === 'customized-fast-editing'}
                    href="#customized-fast-editing"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    🧠 Customized, Fast Editing with Neovim
                  </a>

                  <a
                    data-active={activeSection === 'streamlined-terminal'}
                    href="#streamlined-terminal"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    📦 Streamlined Terminal Multitasking
                  </a>

                  <a
                    data-active={activeSection === 'navigation-effortless'}
                    href="#navigation-effortless"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    📁 Navigation Made Effortless
                  </a>

                  <a
                    data-active={activeSection === 'system-awareness'}
                    href="#system-awareness"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    📊 System Awareness in Real-Time
                  </a>

                  <a
                    data-active={activeSection === 'consistent-commits'}
                    href="#consistent-commits"
                    style={{ paddingInlineStart: '32px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    ✅ Consistent Commits and Efficient API Testing
                  </a>

                  <a
                    data-active={activeSection === '-final-thoughts'}
                    href="#-final-thoughts"
                    style={{ paddingInlineStart: '18px' }}
                    className="toc-link prose relative py-1.5 text-sm text-fd-muted-foreground [overflow-wrap:anywhere] first:pt-0 last:pb-0"
                  >
                    💭 Final Thoughts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}