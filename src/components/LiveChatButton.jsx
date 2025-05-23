"use client"

import { useState } from "react"
import { MessageSquare } from "lucide-react"

const LiveChatButton = () => {
  const [isHovered, setIsHovered] = useState(false)

  const handleChatClick = () => {
    // In a real implementation, this would open your chat widget
    alert("Live chat functionality would open here")
  }

  const Button = ({ children, className, onClick, onMouseEnter, onMouseLeave }) => (
    <button
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  )

  return (
    <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 border border-blue-100 transition-all duration-300 hover:shadow-xl">
      <div className="flex flex-col items-center text-center">
        <div
          className={`mb-6 p-4 rounded-full transition-all duration-300 ${
            isHovered ? "bg-blue-600 transform scale-110" : "bg-blue-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MessageSquare
            className={`h-8 w-8 transition-colors duration-300 ${isHovered ? "text-white" : "text-blue-600"}`}
          />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">Need immediate help?</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Our support team is available for live assistance during business hours.
        </p>
        <Button
          onClick={handleChatClick}
          className={`w-full py-6 rounded-xl font-medium text-base transition-all duration-300 ${
            isHovered
              ? "bg-blue-700 shadow-lg shadow-blue-200 text-white"
              : "bg-blue-600 shadow-md shadow-blue-100 text-white"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <MessageSquare className="h-5 w-5 mr-2 inline" />
          Start Live Chat
        </Button>
      </div>
    </div>
  )
}

export default LiveChatButton
