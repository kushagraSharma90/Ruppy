import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import customer1 from "../../assets/customer1.jpg";
import customer2 from "../../assets/customer2.jpg";
import customer3 from "../../assets/customer3.jpg";
import customer4 from "../../assets/customer4.jpg";
import customer5 from "../../assets/customer5.jpeg";
import customer6 from "../../assets/customer6.jpg";
import customer8 from "../../assets/customer8.jpeg";
import customer9 from "../../assets/customer9.jpeg";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Saurabh Patel",
      position: "Salaried - Delhi",
      image: customer1,
      content:
        "Celebrated our 2nd marriage anniversary with a new car thanks to Rupee Dot's swift service, we secured a high loan amount at a low rate, turning an unplanned surprise into reality. My wife was overjoyed!",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Sule",
      position: "Salaried - Pune",
      image: customer4,
      content:
        "Cheers to RupeeDot for the great and efficient service and process, I was able to do my home renovation dreams at faster time Yourseamless loan process support & prompt assistance and trust in me made the entireourney smooth. Thanks to your help, I was able to renovate my home just the way I envisioned I’m grateful for your",
      rating: 5,
    },
    {
      id: 3,
      name: "Ravin P",
      position: "Business Owner - Bangalore",
      image: customer3,
      content:
        "Got a used car loan considering my daughter's 18th Birthday-fast service, immediate loan process! Even the relationship manager was here with cakes and ribbons during car delivery I thought this happens only for new car What a service and personal touch! Thanks to Rupee Dot, highly appreciated!",
      rating: 5,
    },
    {
      id: 4,
      name: "Sunil Rana",
      position: "Working Professional - Mumbai",
      image: customer2,
      content:
        "I financed my new car through RupeeDot, and the experience was amazing! The process was smooth, quick, and hassle-free, with complete transparency and no hidden charges. I’m truly happy with their support and highly recommend RupeeDot for a seamless car loan journey",
      rating: 5,
    },
    {
      id: 5,
      name: "Mahak Khanna",
      position: "Salaried - Gurgaon",
      image: customer8,
      content:
        "RupeeDot came through for me when I needed it the most. I urgently required 10 lacs for a family vacation abroad, and their personal loan process was incredibly smooth and quick, removing all the stress. Knowing our dream trip was secured without financial roadblocks was a huge relief. I’m genuinely impressed with their service and would highly recommend RupeeDot to anyone in need of timely financial support.",
      rating: 5,
    },
    {
      id: 6,
      name: "Rishabh Jain",
      position: "Business Owner - Jabalpur",
      image: customer6,
      content:
        "I took a personal loan from RupeeDot for our family vacation abroad, and the experience was fantastic! The process was fast, simple, and completely stressfree. Thanks to their support, we enjoyed our dream trip without worrying about finances. I’d highly recommend RupeeDot for anyone planning a vacation!",
      rating: 5,
    },
    {
      id: 7,
      name: "Siddharth Sharma",
      position: "Working Professional - Mumbai",
      image: customer5,
      content:
        "I sincerely appreciate RupeeDot prompt assistance in providing me with a top-up car loan for my son's engineering admission as fund was required immediately for 7 lacs. Thanks to your support, my son can now pursue his education without financial hurdles. I am grateful for your exceptional service and look forward to a continued association with you.",
      rating: 5,
    },
    {
      id: 8,
      name: "Kanhaiya Tiwari",
      position: "Business Owner - Pune",
      image: customer9,
      content:
        "I recently financed a car for my son through RupeeDot, and I can’t express how grateful I am for their support. As a father, seeing my son’s happiness when he got the keys to his first car was priceless. The loan process was smooth, quick, and completely stress-free, allowing me to make this special moment happen without financial worries. RupeeDot made what felt like a distant dream a beautiful reality, and for that, I’ll always be thankful.",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const slidesToShow = isMobile ? 1 : 2;
  const totalPages = Math.ceil(testimonials.length / slidesToShow);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  return (
    <section className="pt-8 pb-20 bg-[#f5f5ec]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with RupeeDot.
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalPages }).map((_, pageIndex) => (
                <div
                  key={pageIndex}
                  className="w-full flex-shrink-0 flex flex-col md:flex-row gap-6 px-4"
                >
                  {testimonials
                    .slice(
                      pageIndex * slidesToShow,
                      pageIndex * slidesToShow + slidesToShow
                    )
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className="flex-1 bg-white rounded-xl p-8 shadow-xl transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                      >
                        <div className="relative">
                          <Quote className="absolute -top-4 -left-2 h-10 w-10 text-blue-100 rotate-180" />
                          <div className="flex items-center gap-4 mb-6">
                            <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md bg-white">
                              <img
                                src={testimonial.image || "/placeholder.svg"}
                                alt={testimonial.name}
                                className="w-full h-full object-contain object-center"
                              />
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-gray-800">
                                {testimonial.name}
                              </h4>
                              <p className="text-blue-600 font-medium">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>

                          <div className="flex mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-5 w-5 ${
                                  i < testimonial.rating
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>

                          <p className="text-gray-700 mb-4 italic leading-relaxed">
                            "{testimonial.content}"
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          </div>

          {!isMobile && (
            <button
              onClick={prevTestimonial}
              className="absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none md:-translate-x-6 z-10 border border-blue-100"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6 text-blue-600" />
            </button>
          )}

          {!isMobile && (
            <button
              onClick={nextTestimonial}
              className="absolute -right-10 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-4 rounded-full shadow-lg hover:bg-blue-50 transition-colors duration-300 focus:outline-none md:translate-x-6 z-10 border border-blue-100"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6 text-blue-600" />
            </button>
          )}

          <div className="flex justify-center mt-10 space-x-3">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-blue-600 w-8"
                    : "bg-gray-300 hover:bg-blue-300"
                }`}
                aria-label={`Go to testimonial page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
