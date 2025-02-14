import { Syringe, ArrowRight, Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BookingModal from '@/components/BookingModal'
import SEO from '@/components/SEO'

const RootCanal = () => {
  return (
    <>
      <SEO
        title="Root Canal Treatment | Curadent"
        description="Expert root canal treatment with minimal discomfort at Curadent. Advanced techniques for effective tooth pain relief."
        keywords="root canal treatment, endodontic treatment, tooth pain relief, dental infection, root canal specialist bangalore"
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
              <Syringe size={40} weight="duotone" />
            </div>
            <h1 className="text-5xl font-bold mb-4 text-white">Root Canal Treatment</h1>
            <p className="text-xl text-white/80">Advanced endodontic care with minimal discomfort</p>
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
            <h2 className="text-3xl font-bold">Our Root Canal Services</h2>
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
          <h2 className="text-3xl font-bold mb-4">Experience Pain-Free Treatment</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Schedule a consultation with our root canal specialists and get relief from tooth pain.
          </p>
          <div className="flex justify-center gap-4">
            <BookingModal
              trigger={
                <Button size="lg" className="gap-2">
                  Book Your Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              }
            />
            <a href="tel:+919108161850">
              <Button variant="outline" size="lg" className="gap-2">
                Call Us Now
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
    title: "Diagnosis & Consultation",
    description: "Thorough examination and X-rays to determine the extent of infection and treatment plan."
  },
  {
    title: "Modern Root Canal Therapy",
    description: "Advanced techniques and equipment for precise and comfortable treatment."
  },
  {
    title: "Post-Treatment Care",
    description: "Comprehensive aftercare instructions and follow-up appointments to ensure proper healing."
  },
  {
    title: "Emergency Treatment",
    description: "Quick response for severe tooth pain and dental emergencies requiring immediate care."
  }
]

const benefits = [
  {
    title: "Experienced Specialists",
    description: "Our endodontists are highly trained in the latest root canal techniques."
  },
  {
    title: "Pain-Free Treatment",
    description: "Advanced anesthesia and gentle procedures for maximum comfort."
  },
  {
    title: "Latest Technology",
    description: "State-of-the-art equipment for precise and efficient treatment."
  },
  {
    title: "High Success Rate",
    description: "Proven track record of successful root canal treatments and satisfied patients."
  }
]

export default RootCanal 