import { motion } from 'framer-motion'
import { Star, Quotes, ThumbsUp, ChatCircle } from '@phosphor-icons/react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import SEO from '../components/SEO'

const Testimonials = () => {
  return (
    <>
      <SEO
        title="Patient Testimonials | Curadent Dental Clinic Bengaluru"
        description="Read what our patients say about their experience at Curadent. Real stories and reviews from people who have transformed their smiles with us."
        keywords="curadent reviews, dental clinic testimonials, patient reviews Bengaluru, dental care experience, dental clinic feedback"
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
            <h1 className="text-5xl font-bold mb-4 text-white">Patient Stories</h1>
            <p className="text-xl text-white/80">
              Real experiences from our valued patients
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container py-16">
        {/* Featured Reviews */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Reviews</h2>
            <p className="text-lg text-muted-foreground">
              See what our patients have to say about their experience at Curadent
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <img 
                          src={review.avatar} 
                          alt={review.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{review.name}</CardTitle>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i}
                              weight="fill"
                              className="w-4 h-4 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <Quotes className="w-8 h-8 text-primary/20" weight="fill" />
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{review.content}</p>
                    <p className="text-sm text-primary mt-4">{review.treatment}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Review Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="grid md:grid-cols-4 gap-8">
            {reviewStats.map((stat, index) => (
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

        {/* Video Testimonials */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Video Testimonials</h2>
            <p className="text-lg text-muted-foreground">
              Watch our patients share their transformation stories
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {videoTestimonials.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-all">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={video.embedUrl}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                    <CardDescription>{video.description}</CardDescription>
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

const featuredReviews = [
  {
    name: "Arun Kumar",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ArunKumar&backgroundColor=b6e3f4",
    content: "I had severe dental anxiety, but Dr. Sharma and her team made me feel completely at ease. The root canal treatment was painless, and the results are amazing!",
    treatment: "Root Canal Treatment"
  },
  {
    name: "Priya Reddy",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaReddy&backgroundColor=ffdfbf",
    content: "Got my braces done at Curadent, and I couldn't be happier with my new smile! The team was professional, caring, and kept me informed throughout the process.",
    treatment: "Orthodontic Treatment"
  },
  {
    name: "Rajesh Iyer",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RajeshIyer&backgroundColor=c0aede",
    content: "The dental implant procedure was smooth and the results are fantastic. Dr. Verma's expertise and attention to detail are truly commendable.",
    treatment: "Dental Implants"
  }
]

const reviewStats = [
  {
    icon: <Star className="w-6 h-6 text-primary" weight="duotone" />,
    value: "4.9/5",
    label: "Average Rating"
  },
  {
    icon: <ThumbsUp className="w-6 h-6 text-primary" weight="duotone" />,
    value: "98%",
    label: "Patient Satisfaction"
  },
  {
    icon: <ChatCircle className="w-6 h-6 text-primary" weight="duotone" />,
    value: "1000+",
    label: "Patient Reviews"
  },
  {
    icon: <Star className="w-6 h-6 text-primary" weight="duotone" />,
    value: "500+",
    label: "5-Star Reviews"
  }
]

const videoTestimonials = [
  {
    title: "Complete Smile Makeover Journey",
    description: "Watch Sarah's incredible transformation with our cosmetic dentistry services",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_1"
  },
  {
    title: "Life-Changing Dental Implants",
    description: "John shares his experience with dental implants at Curadent",
    embedUrl: "https://www.youtube.com/embed/VIDEO_ID_2"
  }
]

export default Testimonials 