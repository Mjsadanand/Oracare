
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Handle loading state for page transitions
    const handleStart = () => setIsLoading(true);
    const handleComplete = () => {
      setTimeout(() => setIsLoading(false), 500); // Small delay for smooth transition
    };

    // Listen for route changes
    const originalPush = router.push;
    router.push = (...args) => {
      handleStart();
      const result = originalPush.apply(router, args);
      // Next.js router.push returns void, so always call handleComplete after push
      handleComplete();
      return result;
    };

    return () => {
      router.push = originalPush;
    };
  }, [router]);

  const handleLinkClick = (href: string) => {
    setIsLoading(true);
    router.push(href);
    setIsOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 border border-white/20 shadow-lg ${
        scrolled
          ? 'bg-gray-900/30 backdrop-blur-2xl'
          : 'bg-black/20 backdrop-blur-xl'
      }`}
      style={{
        top: '8px',
        left: '8px',
        right: '8px',
        margin: '0 auto',
        maxWidth: 'calc(100vw - 16px)',
        borderRadius: '12px',
      }}
    >
      {/* Loading Progress Bar */}
      <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ease-out ${
        isLoading ? 'w-full opacity-100' : 'w-0 opacity-0'
      }`}>
        <div className={`h-full bg-gradient-to-r from-white/30 to-transparent animate-shimmer ${isLoading ? 'block' : 'hidden'}`}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl sm:text-2xl font-bold"
              style={{
                fontFamily: 'Agile, serif',
                background: 'linear-gradient(45deg, #FF0000 0%, #FFFF00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              HOPE
            </Link>
            <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/ciguatera" />
            <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/agile" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex ml-6 xl:ml-10 items-baseline space-x-4 xl:space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap !text-white hover:!text-cyan-300"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap !text-white hover:!text-cyan-300"
            >
              Services
            </button>
            <button
              onClick={() => handleLinkClick('/products')}
              className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 whitespace-nowrap !text-white hover:!text-cyan-300"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap !text-white hover:!text-cyan-300"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 cursor-pointer whitespace-nowrap !text-white hover:!text-cyan-300"
            >
              Contact
            </button>
            <div className="flex items-center space-x-2 xl:space-x-4">
              <ThemeToggle />
              <button
                onClick={() => handleLinkClick('/signin')}
                className="nav-menu-item px-2 xl:px-3 py-2 text-sm xl:text-base font-semibold transition-colors duration-200 whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Sign In
              </button>
              <button
                onClick={() => handleLinkClick('/signup')}
                className="bg-primary !text-white px-3 xl:px-4 py-2 rounded-lg text-sm xl:text-base font-semibold hover:bg-blue-600 transition-all duration-200 whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none w-6 h-6 flex items-center justify-center"
              title={isOpen ? "Close menu" : "Open menu"}
            >
              <i className={`${isOpen ? 'ri-close-line' : 'ri-menu-line'} text-xl w-6 h-6 flex items-center justify-center`}></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900/20 backdrop-blur-xl border-t border-white/20 rounded-b-xl">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Services
              </button>
              <button
                onClick={() => handleLinkClick('/products')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection('pricing')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 cursor-pointer w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Contact
              </button>
              <button
                onClick={() => handleLinkClick('/signin')}
                className="block px-3 py-2 text-base font-medium transition-colors duration-200 w-full text-left whitespace-nowrap !text-white hover:!text-cyan-300"
              >
                Sign In
              </button>
              <button
                onClick={() => handleLinkClick('/signup')}
                className="bg-primary !text-white block px-3 py-2 rounded-lg text-base font-medium hover:bg-blue-600 transition-all duration-200 mx-3 mt-2 text-center whitespace-nowrap"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
