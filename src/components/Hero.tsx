import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, Sparkles, GraduationCap, BookOpen } from 'lucide-react';
import { FadeInUp, SplitTextReveal } from './AnimatedReveal';

export const Hero: React.FC = () => {
  const [startAnimations, setStartAnimations] = useState(false);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    window.addEventListener('resize', handleResize);
    handleResize();

    // Start entry animations exactly when the page loader starts fading out (2.8 seconds)
    const timer = setTimeout(() => {
      setStartAnimations(true);
    }, 2800);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
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

  // Floating education particles database for background ambiance
  const floatingParticles = [
    { icon: GraduationCap, top: '15%', left: '8%', size: 36, delay: 0, duration: 25 },
    { icon: BookOpen, top: '22%', left: '45%', size: 28, delay: 2, duration: 28 },
    { icon: Sparkles, top: '65%', left: '10%', size: 24, delay: 1, duration: 22 },
    { icon: Star, top: '75%', left: '48%', size: 20, delay: 3, duration: 20 },
    { icon: Sparkles, top: '40%', left: '88%', size: 32, delay: 1.5, duration: 26 },
    { icon: GraduationCap, top: '72%', left: '80%', size: 30, delay: 0.5, duration: 24 }
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-[#0A0A14] text-white"
    >
      {/* 1. Diagonal Split Gradient Background (Sharp Acelab-Style Cut using Clip-Path) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Left Side Base (Official Deep Indigo Logo Color - Smooth Dark Gradient) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#12142E] to-[#0A0A14]" />
        
        {/* Diagonal Split Right Side Layer (Vibrant Blended Brand-Color Gradient Mesh) */}
        <div 
          className="absolute inset-y-0 right-0 w-full lg:w-[52%] bg-gradient-to-br from-brand-magenta/80 via-brand-indigo/40 to-[#0A0A14] backdrop-blur-[6px] border-l border-white/5 transition-all duration-500"
          style={{
            clipPath: isDesktop 
              ? 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' 
              : 'polygon(0 35%, 100% 0, 100% 100%, 0% 100%)'
          }}
        />

        {/* Ambient Grid overlay to add premium depth */}
        <div className="absolute inset-0 opacity-[0.015] bg-[radial-gradient(white_1.5px,transparent_1.5px)] [background-size:24px_24px]" />

        {/* Floating background education particles (Parallax flow) */}
        {floatingParticles.map((particle, i) => {
          const Icon = particle.icon;
          return (
            <motion.div
              key={i}
              initial={{ y: 0, x: 0, opacity: 0.15 }}
              animate={{ 
                y: [-15, 15, -15], 
                x: [-10, 10, -10],
                rotate: [0, 360]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: particle.top,
                left: particle.left,
                pointerEvents: 'none',
                zIndex: 1
              }}
              className="text-white/10 hidden sm:block"
            >
              <Icon style={{ width: particle.size, height: particle.size }} />
            </motion.div>
          );
        })}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            
            {/* Small Status Badge */}
            <FadeInUp delay={3.0} yOffset={15}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/90 text-xs font-bold uppercase tracking-wider mb-6 shadow-md backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Learn. Prepare. Qualify.</span>
              </div>
            </FadeInUp>

            {/* Main Headline with Scribble highlight */}
            <div className="relative mb-6">
              <h1 className="text-4xl sm:text-5xl md:text-[62px] font-black leading-[1.05] tracking-tight text-white">
                <SplitTextReveal text="Unlock" delay={3.1} />
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300">
                  Your Future
                </span>
                <br />
                <SplitTextReveal text="As a Teacher" delay={3.3} />
              </h1>

              {/* Custom Underline Scribble Vector */}
              <motion.div 
                initial={{ width: 0 }}
                animate={startAnimations ? { width: '100%' } : {}}
                transition={{ delay: 0.9, duration: 0.6, ease: 'easeOut' }}
                className="absolute -bottom-2 left-0 h-1.5 bg-gradient-to-r from-amber-400 to-brand-magenta rounded-full overflow-hidden"
              />
            </div>

            {/* Sub-headline description */}
            <FadeInUp delay={3.7} yOffset={15}>
              <p className="text-sm sm:text-base text-white/70 mb-8 leading-relaxed max-w-xl font-semibold">
                The Teachers' Academy by Hardik Sir (Hardik Goswami) is Gujarat's premier portal for TET-1, TET-2, and TAT exam preparation. Access live classroom streams, mock assessments, GCERT summaries, and mains evaluations.
              </p>
            </FadeInUp>

            {/* Buttons (Browse & Watch) */}
            <FadeInUp delay={3.8} yOffset={15} className="w-full sm:w-auto">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4">
                <button
                  onClick={() => scrollToSection('#courses')}
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-extrabold text-brand-deepIndigo bg-white hover:bg-brand-lavender shadow-xl transition-all duration-300 group hover:-translate-y-0.5"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4 text-brand-magenta transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <a
                  href="https://www.youtube.com/@TheTeachersAcademyOfficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-sm font-extrabold text-white bg-white/5 hover:bg-white/10 border border-white/10 backdrop-blur-xs transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Play className="w-4 h-4 text-red-500 fill-current" />
                  <span>Watch Free Classes</span>
                </a>
              </div>
            </FadeInUp>

          </div>

          {/* Right Column: Perspective-Layered Course Cards (Acelab-Style Showcase) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[520px] lg:h-[600px] w-full select-none mt-12 lg:mt-0">
            
            {/* Ambient Background Glow behind cards */}
            <div className="absolute w-[400px] h-[400px] rounded-full bg-brand-indigo/10 blur-3xl pointer-events-none" />

            {/* Annotation Overlay 1: Yellow "Live Daily" Sticker */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: 0 }}
              animate={startAnimations ? { opacity: 1, scale: 1, rotate: -6 } : {}}
              transition={{ delay: 1.1, type: 'spring', stiffness: 200 }}
              className="absolute top-10 left-6 sm:left-12 z-40 bg-amber-400 text-brand-deepIndigo font-black text-[9px] uppercase tracking-wider px-3.5 py-1.5 rounded-lg shadow-lg border border-amber-300/20"
            >
              Live Batches Daily
            </motion.div>

            {/* Annotation Overlay 2: Curved arrow "Learn at your pace" text */}
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={startAnimations ? { opacity: 0.8, y: 0 } : {}}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="absolute top-4 right-12 z-30 hidden sm:flex flex-col items-center gap-1 text-white/80"
            >
              <span className="font-gujarati text-[11px] font-black uppercase tracking-wider">તમારી સ્પીડ પર શીખો</span>
              {/* Custom curved arrow SVG */}
              <svg className="w-12 h-8 text-white/50 transform -rotate-12" fill="none" viewBox="0 0 48 32">
                <path d="M4 4c15 15 28 5 36 22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <path d="M34 26l7-1-1-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </motion.div>

            {/* --- THREE PERSPECTIVE-TILED FLOATING CARDS (With Entry Reveal Animations) --- */}

            {/* Card 1: TET-2 Program (Top Layer - Dark Indigo Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: '0deg', x: 120, y: -90 }}
              animate={startAnimations ? { opacity: 1, scale: 1, rotate: '6deg', x: 30, y: -90 } : {}}
              whileHover={{ rotate: '0deg', scale: 1.05, x: 0, y: -90, zIndex: 40 }}
              transition={{ 
                type: 'spring', 
                stiffness: 90, 
                damping: 15,
                delay: 0.5
              }}
              onClick={() => window.open('https://www.youtube.com/watch?v=3s0PkJ-XxuU&list=PLOvX14j--yvs', '_blank')}
              className="absolute w-[280px] sm:w-[320px] rounded-3xl bg-[#17172B] border border-white/10 p-5 shadow-2xl z-30 cursor-pointer overflow-hidden text-left group"
            >
              <div className="relative h-36 rounded-2xl bg-gradient-to-tr from-brand-indigo to-brand-magenta overflow-hidden mb-4">
                {/* Transparent Hardik Sir Photo Overlaid */}
                <img 
                  src="/assets/hardik_sir.png" 
                  alt="Hardik Sir" 
                  className="w-full h-full object-contain pt-3"
                />
                <span className="absolute top-3 left-3 bg-[#17172B]/75 backdrop-blur-xs px-2.5 py-0.5 rounded-lg text-[9px] font-black text-brand-magenta tracking-wider uppercase">
                  TET-2 Complete
                </span>
                <span className="absolute bottom-3 right-3 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-lg text-[8px] font-bold text-white/95">
                  140+ Lectures
                </span>
              </div>
              <h4 className="font-black text-white text-sm mb-1.5 leading-snug">TET-2 Upper Primary Batch</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] font-black text-white">4.9</span>
                </div>
                <span className="text-[10px] text-white/50 font-bold">(4.2k Students)</span>
              </div>

              {/* Hover Watch Now Overlay */}
              <div className="absolute inset-0 bg-[#0E0E1F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50 rounded-3xl">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-brand-deepIndigo text-xs font-black uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 text-brand-magenta fill-current" />
                  <span>Watch Now</span>
                </span>
              </div>
            </motion.div>

            {/* Card 2: TAT Secondary Masterclass (Middle Layer - Light Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: '0deg', x: -160, y: 30 }}
              animate={startAnimations ? { opacity: 1, scale: 1, rotate: '-4deg', x: -60, y: 30 } : {}}
              whileHover={{ rotate: '0deg', scale: 1.05, x: 0, y: 30, zIndex: 40 }}
              transition={{ 
                type: 'spring', 
                stiffness: 90, 
                damping: 15,
                delay: 0.7
              }}
              onClick={() => window.open('https://www.youtube.com/watch?v=hhXDm7xf30Y&list=PLPCSrW4L6b0vcKqI0_OTJSJaf6a48qBBt', '_blank')}
              className="absolute w-[280px] sm:w-[320px] rounded-3xl bg-white border border-brand-indigo/5 p-5 shadow-2xl z-20 cursor-pointer text-left group overflow-hidden"
            >
              <div className="relative h-36 rounded-2xl bg-brand-lavender overflow-hidden mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-indigo/10 flex items-center justify-center text-brand-indigo">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <span className="absolute top-3 left-3 bg-brand-indigo/10 px-2.5 py-0.5 rounded-lg text-[9px] font-black text-brand-indigo tracking-wider uppercase">
                  TAT Secondary
                </span>
                <span className="absolute bottom-3 right-3 bg-brand-indigo/10 px-2.5 py-0.5 rounded-lg text-[8px] font-bold text-brand-deepIndigo">
                  Daily Evaluation
                </span>
              </div>
              <h4 className="font-black text-brand-deepIndigo text-sm mb-1.5 leading-snug">TAT Secondary Masterclass</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] font-black text-brand-deepIndigo">4.8</span>
                </div>
                <span className="text-[10px] text-brand-mutedText font-bold">(2.5k Students)</span>
              </div>

              {/* Hover Watch Now Overlay */}
              <div className="absolute inset-0 bg-[#0E0E1F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50 rounded-3xl">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-brand-deepIndigo text-xs font-black uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 text-brand-magenta fill-current" />
                  <span>Watch Now</span>
                </span>
              </div>
            </motion.div>

            {/* Card 3: TET-1 Primary Complete (Bottom Layer - Carbon Dark Theme) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6, rotate: '0deg', x: 120, y: 220 }}
              animate={startAnimations ? { opacity: 1, scale: 1, rotate: '2deg', x: 40, y: 150 } : {}}
              whileHover={{ rotate: '0deg', scale: 1.05, x: 0, y: 150, zIndex: 40 }}
              transition={{ 
                type: 'spring', 
                stiffness: 90, 
                damping: 15,
                delay: 0.9
              }}
              onClick={() => window.open('https://www.youtube.com/watch?v=iw0VOA8FiCU&list=PLZkFdarCflx8', '_blank')}
              className="absolute w-[280px] sm:w-[320px] rounded-3xl bg-[#1E1E38] border border-white/5 p-5 shadow-2xl z-10 cursor-pointer text-left group overflow-hidden"
            >
              <div className="relative h-36 rounded-2xl bg-brand-magenta/5 overflow-hidden mb-4 flex items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-brand-magenta/10 flex items-center justify-center text-brand-magenta">
                  <BookOpen className="w-8 h-8" />
                </div>
                <span className="absolute top-3 left-3 bg-brand-magenta/10 px-2.5 py-0.5 rounded-lg text-[9px] font-black text-brand-magenta tracking-wider uppercase">
                  TET-1 Batch
                </span>
                <span className="absolute bottom-3 right-3 bg-brand-magenta/10 px-2.5 py-0.5 rounded-lg text-[8px] font-bold text-brand-magenta">
                  90+ Lectures
                </span>
              </div>
              <h4 className="font-black text-white text-sm mb-1.5 leading-snug">TET-1 Primary Complete Batch</h4>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-0.5 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[11px] font-black text-white">4.9</span>
                </div>
                <span className="text-[10px] text-white/50 font-bold">(1.8k Students)</span>
              </div>

              {/* Hover Watch Now Overlay */}
              <div className="absolute inset-0 bg-[#0E0E1F]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-50 rounded-3xl">
                <span className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full bg-white text-brand-deepIndigo text-xs font-black uppercase tracking-wider shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Play className="w-3.5 h-3.5 text-brand-magenta fill-current" />
                  <span>Watch Now</span>
                </span>
              </div>
            </motion.div>

          </div>

        </div>
      </div>
    </section>
  );
};
