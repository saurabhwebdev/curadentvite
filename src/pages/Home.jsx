import { ArrowRight, Phone, Calendar, Star, Users, Trophy, Clock, Heart, Tooth, Sparkle, Smiley, FirstAid, MapPin, EnvelopeSimple, Check } from '@phosphor-icons/react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import SEO from '@/components/SEO'
import BookingModal from '@/components/BookingModal'
import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Home = () => {
  const { scrollY } = useScroll()
  const location = useLocation()
  
  // Scroll reveal effect
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal')
      reveals.forEach(reveal => {
        const windowHeight = window.innerHeight
        const revealTop = reveal.getBoundingClientRect().top
        const revealPoint = 150

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle scroll to section when navigating from another page
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo)
      if (element) {
        // Small delay to ensure the page is loaded
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
      // Clear the state after scrolling
      window.history.replaceState({}, document.title)
    }
  }, [location])

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  const onSubmit = (data) => {
    console.log(data)
    // Here you'll handle the form submission
  }

  return (
    <>
      <SEO
        title="Best Dental Clinic in Bengaluru | Advanced Dental Care"
        description="Curadent is a state-of-the-art dental clinic in Bengaluru, offering comprehensive dental care including cosmetic dentistry, orthodontics, and dental implants. Book your appointment today!"
        keywords="dental clinic Bengaluru, best dentist Bengaluru, dental implants, cosmetic dentistry, orthodontics, teeth whitening, dental crown, root canal treatment, emergency dentist"
      />
      
      <div className="min-h-[calc(100vh-4rem)]">
        {/* Hero Section */}
        <section id="home" className="relative py-12 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 w-full h-full">
            {/* Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl animate-blob" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl animate-blob animation-delay-2000" />
            <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-blob animation-delay-4000" />
            
            {/* SVG Pattern */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Column - Content */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="bg-primary/10 text-primary rounded-full px-6 py-2 text-sm font-medium backdrop-blur-sm border border-primary/10">
                    Now Accepting New Patients
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-4xl md:text-6xl font-bold"
                  >
                    <span className="logo-gradient">Modern Dental Care</span>
                    <br />
                    <span className="text-foreground">for Your Family</span>
                  </motion.h1>
                  
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg text-muted-foreground max-w-xl"
                  >
                    Experience world-class dental care in a comfortable and modern environment. Our expert team is dedicated to your perfect smile.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4"
                  >
                    <BookingModal
                      trigger={
                        <Button size="lg" className="gap-2 text-lg h-14 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300">
                          Book Appointment
                          <Calendar className="h-5 w-5" />
                        </Button>
                      }
                    />
                  </motion.div>
                </div>

                {/* Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="grid grid-cols-3 gap-8 pt-8"
                >
                  {[
                    { value: "15+", label: "Years Experience" },
                    { value: "10k+", label: "Happy Patients" },
                    { value: "4.9★", label: "Rating" }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1.2 + index * 0.1 }}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg blur group-hover:blur-xl transition-all duration-300" />
                      <div className="relative bg-background/50 backdrop-blur-sm rounded-lg p-4 border border-primary/10 hover:border-primary/20 transition-all duration-300">
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-transparent mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <img 
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2068&auto=format&fit=crop" 
                  alt="Modern Dental Clinic" 
                  className="w-full h-full object-cover"
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1 }}
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent backdrop-blur-sm"
                >
                  <div className="text-white text-sm font-medium">State-of-the-art facilities for comprehensive dental care</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider wave bg-background" />

        {/* Services Section */}
        <section id="services" className="py-20 bg-muted/50 section-transition">
          <div className="container reveal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Services</h2>
              <p className="text-muted-foreground text-lg">Expert solutions for all your dental needs</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-4">
                        {index === 0 ? <Tooth size={32} weight="duotone" /> :
                         index === 1 ? <Sparkle size={32} weight="duotone" /> :
                         index === 2 ? <Smiley size={32} weight="duotone" /> :
                         index === 3 ? <FirstAid size={32} weight="duotone" /> :
                         index === 4 ? <Heart size={32} weight="duotone" /> :
                         <Clock size={32} weight="duotone" />}
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-base mt-2">{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="ghost" className="gap-2 text-primary hover:text-white hover:bg-primary/90" asChild>
                        <Link to={service.link}>
                          Learn More
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider curve bg-muted/50" />

        {/* Team Section */}
        <section id="team" className="py-20 section-transition">
          <div className="container reveal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Team</h2>
              <p className="text-muted-foreground text-lg">Expert specialists committed to your dental health</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-all group h-full flex flex-col">
                    <CardHeader className="relative overflow-hidden pb-6 flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Avatar className="w-40 h-40 mx-auto mb-4 ring-4 ring-primary/20">
                        <AvatarImage src={member.avatar} className="object-cover" />
                        <AvatarFallback className="bg-primary/10 text-primary text-2xl">{member.name.split(' ')[1][0]}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <CardTitle className="text-2xl">{member.name}</CardTitle>
                        <CardDescription className="text-primary font-medium text-lg">{member.role}</CardDescription>
                        <div className="text-muted-foreground font-medium">{member.qualification}</div>
                        <div className="text-primary">{member.experience} Years Experience</div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between gap-4">
                      <div className="space-y-6">
                        <div>
                          <div className="text-sm text-muted-foreground leading-relaxed">
                            {member.specialization}
                          </div>
                        </div>
                        <Separator />
                        <div className="space-y-2">
                          {member.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <Check className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                              <p className="text-sm text-muted-foreground text-left">{achievement}</p>
                            </div>
                          ))}
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-2 justify-center">
                          {member.languages.map((lang, i) => (
                            <span key={i} className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider triangle bg-background" />

        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-muted/50 section-transition">
          <div className="container reveal">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Testimonials</h2>
              <p className="text-muted-foreground text-lg">Real experiences from our valued patients</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all relative group">
                    <div className="absolute top-0 left-0 w-20 h-20 bg-primary/10 rounded-br-[100px] -z-10 transition-all group-hover:w-24 group-hover:h-24" />
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <Avatar className="w-16 h-16 ring-4 ring-primary/20">
                          <AvatarFallback className="bg-primary/10 text-primary text-xl">{testimonial.name[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-xl">{testimonial.name}</CardTitle>
                          <div className="flex text-yellow-400 mt-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} weight="fill" className="w-4 h-4" />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="relative">
                        <Star weight="fill" className="text-primary/10 w-12 h-12 absolute -top-4 -left-6 -z-10" />
                        <CardDescription className="text-base relative z-10">"{testimonial.comment}"</CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Divider */}
        <div className="section-divider tilt bg-muted/50" />

        {/* Contact Section */}
        <section id="contact" className="py-20 section-transition bg-muted/50">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground text-lg">We're here to help with all your dental care needs</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Quick Contact Cards */}
              <div className="lg:col-span-1 space-y-6">
                <Card className="hover:shadow-lg transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Call Us</CardTitle>
                    <div className="space-y-1">
                      <a 
                        href="tel:+919108161850" 
                        className="block text-lg font-medium hover:text-primary transition-colors"
                      >
                        +91 91081 61850
                      </a>
                      <a 
                        href="tel:+919900379125" 
                        className="block text-lg font-medium hover:text-primary transition-colors"
                      >
                        +91 99003 79125
                      </a>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-lg transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <EnvelopeSimple className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Email Us</CardTitle>
                    <div className="space-y-1">
                      <a 
                        href="mailto:hello@curadent.in" 
                        className="block text-lg font-medium hover:text-primary transition-colors"
                      >
                        hello@curadent.in
                      </a>
                      <a 
                        href="mailto:hellocuradent@gmail.com" 
                        className="block text-lg font-medium hover:text-primary transition-colors"
                      >
                        hellocuradent@gmail.com
                      </a>
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-lg transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Visit Us</CardTitle>
                    <div className="text-lg font-medium">
                      #301, First floor, 2nd Main Road,<br />
                      East of NGEF Layout,<br />
                      Kasturi Nagar, Bengaluru
                    </div>
                  </CardHeader>
                </Card>

                <Card className="hover:shadow-lg transition-all group overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <CardHeader className="space-y-1">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl">Opening Hours</CardTitle>
                    <div className="space-y-2 text-lg font-medium">
                      <div>
                        <span className="text-primary">Mon - Sat:</span> 10am - 8pm
                      </div>
                      <div>
                        <span className="text-primary">Sunday:</span> Closed
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Contact Form & Booking */}
              <Card className="lg:col-span-2 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
                <CardHeader className="relative">
                  <CardTitle className="text-2xl">Schedule Your Visit</CardTitle>
                  <CardDescription className="text-base">
                    Book an appointment or send us a message
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-8">
                  <form action="https://formspree.io/f/mkgoverp" method="POST" className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Full Name</label>
                        <Input
                          name="name"
                          type="text"
                          placeholder="John Doe"
                          required
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Phone Number</label>
                        <Input
                          name="phone"
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          required
                          className="h-12"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Email Address</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium">Your Message</label>
                      <Textarea
                        name="message"
                        placeholder="Tell us about your dental concerns..."
                        className="min-h-[120px] resize-none"
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Send Message
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </form>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Or</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <BookingModal
                      trigger={
                        <Button variant="outline" size="lg" className="gap-2">
                          Schedule Online
                          <Calendar className="h-5 w-5" />
                        </Button>
                      }
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map */}
            <Card className="mt-8 overflow-hidden group hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.4851144952186!2d77.6541!3d13.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17103458d64f%3A0x3c95b75b1bac2b8e!2sKasturi%20Nagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1624523456789!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  )
}

const services = [
  {
    title: 'General Dentistry',
    description: 'Comprehensive dental care including cleanings, fillings, and preventive treatments.',
    icon: '🦷',
    link: '/services/general-dentistry'
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Transform your smile with veneers, whitening, and smile makeover procedures.',
    icon: '✨',
    link: '/services/cosmetic-dentistry'
  },
  {
    title: 'Orthodontics',
    description: 'Straighten your teeth with modern braces and clear aligner treatments.',
    icon: '😊',
    link: '/services/orthodontics'
  },
  {
    title: 'Dental Implants',
    description: 'Restore missing teeth with permanent, natural-looking dental implants.',
    icon: '🦿',
    link: '/services/dental-implants'
  },
  {
    title: 'Root Canal Treatment',
    description: 'Expert root canal therapy to save damaged teeth and relieve pain.',
    icon: '🎯',
    link: '/services/root-canal'
  },
  {
    title: 'Emergency Care',
    description: '24/7 emergency dental care for immediate pain relief and treatment.',
    icon: '🚑',
    link: '/services/emergency-care'
  }
]

const team = [
  {
    name: 'Dr. Kritilaxmi Jha',
    role: 'Founder & Clinic Head',
    qualification: 'MDS - Prosthodontics',
    experience: '10+',
    specialization: 'Aesthetic dentistry, Implants & Full Mouth Rehabilitation & Dentures',
    achievements: [
      'Resource Person at ILAMED',
      'Attached to PD Hinduja Sindhi Hospital & HCG'
    ],
    languages: ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu'],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=kritilaxmi'
  },
  {
    name: 'Dr. J. Raghunand Sindhe',
    role: 'Consultant, Implantologist',
    qualification: 'MDS - Oral Medicine & Radiology',
    experience: '15+',
    specialization: 'Dental Implants & Dental Radiology and Medicine and Oral Surgery',
    achievements: [
      'Fellowship in Implantology & Persuing PHD',
      'Convener IDA Bengaluru Chapter'
    ],
    languages: ['English', 'Hindi', 'Kannada', 'Marathi'],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=raghunand'
  },
  {
    name: 'Dr. Manjunath',
    role: 'Oral & Maxillofacial Surgeon',
    qualification: 'MDS - Oral & Maxillofacial Surgery',
    experience: '12+',
    specialization: 'Oral & Maxillofacial Surgery, Cranio-Maxillofacial Surgery & Oral Onco-Surgery',
    achievements: [
      'Trauma Management & Emergency Care Expert',
      'Dental Disimpaction Expert'
    ],
    languages: ['English', 'Hindi', 'Kannada', 'Telugu'],
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=manjunath'
  }
]

const testimonials = [
  {
    name: 'Rahul Mehta',
    comment: 'Outstanding dental care! Dr. Kumar and his team made my dental implant procedure completely painless. Highly recommended!'
  },
  {
    name: 'Anjali Singh',
    comment: 'I got my braces done at Curadent and the results are amazing. The staff is very professional and caring.'
  },
  {
    name: 'Karthik R',
    comment: 'Best dental clinic in the city! The facilities are modern and the doctors are extremely knowledgeable.'
  }
]

export default Home 