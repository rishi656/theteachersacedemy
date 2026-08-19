import React from 'react';
import { Contact } from '../components/Contact';
import { FAQ } from '../components/FAQ';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-16">
      <Contact />
      <FAQ />
    </div>
  );
};
export default ContactPage;
