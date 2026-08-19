import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { ScrollToTop } from './components/ScrollToTop';
import { PromoPopup } from './components/PromoPopup';
import { IntroLoader } from './components/IntroLoader';

// Page Views
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { CoursesPage } from './pages/CoursesPage';
import { ResultsPage } from './pages/ResultsPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { BooksPage } from './pages/BooksPage';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen bg-[#F8F9FA] font-sans antialiased text-[#17172B] overflow-x-hidden">
        
        {/* Fullscreen 3D Book Page-Flipping Intro Loader */}
        <IntroLoader />

        {/* Isolated High-Performance Custom Cursor (Runs directly on GPU, 0 React Re-renders) */}
        <CustomCursor />

        {/* Promo modal triggered 10s after mount */}
        <PromoPopup />

        {/* Resets scroll position to top on every navigation route change */}
        <ScrollToTop />

        {/* Global Navigation Bar */}
        <Navbar />

        {/* Page Routing Tree */}
        <main className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/books" element={<BooksPage />} />
          </Routes>
        </main>

        {/* Global Quick Action Links */}
        <FloatingActions />

        {/* Site Footer */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;
