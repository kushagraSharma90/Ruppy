import { Link } from "react-router-dom";
import NewCar from "../../assets/NewCar.png";
import UsedCar from "../../assets/UsedCar.png";
import AgainstCar from "../../assets/AgainstCar.png";
import PersonalCar from "../../assets/PersonalCar.png";

const LoanCategories = () => {
  const loanTypes = [
    {
      id: 1,
      title: "Personal Loan",
      image: NewCar,
      description: "Quick funds for your personal needs through digital platform",
      link: "/loans/personal",
      bgColor: "bg-blue-100",
    },
    {
      id: 2,
      title: "Used Car Loan",
      image: AgainstCar,
      description: "Affordable financing options for pre-owned vehicles",
      link: "/loans/used-car",
      bgColor: "bg-blue-100",
    },
    {
      id: 3,
      title: "New Car Loan",
      image: UsedCar,
      description: "Drive home your dream car with low interests",
      link: "/loans/new-car",
      bgColor: "bg-blue-100",
    },
    {
      id: 4,
      title: "Loan Against Car",
      image: PersonalCar,
      description: "Leverage your car's value for immediate financial needs",
      link: "/loans/against-car",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="pt-10 pb-16 bg-[#f5f5ec] overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className="text-center mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3870a6] mb-4">
            Our Loan Products
          </h2>
          <p className="text-black text-base sm:text-lg max-w-2xl mx-auto">
            Explore our range of loan products designed <br /> to meet your financial needs
          </p>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 xl:gap-12">
          {loanTypes.map((loan) => (
            <Link
              to={loan.link}
              key={loan.id}
              className={`${loan.bgColor} rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group`}
            >
              <div className="p-6 flex flex-col items-center bg-white text-center h-full">
                <div className="w-28 sm:w-32 md:w-36 h-28 sm:h-32 md:h-36 mb-6 overflow-hidden rounded-full border-4 border-[#3870a6] duration-300">
  <img
    src={loan.image || "/placeholder.svg"}
    alt={loan.title}
    className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
  />
</div>

                <h3 className="text-lg sm:text-xl font-semibold text-black mb-2 sm:mb-3 transition-colors duration-300">
                  {loan.title}
                </h3>
                {/* Description limited to 2 lines */}
                <p className="text-sm sm:text-base text-black mb-3 sm:mb-4 px-2 line-clamp-2">
                  {loan.description}
                </p>
                {/* Learn More aligned + bold */}
                <span className="text-black font-semibold inline-flex items-center justify-center gap-1 transition-colors duration-300">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanCategories;
