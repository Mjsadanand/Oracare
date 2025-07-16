
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const router = useRouter();

  const handleBackClick = () => {
    router.push('/');
  };

  const products = [
    {
      id: 1,
      name: 'OraCare Pro',
      category: 'screening',
      image: 'https://readdy.ai/api/search-image?query=modern%20dental%20screening%20device%20with%20advanced%20technology%2C%20clean%20white%20background%2C%20professional%20medical%20equipment%2C%20blue%20and%20white%20color%20scheme%2C%20high-tech%20oral%20health%20scanner%20with%20sleek%20design&width=400&height=300&seq=oracare-pro&orientation=landscape',
      description: 'Advanced oral health screening platform empowering healthcare professionals with quick, accurate assessments.',
      features: ['Real-time Analysis', 'AI-Powered Diagnostics', 'Cloud Integration', 'Mobile Compatibility'],
      status: 'available',
      price: 'Starting at $2,999'
    },
    {
      id: 2,
      name: 'Oncological Differential Diagnostics System',
      category: 'diagnostics',
      image: 'https://readdy.ai/api/search-image?query=advanced%20AI-powered%20diagnostic%20system%20for%20oral%20oncology%2C%20sophisticated%20medical%20computer%20interface%2C%20clean%20white%20background%2C%20professional%20healthcare%20technology%2C%20blue%20and%20white%20medical%20equipment%20design&width=400&height=300&seq=onco-diagnostics&orientation=landscape',
      description: 'Advanced AI-powered diagnostic system for oral oncology with precision analysis capabilities.',
      features: ['AI Pattern Recognition', 'Risk Assessment', 'Treatment Planning', 'Research Integration'],
      status: 'coming-soon',
      price: 'Coming Soon'
    },
    {
      id: 3,
      name: 'HOPE Analytics Dashboard',
      category: 'analytics',
      image: 'https://readdy.ai/api/search-image?query=healthcare%20analytics%20dashboard%20on%20modern%20tablet%20device%2C%20clean%20medical%20interface%20showing%20charts%20and%20graphs%2C%20white%20background%2C%20professional%20blue%20and%20white%20color%20scheme%2C%20data%20visualization%20for%20healthcare&width=400&height=300&seq=hope-analytics&orientation=landscape',
      description: 'Comprehensive analytics platform for healthcare data visualization and insights.',
      features: ['Real-time Reporting', 'Custom Dashboards', 'Data Export', 'Team Collaboration'],
      status: 'available',
      price: 'Starting at $199/month'
    },
    {
      id: 4,
      name: 'Telemedicine Platform',
      category: 'telemedicine',
      image: 'https://readdy.ai/api/search-image?query=telemedicine%20video%20consultation%20platform%20on%20laptop%20screen%2C%20modern%20medical%20interface%2C%20clean%20white%20background%2C%20professional%20healthcare%20technology%2C%20blue%20and%20white%20design%2C%20doctor-patient%20virtual%20meeting&width=400&height=300&seq=telemedicine&orientation=landscape',
      description: 'Secure telemedicine platform for remote patient consultations and follow-ups.',
      features: ['HD Video Calls', 'Secure Messaging', 'Appointment Scheduling', 'Electronic Prescriptions'],
      status: 'available',
      price: 'Starting at $99/month'
    },
    {
      id: 5,
      name: 'Patient Management System',
      category: 'management',
      image: 'https://readdy.ai/api/search-image?query=patient%20management%20system%20interface%20on%20modern%20computer%20screen%2C%20clean%20medical%20software%20dashboard%2C%20white%20background%2C%20professional%20healthcare%20technology%2C%20blue%20and%20white%20color%20scheme%2C%20patient%20records%20management&width=400&height=300&seq=patient-mgmt&orientation=landscape',
      description: 'Complete patient management solution with electronic health records and appointment scheduling.',
      features: ['Electronic Health Records', 'Appointment Booking', 'Billing Integration', 'Insurance Processing'],
      status: 'available',
      price: 'Starting at $149/month'
    },
    {
      id: 6,
      name: 'Mobile Health App',
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=mobile%20health%20application%20on%20smartphone%20screen%2C%20clean%20medical%20app%20interface%2C%20white%20background%2C%20professional%20healthcare%20mobile%20technology%2C%20blue%20and%20white%20design%2C%20health%20tracking%20app&width=400&height=300&seq=mobile-health&orientation=landscape',
      description: 'Patient-facing mobile application for health monitoring and appointment management.',
      features: ['Health Tracking', 'Medication Reminders', 'Appointment Booking', 'Secure Messaging'],
      status: 'coming-soon',
      price: 'Free for Patients'
    },
    {
      id: 7,
      name: 'Patient Analytics & Genomic Evaluation System',
      category: 'analytics',
      image: 'https://readdy.ai/api/search-image?query=advanced%20genomic%20analysis%20platform%20with%20DNA%20sequencing%20visualization%2C%20modern%20medical%20laboratory%20equipment%2C%20clean%20white%20background%2C%20professional%20healthcare%20technology%2C%20blue%20and%20white%20color%20scheme%2C%20genetic%20data%20analysis%20interface&width=400&height=300&seq=genomic-analytics&orientation=landscape',
      description: 'Comprehensive patient data analysis platform with advanced genomic evaluation capabilities.',
      features: ['Genomic Sequencing', 'Patient Data Integration', 'Predictive Analytics', 'Risk Assessment', 'Personalized Medicine'],
      status: 'coming-soon',
      price: 'Coming Soon'
    },
    {
      id: 8,
      name: 'Enhanced Automated Screening Yield',
      category: 'screening',
      image: 'https://readdy.ai/api/search-image?query=automated%20medical%20screening%20system%20with%20robotic%20precision%2C%20streamlined%20healthcare%20workflow%20technology%2C%20clean%20white%20background%2C%20professional%20medical%20automation%20equipment%2C%20blue%20and%20white%20color%20scheme%2C%20efficient%20screening%20process&width=400&height=300&seq=automated-screening&orientation=landscape',
      description: 'Streamlined screening process with automated workflows and enhanced detection capabilities.',
      features: ['Automated Workflows', 'Enhanced Detection', 'Process Optimization', 'Quality Assurance', 'Efficiency Metrics'],
      status: 'coming-soon',
      price: 'Coming Soon'
    },
    {
      id: 9,
      name: 'Teledental Development',
      category: 'telemedicine',
      image: 'https://readdy.ai/api/search-image?query=advanced%20teledental%20consultation%20platform%20with%20digital%20dental%20imaging%2C%20modern%20dental%20technology%20interface%2C%20clean%20white%20background%2C%20professional%20healthcare%20telemedicine%20equipment%2C%20blue%20and%20white%20color%20scheme%2C%20remote%20dental%20consultation%20system&width=400&height=300&seq=teledental-dev&orientation=landscape',
      description: 'Revolutionary teledental platform enabling remote dental consultations and development services.',
      features: ['Remote Consultations', 'Digital Imaging', 'Treatment Planning', 'Patient Education', 'Specialist Referrals'],
      status: 'available',
      price: 'Starting at $299/month'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products', icon: 'ri-apps-line' },
    { id: 'screening', name: 'Screening', icon: 'ri-search-eye-line' },
    { id: 'diagnostics', name: 'Diagnostics', icon: 'ri-microscope-line' },
    { id: 'analytics', name: 'Analytics', icon: 'ri-bar-chart-line' },
    { id: 'telemedicine', name: 'Telemedicine', icon: 'ri-video-line' },
    { id: 'management', name: 'Management', icon: 'ri-file-list-line' },
    { id: 'mobile', name: 'Mobile', icon: 'ri-smartphone-line' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen bg-section relative overflow-hidden">
      {/* Font Import */}
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/agile" />
      <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/ciguatera" />
      
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-primary/10 rounded-full animate-float-3d" style={{ animationDelay: '0s', animationDuration: '5s' }}></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-blue-400/15 rounded-lg rotate-45 animate-float-3d" style={{ animationDelay: '1.5s', animationDuration: '6s' }}></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-cyan-300/10 rounded-full animate-float-3d" style={{ animationDelay: '3s', animationDuration: '5.5s' }}></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-primary/15 rounded-lg animate-float-3d" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-blue-500/20 rounded-full animate-float-3d" style={{ animationDelay: '2s', animationDuration: '7s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-10 h-10 bg-cyan-400/15 rounded-lg rotate-12 animate-float-3d" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/20 to-cyan-400/20 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-gradient-to-r from-blue-400/15 to-primary/15 rounded-full blur-2xl animate-pulse-medium"></div>
      </div>

      {/* Back Button */}
      <div className="relative z-10 pt-20 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBackClick}
            className="group flex items-center space-x-2 text-body hover:text-primary transition-all duration-300 hover:scale-105 mb-8"
          >
            <div className="bg-card hover:bg-primary/10 p-2 rounded-full shadow-md group-hover:shadow-lg transition-all duration-300">
              <i className="ri-arrow-left-line text-xl"></i>
            </div>
            <span className="font-medium">Back to Home</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-heading mb-4" style={{ fontFamily: 'Agile, sans-serif' }}>Our Products</h1>
            <p className="text-lg sm:text-xl text-body max-w-3xl mx-auto" style={{ fontFamily: 'Ciguatera, sans-serif' }}>
              Discover our comprehensive suite of advanced healthcare solutions designed to transform patient care and streamline medical workflows.
            </p>
          </div>

          {/* Responsive Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12 px-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-3 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer flex items-center gap-1 sm:gap-2 ${
                  selectedCategory === category.id
                    ? 'bg-primary text-white shadow-lg transform scale-105'
                    : 'bg-card text-body hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-primary shadow-md hover:shadow-lg'
                }`}
              >
                <i className={`${category.icon} w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center`}></i>
                <span className="hidden sm:inline">{category.name}</span>
                <span className="sm:hidden">{category.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Responsive Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">{filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group transform hover:-translate-y-2 animate-fadeInUp border border-custom"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                    {product.status === 'available' ? (
                      <span className="bg-green-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        Available
                      </span>
                    ) : (
                      <span className="bg-orange-500 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-heading mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {product.name}
                  </h3>
                  <p className="text-body mb-4 text-sm leading-relaxed line-clamp-3" style={{ fontFamily: 'Ciguatera, sans-serif' }}>
                    {product.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-heading mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="text-xs sm:text-sm text-body flex items-center">
                          <i className="ri-check-line text-green-500 dark:text-green-400 mr-2 w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center flex-shrink-0"></i>
                          <span className="line-clamp-1">{feature}</span>
                        </li>
                      ))}
                      {product.features.length > 3 && (
                        <li className="text-xs text-body/70">
                          +{product.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                    <span className="text-base sm:text-lg font-bold text-primary">{product.price}</span>
                    <button 
                      className={`w-full sm:w-auto px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap cursor-pointer ${
                        product.status === 'available'
                          ? 'bg-primary text-white hover:opacity-90 hover:shadow-lg'
                          : 'bg-secondary text-body cursor-not-allowed'
                      }`}
                      disabled={product.status !== 'available'}
                    >
                      {product.status === 'available' ? 'Learn More' : 'Coming Soon'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-inbox-line text-4xl sm:text-6xl text-body w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-4"></i>
              <h3 className="text-lg sm:text-xl font-semibold text-heading mb-2">No products found</h3>
              <p className="text-body">Try selecting a different category.</p>
            </div>
          )}
        </div>
      </div>

      <Footer />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
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
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.1);
          }
        }
        
        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float-3d {
          animation: float-3d 5s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 6s ease-in-out infinite;
        }
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
