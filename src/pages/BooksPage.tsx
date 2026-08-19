import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Download, CheckCircle } from 'lucide-react';
import { FadeInUp, SplitTextReveal } from '../components/AnimatedReveal';

interface BookProduct {
  id: string;
  title: string;
  category: 'TET' | 'TAT' | 'GCERT' | 'Grammar';
  pages: number;
  price: number;
  originalPrice: number;
  badge: string;
  desc: string;
  features: string[];
  coverImage?: string; // Path to cover image asset
  coverGradient?: string; // Fallback gradient classes if no image is used
}

export const BooksPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'TET' | 'TAT' | 'GCERT' | 'Grammar'>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const books: BookProduct[] = [
    {
      id: 'tet-1-paryavaran-practice-set',
      title: 'TET-1 Environment (Paryavaran) Practice Set',
      category: 'TET',
      pages: 180,
      price: 180,
      originalPrice: 240,
      badge: 'New Release',
      desc: 'Dedicated Gujarati medium practice set for primary EVS/Paryavaran syllabus. Focuses on environmental science, state curriculum maps, and pedagogy.',
      features: ['Syllabus chapters questions', 'GCERT Standard 3-5 EVS mapped', 'Pedagogy theory checkpoints'],
      coverImage: '/assets/book_paryavaran.jpg'
    },
    {
      id: 'tet-1-shikshan-practice-set',
      title: 'TET-1 Pedagogy & Child Psychology (Shikshan) Practice Set',
      category: 'TET',
      pages: 220,
      price: 220,
      originalPrice: 280,
      badge: 'Hot Seller',
      desc: 'Key study book targeting child development, inclusive learning concepts, and basic teaching methodologies in government schools.',
      features: ['Growth stages theory MCQs', 'Classroom management rules', 'Sample evaluation exercises'],
      coverImage: '/assets/book_shikshan.jpg'
    },
    {
      id: 'tet-1-gujarati-practice-set',
      title: 'TET-1 Gujarati Language & Grammar Practice Set',
      category: 'Grammar',
      pages: 160,
      price: 160,
      originalPrice: 210,
      badge: 'Language Special',
      desc: 'Focus workbook for Gujarati language concepts, spelling (jodani) corrections, compound words, literature histories, and syntax.',
      features: ['Gujarati grammar guides', 'GCERT textbook vocabulary', 'Self practice sandhi worksheets'],
      coverImage: '/assets/book_gujarati.jpg'
    },
    {
      id: 'tet-1-english-practice-set',
      title: 'TET-1 English Language & Grammar Practice Set',
      category: 'Grammar',
      pages: 160,
      price: 160,
      originalPrice: 210,
      badge: 'Grammar Special',
      desc: 'Specialized worksheets workbook for English grammar rules, tenses, sentence changes, voice conversions, and teaching methodologies.',
      features: ['Parts of speech exercises', 'English pedagogy guides', 'Evaluated test sections'],
      coverImage: '/assets/book_english.jpg'
    },
    {
      id: 'tet-1-maths-practice-set',
      title: 'TET-1 Mathematics & Methodology Practice Set',
      category: 'TET',
      pages: 200,
      price: 200,
      originalPrice: 260,
      badge: 'Maths Special',
      desc: 'Practical workbook with detailed step-by-step arithmetic equations, geometric shapes, statistics, and mathematics teaching methods.',
      features: ['Arithmetic equations shortcuts', 'Maths teaching pedagogy', 'Mock practice sets solved'],
      coverImage: '/assets/book_maths.jpg'
    },
    {
      id: 'tat-mains-gujarati-answer-writing',
      title: 'TAT Secondary & Higher Secondary Gujarati Descriptive Mains Guide',
      category: 'TAT',
      pages: 220,
      price: 249,
      originalPrice: 320,
      badge: 'Mains Special',
      desc: 'Comprehensive manual containing letter writing templates, structured essay formats, reports templates, and previous year solutions.',
      features: ['Verified Letter Templates', 'Grammar Correction Checklist', 'Sample Solved Answer Booklet'],
      coverGradient: 'from-brand-magenta to-[#4A162B]'
    },
    {
      id: 'gcert-social-science-summaries',
      title: 'GCERT Standard 6 to 10 Social Science Quick Revision Summaries',
      category: 'GCERT',
      pages: 180,
      price: 180,
      originalPrice: 240,
      badge: 'GCERT Focus',
      desc: 'Chapter-wise summary pointers for history, geography, and civics textbooks to score maximum marks in TET-2 & TAT prelims.',
      features: ['Standard 6-10 mapped chapters', 'Key facts & figures tables', 'EVS concepts checklists'],
      coverGradient: 'from-[#0f766e] to-[#115e59]'
    }
  ];

  const filteredBooks = selectedCategory === 'ALL'
    ? books
    : books.filter((book) => book.category === selectedCategory);

  const handleBuyClick = (bookTitle: string) => {
    const message = encodeURIComponent(`Hello The Teachers' Academy! I want to buy the physical copy of the book: "${bookTitle}". Please guide me on payment and delivery.`);
    window.open(`https://wa.me/916355910277?text=${message}`, '_blank');
  };

  const handleDownloadClick = (_bookTitle: string) => {
    window.open('https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN', '_blank');
  };

  return (
    <section className="py-32 bg-[#F9FAFC] relative overflow-hidden text-left min-h-screen">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-black uppercase tracking-widest text-brand-magenta block mb-2">
              ACADEMY STUDY MATERIAL
            </span>
          </FadeInUp>
          <h1 className="text-4xl sm:text-5xl font-black text-brand-deepIndigo tracking-tight leading-tight mb-4">
            <SplitTextReveal text="Preparation Books & Reference Guides" delay={0.2} />
          </h1>
          <FadeInUp delay={0.6}>
            <p className="text-base text-brand-mutedText font-semibold leading-relaxed">
              Order physical reference books and study workbooks prepared by Hardik Sir. Download free sample chapters directly on your device.
            </p>
          </FadeInUp>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap gap-2 mb-16 bg-white p-3 rounded-2xl max-w-fit shadow-premium border border-brand-indigo/5">
          {([
            { id: 'ALL', label: 'All Books' },
            { id: 'TET', label: 'TET-1 & 2 Guides' },
            { id: 'TAT', label: 'TAT Mains Specials' },
            { id: 'GCERT', label: 'GCERT Summaries' },
            { id: 'Grammar', label: 'Grammar Workbooks' }
          ] as const).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#17172B] text-white shadow-md'
                  : 'text-brand-deepIndigo hover:text-brand-indigo bg-brand-offWhite hover:bg-brand-lavender/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Books Catalogue Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredBooks.map((book) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.4 }}
                key={book.id}
                className="bg-white border border-brand-indigo/5 rounded-[2.5rem] p-6 sm:p-8 shadow-premium flex flex-col md:flex-row gap-8 items-stretch relative overflow-hidden group hover:shadow-xl transition-all duration-300 animate-fadeIn"
              >
                
                {/* 3D-styled Interactive Book Cover Art */}
                <div className="flex-shrink-0 flex items-center justify-center md:justify-start">
                  <div className="perspective-1000 relative">
                    <motion.div 
                      whileHover={{ 
                        rotateY: -22, 
                        rotateX: 5,
                        scale: 1.03,
                        boxShadow: '20px 20px 30px rgba(0,0,0,0.18)' 
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
                      className="w-[160px] h-[226px] sm:w-[176px] sm:h-[248px] rounded-r-2xl shadow-lg text-white relative overflow-hidden origin-left flex-shrink-0"
                      style={{
                        transformStyle: 'preserve-3d',
                        background: book.coverImage ? 'none' : undefined
                      }}
                    >
                      {/* 1. Renders uploaded front cover image if present */}
                      {book.coverImage ? (
                        <img 
                          src={book.coverImage} 
                          alt={book.title} 
                          className="absolute inset-0 w-full h-full object-cover rounded-r-2xl"
                        />
                      ) : (
                        // Fallback text-based cover for other guides
                        <div className={`absolute inset-0 bg-gradient-to-br ${book.coverGradient} p-5 flex flex-col justify-between rounded-r-2xl w-full h-full`}>
                          <span className="text-[7px] font-black uppercase tracking-widest bg-white/10 border border-white/25 px-2 py-0.5 rounded-full self-start pl-2">
                            {book.category} SPECIAL
                          </span>
                          <h4 className="font-extrabold text-[11px] leading-snug tracking-tight text-left pt-4 flex-grow pl-2">
                            {book.title}
                          </h4>
                          <div className="border-t border-white/20 pt-2 flex items-center justify-between pl-2">
                            <span className="text-[7px] font-bold text-white/50 block">Hardik Goswami</span>
                            <div className="w-5 h-5 rounded-full bg-white/15 flex items-center justify-center text-[7px] font-extrabold">
                              TTA
                            </div>
                          </div>
                        </div>
                      )}

                      {/* 2. Leather spine shading gutter (Renders overlay ON TOP of the cover image) */}
                      <div className="absolute left-0 top-0 bottom-0 w-3 bg-black/35 z-20 border-r border-white/5" />
                      <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-white/10 z-20" />
                      
                    </motion.div>
                  </div>
                </div>

                {/* Book Details Info */}
                <div className="flex-grow flex flex-col justify-between text-left">
                  <div>
                    {/* Badge & Pages */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <span className="text-[9px] font-black uppercase tracking-widest text-brand-magenta bg-brand-magenta/5 border border-brand-magenta/10 px-3 py-1 rounded-full">
                        {book.badge}
                      </span>
                      <span className="text-xs font-bold text-brand-mutedText">
                        {book.pages} Pages
                      </span>
                    </div>

                    {/* Book Title */}
                    <h3 className="text-lg font-black text-brand-deepIndigo mb-3 leading-snug group-hover:text-brand-indigo transition-colors line-clamp-2">
                      {book.title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-xs leading-relaxed text-brand-mutedText font-semibold mb-5">
                      {book.desc}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2 mb-6">
                      {book.features.map((feature, i) => (
                        <li key={i} className="text-xs text-brand-deepIndigo font-bold flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Actions & Pricing block */}
                  <div className="border-t border-brand-indigo/5 pt-5 mt-auto">
                    <div className="flex items-baseline gap-2 mb-5">
                      <span className="text-2xl font-black text-[#17172B]">₹{book.price}</span>
                      <span className="text-sm font-bold text-brand-mutedText line-through">₹{book.originalPrice}</span>
                      <span className="text-[10px] font-black text-[#16a34a] uppercase tracking-wider pl-2">
                        {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 w-full">
                      <button
                        onClick={() => handleBuyClick(book.title)}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-[#17172B] hover:bg-brand-indigo transition-colors cursor-pointer"
                      >
                        <ShoppingBag className="w-4 h-4" />
                        <span>Buy Book</span>
                      </button>
                      
                      <button
                        onClick={() => handleDownloadClick(book.title)}
                        className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-black uppercase tracking-wider text-brand-indigo hover:text-brand-deepIndigo bg-brand-offWhite hover:bg-brand-lavender/40 border border-brand-indigo/5 transition-all cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Sample PDF</span>
                      </button>
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
