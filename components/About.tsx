
import React from 'react';
import { useTranslation } from '../App';
import { CheckCircle2 } from 'lucide-react';

const About: React.FC = () => {
  const { lang, t } = useTranslation();

  const bulletPoints = [
    { en: "Bonded, Licensed & Insured for your protection", fr: "Garanti, licencié et assuré pour votre protection" },
    { en: "Customizable cleaning packages to fit your budget", fr: "Forfaits de nettoyage personnalisables selon votre budget" },
    { en: "Professional grade equipment and eco-solutions", fr: "Équipement de qualité professionnelle et éco-solutions" },
    { en: "Thoroughly vetted and background-checked staff", fr: "Personnel minutieusement vérifié et contrôlé" }
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-wipe">
            <h2 className="text-sky-600 font-bold tracking-widest uppercase text-sm">
              {lang === 'en' ? 'Who We Are' : 'Qui Sommes-Nous'}
            </h2>
            <h3 className="text-4xl font-bold text-slate-900 leading-tight">
              {lang === 'en' ? 'Professional Cleaning Services You Can Trust' : 'Services de Nettoyage Professionnels en qui Vous Pouvez Avoir Confiance'}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en' 
                ? "SkyBlue Cleaning provides top-tier cleaning solutions for commercial and residential clients throughout Abidjan and the wider ECOWAS region. Our mission is to provide high-quality services for our valued clients." 
                : "SkyBlue Cleaning fournit des solutions de nettoyage de premier plan pour les clients commerciaux et résidentiels à Abidjan et dans la région de la CEDEAO."}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {lang === 'en'
                ? "Our team goes above and beyond to cater to each project’s specific needs. Through open communication and exceptional service, we hope you’ll find what you’re looking for with our professional cleaning company."
                : "Notre équipe se surpasse pour répondre aux besoins spécifiques de chaque projet. Grâce à une communication ouverte et un service exceptionnel."}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
              {bulletPoints.map((point, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-500 flex-shrink-0" />
                  {t(point)}
                </li>
              ))}
            </ul>

            <div className="pt-4 grid grid-cols-2 gap-4">
              <div className="p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors cursor-default border border-sky-100">
                <div className="text-sky-600 font-bold text-xl mb-1">
                  {lang === 'en' ? '24/7 Support' : 'Support 24/7'}
                </div>
                <p className="text-slate-500 text-sm">
                  {lang === 'en' ? 'Always available for emergency responses.' : 'Toujours disponible pour les urgences.'}
                </p>
              </div>
              <div className="p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-colors cursor-default border border-sky-100">
                <div className="text-sky-600 font-bold text-xl mb-1">
                  {lang === 'en' ? 'Quality Guarantee' : 'Garantie Qualité'}
                </div>
                <p className="text-slate-500 text-sm">
                  {lang === 'en' ? 'Not satisfied? We re-clean for free.' : 'Pas satisfait ? On re-nettoie gratuitement.'}
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative group">
            <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl relative border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800" 
                alt="SkyBlue Cleaning Professional Team" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-8 -left-8 bg-sky-600 text-white p-8 rounded-[2rem] shadow-2xl hidden lg:block transform group-hover:translate-y-[-10px] transition-all border-4 border-white">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sky-100 font-medium tracking-widest uppercase text-xs">Reliability Score</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
