import React from 'react';
import { Hero } from '../components/Hero';
import { ExamStrip } from '../components/ExamStrip';
import { Courses } from '../components/Courses';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { HardikSir } from '../components/HardikSir';
import { Journey } from '../components/Journey'; // Learning System
import { Features } from '../components/Features'; // Special Programs
import { Results } from '../components/Results';
import { Testimonials } from '../components/Testimonials';
import { AppCTA } from '../components/AppCTA';

export const Home: React.FC = () => {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Exams Strip */}
      <ExamStrip />

      {/* 3. Batches Grid */}
      <Courses />

      {/* 4. Why Us Checklist */}
      <WhyChooseUs />

      {/* 5. Hardik Sir (Mentor Bio) */}
      <HardikSir />

      {/* 6. Learning System (Journey Timeline) */}
      <Journey />

      {/* 7. Special Programs (Features Toolkit) */}
      <Features />

      {/* 8. Results Verified Mock Sheets */}
      <Results />

      {/* 9. Testimonials Reviews Slider */}
      <Testimonials />

      {/* 10. App/CTA Installation Banner */}
      <AppCTA />
    </>
  );
};

export default Home;
