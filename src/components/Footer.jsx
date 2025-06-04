import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mudra2.jpg';

const Footer = () => {
  return (
    <footer className="bg-yellow-500 text-red-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="PMEGP Udyami Service" className="h-12 w-auto mr-2" />
              <h3 className="text-xl font-bold">PMEGP Udyami Service</h3>
            </div>
            <p className="text-red-800 mb-2">R-546, NEW RAJINDER NAGAR, R-BLOCK, SHANKAR ROAD</p>
            <p className="text-red-800 mb-2">RAJENDER NAGAR PART 2, DELHI, NEW DELHI</p>
            <p className="text-red-800 mb-2">PIN 110060</p>
            <p className="text-red-800 mb-2">Phone: +91 9812569267, +91 8295397190</p>
            <p className="text-red-800">Email: gurdeepsingh202018@gmail.com</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-800">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-red-700 hover:text-red-900">Home</Link></li>
              <li><Link to="/about" className="text-red-700 hover:text-red-900">About Us</Link></li>
              <li><Link to="/services" className="text-red-700 hover:text-red-900">Services</Link></li>
              <li><Link to="/contact" className="text-red-700 hover:text-red-900">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-red-800">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-red-700">Business Loans</li>
              <li className="text-red-700">Personal Loans</li>
              <li className="text-red-700">Education Loans</li>
            
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-red-700 mt-8 pt-8 text-center">
          <p className="text-red-800">
            © COPYRIGHT 2025 PMEGP Udyami Service - ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 