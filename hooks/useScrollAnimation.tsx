'use client';

import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Disconnect after first intersection to prevent re-triggering
          observer.disconnect();
        }
      },
      {
        threshold,
        rootMargin: '50px 0px -50px 0px', // Trigger slightly before element comes into view
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible] as const;
};

// Higher-order component for scroll animations
export const withScrollAnimation = (
  WrappedComponent: React.ComponentType<any>,
  animationClass = 'animate-scroll-fade-in'
) => {
  return function AnimatedComponent(props: any) {
    const [ref, isVisible] = useScrollAnimation();

    return (
      <div
        ref={ref}
        className={`transition-all duration-1000 ${
          isVisible ? animationClass : 'opacity-0 translate-y-10'
        }`}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
};
