

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X } from "lucide-react"
 import logo from "../../assets/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo || "/placeholder.svg"} alt="RupeeDot Logo" className="h-12 w-auto" />
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className={`text-base font-medium hover:text-orange-500 transition-colors ${
              isActive("/") ? "text-orange-500" : "text-gray-700"
            }`}
          >
            Home
          </Link>
          <div className="relative group">
            <Link
              to="/our-story"
              className={`text-base font-medium hover:text-orange-500 transition-colors flex items-center ${
                isActive("/our-story") ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Our Story
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <div className="py-2 px-4">
                <Link
                  to="/our-story#about"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/our-story#team"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Our Team
                </Link>
                <Link
                  to="/our-story#mission"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Mission & Vision
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <Link
              to="/loans"
              className={`text-base font-medium hover:text-orange-500 transition-colors flex items-center ${
                isActive("/loans") ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Loans
              <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right">
              <div className="py-2 px-4">
                <Link
                  to="/loans/personal"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Personal Loan
                </Link>
                <Link
                  to="/loans/used-car"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Used Car Loan
                </Link>
                <Link
                  to="/loans/new-car"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  New Car Loan
                </Link>
                <Link
                  to="/loans/against-car"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Loan Against Car
                </Link>
              </div>
            </div>
          </div>
          <Link
            to="/calculators"
            className={`text-base font-medium hover:text-orange-500 transition-colors ${
              isActive("/calculators") ? "text-orange-500" : "text-gray-700"
            }`}
          >
            Calculators
          </Link>
          <Link
            to="/become-partner"
            className={`text-base font-medium hover:text-orange-500 transition-colors ${
              isActive("/become-partner") ? "text-orange-500" : "text-gray-700"
            }`}
          >
            Become a Partner
          </Link>
        </nav>

        {/* Apply Now Button */}
        <Link
          to="/apply"
          className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Apply Now
          <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 md:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        >
          <div
            className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-4">
              <button className="text-gray-700 focus:outline-none" onClick={closeMenu}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <div className="px-4 py-2">
              <Link
                to="/"
                className={`block py-3 text-base font-medium ${isActive("/") ? "text-orange-500" : "text-gray-700"}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <div className="py-3">
                <div
                  className={`flex items-center justify-between text-base font-medium ${
                    isActive("/our-story") ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  <Link to="/our-story" onClick={closeMenu}>
                    Our Story
                  </Link>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/our-story#about" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    About Us
                  </Link>
                  <Link to="/our-story#team" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    Our Team
                  </Link>
                  <Link to="/our-story#mission" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    Mission & Vision
                  </Link>
                </div>
              </div>
              <div className="py-3">
                <div
                  className={`flex items-center justify-between text-base font-medium ${
                    isActive("/loans") ? "text-orange-500" : "text-gray-700"
                  }`}
                >
                  <Link to="/loans" onClick={closeMenu}>
                    Loans
                  </Link>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link to="/loans/personal" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    Personal Loan
                  </Link>
                  <Link to="/loans/used-car" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    Used Car Loan
                  </Link>
                  <Link to="/loans/new-car" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    New Car Loan
                  </Link>
                  <Link to="/loans/against-car" className="block py-2 text-sm text-gray-700" onClick={closeMenu}>
                    Loan Against Car
                  </Link>
                </div>
              </div>
              <Link
                to="/calculators"
                className={`block py-3 text-base font-medium ${
                  isActive("/calculators") ? "text-orange-500" : "text-gray-700"
                }`}
                onClick={closeMenu}
              >
                Calculators
              </Link>
              <Link
                to="/become-partner"
                className={`block py-3 text-base font-medium ${
                  isActive("/become-partner") ? "text-orange-500" : "text-gray-700"
                }`}
                onClick={closeMenu}
              >
                Become a Partner
              </Link>
              <div className="mt-6">
                <Link
                  to="/apply"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center"
                  onClick={closeMenu}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
