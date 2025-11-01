'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback, memo } from 'react';
import ABLogo from './ABLogo';
import CommandIcon from './CommandIcon';
import { useUIStore, useNavigationStore } from '@/store/useStore';

// Constants
const NAV_ITEMS = [
  { name: 'Home', href: '/', page: 'home' },
  { name: 'About', href: '/about', page: 'about' },
  { name: 'Work', href: '/work', page: 'work' },
  { name: 'Blog', href: '/blog', page: 'blog' },
] as const;

const NOTCH_ITEMS = ['Home', 'About', 'Work', 'Blog', 'More'] as const;

const MORE_PAGES = ['/guestbook', '/bucket-list', '/uses', '/attribution', '/links'] as const;

const SPECIFICS_ITEMS = [
  { name: 'Guest Book', href: '/guestbook', description: 'Let me know you were here' },
  { name: 'Bucket List', href: '/bucket-list', description: 'Things to do at least once in my life' },
  { name: 'Uses', href: '/uses', description: 'A peek into my digital...' },
  { name: 'Attribution', href: '/attribution', description: 'Journey to create this site' },
] as const;

const MORE_ITEMS = [
  { name: 'Links', href: '/links', description: 'Schedule a meeting' },
  { name: 'Uses', href: '/uses', description: 'All my links are here' },
  { name: 'Attribution', href: '/attribution', description: 'Subscribe to updates' },
] as const;

const PATH_TO_PAGE_MAP = {
  '/': 'home',
  '/about': 'about',
  '/work': 'work',
  '/blog': 'blog',
} as const;

// Types
type TabType = 'quick-connect' | 'fill-form';
type PageType = 'home' | 'about' | 'work' | 'blog' | 'more';

interface NavItem {
  readonly name: string;
  readonly href: string;
  readonly page: string;
}

interface DropdownItem {
  readonly name: string;
  readonly href: string;
  readonly description: string;
}

