"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  ArrowLeft,
  Heart,
  Shield,
  Users,
  Zap,
  Target,
  Award,
} from "lucide-react"

const OurCoreValues = () => {
  const values = [
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Every decision we make is centered around our customers' needs and financial well-being.",
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description:
        "We believe in honest communication and transparent processes in all our dealings.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "We work together as one team, leveraging diverse perspectives to achieve common goals.",
    },
    {
      icon: Zap,
      title: "Innovation",
      description:
        "We continuously evolve and embrace new technologies to better serve our customers.",
    },
    {
      icon: Target,
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, from service delivery to product quality.",
    },
    {
      icon: Award,
      title: "Integrity",
      description:
        "We conduct business with the highest ethical standards and moral principles.",
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
            className="inline-flex items-center text-[#3870A6] hover:text-[#D47734] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Community
          </Link>

          {/* Title in brand blue */}
          <h1 className="text-4xl md:text-6xl font-bold text-[#3870A6] mb-4">
            Our Core Values
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            These fundamental principles guide our mission and shape our
            culture. They represent who we are and what we stand for as an
            organization.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Brand identity colors for icons */}
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#3870A6] to-[#D47734] rounded-2xl mb-6 shadow-lg"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <value.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {value.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 bg-gradient-to-r from-[#3870A6] to-[#D47734] rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To democratize access to financial services by creating simple,
            fair, and honest financial products that put our customers' needs at
            the heart of everything we do. We believe in empowering individuals
            and businesses with the financial tools they need to achieve their
            dreams and build a better future.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default OurCoreValues
