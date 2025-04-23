import { Link } from "react-router-dom"
 import heroImage from "../../assets/hero-image.png"

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-blue-50 to-blue-100 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 leading-tight">
              Unlock Your Financial Dreams
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              We are Rupee Dot. Helping you borrow right today for a better tomorrow
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/apply"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition-colors duration-300 inline-flex items-center"
              >
                Apply Now
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
              <Link
                to="/calculators"
                className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium transition-colors duration-300"
              >
                Calculate EMI
              </Link>
            </div>
          </div>
          <div className="hidden md:block relative">
            <img
              src={heroImage || "/placeholder.svg"}
              alt="Financial Services"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        <span className="w-2.5 h-2.5 bg-blue-600 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  )
}

export default Hero
