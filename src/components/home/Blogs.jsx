import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, ChevronLeft, ChevronRight, Clock, Eye, Calendar, ArrowRight } from "lucide-react"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: " Disrupting Auto Finance & Solving Dealer Challenges  ",
    excerpt: " A Fintech Disruptor in Auto Finance",
    image: "src/assets/blog1.jpeg?height=40&width=40",
    category: "Car Loans",
    views: 634,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
    authorImage: "src/assets/blog1.jpeg?height=40&width=40",
    featured: true,
  },
  {
    id: 2,
    title: "How is Gen Z revolutionising credit and shaping financial trends?",
    excerpt: "Discover how the youngest generation is changing the way we think about credit and financial services.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Financial Trends",
    views: 404,
    date: "Nov 7, 2024",
    readTime: "5 Min",
    author: "Team LOANS24",
    authorImage: "src/assets/blog3.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Pros and Cons of a Credit Card",
    excerpt:
      "Understand the advantages and disadvantages of using credit cards before making your next financial decision.",
    image: "src/assets/blog3.jpeg",
    category: "Credit Cards",
    views: 77,
    date: "Sept 20, 2024",
    readTime: "4 Min",
    author: "Team LOANS24",
    authorImage: "src/assets/blog3.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Understanding Home Loan Interest Rates",
    excerpt: "A comprehensive guide to understanding how home loan interest rates work and how to get the best deal.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Home Loans",
    views: 325,
    date: "Aug 15, 2024",
    readTime: "6 Min",
    author: "Team LOANS24",
    authorImage: "/placeholder.svg?height=40&width=40",
    featured: false,
  },
  {
    id: 5,
    title: "5 Ways to Improve Your Credit Score Fast",
    excerpt: "Practical tips to boost your credit score quickly and improve your financial standing.",
    image: "/placeholder.svg?height=400&width=600",
    category: "Credit Score",
    views: 892,
    date: "July 3, 2024",
    readTime: "7 Min",
    author: "Team LOANS24",
    authorImage: "/placeholder.svg?height=40&width=40",
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
  "Credit Score",
  "Financial Trends",
  "Loan Tips",
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Financial Insights</h2>
            <p className="text-blue-100 mb-8">
              Subscribe to our newsletter and receive the latest articles, tips, and financial advice directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-md bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
