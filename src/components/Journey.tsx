import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

interface Step {
  number: string;
  title: string;
  desc: string;
}

export const Journey: React.FC = () => {
  const steps: Step[] = [
    {
      number: '01',
      title: 'Choose Your Exam',
      desc: 'Select the specific TET or TAT program matching your career target.'
    },
    {
      number: '02',
      title: 'Build Your Concepts',
      desc: 'Attend live lessons and review concept booster files for fundamental clarity.'
    },
    {
      number: '03',
      title: 'Practice Regularly',
      desc: 'Engage with daily workbook tasks and GCERT syllabus guides.'
    },
    {
      number: '04',
      title: 'Test Your Preparation',
      desc: 'Take timed mock tests under actual exam conditions.'
    },
    {
      number: '05',
      title: 'Improve Weak Areas',
      desc: 'Receive direct answer-writing reviews and grammar feedback.'
    },
    {
      number: '06',
      title: 'Qualify With Confidence',
      desc: 'Walk into the classroom and qualify your exam with complete mastery.'
    }
  ];

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 90, damping: 15 }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              PREPARATION TIMELINE
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight">
            <SplitTextReveal text="Your Preparation Journey" delay={0.2} />
          </h2>
          <FadeInUp delay={0.6}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Timeline Layout */}
        <StaggerContainer staggerInterval={0.1} className="relative">
          {/* Central connector line for desktop */}
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-brand-indigo/5 -translate-y-1/2 hidden lg:block" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={stepVariants}
                whileHover={{
                  y: -8,
                  boxShadow: '0 25px 40px -15px rgba(52, 55, 127, 0.08)'
                }}
                className="bg-white border border-brand-indigo/5 p-6 rounded-[2rem] shadow-premium text-left flex flex-col justify-between min-h-[220px] transition-all duration-300 cursor-pointer"
              >
                <div>
                  {/* Step Number Badge */}
                  <span className="text-3xl font-black text-brand-magenta/10 group-hover:text-brand-magenta/20 transition-colors block mb-4">
                    {step.number}
                  </span>
                  
                  {/* Title & Desc */}
                  <h3 className="font-extrabold text-brand-deepIndigo text-base mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-mutedText font-semibold">
                    {step.desc}
                  </p>
                </div>

                {/* Simulated connecting dot */}
                <div className="w-3 h-3 rounded-full bg-brand-indigo/10 border-2 border-white mx-auto mt-6 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </StaggerContainer>

      </div>
    </section>
  );
};
