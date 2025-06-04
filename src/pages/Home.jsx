import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandshake, FaChartLine, FaUsers, FaRocket, FaShieldAlt, FaBuilding, FaGraduationCap, FaMoneyBillWave, FaPiggyBank, FaChartPie } from 'react-icons/fa';
import heroImage from '../assets/mudra1.jpg';

const Home = () => {
  const features = [
    {
      title: "Government Backed Schemes",
      description: "Access Prime Minister's Employment Generation Programme and MUDRA Yojana for your entrepreneurial journey",
      icon: <FaShieldAlt className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Expert Guidance",
      description: "Get comprehensive support in project report preparation, application filing, and subsidy processing",
      icon: <FaHandshake className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Entrepreneurial Growth",
      description: "Transform your business ideas into reality with our specialized financial solutions",
      icon: <FaRocket className="text-4xl text-red-600" />,
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const services = [
    {
      title: "PMEGP Loans",
      description: "Up to ₹10 Lakhs with 35% government subsidy for manufacturing and service sector",
      icon: <FaBuilding className="text-4xl text-blue-600" />,
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "MUDRA Loans",
      description: "Financial support up to ₹10 Lakhs for micro enterprises under PMMY",
      icon: <FaMoneyBillWave className="text-4xl text-blue-600" />,
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Project Support",
      description: "End-to-end assistance in project planning and implementation",
      icon: <FaChartPie className="text-4xl text-blue-600" />,
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const stats = [
    { number: "35%", label: "Government Subsidy", icon: <FaShieldAlt className="text-3xl text-blue-600" /> },
    { number: "5000+", label: "Successful Entrepreneurs", icon: <FaUsers className="text-3xl text-blue-600" /> },
    { number: "₹100Cr+", label: "Loans Disbursed", icon: <FaPiggyBank className="text-3xl text-blue-600" /> },
    { number: "98%", label: "Success Rate", icon: <FaChartLine className="text-3xl text-blue-600" /> }
  ];

  const steps = [
    {
      title: "Apply Online",
      description: "Fill out our simple online application form"
    },
    {
      title: "Document Verification",
      description: "Our experts review your documents"
    },
    {
      title: "Loan Processing",
      description: "We handle the entire loan processing"
    },
    {
      title: "Get Approved",
      description: "Receive your loan approval and funds"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
                Get Your PMEGP Loan with Ease
              </h1>
              <p className="text-xl text-red-800 mb-8">
                We help entrepreneurs and small business owners secure PMEGP loans with minimal hassle and maximum support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/apply"
                  className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition duration-300 text-center"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-yellow-100 text-red-700 px-8 py-3 rounded-md hover:bg-yellow-200 transition duration-300 text-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="hidden md:block"
            >
              <img
                src={heroImage}
                alt="PMEGP Loan"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
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
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="text-red-600 text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{feature.title}</h3>
                <p className="text-red-800">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-4">How It Works</h2>
            <p className="text-xl text-red-800">
              Simple steps to get your PMEGP loan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="bg-yellow-100 text-red-700 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{step.title}</h3>
                <p className="text-red-800">{step.description}</p>
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
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl text-white mb-8">
              Apply for your PMEGP loan today and take the first step towards your entrepreneurial dreams.
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

export default Home; 