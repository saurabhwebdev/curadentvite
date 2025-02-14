import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"
import SEO from '../components/SEO'

const TermsOfService = () => {
  return (
    <>
      <SEO
        title="Terms of Service | Curadent"
        description="Read our Terms of Service to understand the rules, guidelines, and agreements that govern the use of Curadent's services and website."
        keywords="terms of service, dental services agreement, patient terms, dental care terms, service conditions"
      />
      
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 14, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using Curadent's website and services, you agree to be bound by these Terms 
              of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">2. Service Description</h2>
            <p>
              Curadent provides dental care services including but not limited to:
            </p>
            <ul className="list-disc pl-6">
              <li>General dentistry</li>
              <li>Cosmetic dentistry</li>
              <li>Orthodontics</li>
              <li>Dental implants</li>
              <li>Root canal treatment</li>
              <li>Emergency dental care</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">3. Appointment and Cancellation Policy</h2>
            <ul className="list-disc pl-6">
              <li>Appointments must be scheduled in advance</li>
              <li>24-hour notice is required for cancellations</li>
              <li>Late cancellations may incur a fee</li>
              <li>Repeated no-shows may result in service denial</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6">
              <li>Payment is required at the time of service</li>
              <li>We accept various payment methods including cash, cards, and insurance</li>
              <li>Insurance claims are processed as a courtesy</li>
              <li>Patients are responsible for any uncovered charges</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">5. Patient Responsibilities</h2>
            <ul className="list-disc pl-6">
              <li>Provide accurate medical and dental history</li>
              <li>Follow pre and post-treatment instructions</li>
              <li>Maintain good oral hygiene</li>
              <li>Attend scheduled appointments</li>
              <li>Make timely payments</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">6. Website Use</h2>
            <ul className="list-disc pl-6">
              <li>Content is for informational purposes only</li>
              <li>No unauthorized use or reproduction of content</li>
              <li>Online booking is subject to confirmation</li>
              <li>Website availability is not guaranteed</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p>
              Curadent is not liable for any indirect, incidental, special, or consequential damages 
              resulting from the use or inability to use our services or website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Changes will be effective immediately 
              upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">9. Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us at:</p>
            <div className="mt-4">
              <p>Email: legal@curadent.in</p>
              <p>Phone: +91 91081 61850</p>
              <p>Address: #301, First floor, 2nd Main Road, East of NGEF Layout, Kasturi Nagar, Bengaluru</p>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  )
}

export default TermsOfService 