import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Smartphone, Youtube, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#17172B] text-white/70 border-t border-white/5 pt-16 pb-28 sm:pb-12 text-left relative z-10 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <Logo className="text-white invert brightness-0 mb-4" />
            <p className="text-sm leading-relaxed mb-6 font-medium text-white/50 max-w-sm">
              Providing structured competitive examinations coaching for future educators in Gujarat. Qualified concepts, expert strategies, and dedicated guidance.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.youtube.com/@TheTeachersAcademyOfficial"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-red-600/20 hover:text-red-500 border border-white/10 flex items-center justify-center transition-colors"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://wa.me/916355910277"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-emerald-500/20 hover:text-[#25D366] border border-white/10 flex items-center justify-center transition-colors"
                aria-label="WhatsApp Support"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-brand-indigo/20 hover:text-brand-indigo border border-white/10 flex items-center justify-center transition-colors"
                aria-label="Download Android App"
              >
                <Smartphone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-2">
            <h3 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/results" className="hover:text-white transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link to="/books" className="hover:text-white transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Exams Covered */}
          <div className="lg:col-span-3">
            <h3 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">
              Exams Covered
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">TET-1 (Primary)</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">TET-2 (Upper Primary)</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">TAT Secondary</Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">TAT Higher Secondary</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact/Connect */}
          <div className="lg:col-span-3">
            <h3 className="font-extrabold text-white text-xs uppercase tracking-widest mb-4">
              Connect Desk
            </h3>
            <ul className="space-y-3 text-sm font-semibold">
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-wider mb-0.5">Call Helpline</span>
                <a href="tel:6355910277" className="hover:text-white transition-colors text-white/90">6355910277</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-wider mb-0.5">Support Email</span>
                <a href="mailto:support@theteachersacademy.com" className="hover:text-white transition-colors text-white/90">support@theteachersacademy.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] text-white/40 uppercase font-black tracking-wider mb-0.5">Office Location</span>
                <span className="text-white/80 leading-normal">Gandhinagar, Gujarat, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright details */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 text-xs font-bold text-white/30">
            <span>© {new Date().getFullYear()} The Teachers' Academy. All rights reserved.</span>
            <span className="hidden sm:inline-block text-white/10">|</span>
            <span>
              Created by{' '}
              <a
                href="https://avyraservices.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-magenta hover:text-white transition-colors font-black"
              >
                Avyra Services
              </a>
            </span>
          </div>
          <div className="flex gap-6 text-xs font-bold text-white/30">
            <a href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Play Store Policy</a>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;
