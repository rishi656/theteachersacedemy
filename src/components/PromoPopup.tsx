import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Smartphone } from 'lucide-react';

export const PromoPopup: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after exactly 4 seconds (4000ms) on page load
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleCTA = () => {
    window.open('https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN', '_blank');
    handleClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
          
          {/* Blur Backplate Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="absolute inset-0 bg-[#0E0E1F]/65 backdrop-blur-md cursor-pointer"
          />

          {/* Floating Golden Sparks in the backdrop */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0, y: 0 }}
                animate={{ 
                  opacity: [0, 0.4, 0.4, 0], 
                  scale: [0.5, 1.2, 0.8, 0],
                  y: [0, -80]
                }}
                transition={{
                  duration: Math.random() * 3.5 + 2.5,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 rounded-full bg-amber-400 blur-[0.5px]"
                style={{
                  top: `${Math.random() * 70 + 15}%`,
                  left: `${Math.random() * 80 + 10}%`,
                }}
              />
            ))}
          </div>

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 220 }}
            className="relative w-full max-w-[650px] aspect-[16/9] rounded-[2rem] bg-white p-[1px] bg-gradient-to-tr from-brand-indigo via-brand-magenta to-brand-indigo shadow-2xl overflow-hidden z-10"
          >
            
            {/* Close Button on Top Right (Out of bounds offset) */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-brand-magenta text-brand-deepIndigo hover:text-white flex items-center justify-center shadow-lg border border-brand-indigo/10 z-50 transition-all cursor-pointer focus:outline-none hover:scale-105 active:scale-95"
              aria-label="Close promotion"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Inner Promo Image Body */}
            <div className="w-full h-full rounded-[31px] relative overflow-hidden bg-brand-deepIndigo cursor-pointer group" onClick={handleCTA}>
              <img
                src="/assets/promo_popup.jpg"
                alt="TET-II Live Batch Admission Open Promotion"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-101"
              />
              
              {/* Click-to-Enroll Glass overlay on hover */}
              <div className="absolute inset-0 bg-brand-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/95 text-brand-deepIndigo text-xs font-black uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Smartphone className="w-4 h-4 text-brand-magenta" />
                  <span>Download App to Join</span>
                </span>
              </div>
            </div>

          </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};
