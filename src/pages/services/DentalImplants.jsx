import { Tooth, ArrowRight, Check } from '@phosphor-icons/react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import BookingModal from '@/components/BookingModal'
import SEO from '@/components/SEO'

const DentalImplants = () => {
  return (
    <>
      <SEO
        title="Dental Implant Services | Curadent"
        description="Restore your missing teeth with permanent, natural-looking dental implants at Curadent, Bengaluru's premier dental clinic."
        keywords="dental implants, tooth implants, dental surgery, missing teeth, dental restoration, implant dentist Bengaluru"
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
            <h1 className="text-5xl font-bold mb-4 text-white">Dental Implants</h1>
            <p className="text-xl text-white/80">Restore your smile with permanent, natural-looking dental implants</p>
            <div className="mt-8 flex justify-center gap-4">
              <BookingModal
                trigger={
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    Book Consultation
                  </Button>
                }
              />
              <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white/20">
                Learn More
              </Button>
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
            <h2 className="text-3xl font-bold">Our Implant Services</h2>
            <div className="grid gap-6">
              {implantServices.map((service, index) => (
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
            <h2 className="text-3xl font-bold">Benefits of Dental Implants</h2>
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
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Smile?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Schedule a consultation with our implant specialists and take the first step towards your new smile.
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

const implantServices = [
  {
    title: "Single Tooth Implants",
    description: "Perfect solution for replacing individual missing teeth with natural-looking results."
  },
  {
    title: "Multiple Tooth Implants",
    description: "Restore multiple missing teeth with implant-supported bridges or dentures."
  },
  {
    title: "Full Arch Restoration",
    description: "Complete smile restoration using All-on-4 or All-on-6 implant techniques."
  },
  {
    title: "Implant-Supported Dentures",
    description: "Secure and comfortable alternative to traditional removable dentures."
  }
]

const benefits = [
  {
    title: "Permanent Solution",
    description: "Long-lasting tooth replacement that can last a lifetime with proper care."
  },
  {
    title: "Natural Look and Feel",
    description: "Implants look, feel, and function just like natural teeth."
  },
  {
    title: "Preserve Bone Health",
    description: "Prevent bone loss and maintain facial structure by replacing tooth roots."
  },
  {
    title: "Improved Quality of Life",
    description: "Eat, speak, and smile with confidence without worrying about your teeth."
  }
]

export default DentalImplants 