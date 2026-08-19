import React from 'react';
import { About } from '../components/About';
import { HardikSir } from '../components/HardikSir';
import { WhyChooseUs } from '../components/WhyChooseUs';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-16 bg-brand-offWhite">
      <About />
      <HardikSir />
      <WhyChooseUs />
    </div>
  );
};
export default AboutPage;
