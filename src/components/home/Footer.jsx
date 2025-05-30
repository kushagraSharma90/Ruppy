import { Link } from "react-router-dom";
import { X, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#10264b] text-white pt-12 pb-6 text-base rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <img
                src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
                alt="RupeeDot Logo"
                className="h-10"
              />
            </Link>
            <p className="text-gray-300 text-xl  mb-4 max-w-md leading-relaxed">
              RupeeDot is a financial services provider helping you borrow right today for a better tomorrow.
              Our diverse team is united in their mission of creating simple, fair and honest financial products that have the customer’s needs at their heart.
            </p>
            <div className="flex  gap-3">
              <a href="https://www.youtube.com/@rupeedot" target="_blank" rel="noopener noreferrer">
                <Youtube size={30} className="text-gray-300  hover:text-red-500 transition-colors" />
              </a>
              <a href="https://x.com/RupeeDot" target="_blank" rel="noopener noreferrer">
                <X size={30} className="text-gray-300 hover:text-black transition-colors" />
              </a>
              <a href="https://www.instagram.com/rupee_dot/" target="_blank" rel="noopener noreferrer">
                <Instagram size={30} className="text-gray-300 hover:text-pink-500 transition-colors" />
              </a>
              <a href="https://www.instagram.com/rupeedotindia/" target="_blank" rel="noopener noreferrer">
                <Linkedin size={30} className="text-gray-300 hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-xl text-white mb-4 border-b border-orange-600 inline-block pb-1">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/our-story" },
                { name: "Calculators", path: "/calculators" },
                { name: "Become a Partner", path: "/become-partner" },
                { name: "Contact Us", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 text-xl hover:text-orange-400 transition">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="font-semibold text-xl text-white mb-4 border-b border-orange-600 inline-block pb-1">
              Loan Products
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Personal Loan", path: "/loans/personal" },
                { name: "Used Car Loan", path: "/loans/used-car" },
                { name: "New Car Loan", path: "/loans/new-car" },
                { name: "Loan Against Car", path: "/loans/against-car" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link to={path} className="text-gray-300 text-xl hover:text-orange-400 transition">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 pt-6 border-t border-gray-700">
          <div className="md:col-span-2">
            <h4 className="font-semibold text-white text-xl mb-3 border-b border-orange-600 inline-block pb-1">
              Contact Information
            </h4>
            <div className="space-y-3 text-xl text-gray-300">
              <div className="flex items-start gap-2">
                <MapPin className="text-orange-600" size={18} />
                <span>
                  G-1010, Solitaire Business Hub, Viman Nagar, Pune, Maharashtra 411014
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-orange-600" size={18} />
                <a href="tel:+917028095292" className="hover:text-orange-400 ">
                  +91 7028095292
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="text-orange-600" size={18} />
                <a href="mailto:wecare@rupeedot.com" className="hover:text-orange-400">
                  wecare@rupeedot.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <hr className="border-gray-700 my-6" />
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p className="mb-2 md:mb-0 text-xl" >
            &copy; {new Date().getFullYear()} RupeeDot. All rights reserved by Indicorn Financial Services Pvt Ltd
          </p>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-orange-400 text-xl">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-orange-400 text-xl">Terms & Conditions</Link>
            <Link to="/sitemap" className="hover:text-orange-400 text-xl">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
