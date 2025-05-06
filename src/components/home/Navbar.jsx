import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import calculatorImg from "../../assets/calculatorImg.png";
import IconImage from '../../assets/IconImage.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
            alt="RupeeDot Logo"
            className="h-12 w-auto"
          />
        </Link>

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
              className={`text-base font-medium hover:text-orange-500 flex items-center ${
                isActive("/our-story") ? "text-orange-500" : "text-gray-700"
              }`}
            >
              Our Story <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2 px-4">
                <Link
                  to="/our-story/about"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  About Us
                </Link>
                <Link
                  to="/our-story/team"
                  className="block py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  Our Team
                </Link>
                <Link
                  to="/our-story/mission"
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
              className={`text-base font-medium hover:text-orange-500 flex items-center ${
                isActive("/loans") ? "text-orange-500" : "text-gray-700"
              }`}
            >
              <img src={IconImage} alt="Loans Icon" className="h-5 w-5 mr-2 inline-block" />
              Loans <ChevronDown className="w-4 h-4 ml-1" />
            </Link>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              <div className="py-2 px-4">
                <Link
                  to="/loans/personal"
                  className="flex items-center py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  <img src={IconImage} alt="Personal Loan Icon" className="h-4 w-4 mr-2 inline-block" />
                  Personal Loan
                </Link>
                <Link
                  to="/loans/used-car"
                  className="flex items-center py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  <img src={IconImage} alt="Used Car Loan Icon" className="h-4 w-4 mr-2 inline-block" />
                  Used Car Loan
                </Link>
                <Link
                  to="/loans/new-car"
                  className="flex items-center py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  <img src={IconImage} alt="New Car Loan Icon" className="h-4 w-4 mr-2 inline-block" />
                  New Car Loan
                </Link>
                <Link
                  to="/loans/against-car"
                  className="flex items-center py-2 text-sm text-gray-700 hover:text-orange-500"
                  onClick={closeMenu}
                >
                  <img src={IconImage} alt="Loan Against Car Icon" className="h-4 w-4 mr-2 inline-block" />
                  Loan Against Car
                </Link>
              </div>
            </div>
          </div>

          <Link
            to="/calculators"
            className={`flex items-center text-base font-medium hover:text-orange-500 ${
              isActive("/calculators") ? "text-orange-500" : "text-gray-700"
            }`}
          >
            <img src={calculatorImg} alt="Calculator Icon" className="h-5 w-5 mr-2 inline-block" />
            Calculators
          </Link>

          <Link
            to="/become-partner"
            className={`text-base font-medium hover:text-orange-500 ${
              isActive("/become-partner") ? "text-orange-500" : "text-gray-700"
            }`}
          >
            Become a Partner
          </Link>
        </nav>

        {/* Apply Now Button */}
        <Link
          to="/apply"
          className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Apply Now
          <span className="ml-1 bg-white bg-opacity-20 rounded-full p-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
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
          <div className="px-4 py-2 space-y-2">
            <Link
              to="/"
              className={`block py-2 ${isActive("/") ? "text-orange-500" : "text-gray-700"}`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link to="/our-story" className="block py-2 text-gray-700" onClick={closeMenu}>
              Our Story
            </Link>
            <Link to="/loans" className="flex items-center py-2 text-gray-700" onClick={closeMenu}>
              <img src={IconImage} alt="Loans Icon" className="h-5 w-5 mr-2 inline-block" />
              Loans
            </Link>
            <Link to="/calculators" className="flex items-center py-2 text-gray-700" onClick={closeMenu}>
              <img src={calculatorImg} alt="Calculator Icon" className="h-5 w-5 mr-2 inline-block" />
              Calculators
            </Link>
            <Link to="/become-partner" className="block py-2 text-gray-700" onClick={closeMenu}>
              Become a Partner
            </Link>
            <Link
              to="/apply"
              className="block w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-center"
              onClick={closeMenu}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
