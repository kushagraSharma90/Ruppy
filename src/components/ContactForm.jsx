"use client"

import { useState } from "react"
import { AlertCircle, CheckCircle2, Send } from "lucide-react"

const ContactForm = () => {
  const [formState, setFormState] = useState("idle") // "idle" | "submitting" | "success" | "error"
  const [focused, setFocused] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      inquiryType: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    setTimeout(() => {
      setFormState("success")
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormState("idle")
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          inquiryType: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  const Alert = ({ children, className }) => (
    <div className={`p-4 rounded-lg border flex items-center space-x-2 ${className}`}>{children}</div>
  )

  const AlertDescription = ({ children }) => <span className="text-sm">{children}</span>

  const Input = ({ className, onFocus, onBlur, ...props }) => (
    <input
      className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  )

  const Textarea = ({ className, onFocus, onBlur, ...props }) => (
    <textarea
      className={`px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      onFocus={onFocus}
      onBlur={onBlur}
      {...props}
    />
  )

  const Select = ({ children, value, onChange, ...props }) => (
    <select
      className="px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      {...props}
    >
      {children}
    </select>
  )

  const Button = ({ children, className, ...props }) => (
    <button className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${className}`} {...props}>
      {children}
    </button>
  )

  const Label = ({ children, htmlFor, className }) => (
    <label htmlFor={htmlFor} className={`block text-sm font-medium mb-1 ${className}`}>
      {children}
    </label>
  )

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formState === "success" && (
        <Alert className="bg-white border-green-200 text-green-800 animate-fadeIn">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription>Thank you for your message! We'll get back to you shortly.</AlertDescription>
        </Alert>
      )}

      {formState === "error" && (
        <Alert className="bg-red-50 border-red-200 text-red-800 animate-fadeIn">
          <AlertCircle className="h-4 w-4 text-red-600" />
          <AlertDescription>There was an error sending your message. Please try again.</AlertDescription>
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName" className="text-gray-700 font-medium">
            Full Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="John Doe"
            required
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ${
              focused === "fullName" ? "shadow-sm shadow-blue-200" : ""
            }`}
            disabled={formState === "submitting"}
            onFocus={() => setFocused("fullName")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-gray-700 font-medium">
            Email Address <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ${
              focused === "email" ? "shadow-sm shadow-blue-200" : ""
            }`}
            disabled={formState === "submitting"}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-gray-700 font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(+91) 456-7890"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ${
              focused === "phone" ? "shadow-sm shadow-blue-200" : ""
            }`}
            disabled={formState === "submitting"}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="inquiryType" className="text-gray-700 font-medium">
            Type of Inquiry <span className="text-red-500">*</span>
          </Label>
          <Select
            name="inquiryType"
            required
            value={formData.inquiryType}
            onChange={handleSelectChange}
            disabled={formState === "submitting"}
            onFocus={() => setFocused("inquiryType")}
            onBlur={() => setFocused(null)}
          >
            <option value="">Select an option</option>
            <option value="loan-application">Loan Application</option>
            <option value="repayment">Repayment</option>
            <option value="technical-support">Technical Support</option>
            <option value="general-question">General Question</option>
            <option value="other">Other</option>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-gray-700 font-medium">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          required
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full resize-none border-gray-300 focus:border-blue-500 focus:ring-blue-500 transition-all duration-300 ${
            focused === "message" ? "shadow-sm shadow-blue-200" : ""
          }`}
          disabled={formState === "submitting"}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
        />
      </div>

      <div className="flex items-center">
        <Button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          disabled={formState === "submitting"}
        >
          {formState === "submitting" ? (
            <span className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              <Send className="h-4 w-4 mr-2" />
              Send Message
            </span>
          )}
        </Button>
        <p className="text-xs text-gray-500 ml-4">
          <span className="text-red-500">*</span> Required fields
        </p>
      </div>
    </form>
  )
}

export default ContactForm
