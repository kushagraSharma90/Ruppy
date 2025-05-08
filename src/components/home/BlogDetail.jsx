"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { ArrowLeft, Calendar, Clock, Eye, Bookmark, Facebook, Twitter, Linkedin, Copy, ArrowRight } from "lucide-react"

// Sample blog data (same as in Blogs.jsx)
const blogPosts = [
  {
    id: 1,
    title: "How to transfer a used car loan to another person?",
    excerpt: "Learn the step-by-step process to transfer your car loan to another person legally and efficiently.",
    content: `
      <p>Transferring a used car loan to another person can seem complicated, but with the right approach, it can be a straightforward process. This guide will walk you through the necessary steps to ensure a smooth transfer.</p>
      
      <h2>Understanding Car Loan Transfers</h2>
      
      <p>When you want to transfer your car loan to someone else, you're essentially asking the lender to release you from the loan obligation and accept the other person as the new borrower. This process is known as loan assumption or novation.</p>
      
      <p>Not all lenders allow loan transfers, so the first step is to check if your lender permits this option. Even if they do, they'll typically have specific requirements that both you and the new borrower must meet.</p>
      
      <h2>Step 1: Contact Your Lender</h2>
      
      <p>Reach out to your lender to inquire about their loan transfer policy. Ask about:</p>
      
      <ul>
        <li>Whether they allow loan transfers</li>
        <li>Any fees associated with the transfer</li>
        <li>Credit score requirements for the new borrower</li>
        <li>Documentation needed for the process</li>
      </ul>
      
      <h2>Step 2: Find a Qualified Buyer</h2>
      
      <p>The new borrower will need to meet the lender's credit requirements. They'll undergo a similar approval process as they would for a new loan, including credit checks and income verification.</p>
      
      <h2>Step 3: Complete the Transfer Documentation</h2>
      
      <p>If the lender approves the transfer, both parties will need to complete the necessary paperwork, which typically includes:</p>
      
      <ul>
        <li>Loan transfer agreement</li>
        <li>Vehicle title transfer documents</li>
        <li>Bill of sale</li>
        <li>Release of liability form</li>
      </ul>
      
      <h2>Step 4: Transfer the Vehicle Title</h2>
      
      <p>Visit your local DMV to transfer the vehicle title to the new owner. This step is crucial as it legally transfers ownership of the vehicle.</p>
      
      <h2>Step 5: Update Insurance</h2>
      
      <p>Both parties should update their auto insurance policies. The new owner needs to obtain insurance for the vehicle, while you should remove the vehicle from your policy.</p>
      
      <h2>Alternative Options</h2>
      
      <p>If your lender doesn't allow loan transfers, consider these alternatives:</p>
      
      <ol>
        <li><strong>Refinancing:</strong> The buyer can take out a new loan to pay off your existing loan.</li>
        <li><strong>Selling the car:</strong> Sell the car and use the proceeds to pay off the loan.</li>
        <li><strong>Early loan payoff:</strong> If possible, pay off the loan before selling the car.</li>
      </ol>
      
      <h2>Important Considerations</h2>
      
      <p>Before proceeding with a loan transfer, keep these points in mind:</p>
      
      <ul>
        <li>Your credit may still be affected if the new borrower defaults on the loan, depending on how the transfer is structured.</li>
        <li>There might be transfer fees or prepayment penalties.</li>
        <li>The interest rate might change for the new borrower.</li>
      </ul>
      
      <p>By following these steps and understanding the process, you can successfully transfer your used car loan to another person while protecting your financial interests.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Car Loans",
    views: 645,
    date: "Jan 20, 2025",
    readTime: "4 Min",
    author: "Team LOANS24",
    authorImage: "/placeholder.svg?height=40&width=40",
    featured: true,
    tags: ["Car Loan", "Loan Transfer", "Used Car", "Finance"],
  },
  {
    id: 2,
    title: "How Gen Z is revolutionising credit and shaping financial trends?",
    excerpt: "Discover how the youngest generation is changing the way we think about credit and financial services.",
    content: `
      <p>Generation Z, born between 1997 and 2012, is coming of age and bringing fresh perspectives to personal finance. Their approach to money, credit, and financial services is reshaping the industry in significant ways.</p>
      
      <h2>Digital Natives Demand Digital Solutions</h2>
      
      <p>Having grown up in a digital world, Gen Z expects seamless, mobile-first financial experiences. Traditional banking processes that require paperwork or in-person visits are quickly becoming obsolete as this generation demands instant, user-friendly digital solutions.</p>
      
      <p>Financial institutions are responding by developing advanced mobile apps, implementing biometric authentication, and creating intuitive user interfaces that align with Gen Z's expectations.</p>
      
      <h2>Alternative Credit Scoring</h2>
      
      <p>Many Gen Z consumers are credit invisible or have limited credit histories. Rather than viewing this as a barrier, innovative lenders are developing alternative credit scoring models that consider factors beyond traditional credit reports.</p>
      
      <p>These new models may include:</p>
      
      <ul>
        <li>Rent and utility payment history</li>
        <li>Subscription payment consistency</li>
        <li>Banking transaction patterns</li>
        <li>Education and employment data</li>
      </ul>
      
      <h2>Buy Now, Pay Later Revolution</h2>
      
      <p>The explosive growth of Buy Now, Pay Later (BNPL) services like Afterpay, Klarna, and Affirm is largely driven by Gen Z consumers. These services offer interest-free installment payments without traditional credit checks, appealing to a generation wary of debt and credit cards.</p>
      
      <p>BNPL providers are now expanding beyond retail into other sectors, including healthcare, travel, and education, further disrupting traditional lending models.</p>
      
      <h2>Financial Education Through Social Media</h2>
      
      <p>Gen Z turns to social media for financial education, following "finfluencers" who provide advice on investing, budgeting, and debt management. This peer-to-peer learning model is changing how financial literacy is delivered and consumed.</p>
      
      <p>Financial institutions are adapting by creating educational content specifically for social platforms and partnering with influencers to reach this demographic.</p>
      
      <h2>Values-Based Financial Decisions</h2>
      
      <p>Environmental, social, and governance (ESG) factors heavily influence Gen Z's financial decisions. They're more likely to choose financial products and services from companies that align with their values on issues like sustainability, diversity, and social justice.</p>
      
      <p>This has led to the growth of:</p>
      
      <ul>
        <li>ESG-focused investment options</li>
        <li>Carbon-neutral banking services</li>
        <li>Financial products that contribute to social causes</li>
      </ul>
      
      <h2>The Future of Credit</h2>
      
      <p>As Gen Z continues to gain financial independence and purchasing power, we can expect further innovations in credit and financial services. Financial institutions that understand and adapt to this generation's preferences will be well-positioned for future success.</p>
      
      <p>The revolution is just beginning, and Gen Z's influence on financial trends will likely accelerate in the coming years, creating a more accessible, transparent, and values-driven financial ecosystem.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Financial Trends",
    views: 404,
    date: "Nov 7, 2024",
    readTime: "5 Min",
    author: "Team LOANS24",
    authorImage: "/placeholder.svg?height=40&width=40",
    featured: true,
    tags: ["Gen Z", "Financial Trends", "Credit", "Digital Banking"],
  },
  // Add more detailed blog posts as needed
]

