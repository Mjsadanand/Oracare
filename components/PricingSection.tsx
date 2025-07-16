
'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.2);
  const [toggleRef, toggleVisible] = useScrollAnimation(0.2);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  const plans = [
    {
      name: 'Basic',
      description: 'Perfect for small clinics and individual practitioners',
      monthlyPrice: 29,
      yearlyPrice: 299,
      features: [
        'Up to 100 patients',
        'Basic health screening',
        'Email support',
        'Monthly reports'
      ],
      icon: 'ri-stethoscope-line',
      popular: false,
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing practices and multi-doctor clinics',
      monthlyPrice: 79,
      yearlyPrice: 799,
      features: [
        'Up to 500 patients',
        'Advanced diagnostics',
        'Priority support',
        'Real-time analytics',
        'API access'
      ],
      icon: 'ri-heart-pulse-line',
      popular: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      description: 'Comprehensive solution for large healthcare networks',
      monthlyPrice: 149,
      yearlyPrice: 1499,
      features: [
        'Unlimited patients',
        'Full platform access',
        '24/7 dedicated support',
        'Custom integrations',
        'White-label options'
      ],
      icon: 'ri-hospital-line',
      popular: false,
      color: 'from-green-500 to-green-600'
    }
  ];

  const getPrice = (plan: typeof plans[0]) => {
    return billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  };

  const getSavings = (plan: typeof plans[0]) => {
    if (billingCycle === 'yearly') {
      const yearlyTotal = plan.monthlyPrice * 12;
      const savings = yearlyTotal - plan.yearlyPrice;
      return Math.round((savings / yearlyTotal) * 100);
    }
    return 0;
  };

  return (
    <section id="pricing" className="py-20 bg-section">
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
              Choose Your Plan
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
            <p className="text-xl text-body max-w-3xl mx-auto mb-8" style={{ fontFamily: 'Pacifico, cursive' }}>
              Flexible pricing options designed to grow with your practice
            </p>
          </div>
          
          <div
            ref={toggleRef}
            className={`transition-all duration-800 ease-out delay-400 ${
              toggleVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-20'
            }`}
          >
            <div className="inline-flex items-center bg-card rounded-full p-1 shadow-lg border border-custom">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  billingCycle === 'monthly'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-body hover:text-primary'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative ${
                  billingCycle === 'yearly'
                    ? 'bg-primary text-white shadow-md'
                    : 'text-body hover:text-primary'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                  Save 15%
                </span>
              </button>
            </div>
          </div>
        </div>

        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto transition-all duration-1000 ease-out delay-600 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-30'
          }`}
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-3xl shadow-lg transition-all duration-500 transform hover:-translate-y-4 hover:scale-105 border cursor-pointer ${
                plan.popular 
                  ? 'border-cyan-300 ring-2 ring-cyan-100 shadow-cyan-100' 
                  : 'border-gray-200 dark:border-gray-700'
              } overflow-hidden group`}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {plan.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-cyan-400 to-cyan-500 text-white px-4 py-1 text-xs font-semibold shadow-lg rounded-full">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8 text-center">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} text-white flex items-center justify-center mb-6 mx-auto transform transition-all duration-500 ${
                  hoveredPlan === index ? 'rotate-12 scale-110' : ''
                } group-hover:rotate-12 group-hover:scale-110`}>
                  <i className={`${plan.icon} text-2xl w-8 h-8 flex items-center justify-center`}></i>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-all duration-300 group-hover:text-cyan-600">{plan.name}</h3>
                
                <div className="mb-6">
                  <div className="flex items-center justify-center">
                    <span className="text-5xl font-bold text-gray-900 dark:text-white transition-all duration-300 group-hover:scale-110">${getPrice(plan)}</span>
                  </div>
                  <div className="text-gray-500 dark:text-gray-400 mt-1">
                    per month
                  </div>
                  {billingCycle === 'yearly' && getSavings(plan) > 0 && (
                    <div className="text-green-600 dark:text-green-400 text-sm font-medium mt-1 animate-bounce">
                      Save {getSavings(plan)}% yearly!
                    </div>
                  )}
                </div>

                <ul className="space-y-4 mb-8 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li 
                      key={featureIndex} 
                      className={`flex items-start text-gray-600 dark:text-gray-300 transition-all duration-300 transform ${
                        hoveredPlan === index ? 'translate-x-2' : ''
                      }`}
                      style={{ 
                        transitionDelay: `${featureIndex * 100}ms`,
                        animation: hoveredPlan === index ? `bounce-in 0.6s ease-out ${featureIndex * 0.1}s both` : 'none'
                      }}
                    >
                      <svg className={`w-5 h-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0 transition-all duration-300 ${
                        hoveredPlan === index ? 'scale-125 text-cyan-400' : ''
                      }`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="transition-all duration-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg hover:shadow-xl hover:from-cyan-500 hover:to-blue-600'
                    : index === 2 
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                      : 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}>
                  {index === 2 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>

              {/* Bottom accent line */}
              <div
                className={`absolute left-0 right-0 bottom-0 h-1 bg-gradient-to-r ${plan.color} transition-all duration-500 ${
                  hoveredPlan === index ? 'scale-x-100' : 'scale-x-0'
                } origin-center`}
              ></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-body mb-4">
            Need a custom solution? We offer tailored packages for large healthcare networks.
          </p>
          <button className="text-primary hover:opacity-80 font-semibold transition-all duration-300 hover:underline whitespace-nowrap">
            Contact Sales Team
          </button>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes bounce-in {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          50% {
            opacity: 0.8;
            transform: translateY(-5px) scale(1.05);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        /* Additional hover effects */
        .group:hover .group-hover\\:rotate-12 {
          transform: rotate(12deg) scale(1.1);
        }

        .group:hover .group-hover\\:scale-110 {
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
}
