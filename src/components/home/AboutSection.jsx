import { Link } from "react-router-dom"
import { CheckCircle } from "lucide-react"
 import aboutImage from "../../assets/about-image.jpg" 

const AboutSection = () => {
  const benefits = [
    "Quick loan approval process",
    "Competitive interest rates",
    "Minimal documentation required",
    "Flexible repayment options",
    "Dedicated customer support",
    "No hidden charges",
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-orange-500 font-bold text-lg uppercase tracking-wider mb-2">ABOUT US</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">Our Product & Who we are?</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h4 className="text-2xl font-semibold text-gray-800 mb-4">Your Trusted Financial Partner</h4>
            <p className="text-gray-600 mb-6">
              RupeeDot is a leading financial services provider in India, dedicated to making loans accessible,
              affordable, and hassle-free. We understand that financial needs can arise at any time, and our mission is
              to provide quick and reliable solutions.
            </p>
            <p className="text-gray-600 mb-6">
              With years of experience in the financial sector, we have built a reputation for transparency,
              reliability, and customer satisfaction. Our team of experts works tirelessly to ensure that you get the
              best loan products tailored to your specific needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Link
              to="/our-story"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300"
            >
              Learn More About Us
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={aboutImage || "/placeholder.svg"}
              alt="About RupeeDot"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
