import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) setOpenDropdown(null);
  };

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (section) => {
    setOpenDropdown((prev) => (prev === section ? null : section));
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-800 hover:text-orange-500"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-200 shadow-md z-50">
          <div className="p-4 space-y-2">

            {/* Our Story */}
            <div>
              <button
                onClick={() => handleDropdownToggle("ourStory")}
                className={`flex items-center w-full py-2 px-3 rounded-lg ${
                  isActive("/our-story") ? "text-orange-500 bg-blue-50" : "text-gray-700"
                } hover:bg-blue-50 hover:text-orange-500`}
              >
                <span className="mr-2">📖</span>
                Our Story
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === "ourStory" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "ourStory" && (
                <div className="pl-8 py-1 space-y-1">
                  <Link to="/our-story/about" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    About Us
                  </Link>
                  <Link to="/ContactUs" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            {/* Loans */}
            <div>
              <button
                onClick={() => handleDropdownToggle("loans")}
                className={`flex items-center w-full py-2 px-3 rounded-lg ${
                  isActive("/loans") ? "text-orange-500 bg-blue-50" : "text-gray-700"
                } hover:bg-blue-50 hover:text-orange-500`}
              >
                <span className="mr-2">💰</span>
                Loans
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === "loans" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "loans" && (
                <div className="pl-8 py-1 space-y-1">
                  <Link to="/loans/personal" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Personal Loan
                  </Link>
                  <Link to="/loans/used-car" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Used Car Loan
                  </Link>
                  <Link to="/loans/new-car" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    New Car Loan
                  </Link>
                  <Link to="/loans/against-car" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Loan Against Car
                  </Link>
                </div>
              )}
            </div>

            {/* Community */}
            <div>
              <button
                onClick={() => handleDropdownToggle("community")}
                className={`flex items-center w-full py-2 px-3 rounded-lg ${
                  isActive("/community") ? "text-orange-500 bg-blue-50" : "text-gray-700"
                } hover:bg-blue-50 hover:text-orange-500`}
              >
                <span className="mr-2">👥</span>
                Community
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === "community" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "community" && (
                <div className="pl-8 py-1 space-y-1">
                  <Link to="/community/blogs" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Blogs
                  </Link>
                  <Link to="/community/news" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    News
                  </Link>
                </div>
              )}
            </div>

            {/* Healthcare */}
            <div>
              <button
                onClick={() => handleDropdownToggle("healthcare")}
                className={`flex items-center w-full py-2 px-3 rounded-lg ${
                  isActive("/healthcare") ? "text-orange-500 bg-blue-50" : "text-gray-700"
                } hover:bg-blue-50 hover:text-orange-500`}
              >
                <span className="mr-2">🏥</span>
                Healthcare
                <ChevronDown
                  className={`ml-auto transition-transform ${
                    openDropdown === "healthcare" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openDropdown === "healthcare" && (
                <div className="pl-8 py-1 space-y-1">
                  <Link to="/healthcare/services" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Services
                  </Link>
                  <Link to="/healthcare/contact" onClick={closeMenu} className="block text-sm text-gray-700 hover:text-orange-500">
                    Get in Touch
                  </Link>
                </div>
              )}
            </div>

            {/* Become a Partner */}
            <div>
              <Link
                to="/become-a-partner"
                onClick={closeMenu}
                className="block w-full py-2 px-3 text-gray-700 hover:text-orange-500"
              >
                🤝 Become a Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSidebar;