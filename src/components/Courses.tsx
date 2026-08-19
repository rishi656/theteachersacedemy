import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock } from 'lucide-react';
import { FadeInUp, SplitTextReveal } from './AnimatedReveal';

interface Course {
  id: string;
  title: string;
  category: 'TET-1' | 'TET-2' | 'TAT(S)' | 'TAT(HS)' | 'General';
  examBadge: string;
  desc: string;
  isLive: boolean;
  hasStudyMaterial: boolean;
  duration: string;
  features: string[];
}

export const Courses: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<'ALL' | 'TET-1' | 'TET-2' | 'TAT(S)' | 'TAT(HS)' | 'General'>('ALL');
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [xRange, setXRange] = useState(0);
  const [isAnimActive, setIsAnimActive] = useState(false);

  // Dynamic viewport check: Activate sticky scrolling only on large screens with enough height
  useEffect(() => {
    const checkViewport = () => {
      // Laptop/Desktop displays with height >= 780px can fit the sticky header + cards safely
      setIsAnimActive(window.innerWidth >= 1024 && window.innerHeight >= 780);
    };

    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  // Framer Motion scroll hook
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Calculate maximum shift range
  useEffect(() => {
    const updateRange = () => {
      if (horizontalRef.current) {
        const totalWidth = horizontalRef.current.scrollWidth;
        const visibleWidth = window.innerWidth;
        setXRange(Math.max(0, totalWidth - visibleWidth + 100));
      }
    };

    updateRange();
    window.addEventListener('resize', updateRange);
    const timer = setTimeout(updateRange, 150);
    return () => {
      window.removeEventListener('resize', updateRange);
      clearTimeout(timer);
    };
  }, [selectedTab, isAnimActive]);

  // Map progress (0 -> 1) to horizontal translation
  const translateX = useTransform(scrollYProgress, [0, 1], [0, -xRange]);

  useEffect(() => {
    const handleSelectTab = (e: Event) => {
      const tabDetail = (e as CustomEvent).detail as any;
      if (tabDetail) {
        setSelectedTab(tabDetail);
      }
    };
    window.addEventListener('select-course-tab', handleSelectTab);
    return () => window.removeEventListener('select-course-tab', handleSelectTab);
  }, []);

  const tabs: ('ALL' | 'TET-1' | 'TET-2' | 'TAT(S)' | 'TAT(HS)' | 'General')[] = [
    'ALL', 'TET-1', 'TET-2', 'TAT(S)', 'TAT(HS)', 'General'
  ];

  const courses: Course[] = [
    {
      id: 'tet-1-live-2026',
      title: 'TET-1 Live & Recorded Complete Batch',
      category: 'TET-1',
      examBadge: 'TET-1',
      desc: 'Complete classroom instruction targeting primary teacher eligibility in Gujarat. Covers child development, languages, mathematics, and environmental studies.',
      isLive: true,
      hasStudyMaterial: true,
      duration: '6 Months Valid',
      features: ['Daily Live lectures + recordings', 'GCERT Syllabus Maps & PDFs', 'Gujarati/English grammar tests']
    },
    {
      id: 'tet-2-comprehensive',
      title: 'TET-2 Complete Comprehensive Program',
      category: 'TET-2',
      examBadge: 'TET-2',
      desc: 'Expert preparation covering Upper Primary syllabus. Tailored modules for Math-Science, Social Science, and Language aspirants.',
      isLive: true,
      hasStudyMaterial: true,
      duration: '8 Months Valid',
      features: ['Core Pedagogy Focus Lectures', 'Weekly Mock assessments', 'GCERT-aligned topic sheets']
    },
    {
      id: 'tat-secondary-special',
      title: 'TAT Secondary Guidance Batch (Std 9 & 10)',
      category: 'TAT(S)',
      examBadge: 'TAT (Secondary)',
      desc: 'Structured coaching program focusing on Gujarat secondary school teacher recruitment guidelines. Includes content analysis and methodology.',
      isLive: true,
      hasStudyMaterial: true,
      duration: '6 Months Valid',
      features: ['Prelims Syllabus + Mains Guidance', 'Language proficiency classes', 'Expert study planner summary']
    },
    {
      id: 'tat-higher-secondary',
      title: 'TAT Higher Secondary Batch (Std 11 & 12)',
      category: 'TAT(HS)',
      examBadge: 'TAT (Higher Secondary)',
      desc: 'In-depth coaching targeting Higher Secondary recruitment examinations. Detailed focus on subject methodology and scoring guidelines.',
      isLive: false,
      hasStudyMaterial: true,
      duration: '8 Months Valid',
      features: ['Recorded session archives', 'TAT-HS specific study materials', 'Gujarati/English descriptive notes']
    },
    {
      id: 'gujarati-english-grammar',
      title: 'Gujarati & English Grammar Booster Pack',
      category: 'General',
      examBadge: 'Grammar Special',
      desc: 'Language boost pack targeting grammatical concepts from fundamentals to advanced exam questions. Crucial for scoring maximum marks.',
      isLive: false,
      hasStudyMaterial: true,
      duration: '4 Months Valid',
      features: ['All Grammar Fundamentals', 'Interactive Worksheets', 'Concept Summary PDFs']
    },
    {
      id: 'mains-answer-writing',
      title: 'TAT Mains Descriptive Answer Writing',
      category: 'General',
      examBadge: 'TAT Mains',
      desc: 'Specialized program for mastering structure, flow, argument, and writing speed required to score maximum marks in TAT descriptive tests.',
      isLive: true,
      hasStudyMaterial: false,
      duration: '3 Months Valid',
      features: ['Model Answers & PDFs', 'Mock Evaluated Papers', 'Hardik Sir Review sessions']
    }
  ];

  const filteredCourses = selectedTab === 'ALL'
    ? courses
    : courses.filter(course => course.category === selectedTab || (selectedTab === 'General' && course.category === 'General'));

  const handleEnrollClick = () => {
    window.open('https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN', '_blank');
  };

  // Helper Card Render Component to prevent repeating large card code
  const renderCard = (course: Course) => (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 15 }}
      transition={{ duration: 0.4 }}
      key={course.id}
      whileHover={{
        y: -8,
        boxShadow: '0 25px 40px -15px rgba(52, 55, 127, 0.08)'
      }}
      className="group flex flex-col justify-between rounded-[2rem] bg-white border border-brand-indigo/5 shadow-premium overflow-hidden transition-all duration-300 text-left cursor-pointer w-[340px] sm:w-[385px] shrink-0"
    >
      {/* Course Header & Badges */}
      <div className="p-8 pb-0">
        <div className="flex items-center justify-between gap-2 mb-6">
          <span className="text-[9px] font-black uppercase tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full">
            {course.examBadge}
          </span>
          
          <div className="flex gap-1.5">
            {course.isLive ? (
              <span className="flex items-center gap-1 text-[9px] font-extrabold text-[#15803d] bg-[#dcfce7] border border-[#bbf7d0] px-2.5 py-0.5 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-ping" />
                LIVE
              </span>
            ) : (
              <span className="text-[9px] font-extrabold text-brand-indigo bg-brand-indigo/10 px-2.5 py-0.5 rounded-full">
                RECORDED
              </span>
            )}
            {course.hasStudyMaterial && (
              <span className="text-[9px] font-extrabold text-[#b45309] bg-[#fef3c7] border border-[#fde68a] px-2.5 py-0.5 rounded-full">
                GCERT PDF
              </span>
            )}
          </div>
        </div>

        {/* Course Title */}
        <h3 className="text-lg font-black text-brand-deepIndigo group-hover:text-brand-indigo transition-colors line-clamp-2 min-h-[56px]">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-brand-mutedText leading-relaxed mb-6 font-semibold line-clamp-3">
          {course.desc}
        </p>
      </div>

      {/* Course Details Footer */}
      <div className="px-8 pb-8 mt-auto">
        
        {/* Validity Info */}
        <div className="flex items-center gap-2 text-xs font-bold text-brand-mutedText border-t border-brand-indigo/5 pt-4 mb-5">
          <Clock className="w-4 h-4 text-brand-indigo" />
          <span>Course Validity: {course.duration}</span>
        </div>

        {/* Bullet points summary */}
        <ul className="space-y-2 mb-6">
          {course.features.map((feature, i) => (
            <li key={i} className="text-xs text-brand-deepIndigo font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-magenta shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA button */}
        <button
          onClick={handleEnrollClick}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-[#17172B] hover:bg-brand-indigo shadow-md transition-all duration-300 cursor-pointer"
        >
          <span>View Course Details</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );

  // --- RENDERS ---

  // Scenario A: Pinned Sticky Scroller (Only activated on large height viewports >= 780px)
  if (isAnimActive) {
    return (
      <section 
        ref={sectionRef} 
        id="courses" 
        className="relative bg-white"
        style={{ height: '220vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-white py-12">
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mb-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-6">
              <FadeInUp delay={0.1}>
                <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-1.5">
                  ACADEMY CURRICULUM
                </span>
              </FadeInUp>
              <h2 className="text-3xl font-extrabold text-brand-deepIndigo tracking-tight">
                <SplitTextReveal text="Choose Your Exam. Start Your Preparation." delay={0.2} />
              </h2>
              <FadeInUp delay={0.5}>
                <p className="text-xs text-brand-mutedText mt-2.5 font-semibold">
                  Select a target category and scroll down to browse all structured courses led by Hardik Sir.
                </p>
              </FadeInUp>
              <FadeInUp delay={0.6}>
                <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-3 rounded-full" />
              </FadeInUp>
            </div>

            {/* Category Tabs Filter */}
            <div className="flex flex-wrap justify-center gap-2 bg-brand-offWhite p-2 rounded-2xl max-w-fit mx-auto shadow-inner border border-brand-indigo/5">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedTab(tab)}
                  className={`px-5 py-2 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    selectedTab === tab
                      ? 'bg-[#17172B] text-white shadow-md'
                      : 'text-brand-deepIndigo hover:text-brand-indigo hover:bg-white/60'
                  }`}
                >
                  {tab === 'ALL' ? 'All Batches' : tab}
                </button>
              ))}
            </div>
          </div>

          {/* Horizontal Window Scroller (Overflow Clip) */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full overflow-hidden">
            <motion.div
              ref={horizontalRef}
              style={{ x: translateX }}
              className="flex items-stretch gap-8 w-max pb-4"
            >
              <AnimatePresence mode="popLayout">
                {filteredCourses.map((course) => renderCard(course))}
              </AnimatePresence>
            </motion.div>
          </div>

        </div>
      </section>
    );
  }

  // Scenario B: Normal Safe Horizontal Overflow (Activated on small viewports and mobile to prevent cutoff/vanishing bugs)
  return (
    <section id="courses" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              ACADEMY CURRICULUM
            </span>
          </FadeInUp>
          <h2 className="text-3xl font-extrabold text-brand-deepIndigo tracking-tight">
            <SplitTextReveal text="Choose Your Exam. Start Your Preparation." delay={0.2} />
          </h2>
          <FadeInUp delay={0.5}>
            <p className="text-sm text-brand-mutedText mt-3 font-semibold">
              Select a target category and swipe to browse all structured courses led by Hardik Sir.
            </p>
          </FadeInUp>
          <FadeInUp delay={0.6}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 bg-brand-offWhite p-2 rounded-2xl max-w-fit mx-auto shadow-inner border border-brand-indigo/5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedTab === tab
                  ? 'bg-[#17172B] text-white shadow-md'
                  : 'text-brand-deepIndigo hover:text-brand-indigo hover:bg-white/60'
              }`}
            >
              {tab === 'ALL' ? 'All Batches' : tab}
            </button>
          ))}
        </div>

        {/* Safe Scroll Container (scrollbar hidden) */}
        <div 
          className="flex items-stretch gap-8 overflow-x-auto pb-8 snap-x snap-mandatory px-4 -mx-4 scroll-container-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          <style>{`
            .scroll-container-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => renderCard(course))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
