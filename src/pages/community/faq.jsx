"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import { useState } from "react"

const FAQ = () => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  const faqData = [
    {
      category: "Loan Application",
      questions: [
        {
          question: "What documents do I need to apply for a personal loan?",
          answer:
            "You'll need identity proof (Aadhaar, PAN), address proof, income proof (salary slips, bank statements), and employment verification documents.",
        },
        {
          question: "How long does the loan approval process take?",
          answer:
            "Our digital process typically takes 24-48 hours for approval. Once approved, funds are disbursed within 24 hours to your bank account.",
        },
        {
          question: "What is the minimum and maximum loan amount?",
          answer:
            "Personal loans range from ₹50,000 to ₹40 lakhs, while car loans can go up to ₹1 crore, depending on your eligibility and income.",
        },
      ],
    },
    {
      category: "Interest Rates & Fees",
      questions: [
        {
          question: "What are your current interest rates?",
          answer:
            "Interest rates start from 10.99% per annum for personal loans and 8.5% per annum for car loans, depending on your credit profile and loan amount.",
        },
        {
          question: "Are there any hidden charges?",
          answer:
            "No, we believe in complete transparency. All charges including processing fees, prepayment charges, and late payment fees are clearly mentioned upfront with no surprises.",
        },
        {
          question: "Can I prepay my loan without penalties?",
          answer:
            "Yes, you can prepay your loan after 6 months with minimal prepayment charges. We encourage early repayment to save on interest costs.",
        },
      ],
    },
    {
      category: "Eligibility & Credit",
      questions: [
        {
          question: "What is the minimum credit score required?",
          answer:
            "While we consider applications from credit scores of 650+, having a score of 750+ significantly improves your chances of approval and better interest rates.",
        },
        {
          question: "Can I apply if I'm self-employed?",
          answer:
            "We have specific loan products for self-employed individuals. You'll need to provide ITR, bank statements, and business proof documents.",
        },
        {
          question: "What if I have a low credit score?",
          answer:
            "We have specialized products for individuals with lower credit scores. Our team will work with you to find the best possible solution.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/community"
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Community
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold bg-[#D47734] bg-clip-text text-transparent mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Find answers to commonly asked questions about our services and processes. Can't find what you're looking
            for? Contact our support team.
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="space-y-8"
        >
          {faqData.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * categoryIndex, duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden"
            >
              <div className="bg-[#D47734] px-6 py-4">
                <h2 className="text-xl font-bold text-white">{category.category}</h2>
              </div>

              <div className="divide-y divide-gray-100">
                {category.questions.map((item, questionIndex) => {
                  const globalIndex = categoryIndex * 10 + questionIndex
                  const isOpen = openItems.includes(globalIndex)

                  return (
                    <motion.div key={questionIndex} className="border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
                      >
                        <span className="font-semibold text-gray-800 pr-4">{item.question}</span>
                        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-[#D47734] flex-shrink-0" />
                          ) : (
                            <Plus className="w-5 h-5 text-[#D47734] flex-shrink-0" />
                          )}
                        </motion.div>
                      </button>

                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? "auto" : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-gray-600 leading-relaxed">{item.answer}</div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 bg-[#D47734] rounded-3xl p-12 text-white text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our customer support team is here to help you with any queries you might have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contactus">
            <button className="inline-flex items-center justify-center py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-[213px]">
              Contact Support
            </button>
            </Link >
            <Link to="">
            <button
  className="inline-flex items-center justify-center py-4 bg-white text-orange-600 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center w-[213px]"
>
              Live Chat
</button>
</Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default FAQ
