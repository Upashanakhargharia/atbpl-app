import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="privacy-policy-page">
        <div className="privacy-policy-container">
          <div className="privacy-policy-header">
            <h1>Privacy Policy</h1>
            <p>
              At ATBPL, we respect your privacy and are committed to protecting
              the personal information you share with us.
            </p>
          </div>

          <div className="privacy-policy-content">
            <div className="privacy-policy-block">
              <h2>Information We Collect</h2>
              <p>
                We may collect personal information such as name, phone number,
                email address, and payment details when you register, contact
                us, or use our services.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>Use of Information</h2>
              <ul>
                <li>To provide and manage our services.</li>
                <li>To process registrations and payments.</li>
                <li>
                  To communicate important updates, offers, or service-related
                  information.
                </li>
              </ul>
            </div>

            <div className="privacy-policy-block">
              <h2>Data Security</h2>
              <p>
                We use appropriate technical and organizational measures to
                safeguard your data.
              </p>
              <p>
                All payment transactions are handled securely through trusted
                payment gateways.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>Third-Party Disclosure</h2>
              <p>
                ATBPL does not sell, trade, or rent your personal information to
                third parties, except where required for service delivery,
                payment processing, or legal compliance.
              </p>
            </div>

            <div className="privacy-policy-block">
              <h2>Contact</h2>
              <p>
                For any privacy-related concerns, please contact us at{' '}
                <a href="mailto:info@atbpl.in">info@atbpl.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}