"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react"

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Personal Loan Interest Rates in 2024",
      excerpt: "Learn about the factors that influence personal loan interest rates and how to get the best deals.",
      author: "Financial Expert",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Personal Finance",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Car Loan vs Personal Loan: Which is Better?",
      excerpt: "Compare the pros and cons of car loans versus personal loans for vehicle purchases.",
      author: "Loan Advisor",
      date: "March 12, 2024",
      readTime: "7 min read",
      category: "Auto Finance",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Digital Lending: The Future of Financial Services",
      excerpt: "Explore how digital lending is revolutionizing the way we access financial services.",
      author: "Tech Analyst",
      date: "March 10, 2024",
      readTime: "6 min read",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/community"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Community
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Stay updated with the latest insights, tips, and trends in the fintech world. Our experts share valuable
            knowledge to help you make informed financial decisions.
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.date}
                  </div>

                  <button className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Blog
