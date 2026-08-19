import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = '' }) => {
  const [imgError, setImgError] = useState(false);

  // If image loads successfully, render it
  if (!imgError) {
    return (
      <motion.div 
        whileHover={{ scale: 1.04, y: -1.5 }}
        className={`flex items-center select-none cursor-pointer transition-all duration-300 ${className}`}
      >
        <img
          src="/assets/logo.png"
          alt="The Teachers' Academy"
          className="h-12 w-auto object-contain"
          onError={() => setImgError(true)}
        />
      </motion.div>
    );
  }

  // Fallback vector SVG matching branding specifications
  return (
    <motion.div 
      whileHover={{ scale: 1.04, y: -1.5 }}
      className={`flex items-center select-none cursor-pointer transition-all duration-300 ${className}`}
    >
      {/* Premium Logo Icon */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-brand-indigo to-brand-magenta text-white font-bold shadow-md shadow-brand-indigo/20">
        {/* Styled Classroom / Teacher symbol in SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6 text-white"
        >
          {/* Board/Screen shape */}
          <path d="M4 15V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6" />
          <rect x="2" y="3" width="20" height="14" rx="2" />
          {/* Stand for Board */}
          <line x1="8" y1="21" x2="12" y2="17" />
          <line x1="12" y1="17" x2="16" y2="21" />
          {/* Light bulb/Star of knowledge */}
          <path d="M12 7v4" />
          <path d="M10 9h4" />
        </svg>
        {/* Heartbeat accent representation (Tagline: "A heartbeat of every future teacher") */}
        <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-brand-magenta border-2 border-white flex items-center justify-center animate-pulse">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-2.5 h-2.5 text-white">
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </div>
      </div>

    </motion.div>
  );
};
