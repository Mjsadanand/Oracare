'use client';

import { useState, useEffect } from 'react';

export default function LoaderPage() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing Healthcare Innovation...",
    "Brewing Advanced Diagnostics...", 
    "Preparing AI-Powered Solutions...",
    "Loading Excellence in Care...",
    "Welcome to the Future of Health!"
  ];

  useEffect(() => {
    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    // Text rotation
    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 1000);

    // Hide loader after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center backdrop-blur-3xl overflow-hidden bg-black/10">
      {/* Main loader container with enhanced glassmorphism */}
      <div className="relative z-10 text-center backdrop-blur-3xl rounded-3xl border border-white/30 p-12 bg-white/10 shadow-2xl">
        {/* Enhanced coffee cooking animation */}
        <div className="relative mb-8 transform hover:scale-110 transition-transform duration-500 z-10">
          {/* Realistic Coffee Mug */}
          <div className="relative mx-auto w-36 h-32 mt-4">
            {/* Mug main body */}
            <div className="relative w-28 h-24 mx-auto bg-gradient-to-b from-white via-gray-100 to-gray-200 rounded-b-3xl shadow-2xl border-2 border-gray-300">
              {/* Mug rim */}
              <div className="absolute -top-1 inset-x-0 h-3 bg-gradient-to-b from-gray-200 to-gray-300 rounded-t-lg border-t-2 border-gray-400"></div>
              
              {/* Mug inner shadow */}
              <div className="absolute top-2 left-1 right-1 bottom-1 bg-gradient-to-b from-gray-800/20 to-transparent rounded-b-3xl"></div>
              
              {/* Coffee liquid */}
              <div className="coffee-mug-liquid absolute top-3 left-2 right-2 h-16 bg-gradient-to-b from-amber-800 via-amber-900 to-black rounded-b-2xl overflow-hidden">
                {/* Coffee surface with reflection */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 animate-pulse"></div>
                
                {/* Coffee bubbles */}
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="coffee-bubble-mug"
                    style={{
                      left: `${15 + i * 10}%`,
                      animationDelay: `${i * 0.4}s`,
                      animationDuration: `${2 + Math.random()}s`
                    }}
                  />
                ))}
                
                {/* Coffee foam/crema */}
                <div className="absolute top-0 inset-x-0 h-3 bg-gradient-to-b from-amber-200/80 via-yellow-100/60 to-transparent rounded-t-lg">
                  {/* Foam bubbles */}
                  {[...Array(4)].map((_, i) => (
                    <div
                      key={i}
                      className="foam-bubble"
                      style={{
                        left: `${20 + i * 15}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
              
              {/* Mug highlights and reflections */}
              <div className="absolute top-4 left-3 w-3 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-lg"></div>
              <div className="absolute top-6 right-4 w-2 h-4 bg-gradient-to-b from-white/30 to-transparent rounded-sm"></div>
            </div>
            
            {/* Realistic mug handle */}
            <div className="absolute right-1 top-4 w-8 h-16">
              {/* Handle outer curve */}
              <div className="absolute inset-0 border-4 border-gray-300 rounded-r-full bg-gradient-to-r from-gray-200/50 to-transparent"></div>
              {/* Handle inner space */}
              <div className="absolute inset-2 border-2 border-gray-400 rounded-r-full bg-transparent"></div>
              {/* Handle highlight */}
              <div className="absolute top-2 right-1 w-1 h-8 bg-gradient-to-b from-white/60 to-transparent rounded-full"></div>
            </div>
            
            {/* Enhanced realistic steam */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="steam-realistic"
                  style={{
                    left: `${6 + i * 3}px`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${2.5 + Math.random() * 1.5}s`
                  }}
                />
              ))}
            </div>
            
            {/* Mug base/saucer */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2 w-32 h-2 bg-gradient-to-b from-gray-300 to-gray-400 rounded-full shadow-lg opacity-60"></div>
          </div>

          {/* Medical cross rotating around */}
          <div className="medical-cross-orbit">
            <div className="medical-cross">
              <div className="cross-horizontal"></div>
              <div className="cross-vertical"></div>
            </div>
          </div>
        </div>

        {/* Enhanced loading text with typewriter effect */}
        <div className="text-white mb-8 relative z-10">
          <h1 className="text-5xl font-bold mb-4 animate-pulse text-white filter drop-shadow-2xl">
            H.O.P.E
          </h1>
          
          <div className="h-8 mb-4">
            <p className="text-lg text-white/95 typewriter drop-shadow-lg">
              {loadingTexts[currentText]}
            </p>
          </div>
          
          {/* Progress bar with enhanced glass effect */}
          <div className="w-64 mx-auto mb-6">
            <div className="w-full bg-white/20 backdrop-blur-lg rounded-full h-3 border border-white/30 shadow-lg">
              <div 
                className="bg-gradient-to-r from-white/80 via-white/95 to-white/80 h-3 rounded-full transition-all duration-300 ease-out shadow-inner"
                style={{ width: `${progress}%` }}
              >
                <div className="h-full bg-white/30 rounded-full animate-pulse"></div>
              </div>
            </div>
            <p className="text-sm text-white/95 mt-2 drop-shadow-lg font-medium">{progress}% Complete</p>
          </div>
          
          {/* Enhanced loading dots with wave effect and glassmorphism */}
          <div className="flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-4 h-4 bg-white/90 rounded-full animate-wave border border-white/50 shadow-lg backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Typewriter effect with glass styling */
        .typewriter {
          overflow: hidden;
          border-right: 3px solid rgba(255, 255, 255, 0.8);
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.1em;
          animation: typing 1s steps(40, end), blink-caret 1s step-end infinite;
        }

        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink-caret {
          from, to {
            border-color: transparent;
          }
          50% {
            border-color: rgba(255, 255, 255, 0.9);
          }
        }

        /* Enhanced coffee liquid for mug */
        .coffee-mug-liquid {
          animation: coffee-brewing 3s ease-in-out infinite;
        }

        @keyframes coffee-brewing {
          0%, 100% {
            transform: scale(1);
            filter: brightness(1) contrast(1);
          }
          33% {
            transform: scale(1.01);
            filter: brightness(1.1) contrast(1.05);
          }
          66% {
            transform: scale(0.99);
            filter: brightness(0.95) contrast(0.95);
          }
        }

        /* Realistic coffee bubbles for mug */
        .coffee-bubble-mug {
          position: absolute;
          bottom: 0;
          width: 3px;
          height: 3px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.3));
          border-radius: 50%;
          animation: bubble-rise-realistic 3s ease-in-out infinite;
        }

        @keyframes bubble-rise-realistic {
          0% {
            transform: translateY(0) scale(0.3);
            opacity: 0;
          }
          20% {
            transform: translateY(-10px) scale(0.8);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-25px) scale(1);
            opacity: 1;
          }
          80% {
            transform: translateY(-40px) scale(0.6);
            opacity: 0.6;
          }
          100% {
            transform: translateY(-50px) scale(0.2);
            opacity: 0;
          }
        }

        /* Foam bubbles */
        .foam-bubble {
          position: absolute;
          top: 1px;
          width: 2px;
          height: 2px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.8), rgba(255, 215, 0, 0.4));
          border-radius: 50%;
          animation: foam-pop 2s ease-in-out infinite;
        }

        @keyframes foam-pop {
          0%, 100% {
            transform: scale(0.5);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Realistic steam */
        .steam-realistic {
          position: absolute;
          width: 2px;
          height: 25px;
          background: linear-gradient(to top, 
            rgba(255,255,255,0.9) 0%,
            rgba(255,255,255,0.7) 20%,
            rgba(255,255,255,0.5) 40%,
            rgba(255,255,255,0.3) 60%,
            rgba(255,255,255,0.1) 80%,
            rgba(255,255,255,0) 100%);
          border-radius: 50%;
          animation: steam-realistic-rise 3s ease-in-out infinite;
          filter: blur(0.5px);
        }

        @keyframes steam-realistic-rise {
          0% {
            transform: translateY(0) translateX(0) rotate(0deg) scale(1);
            opacity: 0.9;
          }
          20% {
            transform: translateY(-12px) translateX(2px) rotate(15deg) scale(1.1);
            opacity: 0.8;
          }
          40% {
            transform: translateY(-25px) translateX(-1px) rotate(-10deg) scale(1.2);
            opacity: 0.6;
          }
          60% {
            transform: translateY(-40px) translateX(3px) rotate(20deg) scale(1.4);
            opacity: 0.4;
          }
          80% {
            transform: translateY(-55px) translateX(-2px) rotate(-5deg) scale(1.6);
            opacity: 0.2;
          }
          100% {
            transform: translateY(-70px) translateX(0) rotate(0deg) scale(2);
            opacity: 0;
          }
        }

        /* Medical cross orbit */
        .medical-cross-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 200px;
          height: 200px;
          transform: translate(-50%, -50%);
          animation: orbit 8s linear infinite;
        }

        .medical-cross {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
        }

        .cross-horizontal,
        .cross-vertical {
          position: absolute;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6));
          border-radius: 2px;
          filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.5));
        }

        .cross-horizontal {
          width: 20px;
          height: 4px;
          top: 8px;
          left: 0;
        }

        .cross-vertical {
          width: 4px;
          height: 20px;
          top: 0;
          left: 8px;
        }

        @keyframes orbit {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        /* Wave animation for dots */
        .animate-wave {
          animation: wave 1.5s ease-in-out infinite;
        }

        @keyframes wave {
          0%, 60%, 100% {
            transform: initial;
          }
          30% {
            transform: translateY(-10px) scale(1.2);
          }
        }

        /* Glow effects */
        .coffee-mug-liquid:hover {
          filter: brightness(1.2) contrast(1.1);
        }

        /* Mug specific hover effects */
        .coffee-mug-liquid:hover .coffee-bubble-mug {
          animation-duration: 1.5s;
        }

        .coffee-mug-liquid:hover .steam-realistic {
          animation-duration: 2s;
        }
      `}</style>
    </div>
  );
}
