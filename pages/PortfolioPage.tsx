
import React from 'react';
import PageHeader from '../components/PageHeader';
import { PORTFOLIO } from '../constants';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useTranslation } from '../App';

const PortfolioPage: React.FC = () => {
  const { lang, t } = useTranslation();
  
  return (
    <div className="bg-white page-entrance">
      <PageHeader 
        title={lang === 'en' ? "Our Portfolio" : "Nos Réalisations"} 
        subtitle={lang === 'en' ? "Explore our track record of excellence in major hubs across the Ivory Coast." : "Découvrez notre palmarès d'excellence dans les principaux centres de Côte d'Ivoire."}
        imageUrl="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PORTFOLIO.map((item) => (
              <div key={item.id} className="flex flex-col h-full bg-white group cursor-pointer border border-slate-100 rounded-[3rem] p-4 hover:shadow-2xl transition-all">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden mb-6 shadow-lg">
                  <img src={item.imageUrl} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={t(item.title)} />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-md text-sky-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">{item.category}</span>
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 text-sky-600 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase">{item.location}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">{t(item.title)}</h3>
                  <p className="text-slate-600 mt-2 mb-6">{t(item.description)}</p>
                  <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                    <span className="text-sky-600 font-bold">{t(item.results)}</span>
                    <ArrowUpRight className="w-6 h-6 text-sky-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
