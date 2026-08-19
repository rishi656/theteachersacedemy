import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Calendar, User, Clock, ArrowRight } from 'lucide-react';
import { FadeInUp, SplitTextReveal } from '../components/AnimatedReveal';

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: 'Study Guide' | 'Exam News' | 'Syllabus';
  date: string;
  readTime: string;
  author: string;
  image: string;
  keywords: string[];
  content: string; // HTML or structured content
}

export const blogPosts: BlogPost[] = [
  {
    id: 'tet-2-gcert-preparation-strategy',
    title: 'TET-2 Exam Preparation Strategy: How to Master GCERT Textbooks',
    excerpt: 'Detailed guide for Upper Primary TET-2 aspirants in Gujarat on mapping state textbooks for mathematics, science, social science, and pedagogy scoring.',
    category: 'Study Guide',
    date: 'August 18, 2026',
    readTime: '6 mins read',
    author: 'Hardik Sir Goswami',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=800',
    keywords: ['TET-2 preparation', 'GCERT textbook summary', 'Gujarat teacher recruitment exam', 'pedagogy paper preparation', 'Hardik Sir pedagogy classes'],
    content: `
      <p class="lead">TET-2 (Teacher Eligibility Test 2) primary recruitment exam is the gateway for teaching grades 6 to 8 in Gujarat Government schools. Successfully cracking this exam requires a highly targeted strategy centered around <strong>GCERT (Gujarat Council of Educational Research and Training)</strong> state textbooks.</p>
      
      <h3>1. Why GCERT Textbooks are Crucial for TET-2</h3>
      <p>Almost 80% of subject content questions in Part-2 of the TET-2 paper are taken directly from the textbook chapters of Standard 6, 7, and 8. Whether your stream is Math-Science or Social Science, master the conceptual explanations, tables, and summary exercises given at the end of each chapter.</p>
      
      <h3>2. Section-Wise Marks Weightage Breakdown</h3>
      <table class="w-full text-left my-6 border-collapse border border-brand-indigo/10">
        <thead>
          <tr class="bg-[#17172B] text-white">
            <th class="p-3 border border-brand-indigo/10">Paper Section</th>
            <th class="p-3 border border-brand-indigo/10">Key Topics Covered</th>
            <th class="p-3 border border-brand-indigo/10">Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-brand-indigo/10 font-bold">Child Psychology & Pedagogy</td>
            <td class="p-3 border border-brand-indigo/10">Growth stages, learning theories, GCERT teaching methodologies</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">25 Marks</td>
          </tr>
          <tr class="bg-brand-offWhite">
            <td class="p-3 border border-brand-indigo/10 font-bold">Languages (Gujarati & English)</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">Grammar fundamentals, vocabulary, descriptive comprehension</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">25 Marks</td>
          </tr>
          <tr>
            <td class="p-3 border border-brand-indigo/10 font-bold">General Knowledge (GK)</td>
            <td class="p-3 border border-brand-indigo/10">Gujarat history, currents affairs, educational policies (NEP 2020)</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">25 Marks</td>
          </tr>
          <tr class="bg-brand-offWhite">
            <td class="p-3 border border-brand-indigo/10 font-bold">Subject Content Specifics</td>
            <td class="p-3 border border-brand-indigo/10">Maths-Science or Social Sciences (Std 6 to 8 GCERT syllabus)</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">75 Marks</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Master Child Development and Pedagogy (CDP)</h3>
      <p>This is where many teaching candidates lose marks. Focus on Piaget's cognitive stages, Vygotsky's social learning theories, and evaluation techniques. Join Hardik Sir's special pedagogy batch on the official academy app to practice 500+ mock questions.</p>
      
      <div class="bg-brand-magenta/5 border-l-4 border-brand-magenta p-4 my-6 rounded-r-2xl">
        <h5 class="font-bold text-brand-deepIndigo mb-1">Pedagogy Tip for Aspirants:</h5>
        <p class="text-xs text-brand-mutedText leading-relaxed">Pay special attention to classroom scenario-based questions. Instead of just memorizing definitions, understand how a teacher handles classroom diversity and student behavioral issues.</p>
      </div>

      <h3>4. Recommended Study Checklist</h3>
      <ul>
        <li>Read and compile Std 6 to 8 GCERT textbooks for your subject.</li>
        <li>Solve previous 5 years' TET-2 papers. Check Hardik Sir's solved analysis videos.</li>
        <li>Take weekly mock tests to improve speed. 150 questions in 120 minutes require rapid decision-making.</li>
      </ul>
    `
  },
  {
    id: 'tat-secondary-mains-gujarati-answer-writing',
    title: 'TAT Secondary Mains Gujarati Descriptive Answer Writing Guide',
    excerpt: 'Expert tips on paragraph structures, argument formats, and common grammatical mistakes to score maximum marks in TAT Secondary Mains exams.',
    category: 'Study Guide',
    date: 'August 15, 2026',
    readTime: '8 mins read',
    author: 'Hardik Sir Goswami',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800',
    keywords: ['TAT Mains Gujarati answer writing', 'TAT Secondary descriptive syllabus', 'Gujarati grammar classes for TAT', 'Gujarat school teacher mains strategy'],
    content: `
      <p class="lead">The introduction of the two-tier structure (Prelims + Mains) in the TAT (Teacher Aptitude Test) Secondary exam has changed the preparation roadmap. Part-1 of the Mains paper tests candidates on descriptive Gujarati language writing. Here is how you can score 80+ marks.</p>

      <h3>1. Standard structure of a Descriptive Essay</h3>
      <p>Essays carry maximum weightage. Avoid unstructured paragraphs. Follow this 3-tier outline:</p>
      <ul>
        <li><strong>Introduction (Prastavana):</strong> Start with an educational quote, a Sanskrit sloka, or a current report index. Define the topic context cleanly.</li>
        <li><strong>Body paragraphs (Vishay Vastu):</strong> Support your points with statistics or historical contexts relating to Gujarat's education system. Split them into 3 distinct paragraphs (challenges, benefits, government schemes like Samagra Shiksha).</li>
        <li><strong>Conclusion (Upsamhar):</strong> Always write an optimistic conclusion. Suggest forward-looking teaching solutions rather than just listing issues.</li>
      </ul>

      <h3>2. Common Grammatical Mistakes to Avoid</h3>
      <p>Examiners cut marks heavily for spelling and punctuation errors. Focus on:</p>
      <ul>
        <li>Correct usage of Anusvara (nasal dot marks on letters).</li>
        <li>Proper distinctions between similar letters like <em>Sh, S</em> (શ, સ) and <em>L, R</em> (ળ, ર).</li>
        <li>Formatting formal letter layouts correctly. Ensure sender details, receiver details, subject (Vishay), and salutation occupy their correct alignment.</li>
      </ul>

      <table class="w-full text-left my-6 border-collapse border border-brand-indigo/10">
        <thead>
          <tr class="bg-[#17172B] text-white">
            <th class="p-3 border border-brand-indigo/10">Mains Paper Component</th>
            <th class="p-3 border border-brand-indigo/10">Word Count / Details</th>
            <th class="p-3 border border-brand-indigo/10">Target Marks</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="p-3 border border-brand-indigo/10 font-bold">Descriptive Essay</td>
            <td class="p-3 border border-brand-indigo/10">250-300 words on socio-educational topics</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">20 Marks</td>
          </tr>
          <tr class="bg-brand-offWhite">
            <td class="p-3 border border-brand-indigo/10 font-bold">Formal Letter / Application</td>
            <td class="p-3 border border-brand-indigo/10">Formatting layouts, sender/receiver positions</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">10 Marks</td>
          </tr>
          <tr>
            <td class="p-3 border border-brand-indigo/10 font-bold">Report Writing (Aheval)</td>
            <td class="p-3 border border-brand-indigo/10">Factual write-up of educational functions</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">10 Marks</td>
          </tr>
          <tr class="bg-brand-offWhite">
            <td class="p-3 border border-brand-indigo/10 font-bold">Gujarati Grammar Rules</td>
            <td class="p-3 border border-brand-indigo/10">Idioms (Rudhiprayog), Sandhi, Alankar, Jodani</td>
            <td class="p-3 border border-brand-indigo/10 font-bold">20 Marks</td>
          </tr>
        </tbody>
      </table>

      <div class="bg-brand-indigo/5 border-l-4 border-brand-indigo p-4 my-6 rounded-r-2xl">
        <h5 class="font-bold text-brand-deepIndigo mb-1">Hardik Sir's Mains Strategy:</h5>
        <p class="text-xs text-brand-mutedText leading-relaxed">Spend 10 minutes planning before writing. Candidates who structure their arguments before touching the answer book write faster, avoid cancellations, and score 15% higher marks.</p>
      </div>

      <h3>3. Practice with Feedback</h3>
      <p>Descriptive answer writing cannot be mastered by reading books. You must write answers manually, time your papers, and get them reviewed by subject experts. Join our special Mains Evaluation Group on the academy mobile app where papers are evaluated with review sheets.</p>
    `
  },
  {
    id: 'tet-1-primary-syllabus-checklist',
    title: 'TET-1 Primary Teacher Eligibility Syllabus Checklist (Class 1 to 5)',
    excerpt: 'Detailed checklist of topics, qualifying cutoffs, standard syllabus guidelines, and scoring patterns for primary school teaching recruitment.',
    category: 'Syllabus',
    date: 'August 10, 2026',
    readTime: '5 mins read',
    author: 'Academy Desk',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&q=80&w=800',
    keywords: ['TET-1 syllabus PDF', 'primary school teacher eligibility criteria Gujarat', 'Gujarat primary teacher salary scope', 'TET syllabus child psychology'],
    content: `
      <p class="lead">TET-1 (Teacher Eligibility Test 1) is mandatory for candidates aspiring to teach Class 1 to 5 in government primary schools across Gujarat. Here is the latest structured syllabus checklist and eligibility review.</p>

      <h3>1. Qualifying Criteria and Eligibility</h3>
      <p>Candidates must possess a PTC (Primary Teacher Certificate) or D.El.Ed/B.El.Ed from a recognized university. The minimum qualifying cutoff mark is 60% for General category candidates (90 out of 150 marks) and 55% for reserved categories (82 out of 150 marks).</p>

      <h3>2. Section-wise Topics Breakdown</h3>
      <ul>
        <li><strong>Child Development & Pedagogy (30 Marks):</strong> Principles of development, learning theories, inclusive education models, and student guidance.</li>
        <li><strong>Gujarati Language & Grammar (30 Marks):</strong> Synonyms, antonyms, sentence correction, spelling rules, and basic literature histories.</li>
        <li><strong>English Language (30 Marks):</strong> Tenses, prepositions, active/passive voice, vocabulary, and basic grammar structures.</li>
        <li><strong>Mathematics (30 Marks):</strong> Arithmetic operations, shapes, fractions, data handling, and mathematical teaching methods.</li>
        <li><strong>Environmental Studies (EVS) (30 Marks):</strong> Natural resources, food chains, health & hygiene, state geography, and environmental protections.</li>
      </ul>

      <div class="bg-brand-magenta/5 border-l-4 border-brand-magenta p-4 my-6 rounded-r-2xl">
        <h5 class="font-bold text-brand-deepIndigo mb-1">Key scoring focus:</h5>
        <p class="text-xs text-brand-mutedText leading-relaxed">Part-5 (EVS) includes questions from general science and state geography. Ensure you compile Std 3 to 5 "Aaspas" GCERT textbook summaries to secure maximum marks in this section.</p>
      </div>

      <h3>3. Download Syllabus Checklist</h3>
      <p>Ensure you check off every topic before the exam date. For the complete, detailed PDF download of the syllabus maps, visit our free study material folder in the The Teachers' Academy mobile app.</p>
    `
  }
];

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'ALL' | 'Study Guide' | 'Exam News' | 'Syllabus'>('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.keywords.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'ALL' ? true : post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0]; // Set the first post as the featured hero

  return (
    <section className="py-32 bg-[#F9FAFC] relative overflow-hidden text-left min-h-screen">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:32px_32px]" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-indigo/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-black uppercase tracking-widest text-brand-magenta block mb-2">
              ACADEMY INSIGHTS & UPDATES
            </span>
          </FadeInUp>
          <h1 className="text-4xl sm:text-5xl font-black text-brand-deepIndigo tracking-tight leading-tight mb-4">
            <SplitTextReveal text="TET & TAT Exam Preparation Guides" delay={0.2} />
          </h1>
          <FadeInUp delay={0.6}>
            <p className="text-base text-brand-mutedText font-semibold leading-relaxed">
              Read descriptive exam guides, syllabus checklists, and strategy articles prepared by Hardik Sir Goswami to score maximum marks.
            </p>
          </FadeInUp>
        </div>

        {/* Search Bar & Category Filters Control Row */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-16 w-full bg-white p-4 rounded-3xl border border-brand-indigo/5 shadow-premium">
          
          {/* Category Badges Filter */}
          <div className="flex flex-wrap gap-2">
            {(['ALL', 'Study Guide', 'Exam News', 'Syllabus'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-xl text-xs font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#17172B] text-white shadow-md'
                    : 'text-brand-deepIndigo hover:text-brand-indigo bg-brand-offWhite hover:bg-brand-lavender/40 border border-brand-indigo/5'
                }`}
              >
                {cat === 'ALL' ? 'All Guides' : cat}
              </button>
            ))}
          </div>

          {/* Search Box Inputs */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-indigo" />
            <input
              type="text"
              placeholder="Search guides, exams, or syllabus topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-2xl bg-brand-offWhite border border-brand-indigo/5 focus:border-brand-indigo focus:bg-white text-sm font-bold text-brand-deepIndigo focus:outline-none transition-all duration-300"
            />
          </div>

        </div>

        {/* FEATURED HERO POST (Only shown when filter matches and there is no search query) */}
        {!searchQuery && selectedCategory === 'ALL' && featuredPost && (
          <FadeInUp className="mb-16">
            <div 
              onClick={() => window.location.href = `/blog/${featuredPost.id}`}
              className="group grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white border border-brand-indigo/5 rounded-[2.5rem] overflow-hidden shadow-premium hover:shadow-xl transition-all duration-300 text-left cursor-pointer"
            >
              <div className="lg:col-span-6 relative aspect-video lg:aspect-auto min-h-[300px]">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-6 left-6 text-[10px] font-black uppercase tracking-widest bg-brand-magenta text-white px-3 py-1 rounded-full shadow-md z-10">
                  FEATURED ARTICLE
                </span>
              </div>
              <div className="lg:col-span-6 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs font-bold text-brand-mutedText mb-4">
                    <span className="text-[10px] font-extrabold text-brand-indigo bg-brand-indigo/10 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featuredPost.date}</span>
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-brand-deepIndigo leading-tight mb-4 group-hover:text-brand-indigo transition-colors line-clamp-3">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm leading-relaxed text-brand-mutedText font-semibold line-clamp-3 mb-6">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between border-t border-brand-indigo/5 pt-6 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-indigo to-brand-magenta flex items-center justify-center text-white font-extrabold text-xs shadow-inner">
                      HS
                    </div>
                    <div>
                      <span className="text-xs font-black text-brand-deepIndigo block">{featuredPost.author}</span>
                      <span className="text-[10px] font-semibold text-brand-mutedText block">Academy Director</span>
                    </div>
                  </div>

                  <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-magenta group-hover:text-brand-indigo transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </div>
          </FadeInUp>
        )}

        {/* ARTICLE CARDS CATALOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPosts.map((post, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                key={post.id}
                onClick={() => window.location.href = `/blog/${post.id}`}
                className="group flex flex-col justify-between rounded-[2rem] bg-white border border-brand-indigo/5 shadow-premium overflow-hidden transition-all duration-300 text-left cursor-pointer hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-4 left-4 text-[8px] font-black uppercase tracking-widest bg-[#17172B] text-white px-2.5 py-1 rounded-full shadow-sm z-10">
                      {post.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-brand-mutedText mb-3">
                      <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" />{post.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                    </div>

                    <h3 className="font-extrabold text-brand-deepIndigo text-lg mb-3 leading-snug group-hover:text-brand-indigo transition-colors line-clamp-2 min-h-[56px]">
                      {post.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-brand-mutedText font-semibold line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer details */}
                <div className="p-6 pt-0 border-t border-brand-indigo/5 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 mt-4">
                    <div className="w-7 h-7 rounded-full bg-brand-lavender/50 text-brand-indigo flex items-center justify-center font-bold text-[10px] border border-brand-indigo/5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-[10px] font-black text-brand-deepIndigo block">{post.author}</span>
                  </div>

                  <span className="flex items-center gap-1 text-[10px] font-black uppercase tracking-wider text-brand-magenta group-hover:text-brand-indigo transition-colors mt-4">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty state for search queries */}
        {filteredPosts.length === 0 && (
          <FadeInUp className="text-center py-20 bg-white rounded-3xl border border-brand-indigo/5 shadow-premium">
            <h4 className="font-extrabold text-lg text-brand-deepIndigo mb-2">No preparation guides found</h4>
            <p className="text-xs text-brand-mutedText font-semibold mb-6">We couldn't find any articles matching your search query. Try other keywords.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('ALL'); }}
              className="px-6 py-3 rounded-2xl text-xs font-black uppercase tracking-wider text-white bg-[#17172B] hover:bg-brand-indigo transition-colors cursor-pointer"
            >
              Clear Search Filters
            </button>
          </FadeInUp>
        )}

      </div>
    </section>
  );
};
