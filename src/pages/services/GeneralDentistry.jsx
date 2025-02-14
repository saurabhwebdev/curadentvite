import { Tooth, ArrowRight, Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BookingModal from '@/components/BookingModal'
import SEO from '@/components/SEO'

const GeneralDentistry = () => {
  return (
    <>
      <SEO
        title="General Dentistry Services | Curadent"
        description="Comprehensive dental care including cleanings, fillings, and preventive treatments at Curadent, Bengaluru's leading dental clinic."
        keywords="general dentistry, dental cleaning, dental fillings, preventive dentistry, dental check up, oral health, dental clinic Bengaluru"
      />
      
      {/* Hero Section with Background Pattern */}
      <section className="relative py-24 overflow-hidden hero-gradient">
        <div className="hero-pattern" />
        <div className="hero-shapes" />
        
        <div className="container relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="w-20 h-20 bg-white/10 text-white rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-lg">
              <Tooth size={40} weight="duotone" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">General Dentistry</h1>
            <p className="text-xl text-white/80">Comprehensive dental care for your entire family</p>
            <div className="mt-8 flex justify-center gap-4">
              <BookingModal
                trigger={
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Book Consultation
                  </Button>
                }
              />
              <a href="tel:+919108161850">
                <Button variant="outline" size="lg" className="border-2 border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="section-divider wave" />

      {/* Main Content */}
      <div className="container py-16">
        {/* Services Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our General Dentistry Services</h2>
            <div className="grid gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Why Choose Us?</h2>
            <div className="grid gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                        {benefit.title}
                      </CardTitle>
                      <CardDescription className="text-base">{benefit.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mt-16 py-16"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Schedule a consultation with our dental experts and take the first step towards optimal oral health.
          </p>
          <BookingModal
            trigger={
              <Button size="lg" className="gap-2">
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            }
          />
        </motion.div>
      </div>
    </>
  )
}

const services = [
  {
    title: "Routine Check-ups",
    description: "Regular dental examinations to maintain oral health and prevent future problems."
  },
  {
    title: "Professional Cleaning",
    description: "Thorough cleaning to remove plaque and tartar, preventing gum disease and cavities."
  },
  {
    title: "Dental Fillings",
    description: "High-quality composite fillings to treat cavities and restore damaged teeth."
  },
  {
    title: "Preventive Care",
    description: "Fluoride treatments, sealants, and guidance on maintaining optimal oral health."
  }
]

const benefits = [
  {
    title: "Expert Team",
    description: "Our experienced dentists provide personalized care using the latest techniques."
  },
  {
    title: "Modern Technology",
    description: "State-of-the-art equipment for accurate diagnosis and comfortable treatment."
  },
  {
    title: "Comfortable Environment",
    description: "Relaxing atmosphere designed to make your dental visit stress-free."
  },
  {
    title: "Preventive Focus",
    description: "Emphasis on preventing dental issues before they become serious problems."
  }
]

export default GeneralDentistry 