export default function Hero() {
  return (
    <section className="hero home">
      <div className="overlay"></div>
      <div className="container hero-content">
        <h1>Andhra <br /> TENNIS BALL <br /> Premier League</h1>

        <div className="arrow-banner">
          <div className="subtitle">Registration Closes on</div>
          <div className="main-date">
            15th <span className="highlight">Dec</span>
          </div>
        </div>

        <p className="text-hero">
         Step into Andhra Pradesh’s premier tennis ball cricket league and showcas<br/>
         your talent on a competitive stage. Compete, gain recognition, and be <br />
         part of a professionally organized tournament.
        </p>

        <a href="/contact" className="register-btn">
          <span className="arrow">→</span>
          <span>Register Now</span>
        </a>
      </div>
    </section>
  )
}