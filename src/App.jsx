import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/home/Navbar"
import Footer from "./components/home/Footer"
import Home from "./pages/Home"
import OurStory from "./pages/OurStory"
import Loans from "./pages/Loans"
import Calculators from "./pages/Calculators"
import BecomePartner from "./pages/BecomePartner"
import ContactButtons from "./components/home/ContactButtons"
import "./index.css"
import PersonalLoan from "./pages/PersonalLoan"
import UsedCarLoan from "./pages/UsedCarLoan"
import NewCarLoan from "./pages/NewCarLoan"
import LoanAgainstCar from "./pages/LoanAgainstCar"
import AboutUs from "./pages/AboutUs"
import OurMission from "./pages/OurMission"
import ApplyButton from "./pages/ApplyButton"
import ScrollToTop from "./components/ScrollToTop" // ✅ Add this import
  import BlogDetail from "./components/home/BlogDetail"
import ContactUs from "./pages/ContactUs"
import Community from "./pages/Community"
import Career from "./pages/community/career"
import OurCoreValues from "./pages/community/our-core-values"
import WorkCulture from "./pages/community/work-culture"
import FAQ from "./pages/community/faq"
import Blogs from "./components/home/Blogs"
import PrivacyPolicy from "./components/PrivacyPolicy"  

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-story/about" element={<AboutUs />} />
            <Route path="/our-story/mission" element={<OurMission />} />
            <Route path="/apply" element={<ApplyButton />} />
            <Route path="/contact" element={<ContactUs />} />


            <Route path="/loans" element={<Loans />} />
            <Route path="/community" element={<Community />} />
            
            <Route path="/community/career" element={<Career />} />
            <Route path="/community/our-core-values" element={<OurCoreValues />} />
            <Route path="/community/work-culture" element={<WorkCulture />} />
            <Route path="/community/faq" element={<FAQ />} />
            <Route path="/loans/personal" element={<PersonalLoan />} />
            <Route path="/loans/used-car" element={<UsedCarLoan />} />
            <Route path="/loans/new-car" element={<NewCarLoan />} />
            <Route path="/loans/against-car" element={<LoanAgainstCar />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/become-partner" element={<BecomePartner />} />
            <Route path="/community/blogs" element={<Blogs />} />
          </Routes>
        </main>
        <Footer />
        <ContactButtons />
        <ScrollToTop /> {/* ✅ Add this at the bottom so it's on top of everything */}
      </div>
    </Router>
  )
}

export default App
