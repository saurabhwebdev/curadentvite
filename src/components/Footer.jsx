import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Phone, EnvelopeSimple, MapPin, InstagramLogo, FacebookLogo, TwitterLogo } from '@phosphor-icons/react'
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: sectionId } })
    } else {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer-gradient text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">About Curadent</h3>
            <p className="text-sm text-white/80">
              Leading dental care provider in Bangalore, offering comprehensive services with state-of-the-art technology and experienced professionals.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-white hover:bg-white/20">
                <a href="https://instagram.com/curadent" target="_blank" rel="noopener noreferrer">
                  <InstagramLogo className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-white hover:bg-white/20">
                <a href="https://facebook.com/curadent" target="_blank" rel="noopener noreferrer">
                  <FacebookLogo className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild className="text-white hover:text-white hover:bg-white/20">
                <a href="https://twitter.com/curadent" target="_blank" rel="noopener noreferrer">
                  <TwitterLogo className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-white/80 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-white/80 hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-white/80 hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-sm text-white/80 hover:text-white">
                  Testimonials
                </Link>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-sm text-white/80 hover:text-white">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services/general-dentistry" className="text-sm text-white/80 hover:text-white">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/cosmetic-dentistry" className="text-sm text-white/80 hover:text-white">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link to="/services/orthodontics" className="text-sm text-white/80 hover:text-white">
                  Orthodontics
                </Link>
              </li>
              <li>
                <Link to="/services/dental-implants" className="text-sm text-white/80 hover:text-white">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link to="/services/root-canal" className="text-sm text-white/80 hover:text-white">
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link to="/services/emergency-care" className="text-sm text-white/80 hover:text-white">
                  Emergency Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <MapPin className="h-5 w-5 mt-0.5 shrink-0" />
                <span>
                  #301, First floor, 2nd Main Road,<br />
                  East of NGEF Layout,<br />
                  Kasturi Nagar, Bengaluru
                </span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/80">
                <Phone className="h-5 w-5 shrink-0" />
                <div className="space-y-1">
                  <a href="tel:+919108161850" className="block hover:text-white">+91 91081 61850</a>
                  <a href="tel:+919900379125" className="block hover:text-white">+91 99003 79125</a>
                </div>
              </li>
              <li className="flex items-start space-x-3 text-sm text-white/80">
                <EnvelopeSimple className="h-5 w-5 mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:hello@curadent.in" className="block hover:text-white">hello@curadent.in</a>
                  <a href="mailto:hellocuradent@gmail.com" className="block hover:text-white">hellocuradent@gmail.com</a>
                </div>
              </li>
              <li className="text-sm text-white/80 mt-4">
                <span className="font-semibold">Hours:</span><br />
                Monday - Saturday: 10am - 8pm<br />
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/20" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-white/80">
          <p>© {currentYear} Curadent. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer