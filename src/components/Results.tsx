import React from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const Results: React.FC = () => {
  const resultPlaceholders = [
    { exam: 'TET-1 primary', label: 'TET-1 Qualified Sheet' },
    { exam: 'TET-2 upper primary', label: 'TET-2 Mark Verification' },
    { exam: 'TAT (Secondary)', label: 'TAT-S Scorecard Record' },
    { exam: 'TAT (Higher Sec)', label: 'TAT-HS Scorecard Record' }
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
    <section id="results" className="py-24 bg-brand-offWhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              TRUST & CERTIFICATIONS
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight">
            <SplitTextReveal text="Every Success Story Starts With Preparation." delay={0.2} />
          </h2>
          <FadeInUp delay={0.6}>
            <p className="text-sm text-brand-mutedText mt-4 font-semibold">
              We stand for absolute honesty. Below are verified placeholder certificate templates representing student scorecards awaiting official upload verification check.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.7}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Results Grid with Stagger */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resultPlaceholders.map((result, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: cardVariants.hidden,
                visible: cardVariants.visible,
                hover: {
                  y: -6,
                  scale: 1.01,
                  boxShadow: '0 25px 40px -15px rgba(52, 55, 127, 0.08)'
                }
              }}
              whileHover="hover"
              className="group bg-white border border-brand-indigo/10 p-6 rounded-[2rem] shadow-premium flex flex-col justify-between items-center min-h-[300px] cursor-pointer transition-all duration-300 relative overflow-hidden"
            >
              {/* Sparkling confetti celebration sparkles on hover */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0">
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
                  <span className="text-[#b45309]">AWAITING</span>
                </div>
                <div className="flex justify-between items-center text-[8px] font-black text-brand-deepIndigo">
                  <span>STUDENT FILE:</span>
                  <span>PENDING CHECK</span>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Call to action */}
        <FadeInUp delay={0.6}>
          <button
            onClick={handleCTAClick}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#17172B] hover:bg-brand-indigo shadow-md transition-all duration-300 group hover:-translate-y-0.5"
          >
            <span>See Student Success Stories</span>
            <CheckCircle className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
          </button>
        </FadeInUp>

      </div>
    </section>
  );
};
