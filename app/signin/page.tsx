'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function SigninPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Welcome back! Redirecting to your dashboard...');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
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
              <h1 className="text-3xl font-bold text-heading mb-2" style={{ fontFamily: 'Agile, sans-serif' }}>Welcome Back</h1>
              <p className="text-body" style={{ fontFamily: 'Ciguatera, sans-serif' }}>Sign in to your HOPE account</p>
            </div>

            <form id="signin-form" onSubmit={handleSubmit} className="space-y-6">
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
                  placeholder="your.email@example.com"
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
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="rememberMe"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-custom rounded cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="ml-2 block text-sm text-body cursor-pointer">
                    Remember me
                  </label>
                </div>
                <Link href="#" className="text-sm text-primary hover:text-primary/80 cursor-pointer">
                  Forgot password?
                </Link>
              </div>

              {submitStatus && (
                <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <p className="text-green-600 dark:text-green-400 text-sm">{submitStatus}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Signing in...' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-custom" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-body">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <button className="w-full inline-flex justify-center py-3 px-4 border border-custom rounded-lg shadow-sm bg-card text-sm font-medium text-body hover:bg-card/80 transition-all cursor-pointer">
                  <i className="ri-google-fill text-red-500 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Google</span>
                </button>
                <button className="w-full inline-flex justify-center py-3 px-4 border border-custom rounded-lg shadow-sm bg-card text-sm font-medium text-body hover:bg-card/80 transition-all cursor-pointer">
                  <i className="ri-microsoft-fill text-blue-600 w-5 h-5 flex items-center justify-center"></i>
                  <span className="ml-2">Microsoft</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-body" style={{ fontFamily: 'Ciguatera, sans-serif' }}>
                Don't have an account?{' '}
                <Link href="/signup" className="text-primary hover:text-primary/80 font-medium cursor-pointer">
                  Sign up here
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