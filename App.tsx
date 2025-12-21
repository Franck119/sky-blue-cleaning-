
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Language } from './types';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BenefitsPage from './pages/BenefitsPage';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: any) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useTranslation must be used within LanguageProvider");
  return context;
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = (item: any) => {
    if (typeof item === 'string') return item;
    return item[lang] || item['en'] || '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden flex flex-col">
          <Navbar scrolled={scrolled} />
          
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/benefits" element={<BenefitsPage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </LanguageContext.Provider>
  );
};

export default App;
