import { FirstAid, ArrowRight, Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BookingModal from '@/components/BookingModal'
import SEO from '@/components/SEO'

const EmergencyCare = () => {
  return (
    <>
      <SEO
        title="Emergency Dental Care Services | Curadent"
        description="24/7 emergency dental care for immediate pain relief and urgent dental problems at Curadent, Bangalore."
        keywords="emergency dentist, dental emergency, urgent dental care, tooth pain relief, emergency dental clinic bangalore"
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
              <FirstAid size={40} weight="duotone" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">Emergency Dental Care</h1>
            <p className="text-xl text-white/80">Immediate care when you need it most</p>
            <div className="mt-8 flex justify-center gap-4">
              <BookingModal
                trigger={
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Get Emergency Care
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
            <h2 className="text-3xl font-bold">Emergency Services</h2>
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
            <h2 className="text-3xl font-bold">Why Choose Our Emergency Care</h2>
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
          <h2 className="text-3xl font-bold mb-4">Dental Emergency?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Don't wait in pain. Contact us immediately for prompt emergency dental care.
          </p>
          <div className="flex justify-center gap-4">
            <BookingModal
              trigger={
                <Button size="lg" className="gap-2">
                  Book Emergency Visit
                  <ArrowRight className="w-5 h-5" />
                </Button>
              }
            />
            <a href="tel:+919108161850">
              <Button variant="outline" size="lg" className="gap-2">
                Call Emergency Line
                <ArrowRight className="w-5 h-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </>
  )
}

const services = [
  {
    title: "Severe Tooth Pain",
    description: "Immediate relief for acute dental pain and infection management."
  },
  {
    title: "Broken Teeth",
    description: "Emergency repair for chipped, cracked, or broken teeth."
  },
  {
    title: "Lost Fillings/Crowns",
    description: "Quick replacement of lost or damaged dental work."
  },
  {
    title: "Dental Trauma",
    description: "Urgent care for injuries to teeth, gums, or jaw."
  }
]

const benefits = [
  {
    title: "24/7 Availability",
    description: "Round-the-clock emergency dental care when you need it most."
  },
  {
    title: "Quick Response",
    description: "Minimal waiting time for emergency appointments and treatment."
  },
  {
    title: "Expert Care",
    description: "Experienced emergency dentists equipped to handle all dental crises."
  },
  {
    title: "Complete Care",
    description: "Comprehensive treatment from immediate relief to long-term solutions."
  }
]

export default EmergencyCare 