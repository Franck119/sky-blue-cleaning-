
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from '../App';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Residential' | 'Commercial' | 'Industrial' | 'Specialized'>('All');
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Specialized'];
  
  const filteredServices = activeCategory === 'All' 
    ? SERVICES.slice(0, 6) 
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">
            {lang === 'en' ? 'Our Services' : 'Nos Services'}
          </h2>
          <h3 className="text-5xl font-bold text-slate-900 mb-8 tracking-tight">
            {lang === 'en' ? 'Hygiene Solutions for Every Space' : 'Solutions d\'Hygiène pour Chaque Espace'}
          </h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-3 rounded-full font-bold transition-all duration-300 border-2 ${
                  activeCategory === cat 
                  ? 'bg-sky-500 text-white border-sky-500 shadow-xl shadow-sky-500/25 scale-105' 
                  : 'bg-white text-slate-500 border-slate-100 hover:border-sky-200 hover:text-sky-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredServices.map((service, index) => {
            const IconComponent = (LucideIcons as any)[service.icon];
            return (
              <div 
                key={service.id} 
                className={`reveal delay-${(index % 3 + 1) * 100} group p-10 rounded-[3rem] border border-slate-100 hover:border-sky-200 bg-white hover:bg-sky-50/30 transition-all duration-500 flex flex-col h-full diamond-polish`}
              >
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                  {IconComponent && <IconComponent className="w-8 h-8" />}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{t(service.title)}</h4>
                <p className="text-slate-600 mb-8 flex-grow leading-relaxed line-clamp-3">{t(service.description)}</p>
                
                <div className="flex justify-between items-center mt-auto border-t border-slate-50 pt-6">
                  <div className="text-xs font-black text-sky-600 uppercase tracking-widest bg-sky-100/50 px-3 py-1 rounded-lg">
                    {service.category}
                  </div>
                  <Link to="/services" className="w-10 h-10 rounded-full border border-sky-100 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-20 text-center reveal">
          <p className="text-slate-500 font-medium mb-6">
            {lang === 'en' ? 'Looking for something more specific?' : 'Vous cherchez quelque chose de plus spécifique ?'}
          </p>
          <Link to="/services" className="inline-flex items-center gap-3 bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-sky-600 transition-all shadow-xl">
            {lang === 'en' ? 'View All 17 Services' : 'Voir les 17 services'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
