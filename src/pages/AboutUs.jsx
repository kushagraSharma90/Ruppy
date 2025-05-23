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

           

            <div className="max-w-3xl text-center">
              <p className="text-gray-700 mb-4 leading-relaxed">
               We Want to help our customers to achieve sustainable financial success by offering fast, fair and flexible finance solutions, powered by our innovative AI lending approach.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                One of the fastest growing fintech aggregator, specializing in providing both secured and unsecured loans. With our extensive network of partnerships with banks and NBFCs, we bring you the best loan offers tailored to your needs. We Provide Hassle -Free Process, Quick Disbursal with Lowest EMI which is Paperless & Digital with wide range of products. Apply Online!
              </p>
               <p className="text-gray-700 mb-4 leading-relaxed">
               Our diverse team is united in their mission of creating simple, fair and honest financial products that have the customer’s needs at their heart.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery Section */}
     
    
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
     
        
        
          
       
    
    </main>
  )
}
