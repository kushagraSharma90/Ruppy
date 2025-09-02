import { ArrowRight, Building, CheckCircle, Users, Briefcase, Award } from "lucide-react"
import React, { useState } from "react";
import { Link } from 'react-router-dom';


const BecomePartner = () => {
  const benefits = [
    {
      title: "Expanded Customer Base",
      description: "Reach thousands of potential borrowers through our platform",
      icon: <Users className="h-6 w-6 text-[#3870A6]" />,
    },
    {
      title: "Increased Revenue",
      description: "Generate additional revenue streams through our partnership program",
      icon: <Briefcase className="h-6 w-6 text-[#3870A6]" />,
    },
    {
      title: "Enhanced Brand Visibility",
      description: "Showcase your brand to a wider audience of potential customers",
      icon: <Building className="h-6 w-6 text-[#3870A6]" />,
    },
    {
      title: "Quality Leads",
      description: "Receive pre-qualified leads that match your lending criteria",
      icon: <Award className="h-6 w-6 text-[#3870A6]" />,
    },
  ]
  
  const [formData, setFormData] = useState({
    companyName: "",
    partnershipType: "",
    contactPersonName: "",
    designation: "",
    email: "",
    phoneNumber: "",
    companyWebsite: "",
    additionalInfo: "",
    agreedToTerms: false,
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id === "terms" ? "agreedToTerms" : id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agreedToTerms) {
      alert("You must agree to the Terms and Conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/submit-application", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Application submitted successfully!");
        setFormData({
         companyName: "",
    partnershipType: "",
    contactPersonName: "",
    designation: "",
    email: "",
    phoneNumber:"",
    companyWebsite: "",
    additionalInfo:"",
          agreedToTerms: false,
        });
      } else {
        alert(data.error || "Submission failed.");
      }
    } catch (error) {
      alert("Server error: " + error.message);
    }
  }


  return (
    <div>
       <div className="relative overflow-hidden bg-[#3870A6] text-white">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "24px 24px",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Become a Partner </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              <h1>Join our network of financial partners and grow your business with RupeeDot</h1>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      {/* Hero Section */}
     

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3870A6] mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the advantages of becoming a RupeeDot partner and how it can benefit your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3870A6] mb-4">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the different ways you can partner with RupeeDot</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3870A6]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lending Partners</h3>
              <p className="text-gray-600 mb-6">
                For banks, NBFCs, and other financial institutions looking to expand their loan portfolio through our
                platform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Access to pre-qualified borrowers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Customized lending criteria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Streamlined loan processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Dedicated relationship manager</span>
                </li>
              </ul>
              
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3870A6]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Referral Partners</h3>
              <p className="text-gray-600 mb-6">
                For individuals, businesses, and organizations that want to refer potential borrowers to RupeeDot.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Attractive referral commissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Easy-to-use referral dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Marketing support and materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Regular performance updates</span>
                </li>
              </ul>
              
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#3870A6]">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                For technology companies looking to integrate with our platform or provide complementary services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">API integration opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Co-development possibilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Joint marketing initiatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-[#FF8C00] flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Technical support and documentation</span>
                </li>
              </ul>
             
            </div>
          </div>
        </div>
      </section>

     
    
         
           

      {/* Application Form */}
      <section id="apply-form" className="py-16 ">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Apply to Become a Partner
          </h2>
          <p className="text-gray-600 mb-8 text-center">
            Fill out the form below to express your interest in partnering with RupeeDot. Our team will contact you
            within 24 hours.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="companyName" className="block text-gray-700 font-medium mb-2">
                  Company Name*
                </label>
                <input
                  type="text"
                  id="companyName"
                  required
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                />
              </div>
              <div>
                <label htmlFor="partnershipType" className="block text-gray-700 font-medium mb-2">
                  Partnership Type*
                </label>
                <select
                  id="partnershipType"
                  required
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                >
                  <option value="">Select Partnership Type</option>
                  <option value="lending">Lending Partner</option>
                  <option value="referral">Referral Partner</option>
                  <option value="technology">Technology Partner</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="contactName" className="block text-gray-700 font-medium mb-2">
                  Contact Person Name*
                </label>
                <input
                  type="text"
                  id="contactName"
                  required
                  value={formData.contactName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                />
              </div>
              <div>
                <label htmlFor="designation" className="block text-gray-700 font-medium mb-2">
                  Designation*
                </label>
                <input
                  type="text"
                  id="designation"
                  required
                  value={formData.designation}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email Address*
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                />
              </div>
              <div>
  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
    Phone Number*
  </label>
  <input
    type="tel"
    id="phone"
    name="phone"
    required
    value={formData.phone}
    onChange={handleChange}
    maxLength="10"
    pattern="[0-9]{10}"
    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
    onKeyPress={(e) => {
      if (!/[0-9]/.test(e.key)) {
        e.preventDefault();
      }
    }}
  />
</div>
            </div>

            <div>
              <label htmlFor="website" className="block text-gray-700 font-medium mb-2">
                Company Website
              </label>
              <input
                type="url"
                id="website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Additional Information
              </label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3870A6]"
                placeholder="Tell us more about your company and how you'd like to partner with us"
              ></textarea>
            </div>

            <div className="flex items-start">
  <input
    type="checkbox"
    id="terms"
    className="mt-1 mr-2"
    required
    onChange={handleChange}
    checked={formData.agreedToTerms}
  />
  <label htmlFor="terms" className="text-gray-600 text-sm">
    I agree to the{" "}
    <Link to="/TermsAndCondition" className="text-[#3870A6] hover:underline">
      Terms and Conditions
    </Link>{" "}
    and consent to the processing of my personal data as described in the{" "}
    <Link to="/PrivacyPolicy" className="text-[#3870A6] hover:underline">
      Privacy Policy
    </Link>
    .
  </label>
</div>

              <button
              onClick={handleSubmit}
                type="submit"
                className="w-full bg-[#3870A6] hover:bg-[#2c5a85] text-white py-3 rounded-md font-medium transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

     
    </div>
  )
}

export default BecomePartner