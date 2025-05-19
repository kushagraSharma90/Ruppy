import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import PhoneCarousel from "./PhoneCarousel"; // Adjust path as needed

const slides = [
  {
    title: "Unlock Your Financial Dreams",
    text: "We are Rupee Dot. Helping you borrow right today for a better tomorrow.",
  },
];

const backgroundVariants = {
  enter: { opacity: 0, scale: 1.1 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { opacity: { duration: 1 }, scale: { duration: 6 } },
  },
  exit: { opacity: 0, transition: { duration: 0.5 } },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: custom * 0.2, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { type: "spring", stiffness: 400, damping: 10 } },
  tap: { scale: 0.95 },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-blue-200 to-white overflow-hidden h-screen flex items-center"
    >
      {/* Background Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute top-0 left-0 w-full h-full"
          variants={backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
        />
      </AnimatePresence>

      {/* Overlay */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-black/40 z-10"
        initial={{ opacity: 0.3 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1 }}
      />

      {/* Content */}
      <motion.div
        className="container mx-auto px-4 relative z-20 h-full flex flex-col md:flex-row items-center justify-between gap-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" },
          },
        }}
      >
        {/* Left Text */}
        <div className="w-full md:w-1/2">
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} className="max-w-2xl" initial="hidden" animate="visible" exit="exit">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight"
                variants={textVariants}
                custom={0}
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p className="text-lg md:text-xl text-gray-200 mb-8" variants={textVariants} custom={1}>
                {slides[currentIndex].text}
              </motion.p>
              <motion.div className="flex flex-wrap gap-4" variants={textVariants} custom={2}>
                <Link to="/apply">
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-medium inline-flex items-center shadow-md"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Apply Now
                    <motion.svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      initial={{ x: 0 }}
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>
                </Link>
                <Link to="/calculators">
                  <motion.button
                    className="bg-white hover:bg-gray-100 text-blue-600 border border-blue-600 px-6 py-3 rounded-md font-medium shadow-md"
                    variants={buttonVariants}
                    initial="initial"
                    whileHover="hover"
                    whileTap="tap"
                  >
                    Calculate EMI
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Carousel */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-xs md:max-w-md lg:max-w-lg">
            <PhoneCarousel />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
