import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandshake, FaUsers, FaChartLine, FaBuilding, FaFileAlt, FaLaptop, FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import missionImage from '../assets/mudra2.jpg';

const About = () => {
  const values = [
    {
      title: "Government Partnership",
      description: "Strong collaboration with government schemes for maximum benefits",
      icon: <FaShieldAlt className="text-3xl text-red-600" />
    },
    {
      title: "Expert Guidance",
      description: "Comprehensive support in project planning and implementation",
      icon: <FaHandshake className="text-3xl text-red-600" />
    },
    {
      title: "Entrepreneur Focus",
      description: "Dedicated to empowering entrepreneurs and small businesses",
      icon: <FaUsers className="text-3xl text-red-600" />
    },
    {
      title: "Success Rate",
      description: "98% success rate in loan processing and subsidy approval",
      icon: <FaChartLine className="text-3xl text-red-600" />
    }
  ];

  const team = [
    {
      name: "Project Planning",
      role: "Expert guidance in project report preparation",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaFileAlt className="text-2xl text-red-600" />
    },
    {
      name: "Application Processing",
      role: "Seamless handling of PMEGP and MUDRA applications",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaLaptop className="text-2xl text-red-600" />
    },
    {
      name: "Bank Coordination",
      role: "Efficient coordination with partner banks",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      icon: <FaBuilding className="text-2xl text-red-600" />
    }
  ];

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
              About Us
            </h1>
            <p className="text-xl text-red-800 max-w-3xl mx-auto">
              We are dedicated to helping entrepreneurs and small business owners achieve their dreams through PMEGP loans.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-red-700 mb-6">Our Mission</h2>
              <p className="text-lg text-red-800 mb-6">
                Our mission is to empower entrepreneurs and small business owners by providing them with the necessary financial support through PMEGP loans. We believe in making the loan application process as simple and efficient as possible.
              </p>
              <p className="text-lg text-red-800">
                We are committed to helping our clients navigate the complex world of government loans and subsidies, ensuring they get the maximum benefits available to them.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={missionImage}
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-4">Our Values</h2>
            <p className="text-xl text-red-800">
              The principles that guide our work
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-yellow-50 rounded-lg p-6"
              >
                <div className="text-red-600 text-3xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-red-700 mb-2">{value.title}</h3>
                <p className="text-red-800">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-red-700 mb-4">Our Team</h2>
            <p className="text-xl text-red-800">
              Meet the experts behind our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-red-700 mb-2">{member.name}</h3>
                  <p className="text-red-600 mb-4">{member.role}</p>
                  <p className="text-red-800">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-red-600 rounded-lg shadow-xl p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-white mb-8">
              Let us help you secure the PMEGP loan you need to grow your business.
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

export default About; 