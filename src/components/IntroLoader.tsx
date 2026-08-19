import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const IntroLoader: React.FC = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the loader after 3.2 seconds (slightly more time to appreciate the realistic book)
    const timer = setTimeout(() => {
      setShow(false);
    }, 3200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.03,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[999999] bg-[#0E0E1F] flex flex-col items-center justify-center select-none"
        >
          {/* Inner animation block */}
          <div className="flex flex-col items-center">
            
            {/* Realistic 3D Flipping Book Loader */}
            <div className="relative w-[200px] h-[140px] mb-8 flex items-center justify-center">
              
              {/* Soft ambient glow under the book */}
              <div className="absolute -bottom-6 w-32 h-3.5 bg-brand-magenta/30 rounded-full blur-md animate-pulse" />

              {/* Book Wrapper with perspective */}
              <div className="w-[150px] h-[100px] relative" style={{ perspective: '400px', transformStyle: 'preserve-3d' }}>
                
                {/* 1. Hardcover Backing (Dark Maroon Leather Cover with Depth shadows) */}
                {/* Left Cover */}
                <div 
                  className="absolute left-1 w-[72px] h-[102px] bg-gradient-to-b from-[#8C144C] to-[#5C0B32] rounded-l-lg origin-right shadow-2xl z-0" 
                  style={{ transform: 'rotateY(-6deg)', boxShadow: '-4px 4px 8px rgba(0,0,0,0.5)' }}
                />
                {/* Right Cover */}
                <div 
                  className="absolute left-[77px] w-[72px] h-[102px] bg-gradient-to-b from-[#8C144C] to-[#5C0B32] rounded-r-lg origin-left shadow-2xl z-0" 
                  style={{ transform: 'rotateY(6deg)', boxShadow: '4px 4px 8px rgba(0,0,0,0.5)' }}
                />

                {/* 2. Paper Block Thickness (Simulating stacked closed pages at bottom/edges) */}
                {/* Left Stacked Pages Rims */}
                <div className="absolute left-2.5 top-[2px] w-[67px] h-[97px] bg-[#EBEBF2] rounded-l-md shadow-inner border-r border-[#D2D2E3]/50 z-10" />
                <div className="absolute left-3 top-[4px] w-[66px] h-[93px] bg-[#E3E3ED] rounded-l-md z-10" />

                {/* Right Stacked Pages Rims */}
                <div className="absolute left-[77px] top-[2px] w-[67px] h-[97px] bg-[#EBEBF2] rounded-r-md shadow-inner border-l border-[#D2D2E3]/50 z-10" />
                <div className="absolute left-[77px] top-[4px] w-[66px] h-[93px] bg-[#E3E3ED] rounded-r-md z-10" />

                {/* 3. Center Binder / Book Gutter Spine (Metallic/Dark cylinders) */}
                <div className="absolute left-[72.5px] top-[-2px] w-[5px] h-[104px] bg-gradient-to-r from-[#3C051F] via-[#5C0B32] to-[#3C051F] rounded-full z-50 shadow-md" />

                {/* 4. Center Gutter Soft Shadow (Real paper folds look darker inside the gutter) */}
                <div className="absolute left-[62px] top-1.5 w-[11px] h-[97px] bg-gradient-to-r from-transparent to-[#10101C]/45 z-40 pointer-events-none" />
                <div className="absolute left-[77px] top-1.5 w-[11px] h-[97px] bg-gradient-to-r from-[#10101C]/45 to-transparent z-40 pointer-events-none" />

                {/* 5. Realistic Flipping Sheets (With gradients mimicking light catching paper curvature) */}
                <div className="absolute left-[77px] top-[2px] w-[66px] h-[96px] origin-left bg-gradient-to-r from-[#E0E0EB] via-[#FFFFFF] to-[#FFFFFF] rounded-r-md border-r border-black/5 shadow-inner animate-book-flip-1 z-35" />
                <div className="absolute left-[77px] top-[2px] w-[66px] h-[96px] origin-left bg-gradient-to-r from-[#E0E0EB] via-[#FFFFFF] to-[#FFFFFF] rounded-r-md border-r border-black/5 shadow-inner animate-book-flip-2 z-33" />
                <div className="absolute left-[77px] top-[2px] w-[66px] h-[96px] origin-left bg-gradient-to-r from-[#E0E0EB] via-[#FFFFFF] to-[#FFFFFF] rounded-r-md border-r border-black/5 shadow-inner animate-book-flip-3 z-31" />

              </div>

            </div>

            {/* Glowing Text Indicators */}
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-white font-sans font-black text-xs sm:text-sm uppercase tracking-[0.25em] mb-2 text-center"
            >
              THE TEACHERS' ACADEMY
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="text-white/60 font-gujarati text-[9px] sm:text-[10px] tracking-wider text-center"
            >
              ભવિષ્યના શિક્ષકોના ઘડતરનું કેન્દ્ર...
            </motion.p>

          </div>

          {/* Realistic 3D Flipping Book CSS Animations */}
          <style>{`
            @keyframes realisticBookFlip {
              0% {
                transform: rotateY(0deg) scaleX(1);
                background: linear-gradient(90deg, #E0E0EB 0%, #FFFFFF 15%, #FFFFFF 100%);
                border-radius: 0 6px 6px 0;
                box-shadow: 2px 2px 5px rgba(0,0,0,0.1);
              }
              50% {
                /* When the page is vertical (90deg), squash it slightly to simulate perspective curving */
                background: linear-gradient(90deg, #D4D4E3 0%, #EBEBF5 60%, #C8C8DC 100%);
              }
              100% {
                transform: rotateY(-180deg) scaleX(1);
                background: linear-gradient(-90deg, #D6D6E6 0%, #FFFFFF 15%, #FFFFFF 100%);
                border-radius: 6px 0 0 6px;
                box-shadow: -2px 2px 5px rgba(0,0,0,0.15);
              }
            }

            .animate-book-flip-1 {
              animation: realisticBookFlip 2.2s cubic-bezier(0.2, 0.8, 0.4, 1.0) infinite;
              transform-style: preserve-3d;
            }

            .animate-book-flip-2 {
              animation: realisticBookFlip 2.2s cubic-bezier(0.2, 0.8, 0.4, 1.0) infinite;
              animation-delay: 0.5s;
              transform-style: preserve-3d;
            }

            .animate-book-flip-3 {
              animation: realisticBookFlip 2.2s cubic-bezier(0.2, 0.8, 0.4, 1.0) infinite;
              animation-delay: 1.0s;
              transform-style: preserve-3d;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default IntroLoader;
