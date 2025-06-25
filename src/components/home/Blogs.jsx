import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, ChevronLeft, ChevronRight, Clock, Eye, Calendar, ArrowRight } from "lucide-react"
import blog1 from "../../assets/blog1 .jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";


// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: " Disrupting Auto Finance & Solving Dealer Challenges  ",
    excerpt: " Learn the step-by-step process of transferring your car loan to someone else, including the paperwork and requirements needed.",
    image: blog1,
    category: "Car Loans",
    views: 634,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: blog1,
    featured: true,
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    excerpt: "India's used vehicle market is on the path to becoming a ₹100 billion+ opportunity by the end of the next decade. By addressing financing shortfalls, increasing organized infrastructure, and leveraging digital enablers, stakeholders can re-take control—propelling financial inclusion, affordability, and growth in both urban and rural India.",
    image: blog2,
    category: "Financial Trends",
    views: 404,
    date: "MAY 21, 2025",
    readTime: "5 Min",
    author: "RUPEEDOT",
    authorImage: blog2,
    featured: true,
  },
  {
    id: 3,
    title: "What is a Personal Loan?",
    excerpt:
      "It is a loan that is not backed by any collateral, intended to fulfill a variety of individual financial requirements without having to put up any collateral. It provides easy access to money, fixed monthly payments, and flexible repayment tenure, making it suitable for working professionals.",
    image: blog3,
    category: "Credit Cards",
    views: 77,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPEEDOT",
    authorImage: blog3,
    featured: false,
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    excerpt: "Indian used car dealers particularly small and medium-sized dealerships work in a highspeed market but are often hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan approvals, which not only delays the sales process but also dissolves customer confidence. Customers today anticipate near-instant approval, and extended waiting times frequently result in drop-offs or lost business.",
    image: blog4,
    category: "Home Loans",
    views: 325,
    date: "MAY21, 2025",
    readTime: "6 Min",
    author:  "RUPEEDOT",
    authorImage: blog4,
    featured: false,
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    excerpt: "Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control over your current debts, and be open about your loan requirements. This makes it easier and quicker for you.",
 
    image: blog5,
    category: "Credit Score",
    views: 892,
    date: "MAY 21, 2025",
    readTime: "7 Min",
    author:  "RUPEEDOT",
    authorImage: blog5,
    featured: false,
  },
]

// Categories for filtering
const categories = [
  "All",
  "Car Loans",
  "Personal Loans",
  "Home Loans",
  "Credit Cards",
]

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 6

  // Filter posts based on search term and category
  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get featured posts
  const featuredPosts = blogPosts.filter((post) => post.featured)

  // Get current posts for pagination
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)

  // Reset pagination when filters change
  useEffect(() => {
    setCurrentPage(1)
  }, [searchTerm, selectedCategory])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Financial Insights & Resources</h1>
            <p className="text-xl text-blue-100 mb-8">
              Explore our collection of articles, guides, and tips to help you make informed financial decisions.
            </p>
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search for articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-5 pr-12 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Featured Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full"
                >
                  <div className="relative h-64">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center mr-4">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center">
                        <Eye className="h-4 w-4 mr-1" />
                        {post.views} views
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                      <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                          <span className="text-xs font-semibold">TL</span>
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                      <Link
                        to={`/blogs/${post.id}`}
                        className="text-blue-600 hover:text-blue-800 flex items-center text-sm font-medium"
                      >
                        Read More <ArrowRight className="h-4 w-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>

          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl text-gray-600">No articles found matching your criteria.</h3>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategory("All")
                }}
                className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentPosts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                  >
                    <div className="relative h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="flex items-center mr-4">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                        <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                            <span className="text-xs font-semibold">TL</span>
                          </div>
                          <span className="text-sm text-gray-600">{post.author}</span>
                        </div>
                        <span className="text-sm text-gray-500 flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {post.views}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-12">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => paginate(Math.max(1, currentPage - 1))}
                      disabled={currentPage === 1}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentPage === 1
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => {
                      const pageNumber = index + 1
                      // Show limited page numbers with ellipsis
                      if (
                        pageNumber === 1 ||
                        pageNumber === totalPages ||
                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                      ) {
                        return (
                          <button
                            key={pageNumber}
                            onClick={() => paginate(pageNumber)}
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${
                              currentPage === pageNumber
                                ? "bg-blue-600 text-white"
                                : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                          >
                            {pageNumber}
                          </button>
                        )
                      } else if (
                        (pageNumber === currentPage - 2 && currentPage > 3) ||
                        (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
                      ) {
                        return (
                          <span key={pageNumber} className="text-gray-500">
                            ...
                          </span>
                        )
                      }
                      return null
                    })}

                    <button
                      onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                      disabled={currentPage === totalPages}
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        currentPage === totalPages
                          ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                          : "bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                      }`}
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-600 text-black ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-black mb-8">
              Subscribe to our newsletter and receive the latest articles, tips, and financial advice directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-3 px-4 rounded-md bg-blue-600 text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-blue-600  font-medium py-3 px-6 rounded-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;