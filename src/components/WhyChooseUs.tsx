import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { 
  Target, 
  UserCheck, 
  Tv, 
  FileText, 
  BookOpen, 
  Edit, 
  CheckSquare, 
  Smartphone 
} from 'lucide-react';
import { FadeInUp, StaggerContainer } from './AnimatedReveal';

interface PointItem {
  title: string;
  desc: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
}

export const WhyChooseUs: React.FC = () => {
  const points: PointItem[] = [
    { 
      title: 'Exam-Focused Preparation', 
      desc: 'Curriculum structure closely tuned to the specific marking models of TET & TAT papers.',
      icon: Target,
      gradient: 'from-amber-500/10 to-orange-500/10 border-amber-500/20 text-amber-600'
    },
    { 
      title: 'Experienced Guidance', 
      desc: 'Direct study strategies, feedback, and planning tips from Hardik Sir Goswami.',
      icon: UserCheck,
      gradient: 'from-blue-500/10 to-indigo-500/10 border-blue-500/20 text-blue-600'
    },
    { 
      title: 'Live & Recorded Learning', 
      desc: 'Attend interactive live broadcasts or download offline recording packets.',
      icon: Tv,
      gradient: 'from-emerald-500/10 to-teal-500/10 border-emerald-500/20 text-emerald-600'
    },
    { 
      title: 'Structured Study Material', 
      desc: 'Handcrafted summary files, concepts checklists, and GCERT syllabus maps.',
      icon: FileText,
      gradient: 'from-purple-500/10 to-pink-500/10 border-purple-500/20 text-purple-600'
    },
    { 
      title: 'Grammar & GCERT Support', 
      desc: 'Intense boosters mapping state school textbook Gujarati & English language concepts.',
      icon: BookOpen,
      gradient: 'from-red-500/10 to-rose-500/10 border-red-500/20 text-rose-600'
    },
    { 
      title: 'Mains Answer Writing', 
      desc: 'Structured descriptive formats, mock assessments, and evaluation reviews.',
      icon: Edit,
      gradient: 'from-cyan-500/10 to-sky-500/10 border-cyan-500/20 text-cyan-600'
    },
    { 
      title: 'Continuous Practice', 
      desc: 'Doubt support, regular evaluation questions, and weekly mock series.',
      icon: CheckSquare,
      gradient: 'from-indigo-500/10 to-violet-500/10 border-indigo-500/20 text-indigo-600'
    },
    { 
      title: 'Learning From Anywhere', 
      desc: 'Learn on your phone, laptop, or tablet. Access files from your home or on the go.',
      icon: Smartphone,
      gradient: 'from-brand-magenta/10 to-pink-500/10 border-brand-magenta/20 text-brand-magenta'
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <section className="py-24 bg-[#F9FAFC] relative overflow-hidden text-left">
      {/* Subtle Geometric Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      
      {/* Soft ambient blur spots */}
      <div className="absolute left-0 top-0 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none -ml-40 animate-pulse" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none -mr-40 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-indigo block mb-2">
              WHY JOIN US
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight leading-tight">
            Why Aspirants Choose The Teachers' Academy
          </h2>
          <FadeInUp delay={0.5}>
            <div className="h-1.5 w-16 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-5 rounded-full shadow-sm" />
          </FadeInUp>
        </div>

        {/* Points Grid with Stagger */}
        <StaggerContainer staggerInterval={0.08} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.01
                }}
                className="group bg-white/75 backdrop-blur-xs border border-[#4B4F9F]/10 hover:border-brand-indigo/35 p-6 rounded-[2rem] shadow-premium text-left transition-all duration-300 cursor-pointer relative overflow-hidden hover:shadow-xl"
              >
                {/* Soft background hover gradient spot */}
                <div className="absolute -right-8 -bottom-8 w-20 h-20 rounded-full bg-gradient-to-tr from-brand-indigo/5 to-brand-magenta/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md pointer-events-none" />

                {/* Themed Icon Box */}
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  className={`w-11 h-11 rounded-xl bg-gradient-to-tr ${point.gradient} border flex items-center justify-center mb-5 transition-transform shadow-sm group-hover:scale-105`}
                >
                  <Icon className="w-5 h-5 relative z-10" />
                </motion.div>

                {/* Title & Desc */}
                <h3 className="font-black text-brand-deepIndigo text-base mb-2 group-hover:text-brand-indigo transition-colors relative z-10 leading-snug">
                  {point.title}
                </h3>
                <p className="text-xs leading-relaxed text-brand-mutedText font-semibold relative z-10">
                  {point.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
