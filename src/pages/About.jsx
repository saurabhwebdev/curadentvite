import { motion } from 'framer-motion'
import { Trophy, Certificate, Users, Star, Building, Calendar } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import SEO from '../components/SEO'

const About = () => {
  return (
    <>
      <SEO
        title="About Curadent | Leading Dental Clinic in Bangalore"
        description="Learn about Curadent's journey, our expert team, and our commitment to providing exceptional dental care in Bangalore. Discover our state-of-the-art facilities and patient-first approach."
        keywords="about curadent, dental clinic history, dental experts bangalore, dental clinic facilities, best dentists bangalore"
      />
      
      {/* Hero Section */}
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
            <h1 className="text-5xl font-bold mb-4 text-white">About Curadent</h1>
            <p className="text-xl text-white/80">
              A decade of excellence in dental care, serving the Bangalore community with advanced treatments and compassionate service.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        {/* Our Story */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Story</h2>
            <p className="text-lg text-muted-foreground">
              Founded in 2014, Curadent has grown from a small clinic to one of Bangalore's most trusted dental care providers. 
              Our journey is built on a foundation of excellence, innovation, and patient-centered care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      {achievement.icon}
                    </div>
                    <CardTitle>{achievement.title}</CardTitle>
                    <CardDescription>{achievement.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Mission & Values */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission & Values</h2>
            <p className="text-lg text-muted-foreground">
              We are committed to providing exceptional dental care while maintaining the highest standards of 
              professionalism, integrity, and patient comfort.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        {value.icon}
                      </div>
                      {value.title}
                    </CardTitle>
                    <CardDescription>{value.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Certifications & Affiliations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Certifications & Affiliations</h2>
            <p className="text-lg text-muted-foreground">
              Our commitment to excellence is recognized by leading dental organizations and institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Certificate className="w-6 h-6 text-primary" weight="duotone" />
                    </div>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription>{cert.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </>
  )
}

const achievements = [
  {
    icon: <Users className="w-6 h-6 text-primary" weight="duotone" />,
    title: "10,000+ Patients",
    description: "Trusted by thousands of patients for their dental care needs"
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary" weight="duotone" />,
    title: "Award-Winning Care",
    description: "Recognized for excellence in dental services and patient care"
  },
  {
    icon: <Calendar className="w-6 h-6 text-primary" weight="duotone" />,
    title: "10+ Years",
    description: "A decade of experience in providing quality dental care"
  }
]

const values = [
  {
    icon: <Star className="w-5 h-5 text-primary" weight="duotone" />,
    title: "Excellence",
    description: "We strive for excellence in every aspect of our service, from treatment to patient care."
  },
  {
    icon: <Users className="w-5 h-5 text-primary" weight="duotone" />,
    title: "Patient-First Approach",
    description: "Your comfort and well-being are our top priorities in everything we do."
  },
  {
    icon: <Certificate className="w-5 h-5 text-primary" weight="duotone" />,
    title: "Professional Ethics",
    description: "We maintain the highest standards of professional ethics and integrity."
  },
  {
    icon: <Building className="w-5 h-5 text-primary" weight="duotone" />,
    title: "Modern Facilities",
    description: "State-of-the-art equipment and facilities for the best treatment outcomes."
  }
]

const certifications = [
  {
    title: "Indian Dental Association",
    description: "Certified member of IDA, following highest dental practice standards"
  },
  {
    title: "ISO 9001:2015",
    description: "Certified for quality management systems in dental healthcare"
  },
  {
    title: "NABH Accreditation",
    description: "Accredited by National Accreditation Board for Hospitals & Healthcare"
  }
]

export default About 