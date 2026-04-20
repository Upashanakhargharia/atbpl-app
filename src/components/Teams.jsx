const teams = [
  { name: 'Palnadu Singam', logo: '/images/singham.png' },
  { name: "Bhimavaram Raja's", logo: '/images/raja.png' },
  { name: 'Chittor Royals', logo: '/images/chitoor.png' },
  { name: 'Godavari Gangs', logo: '/images/godavari.png' },
]

export default function Teams() {
  return (
    <section className="teams-section">
      <div className="container">

        {/* Header row */}
        <div className="teams-header">
          <div>
            <h2>Our<br />Teams</h2>
          </div>
          <a href="/about-atbpl" className="view-all-btn">
            View All Teams
            <img src="/images/arrow.png" alt="arrow" />
          </a>
        </div>

        {/* Team cards grid */}
        <div className="teams-grid">
          {teams.map((team) => (
            <div key={team.name} className="team-card">
              <div className="team-logo-wrap">
                <img src={team.logo} alt={`${team.name} logo`} />
              </div>
              <div className="team-name">{team.name}</div>
            </div>
          ))}
        </div>

        {/* Broadcast CTA */}
        <div className="broadcast-cta">
          <div className="cta-left">
            <h3>Watch Live on<br />Broadcasting Partner</h3>
            <a href="#" className="learn-more-btn">LEARN MORE</a>
          </div>
        </div>

      </div>
    </section>
  )
}