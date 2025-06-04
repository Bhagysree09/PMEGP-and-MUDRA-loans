import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/mudra1.jpg';
import { FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="PMEGP Udyami Service" className="h-12 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-red-700 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium">
              Home
            </Link>
            <Link to="/about" className="text-red-700 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium">
              About Us
            </Link>
            <Link to="/services" className="text-red-700 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium">
              Services
            </Link>
           
            <Link to="/loans" className="text-red-700 hover:text-red-900 px-3 py-2 rounded-md text-sm font-medium">
              Loans
            </Link>
            <Link
              to="/apply"
              className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 rounded-md text-sm font-medium transition duration-300"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-red-700 hover:text-red-900 focus:outline-none"
            >
              {isMenuOpen ? (
                <FaTimes className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="text-red-700 hover:text-red-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-red-700 hover:text-red-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-red-700 hover:text-red-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="text-red-700 hover:text-red-900 block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/apply-loan"
              className="bg-red-600 text-white hover:bg-red-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300"
              onClick={toggleMenu}
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 