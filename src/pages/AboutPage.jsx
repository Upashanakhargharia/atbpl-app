import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="overlay"></div>
        <div className="container page-hero-content">
          <p className="small-title">Learn more</p>
          <h1>About Us</h1>
          <p>The story behind ATBPL and our mission</p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-league">
        <div className="about-container">
          <div className="about-image">
            <img src="/images/cricket-play.png" alt="Cricket player" />
          </div>
          <div className="about-content">
            <p className="small-title">Our Mission</p>
            <h2>WHO WE ARE</h2>
            <p className="desc">
              The Andhra Tennis Ball Premier League (ATBPL) is a revolutionary initiative
              dedicated to transforming the landscape of tennis ball cricket across
              Andhra Pradesh.
            </p>
            <h3>Our Vision</h3>
            <p className="desc">
              We believe every talented cricketer deserves a stage. ATBPL bridges
              the gap between grassroots cricket and professional recognition by
              providing a structured, transparent, and competitive platform.
            </p>
            <div className="date-boxes">
              <div className="date-item">
                <strong>500+</strong>
                <span>Players</span>
              </div>
              <div className="date-item">
                <strong>12+</strong>
                <span>Teams</span>
              </div>
              <div className="date-item">
                <strong>2027</strong>
                <span>Season</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="values-section">
        <div className="values-container">
          <h2 className="values-heading">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🏏</div>
              <h3>Fair Play</h3>
              <p>Every match is governed by strict rules ensuring equal opportunity for all teams and players.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Talent First</h3>
              <p>We scout, nurture, and elevate talent from every corner of Andhra Pradesh.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community</h3>
              <p>Building a cricket community that supports, inspires, and grows together every season.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🏆</div>
              <h3>Excellence</h3>
              <p>Setting the highest standards in organisation, sportsmanship, and professional development.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}