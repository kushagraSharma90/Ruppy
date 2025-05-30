import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle } from "lucide-react"

const CtaSection = () => {
  return (
    <section className="py-16 bg-#f5f5ec text-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Get Started with Your Loan Application?
            </h2>
            <p className="text-black mb-8 text-lg">
              Apply now and get a decision within 24 hours. Our simple online process makes it easy to get the funds you
              need quickly.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                <p className="text-black">Quick online application process</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                <p className="text-black">Minimal documentation required</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                <p className="text-black">Fast approval and disbursement</p>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mr-3 mt-0.5" />
                <p className="text-black">Competitive interest rates</p>
              </div>
            </div>

            <Link
              to="/apply"
              className="inline-flex items-center bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-blue-600 text-2xl font-bold mb-6">Quick Loan Eligibility Check</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="loan-type" className="block text-gray-700 mb-2 font-medium">
                  Loan Type
                </label>
                <select
                  id="loan-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                >
                  <option value="">Select Loan Type</option>
                  <option value="personal">Personal Loan</option>
                  <option value="used-car">Used Car Loan</option>
                  <option value="new-car">New Car Loan</option>
                  <option value="against-car">Loan Against Car</option>
                </select>
              </div>

              <div>
                <label htmlFor="loan-amount" className="block text-gray-700 mb-2 font-medium">
                  Loan Amount (₹)
                </label>
                <input
                  type="number"
                  id="loan-amount"
                  placeholder="Enter loan amount"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <div>
                <label htmlFor="employment-type" className="block text-gray-700 mb-2 font-medium">
                  Employment Type
                </label>
                <select
                  id="employment-type"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                >
                  <option value="">Select Employment Type</option>
                  <option value="salaried">Salaried</option>
                  <option value="self-employed">Self Employed</option>
                </select>
              </div>

              <div>
                <label htmlFor="mobile" className="block text-gray-700 mb-2 font-medium">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  id="mobile"
                  placeholder="Enter your mobile number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors duration-300"
              >
                Check Eligibility
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
