'use client';

import Globe from './Globe';

export default function GlobeScene() {
  return (
    <div className="relative w-full h-full bg-transparent overflow-hidden">
      {/* Globe container - positioned at bottom left corner */}
      <div className="absolute -bottom-[8rem] -left-24 w-[120%] h-[120%]">
        <Globe />
      </div>

      {/* Location panel - positioned at bottom left */}
      <div className="absolute bottom-8 left-8 text-white z-10">
        {/* Location pin icon and Remote label */}
        <div className="flex items-center gap-2 mb-2">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-xs text-gray-300 font-light">Remote</span>
        </div>

        {/* Country name */}
        <div className="text-2xl font-bold mb-3">India</div>

        {/* Connect now button */}
        <button className="group flex items-center gap-2 text-white hover:text-blue-400 transition-colors duration-300">
          <span className="text-sm font-medium">Connect now</span>
          <svg
            className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
