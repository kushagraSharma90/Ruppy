import { ArrowRight, Building, CheckCircle, Users, Briefcase, Award } from "lucide-react"

const BecomePartner = () => {
  const benefits = [
    {
      title: "Expanded Customer Base",
      description: "Reach thousands of potential borrowers through our platform",
      icon: <Users className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Increased Revenue",
      description: "Generate additional revenue streams through our partnership program",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Enhanced Brand Visibility",
      description: "Showcase your brand to a wider audience of potential customers",
      icon: <Building className="h-6 w-6 text-blue-600" />,
    },
    {
      title: "Quality Leads",
      description: "Receive pre-qualified leads that match your lending criteria",
      icon: <Award className="h-6 w-6 text-blue-600" />,
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Partner</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Join our network of financial partners and grow your business with RupeeDot
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Why Partner With Us?</h2>
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Partnership Opportunities</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore the different ways you can partner with RupeeDot</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Lending Partners</h3>
              <p className="text-gray-600 mb-6">
                For banks, NBFCs, and other financial institutions looking to expand their loan portfolio through our
                platform.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Access to pre-qualified borrowers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Customized lending criteria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Streamlined loan processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Dedicated relationship manager</span>
                </li>
              </ul>
              <a
                href="#apply-form"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Referral Partners</h3>
              <p className="text-gray-600 mb-6">
                For individuals, businesses, and organizations that want to refer potential borrowers to RupeeDot.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Attractive referral commissions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Easy-to-use referral dashboard</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Marketing support and materials</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Regular performance updates</span>
                </li>
              </ul>
              <a
                href="#apply-form"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-t-4 border-blue-600">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Technology Partners</h3>
              <p className="text-gray-600 mb-6">
                For technology companies looking to integrate with our platform or provide complementary services.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">API integration opportunities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Co-development possibilities</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Joint marketing initiatives</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-1" />
                  <span className="text-gray-700">Technical support and documentation</span>
                </li>
              </ul>
              <a
                href="#apply-form"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors duration-300"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Partners Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our existing partners about their experience working with RupeeDot
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Partner"
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Rajesh Kumar</h3>
                  <p className="text-blue-600">ABC Bank Ltd.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "Partnering with RupeeDot has significantly expanded our loan portfolio. Their platform brings us
                qualified leads that match our lending criteria, making the process efficient and profitable."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/women/44.jpg"
                  alt="Partner"
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Priya Sharma</h3>
                  <p className="text-blue-600">XYZ Finance</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "The referral partnership with RupeeDot has been a game-changer for our business. The commission
                structure is transparent, and the support team is always available to help with any questions."
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src="https://randomuser.me/api/portraits/men/62.jpg"
                  alt="Partner"
                  className="w-14 h-14 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Vikram Patel</h3>
                  <p className="text-blue-600">Tech Solutions Inc.</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                "As a technology partner, we've found RupeeDot to be innovative and forward-thinking. The API
                integration was smooth, and our joint solution has been well-received by customers."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply-form" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Apply to Become a Partner</h2>
            <p className="text-gray-600 mb-8 text-center">
              Fill out the form below to express your interest in partnering with RupeeDot. Our team will contact you
              within 48 hours.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company-name" className="block text-gray-700 font-medium mb-2">
                    Company Name*
                  </label>
                  <input
                    type="text"
                    id="company-name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="partnership-type" className="block text-gray-700 font-medium mb-2">
                    Partnership Type*
                  </label>
                  <select
                    id="partnership-type"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  <label htmlFor="contact-name" className="block text-gray-700 font-medium mb-2">
                    Contact Person Name*
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Additional Information
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tell us more about your company and how you'd like to partner with us"
                ></textarea>
              </div>

              <div className="flex items-start">
                <input type="checkbox" id="terms" className="mt-1 mr-2" required />
                <label htmlFor="terms" className="text-gray-600 text-sm">
                  I agree to the{" "}
                  <a href="/terms" className="text-blue-600 hover:underline">
                    Terms and Conditions
                  </a>{" "}
                  and consent to the processing of my personal data as described in the{" "}
                  <a href="/privacy" className="text-blue-600 hover:underline">
                    Privacy Policy
                  </a>
                  .
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium transition-colors duration-300"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our partnership program
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How long does the partnership application process take?
                </h3>
                <p className="text-gray-600">
                  The initial review of your application typically takes 2-3 business days. If your application is
                  shortlisted, we'll schedule a meeting to discuss the partnership in more detail. The entire process
                  usually takes 2-3 weeks.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Is there any fee to become a partner?</h3>
                <p className="text-gray-600">
                  There is no application fee to become a partner. However, depending on the partnership type, there
                  might be certain integration costs or minimum business commitments.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  How are referral commissions calculated and paid?
                </h3>
                <p className="text-gray-600">
                  Referral commissions are calculated based on the loan amount and type. Payments are made monthly for
                  all successful loan disbursements from your referrals. Detailed commission structures will be shared
                  during the onboarding process.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  What support does RupeeDot provide to partners?
                </h3>
                <p className="text-gray-600">
                  We provide comprehensive support including marketing materials, technical documentation, a dedicated
                  relationship manager, regular performance reports, and training sessions to help you maximize the
                  partnership benefits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  Can I partner with RupeeDot if I'm an individual and not a company?
                </h3>
                <p className="text-gray-600">
                  Yes, individuals can join our referral partner program. You'll need to provide your PAN details and
                  bank account information for commission payments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default BecomePartner
