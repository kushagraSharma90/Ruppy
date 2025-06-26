"use client"

import  React from "react"

import { useState } from "react"
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
    // Here you would typically send the data to your backend
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section with Background Pattern */}
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
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-7xl -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information Sidebar - Left Column */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-8 backdrop-blur-sm border border-gray-100 transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 pb-4 border-b border-gray-100">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Phone</p>
                    <p className="text-lg text-blue-600 font-medium">+91 7028095292</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Email</p>
                    <p className="text-lg text-blue-600 font-medium">wecare@rupeedot.com</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Office Address</p>
                    <p className="text-base text-gray-700">
                      E-4020, Solitaire Business Hub, opp. Neco Garden Road, Society Viman Nagar, Pune, Maharashtra
                      411014
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Chat Button Component */}
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MessageSquare className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Need immediate help?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is available for live assistance during business hours.
              </p>
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all">
                <MessageSquare className="h-5 w-5" />
                Start Live Chat
              </button>
            </div>

            {/* Contact Map Component */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-115 transition-all duration-300 hover:shadow-xl">
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
                  <p className="text-sm font-medium">E-4020, Solitaire Business Hub</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Service Image and Contact Form - Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Customer Service Image */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <img
                src={customerServices}
                alt="Customer service representative ready to help"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Contact Form Section */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  Send Us a Message
                </h2>

                {/* Contact Form Component */}
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
                        placeholder="john@gmail.com"
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
    placeholder="(+91) Enter your 10-digit phone number"
    maxLength="10" // Ensures only 10 digits can be entered
    pattern="[0-9]{10}" // HTML5 validation for exactly 10 digits
    title="Please enter a 10-digit phone number (numbers only)"
  />
  {formData.phoneNumber && formData.phoneNumber.length !== 10 && (
    <p className="mt-1 text-sm text-red-600">Phone number must be 10 digits</p>
  )}
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
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                        Location <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="locationType"
                        name="locationType"
                        value={formData.locationType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all appearance-none bg-white"
                      >
                        <option value="">
                          Select an option
                        </option>
                        <option value="loan">Mumbai</option>
                        <option value="support">Pune</option>
                        <option value="partnership">Nashik</option>
                        <option value="other">Other cities coming soon</option>
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
          {/* Background decoration */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 rounded-3xl -z-10"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-xl"></div>

          <div className="relative max-w-6xl mx-auto py-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full px-4 py-2 mb-6">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-600">Trusted by thousands</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight mb-4">
                Join the growing community that counts on{" "}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
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
                  gradient: "from-yellow-400 to-orange-500",
                },
                {
                  icon: Briefcase,
                  text: "Transforming Financial Journeys",
                  description: "Navigate your path to financial freedom with confidence",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: Heart,
                  text: "Driven by Unmatched Customer Delight",
                  description: "Your satisfaction is at the heart of everything we do",
                  gradient: "from-pink-500 to-rose-500",
                },
                {
                  icon: Clock,
                  text: "Always Here for You, Every Moment",
                  description: "Round-the-clock support whenever you need us",
                  gradient: "from-purple-500 to-indigo-500",
                },
              ].map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20"
                  >
                    {/* Card background gradient on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Icon container */}
                    <div className="relative mb-6">
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Icon glow effect */}
                      <div
                        className={`absolute inset-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-300`}
                      ></div>
                    </div>

                    {/* Content */}
                    <div className="relative">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                        {item.text}
                      </h3>
                      <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>

                    {/* Hover border effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}
                    ></div>
                  </div>
                )
              })}
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <div className="inline-flex items-center gap-2 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 border-2 border-white"
                    ></div>
                  ))}
                </div>
                {/* <span>Join 1000+ satisfied customers</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
