'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    organization: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setSubmitStatus('Passwords do not match');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Account created successfully! Please check your email for verification.');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

      <div className="relative z-10 pt-8 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-card/80 backdrop-blur-lg rounded-2xl shadow-xl p-8 lg:p-12 border border-custom animate-fadeInUp">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-heading mb-2" style={{ fontFamily: 'Agile, sans-serif' }}>Create Account</h1>
              <p className="text-body" style={{ fontFamily: 'Ciguatera, sans-serif' }}>Join HOPE to revolutionize your healthcare practice</p>
            </div>

            <form id="signup-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-heading mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-heading mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                  placeholder="john.doe@example.com"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-heading mb-2">
                  Professional Role *
                </label>
                <div className="relative">
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm pr-8 appearance-none bg-card text-body cursor-pointer"
                  >
                    <option value="">Select your role</option>
                    <option value="dentist">Dentist</option>
                    <option value="dental-hygienist">Dental Hygienist</option>
                    <option value="practice-manager">Practice Manager</option>
                    <option value="administrator">Administrator</option>
                  </select>
                  <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-body w-4 h-4 flex items-center justify-center pointer-events-none"></i>
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-heading mb-2">
                  Organization/Practice Name
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                  placeholder="Your practice name"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-heading mb-2">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                  placeholder="Create a strong password"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-heading mb-2">
                  Confirm Password *
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-sm bg-card text-body"
                  placeholder="Confirm your password"
                />
              </div>

              {submitStatus && (
                <div className={`p-4 rounded-lg ${submitStatus.includes('successfully') ? 'bg-green-500/10 border border-green-500/20' : 'bg-red-500/10 border border-red-500/20'}`}>
                  <p className={`text-sm ${submitStatus.includes('successfully') ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {submitStatus}
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-8 text-center">
              <p className="text-body" style={{ fontFamily: 'Ciguatera, sans-serif' }}>
                Already have an account?{' '}
                <Link href="/signin" className="text-primary hover:text-primary/80 font-medium cursor-pointer">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

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
      `}</style>
    </div>
  );
}