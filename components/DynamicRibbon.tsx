'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface RibbonContent {
  id: string
  text: string
  bgColor: string
  textColor: string
  link?: string
  cta?: string
}

const ribbonData: Record<string, RibbonContent[]> = {
  '/products': [
    {
      id: 'home1',
      text: '🎉 Welcome to Oracare! Get 20% off your first consultation',
      bgColor: 'bg-gradient-to-r from-blue-600 to-purple-600',
      textColor: 'text-white',
      link: '/products',
      cta: 'Book Now'
    },
    {
      id: 'home2',
      text: '✨ New AI-Powered Dental Analysis Available Now!',
      bgColor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      textColor: 'text-white',
      link: '/products',
      cta: 'Learn More'
    },
    {
      id: 'products1',
      text: '🦷 Advanced Teeth Whitening - Professional Results at Home',
      bgColor: 'bg-gradient-to-r from-orange-500 to-red-500',
      textColor: 'text-white',
      cta: 'Shop Now'
    },
    {
      id: 'products2',
      text: '🔬 Smart Toothbrush with AI Coaching - Limited Time Offer',
      bgColor: 'bg-gradient-to-r from-indigo-500 to-blue-600',
      textColor: 'text-white',
      cta: 'View Details'
    }
  ],
  '/signin': [
    {
      id: 'signin1',
      text: '👋 Welcome back! Sign in to access your dental health dashboard',
      bgColor: 'bg-gradient-to-r from-green-500 to-emerald-600',
      textColor: 'text-white'
    }
  ],
  '/signup': [
    {
      id: 'signup1',
      text: '🎁 Join Oracare today and get a FREE dental health assessment!',
      bgColor: 'bg-gradient-to-r from-pink-500 to-rose-600',
      textColor: 'text-white',
      cta: 'Get Started'
    },
    {
      id: 'signup2',
      text: '💎 Premium members get 50% off all services for the first month',
      bgColor: 'bg-gradient-to-r from-violet-500 to-purple-600',
      textColor: 'text-white',
      cta: 'Join Premium'
    }
  ]
}

export default function DynamicRibbon() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  
  // Get content for current page
  const currentContent = ribbonData[pathname] || []
  const hasContent = currentContent.length > 0
  const hasMultiple = currentContent.length > 1
  
  // Auto-rotate content if multiple items
  useEffect(() => {
    if (!hasMultiple) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % currentContent.length)
    }, 5000) // Change every 5 seconds
    
    return () => clearInterval(interval)
  }, [hasMultiple, currentContent.length])

  // Reset index when page changes
  useEffect(() => {
    setCurrentIndex(0)
    setIsVisible(true)
  }, [pathname])

  if (!hasContent || !isVisible) return null

  const content = currentContent[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % currentContent.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + currentContent.length) % currentContent.length)
  }

  return (
    <div className={`relative ${content.bgColor} ${content.textColor} py-3 px-4 shadow-lg z-50`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Navigation arrows for multiple items */}
        {hasMultiple && (
          <button
            onClick={handlePrev}
            className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Previous announcement"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}

        {/* Content */}
        <div className="flex-1 flex items-center justify-center text-center">
          <div className="flex items-center gap-3">
            <span className="text-sm md:text-base font-medium">
              {content.text}
            </span>
            {content.cta && (
              <button
                onClick={() => content.link && (window.location.href = content.link)}
                className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-xs md:text-sm font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {content.cta}
              </button>
            )}
          </div>
        </div>

        {/* Navigation arrows and close button */}
        <div className="flex items-center gap-2">
          {hasMultiple && (
            <>
              <button
                onClick={handleNext}
                className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
                aria-label="Next announcement"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Dots indicator */}
              <div className="flex gap-1 mx-2">
                {currentContent.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                    aria-label={`Go to announcement ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
          
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close announcement"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Animated progress bar for auto-rotation */}
      {hasMultiple && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
          <div
            className="h-full bg-white/60 transition-all duration-100 ease-linear"
            style={{
              width: '100%',
              animation: 'progress 5s linear infinite'
            }}
          />
        </div>
      )}

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </div>
  )
}
