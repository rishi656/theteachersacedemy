import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Video, MonitorPlay, Layers, BookOpen, FileText, CheckCircle2 } from 'lucide-react';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

export const Features: React.FC = () => {
  const featureList = [
    {
      title: 'Live Interactive Classes',
      desc: 'Connect in real-time with expert faculty. Ask doubts live, resolve concepts, and participate in discussion pools.',
      icon: Video,
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      title: 'Recorded Lectures',
      desc: 'Missed a class? No problem. Access complete recordings of all live lectures instantly for repeat learning anytime.',
      icon: MonitorPlay,
      color: 'bg-emerald-500/10 text-emerald-600'
    },
    {
      title: 'GCERT-Based Learning',
      desc: 'Fully aligned curriculum mapped to Gujarat state textbooks, ensuring that your fundamental concepts are flawless.',
      icon: Layers,
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      title: 'Grammar Booster Pack',
      desc: 'In-depth sessions for Gujarati and English grammar topics. Designed to secure core marks in language scoring sections.',
      icon: BookOpen,
      color: 'bg-pink-500/10 text-pink-600'
    },
    {
      title: 'Structured Mock Tests',
      desc: 'Simulate exam-day environments with custom-designed practice papers, speed assessment reports, and answer keys.',
      icon: FileText,
      color: 'bg-amber-500/10 text-amber-600'
    },
    {
      title: 'Mains Answer Writing',
      desc: 'Step-by-step guidance on structuring descriptive mains answers, including model review solutions and styling tips.',
      icon: CheckCircle2,
      color: 'bg-indigo-500/10 text-indigo-600'
    }
  ];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 85,
        damping: 14
      }
    }
  };

  return (
    <section className="py-24 bg-brand-offWhite relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              PREPARATION TOOLKIT
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight">
            <SplitTextReveal text="Everything You Need to Prepare Better" delay={0.2} />
          </h2>
          <FadeInUp delay={0.6}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Features Grid with Stagger */}
        <StaggerContainer staggerInterval={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -6,
                  scale: 1.01,
                  boxShadow: '0 25px 40px -15px rgba(52, 55, 127, 0.08)'
                }}
                className="group p-8 rounded-[2rem] bg-white border border-brand-indigo/5 shadow-premium transition-all duration-300 text-left relative overflow-hidden cursor-pointer"
              >
                {/* Visual border accent */}
                <div className="absolute top-0 left-0 w-[4px] h-full bg-brand-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Feature Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${feature.color} transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>

                {/* Feature Content */}
                <h3 className="text-lg font-black text-brand-deepIndigo mb-3 group-hover:text-brand-indigo transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-brand-mutedText leading-relaxed font-semibold">
                  {feature.desc}
                </p>
              </motion.div>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