const Navbar = memo(function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { currentPage, setCurrentPage, isBookCallDrawerOpen, setIsBookCallDrawerOpen } = useUIStore();
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useNavigationStore();
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [isCommandModalOpen, setIsCommandModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>('quick-connect');


  // Update current page based on pathname
  useEffect(() => {
    let page = PATH_TO_PAGE_MAP[pathname as keyof typeof PATH_TO_PAGE_MAP] || 'home';
    if (pathname.startsWith('/blog-details')) {
      page = 'blog';
    }
    setCurrentPage(page);
  }, [pathname, setCurrentPage]);

  const isActive = useCallback((page: string): boolean => {
    if (pathname.startsWith('/blog-details')) {
      return page === 'blog';
    }

    if (MORE_PAGES.includes(pathname as any)) {
      return page === 'more';
    }

    const currentPageFromPath = PATH_TO_PAGE_MAP[pathname as keyof typeof PATH_TO_PAGE_MAP] || 'home';
    return currentPageFromPath === page;
  }, [pathname]);

  const shouldShowNotch = useCallback((itemName: string, isItemActive: boolean): boolean => {
    return isItemActive && NOTCH_ITEMS.includes(itemName as any);
  }, []);

  // Close dropdown when clicking outside or moving mouse away
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMoreDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-dropdown]')) {
          setIsMoreDropdownOpen(false);
        }
      }
    };

    const handleMouseLeave = (event: MouseEvent) => {
      if (isMoreDropdownOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-dropdown]')) {
          setIsMoreDropdownOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isMoreDropdownOpen]);

  // Close command modal when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isCommandModalOpen) {
        const target = event.target as Element;
        if (!target.closest('[data-command-modal]')) {
          setIsCommandModalOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isCommandModalOpen]);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCommandModalOpen(false);
        setIsMoreDropdownOpen(false);
        setIsBookCallDrawerOpen(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        setIsCommandModalOpen(true);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close book call drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isBookCallDrawerOpen && !target.closest('[data-book-call-drawer]')) {
        setIsBookCallDrawerOpen(false);
      }
    };

    if (isBookCallDrawerOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isBookCallDrawerOpen]);


  return (
    <>
      {/* Full-width blur background with gradient fade */}
      <div
        className="fixed inset-x-0 top-0 z-5000 backdrop-blur-md bg-white/5 dark:bg-black/5"
        style={{
          height: '165px',
          maskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0) 100%)',
        }}
      ></div>

      {/* Navbar content container */}
      <nav className="fixed inset-x-0 top-2.5 z-5000 mx-auto mt-1.5 flex w-full max-w-7xl items-center justify-between px-6 py-1.5 pb-6 pr-4 lg:top-4">
        <div className="relative z-10 flex w-full items-center justify-between">
      {/* Left Side - AB Logo */}
      <Link href="/" className="flex items-center justify-center drop-shadow-xl delay-200">
        <ABLogo size={55} />
      </Link>

      {/* Center - Desktop Navigation */}
      <div className="justify-center absolute top-1/2 left-1/2 hidden w-fit -translate-x-1/2 -translate-y-1/2 rounded-full backdrop-blur-md md:flex" data-dropdown>
        <ul className="relative hidden items-center space-x-1 rounded-full border border-white/10 bg-white/10 px-1.5 py-1 backdrop-blur-md md:flex">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.page) || (item.name === 'Home' && pathname === '/');
            const showNotch = shouldShowNotch(item.name, active);
            
            return (
              <li key={item.name} className="relative list-none">
                <Link
                  href={item.href}
                  className={`relative z-10 block px-4 py-1.5 text-sm font-light transition hover:text-white ${
                    active ? 'text-white' : 'text-white/70'
                  }`}
                >
                  {item.name}
                </Link>
                {showNotch && (
                  <span className="bg-white/10 absolute inset-0 z-0 w-full rounded-full">
                    <div className="bg-white absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full" style={{backgroundColor: 'white'}}></div>
                  </span>
                )}
              </li>
            );
          })}
          
          {/* More Dropdown Button */}
          <li className="relative list-none">
            <button
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
              className={`relative z-10 block px-4 py-1.5 text-sm font-light transition hover:text-white ${
                isActive('more') ? 'text-white' : 'text-white/70'
              }`}
            >
              More
            </button>
            {shouldShowNotch('More', isActive('more')) && (
              <span className="bg-white/10 absolute inset-0 z-0 w-full rounded-full">
                <div className="bg-white absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full" style={{backgroundColor: 'white'}}></div>
              </span>
            )}
          </li>
          <li className="list-none">
            <button 
              onClick={() => setIsBookCallDrawerOpen(true)}
              className="items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light whitespace-nowrap text-white/70 transition-all duration-300 hover:bg-white/15 hover:text-white/90">
              Book a Call
              <div
                aria-hidden="true"
                className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
                style={{ backgroundColor: 'white' }}
              ></div>
            </button>
          </li>
        </ul>
        
        {/* More Dropdown */}
        <AnimatePresence>
          {isMoreDropdownOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onMouseEnter={() => setIsMoreDropdownOpen(true)}
              onMouseLeave={() => setIsMoreDropdownOpen(false)}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-0.5 w-[715px] z-[9999]"
            >
              <div className="bg-black border border-white/10 rounded-2xl p-[10px] shadow-xl h-[250px]">
                <div className="grid grid-cols-3 gap-[10px] h-full">
                  {/* Section 1 - Guest Book */}
                  <div className="flex flex-col h-full">
                    <Link
                      href="/guestbook"
                      className="group relative flex flex-col justify-end rounded-xl h-full overflow-hidden border border-white/30 bg-gray-800 transition-all duration-300"
                      style={{
                        backgroundImage: "url('/assets/illustrations/graduation.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => {
                        setIsMoreDropdownOpen(false);
                        router.push('/guestbook');
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: "url('/assets/illustrations/graduation.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-3">
                        <h3 className="text-white font-semibold text-lg">Guest Book</h3>
                        <p className="text-white/80 text-sm mt-1">Let me know you were here</p>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Section 2 - Bucket List */}
                  <div className="flex flex-col h-full">
                    <Link
                      href="/bucket-list"
                      className="group relative flex flex-col justify-end rounded-xl h-full overflow-hidden border border-white/30 bg-gray-800 transition-all duration-300"
                      style={{
                        backgroundImage: "url('/assets/illustrations/travel.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                      onClick={() => {
                        setIsMoreDropdownOpen(false);
                        router.push('/bucket-list');
                      }}
                    >
                      <div 
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                          backgroundImage: "url('/assets/illustrations/travel.jpg')",
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="relative z-10 p-3">
                        <h3 className="text-white font-semibold text-lg">Bucket List</h3>
                        <p className="text-white/80 text-sm mt-1">Things to do at least once in my life</p>
                      </div>
                    </Link>
                  </div>
                  
                  {/* Section 3 - List Items */}
                  <div className="flex flex-col h-full">
                    <div className="bg-black h-full flex flex-col">
                      <div className="flex flex-col h-full gap-2">
                        {MORE_ITEMS.map((item) => (
                          <button
                            key={item.name}
                            className="flex items-center gap-3 p-2 rounded-lg bg-black border border-white/30 hover:bg-gray-900 transition-all duration-200 group flex-1"
                            onClick={() => {
                              setIsMoreDropdownOpen(false);
                              if (item.name === 'Links') {
                                router.push('/links');
                              } else if (item.name === 'Uses') {
                                router.push('/uses');
                              } else if (item.name === 'Attribution') {
                                router.push('/attribution');
                              }
                            }}
                          >
                            {/* Icon Container */}
                            <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                              {item.name === 'Links' && (
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                              )}
                              {item.name === 'Uses' && (
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                                </svg>
                              )}
                              {item.name === 'Attribution' && (
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                              )}
                            </div>
                            
                            {/* Text Content */}
                            <div className="flex flex-col">
                              <span className="text-white font-medium text-sm group-hover:text-white transition-colors">
                                {item.name}
                              </span>
                              <span className="text-white/60 text-xs">
                                {item.description}
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Right Side - Command Icon & Mobile Menu */}
      <div className="flex items-center gap-2 delay-200">
        {/* Command Icon Button */}
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground dark:hover:bg-accent/50 size-9 group rounded-2xl hover:bg-white/5"
          aria-label="Open command palette"
          onClick={() => setIsCommandModalOpen(true)}
        >
          <CommandIcon className="mx-0 size-5" size={36} />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] hover:text-accent-foreground dark:hover:bg-accent/50 size-9 group rounded-2xl hover:bg-white/5 md:hidden"
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          onClick={toggleMobileMenu}
        >
          {/* Mobile Menu Icon */}
          <svg
            className={`pointer-events-none size-6 transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45' : ''
            }`}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12"
              className={`origin-center transition-all duration-300 ${
                isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-[7px]'
              }`}
            />
            <path
              d="M4 12H20"
              className={`origin-center transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <path
              d="M4 12H20"
              className={`origin-center transition-all duration-300 ${
                isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-[7px]'
              }`}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-1/2 -translate-x-1/2 w-full max-w-sm mt-4 md:hidden z-[9999]"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-4">
              <div className="space-y-2">
                {NAV_ITEMS.map((item) => {
                  const active = isActive(item.page);
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={closeMobileMenu}
                      className={`block px-4 py-3 text-sm font-light transition rounded-xl ${
                        active 
                          ? 'text-white bg-white/10' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
                
                {/* More Dropdown Button for Mobile */}
                <div>
                  <button
                    onClick={() => setIsMoreDropdownOpen(!isMoreDropdownOpen)}
                    className={`w-full text-left px-4 py-3 text-sm font-light transition rounded-xl ${
                      isActive('more') 
                        ? 'text-white bg-white/10' 
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    More
                  </button>
                  {isMoreDropdownOpen && (
                    <div className="ml-4 mt-2 space-y-4">
                      {/* Specifics Section */}
                      <div>
                        <h4 className="text-white font-medium text-sm mb-2">Specifics</h4>
                        <div className="space-y-1">
                          {SPECIFICS_ITEMS.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* More Section */}
                      <div>
                        <h4 className="text-white font-medium text-sm mb-2">More</h4>
                        <div className="space-y-1">
                          {MORE_ITEMS.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              onClick={closeMobileMenu}
                              className="block px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <button 
                  onClick={() => {
                    setIsBookCallDrawerOpen(true);
                    closeMobileMenu();
                  }}
                  className="w-full px-4 py-3 text-sm font-light text-white/70 transition hover:text-white hover:bg-white/5 rounded-xl">
                  Book a Call
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Modal */}
      <AnimatePresence>
        {isCommandModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}
            className="fixed inset-0 z-[10000] flex items-start justify-center pt-[20vh]"
            data-command-modal
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              animate={{ opacity: 1, backdropFilter: 'blur(4px)' }}
              exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
              transition={{ duration: 0.1 }}
              onClick={() => setIsCommandModalOpen(false)}
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.1 }}
              className="relative w-full max-w-2xl mx-4"
            >
              <div className="bg-black border border-white/20 rounded-2xl shadow-2xl overflow-hidden">
                {/* Search Input */}
                <div className="flex items-center gap-3 p-4 border-b border-white/10">
                  <svg className="w-5 h-5 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Type a command or search..."
                    className="flex-1 bg-transparent text-white placeholder-white/60 outline-none text-lg"
                    autoFocus
                  />
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
                    <span>to close</span>
                  </div>
                </div>

                {/* Command List */}
                <div className="relative max-h-96 overflow-y-scroll scrollbar-thin border border-white/10 rounded-lg">
                  {/* Navigation Section */}
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-medium text-white/60 uppercase tracking-wider">
                      Navigation
                    </div>
                    <div className="space-y-1">
                      {NAV_ITEMS.map((item) => {
                        const isActive = pathname === item.href || (item.name === 'Home' && pathname === '/');
                        return (
                          <button
                            key={item.name}
                            className="w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors h-[50px]"
                            onClick={() => {
                              setIsCommandModalOpen(false);
                              router.push(item.href);
                            }}
                          >
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isActive ? 'bg-white' : 'bg-white/10'}`}>
                              {item.name === 'Home' && (
                                <svg className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                              )}
                              {item.name === 'About' && (
                                <svg className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                                </svg>
                              )}
                              {item.name === 'Work' && (
                                <svg className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                              )}
                              {item.name === 'Blog' && (
                                <svg className={`w-4 h-4 ${isActive ? 'text-black' : 'text-white'}`} fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" />
                                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-1.5 1.5h-1.5v-9z" />
                                </svg>
                              )}
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-white/60">Go to {item.name.toLowerCase()} page</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* More Section */}
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-medium text-white/60 uppercase tracking-wider">
                      More
                    </div>
                    <div className="space-y-1">
                      {MORE_ITEMS.map((item) => (
                        <button
                          key={item.name}
                          className="w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors h-[50px]"
                          onClick={() => {
                            setIsCommandModalOpen(false);
                            router.push(item.href);
                          }}
                        >
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            {item.name === 'Links' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                              </svg>
                            )}
                            {item.name === 'Uses' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                              </svg>
                            )}
                            {item.name === 'Attribution' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{item.name}</div>
                            <div className="text-sm text-white/60">{item.description}</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Additional Commands Section for Testing Scrollbar */}
                  <div className="p-2">
                    <div className="px-3 py-2 text-xs font-medium text-white/60 uppercase tracking-wider">
                      Additional Commands
                    </div>
                    <div className="space-y-1">
                      {['Settings', 'Help', 'Documentation', 'Changelog', 'Support', 'Feedback', 'Report Bug', 'Feature Request'].map((command) => (
                        <button
                          key={command}
                          className="w-full flex items-center gap-3 px-3 py-2 text-left text-white hover:bg-white/10 rounded-lg transition-colors h-[50px]"
                          onClick={() => {
                            setIsCommandModalOpen(false);
                          }}
                        >
                          <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                            {command === 'Settings' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Help' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Documentation' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Changelog' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Support' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-2 0c0 .993-.241 1.929-.668 2.754l-1.524-1.525a3.997 3.997 0 00.078-2.183l1.562-1.562C14.759 8.241 15.5 9.057 15.5 10zM9.25 4.25a4.5 4.5 0 00-4.5 4.5c0 .993.241 1.929.668 2.754l1.524-1.525a3.997 3.997 0 00-.078-2.183L7.25 4.25zM15.5 10a4.5 4.5 0 01-4.5 4.5c-.993 0-1.929-.241-2.754-.668l1.525-1.524a3.997 3.997 0 002.183.078l1.562 1.562C14.759 11.759 15.5 10.943 15.5 10zM4.25 9.25a4.5 4.5 0 014.5-4.5c.993 0 1.929.241 2.754.668l-1.525 1.524a3.997 3.997 0 00-2.183-.078L6.25 6.25C6.241 7.759 5.5 8.943 5.5 10c0 .993.241 1.929.668 2.754l1.524-1.525a3.997 3.997 0 00-.078-2.183L6.25 9.25z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Feedback' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Report Bug' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                              </svg>
                            )}
                            {command === 'Feature Request' && (
                              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{command}</div>
                            <div className="text-sm text-white/60">Additional {command.toLowerCase()} option</div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Footer */}
                <div className="px-4 py-3 border-t border-white/10">
                  <div className="flex items-center justify-between">
                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                      <a href="https://linkedin.com/in/ravindraverma" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </a>
                      <a href="https://github.com/ravindraverma" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      </a>
                      <a href="https://twitter.com/ravindraverma" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex items-center gap-2 text-xs text-white/40">
                      <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">↑</kbd>
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">↓</kbd>
                        <span>navigate</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">↵</kbd>
                        <span>select</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-xs">ESC</kbd>
                        <span>close</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Book a Call Drawer */}
      <AnimatePresence>
        {isBookCallDrawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[10001] flex items-end justify-center"
            data-book-call-drawer
          >
            {/* Backdrop */}
            <motion.div 
              className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsBookCallDrawerOpen(false)}
            />
            
            {/* Drawer Content */}
            <motion.div
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className={`relative w-[576px] max-w-[90vw] max-h-[90vh] bg-black border border-white/20 rounded-t-lg shadow-2xl ${
                activeTab === 'fill-form' ? 'h-[459px]' : 'h-[386px]'
              }`}
            >
              {/* Notch */}
              <div className="flex justify-center pt-2">
                <div className="w-16 h-1 bg-white/30 rounded-full"></div>
              </div>

              {/* Social Icons */}
              <div className="flex items-center justify-center gap-6 p-6">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-1"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect width="4" height="12" x="2" y="9"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-1"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-1"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
              </div>

              {/* Tab Navigation */}
              <div className="flex border-b border-white/10">
                <button 
                  onClick={() => setActiveTab('quick-connect')}
                  className={`flex-1 px-6 py-2 text-center font-medium transition-all duration-300 after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    activeTab === 'quick-connect' 
                      ? 'text-white after:scale-x-100' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Quick connect
                </button>
                <button 
                  onClick={() => setActiveTab('fill-form')}
                  className={`flex-1 px-6 py-2 text-center font-medium transition-all duration-300 after:bg-primary relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100 ${
                    activeTab === 'fill-form' 
                      ? 'text-white after:scale-x-100' 
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  Fill a form
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-6">
                {activeTab === 'quick-connect' && (
                  <div className="flex-1 flex flex-col p-6">
                    <div className="flex-1 grid grid-cols-2 gap-6">
                      {/* Email Card */}
                      <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-white font-medium mb-4">your.email@example.com</p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          Send message
                        </button>
                      </div>

                      {/* Call Card */}
                      <div className="bg-gray-800/50 border border-white/20 rounded-xl p-6 flex flex-col items-center text-center">
                        <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <p className="text-white font-medium mb-4">+91 98765 43210</p>
                        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                          Call now
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'fill-form' && (
                  <div className="flex-1 flex flex-col px-6">
                    <div className="flex-1 space-y-2">
                      {/* Name and Email - Side by Side */}
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">Name</label>
                          <input 
                            type="text" 
                            className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-white/80 mb-1">Email</label>
                          <input 
                            type="email" 
                            className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      {/* Message Box */}
                      <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Message</label>
                        <div className="relative">
                          <textarea 
                            rows={4}
                            maxLength={1000}
                            className="w-full px-3 py-2 bg-black/50 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-white/40 transition-colors resize-none"
                            placeholder="What would you like to discuss?"
                          />
                          <div className="absolute bottom-2 right-2 text-xs text-white/50">
                            0/1000
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Send Message Button */}
                    <div className="mt-4 flex justify-center">
                      <button 
                        type="submit"
                        className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send message
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
        </div>
      </nav>
    </>
  );
});

export default Navbar;