'use client';

import { useState, useEffect } from 'react';
import { useUIStore } from '../store/useStore';

export default function GetInTouchSection() {
  const { isBookCallDrawerOpen, setIsBookCallDrawerOpen } = useUIStore();
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 940, y: 300 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [velocity, setVelocity] = useState({ x: 0, y: 0 });
  const [lastPosition, setLastPosition] = useState({ x: 940, y: 300 });
  const [lastTime, setLastTime] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [buttonOffset, setButtonOffset] = useState({ x: 0, y: 0 });
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const [buttonCenter, setButtonCenter] = useState({ x: 0, y: 0 });
  const [magneticStrength, setMagneticStrength] = useState(0);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true);
    setIsAnimating(false);
    setDragStart({
      x: clientX - position.x,
      y: clientY - position.y,
    });
    setLastPosition({ x: position.x, y: position.y });
    setLastTime(Date.now());
    setVelocity({ x: 0, y: 0 });
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (!isDragging) return;
    
    const now = Date.now();
    const deltaTime = now - lastTime;
    
    const newX = clientX - dragStart.x;
    const newY = clientY - dragStart.y;
    
    // Calculate velocity
    if (deltaTime > 0) {
      const newVelocity = {
        x: (newX - lastPosition.x) / deltaTime,
        y: (newY - lastPosition.y) / deltaTime,
      };
      setVelocity(newVelocity);
    }
    
    // Constrain to the section bounds
    const section = document.getElementById('contact');
    if (section) {
      const rect = section.getBoundingClientRect();
      const maxX = rect.width - 100; // Account for sticker width
      const maxY = rect.height - 100; // Account for sticker height
      
      const constrainedPosition = {
        x: Math.max(0, Math.min(newX, maxX)),
        y: Math.max(0, Math.min(newY, maxY)),
      };
      
      setPosition(constrainedPosition);
      setLastPosition(constrainedPosition);
      setLastTime(now);
    }
  };

  const handleEnd = () => {
    setIsDragging(false);
    
    // Apply physics-based momentum (hockey puck effect)
    if (Math.abs(velocity.x) > 0.01 || Math.abs(velocity.y) > 0.01) {
      setIsAnimating(true);
      applyMomentum();
    }
  };

  const applyMomentum = () => {
    const friction = 0.985; // Very low friction like ice
    const maxVelocity = 8; // Much higher maximum velocity
    const minVelocity = 0.1; // Higher minimum velocity to stop animation
    
    let currentVelocity = { ...velocity };
    let currentPosition = { ...position };
    
    // Boost initial velocity significantly for hockey puck effect
    currentVelocity.x *= 2.5;
    currentVelocity.y *= 2.5;
    
    // Add some randomness to make it feel more natural
    currentVelocity.x += (Math.random() - 0.5) * 0.5;
    currentVelocity.y += (Math.random() - 0.5) * 0.5;
    
    const animate = () => {
      // Apply very light friction (like ice)
      currentVelocity.x *= friction;
      currentVelocity.y *= friction;
      
      // Limit maximum velocity
      currentVelocity.x = Math.max(-maxVelocity, Math.min(maxVelocity, currentVelocity.x));
      currentVelocity.y = Math.max(-maxVelocity, Math.min(maxVelocity, currentVelocity.y));
      
      // Update position with higher frame rate
      currentPosition.x += currentVelocity.x * 16; // 16ms frame time
      currentPosition.y += currentVelocity.y * 16;
      
      // Constrain to bounds
      const section = document.getElementById('contact');
      if (section) {
        const rect = section.getBoundingClientRect();
        const maxX = rect.width - 100;
        const maxY = rect.height - 100;
        
        currentPosition.x = Math.max(0, Math.min(currentPosition.x, maxX));
        currentPosition.y = Math.max(0, Math.min(currentPosition.y, maxY));
        
        // Bounce off walls with energy loss (like hockey puck hitting boards)
        if (currentPosition.x <= 0 || currentPosition.x >= maxX) {
          currentVelocity.x *= -0.6; // More energy loss on wall hits
          currentPosition.x = currentPosition.x <= 0 ? 0 : maxX; // Keep in bounds
        }
        if (currentPosition.y <= 0 || currentPosition.y >= maxY) {
          currentVelocity.y *= -0.6; // More energy loss on wall hits
          currentPosition.y = currentPosition.y <= 0 ? 0 : maxY; // Keep in bounds
        }
      }
      
      setPosition(currentPosition);
      
      // Continue animation if velocity is significant (hockey puck keeps moving)
      if (Math.abs(currentVelocity.x) > minVelocity || Math.abs(currentVelocity.y) > minVelocity) {
        requestAnimationFrame(animate);
      } else {
        setIsAnimating(false);
      }
    };
    
    requestAnimationFrame(animate);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStart(e.clientX, e.clientY);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    handleStart(touch.clientX, touch.clientY);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY);
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        const touch = e.touches[0];
        handleMove(touch.clientX, touch.clientY);
      };

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleEnd);
      document.addEventListener('touchmove', handleTouchMove, { passive: false });
      document.addEventListener('touchend', handleEnd);
      
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleEnd);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleEnd);
      };
    }
  }, [isDragging, dragStart]);

  const handleGetInTouch = () => {
    setIsBookCallDrawerOpen(true);
  };

  const handleButtonMouseEnter = (e: React.MouseEvent) => {
    setIsButtonHovered(true);
    setLastMousePosition({ x: e.clientX, y: e.clientY });
    
    // Get button center position
    const rect = e.currentTarget.getBoundingClientRect();
    setButtonCenter({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
  };

  const handleButtonMouseMove = (e: React.MouseEvent) => {
    if (!isButtonHovered) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const buttonCenterX = rect.left + rect.width / 2;
    const buttonCenterY = rect.top + rect.height / 2;
    
    // Calculate distance from button center
    const deltaX = e.clientX - buttonCenterX;
    const deltaY = e.clientY - buttonCenterY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    // Magnetic area radius (increased for larger magnetic zone)
    const magneticRadius = 180;
    
    if (distance < magneticRadius) {
      // Calculate magnetic strength (stronger when closer)
      const strength = 1 - (distance / magneticRadius);
      setMagneticStrength(strength);
      
      // Liquid-like movement with easing - focus on horizontal movement
      const maxOffsetX = 50; // Increased maximum horizontal offset
      const maxOffsetY = 12; // Slightly increased vertical offset
      const liquidFactor = 1.2; // Increased liquid movement factor
      
      // Apply liquid-like easing with emphasis on horizontal movement
      const easedX = deltaX * strength * liquidFactor;
      const easedY = deltaY * strength * liquidFactor * 0.4; // Slightly increase vertical movement
      
      const offsetX = Math.max(-maxOffsetX, Math.min(maxOffsetX, easedX));
      const offsetY = Math.max(-maxOffsetY, Math.min(maxOffsetY, easedY));
      
      setButtonOffset({ x: offsetX, y: offsetY });
    } else {
      setMagneticStrength(0);
    }
    
    setLastMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleButtonMouseLeave = () => {
    setIsButtonHovered(false);
    setMagneticStrength(0);
    // Smoothly return to original position with liquid-like easing
    setButtonOffset({ x: 0, y: 0 });
  };

  return (
    <section 
      id="contact"
      className="relative z-0 mt-40 flex w-full justify-center overflow-x-hidden bg-[url('/assets/illustrations/cta.avif')] bg-cover bg-center px-4 py-20"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-y-2 py-10 text-center lg:mx-0">
        {/* Animated "OPEN TO WORK" Circle */}
        <div 
          draggable={false}
          className={`absolute z-50 cursor-grab overflow-hidden rounded-full transition-transform ${
            isDragging ? 'scale-110 cursor-grabbing' : 'hover:scale-105'
          } ${isAnimating ? 'transition-all duration-75 ease-out' : ''}`}
          style={{
            left: position.x,
            top: position.y,
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            userSelect: 'none',
            touchAction: 'none',
            transform: 'translate(-50%, -50%)',
            animation: isDragging ? 'none' : 'spin 20s linear infinite',
            transition: isDragging ? 'none' : 'transform 0.2s ease-out',
            filter: isAnimating ? 'blur(0.5px)' : 'none'
          }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          tabIndex={0}
        >
          <div className="relative rounded-full bg-blue-700 p-1.5 leading-none font-medium">
            <div className="relative size-[95px] rounded-full bg-black p-2">
              <div className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 rounded-full">
                <svg 
                  className="transform-origin-center-center" 
                  viewBox="0 0 100 100" 
                  overflow="visible"
                  fill="black"
                  style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    inset: 0,
                    transformOrigin: 'center center'
                  }}
                >
                  <path 
                    id="curve-wnxkz4"
                    d="M 0 50 L 0 50 A 1 1 0 0 1 100 50 L 100 50 L 100 50 A 1 1 0 0 1 0 50 L 0 50"
                    strokeWidth="none" 
                    fill="transparent"
                  />
                  <text>
                    <textPath 
                      href="#curve-wnxkz4" 
                      startOffset="0" 
                      dominantBaseline="hanging"
                      style={{
                        fontSize: '13px',
                        fontWeight: '600',
                        wordSpacing: '5px',
                        letterSpacing: '2.1px',
                        fill: 'rgba(242, 242, 242, 0.9)'
                      }}
                    >
                      OPEN TO WORK · OPEN TO WORK ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute top-1/2 left-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rotate-45 fill-white text-white opacity-80"
              >
                <path d="M12 1C12 1 12 8 10 10C8 12 1 12 1 12C1 12 8 12 10 14C12 16 12 23 12 23C12 23 12 16 14 14C16 12 23 12 23 12C23 12 16 12 14 10C12 8 12 1 12 1Z" />
              </svg>
            </div>
            <span className="sr-only">OPEN TO WORK · OPEN TO WORK ·</span>
          </div>
        </div>

        {/* Wings SVG */}
        <div className="relative">
          <img 
            aria-hidden="true" 
            draggable={false} 
            src="/assets/icons/wings.svg" 
            alt="wings"
            className="opacity-0 select-none dark:opacity-100" 
          />
          <svg
            className="absolute top-1/2 left-1/2 z-50 w-8 -translate-x-1/2 -translate-y-1/2 md:w-10"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 5350 5350"
          >
            <path 
              className="fill-black dark:fill-white"
              d="M265 4069c-70-20-71-59-4-197 29-59 78-161 109-227 32-66 85-178 119-248 77-159 167-347 236-492 29-60 81-168 115-240 34-71 79-166 100-210 21-44 62-132 93-195 30-63 101-212 157-330 240-504 311-652 373-780 35-74 101-210 145-303 90-186 96-193 186-184 58 5 76 23 124 121 341 693 462 946 462 968 0 10 3 18 8 18 4 0 17 19 29 42 27 52 229 469 288 593 23 50 88 182 143 295 55 113 165 340 245 505 80 165 188 389 241 499 53 109 103 214 112 235 18 44 11 91-17 117-20 18-41 19-303 19-281 0-281 0-344-29-110-51-132-84-347-521-106-214-303-613-437-886-135-273-251-499-257-503-19-12-39 11-73 83-17 36-85 176-151 311-66 135-134 277-152 315-18 39-65 138-105 220-82 169-166 344-250 520-153 323-181 373-230 419-73 68-112 76-369 75-119 0-229-5-246-10z"
            />
            <path 
              className="fill-black dark:fill-white"
              d="M3922 3999c-42-21-47-29-134-208-143-293-148-310-107-347 19-17 43-20 253-24 274-7 308-16 406-107 209-193 166-551-82-696-100-58-168-67-520-67-344 0-370-3-403-53-9-14-54-107-101-206-92-200-101-237-59-269 24-19 45-20 373-24 347-4 347-4 422-39 137-65 210-175 210-317 0-176-102-308-267-348-46-10-182-13-642-14-584 0-584 0-618-38-30-32-93-155-234-460-37-80-38-124-3-151 26-21 33-21 788-21 708 0 769 1 876 20 238 40 409 119 565 262 120 109 221 278 266 443 45 169 34 388-28 557-30 81-104 197-157 247-20 19-36 43-36 52 0 10 32 40 78 72 309 217 445 544 388 927-66 435-413 770-851 820-49 5-146 10-215 10-108 0-131-3-168-21z"
            />
          </svg>
        </div>

        {/* Main Text with Animation */}
        <span className="mt-4 text-2xl font-light tracking-wide text-black dark:text-white sm:text-4xl lg:text-5xl">
          <h3 
            className="text-nowrap transition-all duration-1000 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-300px)'
            }}
          >
            FROM CONCEPT TO <span className="font-extrabold">CREATION</span>
          </h3>
          <h3 
            className="mt-3 text-nowrap transition-all duration-1000 ease-out delay-300"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(300px)'
            }}
          >
            LET&apos;S MAKE IT <span className="font-extrabold">HAPPEN!</span>
          </h3>
        </span>

        {/* Get In Touch Button */}
        <div className="group relative" style={{ transform: 'none' }}>
          {/* Liquid ripple effect */}
          {isButtonHovered && (
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background: `radial-gradient(circle, rgba(255, 255, 255, ${magneticStrength * 0.2}) 0%, transparent ${magneticStrength * 60}%)`,
                transform: `translate(${buttonOffset.x * 0.7}px, ${buttonOffset.y * 0.4}px) scale(${1 + magneticStrength * 0.8})`,
                transition: 'all 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                width: '200px',
                height: '200px',
                left: '50%',
                top: '50%',
                marginLeft: '-100px',
                marginTop: '-100px'
              }}
            />
          )}
          <button
            onClick={handleGetInTouch}
            onMouseEnter={handleButtonMouseEnter}
            onMouseMove={handleButtonMouseMove}
            onMouseLeave={handleButtonMouseLeave}
            className="group relative inline-flex cursor-pointer items-center justify-between overflow-hidden rounded-full border border-black/30 bg-black/20 py-[3px] pr-[3px] pl-2 text-base font-medium opacity-85 backdrop-blur-xs transition-all hover:bg-transparent md:py-1 md:pr-1 md:pl-3 dark:border-white/10 dark:bg-white/10 my-10 group-hover:scale-125"
            style={{
              transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px) rotate(${buttonOffset.x * 0.15}deg) scale(${1 + magneticStrength * 0.15})`,
              transition: isButtonHovered ? 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: isButtonHovered 
                ? `${buttonOffset.x * 0.6}px ${buttonOffset.y * 0.6}px ${25 + magneticStrength * 15}px rgba(0, 0, 0, ${0.3 + magneticStrength * 0.4})` 
                : 'none',
              filter: isButtonHovered 
                ? `brightness(${1 + magneticStrength * 0.2})` 
                : 'none'
            }}
          >
            <span className="z-10 px-3 text-black transition-colors duration-300 group-hover:text-white dark:text-white dark:group-hover:text-black relative after:bg-primary after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:origin-bottom-left hover:after:scale-x-100">
              Get In Touch
            </span>
            <span className="absolute inset-0 translate-x-[45%] scale-0 rounded-full bg-black opacity-0 transition-all duration-300 ease-in-out group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 dark:bg-white" />
            <span className="z-10 flex items-center justify-center overflow-hidden rounded-full bg-black p-2 transition-colors duration-300 group-hover:bg-transparent md:p-2.5 dark:bg-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right text-white transition-all duration-300 group-hover:translate-x-5 group-hover:opacity-0 dark:text-black"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-right absolute -translate-x-5 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 dark:text-black"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
          </button>
        </div>

        {/* Description Text */}
        <p className="tracking-wid text-base font-semibold lg:text-2xl">
          I&apos;m available for full-time roles & freelance projects.
        </p>
        <p className="my-2 text-sm font-extralight tracking-wide text-balance opacity-75 lg:text-xl">
          I thrive on crafting dynamic web applications, and
          <br />
          delivering seamless user experiences.
        </p>
      </div>

      {/* Background Overlays */}
      <div 
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-transparent to-white/10 dark:to-black opacity-100"
      />
      <div 
        aria-hidden="true"
        className="absolute inset-0 z-0 bg-gradient-to-b from-white/10 dark:from-black to-transparent opacity-100"
      />
      <div 
        aria-hidden="true" 
        className="absolute inset-0 z-0 bg-white/10 dark:bg-black opacity-65"
      />
    </section>
  );
}
