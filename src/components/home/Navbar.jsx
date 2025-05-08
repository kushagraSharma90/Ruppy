"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X, BookOpen } from "lucide-react"
import calculatorImg from "../../assets/calculatorImg.png"
import IconImage from "../../assets/IconImage.png"
import Home from "../../assets/home.png"
import deal from "../../assets/deal.png"
import achieveGoal from "../../assets/achieveGoal.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`)

  // Common styles for links
  const getLinkStyles = (path) => {
    const active = isActive(path)
    return {
      linkClass: `flex items-center transition-colors hover:text-orange-500 ${active ? "text-orange-500" : "text-gray-700"}`,
      iconClass: `h-5 w-5 mr-2 inline-block transition-all ${active ? "filter-orange" : ""}`,
    }
  }

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      {/* Add this CSS for icon color filtering */}
      <style jsx="true">{`
        .filter-orange {
          filter: invert(56%) sepia(75%) saturate(1582%) hue-rotate(346deg) brightness(101%) contrast(96%);
        }
      `}</style>

      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img
            src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
            alt="RupeeDot Logo"
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Home Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/")
            return (
              <Link to="/" className={linkClass}>
                <img src={Home || "/placeholder.svg"} alt="Home" className={iconClass} />
                Home
              </Link>
            )
          })()}

          {/* Our Story Dropdown */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/our-story")
            return (
              <div className="relative group">
                <Link to="/our-story" className={linkClass}>
                  <img src={achieveGoal || "/placeholder.svg"} alt="Our Story" className={iconClass} />
                  Our Story <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2 px-4">
                    <Link
                      to="/our-story/about"
                      className="block py-2 text-sm hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link to="/our-story/team" className="block py-2 text-sm hover:text-orange-500" onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Loans Dropdown */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/loans")
            return (
              <div className="relative group">
                <Link to="/loans" className={linkClass}>
                  <img src={IconImage || "/placeholder.svg"} alt="Loans" className={iconClass} />
                  Loans <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-2 px-4">
                    <Link
                      to="/loans/personal"
                      className="flex items-center py-2 text-sm hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="Personal" className="h-4 w-4 mr-2" />
                      Personal Loan
                    </Link>
                    <Link
                      to="/loans/used-car"
                      className="flex items-center py-2 text-sm hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="Used Car" className="h-4 w-4 mr-2" />
                      Used Car Loan
                    </Link>
                    <Link
                      to="/loans/new-car"
                      className="flex items-center py-2 text-sm hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="New Car" className="h-4 w-4 mr-2" />
                      New Car Loan
                    </Link>
                    <Link
                      to="/loans/against-car"
                      className="flex items-center py-2 text-sm hover:text-orange-500"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="Loan Against Car" className="h-4 w-4 mr-2" />
                      Loan Against Car
                    </Link>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Calculators Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/calculators")
            return (
              <Link to="/calculators" className={linkClass}>
                <img src={calculatorImg || "/placeholder.svg"} alt="Calculator" className={iconClass} />
                Calculators
              </Link>
            )
          })()}

          {/* Blogs Link */}
          {(() => {
            const { linkClass } = getLinkStyles("/blogs")
            return (
              <Link to="/blogs" className={linkClass}>
                <BookOpen className={`h-5 w-5 mr-2 inline-block ${isActive("/blogs") ? "text-orange-500" : ""}`} />
                Blogs
              </Link>
            )
          })()}

          {/* Become a Partner Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/become-partner")
            return (
              <Link to="/become-partner" className={linkClass}>
                <img src={deal || "/placeholder.svg"} alt="Partner" className={iconClass} />
                Become a Partner
              </Link>
            )
          })()}
        </nav>

        {/* Apply Now Button */}
        <Link
          to="/apply"
          className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
        >
          Apply Now
          <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      >
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button onClick={closeMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-2">
            {/* Mobile Menu Links */}
            <Link
              to="/"
              className={`flex items-center py-2 ${isActive("/") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <img
                src={Home || "/placeholder.svg"}
                alt="Home"
                className={`h-5 w-5 mr-2 inline-block ${isActive("/") ? "filter-orange" : ""}`}
              />
              Home
            </Link>

            <Link
              to="/our-story"
              className={`flex items-center py-2 ${isActive("/our-story") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <img
                src={achieveGoal || "/placeholder.svg"}
                alt="Our Story"
                className={`h-5 w-5 mr-2 inline-block ${isActive("/our-story") ? "filter-orange" : ""}`}
              />
              Our Story
            </Link>

            <Link
              to="/loans"
              className={`flex items-center py-2 ${isActive("/loans") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <img
                src={IconImage || "/placeholder.svg"}
                alt="Loans"
                className={`h-5 w-5 mr-2 inline-block ${isActive("/loans") ? "filter-orange" : ""}`}
              />
              Loans
            </Link>

            <Link
              to="/calculators"
              className={`flex items-center py-2 ${isActive("/calculators") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <img
                src={calculatorImg || "/placeholder.svg"}
                alt="Calculator"
                className={`h-5 w-5 mr-2 inline-block ${isActive("/calculators") ? "filter-orange" : ""}`}
              />
              Calculators
            </Link>

            <Link
              to="/blogs"
              className={`flex items-center py-2 ${isActive("/blogs") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <BookOpen className={`h-5 w-5 mr-2 inline-block ${isActive("/blogs") ? "text-orange-500" : ""}`} />
              Blogs
            </Link>

            <Link
              to="/become-partner"
              className={`flex items-center py-2 ${isActive("/become-partner") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              <img
                src={deal || "/placeholder.svg"}
                alt="Partner"
                className={`h-5 w-5 mr-2 inline-block ${isActive("/become-partner") ? "filter-orange" : ""}`}
              />
              Become a Partner
            </Link>

            <Link
              to="/apply"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
              onClick={closeMenu}
            >
              Apply Now
              <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
