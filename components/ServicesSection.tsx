
'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const services = [
    {
      title: 'Oral Health Screening',
      description: 'Advanced diagnostic tools and AI-powered analysis for comprehensive oral health assessment and early detection of potential issues.',
      icon: 'ri-medical-mask-line',
      color: 'bg-blue-50 text-blue-600',
      hoverColor: 'group-hover:bg-blue-600 group-hover:text-white',
      features: ['AI-Powered Analysis', 'Early Detection', 'Comprehensive Reports']
    },
    {
      title: 'Patient Management',
      description: 'Streamlined patient records, appointment scheduling, treatment planning, and progress tracking in one unified platform.',
      icon: 'ri-user-heart-line',
      color: 'bg-green-50 text-green-600',
      hoverColor: 'group-hover:bg-green-600 group-hover:text-white',
      features: ['Digital Records', 'Smart Scheduling', 'Progress Tracking']
    },
    {
      title: 'Risk Assessment',
      description: 'Intelligent risk analysis using patient data, medical history, and predictive algorithms to prevent future complications.',
      icon: 'ri-shield-check-line',
      color: 'bg-purple-50 text-purple-600',
      hoverColor: 'group-hover:bg-purple-600 group-hover:text-white',
      features: ['Predictive Analytics', 'Risk Prevention', 'Data Intelligence']
    }
  ];

  return (
    <section id="services" className="py-20 bg-section">
      {/* Font Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Winky+Rough&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div
            ref={titleRef}
            className={`transition-all duration-800 ease-out ${
              titleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-4" style={{ fontFamily: 'Winky Rough, cursive' }}>
              Our Services
            </h2>
          </div>
          <div
            ref={subtitleRef}
            className={`transition-all duration-800 ease-out delay-200 ${
              subtitleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <p className="text-xl text-body max-w-3xl mx-auto" style={{ fontFamily: 'Pacifico, cursive' }}>
              Comprehensive healthcare solutions designed to enhance patient care and streamline medical workflows
            </p>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out delay-400 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-30'
          }`}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-card rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border border-custom cursor-pointer relative overflow-hidden ${
                hoveredIndex === index ? 'ring-2 ring-blue-300 dark:ring-blue-500' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className={`w-16 h-16 rounded-lg ${service.color} ${service.hoverColor} flex items-center justify-center mb-6 transition-all duration-300 transform group-hover:rotate-12 group-hover:scale-110 relative z-10`}>
                <i className={`${service.icon} text-2xl w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-125`}></i>
              </div>
              
              <h3 className="text-xl font-bold text-heading mb-4 group-hover:text-primary transition-all duration-300 transform group-hover:translate-x-2 relative z-10">
                {service.title}
              </h3>
              
              <p className="text-body leading-relaxed mb-6 relative z-10 transition-all duration-300">
                {service.description}
              </p>

              <div className={`transition-all duration-500 overflow-hidden relative z-10 ${
                hoveredIndex === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="border-t border-custom pt-4">
                  <h4 className="text-sm font-semibold text-heading mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-body flex items-center">
                        <i className="ri-check-line text-green-500 dark:text-green-400 mr-2 w-4 h-4 flex items-center justify-center"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
