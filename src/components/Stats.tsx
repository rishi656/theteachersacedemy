import React from 'react';
import { motion } from 'framer-motion';
import { Target, Monitor, BookOpen, Star } from 'lucide-react';
import { StaggerContainer } from './AnimatedReveal';

export const Stats: React.FC = () => {
  const statsList = [
    {
      title: 'GCERT Mapped Curriculum',
      desc: 'Our classes are systematically synchronized with Gujarat state school textbook topics.',
      icon: Target,
      tag: '100% Alignment'
    },
    {
      title: 'Recorded Lecture Archive',
      desc: 'Never miss a class. Access complete live stream records anytime, anywhere.',
      icon: Monitor,
      tag: 'Lifetime Playback'
    },
    {
      title: 'Complete Exam Syllabi',
      desc: 'All target exams (TET & TAT) mapped from core fundamentals to mains descriptive files.',
      icon: BookOpen,
      tag: 'Full Coverage'
    },
    {
      title: 'Evaluated Mock Tests',
      desc: 'Evaluate progress with structured doubt assessments, keys, and feedback reviews.',
      icon: Star,
      tag: 'Regular Evaluation'
    }
  ];

  return (
    <section className="py-20 bg-white relative border-y border-brand-indigo/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Grids with Stagger */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-brand-indigo/10">
          {statsList.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="pt-6 md:pt-0 md:px-6 first:pl-0 last:pr-0 text-left flex flex-col justify-between min-h-[160px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-xl bg-brand-indigo/5 text-brand-indigo shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[9px] font-black text-brand-magenta uppercase bg-brand-magenta/5 border border-brand-magenta/10 px-2.5 py-0.5 rounded-full tracking-wider">
                      {stat.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-brand-deepIndigo mb-2">
                    {stat.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-brand-mutedText font-semibold">
                    {stat.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
