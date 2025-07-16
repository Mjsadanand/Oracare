
'use client';

import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import PricingSection from '../components/PricingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import ScrollLines from '../components/ScrollLines';
import LoaderPage from '../components/LoaderPage';

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Reduce loader time on mobile for better UX
    const isMobile = window.innerWidth < 768;
    const loaderDuration = isMobile ? 2000 : 3000; // 2s on mobile, 3s on desktop
    
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, loaderDuration);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen relative">
      {showLoader && <LoaderPage />}
      
      <div className={`transition-opacity duration-1000 ${showLoader ? 'opacity-100' : 'opacity-100'}`}>
        <ScrollLines />
        <Navbar />
        <HeroSection />
        
        {/* Sections with content animations */}
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />

        <Chatbot />
        
        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-28 z-50 bg-black/80 backdrop-blur-lg border border-gray-600/50 text-white p-3 rounded-full shadow-lg hover:bg-black/90 hover:scale-110 transition-all duration-300 group"
            title="Scroll to top"
          >
            <i className="ri-arrow-up-line text-xl group-hover:text-cyan-300 transition-colors duration-300"></i>
          </button>
        )}
      </div>
    </div>
  );
}