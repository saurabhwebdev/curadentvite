import { motion } from 'framer-motion'
import { GraduationCap, Medal, Star, Trophy } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import SEO from '../components/SEO'

const Team = () => {
  return (
    <>
      <SEO
        title="Our Team | Expert Dentists at Curadent Bengaluru"
        description="Meet our team of experienced and qualified dental professionals at Curadent. Our experts are committed to providing you with the highest quality dental care in Bengaluru."
        keywords="curadent dentists, dental experts Bengaluru, dental specialists, best dentists Bengaluru, dental team"
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
            <h1 className="text-5xl font-bold mb-4 text-white">Meet Our Expert Team</h1>
            <p className="text-xl text-white/80">
              Dedicated professionals committed to your dental health and beautiful smiles
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        {/* Team Members */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-lg transition-all overflow-hidden">
                  <CardHeader className="relative pb-0">
                    <div className="w-full h-64 overflow-hidden rounded-t-lg">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <CardTitle className="mt-4 text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <p className="text-muted-foreground mb-4">{member.description}</p>
                    <div className="flex justify-center gap-4">
                      {member.achievements.map((achievement, i) => (
                        <div 
                          key={i}
                          className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                          title={achievement.title}
                        >
                          {achievement.icon}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Team Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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
                      {stat.icon}
                    </div>
                    <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                    <CardDescription>{stat.label}</CardDescription>
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

const teamMembers = [
  {
    name: "Dr. Kritilaxmi Jha",
    role: "Founder & Clinic Head",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=kritilaxmi",
    description: "MDS - Prosthodontics with 10+ years of experience in Aesthetic dentistry, Implants & Full Mouth Rehabilitation & Dentures",
    achievements: [
      { icon: <Trophy className="w-5 h-5 text-primary" weight="duotone" />, title: "Resource Person at ILAMED" },
      { icon: <GraduationCap className="w-5 h-5 text-primary" weight="duotone" />, title: "MDS Prosthodontics" },
      { icon: <Medal className="w-5 h-5 text-primary" weight="duotone" />, title: "Attached to PD Hinduja Sindhi Hospital & HCG" }
    ]
  },
  {
    name: "Dr. J. Raghunand Sindhe",
    role: "Consultant, Implantologist",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=raghunand",
    description: "MDS - Oral Medicine & Radiology with 15+ years specializing in Dental Implants & Dental Radiology and Medicine and Oral Surgery",
    achievements: [
      { icon: <Trophy className="w-5 h-5 text-primary" weight="duotone" />, title: "Fellowship in Implantology" },
      { icon: <GraduationCap className="w-5 h-5 text-primary" weight="duotone" />, title: "Pursuing PHD" },
      { icon: <Medal className="w-5 h-5 text-primary" weight="duotone" />, title: "Convener IDA Bengaluru Chapter" }
    ]
  },
  {
    name: "Dr. Manjunath",
    role: "Oral & Maxillofacial Surgeon",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=manjunath",
    description: "MDS - Oral & Maxillofacial Surgery with 12+ years specializing in Cranio-Maxillofacial Surgery & Oral Onco-Surgery",
    achievements: [
      { icon: <Trophy className="w-5 h-5 text-primary" weight="duotone" />, title: "Trauma Management Expert" },
      { icon: <GraduationCap className="w-5 h-5 text-primary" weight="duotone" />, title: "MDS Oral & Maxillofacial Surgery" },
      { icon: <Medal className="w-5 h-5 text-primary" weight="duotone" />, title: "Dental Disimpaction Expert" }
    ]
  }
]

const stats = [
  {
    icon: <Trophy className="w-6 h-6 text-primary" weight="duotone" />,
    value: "15+",
    label: "Years Combined Experience"
  },
  {
    icon: <Star className="w-6 h-6 text-primary" weight="duotone" />,
    value: "50+",
    label: "Awards & Recognition"
  },
  {
    icon: <GraduationCap className="w-6 h-6 text-primary" weight="duotone" />,
    value: "100+",
    label: "Training Hours Yearly"
  },
  {
    icon: <Medal className="w-6 h-6 text-primary" weight="duotone" />,
    value: "25+",
    label: "Specializations"
  }
]

export default Team 