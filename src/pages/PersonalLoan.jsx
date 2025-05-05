import React from "react";
import { ArrowRight, CheckCircle, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const PersonalLoan = () => {
  const loan = {
    id: "personal",
    title: "Personal Loan",
    description: "Quick funds for your personal needs with minimal documentation",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    benefits: [
      "Loans up to ₹25 lakhs",
      "Interest rates starting from 10.99%",
      "Flexible tenure options from 12 to 60 months",
      "No collateral required",
      "Minimal documentation",
      "Quick approval process",
    ],
    eligibility: [
      "Indian citizen aged 21-60 years",
      "Salaried individuals with minimum income of ₹25,000 per month",
      "Self-employed professionals with minimum income of ₹50,000 per month",
      "Good credit score (700+)",
    ],
    link: "/apply",
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{loan.title}</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            {loan.description}
          </p>
        </div>
      </section>

      {/* Loan Details */}
      <section className="py-16">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src={loan.image}
              alt={loan.title}
              className="rounded-lg shadow-xl w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">{loan.title}</h2>
            <p className="text-lg text-gray-600 mb-6">{loan.description}</p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">Key Benefits</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {loan.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              to={loan.link}
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility & Application Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Eligibility Criteria</h3>
            </div>
            <ul className="space-y-3">
              {loan.eligibility.map((item, i) => (
                <li key={i} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <Clock className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">Application Process</h3>
            </div>
            <ol className="space-y-4">
              {[
                "Apply Online",
                "Document Verification",
                "Loan Approval",
                "Disbursement",
              ].map((step, i) => (
                <li key={i} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">{step}</h4>
                    <p className="text-gray-600">
                      {[
                        "Fill out our simple online application form",
                        "Submit required documents for verification",
                        "Get your loan approved within 24-48 hours",
                        "Receive funds directly in your bank account",
                      ][i]}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalLoan;
