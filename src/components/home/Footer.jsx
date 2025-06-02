import { Link } from "react-router-dom";
import { X, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#10264b] text-white pt-6 pb-3 text-sm rounded-t-3xl">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-2">
              <img
                src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
                alt="RupeeDot Logo"
                className="h-9"
              />
            </Link>
            <p className="text-gray-300 text- mb-3 max-w-md leading-relaxed">
              RupeeDot helps you borrow right today for a better tomorrow. Simple, fair and honest financial products with customer needs at heart.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-2 border-b border-orange-600 inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-1 text-xs">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/our-story" },
                { name: "Calculators", path: "/calculators" },
                { name: "Become a Partner", path: "/become-partner" },
                { name: "Contact Us", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 hover:text-orange-400 transition">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="font-semibold text-white text-sm mb-2 border-b border-orange-600 inline-block pb-1">
              Loan Products
            </h4>
            <ul className="space-y-1 text-xs">
              {[
                { name: "Personal Loan", path: "/loans/personal" },
                { name: "Used Car Loan", path: "/loans/used-car" },
                { name: "New Car Loan", path: "/loans/new-car" },
                { name: "Loan Against Car", path: "/loans/against-car" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 hover:text-orange-400 transition">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-5 pt-3 border-t border-gray-700">
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white text-sm mb-2 border-b border-orange-600 inline-block pb-1">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="text-orange-600" size={14} />
                <span>G-1010, Solitaire Business Hub, Viman Nagar, Pune, Maharashtra 411014</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-orange-600" size={14} />
                <a href="tel:+917028095292" className="hover:text-orange-400">
                  +91 7028095292
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-orange-600" size={14} />
                <a href="mailto:wecare@rupeedot.com" className="hover:text-orange-400">
                  wecare@rupeedot.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-700 my-3" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs">
          <p className="mb-2 md:mb-0 text-center">
            &copy; {new Date().getFullYear()} RupeeDot. All rights reserved by Indicorn Financial Services Pvt Ltd
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link to="/privacy-policy" className="hover:text-orange-400">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-orange-400">Terms & Conditions</Link>
            <Link to="/sitemap" className="hover:text-orange-400">Sitemap</Link>
          </div>
        </div>

        {/* Social Icons Bottom Center */}
        <div className="flex justify-center mt-4 gap-4">
          <a href="https://www.youtube.com/@rupeedot" target="_blank" rel="noopener noreferrer">
            <Youtube size={20} className="text-gray-300 hover:text-red-500 transition-colors" />
          </a>
          <a href="https://x.com/RupeeDot" target="_blank" rel="noopener noreferrer">
            <X size={20} className="text-gray-300 hover:text-black transition-colors" />
          </a>
          <a href="https://www.instagram.com/rupee_dot/" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} className="text-gray-300 hover:text-pink-500 transition-colors" />
          </a>
          <a href="https://www.instagram.com/rupeedotindia/" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} className="text-gray-300 hover:text-blue-500 transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
