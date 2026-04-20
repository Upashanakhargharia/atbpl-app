const rewards = [
  {
    amount: '₹ 25,000/-',
    category: 'A Category Price',
    desc: 'Top-tier players competing at the highest level, offering elite performance, strong match impact, and maximum recognition in the league.',
  },
  {
    amount: '₹ 10,000/-',
    category: 'B Category Price',
    desc: 'Skilled players competing consistently, delivering solid performances, contributing to team success, and gaining recognition in the league',
  },
  {
    amount: '₹ 5,000/-',
    category: 'C Category Price',
    desc: 'Emerging players building their skills, gaining valuable match experience, contributing to team efforts, and growing within the league.'  },
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
              Be part of an exciting player auction and compete for attractive rewards. Our league is
designed for all skill levels, offering a structured format, competitive matches, and
opportunities to showcase your talent on a bigger stage.
            </p>
            <a href="/contact" className="contact-btn">
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