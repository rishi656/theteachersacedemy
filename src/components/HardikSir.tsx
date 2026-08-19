import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Award, Compass, MessageSquare, BookOpen, PenTool, CheckSquare, Sparkles } from 'lucide-react';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const HardikSir: React.FC = () => {
  const expertise = [
    {
      title: 'Concept Clarity',
      desc: 'Breaking down complex pedagogical and language rules into easily digestible core concepts.',
      icon: Award
    },
    {
      title: 'Exam Strategy',
      desc: 'Providing targeted blueprints, scoring techniques, and time management strategies.',
      icon: Compass
    },
    {
      title: 'Grammar Guidance',
      desc: 'Boosters in Gujarati and English language fundamentals, critical for high scoring.',
      icon: MessageSquare
    },
    {
      title: 'GCERT-Based Prep',
      desc: 'All lessons mapped directly to state textbook guidelines for validation and accuracy.',
      icon: BookOpen
    },
    {
      title: 'Mains Answer Writing',
      desc: 'Step-by-step guidance on structuring descriptive mains answers for high scores.',
      icon: PenTool
    },
    {
      title: 'Continuous Practice',
      desc: 'Interactive testing modules, regular doubt-solving, and continuous mock assessments.',
      icon: CheckSquare
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
        stiffness: 80,
        damping: 12
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
    <section id="faculty" className="py-24 bg-[#34377F] text-white relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-indigo/10 rounded-full blur-3xl pointer-events-none -ml-40" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-magenta/10 rounded-full blur-3xl pointer-events-none -mr-40" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(white_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Labeled Portrait Placeholder */}
          <div className="lg:col-span-5 flex flex-col items-center">
            
            {/* Labeled Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              whileHover={{ rotate: 1, scale: 1.01 }}
              className="relative w-full max-w-[360px] aspect-[3/4] rounded-3xl bg-gradient-to-tr from-brand-indigo via-brand-magenta to-brand-indigo p-[1px] shadow-2xl overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full rounded-[23px] relative overflow-hidden bg-gradient-to-b from-[#4B4F9F] to-[#2D3070]">
                {/* Real Portrait Image */}
                <img
                  src="/assets/hardik_sir.png"
                  alt="Hardik Sir (Hardik Goswami) - Founder & Mentor"
                  className="w-full h-full object-contain pt-4 transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Shading overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Indicator Badge overlay */}
                <div className="absolute top-4 left-4 flex items-center gap-1 bg-brand-deepIndigo/80 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[10px] text-white/95 font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-brand-magenta animate-pulse" />
                  <span>FOUNDER & MENTOR</span>
                </div>

                {/* Bottom credentials overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <h3 className="text-xl font-bold text-white tracking-wide">Hardik Goswami</h3>
                  <span className="text-xs text-brand-magenta font-semibold tracking-wider uppercase mt-1">Hardik Sir</span>
                </div>
              </div>
            </motion.div>

            {/* Sub-note */}
            <FadeInUp delay={0.4}>
              <p className="text-xs text-white/50 font-bold mt-4 text-center">
                Gujarat's dedicated mentor for competitive teaching examinations.
              </p>
            </FadeInUp>

          </div>

          {/* Right Column: Expert Description & Cards */}
          <div className="lg:col-span-7 text-left">
            <FadeInUp delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
                LEARN FROM THE MENTOR
              </span>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
              <SplitTextReveal text="Master the Exam Syllabus with Hardik Sir" delay={0.2} />
            </h2>
            <FadeInUp delay={0.4}>
              <h3 className="text-lg font-bold text-white/80 mb-6">
                Teaching that turns preparation into confidence.
              </h3>
            </FadeInUp>
            
            <FadeInUp delay={0.5}>
              <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-8 font-semibold">
                Hardik Goswami (Hardik Sir) is Gujarat's premier teacher educator. His courses fuse comprehensive pedagogy frameworks with classroom grammar shortcuts, providing the ideal foundation to qualify competitive board exams.
              </p>
            </FadeInUp>

            {/* Expertise Grid with Stagger */}
            <StaggerContainer staggerInterval={0.08} delay={0.6} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {expertise.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    whileHover={{
                      y: -4,
                      scale: 1.02,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)'
                    }}
                    className="p-4 rounded-xl bg-white/5 border border-white/5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2 mb-1.5 text-brand-magenta">
                      <Icon className="w-4 h-4" />
                      <h4 className="font-extrabold text-white text-sm">{item.title}</h4>
                    </div>
                    <p className="text-xs text-white/60 leading-relaxed font-semibold">{item.desc}</p>
                  </motion.div>
                );
              })}
            </StaggerContainer>

            {/* CTA */}
            <FadeInUp delay={0.9}>
              <button
                onClick={handleCTAClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-brand-indigo to-brand-magenta hover:brightness-110 shadow-md shadow-brand-indigo/10 hover:shadow-lg transition-all duration-300 group hover:-translate-y-0.5"
              >
                <span>Connect & Learn with Hardik Sir</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </FadeInUp>
          </div>

        </div>

      </div>
    </section>
  );
};
