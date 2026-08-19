import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Smartphone, ChevronDown } from 'lucide-react';
import { Logo } from './Logo';

interface SubmenuItem {
  name: string;
  to: string;
  tabDetail?: string;
}

interface NavLink {
  name: string;
  to?: string;
  submenu?: SubmenuItem[];
}

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: NavLink[] = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    {
      name: 'Courses',
      submenu: [
        { name: 'TET-1', to: '/courses', tabDetail: 'TET-1' },
        { name: 'TET-2', to: '/courses', tabDetail: 'TET-2' },
        { name: 'TAT (Secondary)', to: '/courses', tabDetail: 'TAT(S)' },
        { name: 'TAT (Higher Secondary)', to: '/courses', tabDetail: 'TAT(HS)' }
      ]
    },
    {
      name: 'Batches',
      submenu: [
        { name: 'Live Batches', to: '/courses', tabDetail: 'ALL' },
        { name: 'Recorded Batches', to: '/courses', tabDetail: 'ALL' },
        { name: 'Upcoming Batches', to: '/courses', tabDetail: 'ALL' }
      ]
    },
    {
      name: 'Study Material',
      submenu: [
        { name: 'GCERT Grammar Booster', to: '/courses', tabDetail: 'General' },
        { name: 'Notes', to: '/about' },
        { name: 'Books', to: '/books' },
        { name: 'Practice Material', to: '/courses' }
      ]
    },
    { name: 'Results', to: '/results' },
    { name: 'Blog', to: '/blog' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const handleLinkClick = (to: string, tabDetail?: string) => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedMenu(null);

    navigate(to);

    // If tabDetail is provided, dispatch a custom event to change Course catalog filter state
    if (tabDetail) {
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('select-course-tab', { detail: tabDetail }));
      }, 50);
    }
  };

  const isActiveRoute = (to: string) => {
    return location.pathname === to;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 py-4 px-4 sm:px-6 lg:px-8">
      {/* Capsule bar container */}
      <div
        className={`max-w-7xl mx-auto rounded-2xl sm:rounded-[1.5rem] transition-all duration-300 nav-capsule py-2.5 px-6 shadow-premium border border-white/40 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-md'
            : 'bg-white/45 backdrop-blur-md'
        }`}
      >
        <div className="flex items-center justify-between font-sans relative">
          
          {/* Logo */}
          <Link to="/" onClick={() => handleLinkClick('/')} className="cursor-pointer">
            <Logo />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const hasSubmenu = !!link.submenu;
              const active = link.to ? isActiveRoute(link.to) : false;
              
              return (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => hasSubmenu && setActiveDropdown(link.name)}
                  onMouseLeave={() => hasSubmenu && setActiveDropdown(null)}
                >
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={(e) => { e.preventDefault(); handleLinkClick(link.to!); }}
                      className={`px-3 py-2 text-[13px] font-bold slide-underline transition-all duration-200 block ${
                        active ? 'text-brand-indigo' : 'text-brand-darkText/80 hover:text-brand-indigo'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      className="flex items-center gap-1 px-3 py-2 text-[13px] font-bold text-brand-darkText/80 hover:text-brand-indigo transition-all duration-200 cursor-pointer focus:outline-none"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === link.name ? 'rotate-180 text-brand-indigo' : ''
                      }`} />
                    </button>
                  )}

                  {/* Dropdown Menu Overlay */}
                  <AnimatePresence>
                    {hasSubmenu && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: 'easeOut' }}
                        className="absolute left-0 top-full pt-2 z-50 w-52"
                      >
                        <div className="bg-white/95 backdrop-blur-md rounded-2xl border border-brand-indigo/10 shadow-premium p-2 space-y-0.5">
                          {link.submenu!.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.to}
                              onClick={(e) => { e.preventDefault(); handleLinkClick(sub.to, sub.tabDetail); }}
                              className="block px-4 py-2.5 rounded-xl text-left text-xs font-bold text-brand-darkText/85 hover:text-brand-indigo hover:bg-brand-lavender/40 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-black text-brand-indigo hover:text-brand-deepIndigo bg-brand-lavender hover:bg-brand-lavender/80 transition-all duration-200"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Download App</span>
            </a>
            <Link
              to="/courses"
              onClick={(e) => { e.preventDefault(); handleLinkClick('/courses'); }}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black text-white bg-gradient-to-r from-brand-indigo to-brand-magenta hover:brightness-110 shadow-md shadow-brand-indigo/15 hover:shadow-lg transition-all duration-200 group hover:-translate-y-0.5"
            >
              <span>Explore Courses</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-brand-darkText/80 hover:text-brand-indigo hover:bg-brand-lavender/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-2 max-w-7xl mx-auto bg-white/95 backdrop-blur-md rounded-2xl border border-brand-indigo/10 shadow-xl overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isExpanded = mobileExpandedMenu === link.name;

                return (
                  <div key={link.name} className="w-full text-left">
                    {link.to ? (
                      <Link
                        to={link.to}
                        onClick={(e) => { e.preventDefault(); handleLinkClick(link.to!); }}
                        className="block px-4 py-3 rounded-xl text-sm font-bold text-brand-darkText/80 hover:text-brand-indigo hover:bg-brand-lavender/50 transition-colors text-left"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <div className="w-full">
                        <button
                          onClick={() => setMobileExpandedMenu(isExpanded ? null : link.name)}
                          className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-bold text-brand-darkText/80 hover:text-brand-indigo hover:bg-brand-lavender/50 transition-colors focus:outline-none"
                        >
                          <span>{link.name}</span>
                          <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? 'rotate-180 text-brand-indigo' : ''
                          }`} />
                        </button>
                        
                        {/* Mobile Submenu Drawer */}
                        <AnimatePresence initial={false}>
                          {isExpanded && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="pl-6 overflow-hidden bg-brand-lavender/20 rounded-xl space-y-0.5 mt-1"
                            >
                              {link.submenu!.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.to}
                                  onClick={(e) => { e.preventDefault(); handleLinkClick(sub.to, sub.tabDetail); }}
                                  className="block px-4 py-2.5 text-xs font-bold text-brand-darkText/75 hover:text-brand-indigo transition-colors"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )}
                  </div>
                );
              })}
              
              <div className="pt-4 flex flex-col gap-3 px-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.nxphmn.xmkenj&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-extrabold text-brand-indigo bg-brand-lavender hover:bg-brand-lavender/80 transition-colors"
                >
                  <Smartphone className="w-4 h-4" />
                  <span>Download App</span>
                </a>
                <Link
                  to="/courses"
                  onClick={(e) => { e.preventDefault(); handleLinkClick('/courses'); }}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-extrabold text-white bg-gradient-to-r from-brand-indigo to-brand-magenta hover:brightness-110 shadow-md shadow-brand-indigo/10"
                >
                  <span>Explore Courses</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
