
import React from 'react';
import { Droplets, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useTranslation } from '../App';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { lang } = useTranslation();

  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-16 mb-20">
          <div className="col-span-2 space-y-8">
            <div className="flex items-center gap-2">
              <div className="bg-sky-500 p-2 rounded-xl">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-bold tracking-tighter">SKYBLUE CLEANING</span>
            </div>
            <p className="text-slate-400 max-w-md text-lg leading-relaxed">
              {lang === 'en' 
                ? "Setting the diamond standard for professional hygiene in West Africa. From skyscrapers to residences, we provide meticulous care you can rely on." 
                : "Établir la norme de référence pour l'hygiène professionnelle en Afrique de l'Ouest. Du gratte-ciel à la résidence."}
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 bg-white/5 hover:bg-sky-500 hover:scale-110 rounded-2xl flex items-center justify-center transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-8 tracking-tight">{lang === 'en' ? 'Quick Links' : 'Liens Rapides'}</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/services" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Our Services' : 'Nos Services'}</Link></li>
              <li><Link to="/benefits" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Our Benefits' : 'Nos Avantages'}</Link></li>
              <li><Link to="/portfolio" className="hover:text-sky-400 transition-colors">{lang === 'en' ? 'Recent Projects' : 'Projets Récents'}</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Blog & News</Link></li>
              <li><Link to="/contact" className="hover:text-sky-400 transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="font-bold text-xl mb-8 tracking-tight">{lang === 'en' ? 'Service Areas' : 'Zones de Service'}</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> Abidjan, Côte d'Ivoire</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> Yamoussoukro, Côte d'Ivoire</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> Dakar, Sénégal</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> Accra, Ghana</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-sky-500" /> Lomé, Togo</li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500 text-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <p>© {new Date().getFullYear()} SkyBlue Cleaning West Africa Group.</p>
            <div className="flex gap-8 font-medium">
              <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Privacy' : 'Confidentialité'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Terms' : 'Conditions'}</a>
              <a href="#" className="hover:text-white transition-colors">{lang === 'en' ? 'Sitemap' : 'Plan du site'}</a>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest font-black text-sky-500/50">Modern Standards</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
