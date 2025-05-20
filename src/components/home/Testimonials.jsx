import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

// Replace these with your actual image imports or public URLs
const customer1 = "/placeholder.svg"
const customer2 = "/placeholder.svg"
const customer3 = "/placeholder.svg"
const customer4 = "/placeholder.svg"
const customer5 = "/placeholder.svg"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Business Owner",
      image: customer1,
      content:
        "RupeeDot made the loan process incredibly simple. I got my business loan approved within 3 days, and their customer service was exceptional throughout the process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "Marketing Executive",
      image: customer2,
      content:
        "I was looking for a car loan with flexible repayment options, and RupeeDot delivered exactly what I needed. The interest rates were competitive, and the process was transparent.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Teacher",
      image: customer3,
      content:
        "As a first-time loan applicant, I was nervous about the process. The team at RupeeDot guided me through each step and made it stress-free. Highly recommended!",
      rating: 4,
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Healthcare Professional",
      image: customer4,
      content:
        "The personal loan I got from RupeeDot helped me during a medical emergency. Their quick approval process and minimal documentation were exactly what I needed in that situation.",
      rating: 5,
    },
    {
      id: 5,
      name: "Kushagra Sharma",
      position: "Software Developer",
      image: customer5,
      content:
        "The personal loan I got from RupeeDot helped me during a medical emergency. Their quick approval process and minimal documentation were exactly what I needed in that situation.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const slidesToShow = isMobile ? 1 : 2
  const totalPages = Math.ceil(testimonials.length / slidesToShow)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)
    return () => clearInterval(interval)
  }, [totalPages])

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-blue-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            RupeeDot.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 px-4">
                  {testimonials
                    .slice(pageIndex * slidesToShow, pageIndex * slidesToShow + slidesToShow)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex-1 bg-white rounded-xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                      >
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-2 h-10 w-10 text-blue-100 rotate-180" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-800">{testimonial.name}</h4>
                              <p className="text-blue-600 font-medium">{testimonial.position}</p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>

                          <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-9 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none md:-translate-x-6 z-10 border border-blue-100"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none md:translate-x-6 z-10 border border-blue-100"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-blue-300"
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
