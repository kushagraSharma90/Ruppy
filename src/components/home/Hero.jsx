import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import Home1 from "../../assets/Home1.png";
import Home2 from "../../assets/Home2.png";
import Home3 from "../../assets/Home3.png";
import Home4 from "../../assets/Home4.png";
import lastImage from "../../assets/lastImage.png"; // Assuming you have a last image

/* ─── DATA ─────────────────────────────────────────── */
const heroImages = [ lastImage,Home1, Home2, Home3, Home4 ];

const loanProducts = [
   {
    title: "Our Loan Products",
    subtitle: "Loan Against Car - Used Car Loan - Personal Loan - New Car Loan",
  },
  {
    title: "Loan Against Car",
    subtitle: "Turn your car into cash – without giving up the keys!",
  },
  {
    title: "Used Car Loan",
    subtitle: "Pre‑loved cars, brand‑new beginnings – finance made affordable!",
  },
  {
    title: "Personal Loan",
    subtitle: "Your dreams, your way – get funds instantly with zero stress!",
  },
  {
    title: "New Car Loan",
    subtitle: "Drive into your future – own the car you’ve always dreamed of!",
  },
 
];

const slides = [
  {
    title: "Unlock Your Financial Dreams",
    text: "We are one of the fastest‑growing fintech aggregators, specializing in Personal and Car loans. With our network of banks and NBFCs, we bring you the best offers — hassle‑free, paperless, and lightning‑fast.",
  },
];

/* ─── ANIMATION PRESETS ────────────────────────────── */
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
  }),
};

const buttonVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 400, damping: 10 },
  },
  tap: { scale: 0.95 },
};

/* ─── COMPONENT ────────────────────────────────────── */
export default function Hero() {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.3 });

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section ref={ref} className="bg-[#f5f5ec] overflow-hidden pt-10 pb-16">
      <motion.div
        className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" },
          },
        }}
      >
        {/* ── LEFT (IMAGE + PRODUCT CARD) ── */}
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <div className="overflow-hidden rounded-xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="space-y-6"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                {/* Image */}
                <img
                  src={heroImages[index]}
                  alt="Hero"
                  className="w-full h-80 md:h-96 object-cover rounded-xl"
                />

                {/* Product Card (No Icon) */}
                <div className="bg-[#3870A6] rounded-2xl p-6 text-white shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold">
                    {loanProducts[index].title}
                  </h3>
                  <p className="text-md mt-1">{loanProducts[index].subtitle}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── RIGHT (TEXT) ── */}
        <div className="w-full md:w-1/2 order-2 md:order-1">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3870A6] leading-tight"
            variants={textVariants}
            custom={0}
          >
            Unlock Your Financial <span className="text-[#D47734]">Dreams</span>
          </motion.h1>

          <motion.p
            className="text-lg font-medium mt-4"
            variants={textVariants}
            custom={1}
          >
            {slides[0].text}
          </motion.p>

          <motion.div className="mt-6 flex gap-4" variants={textVariants} custom={2}>
            <Link to="/apply">
              <motion.button
                className="bg-blue-600 text-white px-6 py-3 rounded-md shadow-md"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Apply Now
              </motion.button>
            </Link>

            <Link to="/calculators">
              <motion.button
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md"
                variants={buttonVariants}
                initial="initial"
                whileHover="hover"
                whileTap="tap"
              >
                Calculate EMI
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
