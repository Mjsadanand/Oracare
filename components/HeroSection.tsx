
'use client';

import { useEffect, useState } from 'react';
// import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const router = useRouter();
  const [currentVideo, setCurrentVideo] = useState(0);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Video sources array - your actual video paths
  const videoSources = [
    '/video/back.mp4',
    '/video/back1.mp4', 
    '/video/bg.mp4'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % videoSources.length);
    }, 8000); // Longer duration for videos

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const scrollToSection = (id: string) => {
    console.log(`Scrolling to section: ${id}`);
    const section = document.getElementById(id);
    if (section) {
      console.log('Section found, scrolling...');
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      console.log(`Section with id "${id}" not found`);
    }
  }

  return (
    <section id="hero" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      {/* Video Background Container */}
      <div className="absolute inset-0 transform-gpu">
        {/* Video Elements */}
        {videoSources.map((videoSrc, index) => (
          <div
            key={`video-${index}`}
            className={`absolute inset-0 transition-all duration-3000 transform-gpu ${
              index === currentVideo ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
            }`}
            style={{
              transform: `
                translateX(${mousePosition.x * 8}px) 
                translateY(${mousePosition.y * 8}px) 
                rotateX(${mousePosition.y * 1.5}deg) 
                rotateY(${mousePosition.x * 1.5}deg)
                scale(${index === currentVideo ? 1.05 : 1})
              `,
              transformStyle: 'preserve-3d'
            }}
          >
            <video
              className="w-full h-full object-cover object-center"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setIsVideoLoaded(false)}
              style={{
                transition: 'all 0.3s ease'
              }}
            >
              <source src={videoSrc} type="video/mp4" />
              <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>

      {/* Minimal Overlay for Text Readability */}
      <div className="absolute inset-0 z-10">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 overflow-hidden perspective-1000 z-15">
        <div 
          className="absolute top-20 left-10 w-4 h-4 bg-blue-400/50 rounded-full animate-float-3d transform-gpu"
          style={{ 
            animationDelay: '0s', 
            animationDuration: '5s',
            transform: `
              translateX(${mousePosition.x * 15}px) 
              translateY(${mousePosition.y * 12}px) 
              translateZ(${mousePosition.x * 8}px)
            `,
            transformStyle: 'preserve-3d'
          }}
        />
        <div 
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500/40 rounded-full animate-float-3d transform-gpu"
          style={{ 
            animationDelay: '1.5s', 
            animationDuration: '6s',
            transform: `
              translateX(${mousePosition.x * -12}px) 
              translateY(${mousePosition.y * 15}px) 
              translateZ(${mousePosition.y * 10}px)
            `,
            transformStyle: 'preserve-3d'
          }}
        />
        <div 
          className="absolute bottom-40 left-20 w-5 h-5 bg-blue-300/45 rounded-full animate-float-3d transform-gpu"
          style={{ 
            animationDelay: '3s', 
            animationDuration: '5.5s',
            transform: `
              translateX(${mousePosition.x * 10}px) 
              translateY(${mousePosition.y * -8}px) 
              translateZ(${mousePosition.x * -6}px)
            `,
            transformStyle: 'preserve-3d'
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-3 h-3 bg-blue-600/50 rounded-full animate-float-3d transform-gpu"
          style={{ 
            animationDelay: '1s', 
            animationDuration: '4s',
            transform: `
              translateX(${mousePosition.x * -6}px) 
              translateY(${mousePosition.y * -10}px) 
              translateZ(${mousePosition.y * 8}px)
            `,
            transformStyle: 'preserve-3d'
          }}
        />
      </div>

      {/* Simplified Content Container - No 3D transforms on container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight drop-shadow-2xl tracking-tight">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-600 bg-clip-text text-transparent">
                Revolutionizing Healthcare with
              </span>
              <br />
              <span className="bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                Advanced Technology
              </span>
            </h1>
          </div>

          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto font-medium">
              Empowering patients with innovative solutions for better health outcomes. 
              Join thousands who trust H.O.P.E for their healthcare journey.
            </p>
          </div>

          {/* Completely isolated buttons container */}
          <div className="animate-fade-in-up flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                router.push('/products');
              }}
              onMouseEnter={() => console.log('Get Started button hovered')}
              className="simple-button bg-white text-gray-900 px-10 py-4 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all duration-300 whitespace-nowrap shadow-xl"
            >
              Explore Solutions
              <i className="ri-arrow-right-line ml-2"></i>
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              onMouseEnter={() => console.log('Learn More button hovered')}
              className="simple-button border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
            >
              Contact Us
              <i className="ri-information-line ml-2"></i>
            </button>
          </div>
        </div>
      </div>

      {/* Video/Image Progress Indicators with 3D Effect */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30"
        style={{
          transform: `
            translateX(-50%) 
            translateZ(40px) 
            rotateX(${mousePosition.y * -0.2}deg)
          `,
          transformStyle: 'preserve-3d'
        }}
      >
        {videoSources.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-500 cursor-pointer transform-gpu backdrop-blur-sm ${
              index === currentVideo 
                ? 'bg-blue-500 scale-125 shadow-2xl border-2 border-white/50' 
                : 'bg-white/60 hover:bg-white/80 hover:scale-110'
            }`}
            style={{
              transform: `translateZ(${index === currentVideo ? '15px' : '5px'})`,
              boxShadow: index === currentVideo 
                ? '0 8px 32px rgba(59, 130, 246, 0.6), 0 0 20px rgba(59, 130, 246, 0.4)' 
                : '0 4px 12px rgba(0, 0, 0, 0.2)'
            }}
            onClick={() => setCurrentVideo(index)}
          />
        ))}
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        @keyframes float-3d {
          0%, 100% {
            transform: translateY(0px) translateZ(0px) rotateY(0deg);
          }
          25% {
            transform: translateY(-15px) translateZ(8px) rotateY(90deg);
          }
          50% {
            transform: translateY(-8px) translateZ(15px) rotateY(180deg);
          }
          75% {
            transform: translateY(-12px) translateZ(8px) rotateY(270deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-float-3d {
          animation: float-3d 5s ease-in-out infinite;
        }

        .transform-gpu {
          transform: translateZ(0);
          backface-visibility: hidden;
          will-change: transform;
        }

        /* Video specific styles */
        video {
          object-fit: cover;
          object-position: center;
        }

        /* Enhanced shadows */
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }

        /* Backdrop blur support */
        .backdrop-blur-sm {
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
        }

        /* Force cursor pointer on buttons */
        button {
          cursor: pointer !important;
        }

        button:hover {
          cursor: pointer !important;
        }

        /* Simplified button styles */
        .simple-button {
          cursor: pointer !important;
          position: relative !important;
          z-index: 9999 !important;
          pointer-events: auto !important;
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
        }

        .simple-button:hover {
          cursor: pointer !important;
        }

        /* Remove problematic transforms from videos during button interaction */
        .hero-section:hover .transform-gpu {
          pointer-events: none !important;
        }

        /* Ensure buttons are always on top */
        .container {
          pointer-events: auto !important;
        }

        /* Override any potential transform issues */
        * {
          -webkit-transform-style: flat !important;
          transform-style: flat !important;
        }
      `}</style>
    </section>
  );
}
