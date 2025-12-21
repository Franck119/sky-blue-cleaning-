
import React from 'react';
import { useTranslation } from '../App';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Testimonials: React.FC = () => {
  const { lang, t } = useTranslation();
  const containerRef = useScrollReveal();

  return (
    <section ref={containerRef} className="py-24 bg-sky-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 reveal">
          <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm mb-4">
            {lang === 'en' ? 'Testimonials' : 'Témoignages'}
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900">
            {lang === 'en' ? 'What Our Clients Say' : 'Ce Que Disent Nos Clients'}
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {TESTIMONIALS.map((test, index) => (
            <div key={test.id} className={`reveal delay-${(index + 1) * 200} bg-white p-12 rounded-[3rem] shadow-xl relative border border-white group hover:translate-y-[-5px] transition-all`}>
              <div className="absolute -top-6 left-12 w-12 h-12 bg-sky-600 text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                <Quote className="w-6 h-6" />
              </div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-xl text-slate-600 italic mb-8 leading-relaxed">
                "{t(test.text)}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center font-bold text-sky-600">
                  {test.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{test.name}</h4>
                  <p className="text-sm text-slate-500">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
