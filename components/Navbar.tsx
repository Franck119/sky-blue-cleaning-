
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Droplets, Globe } from 'lucide-react';
import { useTranslation } from '../App';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, setLang } = useTranslation();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const navLinks = [
    { name: lang === 'en' ? 'Home' : 'Accueil', href: '/' },
    { name: lang === 'en' ? 'Services' : 'Services', href: '/services' },
    { name: lang === 'en' ? 'Benefits' : 'Avantages', href: '/benefits' },
    { name: lang === 'en' ? 'Portfolio' : 'Réalisations', href: '/portfolio' },
    { name: lang === 'en' ? 'Blog' : 'Blog', href: '/blog' },
    { name: lang === 'en' ? 'Contact' : 'Contact', href: '/contact' },
  ];

  const navbarBg = scrolled || !isHome ? 'bg-white shadow-md py-4' : 'bg-transparent py-6';
  const textColor = scrolled || !isHome ? 'text-slate-900' : 'text-white';
  const linkColor = scrolled || !isHome ? 'text-slate-600 hover:text-sky-600' : 'text-white/90 hover:text-white';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-sky-500 p-2 rounded-lg">
              <div className="relative">
                <Droplets className="text-white w-6 h-6" />
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            <span className={`text-2xl font-bold tracking-tight ${textColor}`}>
              SKYBLUE CLEANING
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center bg-sky-100/10 rounded-full p-1 border border-sky-200/20">
              <button 
                onClick={() => setLang('en')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'en' ? 'bg-sky-500 text-white shadow-md' : textColor}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLang('fr')}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all ${lang === 'fr' ? 'bg-sky-500 text-white shadow-md' : textColor}`}
              >
                FR
              </button>
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`font-medium transition-colors ${linkColor} ${location.pathname === link.href ? 'text-sky-600 font-bold underline decoration-2 underline-offset-8' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-sky-500/20"
            >
              {lang === 'en' ? 'Get a Quote' : 'Devis Rapide'}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setLang(lang === 'en' ? 'fr' : 'en')} className={`${textColor} text-xs font-bold`}>
              {lang.toUpperCase()}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} p-2`}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white shadow-xl transition-all duration-300 ${
        isOpen ? 'opacity-100 visible h-auto border-t' : 'opacity-0 invisible h-0 overflow-hidden'
      }`}>
        <div className="px-4 pt-4 pb-6 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-3 text-base font-medium rounded-md ${location.pathname === link.href ? 'bg-sky-50 text-sky-600' : 'text-slate-700 hover:bg-sky-50 hover:text-sky-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 px-3">
             <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-sky-500 text-white px-6 py-3 rounded-xl font-bold shadow-lg"
            >
              {lang === 'en' ? 'Get a Quote' : 'Devis Rapide'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
