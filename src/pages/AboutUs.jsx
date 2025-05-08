import React from "react"
import { Link } from "react-router-dom"
import { Rocket, Lightbulb, Target } from "lucide-react"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-8 text-center">About Rupee Dot</h1>

            <div className="relative w-full max-w-4xl h-[300px] md:h-[400px] mb-8 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=400&width=800"
                alt="Rupee Dot Team"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="max-w-3xl text-center">
              <p className="text-gray-700 mb-4 leading-relaxed">
                Founded in 2015, Rupee Dot started with a vision to revolutionize the car lending industry by creating the
                most simple, swift and hassle-free loan. During the way, we discovered that financing wasn't a major
                risk but was mostly unavailable for dealers and customers. Our mission is to make financing simple,
                transparent, fast, and digital.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Today, we offer a range of financing solutions—Used Car Loans, Loan Against Car, Top-up Loans, Personal
                Loans, and Credit Cards to meet every need of our customers and to make their financing journey simple
                and easy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
      <section className="w-full py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">Our Team</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {["Meeting", "Presentation", "Celebration", "Collaboration"].map((title, idx) => (
              <div key={idx} className="relative h-64 rounded-lg overflow-hidden shadow-md">
                <img
                  src={`/placeholder.svg?height=300&width=400&text=Team+${title}`}
                  alt={`Team ${title}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section with marquee */}
      <section className="w-full py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-8 text-center">Our Partners</h2>

          <marquee behavior="scroll" direction="left" scrollamount="10">
            <div className="flex gap-8 items-center">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="w-24 md:w-32 h-12 relative grayscale hover:grayscale-0 transition-all duration-300"
                >
                  <img
                    src={`/placeholder.svg?height=60&width=120&text=Partner${index + 1}`}
                    alt={`Partner ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </marquee>
        </div>
      </section>

      {/* Mission, Vision, Goal Section */}
      <section className="w-full py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Rocket className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl text-black font-bold text-center mb-4">Mission</h3>
              <p className="text-sm text-center text-black">
                To simplify financing for all. We strive to offer seamless, transparent, and quick loan solutions that empower both individuals and businesses by combining innovation with trust.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-blue-700 rounded-lg p-6 hover:bg-blue-800 transition-all duration-300">
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Vision</h3>
              <p className="text-sm text-center text-blue-100">
                We envision a world where financing is not a barrier but a bridge to dreams—accessible to everyone, powered by technology, and enhanced by human care and transparency.
              </p>
            </div>

            {/* Goal */}
            <div className="bg-blue-200 bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Target className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl text-black font-bold text-center mb-4">Goal</h3>
              <p className="text-sm text-center text-black">
                Our goal is to become India's most trusted and customer-first lending platform, delivering unmatched ease and confidence in every financial decision.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="w-full py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">Join Our Team</h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for revolutionizing the financial
            industry. Join us in our mission to make financing simple, transparent, and accessible for everyone.
          </p>
          <Link
            to="/careers"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition-colors"
          >
            View Open Positions
          </Link>
        </div>
      </section>
    </main>
  )
}
