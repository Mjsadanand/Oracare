'use client';

import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [titleRef, titleVisible] = useScrollAnimation(0.2);
  const [subtitleRef, subtitleVisible] = useScrollAnimation(0.2);
  const [contentRef, contentVisible] = useScrollAnimation(0.1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-section">
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
              Contact Us
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
              Get in touch with our team to learn more about HOPE and how we can help your practice
            </p>
          </div>
        </div>

        <div 
          ref={contentRef}
          className={`grid lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out delay-400 ${
            contentVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-30'
          }`}
        >
          <div>
            <h3 className="text-2xl font-bold text-heading mb-8">Get in Touch</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-blue-600 dark:text-blue-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Email</h4>
                  <p className="text-body">arkacreatos@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-phone-line text-green-600 dark:text-green-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Phone</h4>
                  <p className="text-body">+91-0836-3578562</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-time-line text-purple-600 dark:text-purple-400 text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-heading">Business Hours</h4>
                  <p className="text-body">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-body">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-section-alt rounded-xl p-8">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm bg-card text-heading"
                  placeholder="Your full name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm bg-card text-heading"
                  placeholder="your.email@example.com"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={500}
                  rows={5}
                  className="w-full px-4 py-3 border border-custom rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none text-sm bg-card text-heading"
                  placeholder="Tell us about your needs..."
                ></textarea>
                <p className="text-xs text-body mt-1">{formData.message.length}/500 characters</p>
              </div>
              
              {submitStatus && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg">
                  <p className="text-green-700 dark:text-green-400 text-sm">{submitStatus}</p>
                </div>
              )}
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all whitespace-nowrap cursor-pointer"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}