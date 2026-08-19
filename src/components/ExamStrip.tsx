import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, School, Award } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';
import { FadeInUp, StaggerContainer } from './AnimatedReveal';

export const ExamStrip: React.FC = () => {
  const exams = [
    {
      name: 'TET-1',
      fullName: 'Teacher Eligibility Test - 1',
      desc: 'Qualifying exam for Primary School Teachers (Classes 1 to 5) recruitment in Gujarat.',
      icon: BookOpen,
      color: 'from-brand-indigo to-[#6b70ff]',
      borderGradient: 'from-brand-indigo to-[#6b70ff]',
      shadowColor: 'hover:shadow-[0_20px_45px_-12px_rgba(75,79,159,0.18)]',
      borderColor: 'border-[#4B4F9F]/10 hover:border-[#4B4F9F]/30',
      tagColor: 'bg-brand-indigo/5 text-brand-indigo border-brand-indigo/10',
      tag: 'Primary'
    },
    {
      name: 'TET-2',
      fullName: 'Teacher Eligibility Test - 2',
      desc: 'Qualifying exam for Upper Primary School Teachers (Classes 6 to 8) recruitment.',
      icon: GraduationCap,
      color: 'from-brand-magenta to-[#ff4794]',
      borderGradient: 'from-brand-magenta to-[#ff4794]',
      shadowColor: 'hover:shadow-[0_20px_45px_-12px_rgba(167,25,91,0.18)]',
      borderColor: 'border-brand-magenta/10 hover:border-brand-magenta/30',
      tagColor: 'bg-brand-magenta/5 text-brand-magenta border-brand-magenta/10',
      tag: 'Upper Primary'
    },
    {
      name: 'TAT(S)',
      fullName: 'Teacher Aptitude Test - Secondary',
      desc: 'Mandatory competitive test for Secondary School Teachers (Classes 9 and 10) recruitment.',
      icon: School,
      color: 'from-brand-deepIndigo to-[#5357c3]',
      borderGradient: 'from-brand-deepIndigo to-[#5357c3]',
      shadowColor: 'hover:shadow-[0_20px_45px_-12px_rgba(52,55,127,0.18)]',
      borderColor: 'border-brand-deepIndigo/10 hover:border-brand-deepIndigo/30',
      tagColor: 'bg-brand-deepIndigo/5 text-brand-deepIndigo border-brand-deepIndigo/10',
      tag: 'Secondary'
    },
    {
      name: 'TAT(HS)',
      fullName: 'Teacher Aptitude Test - Higher Secondary',
      desc: 'Required examination for Higher Secondary School Teachers (Classes 11 and 12) placement.',
      icon: Award,
      color: 'from-amber-500 to-[#fcd34d]',
      borderGradient: 'from-amber-500 to-[#fcd34d]',
      shadowColor: 'hover:shadow-[0_20px_45px_-12px_rgba(245,158,11,0.18)]',
      borderColor: 'border-amber-500/10 hover:border-amber-500/30',
      tagColor: 'bg-amber-500/5 text-amber-600 border-amber-500/10',
      tag: 'Higher Secondary'
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const handleCardClick = () => {
    const element = document.querySelector('#courses');
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
    <section id="exams" className="py-24 bg-gradient-to-b from-white via-brand-lavender/10 to-white relative overflow-hidden">
      
      {/* Soft ambient background spots to add visual interest */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-brand-indigo/5 blur-3xl pointer-events-none -ml-40" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full bg-brand-magenta/5 blur-3xl pointer-events-none -mr-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-magenta/5 border border-brand-magenta/10 text-xs font-extrabold uppercase tracking-widest text-brand-magenta mb-4">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>Targeted Syllabus</span>
            </span>
          </FadeInUp>
          
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-black text-brand-deepIndigo tracking-tight leading-tight mb-4">
            Focused Preparation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-indigo via-brand-deepIndigo to-brand-magenta">Gujarat's Teaching Exams</span>
          </h2>
          
          <FadeInUp delay={0.5}>
            <p className="text-sm sm:text-base text-brand-mutedText font-semibold max-w-2xl mx-auto leading-relaxed">
              We specialize in providing dedicated concepts, textbook evaluations, and mains mock evaluations specifically designed for GCERT and board exam structures.
            </p>
            <div className="h-1.5 w-16 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-6 rounded-full shadow-sm" />
          </FadeInUp>
        </div>

        {/* Cards Grid with Stagger */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {exams.map((exam) => {
            const Icon = exam.icon;
            return (
              <motion.div
                key={exam.name}
                variants={cardVariants}
                onClick={handleCardClick}
                whileHover={{
                  y: -10,
                  scale: 1.01
                }}
                className={`group relative cursor-pointer flex flex-col justify-between p-8 rounded-[2rem] bg-white border ${exam.borderColor} shadow-premium transition-all duration-500 overflow-hidden ${exam.shadowColor}`}
              >
                {/* 1. Thin colored top border gradient */}
                <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${exam.borderGradient}`} />

                {/* 2. Soft background hover gradient spot */}
                <div className={`absolute -right-16 -bottom-16 w-36 h-36 rounded-full bg-gradient-to-tr ${exam.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl pointer-events-none`} />
                
                <div className="relative z-10">
                  {/* Card Icon & Tag Pill */}
                  <div className="flex items-center justify-between mb-8">
                    {/* Double-layered glowing icon box */}
                    <div className={`relative w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${exam.color} text-white shadow-lg overflow-hidden transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className="w-6 h-6 relative z-10" />
                      {/* Ambient shine layer inside icon */}
                      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <span className={`text-[9px] font-black uppercase px-3.5 py-1.5 rounded-full border ${exam.tagColor}`}>
                      {exam.tag}
                    </span>
                  </div>

                  {/* Exam Short Title */}
                  <h3 className="text-2xl font-black text-brand-deepIndigo mb-1.5 transition-colors group-hover:text-brand-indigo">
                    {exam.name}
                  </h3>
                  
                  {/* Full Exam Subtitle */}
                  <p className="text-[10px] font-extrabold text-brand-magenta tracking-wide uppercase mb-5 leading-snug">
                    {exam.fullName}
                  </p>

                  {/* Detailed Description */}
                  <p className="text-[13px] text-brand-mutedText leading-relaxed mb-6 font-bold">
                    {exam.desc}
                  </p>
                </div>

                {/* Card CTA arrow link */}
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brand-indigo mt-auto relative z-10 transition-colors group-hover:text-brand-magenta">
                  <span>Explore Batches</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

// Simple vector Sparkle icon for clean section badge
const SparklesIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
  </svg>
);
export default ExamStrip;
