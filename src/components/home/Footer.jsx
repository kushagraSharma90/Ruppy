import { Link } from "react-router-dom";
import { Facebook, X, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#10264b] rounded-tr-3xl rounded-tl-3xl text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img
                src="https://rupeedot.com/wp-content/uploads/2025/02/11.png"
                alt="RupeeDot Logo"
                className="h-12"
              />
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              RupeeDot is a leading financial services provider helping you borrow right today for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-blue-600"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com/RupeeDot
"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-black"
              >
                <X size={20} />
              </a>
              <a
                href="https://www.instagram.com/rupee_dot/"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-pink-600"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.instagram.com/rupeedotindia/"
                className="text-gray-300 hover:text-white transition-colors p-2 rounded-full hover:bg-blue-700"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6 border-b border-orange-600 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/our-story" },
                { name: "Loans", path: "/loans" },
                { name: "Calculators", path: "/calculators" },
                { name: "Become a Partner", path: "/become-partner" },
                { name: "Contact Us", path: "/contact" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Products */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-6 border-b border-orange-600 pb-2 inline-block">
              Loan Products
            </h3>
            <ul className="space-y-3">
              {[
                { name: "Personal Loan", path: "/loans/personal" },
                { name: "Used Car Loan", path: "/loans/used-car" },
                { name: "New Car Loan", path: "/loans/new-car" },
                { name: "Loan Against Car", path: "/loans/against-car" },
              ].map(({ name, path }) => (
                <li key={path}>
                  <Link
                    to={path}
                    className="text-gray-300 hover:text-orange-400 transition-colors flex items-center group"
                  >
                    <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 group-hover:bg-orange-400 transition-colors"></span>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-lg text-white font-semibold mb-6 border-b border-orange-600 pb-2 inline-block">
                Contact Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Address</h4>
                    <span className="text-gray-300 text-sm">
                      G-1010, Solitaire Business Hub, opp. Neco Garden Road, Society Viman Nagar, Pune, Maharashtra
                      411014
                    </span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Phone</h4>
                      <a
                        href="tel:+917028095292"
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        +91 7028095292
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a
                        href="mailto:wecare@rupeedot.com"
                        className="text-gray-300 hover:text-orange-400 transition-colors text-sm"
                      >
                        wecare@rupeedot.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div>
              <h3 className="text-lg text-white font-semibold mb-6 border-b border-orange-600 pb-2 inline-block">
                Stay Updated
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-l-md border border-gray-600 focus:outline-none focus:border-orange-600"
                />
                <button className="px-4 py-2 bg-orange-600 text-white rounded-r-md hover:bg-orange-700 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} RupeeDot. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <Link to="/privacy-policy" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/sitemap" className="text-gray-300 hover:text-orange-400 text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
