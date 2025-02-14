import { Link, useLocation, useNavigate } from 'react-router-dom'
import { House, User, Phone, List, Tooth, Users, Star, CaretDown, EnvelopeSimple, WhatsappLogo } from '@phosphor-icons/react'
import { Button } from "@/components/ui/button"
import BookingModal from './BookingModal'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const scrollToSection = (sectionId) => {
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
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container h-16 flex items-center">
        <Link to="/" className="text-2xl font-bold logo-gradient">
          Curadent
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 ml-auto">
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('home')} className="inline-flex h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <House className="mr-2 h-4 w-4" />
                  Home
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('services')} className="inline-flex h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Tooth className="mr-2 h-4 w-4" />
                  Services
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('team')} className="inline-flex h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Users className="mr-2 h-4 w-4" />
                  Team
                </button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <button onClick={() => scrollToSection('testimonials')} className="inline-flex h-9 px-4 py-2 items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  <Star className="mr-2 h-4 w-4" />
                  Testimonials
                </button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="h-9 bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary data-[state=open]:bg-primary/20">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="p-3 w-64 space-y-2 bg-background rounded-lg shadow-lg border">
                      {/* Primary Contact */}
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">Primary</span>
                        <div className="mt-1 space-y-1">
                          <a href="tel:+919108161850" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-sm">+91 91081 61850</span>
                          </a>
                          <a href="https://wa.me/919108161850" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                            <WhatsappLogo className="h-4 w-4 text-green-600" weight="fill" />
                            <span className="text-sm">WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      {/* Secondary Contact */}
                      <div>
                        <span className="text-xs font-medium text-muted-foreground">Secondary</span>
                        <div className="mt-1 space-y-1">
                          <a href="tel:+919900379125" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                            <Phone className="h-4 w-4 text-primary" />
                            <span className="text-sm">+91 99003 79125</span>
                          </a>
                          <a href="https://wa.me/919900379125" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-2 hover:bg-accent rounded-md transition-colors">
                            <WhatsappLogo className="h-4 w-4 text-green-600" weight="fill" />
                            <span className="text-sm">WhatsApp</span>
                          </a>
                        </div>
                      </div>

                      {/* Email Option */}
                      <div className="pt-2 border-t">
                        <button onClick={() => scrollToSection('contact')} className="flex items-center gap-2 w-full p-2 hover:bg-accent rounded-md transition-colors">
                          <EnvelopeSimple className="h-4 w-4 text-secondary" />
                          <span className="text-sm">Email us</span>
                        </button>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <BookingModal 
              trigger={
                <Button className="bg-primary hover:bg-primary/90">
                  Book Appointment
                </Button>
              }
            />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden ml-auto flex items-center gap-2">
          {/* Quick Call Button with Dropdown for Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon"
                className="bg-primary/10 text-primary hover:bg-primary/20 hover:text-primary w-9 h-9 rounded-md"
              >
                <Phone className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="top" className="h-auto max-h-[90vh] overflow-y-auto">
              <SheetHeader className="text-left">
                <SheetTitle>Contact Us</SheetTitle>
                <SheetDescription>Get in touch with our team</SheetDescription>
              </SheetHeader>
              <div className="py-6 space-y-6">
                {/* Contact Options */}
                <div className="space-y-6">
                  {/* Primary Contact */}
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Primary Contact</span>
                    <div className="mt-2 space-y-2">
                      <a 
                        href="tel:+919108161850" 
                        className="flex items-center gap-3 p-3 bg-accent/50 hover:bg-accent rounded-lg transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">+91 91081 61850</span>
                      </a>
                      <a 
                        href="https://wa.me/919108161850" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-green-50/50 hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                          <WhatsappLogo className="h-5 w-5 text-green-600" weight="fill" />
                        </div>
                        <span className="font-medium text-green-700">Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Secondary Contact */}
                  <div>
                    <span className="text-sm font-medium text-muted-foreground">Secondary Contact</span>
                    <div className="mt-2 space-y-2">
                      <a 
                        href="tel:+919900379125" 
                        className="flex items-center gap-3 p-3 bg-accent/50 hover:bg-accent rounded-lg transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <span className="font-medium">+91 99003 79125</span>
                      </a>
                      <a 
                        href="https://wa.me/919900379125" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-green-50/50 hover:bg-green-50 rounded-lg transition-colors"
                      >
                        <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                          <WhatsappLogo className="h-5 w-5 text-green-600" weight="fill" />
                        </div>
                        <span className="font-medium text-green-700">Chat on WhatsApp</span>
                      </a>
                    </div>
                  </div>

                  {/* Email Option */}
                  <div className="pt-4 border-t">
                    <button 
                      onClick={() => {
                        scrollToSection('contact');
                        const sheet = document.querySelector('[data-state="open"]');
                        if (sheet) {
                          const closeButton = sheet.querySelector('[aria-label="Close"]');
                          if (closeButton) closeButton.click();
                        }
                      }}
                      className="flex items-center gap-3 p-3 w-full bg-accent/50 hover:bg-accent rounded-lg transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                        <EnvelopeSimple className="h-5 w-5 text-secondary" />
                      </div>
                      <div className="text-left">
                        <span className="font-medium block">Send us a message</span>
                        <span className="text-sm text-muted-foreground">Get in touch via email</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
          
          {/* Main Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="w-9 h-9">
                <List className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="text-left">
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription>Navigate through our website</SheetDescription>
              </SheetHeader>
              
              <div className="flex flex-col gap-1 mt-6">
                <button onClick={() => scrollToSection('home')} className="flex items-center gap-2 p-3 hover:bg-accent rounded-lg transition-colors">
                  <House className="h-4 w-4" />
                  <span className="font-medium">Home</span>
                </button>
                <button onClick={() => scrollToSection('services')} className="flex items-center gap-2 p-3 hover:bg-accent rounded-lg transition-colors">
                  <Tooth className="h-4 w-4" />
                  <span className="font-medium">Services</span>
                </button>
                <button onClick={() => scrollToSection('team')} className="flex items-center gap-2 p-3 hover:bg-accent rounded-lg transition-colors">
                  <Users className="h-4 w-4" />
                  <span className="font-medium">Team</span>
                </button>
                <button onClick={() => scrollToSection('testimonials')} className="flex items-center gap-2 p-3 hover:bg-accent rounded-lg transition-colors">
                  <Star className="h-4 w-4" />
                  <span className="font-medium">Testimonials</span>
                </button>
                <div className="pt-4 mt-4 border-t">
                  <BookingModal 
                    trigger={
                      <Button className="w-full bg-primary hover:bg-primary/90">
                        Book Appointment
                      </Button>
                    }
                  />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 