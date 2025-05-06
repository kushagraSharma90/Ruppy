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
import OurTeam from "./pages/OurTeam"
import ScrollToTop from "./components/ScrollToTop" // ✅ Add this import

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/our-story/about" element={<AboutUs />} />
            <Route path="/our-story/mission" element={<OurMission />} />
            <Route path="/apply" element={<ApplyButton />} />
            <Route path="/our-story/team" element={<OurTeam />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/loans/personal" element={<PersonalLoan />} />
            <Route path="/loans/used-car" element={<UsedCarLoan />} />
            <Route path="/loans/new-car" element={<NewCarLoan />} />
            <Route path="/loans/against-car" element={<LoanAgainstCar />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/become-partner" element={<BecomePartner />} />
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
