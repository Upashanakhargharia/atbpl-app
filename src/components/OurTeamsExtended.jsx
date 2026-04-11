export default function OurTeamsExtended() {
  const teams = [
     { name: 'Palnadu Singam', logo: '/images/singham.png' },
  { name: "Bhimavaram Raja's", logo: '/images/raja.png' },
  { name: 'Chittor Royals', logo: '/images/chitoor.png' },
  { name: 'Godavari Gangs', logo: '/images/godavari.png' },
   { name: 'Palnadu Singam', logo: '/images/singham.png' },
  { name: "Bhimavaram Raja's", logo: '/images/raja.png' },
  { name: 'Chittor Royals', logo: '/images/chitoor.png' },
  { name: 'Godavari Gangs', logo: '/images/godavari.png' },
   
  
    
  ]

  return (
    <section className="our-teams-extended-section">
      <div className="our-teams-extended-container">
        <div className="our-teams-extended-header">
          <h2>Our Teams</h2>
        </div>

        <div className="our-teams-extended-line"></div>

        <div className="our-teams-extended-grid">
          {teams.map((team, index) => (
            <div key={`${team.name}-${index}`} className="our-teams-extended-card">
              <div className="our-teams-extended-logo">
                <img src={team.logo} alt={`${team.name} logo`} />
              </div>

              <div className="our-teams-extended-name">
                {team.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}