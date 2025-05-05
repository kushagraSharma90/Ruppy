import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../../assets/heroImage1.png";
import heroImage2 from "../../assets/heroImage2.png";
import heroImage3 from "../../assets/heroImage3.png";

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
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-100 via-white to-blue-100">
      {/* Navigation Buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-gray-200 transition-all duration-300 z-20"
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:scale-110 hover:bg-gray-200 transition-all duration-300 z-20"
      >
        &#8594;
      </button> */}

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="max-w-xl transition duration-500 ease-in-out">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-600 mb-4 leading-tight">
              {slides[currentIndex].title}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
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

          {/* Image Content */}
          <div className="hidden md:block relative rounded-lg overflow-hidden shadow-xl transition duration-500">
            <img
              src={slides[currentIndex].image}
              alt="Slide Visual"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-3 z-10">
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
