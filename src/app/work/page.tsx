'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { projects, getProjectGradients, getProjectShadows } from '@/data/projects';

// Helper function to convert icon name to Skill Icons format
const getSkillIconUrl = (iconName: string, techName?: string): string => {
  // Icons that should use Simple Icons instead of Skill Icons
  const simpleIconsOnly = ['zapier', 'openai', 'googleanalytics'];
  
  const lowerIconName = iconName.toLowerCase();
  
  // Check if this icon should use Simple Icons
  if (simpleIconsOnly.includes(lowerIconName)) {
    return `https://cdn.simpleicons.org/${iconName}`;
  }
  
  // Map Simple Icons names to Skill Icons names
  const iconMap: Record<string, string> = {
    'vuedotjs': 'vuejs',
    'nodedotjs': 'nodejs',
    'rubyonrails': 'rails',
  };
  
  const skillIconName = iconMap[lowerIconName] || lowerIconName;
  return `https://skillicons.dev/icons?i=${skillIconName}`;
};

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const sectionTop = sectionRef.current.offsetTop;
      const sectionHeight = sectionRef.current.offsetHeight;
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate which project should be active based on scroll position
      const scrollProgress = (scrollTop - sectionTop + windowHeight / 2) / sectionHeight;
      const projectIndex = Math.max(0, Math.min(projects.length - 1, Math.floor(scrollProgress * projects.length)));
      
      setActiveProject(projectIndex);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getGradientStyle = (color: string) => {
    const gradients = getProjectGradients();
    return { background: gradients[color as keyof typeof gradients] || gradients.pink };
  };

  const getShadowColor = (color: string) => {
    const shadows = getProjectShadows();
    return shadows[color as keyof typeof shadows] || shadows.pink;
  };

  const getMainColor = (color: string) => {
    const colorMap = {
      pink: '#DB2777',
      blue: '#2932CB',
      teal: '#14B8A6',
      purple: '#7C3AED',
      emerald: '#10B981',
      amber: '#D97706'
    };
    return colorMap[color as keyof typeof colorMap] || '#DB2777';
  };

  return (
    <div className="w-full bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full">
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
            src="/crumpled-paper.avif"
            fill
            className="pointer-events-none absolute inset-0 h-[450px] w-full object-cover mix-blend-overlay select-none"
            sizes="100vw"
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 md:pt-32 lg:pt-36 pb-12 md:pb-16 lg:pb-20">
          <h2 
            className="relative z-2 text-4xl font-medium tracking-tight sm:text-5xl md:text-6xl text-balance text-center"
            style={{
              textShadow: '0px 4px 8px rgba(255,255,255,.05),0px 8px 30px rgba(255,255,255,.25)'
            }}
          >
            <p className="mb-3 text-xs font-normal tracking-widest text-black/80 dark:text-white/70 uppercase md:text-sm">
              FEATURED CASE STUDIES
            </p>
            <span>
              <span>Curated</span>{' '}
              <span className="text-colorfull animate-gradient-x font-nyght tracking-wide">
                work
              </span>
            </span>
          </h2>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={sectionRef} className="relative mx-auto w-full max-w-7xl mt-0 px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="relative mx-auto flex w-full">
          {/* Left Side - Project Cards */}
          <div className="mx-auto grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2 lg:flex lg:max-w-[65%] lg:flex-col lg:gap-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => {
                  projectRefs.current[index] = el;
                }}
                className="project-card flex w-full flex-row"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                  transition: 'all 0.6s ease-out'
                }}
              >
                <div className="flex flex-col lg:mx-10 lg:w-full">
                  <Link
                    href={`/project-details/${project.id}`}
                    className="relative cursor-pointer overflow-hidden rounded-2xl border border-white-2 dark:border-white/15 bg-[#f2f2f20c] p-1.5 shadow-2xl lg:h-[560px] lg:rounded-3xl lg:p-2 group"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {/* Top gradient line */}
                    <div
                      className="absolute inset-x-0 top-0 h-px"
                      style={{
                        background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 5%, rgba(255, 255, 255, 0.8) 35%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.8) 65%, rgba(0, 0, 0, 0) 95%)'
                      }}
                    />

                    <div className="group relative flex size-full flex-col items-center justify-between overflow-hidden rounded-xl lg:rounded-2xl dark:bg-linear-to-b from-black/40 to-transparent transition-all duration-300">
                      {/* Background gradient */}
                      <div
                        className="absolute inset-0 -z-1"
                        style={getGradientStyle(project.color)}
                      />

                      {/* Inner gradient line */}
                      <div
                        className="absolute inset-x-0 top-px z-10 h-[0.8px] opacity-70"
                        style={{
                          background: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 20%, rgb(255, 255, 255) 50%, rgba(0, 0, 0, 0) 80%)'
                        }}
                      />

                      {/* Project title (hidden on mobile, shown on desktop) */}
                      <div className="hidden w-full flex-row items-center justify-between px-12 py-8 lg:flex text-white/90">
                        <h3 className="max-w-[90%] text-2xl">{project.shortDes}</h3>
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
                          className="lucide lucide-arrow-right size-6 text-white/70"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>

                      {/* Project image */}
                      <Image
                        alt={project.title}
                        src={project.img.src}
                        width={project.img.width}
                        height={project.img.height}
                        className={`lg:group-hover:translsate-y-10 w-full max-w-[85%] translate-y-5 -rotate-3 rounded-t-lg border-[1.5px] border-white/20 transition-all duration-300 will-change-transform lg:block lg:rotate-0 lg:group-hover:scale-[1.15] lg:group-hover:-rotate-3 ${getShadowColor(project.color)}`}
                        style={{
                          color: 'transparent',
                          backgroundSize: 'cover',
                          backgroundPosition: '50% 50%',
                          backgroundRepeat: 'no-repeat',
                          backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 200'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='none' style='filter: url(%23b);' href='${project.img.blurDataURL}'/%3E%3C/svg%3E")`
                        }}
                      />
                    </div>
                  </Link>

                  {/* Project Details - Mobile/Tablet Only */}
                  <div className="mt-6 flex flex-col lg:hidden">
                    <div className="flex">
                      {/* Color indicator line */}
                      <div
                        aria-hidden="true"
                        className="my-1 mr-4 h-1 min-w-6 rounded-full"
                        style={{
                          backgroundColor: getMainColor(project.color)
                        }}
                      />

                      <div className="flex flex-col items-start w-full">
                        <div className="flex items-center gap-3">
                          <h3 className="text-white text-xl md:text-2xl font-bold">
                            {project.title}
                          </h3>
                        </div>

                        <p className="text-white/70 my-2 text-sm md:text-base font-light">
                          {project.desc}
                        </p>

                        {/* Bullet points */}
                        <ul className="text-white/90 mt-4 flex flex-col gap-y-2">
                          {project.bulletPoints.map((point, pointIndex) => (
                            <li key={pointIndex} className="flex items-start text-xs md:text-sm">
                              <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                                className="mt-0.5 mr-2 size-4 md:size-5 shrink-0"
                                style={{
                                  fill: getMainColor(project.color)
                                }}
                              >
                                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                              </svg>
                              {point}
                            </li>
                          ))}
                        </ul>

                        {/* Tech stack badges */}
                        <div className="mt-6 flex flex-wrap gap-2 md:gap-3">
                          {project.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="inline-flex items-center justify-center rounded-lg border px-2.5 py-1 md:px-3 text-xs md:text-sm w-fit whitespace-nowrap shrink-0 gap-1.5 md:gap-2 text-white/90 bg-black/20 border-white/20"
                            >
                              <img
                                height="14"
                                width="14"
                                src={getSkillIconUrl(tech.icon)}
                                alt={tech.name}
                                className="md:h-4 md:w-4"
                              />
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Project Details */}
          <div className="hidden py-4 lg:sticky lg:block lg:w-[35%]">
            <div className="sticky top-40">
              <div className="flex">
                {/* Color indicator line */}
                <div
                  aria-hidden="true"
                  className="my-4 mr-4 h-1 min-w-6 rounded-full"
                  style={{ 
                    backgroundColor: getMainColor(projects[activeProject].color)
                  }}
                />
                
                <div className="flex flex-col items-start lg:h-[500px]">
                  <div className="flex items-center gap-3">
                    <h3 className="text-white text-2xl font-bold">
                      {projects[activeProject].title}
                    </h3>
                  </div>
                  
                  <p className="text-white/70 my-2 text-base font-light">
                    {projects[activeProject].desc}
                  </p>
                  
                  {/* Bullet points */}
                  <ul className="text-white/90 mt-4 flex flex-col gap-y-2 text-base">
                    {projects[activeProject].bulletPoints.map((point, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          className="mt-1 mr-2 size-5 shrink-0"
                          style={{ 
                            fill: getMainColor(projects[activeProject].color)
                          }}
                        >
                          <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Tech stack badges */}
                  <div className="mt-10 flex flex-wrap gap-3 text-sm">
                    {projects[activeProject].techStack.map((tech, index) => (
                      <div
                        key={index}
                        className=""
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible ? 'scale(1)' : 'scale(0.8)',
                          transition: `all 0.6s ease-out ${index * 0.1}s`
                        }}
                      >
                        <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 text-white/90 bg-black/20 border-white/20 hover:bg-white/10 transition-colors">
                          <img
                            height="16"
                            width="16"
                            src={getSkillIconUrl(tech.icon)}
                            alt={tech.name}
                          />
                          {tech.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Floating VIEW DETAILS Sticker */}
      {hoveredProject !== null && (
        <div
          className="fixed pointer-events-none z-50 instant-blur"
          style={{
            left: mousePosition.x || 400,
            top: mousePosition.y || 300,
            transform: 'translate(-50%, -50%) scale(1)',
            animation: 'fadeInScale 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
            transition: 'left 0.1s ease-out, top 0.1s ease-out'
          }}
        >
          <div 
            className="relative w-28 h-28 rounded-full flex items-center justify-center hover:scale-105 transition-transform duration-300 sticker-blur"
            style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Eye Icon with stronger blur background */}
            <div 
              className="relative z-20 w-12 h-12 rounded-full flex items-center justify-center eye-blur"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(30px)',
                WebkitBackdropFilter: 'blur(30px)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)'
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </div>
            
            {/* Circular VIEW DETAILS Text */}
            <div className="absolute inset-0 w-full h-full animate-spin" style={{ animationDuration: '10s' }}>
              <svg className="w-full h-full" viewBox="0 0 112 112">
                <defs>
                  <path id="circle" d="M 56,56 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0" />
                </defs>
                <text 
                  className="fill-white font-medium"
                  style={{ 
                    fontSize: '12px',
                    letterSpacing: '2px',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  <textPath href="#circle" startOffset="0%">
                    VIEW DETAILS ★ VIEW DETAILS ★ 
                  </textPath>
                </text>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}