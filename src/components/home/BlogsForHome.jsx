"use client"

import { useState, useEffect } from "react"
import { AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Clock, Eye, ArrowRight } from "lucide-react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import blog1 from "../../assets/blog1 .jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import blog4 from "../../assets/blog4.jpg"
import blog5 from "../../assets/blog5.jpg"


const blogData = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges?",
    description:
      "Learn the step-by-step process of transferring your car loan to someone else, including the paperwork and requirements needed.",
    image: blog1,
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
    
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    description: `India's used vehicle market is on the path to becoming a ₹100 billion+ opportunity by the end of the next
 decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers,
 stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and
 rural India.`,
    image: blog2,
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  
  },
  {
    id: 3,
    title: "What is a Personal Loan??",
    description: `It is a loan that is not backed by any collateral, intended to fulfill a variety of individual financial requirements without
       having to put up any collateral. It provides easy access to money, fixed monthly payments, and flexible repayment
      tenure, making it suitable for working professionals.`,
    image: blog3,
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
   
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    description: `Indian used car dealers particularly small and medium-sized dealerships work in a highspeed market but are often
 hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan
 approvals, which not only delays the sales process but also dissolves customer confidence. Customers today
 anticipate near-instant approval, and extended waiting times frequently result in drop-offs or lost business.`,
    image: blog4,
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
   
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    description: `Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control
 over your current debts, and be open about your loan requirements. This makes it easier and quicker for you.`,
    image: blog5,
    views: 666,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
  
  },
]

const cn = (...classes) => classes.filter(Boolean).join(" ")

function BlogCard({ blog }) {
  return (
    <motion.div
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm h-full transform transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute top-4 left-4 z-10">
          
        </div>
        <img
          src={blog.image || "/placeholder.svg"}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-3 text-xs text-gray-500">
          <div className="flex items-center">
            <Eye className="h-3 w-3 mr-1" />
            <span>{blog.views} Views</span>
          </div>
          <div>{blog.date}</div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{blog.readTime}</span>
          </div>
        </div>
        <h3 className="text-xl font-bold leading-tight text-gray-900 line-clamp-2">{blog.title}</h3>
        <p className="text-gray-600 line-clamp-3 text-sm">{blog.description}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center text-sm text-gray-600">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold mr-2">
              {blog.author.charAt(0)}
            </div>
            <span className="font-medium">{blog.author}</span>
          </div>

          <Link to={`/blogs/${blog.id}`} className="group">
            <button className="flex items-center text-blue-600 font-medium text-sm group-hover:underline transition-all duration-200">
              Read More
              <ArrowRight className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function BlogsForHome() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const blogsPerSlide = 3
  const totalSlides = Math.ceil(blogData.length / blogsPerSlide)

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1))
  }

  const getCurrentSlideBlogs = () => {
    const startIndex = currentSlideIndex * blogsPerSlide
    return blogData.slice(startIndex, startIndex + blogsPerSlide)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [currentSlideIndex])

  return (
    <section className="w-full py-16 bg-gradient-to-b from-[#f5f5ec] to-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col space-y-2 mb-12 text-center">
          <span className="text-blue-600 font-medium text-sm tracking-wider uppercase">Our Latest Articles</span>
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Insights & <span className="text-blue-600">Knowledge</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-2">
            Discover expert tips and insights to help you navigate the world of finance and make informed decisions
          </p>
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
                <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                  {getCurrentSlideBlogs().map((blog) => (
                    <BlogCard key={blog.id} blog={blog} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  currentSlideIndex === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400",
                )}
                onClick={() => setCurrentSlideIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-3 shadow-lg z-10 hidden lg:flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>
        </div>

      
      </div>
    </section>
  )
}
