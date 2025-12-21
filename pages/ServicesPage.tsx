
import React, { useState, useEffect } from 'react';
import * as LucideIcons from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight, X, Sparkles, ClipboardList, Target, ShieldCheck } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useTranslation } from '../App';
import { Service } from '../types';

const ServiceModal: React.FC<{ service: Service; onClose: () => void }> = ({ service, onClose }) => {
  const { lang, t } = useTranslation();
  const IconComponent = (LucideIcons as any)[service.icon];
  const navigate = useNavigate();

  const tasks = service.includedTasks[lang] || service.includedTasks['en'];
  const specs = service.specifications[lang] || service.specifications['en'];
  
  const detailedText = t(service.detailedDescription);
  const paragraphs = detailedText.split('\n\n');

  const serviceImages: Record<string, string> = {
    'jan-1': 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    'off-1': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200',
    'med-1': 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200',
    'win-1': 'https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=1200',
    'carp-1': 'https://images.unsplash.com/photo-1558317374-067fb5f30001?auto=format&fit=crop&q=80&w=1200',
    'wax-1': 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    'post-1': 'https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1200',
    'dis-1': 'https://images.unsplash.com/photo-1584433144859-1fc3ab94a957?auto=format&fit=crop&q=80&w=1200',
    'ind-1': 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200',
    'res-1': 'https://images.unsplash.com/photo-1603673073913-c980325d2543?auto=format&fit=crop&q=80&w=1200',
    'mov-1': 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
    'pre-1': 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=1200',
    'uph-1': 'https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?auto=format&fit=crop&q=80&w=1200',
    'kit-1': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200',
    'edu-1': 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200',
    'air-1': 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200',
    'sol-1': 'https://images.unsplash.com/photo-1508514177221-18d14 closure-e26093c23a54?auto=format&fit=crop&q=80&w=1200',
  };

  const modalImg = serviceImages[service.id] || `https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=1200&sig=${service.id}`;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8">
      <div 
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-md cursor-pointer"
        onClick={onClose}
      ></div>
      
      <div className="relative w-full max-w-6xl bg-white rounded-3xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row h-full lg:h-auto max-h-[95vh] lg:max-h-[85vh] border border-slate-200">
        
        <div className="lg:w-5/12 relative min-h-[250px] lg:min-h-[500px] flex-shrink-0">
          <img src={modalImg} className="w-full h-full object-cover" alt={t(service.title)} />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-12 text-white space-y-4">
             <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30">
                {IconComponent && <IconComponent className="w-8 h-8 text-sky-400" />}
             </div>
             <h2 className="text-3xl lg:text-5xl font-bold leading-tight tracking-tight">{t(service.title)}</h2>
             <div className="flex items-center gap-2 text-sky-400 font-bold uppercase tracking-widest text-xs">
                <ShieldCheck className="w-4 h-4" />
                SkyBlue Cleaning Certified Professional
             </div>
          </div>

          <button onClick={onClose} className="absolute top-6 left-6 lg:hidden w-10 h-10 bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white z-20">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="lg:w-7/12 p-6 md:p-12 lg:p-16 overflow-y-auto custom-scrollbar bg-white relative flex flex-col">
          <div className="hidden lg:block absolute top-10 right-10 z-20">
            <button onClick={onClose} className="w-12 h-12 bg-slate-100 hover:bg-sky-500 hover:text-white rounded-xl flex items-center justify-center transition-all group">
              <X className="w-6 h-6 group-hover:scale-125 transition-transform" />
            </button>
          </div>

          <div className="space-y-10">
            <div className="space-y-6">
              <span className="text-xs font-black text-sky-600 uppercase tracking-widest bg-sky-50 px-4 py-2 rounded-lg inline-block">
                {service.category} Service
              </span>
              <p className="text-xl lg:text-2xl text-slate-900 leading-relaxed font-bold border-l-4 border-sky-500 pl-6">
                {t(service.description)}
              </p>
              
              <div className="text-lg text-slate-700 leading-relaxed space-y-6 pt-2">
                 {paragraphs.map((p, idx) => (
                   <p key={idx} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 leading-relaxed text-sm md:text-base">
                     {p}
                   </p>
                 ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 bg-white p-8 rounded-3xl border border-sky-100 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-3 pb-3 border-b border-sky-100">
                  <ClipboardList className="w-5 h-5 text-sky-500" />
                  {lang === 'en' ? 'Core Tasks' : 'Tâches Clés'}
                </h4>
                <ul className="space-y-3">
                  {tasks.map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-slate-700 text-xs md:text-sm font-semibold">
                      <div className="w-2 h-2 rounded-full bg-sky-500 mt-1.5 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6 bg-white p-8 rounded-3xl border border-sky-100 shadow-sm">
                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-3 pb-3 border-b border-sky-100">
                  <Target className="w-5 h-5 text-sky-500" />
                  {lang === 'en' ? 'Service Specs' : 'Spécifications'}
                </h4>
                <ul className="space-y-3">
                  {specs.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800 font-bold text-[10px] md:text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
               <div className="text-white relative z-10 text-center md:text-left">
                  <h5 className="text-xl md:text-2xl font-bold mb-2">
                     {lang === 'en' ? 'Request Your Proposal' : 'Demandez Votre Devis'}
                  </h5>
                  <p className="text-slate-400 text-xs md:text-sm max-w-xs">
                     {lang === 'en' ? "Get a tailored plan for your facility." : "Obtenez un plan sur mesure."}
                  </p>
               </div>
               <button 
                 onClick={() => { onClose(); navigate('/contact'); }}
                 className="group relative z-10 bg-sky-500 text-white px-8 py-4 rounded-xl font-bold text-base md:text-lg hover:bg-sky-400 transition-all flex items-center justify-center gap-3 shadow-lg"
               >
                 {lang === 'en' ? 'Get a Quote' : 'Devis Rapide'}
                 <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
               </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesPage: React.FC = () => {
  const containerRef = useScrollReveal();
  const { lang, t } = useTranslation();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelectedService(null); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  useEffect(() => {
    if (selectedService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'unset';
  }, [selectedService]);

  return (
    <div className="bg-white page-entrance" ref={containerRef}>
      <PageHeader 
        title={lang === 'en' ? "Elite Cleaning Portfolio" : "Nos Solutions d'Élite"} 
        subtitle={lang === 'en' ? "Discover the full range of professional hygiene services across West Africa." : "Découvrez la gamme complète de services d'hygiène professionnelle."}
        imageUrl="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = (LucideIcons as any)[service.icon];
            
            return (
              <div key={service.id} className={`reveal flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                <div className="lg:w-1/2 space-y-8">
                  <div className="inline-flex items-center gap-2 bg-sky-50 text-sky-600 px-5 py-2 rounded-xl font-black text-xs uppercase tracking-widest border border-sky-100">
                    <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
                    {service.category} Category
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">{t(service.title)}</h2>
                  <p className="text-xl text-slate-600 leading-relaxed line-clamp-3">
                    {t(service.description)}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 pt-4">
                    <button 
                      onClick={() => setSelectedService(service)}
                      className="group inline-flex items-center gap-4 bg-sky-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg"
                    >
                      {lang === 'en' ? 'Consult Service' : 'Consulter Détails'}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </button>
                    <Link 
                      to="/contact" 
                      className="inline-flex items-center gap-4 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg"
                    >
                      {lang === 'en' ? 'Inquire Now' : 'S\'informer'}
                    </Link>
                  </div>
                </div>

                <div className="lg:w-1/2 w-full reveal cursor-pointer group" onClick={() => setSelectedService(service)}>
                  <div className="aspect-[16/10] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative diamond-polish transition-all duration-700">
                    <img 
                      src={`https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&q=80&w=800&sig=${service.id}`} 
                      alt={t(service.title)}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 mix-blend-multiply transition-opacity opacity-60 group-hover:opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-white text-sky-950 px-8 py-4 rounded-full font-bold shadow-2xl flex items-center gap-4 border border-white/50">
                        <div className="w-10 h-10 bg-sky-600 text-white rounded-lg flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-6 h-6" />}
                        </div>
                        <span className="text-lg uppercase tracking-wider">{lang === 'en' ? 'More Info' : 'Voir Plus'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {selectedService && (
        <ServiceModal 
          service={selectedService} 
          onClose={() => setSelectedService(null)} 
        />
      )}
    </div>
  );
};

export default ServicesPage;
