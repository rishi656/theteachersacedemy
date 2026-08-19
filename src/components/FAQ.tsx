import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageSquare, Phone } from 'lucide-react';
import { FadeInUp, SplitTextReveal } from './AnimatedReveal';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Which teaching exams does The Teachers' Academy cover?",
      answer: "We specialize in competitive teaching examinations in Gujarat, including TET-1 (Primary School Classes 1-5), TET-2 (Upper Primary Classes 6-8), TAT Secondary (Std 9-10), and TAT Higher Secondary (Std 11-12) teacher recruitment exams."
    },
    {
      question: "How can I access live classes and recorded lectures?",
      answer: "All our active batches feature live interactive lectures streamed directly inside our official Android application. Once a live session concludes, the recorded video is immediately uploaded to the portal archive for lifetime replay access."
    },
    {
      question: "Are the study materials based on the GCERT textbooks?",
      answer: "Yes, absolutely. Hardik Sir maps our syllabus units directly to the standard Gujarat school textbooks (GCERT) to ensure that the core language definitions, historical data, and math steps align with state verification keys."
    },
    {
      question: "Is there support for TAT Mains Descriptive Answer Writing?",
      answer: "Yes. Our TAT Secondary and TAT Higher Secondary programs feature dedicated Mains writing modules where students receive structural templates, model answers, speed writing checklists, and evaluation feedback from Hardik Sir's team."
    },
    {
      question: "What languages are the lessons taught in?",
      answer: "All classes, workbook explanations, study sheets, and mock tests are developed in Gujarati. English grammar boosters are explained in a dual Gujarati-English format for complete conceptual understanding."
    },
    {
      question: "How do I enroll in a batch and buy study notes?",
      answer: "Course registration, test attempts, and study material downloads are managed through our Android application. Simply download \"The Teachers' Academy\" app from the Google Play Store or contact our support team at 6355910277."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIdx(openIdx === index ? null : index);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic accents */}
      <div className="absolute right-0 bottom-0 w-80 h-80 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -mr-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Split Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start text-left">
          
          {/* Left Column: Heading & Support info */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <FadeInUp delay={0.1}>
              <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
                COMMON QUESTIONS
              </span>
            </FadeInUp>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight mb-6">
              <SplitTextReveal text="Frequently Asked Questions" delay={0.2} />
            </h2>
            
            <FadeInUp delay={0.5}>
              <p className="text-sm sm:text-base text-brand-mutedText leading-relaxed mb-8 font-semibold">
                Have questions about batches, app installations, textbook syllabus materials, or Hardik Sir's methodology? Check our verified answers.
              </p>
            </FadeInUp>

            {/* Quick Support Card */}
            <FadeInUp delay={0.6} className="w-full">
              <div className="p-6 rounded-[2rem] bg-brand-offWhite border border-brand-indigo/5 shadow-premium w-full">
                <h4 className="font-extrabold text-brand-deepIndigo text-sm mb-2 flex items-center gap-2">
                  <MessageSquare className="w-4.5 h-4.5 text-brand-magenta" />
                  <span>Still have questions?</span>
                </h4>
                <p className="text-xs text-brand-mutedText mb-4 leading-relaxed font-semibold">
                  If you cannot find the answer to your query, connect with our support desk. We are active from 9:00 AM to 7:00 PM.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:6355910277"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-white bg-[#17172B] hover:bg-brand-indigo transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Support</span>
                  </a>
                  <a
                    href="https://wa.me/916355910277"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider text-emerald-950 bg-emerald-50 border border-emerald-500/10 hover:bg-emerald-100 transition-colors"
                  >
                    <span>WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </FadeInUp>
          </div>

          {/* Right Column: Collapsible accordion panels */}
          <div className="lg:col-span-7 space-y-4 w-full">
            {faqs.map((faq, index) => {
              const isOpen = openIdx === index;
              return (
                <FadeInUp key={index} delay={index * 0.05} yOffset={15}>
                  <div
                    className={`border rounded-[1.8rem] overflow-hidden transition-all duration-300 ${
                      isOpen
                        ? 'border-brand-magenta/35 bg-white shadow-[0_12px_24px_-8px_rgba(167,25,91,0.12)]'
                        : 'border-brand-indigo/5 bg-brand-offWhite shadow-premium'
                    }`}
                  >
                    {/* Header/Question Trigger */}
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex items-center justify-between p-6 text-left font-black text-brand-deepIndigo hover:text-brand-indigo transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span className="text-sm sm:text-base pr-4 leading-snug">{faq.question}</span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        className="p-1.5 rounded-lg bg-white border border-brand-indigo/5 text-brand-indigo shrink-0"
                      >
                        {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                      </motion.div>
                    </button>

                    {/* Answer Collapsible Section */}
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: 'easeInOut' }}
                        >
                          <div className="px-6 pb-6 pt-0 text-xs sm:text-sm text-brand-mutedText border-t border-brand-indigo/5 leading-relaxed font-semibold">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeInUp>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
