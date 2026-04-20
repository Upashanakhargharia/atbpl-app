import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero contact">
        <div className="container page-hero-content"></div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2>
                Get in<br/>
                Touch with
              </h2>
              <h3>Andhra Tennis Ball
                Premier League</h3>

              <p className="desc">
                Join our club, or simply have a question, our team is always
                available to assist you. Connect with us today and be part of
                the growing padel community.
              </p>

              <div className="info-cards">
                <div className="info-card">
                  <span className="info-icon">
                    <img src="/images/call.jpg" alt="Phone icon" />
                  </span>
                  <div>
                    <strong>Phone Number</strong>
                    <p>7901 233 535</p>
                  </div>
                </div>

                <div className="info-card">
                  <span className="info-icon">
                    <img src="/images/message.jpg" alt="Email icon" />
                  </span>
                  <div>
                    <strong>Email Address</strong>
                    <p>info@atbpl.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-wrap">
              {submitted ? (
                <div className="form-success">
                  <span className="success-icon">✅</span>
                  <h3>Message Sent!</h3>
                  <p>
                    Thank you for reaching out. We'll get back to you within 24
                    hours.
                  </p>
                  <button
                    className="btn-register"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3>Send Us a Message</h3>

                  <p className="form-top-text">
                    Have questions, booking inquiries, or feedback? Fill out the
                    form below and our team will respond within 24 hours.
                  </p>

                  <div className="contact-form-grid">
                    <div className="form-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Your Email"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone"
                        value={form.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject">Your Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Your Subject"
                        value={form.subject}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="form-group full-width">
                      <label htmlFor="message">Messages</label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        placeholder="Your Message"
                        value={form.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <button type="submit" className="contact-submit-btn">
                    <span>Send Messages</span>
                    <span className="contact-submit-arrow">
                      <img src="/images/arrow.png" alt="Arrow icon" />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}