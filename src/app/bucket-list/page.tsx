'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';

export default function BucketListPage() {
  const bucketListItems = [
    {
      id: 1,
      title: "Skydiving",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 2,
      title: "Create portfolio website",
      completed: true,
      description: "August 2024, https://www.ravindraverma.in",
      date: "August 2024",
      images: [
        { src: "/_next/home-page.jpg", alt: "Create portfolio website" },
        { src: "/_next/blog-page.jpg", alt: "Create portfolio website" },
        { src: "/_next/project-page.jpg", alt: "Create portfolio website" }
      ]
    },
    {
      id: 3,
      title: "Do 10K marathon",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 4,
      title: "First OpenSource contribution",
      completed: true,
      description: "December 2024",
      date: "December 2024",
      images: []
    },
    {
      id: 5,
      title: "Solo travel to another country",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 6,
      title: "Remote working with client from abroad",
      completed: true,
      description: "September 2024, Got it from LinkedIn. :)",
      date: "September 2024",
      images: []
    },
    {
      id: 7,
      title: "Get a Remote Job",
      completed: true,
      description: "January 2025",
      date: "January 2025",
      images: []
    },
    {
      id: 8,
      title: "Write a book about programming",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 9,
      title: "Simple offline notes app",
      completed: true,
      description: "November 2023, First React project!",
      date: "November 2023",
      images: []
    },
    {
      id: 10,
      title: "Write 10 articles",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 11,
      title: "Get 5,000+ organic LinkedIn follower",
      completed: true,
      description: "April 2025",
      date: "April 2025",
      images: []
    },
    {
      id: 12,
      title: "Get 100+ followers on Github",
      completed: true,
      description: "May 2025",
      date: "May 2025",
      images: []
    },
    {
      id: 13,
      title: "Get a muscular body",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 14,
      title: "Featured once in media",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 15,
      title: "3 months Eurotrip!",
      completed: false,
      description: "",
      date: "",
      images: []
    },
    {
      id: 16,
      title: "Speak at an international conference",
      completed: false,
      description: "",
      date: "",
      images: []
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0  h-[450px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80"
        style={{ maskImage: 'linear-gradient(rgb(0, 0, 0) 40%, rgba(0, 0, 0, 0) 100%)', opacity: 1 }}>
        <Image
          alt="crumpled paper texture"
          fill
          className="pointer-events-none absolute inset-0  h-[450px] w-full object-cover mix-blend-overlay select-none"
          src="/crumpled-paper.avif"
          priority
        />
      </div>

      <main className="px-4 py-16 pt-36 md:px-1">
        <h2 
          style={{ textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)' }}
          className="relative z-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-12 md:mb-16 lg:mb-20 text-balance text-center max-w-xl mx-auto px-4 sm:px-6"
        >
          <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
            The Bucket List
          </p>
          <span className="">
            <span className="md:text-6xl">The Things I'll Do</span>{' '}
            <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
              Before I'm Done
            </span>
          </span>
        </h2>

        <div className="mx-auto max-w-xl">
          {bucketListItems.map((item, index) => (
            <div key={item.id} className="flex items-start gap-4 border-b border-white-3 dark:border-white/5 py-5">
              <div className="mt-1 size-5 shrink-0 rounded border border-white-3 dark:border-white/20">
                {item.completed && (
                  <Check className="lucide lucide-check size-4 text-blue-400" aria-hidden="true" />
                )}
              </div>
              <div className="flex w-full flex-col justify-between gap-4 md:flex-row">
                <div className="flex flex-col">
                  <h2 className="text-base md:text-xl">{item.title}</h2>
                  {item.description && (
                    <p className="text-sm text-black/75 dark:text-white/60">{item.description}</p>
                  )}
                </div>
                {item.images && item.images.length > 0 && (
                  <div className="group flex w-full justify-end -space-x-6 transition-all duration-300 ease-in-out hover:space-x-0 md:w-fit">
                    {item.images.map((image, imgIndex) => (
                      <button
                        key={imgIndex}
                        data-state="closed"
                        data-slot="tooltip-trigger"
                        className={`size-10 max-w-12 overflow-hidden rounded-[8px] border-2 p-0 transition-all duration-300 group-hover:rotate-0 hover:z-10 hover:scale-105 hover:rotate-0 md:max-w-24 ${
                          imgIndex === 0 ? 'rotate-3' : imgIndex === 1 ? '-rotate-3' : 'rotate-0'
                        }`}
                      >
                        <Image
                          alt={image.alt}
                          width={48}
                          height={48}
                          className="size-full object-cover"
                          src={image.src}
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
