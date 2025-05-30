import { Link } from "react-router-dom"

const Partners = () => {
  const partners = [
    { id: 1, name: "Bank Partner 1", logo: "https://via.placeholder.com/150x80?text=Partner+1" },
    { id: 2, name: "Bank Partner 2", logo: "https://via.placeholder.com/150x80?text=Partner+2" },
    { id: 3, name: "Bank Partner 3", logo: "https://via.placeholder.com/150x80?text=Partner+3" },
    { id: 4, name: "Bank Partner 4", logo: "https://via.placeholder.com/150x80?text=Partner+4" },
    { id: 5, name: "Bank Partner 5", logo: "https://via.placeholder.com/150x80?text=Partner+5" },
    { id: 6, name: "Bank Partner 6", logo: "https://via.placeholder.com/150x80?text=Partner+6" },
  ]

  return (
    <section className="py-16 bg-#f5f5ec">
      <div className="container bg-#f5f5ec mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Trusted Partners</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We collaborate with leading banks and financial institutions to bring you the best loan offers
          </p>
        </div>

        {/* Inline marquee style */}
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>

        <div className="overflow-hidden">
          <div
            className="flex gap-8 animate-[scroll_10s_linear_infinite]"
            style={{ minWidth: "200%" }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-none w-48 bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/become-partner"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
          >
            Become a Partner
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
      </div>
    </section>
  )
}

export default Partners
