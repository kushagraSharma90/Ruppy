import React from "react";
import { ArrowRight, CheckCircle, Clock, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import NewCarPage from "../assets/NewCarPage.png"; // Assuming you have a NewCarPage component

const NewCarLoan = () => {
  const loan = {
    id: "new-car",
    title: "New Car Loan",
    description: "Drive your dream car with our affordable financing options.",
    image:
      NewCarPage,
    benefits: [
      "Loans up to ₹50 lakhs",
      "Interest rates starting from 9.75%",
      "Flexible tenure options from 12 to 84 months",
      "Minimal documentation",
      "Quick approval process",
    ],
    eligibility: [
      "Indian citizen aged 21-65 years",
      "Minimum income of ₹25,000 per month",
      "Good credit score (700+)",
    ],
    link: "/apply",
  };

  return (
    <div>
       <div className="relative overflow-hidden bg-[#3870A6] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{loan.title}</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              <h1>  {loan.description}</h1>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
    <div>
      </div>
      {/* Hero Section */}
     
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
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Key Benefits
              </h3>
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
      <section className="py-16 ">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <FileText className="h-6 w-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-semibold text-gray-800">
                Eligibility Criteria
              </h3>
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
              <h3 className="text-xl font-semibold text-gray-800">
                Application Process
              </h3>
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

export default NewCarLoan;
