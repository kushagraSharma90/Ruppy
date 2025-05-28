"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Coffee, Gamepad2, Music, Palette, Users, Zap } from "lucide-react"

const WorkCulture = () => {
  const cultureHighlights = [
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "We believe in the power of teamwork and open communication across all levels.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We encourage creative thinking and provide resources to turn ideas into reality.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and wellness programs for our team.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Gamepad2,
      title: "Fun at Work",
      description: "Regular team events, game nights, and celebrations to keep spirits high.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Music,
      title: "Creative Spaces",
      description: "Modern offices designed to inspire creativity and productivity.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      icon: Palette,
      title: "Diversity & Inclusion",
      description: "We celebrate diversity and create an inclusive environment for everyone.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
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
            className="inline-flex items-center text-[#3870A6] hover:text-[#D47734] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Community
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#3870A6] to-[#3870A6] bg-clip-text text-transparent mb-4">
            Our Work Culture
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Experience our collaborative environment and innovative work culture. We believe in creating a workplace
            where everyone can thrive and do their best work.
          </p>
        </motion.div>

        {/* Culture Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {cultureHighlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <item.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="bg-gradient-to-r from-[#3870A6] to-[#D47734] rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-lg opacity-90">Employee Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.8/5</div>
              <div className="text-lg opacity-90">Glassdoor Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-lg opacity-90">Team Events Per Year</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkCulture
