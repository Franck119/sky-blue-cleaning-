
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Values from '../components/Values';
import Services from '../components/Services';
import Calculator from '../components/Calculator';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="page-entrance">
      <Hero />
      <About />
      <Values />
      <Calculator />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default HomePage;
