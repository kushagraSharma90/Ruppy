import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, Clock, DollarSign, FileText, IndianRupee, Shield } from "lucide-react"
import PersonalCarLoanPage from "../assets/PersonalCarLoanPage.png"; 
import UsedCarPage from "../assets/UsedCarPage.png"; 
import NewCarPage from "../assets/NewCarPage.png";
import LoanAgainstCarPage from "../assets/LoanAgainstCarPage.png"; 

const Loans = () => {
  const loanTypes = [
    {
      id: "personal",
      title: "Personal Loan",
      description: "Quick funds for your personal needs with minimal documentation",
      image: PersonalCarLoanPage,
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
        "Salaried individuals with minimum income of ₹20,000 per month",
        "Self-employed person, earning or non-earning",
        "Credit score (600+)",
      ],
      link: "/loans/personal",
    },
    {
      id: "used-car",
      title: "Used Car Loan",
      description: "Affordable financing options for pre-owned vehicles",
      image: UsedCarPage,
      benefits: [
        "Loans up to 100% of vehicle value *",
        "Interest rates starting from 11.99%",
        "Flexible tenure options from 12 to 60 months",
        "Quick approval process",
        "No foreclosure charges after 12 months *",
        "Minimal documentation",
      ],
      eligibility: [
        "Indian citizen aged 21-65 years",
        "Salaried individuals with minimum income of ₹20,000 per month",
        "Self-employed person, earning or non-earning",
        "Vehicle not older than 12 years at end of loan tenure",
        "Credit score (600+)",
      ],
      link: "/loans/used-car",
    },
    {
      id: "new-car",
      title: "New Car Loan",
      description: "Drive home your dream car with competitive interest rates",
      image: NewCarPage,
      benefits: [
        "Loans up to 100% of vehicle value *",
        "Interest rates starting from 8.25%",
        "Flexible tenure options from 12 to 120 months",
        "Quick approval process",
        "No foreclosure charges after 12 months *",
        "Minimal documentation",
      ],
      eligibility: [
        "Indian citizen aged 21-65 years",
        "Salaried individuals with minimum income of ₹20,000 per month",
        "Self-employed person, earning or non-earning",
        "Credit score (600+)",
      ],
      link: "/loans/new-car",
    },
    {
      id: "against-car",
      title: "Loan Against Car",
      description: "Leverage your car's value for immediate financial needs",
      image: LoanAgainstCarPage,
      benefits: [
        "Loans up to 200% of vehicle value *",
        "Interest rates starting from 11.99%",
        "Flexible tenure options from 12 to 60 months",
        "Continue using your car during loan period",
        "Quick approval process",
        "Minimal documentation",
      ],
      eligibility: [
        "Indian citizen aged 21-65 years",
        "Car should not be older than 10 years",
        "Clear title and ownership of the vehicle",
        "Vehicle should be fully insured",
        "Credit score (600+)",
      ],
      link: "/loans/against-car",
    },
  ]

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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Our Loan Products </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              <h1>Explore our range of loan products designed to meet your financial needs</h1>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Loan Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {loanTypes.map((loan, index) => (
              <div key={loan.id} id={loan.id} className="scroll-mt-20">
                <div
                  className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className={`${index % 2 === 1 ? "order-1 md:order-2" : "order-1"}`}>
                    <img
                      src={loan.image || "/placeholder.svg"}
                      alt={loan.title}
                      className="rounded-lg shadow-xl w-full h-auto"
                    />
                  </div>
                  <div className={`${index % 2 === 1 ? "order-2 md:order-1" : "order-2"}`}>
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

                {/* Eligibility & Process */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 p-8 rounded-lg">
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

                  <div className="bg-gray-50 p-8 rounded-lg">
                    <div className="flex items-center mb-4">
                      <Clock className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-800">Application Process</h3>
                    </div>
                    <ol className="space-y-4">
                      <li className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                          1
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Apply Online</h4>
                          <p className="text-gray-600">Fill out our simple online application form</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                          2
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Document Verification</h4>
                          <p className="text-gray-600">Submit required documents for verification</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
                          3
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-800">Loan Approval</h4>
                          <p className="text-gray-600">Get your loan approved within 24 hours</p>
                        </div>
                      </li>
                      <li className="flex items-start">
  <div className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mr-3 mt-1">
    4
  </div>
  <div>
    <h4 className="font-medium text-gray-800">Disbursement</h4>
    <p className="text-gray-600">
      {loan.id === "against-car" 
        ? "Faster disbursal in your bank account" 
        : loan.id === "new-car" 
          ? "Faster disbursal for your car delivery" 
          : "Receive funds directly in your bank account"}
    </p>
  </div>
</li>
                    </ol>
                  </div>
                </div>

                {index < loanTypes.length - 1 && <hr className="my-16 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose RupeeDot for Your Loan Needs?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We strive to provide the best loan experience with transparent terms and excellent service
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Quick Processing</h3>
              <p className="text-gray-600">Get your loan approved within 24 hours with our streamlined process</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Minimal Documentation</h3>
              <p className="text-gray-600">We keep paperwork to a minimum so you can get your loan faster</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <IndianRupee className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Competitive Rates</h3>
              <p className="text-gray-600">Enjoy some of the most competitive interest rates in the market</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Shield className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Transparent Terms</h3>
              <p className="text-gray-600">No hidden charges or surprises - we believe in complete transparency</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 rounded-3xl text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Apply for a Loan?</h2>
          <p className="text-xl text-black mb-8 max-w-2xl mx-auto">
            Get started with your loan application today and receive funds as quickly as tomorrow
          </p>
          <Link
            to="/apply"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-md font-medium text-lg transition-colors duration-300"
          >
            Apply Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Loans