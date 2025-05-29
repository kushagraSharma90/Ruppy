import { CheckCircle } from "lucide-react"

const OurStory = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#3870A6] text-white py-20">
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
              <p className="text-black mb-4 text-xl">
               We Want to help our customers to achieve sustainable financial success by offering fast, fair and flexible finance solutions, powered by our innovative AI lending approach.
              </p>
              <p className="text-black text-xl mb-4">
               One of the fastest growing fintech aggregator, specializing in providing both secured and unsecured loans. With our extensive network of partnerships with banks and NBFCs, we bring you the best loan offers tailored to your needs. We Provide Hassle -Free Process, Quick Disbursal with Lowest EMI which is Paperless & Digital with wide range of products. Apply Online!
              </p>
              <p className="text-black text-xl mb-4">
                Our diverse team is united in their mission of creating simple, fair and honest financial products that have the customer’s needs at their heart.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">500+</h3>
                  <p className="text-gray-700">Happy Customers</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">₹5 Cr+</h3>
                  <p className="text-gray-700">Loans Disbursed</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">10+</h3>
                  <p className="text-gray-700">Banking Partners</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-blue-600 text-xl font-semibold mb-2">20+</h3>
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
              
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
     

      {/* Mission & Vision Section */}
      <section id="mission" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission & Vision</h2>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Mission</h3>
                <p className="text-black text-xl mb-4">
                  To empower individuals and businesses with accessible, transparent, and affordable financial solutions
                  that enable them to achieve their goals and improve their quality of life.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Vision</h3>
                <p className="text-black text-xl mb-4">
                  To be India's most trusted financial services provider, known for our customer-centric approach,
                  innovative solutions, and commitment to financial inclusion.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">Our Values</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-xl text-black">Transparency</h4>
                      <p className="text-black text-xl">We believe in clear communication and no hidden charges.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-xl text-black">Customer First</h4>
                      <p className="text-black text-xl">Our customers' needs are at the center of everything we do.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-xl text-black">Innovation</h4>
                      <p className="text-black text-xl">We continuously improve our services to meet evolving needs.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mr-3 mt-1" />
                    <div>
                      <h4 className="font-medium text-black">Integrity</h4>
                      <p className="text-black text-xl">We conduct our business with the highest ethical standards.</p>
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
