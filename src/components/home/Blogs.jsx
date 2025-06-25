import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import blog1 from "../../assets/blog1 .jpg";
import blog2 from "../../assets/blog2.jpg";
import blog3 from "../../assets/blog3.jpg";
import blog4 from "../../assets/blog4.jpg";
import blog5 from "../../assets/blog5.jpg";


const blogPosts = [
  {
    id: 1,
    title: "How to transfer a used car loan to another person?",
    image: blog1,
    description: "Learn the step-by-step process to transfer your car loan to another person legally and efficiently.",
    views: 645,
    date: "Jan 20, 2025",
    readTime: "4 Min",
    author: "Team LOANS24",
    authorImage: blog1,
  },
  {
    id: 2,
    title: "How Gen Z is revolutionising credit and shaping financial trends?",
    image: blog2,
    description: "Discover how the youngest generation is changing the way we think about credit and financial services.",
    views: 404,
    date: "Nov 7, 2024",
    readTime: "5 Min",
    author: "Team LOANS24",
    authorImage: blog2,
  },
  {
    id: 3,
    title: "Pros and Cons of a Credit Card",
    image: blog3,
    description: "Understand the advantages and disadvantages of using credit cards before making your next financial decision.",
    views: 77,
    date: "Sept 20, 2024",
    readTime: "4 Min",
    author: "Team LOANS24",
    authorImage: blog3,
  },
  {
    id: 4,
    title: "Key Challenges Faced by Used Car Dealers and How RupeeDot Is Solving Them?",
    excerpt: "Indian used car dealers particularly small and medium-sized dealerships work in a highspeed market but are often hindered by slow, inefficient financing procedures. One of the largest challenges they encounter is slow loan approvals, which not only delays the sales process but also dissolves customer confidence. Customers today anticipate near-instant approval, and extended waiting times frequently result in drop-offs or lost business.",
    image: blog4,
    description: "A comprehensive guide to understanding how home loan interest rates work and how to get the best deal.",
    views: 325,
    date: "Aug 15, 2024",
    readTime: "6 Min",
    author: "Team LOANS24",
    authorImage: blog4,
  },
  {
    id: 5,
    title: "What Determines Your Loan Eligibility in India?",
    excerpt: "Understanding what impacts your loan qualification enables you to prepare and apply confidently. Keep your credit rating high, have a stable income, have control over your current debts, and be open about your loan requirements. This makes it easier and quicker for you.",
 
    image: blog5,
    description: "Practical tips to boost your credit score quickly and improve your financial standing.",
    views: 892,
    date: "July 3, 2024",
    readTime: "7 Min",
    author: "Team LOANS24",
    authorImage: blog5,
  },
  // {
  //   id: 6,
  //   title: "The Complete Guide to Personal Loans",
  //   image: "/placeholder.svg",
  //   description: "Everything you need to know about personal loans, from application to repayment strategies.",
  //   views: 567,
  //   date: "June 12, 2024",
  //   readTime: "8 Min",
  //   author: "Team LOANS24",
  //   authorImage: "/placeholder.svg",
  // },
  // {
  //   id: 7,
  //   title: "How to Choose the Right Car Loan",
  //   image: "/placeholder.svg",
  //   description: "A step-by-step guide to finding the perfect car loan that fits your budget and needs.",
  //   views: 723,
  //   date: "May 28, 2024",
  //   readTime: "5 Min",
  //   author: "Team LOANS24",
  //   authorImage: "/placeholder.svg",
  // },
];

const BlogsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [visiblePosts, setVisiblePosts] = useState([]);
  const postsPerPage = 3;
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);

  const updateVisiblePosts = (pageIndex) => {
    const startIndex = pageIndex * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    setVisiblePosts(blogPosts.slice(startIndex, endIndex));
  };

  useEffect(() => {
    updateVisiblePosts(currentPage);
  }, [currentPage]);

  const handlePrevious = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const renderPaginationDots = () => {
    return Array.from({ length: totalPages }).map((_, index) => (
      <button
        key={index}
        className={`w-2 h-2 rounded-full mx-1 ${index === currentPage ? "bg-blue-600" : "bg-gray-300"}`}
        onClick={() => setCurrentPage(index)}
        aria-label={`Go to page ${index + 1}`}
      />
    ));
  };

  return (
    <section className="w-full pt-6 pb-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-2">Blogs</h2>
            <p className="text-gray-600 max-w-md">Insights and tips to help you navigate the world of finance</p>
          </div>
          <Link
            to="/blogs"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-md mt-4 md:mt-0 font-medium transition-all duration-200 text-sm"
          >
            Know More
          </Link>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visiblePosts.map((post) => (
              <>
                <div
                  key={post.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
                >
                  <Link to={`/blogs/${post.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </Link>
                  <div className="p-5">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                      <span className="flex items-center">👁️ {post.views} Views</span>
                      <span className="flex items-center">📅 {post.date}</span>
                      <span className="flex items-center">⏱️ {post.readTime}</span>
                    </div>
                    <Link to={`/blogs/${post.id}`} className="block group">
                      <h3 className="font-semibold text-gray-800 mb-3 text-lg line-clamp-2 group-hover:text-blue-600 transition-colors">
                        {post.title}
                      </h3>
                    </Link>
                    <div className="flex items-center mt-4">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2 overflow-hidden">
                        <span className="text-xs font-semibold text-blue-600">TL</span>
                      </div>
                      <span className="text-sm text-gray-600">{post.author}</span>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>

          <div className="flex justify-center md:justify-end mt-8 gap-4 items-center">
            <div className="flex space-x-2">{renderPaginationDots()}</div>
            <div className="flex gap-2 ml-4">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                aria-label="Previous page"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                aria-label="Next page"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;