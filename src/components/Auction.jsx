const rewards = [
  {
    amount: '₹ 25,000/-',
    category: 'A Category Price',
    desc: 'Our academy has successfully completed several one-day leagues with over 100 registered and active tournaments.',
  },
  {
    amount: '₹ 10,000/-',
    category: 'B Category Price',
    desc: 'Our academy has successfully completed one-day leagues with over 100 registered and active tournaments.',
  },
  {
    amount: '₹ 5,000/-',
    category: 'C Category Price',
    desc: 'Our academy has successfully completed one-day leagues with over 100 registered and active tournaments.',
  },
]

export default function Auction() {
  return (
    <section className="auction-section">
      <div className="auction-container">

        {/* Top row: title / player image / description */}
        <div className="auction-top">
          <div className="auction-title">
            <h2>The<br />Grand Auction<br />&amp; Rewards</h2>
          </div>

          <div className="auction-player">
            <img src="/images/sport.png" alt="Cricket player" />
          </div>

          <div className="auction-content">
            <p>
              From beginners to future pros, our league is designed for every age and skill level.
              Join our well-structured format and train under experienced coaches.
            </p>
            <a href="#" className="contact-btn">
              Contact Now
              <img src="/images/arrow.png" alt="arrow" />
            </a>
          </div>
        </div>

        {/* Wide banner image */}
        <div className="auction-image">
          <img src="/images/auction.png" alt="Cricket match action" />
        </div>

        {/* Reward cards */}
        <div className="reward-grid">
          {rewards.map((r) => (
            <div key={r.category} className="reward-card">
              <h3>{r.amount}</h3>
              <h4>{r.category}</h4>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}