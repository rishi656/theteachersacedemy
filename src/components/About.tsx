import React from 'react';
import { CheckCircle2, ArrowRight, BookOpen, GraduationCap, Video, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const About: React.FC = () => {
  const highlights = [
    'Comprehensive TET-1 & TET-2 preparation modules',
    'TAT Secondary & Higher Secondary expert classes',
    'GCERT school-textbook based fundamental coaching',
    'Specialized Gujarati & English grammar boosters',
    'TAT Mains descriptive answer-writing guidance',
    'Interactive live classes with lifetime recording access'
  ];

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
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -mr-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Interactive Illustration */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Visual Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="relative w-full max-w-[400px] aspect-square sm:aspect-[4/5] bg-[#F8F9FA] rounded-[2rem] p-6 border border-brand-indigo/5 flex flex-col justify-between overflow-hidden shadow-premium"
            >
              
              {/* Backing rings */}
              <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(#34377F_1.5px,transparent_1.5px)] [background-size:16px_16px]" />
              
              {/* Classroom Learning Indicator Card */}
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-white/90 backdrop-blur-md border border-white/60 p-4 rounded-2xl shadow-sm z-10 cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2.5 rounded-xl bg-[#17172B] text-white">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <span className="text-xs font-bold text-brand-deepIndigo block">Structured Curriculum</span>
                    <span className="text-[10px] text-brand-mutedText font-bold">TET & TAT Syllabi</span>
                  </div>
                </div>
                <div className="h-1.5 w-full bg-brand-lavender rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '92%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-brand-indigo to-brand-magenta"
                  />
                </div>
              </motion.div>

              {/* Central vector graphics/drawing */}
              <div className="my-auto flex justify-center py-6">
                <div className="relative w-40 h-40 bg-white rounded-full flex items-center justify-center border border-brand-indigo/5 shadow-premium">
                  <BookOpen className="w-16 h-16 text-brand-indigo animate-float-slow" />
                  {/* Floating Mini Badges */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                    className="absolute -top-2 -left-2 bg-brand-magenta text-white p-2.5 rounded-xl shadow-md"
                  >
                    <Video className="w-4 h-4" />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-2 -right-2 bg-brand-deepIndigo text-white p-2.5 rounded-xl shadow-md"
                  >
                    <Users className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="text-center z-10 bg-white/40 backdrop-blur-sm rounded-xl p-3 border border-white/45">
                <span className="text-[11px] font-black text-brand-deepIndigo tracking-wide uppercase block mb-0.5">
                  The Teachers' Academy
                </span>
                <span className="text-[9px] font-bold text-brand-magenta uppercase tracking-wider block">
                  આ Gujarat નું premium coaching portal છે.
                </span>
              </div>
            </motion.div>

            {/* Label indicating this represents our academy learning environment */}
            <motion.div
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-4 bg-brand-deepIndigo text-white font-black text-[10px] uppercase tracking-widest px-4 py-2.5 rounded-full shadow-lg"
            >
              CLASSROOM LEARNING PLATFORM
            </motion.div>

          </div>

          {/* Right Column: Detailed Text content */}
          <div className="lg:col-span-7 text-left">
            <FadeInUp delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
                ABOUT THE ACADEMY
              </span>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight mb-6">
              <SplitTextReveal text="Preparing Teachers. Building Futures." delay={0.2} />
            </h2>
            
            <FadeInUp delay={0.5}>
              <p className="text-base sm:text-lg text-brand-mutedText leading-relaxed mb-6 font-semibold">
                The Teachers' Academy is dedicated to helping aspiring teachers prepare for Gujarat's competitive teaching examinations through structured learning, expert guidance and exam-focused preparation.
              </p>
            </FadeInUp>
            
            <FadeInUp delay={0.6}>
              <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed mb-8 font-medium">
                Under the expert mentorship of Hardik Sir, we emphasize complete conceptual clarity, standard textbook mapping, language fluency boosters, and interactive practice papers to ensure that every candidate enters their exam with confidence.
              </p>
            </FadeInUp>

            {/* Checklist with Stagger */}
            <StaggerContainer staggerInterval={0.08} delay={0.7} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 }
                  }}
                  className="flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand-magenta shrink-0 mt-0.5" />
                  <span className="text-sm font-bold text-brand-deepIndigo">{item}</span>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* CTA Button */}
            <FadeInUp delay={0.9}>
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-[#17172B] hover:bg-brand-indigo shadow-md transition-all duration-300 group hover:-translate-y-0.5"
              >
                <span>Know More About Us</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
};
