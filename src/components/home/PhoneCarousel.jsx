import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PHOTO5 from "../../assets/PHOTO5.jpg";
import image2 from "../../assets/PHOTO2.jpg";
import image3 from "../../assets/PHOTO3.jpg";
import image4 from "../../assets/PHOTO4.jpg";
import RotatingWordsCircle from "./RotatingWordsCircle";

const screens = [
  {
    id: 1,
    title: "Home",
    image: PHOTO5,
    color: "bg-white",
  },
  {
    id: 2,
    title: "Profile",
    image: image2,
    color: "bg-gray-100",
  },
  {
    id: 3,
    title: "Settings",
    image: image3,
    color: "bg-blue-50",
  },
  {
    id: 4,
    title: "Settings",
    image: image4,
    color: "bg-blue-50",
  },
];

const PhoneCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleManualNavigation = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => handleManualNavigation((currentIndex + 1) % screens.length);
  const goToPrevious = () => handleManualNavigation((currentIndex - 1 + screens.length) % screens.length);

  return (
    <div 
      className="relative flex flex-col items-center m-6 w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Phone and Rotating Circle Container */}
      <div className="relative flex justify-center items-center mb-8 w-full max-w-md">
        {/* Rotating Circle with hover control */}
        <div className={`absolute -top-6 -left-6 z-0 transition-opacity duration-300 ${
          isHovered ? "" : "opacity-100"
        }`}>
          <RotatingWordsCircle />
        </div>

        {/* Phone Frame */}
        <div className="relative w-[260px] h-[560px] bg-black rounded-[45px] shadow-xl overflow-hidden border-[14px] border-black">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-7 bg-black rounded-b-3xl z-10" />

          {/* Screen Content */}
          <div className="relative w-full h-full bg-white overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={screens[currentIndex].id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 ${screens[currentIndex].color}`}
              >
                <img
                  src={screens[currentIndex].image}
                  alt={screens[currentIndex].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mb-4">
        <button
          onClick={goToPrevious}
          className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Previous screen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
          aria-label="Next screen"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Indicators */}
      <div className="flex space-x-2 mt-4">
        {screens.map((screen, index) => (
          <button
            key={screen.id}
            onClick={() => handleManualNavigation(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? "bg-gray-800" : "bg-gray-300"
            }`}
            aria-label={`Go to ${screen.title}`}
          />
        ))}
      </div>

      {/* Screen Title */}
      <div className="mt-4 text-center">
        <h2 className="text-xl font-medium text-gray-900">
          {screens[currentIndex].title}
        </h2>
      </div>
    </div>
  );
};

export default PhoneCarousel;
