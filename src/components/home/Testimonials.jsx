

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Rahul Sharma",
      position: "Business Owner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "RupeeDot made the loan process incredibly simple. I got my business loan approved within 3 days, and their customer service was exceptional throughout the process.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      position: "IT Professional",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      content:
        "I was looking for a car loan with flexible repayment options, and RupeeDot delivered exactly what I needed. The interest rates were competitive, and the process was transparent.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Verma",
      position: "Teacher",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      content:
        "As a first-time loan applicant, I was nervous about the process. The team at RupeeDot guided me through each step and made it stress-free. Highly recommended!",
      rating: 4,
    },
    {
      id: 4,
      name: "Sneha Gupta",
      position: "Healthcare Professional",
      image: "https://randomuser.me/api/portraits/women/26.jpg",
      content:
        "The personal loan I got from RupeeDot helped me during a medical emergency. Their quick approval process and minimal documentation were exactly what I needed in that situation.",
      rating: 5,
    },
    {
      id: 5,
      name: "Kushagra Sharma",
      position: "Software Developer",
      image: "https://randomuser.me/api/portraits/men/28.jpg",
      content:
        "The personal loan I got from RupeeDot helped me during a medical emergency. Their quick approval process and minimal documentation were exactly what I needed in that situation.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1))
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with
            RupeeDot.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-blue-50 rounded-xl p-8 shadow-lg">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div>
                        <div className="flex mb-3">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-5 w-5 ${
                                i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                          <p className="text-blue-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none md:-translate-x-6"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 focus:outline-none md:translate-x-6"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
