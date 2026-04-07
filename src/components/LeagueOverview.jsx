export default function LeagueOverview() {
  const highlights = [
    {
      title: "Association",
      image: "/images/association.png",
      alt: "Hands joined together representing association",
      text: "ATBPL is a proud endeavor in association with the Andhra Pradesh Tennis Ball Association.",
    },
    {
      title: "Organized By",
      image: "/images/organised-by.png",
      alt: "Batsman playing tennis ball cricket",
      text: "This biggest-ever tournament is meticulously managed under the guidance of Icon Sports Pvt. Ltd.",
    },
    {
      title: "Our Goal",
      image: "/images/our-goal.png",
      alt: "People celebrating a shared goal",
      text: "To give deserving tennis ball cricket players a genuine platform to showcase their skills and earn recognition and financial rewards.",
    },
  ];

  return (
    <section className="league-overview">
      <div className="league-shell">
        <div className="league-hero">
          <div className="league-hero__content">
            <div className="league-hero__left">
              <h2 className="league-title">
                Welcome<br/>
                to the ATBPL
                <span>Andhra Tennis Ball Premier League</span>
              </h2>
            </div>

            <div className="league-hero__right">
              <p>
                A revolutionary initiative dedicated to transforming the
                landscape of tennis ball cricket and providing a grand stage for
                hidden talent across Andhra Pradesh.
              </p>
              <p>
                <strong>ATBPL is more than just a tournament.</strong>
              </p>
              <p>
                It is a mission to identify, nurture, and propel talented
                tennis ball cricket players to professional heights.
              </p>
            </div>
          </div>

          <div className="league-banner">
            <img
              src="/images/about-ban.png"
              alt="Tennis ball cricket match in progress"
            />
          </div>
        </div>

        <div className="league-powerhouse">
          <div className="league-heading-wrap">
            <h2 className="league-heading">The Vision & Powerhouse</h2>
          </div>

          <div className="league-cards">
            {highlights.map((item, index) => (
              <article className="league-card" key={index}>
                <div className="league-card__image">
                  <img src={item.image} alt={item.alt} />
                </div>
                <div className="league-card__body">
                  <h4>{item.title}</h4>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}