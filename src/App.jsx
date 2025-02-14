import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

// Page imports
import Home from './pages/Home'
import About from './pages/About'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

// Service page imports
import GeneralDentistry from './pages/services/GeneralDentistry'
import CosmeticDentistry from './pages/services/CosmeticDentistry'
import Orthodontics from './pages/services/Orthodontics'
import DentalImplants from './pages/services/DentalImplants'
import RootCanal from './pages/services/RootCanal'
import EmergencyCare from './pages/services/EmergencyCare'

const queryClient = new QueryClient()

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background flex flex-col">
          <Navbar />
          <ScrollToTop />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/services/general-dentistry" element={<GeneralDentistry />} />
              <Route path="/services/cosmetic-dentistry" element={<CosmeticDentistry />} />
              <Route path="/services/orthodontics" element={<Orthodontics />} />
              <Route path="/services/dental-implants" element={<DentalImplants />} />
              <Route path="/services/root-canal" element={<RootCanal />} />
              <Route path="/services/emergency-care" element={<EmergencyCare />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
