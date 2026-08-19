import React, { useState, useEffect } from 'react';
import { Smartphone, Download, Award, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const AppCTA: React.FC = () => {
  const [activeScreen, setActiveScreen] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { title: 'Learn Offline', desc: 'Download recorded video lectures directly to your device and watch offline.' },
    { title: 'Interactive Quizzes', desc: 'Practice mock exams, grammar boosters, and evaluate key scores instantly.' },
    { title: 'GCERT Course Materials', desc: 'Access standard study files, e-books, and mains guidance frameworks.' }
  ];

  return (
    <section id="app" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Curved Content Card */}
        <div className="bg-[#17172B] rounded-[2.5rem] p-8 sm:p-16 text-white border border-white/5 shadow-2xl relative overflow-hidden">
          
          {/* Internal graphics overlays */}
          <div className="absolute right-0 top-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none -mr-32" />
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -ml-32" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Device Mockup Frame */}
            <div className="lg:col-span-5 relative flex justify-center order-2 lg:order-1">
              
              {/* Outer Phone Ring */}
              <div className="relative w-[260px] h-[520px] rounded-[3rem] border-[8px] border-white/10 bg-black shadow-2xl p-3 flex flex-col justify-between overflow-hidden select-none">
                
                {/* Speaker Grill / Camera Island */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 rounded-full bg-black flex items-center justify-center gap-1.5 z-30">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                  <div className="w-12 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Simulated Screen */}
                <div className="w-full h-full rounded-[2.2rem] bg-[#121225] relative overflow-hidden flex flex-col justify-between p-4 pt-8">
                  
                  {/* Internal Grid Backdrop */}
                  <div className="absolute inset-0 opacity-[0.02] bg-[radial-gradient(white_1px,transparent_1px)] [background-size:16px_16px]" />

                  {/* Top Header of App */}
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[9px] font-black text-brand-magenta tracking-wider uppercase">
                      THE TEACHERS' ACADEMY
                    </span>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>

                  {/* Animated Slides Screen Content */}
                  <div className="my-auto w-full relative h-[250px] flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      {activeScreen === 0 && (
                        <motion.div
                          key="screen0"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-4 text-left w-full px-1"
                        >
                          <div className="text-[9px] font-bold text-white/50 block">STUDENT VIEW</div>
                          <div className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 leading-snug">
                            <span className="text-[11px] font-extrabold text-white block">TET-2 Pedagogy Masterclass</span>
                            <span className="text-[9px] text-emerald-400 font-extrabold block mt-1.5 flex items-center gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
                              LIVE CLASS
                            </span>
                          </div>
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-bold text-white/40">
                            Join over 2500+ teaching aspirants online.
                          </div>
                        </motion.div>
                      )}

                      {activeScreen === 1 && (
                        <motion.div
                          key="screen1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-4 text-left w-full px-1"
                        >
                          <div className="text-[9px] font-bold text-white/50 block">TEST CENTRE</div>
                          <div className="p-3.5 rounded-2xl bg-brand-magenta/10 border border-brand-magenta/20 leading-snug">
                            <span className="text-[11px] font-extrabold text-white block">Gujarati Grammar MCQ Practice</span>
                            <span className="text-[8px] text-brand-magenta font-extrabold block mt-1.5 uppercase tracking-wider">
                              Active Mock Assessment
                            </span>
                          </div>
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between text-[9px] font-bold text-white/40">
                            <span>Score: 120/150</span>
                            <span className="text-emerald-400">80% Accuracy</span>
                          </div>
                        </motion.div>
                      )}

                      {activeScreen === 2 && (
                        <motion.div
                          key="screen2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.4 }}
                          className="space-y-4 text-left w-full px-1"
                        >
                          <div className="text-[9px] font-bold text-white/50 block">STUDY MATERIAL</div>
                          <div className="p-3.5 rounded-2xl bg-brand-indigo/20 border border-brand-indigo/35 leading-snug">
                            <span className="text-[11px] font-extrabold text-white block">GCERT Std 6-10 Social Science Notes</span>
                            <span className="text-[8px] text-brand-indigo font-extrabold block mt-1.5 uppercase tracking-wider">
                              PDF Summaries Mapped
                            </span>
                          </div>
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/5 text-[9px] font-bold text-white/40">
                            Free download sample chapters offline.
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* App Bottom nav */}
                  <div className="flex justify-around items-center pt-2 border-t border-white/5 z-10 text-white/50">
                    <div className="flex flex-col items-center gap-0.5 text-brand-magenta">
                      <Smartphone className="w-4 h-4" />
                      <span className="text-[7px] font-bold">Portal</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <Award className="w-4 h-4" />
                      <span className="text-[7px] font-bold">Syllabus</span>
                    </div>
                    <div className="flex flex-col items-center gap-0.5">
                      <ShieldCheck className="w-4 h-4" />
                      <span className="text-[7px] font-bold">Profile</span>
                    </div>
                  </div>

                </div>

              </div>

            </div>

            {/* Right Column: Descriptions & CTAs */}
            <div className="lg:col-span-7 text-left order-1 lg:order-2">
              <FadeInUp delay={0.1}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
                  LEARNING ON THE GO
                </span>
              </FadeInUp>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
                <SplitTextReveal text="Your Preparation. Your Phone. Your Pace." delay={0.2} />
              </h2>
              <FadeInUp delay={0.6}>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 font-semibold">
                  Access premium courses and state textbook materials directly through **The Teachers' Academy App** on Google Play. Continue learning on your schedule with seamless live streams or offline playback files.
                </p>
              </FadeInUp>

              {/* List features with Stagger */}
              <StaggerContainer staggerInterval={0.1} delay={0.7} className="space-y-5 mb-10">
                {features.map((feat, idx) => (
                  <FadeInUp key={idx} delay={idx * 0.05} yOffset={10}>
                    <div className="flex gap-4">
                      <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 mt-1">
                        <span className="text-xs font-black">{idx + 1}</span>
                      </div>
                      <div>
                        <h4 className="font-extrabold text-white text-base mb-1">{feat.title}</h4>
                        <p className="text-sm text-white/60 leading-relaxed font-semibold">{feat.desc}</p>
                      </div>
                    </div>
                  </FadeInUp>
                ))}
              </StaggerContainer>

              {/* Play store download button */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-extrabold text-brand-deepIndigo bg-white hover:bg-brand-lavender/80 transition-all shadow-md group"
                >
                  <Download className="w-4 h-4 text-brand-magenta" />
                  <span>Download App from Play Store</span>
                </a>
                <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider block text-center sm:text-left">
                  Compatible with all Android devices.
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
