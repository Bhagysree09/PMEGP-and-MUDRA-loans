import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaBuilding, FaMoneyBillWave, FaFileAlt, FaCheck, FaArrowRight } from 'react-icons/fa';

const ApplyLoan = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    employtype: '',
    phonnumber: '',
    whatsaapno: '',
    pancard: '',
    adhaarno: '',
    bankname: '',
    bankaccount: '',
    bankaccountifsc: '',
    email: '',
    loantype: '',
    dateofbird: '',
    gender: '',
    state: '',
    city: '',
    pincode: '',
    loanamount: '',
    loantenure: '',
    termsAccepted: true
  });

  const steps = [
    { number: 1, title: 'Personal Details', icon: <FaUser /> },
    { number: 2, title: 'Financial Details', icon: <FaMoneyBillWave /> },
    { number: 3, title: 'Loan Details', icon: <FaBuilding /> },
    { number: 4, title: 'Review & Submit', icon: <FaFileAlt /> }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your application! We will contact you shortly.');
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
    "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
    "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan",
    "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh",
    "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="min-h-screen py-16 bg-yellow-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-red-700 mb-4">Apply for PMEGP Loan</h1>
          <p className="text-xl text-red-800">
            Complete the form below to start your loan application process
          </p>
        </motion.div>

        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {steps.map((step, index) => (
                <div key={step.number} className="flex flex-col items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      currentStep >= index + 1
                        ? 'bg-red-600 text-white'
                        : 'bg-yellow-100 text-red-700'
                    }`}
                  >
                    {currentStep > index + 1 ? (
                      <FaCheck className="text-white" />
                    ) : (
                      <span>{index + 1}</span>
                    )}
                  </div>
                  <span className="mt-2 text-sm font-medium text-red-700">{step.title}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Steps */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {currentStep === 1 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-red-700 mb-6">Personal Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-red-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-red-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-red-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="address" className="block text-sm font-medium text-red-700 mb-1">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-red-700 mb-6">Business Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-red-700 mb-1">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="businessType" className="block text-sm font-medium text-red-700 mb-1">
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    >
                      <option value="">Select Business Type</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="service">Service</option>
                      <option value="retail">Retail</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="loanAmount" className="block text-sm font-medium text-red-700 mb-1">
                      Loan Amount Required (₹)
                    </label>
                    <input
                      type="number"
                      id="loanAmount"
                      name="loanAmount"
                      value={formData.loanAmount}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="purpose" className="block text-sm font-medium text-red-700 mb-1">
                      Purpose of Loan
                    </label>
                    <textarea
                      id="purpose"
                      name="purpose"
                      value={formData.purpose}
                      onChange={handleChange}
                      required
                      rows="3"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl font-bold text-red-700 mb-6">Financial Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="annualIncome" className="block text-sm font-medium text-red-700 mb-1">
                      Annual Income (₹)
                    </label>
                    <input
                      type="number"
                      id="annualIncome"
                      name="annualIncome"
                      value={formData.annualIncome}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="existingLoans" className="block text-sm font-medium text-red-700 mb-1">
                      Existing Loans (₹)
                    </label>
                    <input
                      type="number"
                      id="existingLoans"
                      name="existingLoans"
                      value={formData.existingLoans}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="collateral" className="block text-sm font-medium text-red-700 mb-1">
                      Collateral Value (₹)
                    </label>
                    <input
                      type="number"
                      id="collateral"
                      name="collateral"
                      value={formData.collateral}
                      onChange={handleChange}
                      required
                      min="0"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    />
                  </div>

                  <div>
                    <label htmlFor="additionalInfo" className="block text-sm font-medium text-red-700 mb-1">
                      Additional Information
                    </label>
                    <textarea
                      id="additionalInfo"
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-yellow-500 rounded-md focus:ring-red-500 focus:border-red-500"
                    ></textarea>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 bg-yellow-100 text-red-700 rounded-md hover:bg-yellow-200 transition duration-300"
                >
                  Previous
                </button>
              )}
              <button
                type={currentStep === steps.length ? 'submit' : 'button'}
                onClick={currentStep < steps.length ? nextStep : undefined}
                className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-300 ml-auto"
              >
                {currentStep === steps.length ? 'Submit Application' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplyLoan; 