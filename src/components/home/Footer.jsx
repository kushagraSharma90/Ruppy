import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src={logo || "/placeholder.svg"} alt="RupeeDot Logo" className="h-12" />
            </Link>
            <p className="text-gray-400 mb-6">
              RupeeDot is a leading financial services provider helping you borrow right today for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/loans" className="text-gray-400 hover:text-white transition-colors">
                  Loans
                </Link>
              </li>
              <li>
                <Link to="/calculators" className="text-gray-400 hover:text-white transition-colors">
                  Calculators
                </Link>
              </li>
              <li>
                <Link to="/become-partner" className="text-gray-400 hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Loan Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/loans/personal" className="text-gray-400 hover:text-white transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/used-car" className="text-gray-400 hover:text-white transition-colors">
                  Used Car Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/new-car" className="text-gray-400 hover:text-white transition-colors">
                  New Car Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/against-car" className="text-gray-400 hover:text-white transition-colors">
                  Loan Against Car
                </Link>
              </li>
              <li>
                <Link to="/loans/business" className="text-gray-400 hover:text-white transition-colors">
                  Business Loan
                </Link>
              </li>
              <li>
                <Link to="/loans/home" className="text-gray-400 hover:text-white transition-colors">
                  Home Loan
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
                <span className="text-gray-400">123 Finance Street, Banking District, Mumbai, India - 400001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-white transition-colors">
                  +91 1234 567 890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-blue-500 flex-shrink-0" />
                <a href="mailto:info@rupeedot.com" className="text-gray-400 hover:text-white transition-colors">
                  info@rupeedot.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RupeeDot. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-500 hover:text-white text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-gray-500 hover:text-white text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
