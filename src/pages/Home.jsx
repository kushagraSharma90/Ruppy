import Hero from "../components/home/Hero"
import LoanCategories from "../components/home/LoanCategories"
import AboutSection from "../components/home/AboutSection"
import Testimonials from "../components/home/Testimonials"
import CtaSection from "../components/home/CtaSection"
import Partners from "../components/home/Partners"
import EmiCalculator  from "../components/home/CalculateEMI"
import Blogs from "../components/home/Blogs"
import BlogDetail from "../components/home/BlogDetail"


const Home = () => {
  return (
    <> 
    <Hero />
    <LoanCategories />
    {/* <AboutSection /> */}
    <EmiCalculator  />
    <Testimonials />
    {/* <Partners /> */}
    {/* <Blogs /> */}
    <BlogDetail/>
    <CtaSection /> 
    </>
       
     
     
    
  )
}

export default Home
