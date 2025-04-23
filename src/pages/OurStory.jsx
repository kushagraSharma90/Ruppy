import { CheckCircle } from "lucide-react"

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Story</h1>
          <p className="text-xl max-w-3xl mx-auto text-blue-100">
            Learn about RupeeDot's journey to becoming India's trusted financial services provider
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">About RupeeDot</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2015, RupeeDot started with a simple mission: to make financial services accessible to
                everyone. We recognized that traditional banking systems often had complex processes that made it
                difficult for many people to access loans when they needed them most.
              </p>
              <p className="text-gray-600 mb-4">
                Our founders, with over 30 years of combined experience in the financial sector, set out to create a
                platform that would simplify the loan application process while ensuring fair and transparent terms for
                all customers.
              </p>
              <p className="text-gray-600 mb-4">
                Today, RupeeDot has grown to become one of India's leading financial services providers, serving
                thousands of customers across the country. We continue to innovate and expand our offerings to meet the
                evolving needs of our customers.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">50,000+</h3>
                  <p className="text-gray-700">Happy Customers</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">₹500 Cr+</h3>
                  <p className="text-gray-700">Loans Disbursed</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">20+</h3>
                  <p className="text-gray-700">Banking Partners</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">100+</h3>
                  <p className="text-gray-700">Cities Covered</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="RupeeDot Office"
                className="rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-lg shadow-lg">
                <p className="text-lg font-semibold">Established 2015</p>
                <p>Mumbai, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Meet Our Leadership Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our experienced team is dedicated to providing the best financial solutions for our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Rajesh Kumar"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Rajesh Kumar</h3>
                <p className="text-blue-600 mb-4">CEO & Co-Founder</p>
                <p className="text-gray-600">
                  With over 15 years of experience in banking and finance, Rajesh leads our vision to transform
                  financial services in India.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sunita Sharma"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Sunita Sharma</h3>
                <p className="text-blue-600 mb-4">COO & Co-Founder</p>
                <p className="text-gray-600">
                  Sunita oversees our operations and ensures that we deliver exceptional service to all our customers.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src="https://randomuser.me/api/portraits/men/62.jpg"
                alt="Vikram Patel"
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">Vikram Patel</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Vikram leads our technology initiatives, ensuring that our platform is secure, efficient, and
                  user-friendly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Mission</h3>
                <p className="text-gray-600 mb-4">
                  To empower individuals and businesses with accessible, transparent, and affordable financial solutions
                  that enable them to achieve their goals and improve their quality of life.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be India's most trusted financial services provider, known for our customer-centric approach,
                  innovative solutions, and commitment to financial inclusion.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-600 mb-4">Our Values</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Transparency</h4>
                      <p className="text-gray-600">We believe in clear communication and no hidden charges.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Customer First</h4>
                      <p className="text-gray-600">Our customers' needs are at the center of everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Innovation</h4>
                      <p className="text-gray-600">We continuously improve our services to meet evolving needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Integrity</h4>
                      <p className="text-gray-600">We conduct our business with the highest ethical standards.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Mission"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default OurStory
