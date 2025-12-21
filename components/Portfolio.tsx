
import React from 'react';
import { PORTFOLIO } from '../constants';
import { MapPin, ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from '../App';

const Portfolio: React.FC = () => {
  const containerRef = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section id="portfolio" ref={containerRef} className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 reveal">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Portfolio</h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl tracking-tight">
              West Africa's Cleanest Spaces
            </h3>
            <p className="text-slate-600 max-w-md text-lg leading-relaxed">
              Witness the SkyBlue Cleaning transformation across commercial hubs and industrial sites.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PORTFOLIO.map((item, index) => (
            <div 
              key={item.id} 
              className={`reveal delay-${(index % 2 + 1) * 200} group bg-white rounded-[3rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-white`}
            >
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={item.imageUrl} 
                  alt={t(item.title)}
                  className="w-full h-full object-cover transition-all duration-1000 blur-[2px] grayscale-[0.2] group-hover:blur-0 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-sky-900/10 opacity-40 group-hover:opacity-0 transition-opacity duration-700"></div>
                <div className="absolute top-6 left-6">
                  <span className="bg-white/90 backdrop-blur-md text-sky-900 px-5 py-2 rounded-2xl text-xs font-black uppercase tracking-widest shadow-lg">
                    {item.category}
                  </span>
                </div>
                {/* Polish Shine Effect */}
                <div className="shine-overlay group-hover:opacity-100 transition-opacity opacity-0"></div>
              </div>
              <div className="p-10">
                <div className="flex items-center gap-2 text-sky-600 mb-4">
                  <MapPin className="w-5 h-5 animate-pulse" />
                  <span className="text-sm font-black tracking-widest uppercase">{item.location}</span>
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-sky-600 transition-colors">{t(item.title)}</h4>
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">{t(item.description)}</p>
                <div className="bg-sky-50/50 p-8 rounded-3xl border border-sky-100 group-hover:bg-white transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-black text-sky-900 mb-2 uppercase tracking-widest">Client Satisfaction Outcome</p>
                      <p className="text-sky-800 text-lg font-medium italic">"{t(item.results)}"</p>
                    </div>
                    <div className="w-14 h-14 rounded-full bg-white shadow-lg flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-45">
                      <ArrowUpRight className="w-7 h-7" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
