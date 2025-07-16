'use client';

import Link from 'next/link';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Footer() {
  const [contentRef, contentVisible] = useScrollAnimation(0.2);

  return (
    <footer className="bg-section-alt border-t border-custom">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-5 gap-8 transition-all duration-800 ease-out ${contentVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-20'
            }`}
        >
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-bold text-primary mb-4 block hover:scale-105 transition-transform duration-300" style={{ fontFamily: '"Pacifico", serif' }}>
              H.O.P.E
            </Link>
            <p className="text-body mb-4 leading-relaxed">
              Revolutionizing oral healthcare through advanced technology.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:arkacreatos@gmail.com" className="text-body hover:text-primary hover:scale-110 transition-all duration-300" title="Send email">
                <i className="ri-mail-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
              <a href="tel:+91-0836-3578562" className="text-body hover:text-primary hover:scale-110 transition-all duration-300" title="Call us">
                <i className="ri-phone-line text-xl w-6 h-6 flex items-center justify-center"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-heading mb-4 hover:text-primary transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-heading mb-4 hover:text-primary transition-colors duration-300">Services</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block cursor-default">Oral Health Screening</span>
              </li>
              <li>
                <span className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block cursor-default">Patient Management</span>
              </li>
              <li>
                <span className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block cursor-default">Risk Assessment</span>
              </li>
              <li>
                <span className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block cursor-default">Telemedicine</span>
              </li>
              <li>
                <span className="text-body hover:text-primary hover:translate-x-2 transition-all duration-300 block cursor-default">Analytics Dashboard</span>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-heading mb-4 hover:text-primary transition-colors duration-300">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-mail-line text-primary mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <p className="text-body">arkacreatos@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-phone-line text-primary mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <p className="text-body">+91-0836-3578562</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 hover:translate-x-2 transition-transform duration-300">
                <i className="ri-time-line text-primary mt-1 w-5 h-5 flex items-center justify-center flex-shrink-0"></i>
                <div>
                  <p className="text-body text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-body text-sm">Sat: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold text-heading mb-4 hover:text-primary transition-colors duration-300">Find Us</h3>
            <div className="relative h-48 w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.4292010402837!2d75.11893107652652!3d15.370825919651345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d0ccc03da0db%3A0x661d1969e2b6ea51!2sKLE%20CTIE%20Tech%20Park!5e1!3m2!1sen!2sin!4v1752657796847!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="group-hover:scale-105 transition-transform duration-500"
                title="H.O.P.E Location"
              ></iframe>
              
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            <div className="mt-3">
              <p className="text-body text-sm flex items-center hover:text-primary transition-colors duration-300">
                <i className="ri-map-pin-line text-primary mr-2"></i>
                Healthcare District, Medical Plaza
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-custom mt-8 pt-8">
          <div className={`flex flex-col md:flex-row justify-between items-center transition-all duration-800 ease-out delay-200 ${contentVisible
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-10'
            }`}>
            <p className="text-body text-sm hover:text-primary transition-colors duration-300">
              © 2025 H.O.P.E. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-body hover:text-primary text-sm transition-all duration-300 hover:scale-105">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-body hover:text-primary text-sm transition-all duration-300 hover:scale-105">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-body hover:text-primary text-sm transition-all duration-300 hover:scale-105">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}