import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/heroImage1.png";
import heroImage2 from "../../assets/heroImage2.png";
import heroImage3 from "../../assets/heroImage3.png";
import heroImage4 from "../../assets/heroImage4.jpg";
import heroImage5 from "../../assets/heroImage5.jpg";

const slides = [
  {
    image: HeroImage,
    title: "Unlock Your Financial Dreams",
    text: "We are Rupee Dot. Helping you borrow right today for a better tomorrow.",
  },
  {
    image: heroImage2,
    title: "Fast and Easy Loans",
    text: "Experience a seamless borrowing process with us in just a few clicks.",
  },
  {
    image: heroImage3,
    title: "Grow Your Future with Us",
    text: "Your path to financial freedom starts here with tailored loan options.",
  },
  {
    image: heroImage4,
    title: "Empower Your Financial Journey",
    text: "Take control of your future today with personalized financial solutions.",
  },
  {
    image: heroImage5,
    title: "A Smarter Way to Borrow",
    text: "Get access to the best loan options with minimal effort and maximum benefits.",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden h-[100vh] md:h-[80vh]">
      {/* Background Image covering full hero */}
      <img
        src={slides[currentIndex].image}
        alt="Hero Background"
        className="absolute top-0 left-0  w-full h-full object-cover object-top z-0"
      />

      {/* Overlay (optional for better text readability) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-20 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition duration-500">
            {slides[currentIndex].title}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 transition duration-500">
            {slides[currentIndex].text}
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/apply"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium transition duration-300 inline-flex items-center shadow-md"
            >
              Apply Now
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
            <Link
              to="/calculators"
              className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium transition duration-300 shadow-md"
            >
              Calculate EMI
            </Link>
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-20">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition transform hover:scale-125 ${
              index === currentIndex ? "bg-blue-600 shadow-md" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default Hero;
