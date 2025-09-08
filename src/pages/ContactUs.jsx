"use client"

import React, { useState } from "react"
import { MapPin, Phone, Mail, MessageSquare, Star, Briefcase, Heart, Clock } from "lucide-react"
import customerServices from "../assets/customerServices.jpeg"

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    inquiryType: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Message sent successfully!")
    setFormData({
      fullName: "",
      email: "",
      phoneNumber: "",
      inquiryType: "",
      message: "",
    })
  }

  return (
    <div className="min-h-screen bg-[#f5f5ec]">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#3870A6] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Get in Touch</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              Have questions about your loan or need assistance? Our team is ready to provide the support you need.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f5f5ec] to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Information Sidebar */}
<div className="space-y-6">
  <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-gray-100 transition-all duration-300 hover:shadow-xl">
    <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">
      Contact Information
    </h2>
    <div className="space-y-6">
      <div className="flex items-start group">
        <div className="flex-shrink-0 mt-1 p-3 bg-[#3870a6]/10 rounded-full group-hover:bg-[#3870a6]/20 transition-colors duration-300">
          <Phone className="h-5 w-5 text-[#3870a6]" />
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">Phone</p>
          <p className="text-lg text-[#3870a6] font-medium">+91 7028095292</p>
        </div>
      </div>

      <div className="flex items-start group">
        <div className="flex-shrink-0 mt-1 p-3 bg-[#3870a6]/10 rounded-full group-hover:bg-[#3870a6]/20 transition-colors duration-300">
          <Mail className="h-5 w-5 text-[#3870a6]" />
        </div>
        <div className="ml-4">
          <p className="text-base font-semibold text-gray-900">Email</p>
          <p className="text-lg text-[#3870a6] font-medium">wecare@rupeedot.com</p>
        </div>
      </div>
   

                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Office Address</p>
                    <p className="text-base text-gray-700">
                      G-1010, Solitaire Business Hub, opp. Neco Garden Road, Society Viman Nagar, Pune, Maharashtra
                      411014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat Button */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Need immediate help?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is available for live assistance during business hours.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#3870a6] text-white font-medium rounded-lg shadow-md hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                <MessageSquare className="h-5 w-5" />
                Start Live Chat
              </button>
            </div>

            {/* Contact Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-90 transition-all duration-300 hover:shadow-xl">
              <div className="h-full w-full bg-gray-200 relative">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91543841489441!3d18.562551387384868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sViman%20Nagar%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  title="Office Location"
                ></iframe>
                <div className="absolute bottom-4 left-4 bg-white px-4 py-2 rounded-lg shadow-md">
                  <p className="text-sm font-medium">  E-4020, Solitaire Business Hub, Viman Nagar, Pune, Maharashtra
                  411014</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Service Image + Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={customerServices}
                alt="Customer service representative ready to help"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                        placeholder="(+91) 456-7890"
                      />
                    </div>
                    <div>
                      <label htmlFor="inquiryType" className="block text-sm font-medium text-gray-700 mb-1">
                        Type of Inquiry <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="loan">Loan Inquiry</option>
                        <option value="support">Customer Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <div className="flex items-center justify-between">
                    <p className="text-sm text-gray-500">
                      <span className="text-red-500">*</span> Required fields
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="relative mt-20 mb-16 px-4">
          <div className="relative max-w-6xl mx-auto py-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Trusted by thousands</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-4">
                Join the growing community that counts on{" "}
                <span className="bg-[#3870a6] bg-clip-text text-transparent">
                  RupeeDot
                </span>{" "}
                for their financial success.
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our commitment to excellence and innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {[
                {
                  icon: Star,
                  text: "Empowering Dreams Every Day",
                  description: "Turn your financial aspirations into achievable goals",
                },
                {
                  icon: Briefcase,
                  text: "Transforming Financial Journeys",
                  description: "Navigate your path to financial freedom with confidence",
                },
                {
                  icon: Heart,
                  text: "Driven by Unmatched Customer Delight",
                  description: "Your satisfaction is at the heart of everything we do",
                },
                {
                  icon: Clock,
                  text: "Always Here for You, Every Moment",
                  description: "Round-the-clock support whenever you need us",
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                const isBlue = index % 2 === 0
                return (
                  <div
                    key={index}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
                  >
                    <div className="relative mb-6">
                      <div
                        className="inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-md group-hover:scale-110 transition-transform duration-300"
                        style={{
                          backgroundColor: isBlue ? "#3870a6" : "#d47734",
                        }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {item.text}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16 bg-[#f5f5ec]">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#3870a6] border-2 border-white"
                    ></div>
                  ))}
                </div>
                <span>Join 1000+ satisfied customers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
