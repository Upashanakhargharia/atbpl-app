export default function StrategicGoal() {
  const goalItems = [
    {
      title: "679 Mandal Trials",
      subtitle: "Mandal Net Screening trials",
      desc: "Nets Screenings across all 679 Mandals in AP. This unprecedented scale aims to find true grassroots talent. Successful players will be shortlisted and receive the Orange Ticket for the next level of qualification.",
      image: "/images/img18.png",
    },
    {
      title: "26 Districts Trials",
      subtitle: "Match Simulations Distrct trials",
      desc: "Once shortlist from yellow ticket Ticket players will be qualified for Orange Ticket District Trials. This phase is pure match simulations Green Ticket for the next level of qualification.",
      image: "/images/img19.png",
    },
    {
      title: "3 Zonal Trials",
      subtitle: "Selection Matches for the Auction",
      desc: "The final stage where players showcase their full potential, deliver top-class performances, and compete fiercely to earn a spot in the ultimate Grand Auction.",
      image: "/images/img20.png",
    },
  ]

  return (
    <section className="strategic-goal-section">
      <div className="strategic-goal-container">
        <div className="strategic-goal-header">
          <h2>GULLY TO BIG LEAGUE</h2>
          <h3>
            <span className="blue">Root Level</span>{" "}
            <span className="gray">Conspect</span>{" "}
            <span className="green">Strategic</span>{" "}
            <span className="orange">Goal</span>
          </h3>
        </div>

        <div className="strategic-goal-grid">
          {goalItems.map((item, index) => (
            <div className="strategic-goal-card" key={index}>
              <div className="strategic-goal-image">
                <img src={item.image} alt={item.title} />
              </div>

              <h4>{item.title}</h4>
              <h5>{item.subtitle}</h5>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="strategic-goal-note">
          <p>
            To give deserving players a genuine, high-impact platform to
            showcase their skills, earn widespread recognition, and secure
            substantial financial rewards.
          </p>
        </div>
      </div>
    </section>
  )
}