"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import {
  BookOpen,
  Heart,
  Briefcase,
  Users,
  HelpCircle,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Shield,
  Clock,
} from "lucide-react"

const Community = () => {
  const communityCards = [
    {
      title: "Blog",
      description: "Stay updated with the latest insights, tips, and trends in the fintech world.",
      icon: BookOpen,
      route: "/community/blog",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
    },
    {
      title: "Our Core Values",
      description: "Discover the principles that guide our mission and shape our culture.",
      icon: Heart,
      route: "/community/our-core-values",
      gradient: "from-red-500 to-pink-500",
      bgGradient: "from-red-50 to-pink-50",
    },
    {
      title: "Career",
      description: "Join our growing team and build your career in the fintech industry.",
      icon: Briefcase,
      route: "/community/career",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50",
    },
    {
      title: "Work Culture",
      description: "Experience our collaborative environment and innovative work culture.",
      icon: Users,
      route: "/community/work-culture",
      gradient: "from-purple-500 to-violet-500",
      bgGradient: "from-purple-50 to-violet-50",
    },
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions about our services and processes.",
      icon: HelpCircle,
      route: "/community/faq",
      gradient: "from-orange-500 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full text-sm font-medium text-gray-700 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-orange-500" />
            Welcome to Our Community
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Empowering Your
            <br />
            <span className="relative">
              Financial Journey
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
          </motion.h1>

          <motion.div
            className="max-w-4xl mx-auto text-lg md:text-xl text-gray-700 leading-relaxed space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <p className="font-medium">
              We are one of the <span className="text-blue-600 font-bold">fastest growing fintech aggregators</span>,
              specializing in providing both <span className="text-orange-600 font-bold">Personal and Car loans</span>.
            </p>

            <p>
              With our extensive network of partnerships with banks and NBFCs, we bring you the
              <span className="text-green-600 font-semibold"> best loan offers tailored to your needs</span>.
            </p>

            <p>
              We provide{" "}
              <span className="text-purple-600 font-semibold">
                hassle-free process, quick disbursal with lowest EMI
              </span>{" "}
              which is paperless & digital with wide range of products.
            </p>

            <p>
              Our diverse team is united in their mission of creating
              <span className="text-blue-600 font-semibold"> simple, fair and honest financial products</span> that have
              the customer's needs at their heart.
            </p>

            <p className="text-xl font-bold text-gradient bg-gradient-to-r from-orange-600 to-blue-600 bg-clip-text text-transparent">
              More choice, more power to you.
            </p>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
            variants={statsVariants}
            initial="hidden"
            animate="visible"
          >
            {[
              { icon: TrendingUp, label: "Growth Rate", value: "300%" },
              { icon: Users, label: "Happy Customers", value: "50K+" },
              { icon: Shield, label: "Secure Process", value: "100%" },
              { icon: Clock, label: "Quick Approval", value: "24hrs" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Community Cards Section */}
      <motion.section className="py-20 px-4" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-transparent">
              Explore Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover everything you need to know about our company, culture, and opportunities
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants}>
            {communityCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link to={card.route}>
                  <div
                    className={`relative bg-gradient-to-br ${card.bgGradient} rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-sm overflow-hidden h-full transition-all duration-500 group-hover:shadow-2xl`}
                  >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full -translate-y-16 translate-x-16" />
                      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full translate-y-12 -translate-x-12" />
                    </div>

                    <div className="relative z-10">
                      {/* Icon */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${card.gradient} rounded-2xl mb-6 shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors">
                        {card.title}
                      </h3>

                      <p className="text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors">
                        {card.description}
                      </p>

                      {/* CTA Button */}
                      <motion.div
                        className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${card.gradient} text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300`}
                        whileHover={{ x: 5 }}
                      >
                        Explore
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    </div>

                    {/* Hover Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                      initial={false}
                    />
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7 }}
          >
            Ready to Start Your Journey?
          </motion.h2>

          <motion.p
            className="text-xl mb-8 opacity-90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.9 }}
          >
            Join thousands of satisfied customers who trust us with their financial needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.1 }}
          >
            <Link
              to="/apply"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Apply for Loan Now
              <ArrowRight className="w-6 h-6 ml-2" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Community
