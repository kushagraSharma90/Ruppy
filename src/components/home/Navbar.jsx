import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import NewCar from "../../assets/NewCar.png"
import UsedCar from "../../assets/UsedCar.png"
import AgainstCar from "../../assets/AgainstCar.png"
import PersonalCar from "../../assets/PersonalCar.png"
import {
  ChevronDown, Menu, X, Home as HomeIcon, Users, BookOpen, 
  Heart, Briefcase, HelpCircle, Calculator, Handshake, FileText,
  History, IndianRupee 
} from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)
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
  const closeMenu = () => {
    setIsOpen(false)
    setMobileDropdown(null)
  }
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(`${path}/`)

  const getLinkStyles = (path) => {
    const active = isActive(path)
    return {
      linkClass: `group flex items-center relative px-3 py-2 rounded-xl duration-200
        ${active ? "text-[#d47734]" : "text-gray-700"}
        hover:text-[#d47734] hover:bg-blue-50`,
      iconClass: `h-5 w-5 mr-2 transition-colors duration-200 
        ${active ? "text-[#d47734]" : "text-gray-400"} group-hover:text-[#d47734]`,
    }
  }

  // Handle mobile link click - opens dropdown if closed, navigates if open
  const handleMobileLinkClick = (path, dropdown, e) => {
    if (mobileDropdown !== dropdown) {
      e.preventDefault()
      setMobileDropdown(dropdown)
    } else {
      closeMenu()
    }
  }

  return (
    <header className="sticky top-2 z-50 w-full flex justify-center transition-all duration-300">
      <style>{`
        @media (max-width: 350px) {
          .logo-img { height: 2rem; }
        }
        .nav-underline:after {
          content: "";
          display: block;
          width: 0;
          height: 2px;
          background: #d47734;
          transition: width .3s;
          border-radius: 2px;
          margin-top: 2px;
        }
        .group:hover .nav-underline:after, .text-[#d47734] .nav-underline:after {
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
        style={{ maxWidth: 1250 }}
      >
        <Link to="/" className="flex items-center">
          <img
            src="/images/LOGO.png"
            alt="RupeeDot Logo"
            className="h-8 sm:h-10 md:h-12 w-auto logo-img "
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
          {/* Home Link */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/")
            return (
              <Link to="/" className={`${linkClass} text-sm lg:text-base`}>
                <HomeIcon className={iconClass} />
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
                  <History className={iconClass} />
                  <span className="nav-underline">Our Story</span> <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="dropdown-anim absolute left-0 w-48 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
                  <div className="py-2 px-4">
                    <Link
                      to="/our-story/about"
                      className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734]"
                      onClick={closeMenu}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/ContactUs"
                      className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
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

  // Loan categories array
  const loanTypes = [
    {
      id: 1,
      title: "Personal Loan",
      image: "/images/PersonalIcon.png",
      
      link: "/loans/personal-car-loan",
    },
    {
      id: 2,
      title: "Used Car Loan",
      image: "/images/UsedIcon.png",
   
      link: "/loans/used-car-loan",
    },
    {
      id: 3,
      title: "New Car Loan",
      image: "/images/NewIcon.png",
    
      link: "/loans/new-car-loan",
    },
    {
      id: 4,
      title: "Loan Against Car",
      image: "/images/LoanLoan.png",
     
      link: "/loans/against-car-loan",
    },
  ]

  return (
    <div className="relative group">
      {/* Parent Loans Link (Indian Rupee icon) */}
      <Link to="/loans" className={`${linkClass} text-sm lg:text-base`}>
        <IndianRupee className={`${iconClass} mr-2`} />
        <span className="nav-underline">Loans</span>
        <ChevronDown className="w-4 h-4 ml-1" />
      </Link>

      {/* Dropdown Menu */}
      <div className="dropdown-anim absolute left-0 w-64 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
        <div className="py-3 px-4 space-y-1">
          {loanTypes.map((loan) => (
            <Link
              key={loan.id}
              to={loan.link}
              className="flex items-center py-2 px-2 rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
              onClick={closeMenu}
            >
              <span className="w-14 h-14 mr-3 flex-shrink-0">
                <img
                  src={loan.image}
                  alt={loan.title}
                  className="w-full h-full object-contain"
                />
              </span>
              <div>
                <p className="font-medium text-sm">{loan.title}</p>
                <p className="text-xs text-gray-500">{loan.description}</p>
              </div>
            </Link>
          ))}
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
                <Calculator className={iconClass} />
                <span className="nav-underline">Calculators</span>
              </Link>
            )
          })()}

          {/* Community Dropdown */}
          {(() => {
            const { linkClass, iconClass } = getLinkStyles("/community")
            return (
              <div className="relative group">
                <Link to="/community" className={`${linkClass} text-sm lg:text-base`}>
                  <Users className={iconClass} />
                  <span className="nav-underline">Community</span> <ChevronDown className="w-4 h-4 ml-1" />
                </Link>
                <div className="dropdown-anim absolute left-0 w-56 bg-white shadow-xl rounded-xl border border-blue-100 z-50">
                  <div className="py-2 px-4">
                    <Link
                      to="/community/blogs"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                      onClick={closeMenu}
                    >
                      <BookOpen className="h-4 w-4 mr-2 text-[#d47734]" />
                      Blog
                    </Link>
                    <Link
                      to="/community/our-core-values"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                      onClick={closeMenu}
                    >
                      <Heart className="h-4 w-4 mr-2 text-[#d47734]" />
                      Our Core Values
                    </Link>
                    <Link
                      to="/community/career"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                      onClick={closeMenu}
                    >
                      <Briefcase className="h-4 w-4 mr-2 text-[#d47734]" />
                      Career
                    </Link>
                    <Link
                      to="/community/work-culture"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                      onClick={closeMenu}
                    >
                      <Users className="h-4 w-4 mr-2 text-[#d47734]" />
                      Work Culture
                    </Link>
                    <Link
                      to="/community/faq"
                      className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                      onClick={closeMenu}
                    >
                      <HelpCircle className="h-4 w-4 mr-2 text-[#d47734]" />
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
                <Handshake className={iconClass} />
                <span className="nav-underline">Become a Partner</span>
              </Link>
            )
          })()}
        </nav>

        {/* Apply Now Button */}
       <Link
  to="/apply"
  className="hidden md:flex items-center bg-[#3870a6] hover:bg-[#2d5a87] text-white px-4 py-2 rounded-xl text-sm lg:text-base whitespace-nowrap shadow-lg transition-all duration-200 transform hover:scale-105"
>
  Apply Now

    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>

</Link>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-blue-600 focus:outline-none rounded-lg bg-blue-100 p-2 transition-all duration-200 hover:bg-orange-100 hover:text-[#d47734]"
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
          <div className="px-4 py-2 space-y-2">
            {/* Home */}
            <Link
              to="/"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/") ? "text-[#d47734] bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-[#d47734]`}
              onClick={closeMenu}
            >
              <HomeIcon className={`h-5 w-5 mr-2 ${isActive("/") ? "text-[#d47734]" : "text-gray-400"}`} />
              Home
            </Link>

            {/* Our Story - Now a clickable link that also toggles dropdown */}
            <div>
              <Link
                to="/our-story"
                className={`flex items-center w-full py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/our-story") ? "text-[#d47734] bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-[#d47734]`}
                onClick={(e) => handleMobileLinkClick("/our-story", "our-story", e)}
              >
                <History className={`h-5 w-5 mr-2 ${isActive("/our-story") ? "text-[#d47734]" : "text-gray-400"}`} />
                Our Story
                <ChevronDown className={`ml-auto transition-transform ${mobileDropdown === "our-story" ? "rotate-180" : ""}`} />
              </Link>
              {mobileDropdown === "our-story" && (
                <div className="pl-8 pb-2">
                  <Link
                    to="/our-story/about"
                    className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    About Us
                  </Link>
                  <Link
                    to="/ContactUs"
                    className="block py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

           {/* Loans - Now a clickable link that also toggles dropdown */}
<div>
  <Link
    to="/loans"
    className={`flex items-center w-full py-2 px-3 rounded-lg transition-colors duration-200 ${
      isActive("/loans") ? "text-[#d47734] bg-blue-50" : "text-gray-700"
    } hover:bg-blue-50 hover:text-[#d47734]`}
    onClick={(e) => handleMobileLinkClick("/loans", "loans", e)}
  >
    <span className="mr-2 w-5 h-5">
      <img src={NewCar} alt="Loans" className="w-full h-full object-contain" />
    </span>
    Loans
    <ChevronDown
      className={`ml-auto transition-transform ${
        mobileDropdown === "loans" ? "rotate-180" : ""
      }`}
    />
  </Link>

  {mobileDropdown === "loans" && (
    <div className="pl-8 pb-2">
      <Link
        to="/loans/personal"
        className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
        onClick={closeMenu}
      >
        <span className="mr-2 w-7 h-7">
          <img src={PersonalCar} alt="Personal Loan" className="w-full h-full object-contain" />
        </span>
        Personal Loan
      </Link>
      <Link
        to="/loans/used-car"
        className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
        onClick={closeMenu}
      >
        <span className="mr-2 w-7 h-7">
          <img src={UsedCar} alt="Used Car Loan" className="w-full h-full object-contain" />
        </span>
        Used Car Loan
      </Link>
      <Link
        to="/loans/new-car"
        className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
        onClick={closeMenu}
      >
        <span className="mr-2 w-7 h-7">
          <img src={NewCar} alt="New Car Loan" className="w-full h-full object-contain" />
        </span>
        New Car Loan
      </Link>
      <Link
        to="/loans/against-car"
        className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
        onClick={closeMenu}
      >
        <span className="mr-2 w-7 h-7">
          <img src={AgainstCar} alt="Loan Against Car" className="w-full h-full object-contain" />
        </span>
        Loan Against Car
      </Link>
    </div>
  )}
</div>

            {/* Calculators */}
            <Link
              to="/calculators"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/calculators") ? "text-[#d47734] bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-[#d47734]`}
              onClick={closeMenu}
            >
              <Calculator className={`h-5 w-5 mr-2 ${isActive("/calculators") ? "text-[#d47734]" : "text-gray-400"}`} />
              Calculators
            </Link>

            {/* Community - Now a clickable link that also toggles dropdown */}
            <div>
              <Link
                to="/community"
                className={`flex items-center w-full py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/community") ? "text-[#d47734] bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-[#d47734]`}
                onClick={(e) => handleMobileLinkClick("/community", "community", e)}
              >
                <Users className={`h-5 w-5 mr-2 ${isActive("/community") ? "text-[#d47734]" : "text-gray-400"}`} />
                Community
                <ChevronDown className={`ml-auto transition-transform ${mobileDropdown === "community" ? "rotate-180" : ""}`} />
              </Link>
              {mobileDropdown === "community" && (
                <div className="pl-8 pb-2">
                  <Link
                    to="/community/blogs"
                    className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    <BookOpen className="h-4 w-4 mr-2 text-[#d47734]" />
                    Blog
                  </Link>
                  <Link
                    to="/community/our-core-values"
                    className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    <Heart className="h-4 w-4 mr-2 text-[#d47734]" />
                    Our Core Values
                  </Link>
                  <Link
                    to="/community/career"
                    className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    <Briefcase className="h-4 w-4 mr-2 text-[#d47734]" />
                    Career
                  </Link>
                  <Link
                    to="/community/work-culture"
                    className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    <Users className="h-4 w-4 mr-2 text-[#d47734]" />
                    Work Culture
                  </Link>
                  <Link
                    to="/community/faq"
                    className="flex items-center py-2 text-sm rounded-lg hover:bg-blue-50 hover:text-[#d47734] transition-colors"
                    onClick={closeMenu}
                  >
                    <HelpCircle className="h-4 w-4 mr-2 text-[#d47734]" />
                    FAQ
                  </Link>
                </div>
              )}
            </div>

            {/* Become a Partner */}
            <Link
              to="/become-partner"
              className={`flex items-center py-2 px-3 rounded-lg transition-colors duration-200 ${isActive("/become-partner") ? "text-[#d47734] bg-blue-50" : "text-gray-700"} hover:bg-blue-50 hover:text-[#d47734]`}
              onClick={closeMenu}
            >
              <Handshake className={`h-5 w-5 mr-2 ${isActive("/become-partner") ? "text-[#d47734]" : "text-gray-400"}`} />
              Become a Partner
            </Link>

            {/* Apply Now Button (Mobile) */}
          <Link
  to="/apply"
  className="hidden md:flex items-center bg-[#3870a6] hover:bg-[#2d5a87] text-white px-4 py-2 rounded-xl text-sm lg:text-base whitespace-nowrap shadow-lg transition-all duration-200 transform hover:scale-105"
>
  Apply Now
  <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
    <svg className="w-3 h-3 lg:w-4 lg:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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