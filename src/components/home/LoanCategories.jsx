import { Link } from "react-router-dom"
import personalLoanImg from "../../assets/personal-loan.png"
import usedCarLoan from "../../assets/usedCarLoan.jpg"
import newCarLoanImg from "../../assets/new-car-loan.png"
import loanAgainstCarImg from "../../assets/loan-against-car.png"

const LoanCategories = () => {
  const loanTypes = [
    {
      id: 1,
      title: "Personal Loan",
      image: personalLoanImg,
      description: "Quick funds for your personal needs with minimal documentation",
      link: "/loans/personal",
    },
    {
      id: 2,
      title: "Used Car Loan",
      image: usedCarLoan,
      description: "Affordable financing options for pre-owned vehicles",
      link: "/loans/used-car",
    },
    {
      id: 3,
      title: "New Car Loan",
      image: newCarLoanImg,
      description: "Drive home your dream car with competitive interest rates",
      link: "/loans/new-car",
    },
    {
      id: 4,
      title: "Loan Against Car",
      image: loanAgainstCarImg,
      description: "Leverage your car's value for immediate financial needs",
      link: "/loans/against-car",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Loan Products</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our range of loan products designed to meet your financial needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {loanTypes.map((loan) => (
            <Link
              to={loan.link}
              key={loan.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6 overflow-hidden rounded-full border-4 border-blue-50 group-hover:border-blue-100 transition-colors duration-300">
                  <img src={loan.image || "/placeholder.svg"} alt={loan.title} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-semibold text-blue-600 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                  {loan.title}
                </h3>
                <p className="text-gray-600 mb-4">{loan.description}</p>
                <span className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700 transition-colors duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LoanCategories
