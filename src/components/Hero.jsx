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
          Lorem Ipsum is simply dummy text of the<br />
          printing and typesetting industry. Lorem Ipsum has been the<br />
          industry's standard dummy text ever since the 1500s.
        </p>

        <a href="#" className="register-btn">
          <span className="arrow">→</span>
          <span>Register Now</span>
        </a>
      </div>
    </section>
  )
}