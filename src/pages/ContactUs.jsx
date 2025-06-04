import React from 'react'
import { MapPin, Phone, Mail, MessageSquare, Star, Briefcase, Heart, Clock } from "lucide-react"

import ContactForm from "../components/ContactForm"

import ContactMap from "../components/ContactMap"
import LiveChatButton from "../components/LiveChatButton"

const ContactUs = () => {
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
          {/* Contact Form Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">
                    <MessageSquare className="h-5 w-5" />
                  </span>
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* Contact Information Sidebar */}
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
                  <div className="flex-shrink-0 mt-1 p-3 bg-white rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Email</p>
                    <p className="text-lg text-blue-600 font-medium">info@rupeedot.com</p>
                   
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="flex-shrink-0 mt-1 p-3 bg-white rounded-full group-hover:bg-blue-100 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold text-gray-900">Office Address</p>
                    <p className="text-base text-gray-700">

                     G-1010,Solitaire Business Hub, opp. Neco Garden Road, Society Viman Nagar, Pune, Maharashtra 411014
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <LiveChatButton />

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-72 transition-all duration-300 hover:shadow-xl">
              <ContactMap />
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
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">RupeeDot</span>{" "}
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
            <span>Join 1000+ satisfied customers</span>
          </div>
        </div>
      </div>
    </div>
  


      </div>
    </div>
  )
}

export default ContactUs
