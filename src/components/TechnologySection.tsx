"use client";

import Image from 'next/image';
import { useState, useRef } from 'react';
import GlobeScene from './GlobeScene';
import { useUIStore } from '@/store/useStore';

// Helper function to get Skill Icons URL
const getSkillIconUrl = (iconName: string): string => {
  return `https://skillicons.dev/icons?i=${iconName}`;
};

export default function TechnologySection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { setIsBookCallDrawerOpen } = useUIStore();

  const copyEmail = () => {
    navigator.clipboard.writeText('ravindraverma373@gmail.com');
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };
  const frontendTechs = [
    { name: 'ReactJS', icon: getSkillIconUrl('react') },
    { name: 'NextJS', icon: getSkillIconUrl('nextjs') },
    { name: 'TypeScript', icon: getSkillIconUrl('ts') },
    { name: 'Tailwind CSS', icon: getSkillIconUrl('tailwind') },
    { name: 'Notion', icon: getSkillIconUrl('notion') },
    { name: 'Sentry', icon: getSkillIconUrl('sentry') },
  ];

  const backendTechs = [
    { name: 'NodeJS', icon: getSkillIconUrl('nodejs') },
    { name: 'ExpressJS', icon: getSkillIconUrl('express') },
    { name: 'PostgreSQL', icon: getSkillIconUrl('postgresql') },
    { name: 'MongoDB', icon: getSkillIconUrl('mongodb') },
    { name: 'Prisma', icon: getSkillIconUrl('prisma') },
    { name: 'Zustand', icon: getSkillIconUrl('redux') },
  ];

  const tools = [
    { name: 'pnpm', icon: getSkillIconUrl('pnpm') },
    { name: 'Bun', icon: getSkillIconUrl('bun') },
    { name: 'Git', icon: getSkillIconUrl('git') },
    { name: 'GitHub', icon: getSkillIconUrl('github') },
    { name: 'Vercel', icon: getSkillIconUrl('vercel') },
    { name: 'AWS', icon: getSkillIconUrl('aws') },
    { name: 'Docker', icon: getSkillIconUrl('docker') },
    { name: 'Linux', icon: getSkillIconUrl('linux') }
  ];

  const TechBadge = ({ name, icon }: { name: string; icon: string }) => (
    <span className="inline-flex items-center justify-center rounded-lg border px-3 py-1 text-sm w-fit whitespace-nowrap shrink-0 gap-2 text-black dark:text-white border-white/20 dark:bg-neutral-900 dark:border-white/[0.14] bg-white/10 hover:bg-primary/90 transition-[color,box-shadow] overflow-hidden">
      <img height="14" width="14" alt={name} src={icon} className="w-4" />
      <span>{name}</span>
    </span>
  );

  return (
    <section className="my-12 md:my-16 lg:my-20 w-full">
      <div className="grid grid-cols-6 gap-4 md:max-w-full md:auto-rows-[19rem] mb-20 md:my-20">
        {/* Collaboration Card */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[1px_solid_rgba(255,255,255,.1)] border border-white/20 col-span-6 md:col-span-3 lg:col-span-4 max-md:h-[21rem]">
          <div className="size-full">
            <div className="absolute flex h-[300px] w-full flex-col">
              <div className="relative h-full [mask-image:linear-gradient(to_right,transparent,black_40%,black_60%,transparent)]">
                {/* Complex SVG Background */}
                <svg 
                  className="absolute top-0 left-1/2 -translate-x-1/2 [mask-image:linear-gradient(to_right,transparent,black_20%,black_90%,transparent)]"
                  width="704" 
                  height="250" 
                  viewBox="0 0 637 250"
                >
                  <g clipPath="url(#clip0_170_308)">
                    <g filter="url(#filter0_i_170_308)">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M-24.5145 175.237C5.95935 205.744 55.3673 205.744 85.8412 175.237C116.315 144.731 116.315 95.2694 85.8412 64.7626C55.3673 34.2558 5.95935 34.2558 -24.5145 64.7626L-79.6924 120L-24.5145 175.237ZM-30.1683 59.1027L-85.3462 114.34L-91 120L-85.3462 125.66L-30.1683 180.897C3.42807 214.53 57.8986 214.53 91.495 180.897C102.486 169.894 109.882 156.654 113.681 142.641C117.481 156.654 124.876 169.894 135.868 180.897C169.464 214.53 223.935 214.53 257.531 180.897L312.709 125.66L318.363 120L312.709 114.34L257.531 59.1027C223.935 25.47 169.464 25.47 135.868 59.1027C124.876 70.106 117.481 83.3459 113.681 97.359C109.882 83.3459 102.486 70.106 91.495 59.1027C57.8986 25.47 3.42807 25.47 -30.1683 59.1027ZM251.877 175.237C221.403 205.744 171.995 205.744 141.522 175.237C111.048 144.731 111.048 95.2694 141.522 64.7626C171.995 34.2558 221.403 34.2558 251.877 64.7626L307.055 120L251.877 175.237ZM385.118 175.237C415.592 205.744 465 205.744 495.474 175.237C525.948 144.731 525.948 95.2694 495.474 64.7626C465 34.2558 415.592 34.2558 385.118 64.7626L329.94 120L385.118 175.237Z"
                        fill="#2A2A2A" 
                        fillOpacity="0.3"
                      />
                    </g>
                    <mask id="path-2-inside-1_170_308" fill="white">
                      <path 
                        fillRule="evenodd" 
                        clipRule="evenodd"
                        d="M530.935 62.0924C527.084 67.0776 518.876 67.0706 515.032 62.0796C512.556 58.8646 509.846 55.772 506.902 52.8249C469.842 15.725 409.756 15.725 372.696 52.8249L362.342 63.1907C359.509 66.0262 355.041 66.2786 351.611 64.2065C341.932 58.3606 330.605 55 318.5 55C306.004 55 294.338 58.581 284.458 64.7802C281.014 66.9409 276.466 66.7264 273.593 63.8501L262.942 53.1878C226.082 16.2884 166.321 16.2884 129.462 53.1878C126.674 55.9787 124.097 58.9007 121.73 61.9341C117.882 66.8675 109.765 66.8619 105.928 61.9195C88.6146 39.6164 61.5624 25.266 31.1621 25.266C-21.1017 25.266 -63.4698 67.6799 -63.4698 120C-63.4698 172.32 -21.1017 214.734 31.1621 214.734C61.5623 214.734 88.6146 200.384 105.928 178.081C109.765 173.138 117.882 173.133 121.73 178.066C124.097 181.099 126.674 184.021 129.462 186.812C166.321 223.712 226.082 223.712 262.942 186.812L273.593 176.15C276.466 173.274 281.014 173.059 284.458 175.22C294.338 181.419 306.004 185 318.5 185C330.605 185 341.932 181.639 351.611 175.793C355.041 173.721 359.509 173.974 362.342 176.809L372.696 187.175C409.756 224.275 469.842 224.275 506.902 187.175C509.846 184.228 512.556 181.135 515.032 177.92C518.876 172.929 527.084 172.922 530.935 177.908C534.786 182.894 534.779 191.102 530.935 196.092C528.459 199.307 525.749 202.4 522.805 205.347C485.745 242.447 425.659 242.447 388.599 205.347L378.245 194.981C375.412 192.146 370.944 191.894 367.514 193.966C357.835 199.812 346.508 203.172 334.403 203.172C321.907 203.172 310.241 199.591 300.361 193.392C296.917 191.231 292.369 191.446 289.496 194.322L278.845 204.984C241.985 241.884 182.224 241.884 145.365 204.984C142.577 202.193 140 199.271 137.633 196.238C133.785 191.304 125.668 191.31 121.831 196.252C104.518 218.555 77.4656 232.906 47.0653 232.906C-5.1985 232.906 -47.5666 190.492 -47.5666 138.172C-47.5666 85.852 -5.1985 43.438 47.0653 43.438C77.4656 43.438 104.518 57.788 121.831 80.091C125.668 85.034 133.785 85.04 137.633 80.106C140 77.072 142.577 74.15 145.365 71.359C182.224 34.459 241.985 34.459 278.845 71.359L289.496 82.022C292.369 84.898 296.917 85.113 300.361 82.952C310.241 76.753 321.907 73.172 334.403 73.172C346.508 73.172 357.835 76.532 367.514 82.378C370.944 84.45 375.412 84.198 378.245 81.363L388.599 70.997C425.659 33.897 485.745 33.897 522.805 70.997C525.749 73.944 528.459 77.037 530.935 80.252C534.779 85.241 534.786 93.449 530.935 98.438Z"
                      />  
                    </mask>
                    <path
                      d="M506.902 52.8249L506.194 53.5316L506.194 53.5316L506.902 52.8249ZM372.696 52.8249L371.989 52.1181L371.989 52.1181L372.696 52.8249ZM262.942 53.1878L262.234 53.8945L262.234 53.8945L262.942 53.1878ZM129.462 53.1878L128.754 52.4811L128.754 52.4811L129.462 53.1878ZM129.462 186.812L128.754 187.519L128.754 187.519L129.462 186.812ZM262.942 186.812L262.234 186.106L262.234 186.106L262.942 186.812ZM372.696 187.175L371.989 187.882L371.989 187.882L372.696 187.175ZM506.902 187.175L507.609 187.882L507.609 187.882L506.902 187.175ZM515.032 177.92L515.824 178.531L515.032 177.92ZM530.935 177.908L531.726 177.296L530.935 177.908ZM351.611 175.793L352.128 176.649L351.611 175.793ZM362.342 176.809L363.049 176.103L362.342 176.809ZM273.593 176.15L272.885 175.443L273.593 176.15ZM284.458 175.22L283.926 176.067L284.458 175.22ZM515.032 62.0796L515.824 61.4694L515.032 62.0796ZM530.935 62.0924L531.726 62.7038L530.935 62.0924ZM105.928 178.081L105.138 177.467L105.928 178.081ZM121.831 80.091L121.041 79.477L121.831 80.091ZM137.633 80.106L136.843 79.492L137.633 80.106ZM145.365 71.359L144.657 70.652L145.365 71.359ZM278.845 71.359L278.137 70.652L278.845 71.359ZM289.496 82.022L288.788 81.315L289.496 82.022ZM300.361 82.952L299.829 83.799L300.361 82.952ZM334.403 73.172L334.403 72.172L334.403 73.172ZM367.514 82.378L366.997 83.234L367.514 82.378ZM378.245 81.363L377.538 80.656L378.245 81.363ZM388.599 70.997L387.891 70.29L388.599 70.997ZM522.805 70.997L522.097 70.29L522.805 70.997ZM530.935 80.252L530.144 79.641L530.935 80.252Z"
                      fill="#505050" 
                      fillOpacity="0.2" 
                      mask="url(#path-2-inside-1_170_308)"
                    />
                  </g>
                  <defs>
                    <filter id="filter0_i_170_308" x="-91" y="33.8782" width="818" height="173.744" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                      <feOffset dy="2"/>
                      <feGaussianBlur stdDeviation="0.75"/>
                      <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                      <feBlend mode="normal" in2="shape" result="effect1_innerShadow_170_308"/>
                    </filter>
                    <clipPath id="clip0_170_308">
                      <rect width="637" height="250" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
                
                {/* Profile Image with Circle */}
                <span className="absolute top-2.5 left-1/2 -translate-x-1/2">
                  <div className="relative mt-9">
                    <svg 
                      className="w-[148px] h-[148px]" 
                      viewBox="0 0 148 148" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_i_0_1)">
                        <rect x="16" y="16" width="116" height="116" rx="58" fill="#2A2A2A"/>
                        <rect
                          className="stroke-[#494949] transition-colors delay-200 duration-500 group-hover:stroke-indigo-400"
                          x="16.75" 
                          y="16.75" 
                          width="114.5" 
                          height="114.5" 
                          rx="57.25"
                          stroke="#494949" 
                          strokeWidth="1.5"
                        />
                      </g>
                      <defs>
                        <filter id="filter0_i_0_1" x="0" y="0" width="148" height="148" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                          <feOffset dy="2"/>
                          <feGaussianBlur stdDeviation="0.75"/>
                          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                        </filter>
                      </defs>
                    </svg>
                    <Image
                      className="absolute top-1/2 left-1/2 h-[100px] w-[100px] -translate-x-1/2 -translate-y-1/2 transform rounded-full"
                      src="/assets/profile/ravi.jpeg"
                      alt="Ravindra Verma picture"
                      width={100}
                      height={100}
                    />
                  </div>
                </span>
                
                {/* Connection Avatars - Only visible on hover with smooth animation */}
                <span className="hidden lg:block">
                  {/* Curved connection lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none group-hover:opacity-100 opacity-0 transition-opacity duration-500" style={{zIndex: 5}}>
                    {/* Top Left curve */}
                    <path d="M 50% 50% Q 30% 30% 20% 15%" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                    {/* Top Right curve */}
                    <path d="M 50% 50% Q 70% 30% 80% 15%" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                    {/* Bottom Left curve */}
                    <path d="M 50% 50% Q 25% 65% 15% 80%" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                    {/* Bottom Right curve */}
                    <path d="M 50% 50% Q 75% 70% 85% 85%" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="none" />
                  </svg>
                  
                  {/* Avatar 1 - Top Left (on curve endpoint) */}
                  <div className="absolute w-16 h-16 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-75 transition-all duration-500 ease-out" style={{top: '10%', left: '15%', zIndex: 10, transitionDelay: '100ms'}}>
                    <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-[#2A2A2A] p-1 shadow-xl">
                      <img className="w-full h-full rounded-full object-cover" src="https://randomuser.me/api/portraits/men/32.jpg" alt="Connection" />
                    </div>
                  </div>
                  
                  {/* Avatar 2 - Top Right (on curve endpoint) */}
                  <div className="absolute w-16 h-16 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-75 transition-all duration-500 ease-out" style={{top: '10%', left: '80%', zIndex: 10, transitionDelay: '200ms'}}>
                    <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-[#2A2A2A] p-1 shadow-xl">
                      <img className="w-full h-full rounded-full object-cover" src="https://randomuser.me/api/portraits/women/24.jpg" alt="Connection" />
                    </div>
                  </div>
                  
                  {/* Avatar 3 - Bottom Left (on curve endpoint) */}
                  <div className="absolute w-16 h-16 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-75 transition-all duration-500 ease-out" style={{top: '80%', left: '10%', zIndex: 10, transitionDelay: '300ms'}}>
                    <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-[#2A2A2A] p-1 shadow-xl">
                      <img className="w-full h-full rounded-full object-cover" src="https://randomuser.me/api/portraits/men/7.jpg" alt="Connection" />
                    </div>
                  </div>
                  
                  {/* Avatar 4 - Bottom Right (on curve endpoint) */}
                  <div className="absolute w-16 h-16 group-hover:opacity-100 group-hover:scale-100 opacity-0 scale-75 transition-all duration-500 ease-out" style={{top: '85%', left: '85%', zIndex: 10, transitionDelay: '400ms'}}>
                    <div className="w-16 h-16 rounded-full border-2 border-white/40 bg-[#2A2A2A] p-1 shadow-xl">
                      <img className="w-full h-full rounded-full object-cover" src="https://randomuser.me/api/portraits/women/35.jpg" alt="Connection" />
                    </div>
                  </div>
                </span>
              </div>
            </div>
          </div>
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transform-gpu transition-all duration-300 group-hover:-translate-y-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart-handshake size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" aria-hidden="true">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66"></path>
              <path d="m18 15-2-2"></path>
              <path d="m15 18-2-2"></path>
            </svg>
            <h3 className="max-w-lg text-neutral-400">Collaboration</h3>
            <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">I prioritize client collaboration, fostering open communication</p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={() => setIsBookCallDrawerOpen(true)}
              className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 pointer-events-auto"
            >
              Book a call
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>

        {/* Technology Card */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[1px_solid_rgba(255,255,255,.1)] border border-white/20 col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:min-h-[35rem]">
          <div className="size-full">
            <div className="absolute inset-0">
              <div className="relative size-full">
                <h3 className="absolute top-10 w-full bg-gradient-to-b from-[#fd81e298] to-[#da7bda] bg-clip-text px-4 text-center text-3xl leading-[100%] font-bold tracking-tighter text-transparent select-none dark:from-[#edeffd]">
                  Passionate about cutting-edge technologies
                </h3>
                <div className="relative flex h-full flex-col items-center justify-end">
                  <div className="absolute -bottom-32 size-48 rounded-full bg-purple-300 blur-3xl"></div>
                  <div className="z-20 mb-8 flex flex-col gap-y-10 lg:mb-16">
                    {/* Frontend Technologies */}
                    <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row">
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                        {frontendTechs.map((tech, index) => (
                          <TechBadge key={`frontend-${index}`} name={tech.name} icon={tech.icon} />
                        ))}
                      </div>
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                        {frontendTechs.map((tech, index) => (
                          <TechBadge key={`frontend-dup-${index}`} name={tech.name} icon={tech.icon} />
                        ))}
                      </div>
                    </div>
                    
                    {/* Backend Technologies */}
                    <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row">
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row">
                        {backendTechs.map((tech, index) => (
                          <TechBadge key={`backend-${index}`} name={tech.name} icon={tech.icon} />
                        ))}
                      </div>
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row">
                        {backendTechs.map((tech, index) => (
                          <TechBadge key={`backend-dup-${index}`} name={tech.name} icon={tech.icon} />
                        ))}
                      </div>
                    </div>

                    {/* Tools */}
                    <div className="group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)] flex-row">
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                        {tools.map((tool, index) => (
                          <TechBadge key={`tool-${index}`} name={tool.name} icon={tool.icon} />
                        ))}
                      </div>
                      <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row">
                        {tools.map((tool, index) => (
                          <TechBadge key={`tool-dup-${index}`} name={tool.name} icon={tool.icon} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Concentric Circles */}
                  <div className="absolute bottom-0 z-10 flex items-center justify-center">
                    {[0, 4, 8, 12, 16, 20, 24, 28, 32, 36].map((size, index) => (
                      <div
                        key={index}
                        className="absolute left-1/2 -translate-x-1/2 rounded-full border border-slate-200 dark:border-neutral-700"
                        style={{
                          width: `${size}rem`,
                          height: `${size}rem`,
                          opacity: 1 - (index * 0.1)
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Mock Browser */}
                  <div className="group relative bottom-0 z-20 h-44 w-56 overflow-hidden rounded-t-md border border-b-0 border-neutral-200 transition-all duration-300 group-hover:translate-y-4 dark:border-neutral-800">
                    <div className="relative z-30 flex h-3 w-full items-center justify-start gap-x-1 bg-gray-100 px-2 dark:bg-neutral-800">
                      <div className="size-1.5 rounded-full bg-red-500"></div>
                      <div className="size-1.5 rounded-full bg-slate-300"></div>
                      <div className="size-1.5 rounded-full bg-green-500"></div>
                    </div>
                    <div className="relative flex h-full flex-1 flex-col items-center bg-neutral-300 dark:bg-neutral-900">
                      <div className="mt-2 flex h-4 w-[4rem] items-center justify-end rounded-full bg-neutral-400 px-1 transition-all duration-300 group-hover:w-[6rem] group-hover:bg-neutral-500 dark:bg-neutral-600 dark:group-hover:bg-neutral-800">
                        <div className="h-2 w-2 rounded-full bg-neutral-50 transition-all duration-300 group-hover:bg-neutral-200 dark:bg-neutral-900"></div>
                      </div>
                      <div className="mt-6">
                        <p className="relative z-20 bg-gradient-to-b from-slate-700 to-slate-800 bg-clip-text text-center text-base font-bold text-transparent dark:from-slate-100 dark:to-slate-400">
                          Websites that stand out <br />and make a difference
                        </p>
                        <div className="mt-4 flex justify-center gap-x-2">
                          <button className="w-14 rounded-sm bg-gradient-to-br from-purple-500 to-indigo-600 py-1 text-[6px] text-white hover:bg-gradient-to-br hover:from-purple-600 hover:to-indigo-700">
                            Get started
                          </button>
                          <button className="w-14 rounded-sm border border-slate-600 py-1 text-[6px] text-black hover:border-slate-200 dark:text-white">
                            Read More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>

        {/* Remote Work Card */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[1px_solid_rgba(255,255,255,.1)] border border-white/20 col-span-6 md:col-span-3 lg:col-span-2 md:row-span-2 max-md:h-[32rem]">
          <div className="size-full relative">
            {/* Globe - Full background */}
            <div className="absolute inset-0">
              <GlobeScene />
            </div>

            {/* Title - Absolute positioned on top */}
            <h3 className="absolute top-6 left-0 right-0 w-full text-center text-2xl font-bold text-gray-300 z-10 mb-4">
              I'm very flexible with <span className="text-cyan-400">time zone communications</span>
            </h3>

            {/* Country Flags - Absolute positioned on top with more gap */}
            <div className="absolute top-24 left-0 right-0 flex justify-center gap-2 z-10">
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors backdrop-blur-sm">
                <span className="text-sm">🇬🇧</span>
                <span className="text-xs font-medium">UK</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 backdrop-blur-sm">
                <span className="text-sm">🇮🇳</span>
                <span className="text-xs font-medium">India</span>
              </button>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-800/50 text-white hover:bg-gray-700/50 transition-colors backdrop-blur-sm">
                <span className="text-sm">🇺🇸</span>
                <span className="text-xs font-medium">USA</span>
              </button>
            </div>
          </div>
          <div className="[mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] absolute inset-0 pointer-events-none"></div>
        </div>

        {/* Contact Card */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[1px_solid_rgba(255,255,255,.1)] border border-white/20 col-span-6 md:col-span-3 lg:col-span-2 max-md:h-[19rem]">
          <div className="size-full">
            <div className="flex size-full flex-col items-center justify-center bg-cover bg-center">
              <div className="absolute inset-0 z-[-1] h-[150px] w-full overflow-hidden bg-neutral-100/60 dark:bg-neutral-950/80 [mask-image:linear-gradient(rgb(0,0,0)_40%,rgba(0,0,0,0)_100%)] opacity-100">
                <Image
                  alt="crumpled paper texture"
                  loading="lazy"
                  className="pointer-events-none absolute inset-0 z-[-1] h-[450px] w-full object-cover mix-blend-overlay select-none"
                  src="/crumpled-paper.avif"
                  fill
                />
              </div>
              
              {/* A3 Logo with Wings */}
              <div className="relative mt-2 flex items-center justify-center">
                {/* Wings behind the logo */}
                <img 
                  aria-hidden="true" 
                  draggable="false" 
                  src="/assets/icons/wings.svg" 
                  alt="wings"
                  className="opacity-0 select-none dark:opacity-100" 
                />
                {/* Logo Image - Centered on top of wings */}
                <Image
                  src="/assets/logos/ChatGPT Image Nov 1, 2025, 02_49_17 PM-Photoroom.png"
                  alt="RV Logo"
                  width={70}
                  height={70}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] object-contain"
                />
              </div>
              
              <span 
                className="relative text-[rgb(0,0,0,65%)] dark:text-[rgb(255,255,255,90%)] w-full -translate-y-4 py-2 text-center text-3xl font-bold text-balance"
                style={{
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)'
                }}
              >
                Let's work together on your next project
              </span> 
              <div className="relative flex">
                <button
                  type="button"
                  onClick={copyEmail}
                  className="items-center gap-2 py-3 text-base font-light text-black dark:text-white/75 outline-hidden transition-all duration-300 cursor-pointer hover:text-black/60 dark:hover:text-white/90 flex w-full justify-center rounded-md bg-white/10 px-8 shadow-[inset_0_3px_10px_#ffffff3f]"
                >
                  {isCopied ? (
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
                      className="lucide lucide-check"
                      aria-hidden="true"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  ) : (
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
                  )}
                  {isCopied ? 'Copied!' : 'ravindraverma373@gmail.com'}
                </button>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>

        {/* Project Cards */}
        <div className="group relative flex size-full flex-col justify-between overflow-hidden rounded-xl shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[1px_solid_rgba(255,255,255,.1)] border border-white/20 col-span-6 md:col-span-6 lg:col-span-4 max-md:h-[21rem]">
          <div className="size-full">
            {/* Project Cards Scrolling Container */}
            <div 
              ref={scrollContainerRef}
              className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row absolute top-10 [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] [--duration:20s]"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div 
                className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee"
                style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
              >
                {/* Payment System Architecture */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Payment System Architecture</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.</blockquote>
                </figure>

                {/* Monitoring & Analytics Infrastructure */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Monitoring & Analytics Infrastructure</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Provides real-time insights into user behavior, system performance, and key business metrics.</blockquote>
                </figure>

                {/* Design System & UI Consistency */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Design System & UI Consistency</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Unified design assets, including logos and themes, ensuring consistent branding across the platform.</blockquote>
                </figure>

                {/* API Gateway & Documentation */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">API Gateway & Documentation</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.</blockquote>
                </figure>

                {/* User Onboarding Flow Design */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">User Onboarding Flow Design</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.</blockquote>
                </figure>
              </div>
              
              {/* Duplicate for seamless loop */}
              <div 
                className="flex shrink-0 justify-around [gap:var(--gap)] flex-row animate-marquee"
                style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
              >
                {/* Payment System Architecture */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Payment System Architecture</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Handles recurring payments, upgrades, downgrades, and cancellations seamlessly to enhance user experience.</blockquote>
                </figure>

                {/* Monitoring & Analytics Infrastructure */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Monitoring & Analytics Infrastructure</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Provides real-time insights into user behavior, system performance, and key business metrics.</blockquote>
                </figure>

                {/* Design System & UI Consistency */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">Design System & UI Consistency</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Unified design assets, including logos and themes, ensuring consistent branding across the platform.</blockquote>
                </figure>

                {/* API Gateway & Documentation */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">API Gateway & Documentation</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Guides developers to integrate with the SaaS platform efficiently, offering examples and best practices.</blockquote>
                </figure>

                {/* User Onboarding Flow Design */}
                <figure className="relative w-32 cursor-pointer overflow-hidden rounded-lg border border-neutral-200/50 bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:backdrop-blur-none dark:border-neutral-700/50 group/card blur-[2px] hover:blur-none">
                  <div className="flex flex-row items-center gap-2">
                    <div className="flex flex-col">
                      <figcaption className="text-sm font-medium dark:text-white">User Onboarding Flow Design</figcaption>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-xs">Step-by-step guides and interactive tutorials to help users get started and maximize platform benefits.</blockquote>
                </figure>
              </div>
            </div>
          </div>
          
          <div className="pointer-events-none z-10 flex flex-col gap-1 p-6 transform-gpu transition-all duration-300 group-hover:-translate-y-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-panels-top-left size-12 origin-left text-neutral-700 transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75" aria-hidden="true">
              <rect width="18" height="18" x="3" y="3" rx="2"></rect>
              <path d="M3 9h18"></path>
              <path d="M9 21V9"></path>
            </svg>
            <h3 className="max-w-lg text-neutral-400">The Inside Scoop</h3>
            <p className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">Currently building a SaaS Application</p>
          </div>
          <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <a href="/work" className="inline-flex cursor-pointer items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-8 rounded-md gap-1.5 px-3 pointer-events-auto">
              View Recent work
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right ml-2 size-4" aria-hidden="true">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] dark:group-hover:bg-neutral-800/10"></div>
        </div>
      </div>
    </section>
  );
}