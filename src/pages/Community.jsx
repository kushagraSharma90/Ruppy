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
      route: "/community/blogs",
      iconColor: "#d47734", // orange
    },
    {
      title: "Our Core Values",
      description: "Discover the principles that guide our mission and shape our culture.",
      icon: Heart,
      route: "/community/our-core-values",
      iconColor: "#3870A6", // blue
    },
    {
      title: "Career",
      description: "Join our growing team and build your career in the fintech industry.",
      icon: Briefcase,
      route: "/community/career",
      iconColor: "#d47734", // orange
    },
    {
      title: "Work Culture",
      description: "Experience our collaborative environment and innovative work culture.",
      icon: Users,
      route: "/community/work-culture",
      iconColor: "#3870A6", // blue
    },
    {
      title: "FAQ",
      description: "Find answers to commonly asked questions about our services and processes.",
      icon: HelpCircle,
      route: "/community/faq",
      iconColor: "#d47734", // orange
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  }

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, delay: 0.8 } },
  }

  return (
    <div className="min-h-screen bg-[#f5f5ec]">
      {/* Hero Section */}
      <motion.section
        className="relative py-20 px-4"
        initial="hidden"
        animate="visible"
        variants={heroVariants}
      >
        {/* Background Animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-[#f5f5ec] rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#f5f5ec] rounded-full blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0] }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
        </div>

        <div className="relative max-w-6xl mx-auto text-center">
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#f5f5ec] rounded-full text-sm font-medium text-gray-700 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 mr-2 text-[#d47734]" />
            Welcome to Our Community
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#3870A6] to-[#d47734] leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Powering India’s Car & Personal Loans – Fast, Easy, Trusted.
            <br />
            <span className="relative">
              Financial Journey
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#3870A6] to-[#d47734] rounded-full"
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
              We are one of the fastest growing fintech aggregator specializing in providing both
              Personal and Car loans. With our extensive network of partnerships with banks and
              NBFCs, we bring you the best loan offers tailored to your needs. We provide
              hassle-free process, quick disbursal with lowest EMI which is paperless & digital with
              wide range of products. Our diverse team is united in their mission of creating
              simple, fair and honest financial products that have the customer's needs at their
              heart. More choice, more power to you.
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
              { icon: TrendingUp, label: "Growth Rate", value: "300%", color: "#d47734" },
              { icon: Users, label: "Lending Partners", value: "20+", color: "#3870A6" },
              { icon: Shield, label: "Secure Process", value: "100%", color: "#d47734" },
              { icon: Clock, label: "Quick Approval", value: "24hrs", color: "#3870A6" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-3" style={{ color: stat.color }} />
                <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Community Cards Section */}
      <motion.section
        className="py-20 px-4"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3870A6] to-black">
              Explore Our Community
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover everything you need to know about our company, culture, and opportunities
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {communityCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
                whileTap={{ scale: 0.98 }}
                className="group"
              >
                <Link to={card.route}>
                  <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full transition-all duration-500 group-hover:shadow-2xl">
                    <div className="relative z-10">
                      {/* Icon with alternating background */}
                      <motion.div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 shadow-md ${
                          index % 2 === 0 ? "bg-[#3870A6]" : "bg-[#d47734]"
                        }`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <card.icon className="w-8 h-8 text-white" />
                      </motion.div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{card.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{card.description}</p>

                      {/* CTA Button */}
                      <motion.div
                        className="inline-flex items-center px-6 py-3 bg-[#3870A6] text-white rounded-xl font-semibold shadow-lg group-hover:shadow-xl transition-all duration-300"
                        whileHover={{ x: 5 }}
                      >
                        Explore
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        className="py-20 px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center text-black">
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
              className="inline-flex items-center px-8 py-4 bg-white text-[#3870A6] rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
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
