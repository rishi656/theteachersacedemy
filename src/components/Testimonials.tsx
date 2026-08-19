import React from 'react';
import { Star, Quote } from 'lucide-react';
import { FadeInUp, SplitTextReveal, StaggerContainer } from './AnimatedReveal';

interface StudentReview {
  id: number;
  name: string;
  avatarColor: string; // Gradient class for avatar background
  initial: string;
  date: string;
  rating: number;
  content: string;
  course: string;
}

export const Testimonials: React.FC = () => {
  const reviews: StudentReview[] = [
    {
      id: 1,
      name: 'Reena Parmar',
      avatarColor: 'from-[#4F46E5] to-[#6366F1]',
      initial: 'R',
      date: '13 July 2026',
      rating: 5,
      content: 'I am preparing for TET-2 at The Teacher Academy, and my experience has been excellent. Under the mentorship of Hardik Sir, the preparation is very serious, well-planned, and focused. His teaching style is clear, motivating, and easy to understand. The regular tests, guidance, and support have really helped improve my confidence. I highly recommend The Teacher Academy to anyone preparing for TET-2. Thank you, Hardik Sir and the entire team! 🙏',
      course: 'TET-2 Batch Student'
    },
    {
      id: 2,
      name: 'Nikki Patel',
      avatarColor: 'from-brand-magenta to-[#D81B60]',
      initial: 'N',
      date: '8 December 2025',
      rating: 5,
      content: "Best app for competitive exams. All the facilities are very powerful. All the faculty are highly experienced in the subject. Subject-wise, different faculties and huge knowledge of the particular subject which they taught. the teacher's academy study material is awesome. All the topics in the books are deeply explained, and after each chapter there are topic tests in the book. They are all very passionate about teaching. Thank you so much. A very very helpful app for tet tat preparation exam....",
      course: 'TET & TAT Books Purchaser'
    },
    {
      id: 3,
      name: 'Keval Prajapati',
      avatarColor: 'from-[#D97706] to-[#F59E0B]',
      initial: 'K',
      date: '26 June 2026',
      rating: 5,
      content: "The Teachers Academy is one of the best institutes for competitive exam preparation. Hardik Sir explains concepts in a simple and effective manner and provides constant motivation and guidance. His dedication towards students' success is truly commendable. Highly recommended!",
      course: 'TET-2 & TAT Guidance'
    },
    {
      id: 4,
      name: 'Manisha Bhuva',
      avatarColor: 'from-[#059669] to-[#10B981]',
      initial: 'M',
      date: '14 August 2026',
      rating: 5,
      content: 'Amazing app for exam preparation! The content is well-structured, easy to understand, and the practice material is very helpful. Highly recommended 📚✨',
      course: 'Online App Batch Student'
    },
    {
      id: 5,
      name: 'Axay Rathod',
      avatarColor: 'from-[#2563EB] to-[#3B82F6]',
      initial: 'A',
      date: '24 July 2026',
      rating: 5,
      content: 'Best app for TET & TAT preparation. Excellent faculty, easy explanations, regular mock tests, and quality study material. Highly recommended for every TET/TAT aspirant.',
      course: 'TET & TAT Live Courses'
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-lavender/40 rounded-full blur-3xl pointer-events-none -ml-48" />
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-magenta/5 rounded-full blur-3xl pointer-events-none -mr-48" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp delay={0.1}>
            <span className="text-xs font-extrabold uppercase tracking-widest text-brand-magenta block mb-2">
              STUDENT FEEDBACK & REVIEWS
            </span>
          </FadeInUp>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-deepIndigo tracking-tight leading-tight">
            <SplitTextReveal text="What Our Successful Aspirants Say" delay={0.2} />
          </h2>
          <p className="text-sm text-brand-mutedText mt-3 font-semibold max-w-2xl mx-auto text-center">
            Read verified reviews from government teaching aspirants who qualified TET-1, TET-2, and TAT exams under Hardik Sir's mentorship.
          </p>
          <FadeInUp delay={0.5}>
            <div className="h-1 w-12 bg-gradient-to-r from-brand-indigo to-brand-magenta mx-auto mt-4 rounded-full" />
          </FadeInUp>
        </div>

        {/* Reviews Cards Flex/Grid Wrap */}
        <StaggerContainer staggerInterval={0.08} className="flex flex-wrap justify-center gap-8 w-full">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group w-full md:w-[350px] lg:w-[380px] bg-brand-offWhite/80 backdrop-blur-xs border border-brand-indigo/5 p-8 rounded-[2rem] shadow-premium flex flex-col justify-between hover:bg-white hover:border-[#4B4F9F]/20 hover:shadow-xl transition-all duration-300 cursor-pointer relative"
            >
              
              {/* Quote Icon watermark */}
              <div className="absolute top-6 right-8 text-brand-indigo/5 pointer-events-none">
                <Quote className="w-10 h-10 rotate-180" />
              </div>

              <div>
                {/* Header: Student Info & Date */}
                <div className="flex items-center gap-3.5 mb-6">
                  {/* Initials Avatar */}
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-tr ${review.avatarColor} text-white flex items-center justify-center font-black text-sm shadow-inner uppercase`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-deepIndigo text-sm block">
                      {review.name}
                    </h4>
                    <span className="text-[10px] font-black text-brand-magenta uppercase tracking-wider block mt-0.5">
                      {review.course}
                    </span>
                  </div>
                </div>

                {/* Rating Stars & Date */}
                <div className="flex items-center justify-between gap-4 mb-4 border-t border-brand-indigo/5 pt-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-brand-mutedText block">
                    {review.date}
                  </span>
                </div>

                {/* Review Content Paragraph */}
                <p className="text-xs sm:text-sm leading-relaxed text-brand-deepIndigo font-medium mb-6 italic">
                  "{review.content}"
                </p>
              </div>

              {/* Verified Tag Footer */}
              <div className="border-t border-brand-indigo/5 pt-4 mt-auto flex items-center justify-between">
                <span className="text-[8px] font-black text-[#16a34a] uppercase tracking-widest bg-[#dcfce7] px-2.5 py-0.5 rounded-full border border-[#bbf7d0]">
                  VERIFIED REVIEW
                </span>
                <span className="text-[9px] font-bold text-brand-mutedText">
                  Google Play Store
                </span>
              </div>

            </div>
          ))}
        </StaggerContainer>

      </div>
    </section>
  );
};
export default Testimonials;
