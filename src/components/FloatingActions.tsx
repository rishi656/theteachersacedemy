import React from 'react';
import { Phone, MessageCircle, Youtube } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const handleExploreCourses = () => {
    const element = document.querySelector('#courses');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop/Tablet Floating Actions Panel (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col gap-3">
        
        {/* YouTube */}
        <a
          href="https://youtube.com/@TheTeachersAcademy"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg hover:bg-red-700 transition-all duration-300 hover:scale-110"
          title="Watch Free Videos on YouTube"
        >
          <Youtube className="w-5 h-5 fill-current" />
        </a>

        {/* Support Phone Call */}
        <a
          href="tel:6355910277"
          className="w-12 h-12 rounded-full bg-brand-indigo text-white flex items-center justify-center shadow-lg hover:bg-brand-deepIndigo transition-all duration-300 hover:scale-110"
          title="Call Support Desk"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* WhatsApp Chat */}
        <a
          href="https://wa.me/916355910277?text=Hello%20The%20Teachers%20Academy,%20I%20want%20to%20inquire%20about%20your%20TET/TAT%20coaching%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110"
          title="Inquire on WhatsApp"
        >
          <MessageCircle className="w-5.5 h-5.5 fill-current" />
        </a>
      </div>

      {/* Mobile Sticky Footer Action Strip */}
      <div className="fixed bottom-0 left-0 right-0 z-40 sm:hidden flex items-center justify-between gap-2 p-3 bg-white border-t border-brand-indigo/10 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        
        {/* WhatsApp Mobile Trigger */}
        <a
          href="https://wa.me/916355910277?text=Hello%20The%20Teachers%20Academy,%20I%20want%20to%20inquire%20about%20your%20TET/TAT%20coaching%20classes."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#25D366] text-white shadow-sm shrink-0"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-current" />
        </a>

        {/* Direct Call Mobile Trigger */}
        <a
          href="tel:6355910277"
          className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-lavender text-brand-indigo shadow-sm border border-brand-indigo/10 shrink-0"
          aria-label="Call support"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Primary Explore Courses Mobile CTA */}
        <button
          onClick={handleExploreCourses}
          className="flex-1 py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-brand-indigo to-brand-magenta active:scale-[0.98] shadow-md transition-transform"
        >
          Explore Courses
        </button>

      </div>
    </>
  );
};
