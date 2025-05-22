import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCarSide,
  FaCarAlt,
  FaMoneyCheckAlt,
  FaFileInvoiceDollar,
} from "react-icons/fa";
import PHOTO5 from "../../assets/PHOTO5.jpg";
import image2 from "../../assets/PHOTO2.jpg";
import image3 from "../../assets/PHOTO3.jpg";
import image4 from "../../assets/PHOTO4.jpg";

// Circular Rotating Text
// const RotatingWordsCircle = () => {
//   const radius = 220;
//   const center = 300;
//   const pathData = `
//     M ${center - radius},${center}
//     a ${radius},${radius} 0 1,1 ${2 * radius},0
//     a ${radius},${radius} 0 1,1 -${2 * radius},0
//   `;

//   return (
//     <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] pointer-events-none">
//       <svg
//         overflow="visible"
//         className="animate-[spin_20s_linear_infinite] block"
//         viewBox="0 0 600 600"
//         width="100%"
//         height="100%"
//       >
//         <defs>
//           <path id="textCircle" d={pathData} fill="none" />
//         </defs>
//         <text
//           fill="#333"
//           fontSize="18"
//           fontFamily="Arial"
//           alignmentBaseline="middle"
//           dominantBaseline="middle">
//           <textPath href="#textCircle" startOffset="0%">
//             <tspan fill="#3b82f6">Used-Car-Loan</tspan>
//             <tspan fill="#666"> .........</tspan>
//             <tspan fill="#f97316"> New-car-Loan</tspan>
//             <tspan fill="#666">......... </tspan>
//             <tspan fill="#3b82f6"> Personal-Loan</tspan>
//             <tspan fill="#666"> ........</tspan>
//             <tspan fill="#f97316"> Loan-Against-car</tspan>
//             <tspan fill="#666"> .........</tspan>
//             <tspan fill="#3b82f6">Used-Car-Loan</tspan>
//             <tspan fill="#666"> ........</tspan>
//             <tspan fill="#f97316"> New-car-Loan</tspan>
//             <tspan fill="#666">........ </tspan>
//             <tspan fill="#3b82f6"> Personal-Loan</tspan>
//             <tspan fill="#666">........</tspan>
//             <tspan fill="#f97316"> Loan-Against-car</tspan>
//             <tspan fill="#666"> ........</tspan>
//           </textPath>
//         </text>
//       </svg>
//     </div>
//   );
// };

const screens = [
  {
    id: 1,
    image: PHOTO5,
    color: "bg-white",
    loanType: "New Car Loan",
    description: "Finance a quality pre-owned vehicle at affordable rates.",
    icon: <FaCarSide className="text-blue-700 text-lg sm:text-xl mr-2" />,
  },
  {
    id: 2,
    image: image2,
    color: "bg-gray-100",
    loanType: "Personal Loan",
    description: "Get low interest rates on brand-new car purchases.",
    icon: <FaCarAlt className="text-green-600 text-lg sm:text-xl mr-2" />,
  },
  {
    id: 3,
    image: image3,
    color: "bg-blue-50",
    loanType: "Loan Against Car",
    description: "Instant funds for personal needs, with flexible EMI options.",
    icon: (
      <FaMoneyCheckAlt className="text-purple-700 text-lg sm:text-xl mr-2" />
    ),
  },
  {
    id: 4,
    image: image4,
    color: "bg-blue-50",
    loanType: "Loan Against Car",
    description: "Use your existing car to get a quick secured loan.",
    icon: (
      <FaFileInvoiceDollar className="text-orange-600 text-lg sm:text-xl mr-2" />
    ),
  },
];

const PhoneWithRotatingCircle = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % screens.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleApplyNow = () => {
    alert(`Apply Now for: ${screens[currentIndex].loanType}`);
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center px-2 sm:px-10 py-6 sm:py-8">
  {/* <RotatingWordsCircle /> */}

  <div className="relative z-10 flex justify-center items-center w-full max-w-[90%] sm:max-w-sm md:max-w-md">
    <div className="relative w-full sm:w-[268px] h-[420px] sm:h-[475px] bg-black rounded-[35px] sm:rounded-[45px] shadow-xl overflow-hidden border-[2px] sm:border-[4px] border-black">
      <div className="relative w-full sm:w-[260px] h-[400px] sm:h-[454px] bg-black rounded-[35px] sm:rounded-[45px] shadow-xl overflow-hidden border-[2px] sm:border-[4px] border-black mx-auto">
        <div className="relative w-full h-full bg-white overflow-hidden rounded-2xl sm:rounded-3xl">
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
                alt="carousel"
                className="w-full h-full object-contain object-top"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.div
              key={screens[currentIndex].loanType}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute bottom-0 w-full px-3 py-2 sm:px-4 sm:py-3 bg-white/90 border-t border-blue-200 rounded-b-2xl sm:rounded-b-3xl z-20"
            >
              <div className="flex items-center justify-center text-blue-900 text-xs sm:text-base font-semibold">
                {screens[currentIndex].icon}
                {screens[currentIndex].loanType}
              </div>
              <p className="text-center text-[10px] sm:text-sm text-gray-700 mt-1 px-1 sm:px-2">
                {screens[currentIndex].description}
              </p>

              <div className="mt-2 sm:mt-3 flex justify-center">
                <button
                  onClick={handleApplyNow}
                  className="bg-blue-600 text-white px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm hover:bg-blue-700 transition duration-200"
                >
                  Apply Now
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  </div>
</div>

  );
};

export default PhoneWithRotatingCircle;
