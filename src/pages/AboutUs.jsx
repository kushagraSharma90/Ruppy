import React from "react"
import { Rocket, Lightbulb, Target } from "lucide-react"
import BenefitsSection from "../components/BenefitsOf"

export default function AboutUs() {
  return (
    <main className="min-h-screen">
      {/* Top Hero Section */}
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
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            About Rupee Dot
          </h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* About Description */}
      <section className="w-full py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-black text-xl md:text-2xl mb-6 leading-relaxed">
              We want to help our customers achieve sustainable financial success by offering fast, fair, and flexible finance solutions, powered by our innovative AI lending approach.
            </p>
            <p className="text-black text-xl md:text-2xl mb-6 leading-relaxed">
              As one of the fastest growing fintech aggregators, we specialize in providing both secured and unsecured loans. With our extensive network of partnerships with banks and NBFCs, we bring you the best loan offers tailored to your needs. We provide a hassle-free process, quick disbursal with the lowest EMIs—all paperless and digital—across a wide range of products. Apply online!
            </p>
            <p className="text-black text-xl md:text-2xl mb-6 leading-relaxed">
              Our diverse team is united in their mission of creating simple, fair, and honest financial products that have the customer’s needs at their heart.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Mission, Vision, Goal */}
      <section className="w-full py-16 bg-[#f5f5ec] text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Rocket className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl text-black font-bold text-center mb-4">Mission</h3>
              <p className="text-sm text-center text-black leading-relaxed">
                To simplify financing for all. We strive to offer seamless, transparent, and quick loan solutions that empower both individuals and businesses by combining innovation with trust.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white text-black rounded-lg p-6 transition-all duration-300">
              <div className="bg-white text-black rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Lightbulb className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">Vision</h3>
              <p className="text-sm text-center text-black leading-relaxed">
                We envision a world where financing is not a barrier but a bridge to dreams—accessible to everyone, powered by technology, and enhanced by human care and transparency.
              </p>
            </div>

            {/* Goal */}
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300">
              <div className="bg-white rounded-lg w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <Target className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl text-black font-bold text-center mb-4">Goal</h3>
              <p className="text-sm text-center text-black leading-relaxed">
                Our goal is to become India's most trusted and customer-first lending platform, delivering unmatched ease and confidence in every financial decision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
