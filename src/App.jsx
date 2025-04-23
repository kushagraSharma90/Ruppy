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

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/become-partner" element={<BecomePartner />} />
          </Routes>
        </main>
        <Footer />
        <ContactButtons />
      </div>
    </Router>

   
    
  )
}

export default App
