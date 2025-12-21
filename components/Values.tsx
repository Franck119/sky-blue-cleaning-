
import React from 'react';
import * as LucideIcons from 'lucide-react';
import { VALUES } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from '../App';

const Values: React.FC = () => {
  const containerRef = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section ref={containerRef} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16 reveal">
        <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">Our Core Values</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">What Sets Us Apart</h3>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {VALUES.map((value, index) => {
            const IconComponent = (LucideIcons as any)[value.icon];
            return (
              <div 
                key={index} 
                className={`reveal delay-${(index + 1) * 100} bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 text-center border border-white group`}
              >
                <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-3xl flex items-center justify-center mx-auto mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white animate-float">
                  {IconComponent && <IconComponent className="w-10 h-10" />}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-4">{t(value.title)}</h4>
                <p className="text-slate-600 leading-relaxed">{t(value.description)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
