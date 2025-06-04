import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBuilding, FaMoneyBillWave, FaGraduationCap, FaHandshake, FaChartLine, FaShieldAlt, FaUsers, FaCheckCircle, FaCalculator, FaInfoCircle, FaArrowRight, FaFileAlt, FaLaptop } from 'react-icons/fa';

const Services = () => {
  const [activeService, setActiveService] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);
  const [loanAmount, setLoanAmount] = useState(100000);
  const [loanTerm, setLoanTerm] = useState(12);

  const services = [
    {
      title: "PMEGP Loans",
      description: "Up to ₹10 Lakhs with 35% government subsidy for manufacturing and service sector",
      icon: <FaBuilding className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MUDRA Loans",
      description: "Financial support up to ₹10 Lakhs for micro enterprises under PMMY",
      icon: <FaMoneyBillWave className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Support",
      description: "End-to-end assistance in project planning and implementation",
      icon: <FaChartLine className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const benefits = [
    {
      title: "Expert Guidance",
      description: "Get personalized advice from our experienced financial experts",
      icon: <FaHandshake className="text-3xl text-blue-600" />
    },
    {
      title: "Quick Processing",
      description: "Fast approval and disbursement of loans within 48 hours",
      icon: <FaChartLine className="text-3xl text-blue-600" />
    },
    {
      title: "Competitive Rates",
      description: "Enjoy the best interest rates in the market",
      icon: <FaShieldAlt className="text-3xl text-blue-600" />
    },
    {
      title: "Secure Process",
      description: "Your data is protected with bank-level security",
      icon: <FaUsers className="text-3xl text-blue-600" />
    }
  ];

  const eligibilityCriteria = [
    {
      title: "Business Loans",
      criteria: [
        "Minimum 2 years of business operation",
        "Annual turnover of ₹10 Lakhs or more",
        "Good credit score (700+)",
        "No default history"
      ]
    },
    {
      title: "Personal Loans",
      criteria: [
        "Age between 21-60 years",
        "Minimum monthly income of ₹25,000",
        "Employment stability of 2+ years",
        "Good credit score (650+)"
      ]
    },
    {
      title: "Education Loans",
      criteria: [
        "Admission to recognized institution",
        "Age between 16-35 years",
        "Co-applicant with stable income",
        "Good academic record"
      ]
    }
  ];

  const calculateEMI = (amount, term) => {
    const rate = 0.12; // 12% annual interest rate
    const monthlyRate = rate / 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    return Math.round(emi);
  };

  const emi = calculateEMI(loanAmount, loanTerm);

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-red-800 max-w-3xl mx-auto">
              Comprehensive support for your entrepreneurial journey through PMEGP and MUDRA loans
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-center mb-4">{service.icon}</div>
                  <p className="text-red-800 text-center">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-red-800">
              We make the loan application process simple and efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-yellow-50 rounded-lg p-6"
              >
                <div className="text-red-600 text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{benefit.title}</h3>
                <p className="text-red-800">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-red-600 rounded-lg shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white mb-8">
              Apply for your PMEGP or MUDRA loan today and take the first step towards your business dreams.
            </p>
            <Link
              to="/apply"
              className="bg-white text-red-600 px-8 py-3 rounded-md hover:bg-yellow-100 transition duration-300 inline-block"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services; 