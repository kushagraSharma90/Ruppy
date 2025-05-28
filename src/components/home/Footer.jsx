import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r rounded-3xl from-[#02427e] to-[#ac4a04] text-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="https://rupeedot.com/wp-content/uploads/2025/02/11.png" alt="RupeeDot Logo" className="h-12" />
            </Link>
            <p className="text-white mb-6">
              RupeeDot is a leading financial services provider helping you borrow right today for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-white hover:text-black transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-white hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-white hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li className="text-orange-600">
                <Link to="/" className="text-white hover:text-gray-300 transition-colors">
                  Home
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/our-story" className="text-white hover:text-gray-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/loans" className="text-white hover:text-gray-300  transition-colors">
                  Loans
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/calculators" className="text-white hover:text-gray-300  transition-colors">
                  Calculators
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/become-partner" className="text-white hover:text-gray-300  transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/contact" className="text-white hover:text-gray-300  transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Loan Products</h3>
            <ul className="space-y-3">
              <li className="text-orange-600">
                <Link to="/loans/personal" className="text-white hover:text-gray-300  transition-colors">
                  Personal Loan
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/loans/used-car" className="text-white hover:text-gray-300  transition-colors">
                  Used Car Loan
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/loans/new-car" className="text-white hover:text-gray-300  transition-colors">
                  New Car Loan
                </Link>
              </li>
              <li className="text-orange-600">
                <Link to="/loans/against-car" className="text-white hover:text-gray-300  transition-colors">
                  Loan Against Car
                </Link>
              </li>
              
             
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-3 h-5 w-5 text-white flex-shrink-0 mt-1" />
                <span className="text-white">G-1010,Solitaire Business Hub, opp. Neco Garden Road, Society Viman Nagar, Pune, Maharashtra 411014</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-white flex-shrink-0" />
                <a href="tel:+911234567890" className="text-white hover:text-gray-300  transition-colors">
                  +91 7028095292
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-white flex-shrink-0" />
                <a href="mailto:info@rupeedot.com" className="text-white hover:text-gray-300  transition-colors">
                  wecare@rupeedot.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RupeeDot. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-white hover:text-gray-300 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-white hover:text-gray-300  text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-white hover:text-gray-300  text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
