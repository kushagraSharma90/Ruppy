"use client"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { ArrowLeft, Plus, Minus } from "lucide-react"
import { useState } from "react"

const FAQ = () => {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const faqData = [
    {
      category: "Personal Loan – FAQs (Rupeedot Lending Solutions)",
      questions: [
        {
          question: "How my personal loan eligibility amount is calculated?",
          answer:
            "Eligibility is calculated in basis of income level, credit score, current obligation, job stability, category of company and residence stability same can vary from lenders to lenders.",
        },
        {
          question: "Will pre-closure or timely EMI payment improve my credit score?",
          answer:
            "Yes. Timely prepayment can boost your credit score if the lender reports it accurately to credit bureaus.",
        },
        {
          question: "Can I change my EMI due date after disbursement?",
          answer:
            "Some partner banks/NBFCs allow a one-time EMI date change for a small fee.",
        },
        {
          question: "What if my salary account is different from my EMI debit account?",
          answer:
            "EMI is deducted from salary account only however if there is change in job and salary account then ensure funds are transferred to your EMI account before the due date to avoid penalties.",
        },
        {
          question: "Can I increase my loan amount after disbursement?",
          answer:
            "Yes, via a personal loan top-up, subject to eligibility and repayment track record with minimum seasoning level.",
        },
        {
          question: "Can I transfer my personal loan to another lender for a lower rate?",
          answer: "Yes, through a Personal Loan Balance Transfer.",
        },
        {
          question: "What if I lose my job during the loan tenure?",
          answer:
            "Certain lenders offer Loan Protection Insurance for such cases for very short period.",
        },
        {
          question: "Will a personal loan affect my home loan eligibility?",
          answer:
            "Yes, as it increases your Debt-to-Income (DTI) ratio, which may reduce home loan sanction amounts.",
        },
        {
          question: "Can I apply jointly with my spouse?",
          answer:
            "Yes, having both income level can improve your eligibility and may increase the amount of the sanctioned loan.",
        },
        {
          question: "Is personal loan insurance mandatory?",
          answer: "No. It’s optional but highly recommended.",
        },
      ],
    },
    {
      category: "New Car Loan – FAQs (Rupeedot Auto Finance)",
      questions: [
        {
          question: "Can I get 100% new car finance?",
          answer:
            "Some banks/NBFCs offer 100% on-road price funding, though most require a down payment.",
        },
        {
          question: "Will the loan amount cover the on-road price or the ex-showroom price?",
          answer: "Many lenders finance the on-road cost if declared during application.",
        },
        {
          question: "Can I change my EMI date?",
          answer: "Yes, in some cases for a nominal fee.",
        },
        {
          question: "Is hypothecation mandatory?",
          answer: "Yes, until loan closure and RC de-hypothecation.",
        },
        {
          question: "Can I transfer my car loan to another lender?",
          answer: "Yes, via a Car Loan Balance Transfer.",
        },
        {
          question: "What is the maximum tenure for new car loan?",
          answer: "Vary from lenders to lenders, however maximum tenure is up-to 10 years.",
        },
        {
          question: "Can I apply new car loan with co-applicant as wife?",
          answer:
            "Yes. It can enhance loan eligibility if spouse have some income source.",
        },
        {
          question:
            "On RC copy while one takes new car loan, who is the actual owner?",
          answer:
            "If customer is taking a loan, RC copy is hypothecated in the name of respective financer, once the loan is closed, same is removed.",
        },
      ],
    },
    {
      category: "Used Car Loan – FAQs (Rupeedot Pre-Owned Auto Finance)",
      questions: [
        {
          question: "What is the maximum age of a car eligible for finance?",
          answer:
            "Most of the Financiers do up to 10-12 years but on case basis under exceptional it can go up to 15 years at loan maturity.",
        },
        {
          question: "Can I buy from a private seller?",
          answer:
            "Yes, but documentation and RC transfer responsibility is required.",
        },
        {
          question: "Will the lender inspect the vehicle?",
          answer:
            "Yes, a physical inspection is conducted to determine the car’s value and condition.",
        },
        {
          question: "Are interest rates higher for used car loans?",
          answer:
            "Generally yes, due to higher risk but ROI depends upon the profile, income level and credit score.",
        },
        {
          question: "Can I buy from another state?",
          answer: "Yes, with an RTO NOC.",
        },
        {
          question: "What if valuation is lower than the price?",
          answer:
            "Lenders usually finance on basis of valuation report or internal grid of car.",
        },
        {
          question: "Can I finance a luxury used car?",
          answer: "Yes, if it meets lender criteria.",
        },
        {
          question: "Is tenure shorter for used car loans?",
          answer: "Yes, usually 1–5 years.",
        },
        {
          question: "What documents should I check?",
          answer:
            "RC, valid insurance, service records, and accident history.",
        },
        {
          question: "Can I pre-close without penalty?",
          answer: "There is a Foreclosure charges depending upon lenders.",
        },
        {
          question: "Will accident history be verified?",
          answer: "Yes, to confirm no major damage.",
        },
        {
          question: "Can I refinance my existing loan?",
          answer: "Yes, via a loan takeover.",
        },
      ],
    },
    {
      category: "Top-Up Car Loan – FAQs (Rupeedot Loan Enhancements)",
      questions: [
        {
          question: "Can I get a top-up loan without closing my existing one?",
          answer:
            "Yes, if your repayment record is strong and this should be from existing financiers only.",
        },
        {
          question: "When can I apply?",
          answer: "Typically after 6–12 months of clean repayment.",
        },
        {
          question: "Are fresh documents needed?",
          answer: "Minimal paperwork is required.",
        },
        {
          question: "Will the interest rate match my existing loan?",
          answer:
            "Not always—depends on current market rates and lenders.",
        },
        {
          question: "Can I use the funds for any purpose?",
          answer: "Yes. Top-up loans are multi-purpose like Personal loan usage.",
        },
        {
          question: "How much can I borrow?",
          answer:
            "This can vary lenders to lenders up to 200% LTV of existing car value.",
        },
        {
          question: "Is approval faster?",
          answer: "Yes, as your profile is already with Rupeedot.",
        },
        {
          question: "Is repayment history important?",
          answer: "Yes—it's a primary eligibility factor.",
        },
        {
          question: "Available for salaried and self-employed?",
          answer: "Yes, if criteria are met.",
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
            className="inline-flex items-center text-[#D47734] hover:text-[#a85a28] mb-6 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Community
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold bg-[#D47734] bg-clip-text text-transparent mb-4">
            Questions Frequently Asked by Our Customers.
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Find answers to commonly asked questions about our loan products. Can't find what you're looking
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
                  const globalIndex = categoryIndex * 100 + questionIndex
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
              <button className="inline-flex items-center justify-center py-4 bg-white text-[#D47734] rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-[213px]">
                Contact Support
              </button>
            </Link>
            <Link to="">
              <button className="inline-flex items-center justify-center py-4 bg-white text-[#D47734] rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center w-[213px]">
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
