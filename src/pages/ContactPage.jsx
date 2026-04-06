import { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Replace with your actual form submission logic (e.g. API call)
    console.log('Form submitted:', form)
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="overlay"></div>
        <div className="container page-hero-content">
          <p className="small-title">Get in touch</p>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">

          {/* Info cards */}
          <div className="contact-info">
            <h2>Reach Out to ATBPL</h2>
            <p className="desc">
              Whether you're interested in registering, buying a franchise, media
              partnerships, or just have a question — our team is here to help.
            </p>

            <div className="info-cards">
              <div className="info-card">
                <span className="info-icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>Icon Sports, Andhra Pradesh, India</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">📧</span>
                <div>
                  <strong>Email</strong>
                  <p>info@atbpl.in</p>
                </div>
              </div>
              <div className="info-card">
                <span className="info-icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 98765 43210</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap">
            {submitted ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button className="btn-register" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <h3>Send us a Message</h3>

                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
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
                    placeholder="your@email.com"
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
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    placeholder="Tell us how we can help..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-register contact-submit">
                  Send Message →
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

      <Footer />
    </>
  )
}