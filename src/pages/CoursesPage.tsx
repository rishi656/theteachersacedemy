import React from 'react';
import { Courses } from '../components/Courses';
import { Features } from '../components/Features';
import { AppCTA } from '../components/AppCTA';

export const CoursesPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Courses />
      <Features />
      <AppCTA />
    </div>
  );
};
export default CoursesPage;
