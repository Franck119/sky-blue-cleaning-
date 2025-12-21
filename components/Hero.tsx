
import React, { useState, useEffect } from 'react';
import { ChevronRight, ShieldCheck, Sparkles } from 'lucide-react';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=1920",
    title: "Elite Commercial Solutions",
    subtitle: "Modern offices deserve a diamond-standard clean."
  },
  {
    image: "https://images.unsplash.com/photo-1527515545081-5db817172677?auto=format&fit=crop&q=80&w=1920",
    title: "Pristine Residential Spaces",
    subtitle: "Your home is your sanctuary. We keep it pure."
  },
  {
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1920",
    title: "Specialized Aviation Detailing",
    subtitle: "Precision cleaning for the highest flyers."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isWiping, setIsWiping] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      triggerSlideChange((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const triggerSlideChange = (index: number) => {
    if (index === current) return;
    setIsWiping(true);
    setTimeout(() => {
      setCurrent(index);
    }, 600); // Change slide in the middle of the wipe
    setTimeout(() => {
      setIsWiping(false);
    }, 1200);
  };

  return (
    <section className="relative h-[95vh] flex items-center overflow-hidden">
      {/* Squeegee Wipe Overlay */}
      <div className={`squeegee-wipe ${isWiping ? 'squeegee-active' : ''}`}></div>

      {/* Hero Slider */}
      {SLIDES.map((slide, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          <img 
            src={slide.image} 
            alt={slide.title}
            className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === current ? 'scale-110' : 'scale-100'}`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-900/40 to-transparent"></div>
        </div>
      ))}

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white space-y-8 animate-wipe">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <ShieldCheck className="w-5 h-5 text-sky-400" />
            <span className="text-sm font-medium">Premier Cleaning in West Africa</span>
          </div>
          
          <div className="relative">
            <Sparkles className="sparkle-icon top-0 -left-8 text-yellow-300 w-8 h-8" style={{ animationDelay: '0s' }} />
            <Sparkles className="sparkle-icon bottom-0 -right-8 text-sky-300 w-6 h-6" style={{ animationDelay: '1s' }} />
            <Sparkles className="sparkle-icon -top-12 left-1/2 text-white/50 w-4 h-4" style={{ animationDelay: '0.5s' }} />
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              {SLIDES[current].title.split(' ').map((word, i) => 
                word === 'Elite' || word === 'Pristine' || word === 'Aviation' ? (
                  <span key={i} className="text-sky-400"> {word} </span>
                ) : ` ${word} `
              )}
            </h1>
          </div>
          
          <p className="text-xl text-white/80 leading-relaxed transition-all duration-500">
            {SLIDES[current].subtitle} Combining local expertise with global standards for the Ivory Coast.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
              href="#calculator" 
              className="btn-shine bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all transform hover:translate-y-[-2px] shadow-xl shadow-sky-500/20"
            >
              Get Instant Quote
              <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="#services" 
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-xl font-bold flex items-center justify-center transition-all"
            >
              Explore Services
            </a>
          </div>

          {/* Slider Indicators */}
          <div className="flex gap-2 pt-12">
            {SLIDES.map((_, i) => (
              <button 
                key={i}
                onClick={() => triggerSlideChange(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-12 bg-sky-500' : 'w-4 bg-white/30 hover:bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
