import React, { useState } from 'react';
import { Award, CheckCircle, Eye, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

interface ResultItem {
  id: string;
  name: string;
  exam: string;
  marks?: string;
  year: string;
  image?: string;
  label: string;
  verified: boolean;
}

export const Results: React.FC = () => {
  const [selectedPoster, setSelectedPoster] = useState<{ src: string; title: string } | null>(null);

  const resultsList: ResultItem[] = [
    {
      id: 'vishalkumar',
      name: 'Patel VishalKumar',
      exam: 'TET-1 परीक्षा 2026',
      marks: '118 Marks',
      year: '2026',
      image: '/assets/result_vishalkumar.jpg',
      label: 'TET-1 Top Scorer',
      verified: true
    },
    {
      id: 'aravindkumar',
      name: 'Aravindkumar Chaudhary',
      exam: 'TET-1 परीक्षा 2026',
      marks: '115 Marks',
      year: '2026',
      image: '/assets/result_aravindkumar.jpg',
      label: 'TET-1 Qualified Aspirant',
      verified: true
    },
    {
      id: 'tet2-record',
      name: 'TET-2 Upper Primary',
      exam: 'TET-2 Upper Primary',
      marks: 'Verified Marksheet',
      year: '2026',
      label: 'TET-2 Score Record',
      verified: false
    },
    {
      id: 'tat-record',
      name: 'TAT Secondary & Higher Sec',
      exam: 'TAT Mains Special',
      marks: 'Descriptive Record',
      year: '2026',
      label: 'TAT Mains Qualified',
      verified: false
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14
      }
    }
  };

  const handleCTAClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 90;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="results" className="py-24 bg-brand-offWhite relative overflow-hidden text-left">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -ml-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              VERIFIED SUCCESS STORIES
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight">
            <SplitTextReveal text="Every Success Story Starts With Preparation." delay={0.2} />
          </h2>
          <FadeInUp delay={0.6}>
            <p className="text-sm text-brand-mutedText mt-4 font-semibold">
              Congratulations to our top TET-1 2026 scoring candidates! Below are official verified score cards and academy result posters.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Results Grid */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resultsList.map((result) => (
            <motion.div
              key={result.id}
              variants={{
                hidden: cardVariants.hidden,
                visible: cardVariants.visible,
                hover: {
                  y: -6,
                  scale: 1.01,
                  boxShadow: '0 25px 40px -15px rgba(52, 55, 127, 0.12)'
                }
              }}
              whileHover="hover"
              onClick={() => {
                if (result.image) {
                  setSelectedPoster({ src: result.image, title: `${result.name} - ${result.marks}` });
                }
              }}
              className="group bg-white border border-brand-indigo/10 rounded-[2rem] shadow-premium flex flex-col justify-between items-center min-h-[340px] cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Sparkling confetti celebration sparkles on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                {[...Array(8)].map((_, i) => {
                  const colors = ['bg-brand-magenta', 'bg-brand-indigo', 'bg-amber-400', 'bg-emerald-400'];
                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-1.5 h-1.5 rounded-full ${colors[i % 4]}`}
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      variants={{
                        hover: {
                          x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 80 + 30),
                          y: (i % 3 === 0 ? 1 : -1) * (Math.random() * 80 + 30),
                          scale: [0, 1.2, 0],
                          transition: { duration: 0.8, repeat: Infinity, repeatDelay: 0.1 }
                        }
                      }}
                    />
                  );
                })}
              </div>

              {/* CARD SCENARIO A: Real Poster Graphic */}
              {result.image ? (
                <div className="w-full h-full flex flex-col relative overflow-hidden">
                  {/* Poster Image Container */}
                  <div className="relative w-full aspect-square overflow-hidden bg-[#0A0A14]">
                    <img 
                      src={result.image} 
                      alt={`${result.name} ${result.exam}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    
                    {/* Hover Overlay with Eye Icon */}
                    <div className="absolute inset-0 bg-[#0E0E1F]/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-brand-deepIndigo text-xs font-black uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-brand-magenta" />
                        <span>View Full Result</span>
                      </span>
                    </div>

                    {/* Marks Tag Top Right */}
                    <div className="absolute top-3 right-3 bg-red-600 text-white font-black text-xs px-3 py-1 rounded-full shadow-lg border border-white/20 flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-amber-300 fill-amber-300" />
                      <span>{result.marks}</span>
                    </div>
                  </div>

                  {/* Poster Info Footer */}
                  <div className="p-4 bg-white flex-grow flex flex-col justify-between text-left border-t border-brand-indigo/5">
                    <div>
                      <span className="text-[8px] font-black tracking-widest text-brand-magenta uppercase bg-brand-magenta/5 border border-brand-magenta/10 px-2.5 py-0.5 rounded-full inline-block mb-1">
                        {result.exam}
                      </span>
                      <h4 className="text-sm font-extrabold text-brand-deepIndigo group-hover:text-brand-indigo transition-colors line-clamp-1">
                        {result.name}
                      </h4>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-brand-indigo/5 mt-2">
                      <span className="text-[9px] font-black text-[#16a34a] uppercase tracking-wider flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" /> VERIFIED TOPPER
                      </span>
                      <span className="text-[9px] font-bold text-brand-mutedText">
                        TTA 2026
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                /* CARD SCENARIO B: Verification Certificate Sheet Template */
                <div className="p-6 w-full h-full flex flex-col justify-between items-center relative">
                  {/* Outer double border simulation matching certificates */}
                  <div className="absolute inset-3 border border-dashed border-brand-indigo/15 rounded-[1.5rem] pointer-events-none z-10" />

                  {/* Certificate Header logo */}
                  <div className="text-center mt-3 z-10">
                    <span className="text-[8px] font-black tracking-widest text-brand-indigo uppercase block">
                      THE TEACHERS' ACADEMY
                    </span>
                    <span className="text-[6px] font-bold text-brand-mutedText uppercase block mt-0.5">
                      VERIFICATION SHEET
                    </span>
                  </div>

                  {/* Gold Medal/Seal Illustration */}
                  <div className="relative my-4 z-10 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center relative">
                      <Award className="w-8 h-8 text-amber-600" />
                      
                      {/* Decorative Ribbons on gold seal */}
                      <div className="absolute -bottom-2 -left-1 w-3 h-6 bg-amber-500/20 transform rotate-12 origin-top rounded-b" />
                      <div className="absolute -bottom-2 -right-1 w-3 h-6 bg-amber-500/20 transform -rotate-12 origin-top rounded-b" />
                    </div>
                  </div>

                  {/* Exam & Label */}
                  <div className="mb-4 z-10 text-center">
                    <span className="inline-block text-[8px] font-black text-brand-magenta uppercase bg-brand-magenta/5 border border-brand-magenta/10 px-2.5 py-0.5 rounded-full mb-1">
                      {result.exam}
                    </span>
                    <h4 className="text-[11px] font-extrabold text-brand-deepIndigo tracking-tight">
                      {result.label}
                    </h4>
                  </div>

                  {/* Verification Info metadata table */}
                  <div className="w-full bg-brand-lavender/50 border border-brand-indigo/5 rounded-xl p-3 z-10 text-left space-y-1 mb-2">
                    <div className="flex justify-between items-center text-[7px] font-bold text-brand-mutedText">
                      <span>VERIFICATION:</span>
                      <span className="text-[#b45309]">RECORD CHECK</span>
                    </div>
                    <div className="flex justify-between items-center text-[8px] font-black text-brand-deepIndigo">
                      <span>ACADEMY BATCH:</span>
                      <span>QUALIFIED SHEET</span>
                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          ))}
        </StaggerContainer>

        {/* Call to action */}
        <FadeInUp delay={0.6}>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#17172B] hover:bg-brand-indigo shadow-md transition-all duration-300 group hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Join Our Next Batch</span>
            <CheckCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </FadeInUp>

      </div>

      {/* Lightbox Modal for Poster View */}
      <AnimatePresence>
        {selectedPoster && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-8">
            {/* Backdrop Blur Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPoster(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Poster Card Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative max-w-2xl w-full max-h-[90vh] rounded-[2rem] overflow-hidden bg-black shadow-2xl z-10 flex flex-col"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedPoster(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-red-600 text-white flex items-center justify-center shadow-lg border border-white/20 z-30 transition-all cursor-pointer"
                aria-label="Close image modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image */}
              <div className="w-full h-full overflow-auto flex items-center justify-center p-2 bg-[#0A0A14]">
                <img
                  src={selectedPoster.src}
                  alt={selectedPoster.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-xl"
                />
              </div>

              {/* Modal Caption Footer */}
              <div className="p-4 bg-[#17172B] text-white flex items-center justify-between">
                <span className="font-extrabold text-sm text-white">{selectedPoster.title}</span>
                <span className="text-xs font-black text-brand-magenta uppercase tracking-wider">The Teachers' Academy 2026</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Results;
