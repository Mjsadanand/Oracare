'use client';

import { useEffect, useState, useRef } from 'react';

export default function ScrollLines() {
  const [scrollY, setScrollY] = useState(0);
  const [sections, setSections] = useState<Array<{
    id: string;
    element: Element;
    top: number;
    bottom: number;
    color: string;
  }>>([]);
  const [activeSection, setActiveSection] = useState(0);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    // Define section configurations with colors
    const sectionConfigs = [
      { id: 'hero', selector: '#hero', color: 'from-blue-500 via-purple-500 to-indigo-600' },
      { id: 'about', selector: '#about', color: 'from-purple-500 via-pink-500 to-rose-500' },
      { id: 'services', selector: '#services', color: 'from-pink-500 via-red-500 to-orange-500' },
      { id: 'pricing', selector: '#pricing', color: 'from-red-500 via-orange-500 to-amber-500' },
      { id: 'contact', selector: '#contact', color: 'from-orange-500 via-yellow-500 to-green-500' },
    ];

    const updateSections = () => {
      const newSections = sectionConfigs.map(config => {
        const element = document.querySelector(config.selector);
        if (element) {
          const rect = element.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          return {
            id: config.id,
            element,
            top: rect.top + scrollTop,
            bottom: rect.bottom + scrollTop,
            color: config.color,
          };
        }
        return null;
      }).filter(Boolean) as typeof sections;

      setSections(newSections);
    };

    // Initial setup
    setTimeout(updateSections, 100); // Delay to ensure DOM is ready
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      // Find active section
      const windowCenter = currentScrollY + window.innerHeight / 2;
      const current = sections.findIndex(section => 
        windowCenter >= section.top && windowCenter <= section.bottom
      );
      
      if (current !== -1 && current !== activeSection) {
        setActiveSection(current);
      }
    };

    const handleResize = () => {
      updateSections();
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [activeSection, sections]);

  const getTransitionProgress = () => {
    if (sections.length === 0) return 0;
    
    const currentSection = sections[activeSection];
    if (!currentSection) return 0;
    
    const sectionHeight = currentSection.bottom - currentSection.top;
    const scrollInSection = scrollY + window.innerHeight / 2 - currentSection.top;
    return Math.max(0, Math.min(1, scrollInSection / sectionHeight));
  };

  const getLinePosition = (sectionIndex: number) => {
    if (sections.length === 0 || sectionIndex >= sections.length - 1) return { top: '100%', show: false };
    
    const section = sections[sectionIndex];
    const nextSection = sections[sectionIndex + 1];
    
    if (!section || !nextSection) return { top: '100%', show: false };
    
    const linePosition = section.bottom;
    const viewportTop = scrollY;
    const viewportBottom = scrollY + window.innerHeight;
    
    // Show line when it's near the viewport
    const show = linePosition >= viewportTop - 200 && linePosition <= viewportBottom + 200;
    const topPercent = ((linePosition - viewportTop) / window.innerHeight) * 100;
    
    return { top: `${Math.max(0, Math.min(100, topPercent))}%`, show };
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Animated transition lines */}
      {sections.map((section, index) => {
        if (index >= sections.length - 1) return null;
        
        const { top, show } = getLinePosition(index);
        const isActiveTransition = index === activeSection;
        const progress = isActiveTransition ? getTransitionProgress() : 0;
        const shouldAnimate = show && progress > 0.2;
        
        return (
          <div key={section.id} className="absolute inset-x-0">
            {/* Main horizontal line */}
            <div
              className={`absolute left-0 right-0 transition-all duration-1000 ease-out ${
                shouldAnimate ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}
              style={{ top }}
            >
              <div className="relative mx-4 sm:mx-8 lg:mx-16 xl:mx-24">
                {/* Gradient line with glow */}
                <div 
                  className={`h-1 bg-gradient-to-r ${section.color} rounded-full shadow-2xl transition-all duration-700 ease-out origin-center relative overflow-hidden`}
                  style={{
                    transform: `scaleX(${shouldAnimate ? Math.min(progress * 1.5, 1) : 0})`,
                    filter: shouldAnimate ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.6))' : 'none',
                  }}
                >
                  {/* Animated shimmer effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"
                    style={{
                      animation: shouldAnimate ? 'shimmer 2s infinite' : 'none',
                    }}
                  />
                </div>
                
                {/* Glowing background */}
                <div 
                  className={`absolute inset-0 h-3 bg-gradient-to-r ${section.color} rounded-full blur-md opacity-30 transition-all duration-700 ease-out origin-center`}
                  style={{
                    transform: `scaleX(${shouldAnimate ? Math.min(progress * 1.2, 1) : 0}) scaleY(2)`,
                  }}
                />
                
                {/* Particle trail */}
                {shouldAnimate && progress > 0.4 && (
                  <div className="absolute -top-2 -bottom-2 left-0 right-0">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                        style={{
                          left: `${(progress * 100 + i * 10) % 100}%`,
                          top: `${30 + i * 10}%`,
                          animationDelay: `${i * 0.2}s`,
                          opacity: 0.8 - i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Enhanced side progress indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
        <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-3 shadow-xl border border-custom">
          <div className="space-y-4">
            {sections.map((section, index) => {
              const isActive = index === activeSection;
              const progress = isActive ? getTransitionProgress() : index < activeSection ? 1 : 0;
              
              return (
                <div
                  key={section.id}
                  className="relative group"
                  title={`${section.id.charAt(0).toUpperCase() + section.id.slice(1)} Section`}
                >
                  <div className="relative w-2 h-16 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`absolute bottom-0 left-0 w-full bg-gradient-to-t ${section.color} transition-all duration-500 ease-out rounded-full`}
                      style={{
                        height: `${progress * 100}%`,
                      }}
                    />
                    {isActive && (
                      <>
                        <div className="absolute -inset-0.5 border-2 border-white dark:border-gray-800 rounded-full animate-pulse" />
                        <div className="absolute -inset-1 border border-blue-400/50 rounded-full animate-ping" />
                      </>
                    )}
                  </div>
                  
                  {/* Section label */}
                  <div className={`absolute right-full mr-3 top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                    isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                  }`}>
                    <div className="bg-card px-3 py-1 rounded-lg shadow-lg border border-custom text-sm font-medium text-heading whitespace-nowrap">
                      {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Enhanced floating particles with physics */}
      {scrollY > 100 && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => {
            const colors = ['bg-blue-400', 'bg-purple-400', 'bg-pink-400', 'bg-red-400', 'bg-orange-400'];
            const color = colors[i % colors.length];
            
            return (
              <div
                key={i}
                className={`absolute w-1.5 h-1.5 ${color} rounded-full opacity-40 animate-float-enhanced`}
                style={{
                  left: `${(i * 13 + Math.sin(scrollY * 0.01 + i) * 20) % 100}%`,
                  top: `${(i * 17 + Math.cos(scrollY * 0.008 + i) * 30) % 100}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${4 + (i % 3)}s`,
                }}
              />
            );
          })}
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes float-enhanced {
          0%, 100% {
            transform: translateY(0px) translateX(0px) rotate(0deg) scale(1);
            opacity: 0.4;
          }
          25% {
            transform: translateY(-30px) translateX(10px) rotate(90deg) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-60px) translateX(-5px) rotate(180deg) scale(0.8);
            opacity: 0.6;
          }
          75% {
            transform: translateY(-30px) translateX(-10px) rotate(270deg) scale(1.1);
            opacity: 0.9;
          }
        }
        
        .animate-float-enhanced {
          animation: float-enhanced infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
  
