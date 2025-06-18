import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Search, ChevronLeft, ChevronRight, Clock, Eye, Calendar, ArrowRight } from "lucide-react"
import blog1 from "../../assets/blog1 .jpg"
import blog2 from "../../assets/blog2.jpg"
import blog3 from "../../assets/blog3.jpg"
import blog4 from "../../assets/blog4.jpg"
import blog5 from "../../assets/blog5.jpg"

// Sample blog data
const blogPosts = [
  {
    id: 1,
    title: "Disrupting Auto Finance & Solving Dealer Challenges",
    excerpt: "A Fintech Disruptor in Auto Finance",
    image: blog1,
    category: "Car Loans",
    views: 634,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
    authorImage: blog1,
    featured: true,
  },
  {
    id: 2,
    title: "Market Overview: New vs. Used Car Sales",
    excerpt: "Discover how the youngest generation is changing the way we think about credit and financial services.",
    image: blog2,
    category: "Financial Trends",
    views: 404,
    date: "MAY 21, 2025",
    readTime: "5 Min",
    author: "RUPPEDOT",
    authorImage: blog2,
    featured: true,
  },
  {
    id: 3,
    title: "What is a Personal Loan?",
    excerpt: "Understand the advantages and disadvantages of using credit cards before making your next financial decision.",
    image: blog3,
    category: "Credit Cards",
    views: 77,
    date: "MAY 21, 2025",
    readTime: "4 Min",
    author: "RUPPEDOT",
    authorImage: blog3,
    featured: false,
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    excerpt: "A comprehensive guide to understanding how home loan interest rates work and how to get the best deal.",
    image: blog4,
    // category: "Home Loans",
    views: 325,
    date: "MAY21, 2025",
    readTime: "6 Min",
    author:  "RUPPEDOT",
    authorImage: blog4,
    featured: false,
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    excerpt: "Practical tips to boost your credit score quickly and improve your financial standing.",
    image: blog5,
    // category: "Credit Score",
    views: 892,
    date: "MAY 21, 2025",
    readTime: "7 Min",
    author:  "RUPPEDOT",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Financial Insights & Resources </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed max-w-2xl mx-auto">
              <h1>Explore our collection of articles, guides, and tips to help you make informed financial decisions.</h1>
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </div>

    
    

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12 bg-[#f5f5ec]">
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
     

      {/* Blog Posts Grid */}
      <section className="py-12 bg-[#f5f5ec]">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
            {selectedCategory === "All" ? "All Articles" : selectedCategory}
          </h2>

          {currentPosts.length === 0 ? (
            <div className="text-center py-12">
             
             
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
      <section className="py-16 bg-[#f5f5ec] text-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated with Financial Insights</h2>
            <p className="text-black mb-8">
              Subscribe to our newsletter and receive the latest articles, tips, and financial advice directly in your
              inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow py-3 px-4 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-white text-black font-medium py-3 px-6 rounded-md transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Blogs
