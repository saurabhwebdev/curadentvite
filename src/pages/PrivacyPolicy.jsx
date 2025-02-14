import { motion } from 'framer-motion'
import { Button } from "../components/ui/button"
import SEO from '../components/SEO'

const PrivacyPolicy = () => {
  return (
    <>
      <SEO
        title="Privacy Policy | Curadent"
        description="Learn about how Curadent handles and protects your personal information. Our privacy policy outlines our commitment to your data security and privacy."
        keywords="privacy policy, data protection, patient privacy, dental clinic privacy, medical data security"
      />
      
      <div className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="text-muted-foreground mb-8">Last updated: February 14, 2024</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              At Curadent, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
              disclose, and safeguard your information when you visit our website or receive our dental services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-medium mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 mb-6">
              <li>Name, email address, and phone number</li>
              <li>Medical and dental history</li>
              <li>Insurance information</li>
              <li>Treatment records and X-rays</li>
              <li>Payment information</li>
            </ul>

            <h3 className="text-xl font-medium mb-3">Technical Information</h3>
            <ul className="list-disc pl-6">
              <li>IP address and browser information</li>
              <li>Device information</li>
              <li>Cookies and usage data</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <ul className="list-disc pl-6">
              <li>Provide and improve our dental services</li>
              <li>Communicate with you about appointments and treatments</li>
              <li>Process payments and insurance claims</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
              <li>Improve our website and services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share your 
              information with:
            </p>
            <ul className="list-disc pl-6">
              <li>Healthcare providers involved in your treatment</li>
              <li>Insurance companies for claims processing</li>
              <li>Service providers who assist our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Encryption of sensitive data</li>
              <li>Secure storage systems</li>
              <li>Access controls and authentication</li>
              <li>Regular security assessments</li>
              <li>Staff training on privacy practices</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="list-disc pl-6">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
              <li>File a complaint with regulatory authorities</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4">
              <p>Email: privacy@curadent.in</p>
              <p>Phone: +91 91081 61850</p>
              <p>Address: #301, First floor, 2nd Main Road, East of NGEF Layout, Kasturi Nagar, Bengaluru</p>
            </div>
          </section>
        </motion.div>
      </div>
    </>
  )
}

export default PrivacyPolicy