// Related posts function
const getRelatedPosts = (currentPostId, category) => {
  return blogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, 3)
}

const BlogDetail = () => {
  const { id } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Find the post with the matching id
    const postId = Number.parseInt(id)
    const foundPost = blogPosts.find((post) => post.id === postId)

    if (foundPost) {
      setPost(foundPost)
      setRelatedPosts(getRelatedPosts(postId, foundPost.category))

      // Scroll to top when post changes
      window.scrollTo(0, 0)
    }
  }, [id])

  const copyToClipboard = () => {
    const url = window.location.href
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Blog post not found</h2>
          <Link to="/blogs" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to all blogs
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-black/50">
          <img
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <Link to="/blogs" className="inline-flex items-center text-blue-300 hover:text-blue-200 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" /> Back to all blogs
              </Link>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{post.title}</h1>
              <div className="flex flex-wrap items-center justify-center text-sm text-gray-200 gap-4 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full">{post.category}</span>
                <span className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {post.date}
                </span>
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views} views
                </span>
              </div>
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-2 overflow-hidden">
                  <span className="text-xs font-semibold text-gray-800">TL</span>
                </div>
                <span className="text-gray-200">{post.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm p-6 md:p-10">
            {/* Social Share */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Facebook className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Twitter className="h-4 w-4" />
                </button>
                <button className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </button>
                <button
                  className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center hover:bg-blue-200 transition-colors relative"
                  onClick={copyToClipboard}
                >
                  <Copy className="h-4 w-4" />
                  {copied && (
                    <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded">
                      Copied!
                    </span>
                  )}
                </button>
              </div>
              <button className="flex items-center text-sm text-gray-600 hover:text-blue-600">
                <Bookmark className="h-4 w-4 mr-1" /> Save
              </button>
            </div>

            {/* Blog Content */}
            <div className="prose prose-blue max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            {/* Tags */}
            <div className="mt-10 pt-6 border-t">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blogs?tag=${tag}`}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm px-3 py-1 rounded-full transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <Link to={`/blogs/${post.id}`} className="block">
                    <div className="relative h-48">
                      <img
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <span className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                      <Link to={`/blogs/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-2">{post.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link to="/blogs" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View all articles <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>
      )}

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
                className="flex-grow py-3 px-4 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
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

export default BlogDetail
