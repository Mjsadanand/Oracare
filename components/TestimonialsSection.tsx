'use client';

import React, { useState } from 'react';

const TestimonialsSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  const testimonials = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Medical Officer",
      company: "Metropolitan General Hospital",
      specialty: "Cardiology",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "H.O.P.E has revolutionized our patient care delivery. The AI-driven insights have improved our diagnostic accuracy by 40% and significantly reduced patient wait times."
    },
    {
      name: "Dr. Michael Chen",
      role: "Head of Emergency Medicine",
      company: "City Emergency Center",
      specialty: "Emergency Medicine",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "The real-time analytics and predictive capabilities of H.O.P.E have been game-changing for our emergency department. We can now anticipate patient needs better than ever."
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director of Pediatrics",
      company: "Children's Healthcare Network",
      specialty: "Pediatrics",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "Working with H.O.P.E has transformed how we approach pediatric care. The system's intuitive interface and comprehensive patient tracking have improved our workflow tremendously."
    },
    {
      name: "Dr. James Thompson",
      role: "Chief of Surgery",
      company: "Advanced Surgical Institute",
      specialty: "General Surgery",
      image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "H.O.P.E's surgical planning and post-operative monitoring features have enhanced our patient outcomes. The integration with existing systems was seamless and efficient."
    },
    {
      name: "Dr. Lisa Wang",
      role: "Head of Radiology",
      company: "Imaging Excellence Center",
      specialty: "Radiology",
      image: "https://images.unsplash.com/photo-1638202993928-7267aad84c31?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "The AI-powered image analysis in H.O.P.E has significantly improved our diagnostic accuracy. It's like having an additional expert radiologist reviewing every case."
    },
    {
      name: "Dr. Robert Johnson",
      role: "Medical Director",
      company: "Community Health Services",
      specialty: "Family Medicine",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "H.O.P.E has streamlined our entire healthcare delivery process. Patient satisfaction has increased by 35% since implementation, and our staff efficiency has never been better."
    },
    {
      name: "Dr. Maria Santos",
      role: "Chief of Oncology",
      company: "Cancer Treatment Center",
      specialty: "Oncology",
      image: "https://images.unsplash.com/photo-1551601651-05e4af0a783b?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "The precision and personalized treatment recommendations from H.O.P.E have been invaluable in our cancer care protocols. It's truly advancing the future of oncology."
    },
    {
      name: "Dr. David Kim",
      role: "Head of Neurology",
      company: "Brain & Spine Institute",
      specialty: "Neurology",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=80&h=80&fit=crop&crop=face&auto=format",
      rating: 5,
      content: "H.O.P.E's neurological assessment tools and predictive analytics have enhanced our ability to provide precise, timely care for complex neurological conditions."
    }
  ];

  // Duplicate testimonials for infinite scroll effect
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <i
        key={i}
        className={`ri-star-${i < rating ? 'fill' : 'line'} text-yellow-400 text-lg`}
      />
    ));
  };

  return (
    <section id="testimonials-section" className="py-20 bg-section overflow-hidden relative">
      {/* Font Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Winky+Rough&display=swap" rel="stylesheet" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 relative z-20">
        <div className="text-center animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-heading mb-4" style={{ fontFamily: 'Winky Rough, cursive' }}>
            Trusted by <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">Healthcare Leaders</span>
          </h2>
          <p className="text-xl text-body max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Pacifico, cursive' }}>
            See what medical professionals are saying about H.O.P.E and how it's transforming healthcare delivery
          </p>
          <div className="flex items-center justify-center space-x-8 text-body/60">
            <div className="flex items-center space-x-2">
              <i className="ri-hospital-line text-2xl"></i>
              <span className="font-semibold">500+ Hospitals</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-user-heart-line text-2xl"></i>
              <span className="font-semibold">10,000+ Doctors</span>
            </div>
            <div className="flex items-center space-x-2">
              <i className="ri-heart-pulse-line text-2xl"></i>
              <span className="font-semibold">1M+ Patients</span>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Testimonials */}
      <div className="relative z-20">
        <div 
          className={`flex space-x-6 ${isPaused ? 'animate-paused' : 'animate-scroll'}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 bg-card rounded-2xl p-8 shadow-xl border border-custom hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 group"
            >
              {/* Header with doctor info */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-700 shadow-lg group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-card flex items-center justify-center">
                    <i className="ri-shield-check-line text-white text-xs"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-heading text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-body text-sm font-medium">{testimonial.role}</p>
                  <p className="text-body/70 text-sm">{testimonial.company}</p>
                  <div className="flex items-center space-x-1 mt-1">
                    <span
                        className="px-2 py-1 bg-blue-200 text-black text-xs rounded-full font-medium"
                    >
                        {testimonial.specialty}
                    </span>
                  </div>   
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {renderStars(testimonial.rating)}
                <span className="ml-2 text-sm text-body/70 font-medium">5.0</span>
              </div>

              {/* Quote */}
              <div className="relative">
                <i className="ri-double-quotes-l absolute -top-2 -left-2 text-3xl text-blue-200 dark:text-blue-800 group-hover:text-blue-400 transition-colors duration-300"></i>
                <p className="text-body leading-relaxed pl-6 group-hover:text-body/90 transition-colors duration-300">
                  {testimonial.content}
                </p>
                <i className="ri-double-quotes-r absolute -bottom-2 -right-2 text-3xl text-blue-200 dark:text-blue-800 group-hover:text-blue-400 transition-colors duration-300"></i>
              </div>

              {/* Bottom accent */}
              <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional stats section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: 'ri-award-line', value: '99.8%', label: 'Accuracy Rate' },
            { icon: 'ri-time-line', value: '75%', label: 'Time Saved' },
            { icon: 'ri-heart-add-line', value: '40%', label: 'Better Outcomes' },
            { icon: 'ri-customer-service-2-line', value: '24/7', label: 'Support Available' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-xl border border-custom hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl transform hover:rotate-12 transition-transform duration-300">
                <i className={stat.icon}></i>
              </div>
              <div className="text-3xl font-bold text-heading mb-2">{stat.value}</div>
              <div className="text-body font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-scroll {
          animation: scroll 10s linear infinite;
        }

        .animate-paused {
          animation-play-state: paused;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Ensure smooth scrolling performance */
        .animate-scroll {
          will-change: transform;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
