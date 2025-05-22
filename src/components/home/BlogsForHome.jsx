"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Clock, Eye, User } from "lucide-react";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion } from "framer-motion";


const blogData = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges?",
    description:
      "Learn the step-by-step process of transferring your car loan to someone else, including the paperwork and requirements needed.",
    image: "src/assets/blog1.jpeg",
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    description:
      `India's used vehicle market is on the path to becoming a ₹100 billion+ opportunity by the end of the next
 decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers,
 stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and
 rural India.`,
    image: "src/assets/blog2.jpeg",
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  },
  {
    id: 3,
    title: "What is a Personal Loan??",
    description:
      `It is a loan that is not backed by any collateral, intended to fulfill a variety of individual financial requirements without
       having to put up any collateral. It provides easy access to money, fixed monthly payments, and flexible repayment
      tenure, making it suitable for working professionals."`,
    image: "src/assets/blog3.jpeg",
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    description:
      `" Indian used car dealers particularly small and medium-sized dealerships work in a highspeed market but are often
 hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan
 approvals, which not only delays the sales process but also dissolves customer confidence. Customers today
 anticipate near-instant approval, and extended waiting times frequently result in drop-offs or lost business. ,
`,
    image: "src/assets/blog4.jpeg",
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  },

  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    description:
     ` " Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control
 over your current debts, and be open about your loan requirements. This makes it easier and quicker for you,
`,
 image: "src/assets/blog5.jpeg",
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  },
];

const cn = (...classes) => classes.filter(Boolean).join(" ");

function BlogCard({ blog }) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg overflow-hidden border border-gray-100 shadow-sm h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={blog.image || "https://source.unsplash.com/random/600x400/?finance"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-5 space-y-4">
        <div className="flex flex-wrap gap-3 text-sm text-gray-500">
          <div className="flex items-center">
            <Eye className="h-4 w-4 mr-1" />
            <span>{blog.views} Views</span>
          </div>
          <div>{blog.date}</div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold leading-tight text-gray-900 line-clamp-2">
          {blog.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">{blog.description}</p>
        <div className="flex items-center pt-2">
          <div className="flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-1" />
            <span>{blog.author}</span>
          </div>
          <a href={`/blogs/${blog.id}`} className="ml-auto">
          <button className="ml-auto text-blue-600 font-medium hover:underline">
            Read More
          </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function BlogsForHome() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const blogsPerSlide = 3;
  const totalSlides = Math.ceil(blogData.length / blogsPerSlide);
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const getCurrentSlideBlogs = () => {
    const startIndex = currentSlideIndex * blogsPerSlide;
    return blogData.slice(startIndex, startIndex + blogsPerSlide);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlideIndex, nextSlide]);

  return (
    <section className="w-full py-12 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col space-y-4 mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-blue-700">Blogs</h2>
          <p className="text-gray-500">
            Insights and tips to help you navigate the world of finance
          </p>
          <div className="lg:hidden">
            <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium">
              Know More
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={currentSlideIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div
                  className={cn(
                    "grid gap-4",
                    isMobile
                      ? "grid-cols-1"
                      : isTablet
                      ? "grid-cols-2"
                      : "grid-cols-3"
                  )}
                >
                  {getCurrentSlideBlogs().map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  currentSlideIndex === index
                    ? "bg-blue-600"
                    : "bg-gray-300"
                )}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-md z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
