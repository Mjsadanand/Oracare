'use client';

import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function AboutSection() {
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.2);
  const [featuresRef, featuresVisible] = useScrollAnimation(0.2);
  const [imageRef, imageVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-20 bg-section-alt">
      {/* Font Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Winky+Rough&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div
              ref={titleRef}
              className={`transition-all duration-800 ease-out ${
                titleVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-heading mb-6" style={{ fontFamily: 'Winky Rough, cursive' }}>
                About HOPE
              </h2>
            </div>
            
            <div
              ref={contentRef}
              className={`transition-all duration-800 ease-out delay-200 ${
                contentVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <p className="text-lg text-body mb-6 leading-relaxed" style={{ fontFamily: 'Pacifico, cursive' }}>
                Healthcare Unified Platform for Excellence (HOPE) represents the future of oral healthcare management. 
                Our platform integrates cutting-edge technology with proven medical practices to deliver exceptional patient care.
              </p>
              <p className="text-lg text-body mb-8 leading-relaxed" style={{ fontFamily: 'Pacifico, cursive' }}>
                We believe in empowering healthcare professionals with the tools they need to provide accurate diagnoses, 
                efficient treatment planning, and comprehensive patient management in a unified digital environment.
              </p>
            </div>
            
            <div
              ref={featuresRef}
              className={`transition-all duration-800 ease-out delay-400 ${
                featuresVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-award-line text-blue-600 dark:text-blue-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading">Excellence</h4>
                    <p className="text-body text-sm">Certified medical standards</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                    <i className="ri-secure-payment-line text-green-600 dark:text-green-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold text-heading">Security</h4>
                    <p className="text-body text-sm">HIPAA compliant platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            ref={imageRef}
            className={`relative transition-all duration-800 ease-out delay-300 ${
              imageVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 translate-x-20'
            }`}
          >
            <img
              src="https://readdy.ai/api/search-image?query=Professional%20healthcare%20team%20in%20modern%20medical%20facility%2C%20doctors%20and%20nurses%20working%20with%20advanced%20digital%20technology%2C%20clean%20white%20medical%20environment%2C%20professional%20healthcare%20workers%20using%20tablets%20and%20computers%2C%20collaborative%20medical%20workspace%2C%20high-tech%20healthcare%20setting%20with%20blue%20and%20white%20color%20scheme&width=600&height=500&seq=about-team&orientation=landscape"
              alt="Healthcare professionals using HOPE platform"
              className="rounded-xl shadow-2xl object-cover w-full h-96 object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}