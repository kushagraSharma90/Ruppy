import React from 'react'
import { MapPin, Phone, Mail, MessageSquare } from "lucide-react"
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
        <div className="mt-16 mb-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-800">Trusted by Thousands of Clients</h2>
            <p className="text-gray-600 mt-2">
              Join our satisfied customers who rely on RuppyDot for their financial needs
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15k+", label: "Happy Clients" },
              { number: "₹250B+", label: "Loans Processed" },
              { number: "99.8%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Customer Support" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
