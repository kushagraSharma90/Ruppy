import Hero from "../components/home/Hero"
import LoanCategories from "../components/home/LoanCategories"
import AboutSection from "../components/home/AboutSection"
import Testimonials from "../components/home/Testimonials"
import CtaSection from "../components/home/CtaSection"
import Partners from "../components/home/Partners"
import EmiCalculator  from "../components/home/CalculateEMI"
import BlogsSection from "../components/home/BlogSection"


const Home = () => {
  return (
    <> 
    <Hero />
    <LoanCategories />
    {/* <AboutSection /> */}
    <EmiCalculator  />
    <Testimonials />
    {/* <Partners /> */}
    <BlogsSection/>
    <CtaSection /> 
    </>
       
     
     
    
  )
}

export default Home
