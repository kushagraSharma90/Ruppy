import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView } from "framer-motion";
import HeroBg from "../../assets/Herobg.png";
import HeroSideImage from "../../assets/bgpicc.jpeg"; // ✅ Add your image here

const slides = [
  {
    title: "Unlock Your Financial Dreams",
    text: "We are one of the fastest growing fintech aggregator, specializing in providing both Personal and Car loans. With our extensive network of partnerships with banks and NBFCs, we bring you the best loan offers tailored to your needs. We Provide Hassle-Free Process, Quick Disbursal with Lowest EMI which is paperless & Digital with wide range of products.  Our diverse team is united in their mission of creating simple, fair and honest financial products that have the customer’s needs at their heart. More choice, more power to you. ",
  },
];

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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-white to-blue-50 overflow-hidden py-16 md:py-24 bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroBg})` }}
    >
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
            <motion.div
              key={currentIndex}
              className="max-w-2xl"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1
                className="text-5xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-13 leading-tight"
                variants={textVariants}
                custom={0}
              >
                Unlock Your Financial{" "}
                <span className="text-[#D47734]">Dreams</span>
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-bold mb-8"
                variants={textVariants}
                custom={1}
              >
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

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 md:px-0">
          <motion.img
            src={HeroSideImage}
            alt="Illustration"
            className="max-w-xs md:max-w-md lg:max-w-lg rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
