"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { ChevronDown, Menu, X, Users, BookOpen, Heart, Briefcase, HelpCircle } from "lucide-react"
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false)
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`)

  const getLinkStyles = (path) => {
    const active = isActive(path)
    return {
      linkClass: `group flex items-center relative px-3 py-2 rounded-xl transition-colors duration-200
        ${active ? "text-orange-500" : "text-gray-700"}
        hover:text-orange-500`,
      iconClass: `h-5 w-5 mr-2 inline-block transition-all duration-200 ${active ? "filter-orange" : ""}`,
    }
  }

  return (
    <header className="sticky top-2 z-50 w-full flex justify-center transition-all duration-300">
      <style>{`
        .filter-orange {
          filter: invert(56%) sepia(75%) saturate(1582%) hue-rotate(346deg) brightness(101%) contrast(96%);
        }
        @media (max-width: 350px) {
          .logo-img { height: 2rem; }
        }
        .nav-underline:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #f97316;
          transition: width .3s;
          border-radius: 2px;
          margin-top: 2px;
        }
        .group:hover .nav-underline:after, .text-orange-500 .nav-underline:after {
          width: 100%;
        }
        .dropdown-anim {
          opacity: 0;
          transform: translateY(10px) scale(0.98);
          pointer-events: none;
          transition: all 0.25s cubic-bezier(.4,0,.2,1);
        }
        .group:hover .dropdown-anim {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }
        .sidebar-anim {
          transition: transform 0.35s cubic-bezier(.4,0,.2,1), opacity 0.2s;
        }
      `}</style>
      <div
        className={`container mx-auto px-2 sm:px-4 flex justify-between items-center
          bg-blue-50/80 backdrop-blur-md shadow-2xl border border-blue-100
          rounded-2xl transition-all duration-300
          ${scrolled ? "py-2" : "py-4"}
          `}
        style={{ maxWidth: 1200 }}
      >
        <Link to="/" className="flex items-center">
          <img
            src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
            alt="RupeeDot Logo"
            className="h-8 sm:h-10 md:h-12 w-auto logo-img rounded-xl shadow"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {/* Home Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/")
            return (
              <Link to="/" className={`${linkClass} text-sm lg:text-base`}>
                <img src={Home || "/placeholder.svg"} alt="Home" className={iconClass} />
                <span className="nav-underline">Home</span>
              </Link>
            )
          })()}

          {/* Our Story Dropdown */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/our-story")
            return (
              <div className="relative group">
                <Link to="/our-story" className={`${linkClass} text-sm lg:text-base`}>
                  <img src={achieveGoal || "/placeholder.svg"} alt="Our Story" className={iconClass} />
                  <span className="nav-underline">Our Story</span> <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="dropdown-anim absolute left-0 w-48 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
                  <div className="py-2 px-4">
                    <Link
                      to="/our-story/about"
                      className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/ContactUs"
                      className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
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
                <Link to="/loans" className={`${linkClass} text-sm lg:text-base`}>
                  <img src={IconImage || "/placeholder.svg"} alt="Loans" className={iconClass} />
                  <span className="nav-underline">Loans</span> <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="dropdown-anim absolute left-0 w-56 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
                  <div className="py-2 px-4">
                    <Link
                      to="/loans/personal"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="Personal" className="h-4 w-4 mr-2" />
                      Personal Loan
                    </Link>
                    <Link
                      to="/loans/used-car"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="Used Car" className="h-4 w-4 mr-2" />
                      Used Car Loan
                    </Link>
                    <Link
                      to="/loans/new-car"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <img src={IconImage || "/placeholder.svg"} alt="New Car" className="h-4 w-4 mr-2" />
                      New Car Loan
                    </Link>
                    <Link
                      to="/loans/against-car"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
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
              <Link to="/calculators" className={`${linkClass} text-sm lg:text-base`}>
                <img src={calculatorImg || "/placeholder.svg"} alt="Calculator" className={iconClass} />
                <span className="nav-underline">Calculators</span>
              </Link>
            )
          })()}

          {/* Community Dropdown - Updated from simple link */}
          {(() => {
            const { linkClass } = getLinkStyles("/community")
            return (
              <div className="relative group">
                <Link to="/community" className={`${linkClass} text-sm lg:text-base`}>
                  <Users className={`h-5 w-5 mr-2 inline-block ${isActive("/community") ? "text-orange-500" : ""}`} />
                  <span className="nav-underline">Community</span> <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="dropdown-anim absolute left-0 w-56 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
                  <div className="py-2 px-4">
                    <Link
                      to="/community/blogs"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <BookOpen className="h-4 w-4 mr-2" />
                      Blog
                    </Link>
                    <Link
                      to="/community/our-core-values"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <Heart className="h-4 w-4 mr-2" />
                      Our Core Values
                    </Link>
                    <Link
                      to="/community/career"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <Briefcase className="h-4 w-4 mr-2" />
                      Career
                    </Link>
                    <Link
                      to="/community/work-culture"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <Users className="h-4 w-4 mr-2" />
                      Work Culture
                    </Link>
                    <Link
                      to="/community/faq"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-orange-500 transition-colors"
                      onClick={closeMenu}
                    >
                      <HelpCircle className="h-4 w-4 mr-2" />
                      FAQ
                    </Link>
                  </div>
                </div>
              </div>
            )
          })()}

          {/* Become a Partner Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/become-partner")
            return (
              <Link to="/become-partner" className={`${linkClass} text-sm lg:text-base`}>
                <img src={deal || "/placeholder.svg"} alt="Partner" className={iconClass} />
                <span className="nav-underline">Become a Partner</span>
              </Link>
            )
          })()}
        </nav>

        {/* Apply Now Button */}
        <Link
          to="/apply"
          className="hidden md:flex items-center bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-4 py-2 rounded-xl text-sm lg:text-base whitespace-nowrap shadow-lg transition-all duration-200 transform hover:scale-105"
        >
          Apply Now
          <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
            <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none rounded-lg bg-blue-100 p-2 transition-all duration-200 hover:bg-orange-100 hover:text-orange-500"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Sidebar - Overlay */}
      <div
        className={`fixed inset-0 bg-blue-900 bg-opacity-30 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      >
        {/* Mobile Sidebar - Content */}
        <div
          className={`sidebar-anim fixed top-2 right-2 h-[96%] w-64 max-w-[90vw] bg-white/95 shadow-2xl rounded-2xl border border-blue-100 transform overflow-y-auto
            ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          `}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="rounded-lg bg-blue-50 p-2 hover:bg-blue-100 transition-all duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="px-4 py-2 space-y-4">
            <Link
              to="/"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
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
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/our-story") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
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
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/loans") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
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
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/calculators") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
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
              to="/community"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/community") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
              onClick={closeMenu}
            >
              <Users className={`h-5 w-5 mr-2 inline-block ${isActive("/community") ? "text-orange-500" : ""}`} />
              Community
              <ChevronDown className="w-4 h-4 ml-auto" />
            </Link>

            {/* Community Submenu for Mobile */}
            {isActive("/community") && (
              <div className="ml-6 space-y-2 mt-2">
                <Link
                  to="/community/blog"
                  className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                  onClick={closeMenu}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Blog
                </Link>
                <Link
                  to="/community/our-core-values"
                  className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                  onClick={closeMenu}
                >
                  <Heart className="h-4 w-4 mr-2" />
                  Our Core Values
                </Link>
                <Link
                  to="/community/career"
                  className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                  onClick={closeMenu}
                >
                  <Briefcase className="h-4 w-4 mr-2" />
                  Career
                </Link>
                <Link
                  to="/community/work-culture"
                  className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                  onClick={closeMenu}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Work Culture
                </Link>
                <Link
                  to="/community/faq"
                  className="flex items-center py-2 px-3 rounded-lg text-sm text-gray-600 hover:bg-blue-50 hover:text-orange-500 transition-colors"
                  onClick={closeMenu}
                >
                  <HelpCircle className="h-4 w-4 mr-2" />
                  FAQ
                </Link>
              </div>
            )}
            <Link
              to="/become-partner"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/become-partner") ? "text-orange-500 bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-orange-500`}
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
              className="flex items-center bg-[#3870A6] hover:from-blue-700 hover:to-blue-500 text-white px-4 py-2 rounded-xl shadow-lg transition-all duration-200 transform hover:scale-105"
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
