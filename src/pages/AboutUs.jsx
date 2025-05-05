import React from "react"
import { Link } from "react-router-dom"

const AboutUs = () => {
  return (
    <section className="bg-white">
      {/* Hero */}
      <div
        className="relative h-64 bg-cover bg-center"
        style={{ backgroundImage: "url('/your-background-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">About Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        {/* Left Column */}
        <div>
          <h2 className="text-sm font-semibold text-orange-600 uppercase mb-2">Welcome to RupeeDot</h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Powering India’s Car & Personal Loans – Fast, Easy, Trusted.
          </h3>
          <p className="text-gray-600 mb-4">
            We want to help our customers achieve sustainable financial success by offering fast, fair and flexible
            finance solutions, powered by our innovative AI lending approach.
          </p>
          <p className="text-gray-600 mb-4">
            One of the fastest-growing fintech aggregators, we specialize in both secured and unsecured loans. With
            strong partnerships with banks and NBFCs, we bring the best loan offers tailored to your needs.
          </p>
          <ul className="text-gray-600 list-disc ml-5 mb-4">
            <li>Hassle-Free Process</li>
            <li>Quick Disbursal</li>
            <li>Lowest EMI</li>
            <li>Paperless & Digital</li>
          </ul>
          <p className="text-gray-600 mb-6">Apply Online Today!</p>
          <button className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-md transition"><Link
            to="/apply"
      
          >
            Apply Loan
          </Link>
          </button>
        </div>

        {/* Right Column */}
        <div className="grid gap-8">
          <div>
            <h4 className="text-xl font-bold text-blue-700 mb-2">Vision</h4>
            <p className="text-gray-600">
              To transform India’s lending ecosystem by delivering seamless, accessible, and affordable credit
              solutions through innovative financial technologies. Our goal is to empower individuals, businesses, and
              communities.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold text-blue-700 mb-2">Mission</h4>
            <p className="text-gray-600">
              At FinTech Lenders for All Loans, our mission is to aggregate a wide range of loan options from diverse
              financial institutions and leverage advanced technology to provide personalized, transparent, and
              efficient lending solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
