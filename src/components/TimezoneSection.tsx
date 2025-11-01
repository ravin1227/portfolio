'use client';

import { useState } from 'react';
import GlobeScene from './GlobeScene';

const countries = [
  { name: 'UK', flag: '🇬🇧', active: false },
  { name: 'India', flag: '🇮🇳', active: true },
  { name: 'USA', flag: '🇺🇸', active: false }
];

export default function TimezoneSection() {
  const [selectedCountry, setSelectedCountry] = useState('India');

  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          I'm very flexible with{' '}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            time zone communications
          </span>
        </h2>

        {/* Country Pills */}
        <div className="flex items-center justify-center gap-4 mb-12">
          {countries.map((country) => (
            <button
              key={country.name}
              onClick={() => setSelectedCountry(country.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                country.name === selectedCountry
                  ? 'bg-blue-600/30 border-blue-400 text-white'
                  : 'bg-gray-800/50 border-gray-600 text-gray-300 hover:border-gray-400'
              }`}
            >
              <span className="text-lg">{country.flag}</span>
              <span className="font-medium">{country.name}</span>
            </button>
          ))}
        </div>

        {/* Globe */}
        <div className="relative">
          <GlobeScene />
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-1 h-1 bg-cyan-300 rounded-full animate-pulse opacity-30"></div>
    </div>
  );
}