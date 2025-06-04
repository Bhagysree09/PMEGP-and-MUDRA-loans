import React from 'react';
import { Link } from 'react-router-dom';

const Loans = () => {
  const loanTypes = [
    {
      title: "Personal Loans",
      description: "Flexible loans for your personal needs with competitive interest rates.",
      features: ["Quick approval", "No collateral required", "Flexible repayment terms"],
      icon: "💰"
    },
    {
      title: "Business Loans",
      description: "Grow your business with our comprehensive financing solutions.",
      features: ["Business expansion", "Working capital", "Equipment financing"],
      icon: "🏢"
    },
    {
      title: "Home Loans",
      description: "Make your dream home a reality with our affordable home loan options.",
      features: ["Low interest rates", "Long repayment terms", "Easy documentation"],
      icon: "🏠"
    },
    {
      title: "Education Loans",
      description: "Invest in your future with our education financing solutions.",
      features: ["Study abroad", "Higher education", "Skill development"],
      icon: "🎓"
    }
  ];

  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Loan Products
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose from our wide range of loan products designed to meet your financial needs
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {loanTypes.map((loan, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="text-4xl mb-4">{loan.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{loan.title}</h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <ul className="space-y-2 mb-6">
                  {loan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/apply-loan"
                  className="block w-full text-center bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-900 transition-colors duration-300"
                >
                  Apply Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/calculator"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
          >
            Calculate Your EMI
            <svg className="ml-2 -mr-1 h-5 w-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Loans; 