import { useState } from "react";

export default function CoreTeam() {
  const [showAllMembers, setShowAllMembers] = useState(false);

  const teamMembers = [
    {
      name: "WCM Kiran Paul",
      role: "Chairman, Atbpl",
      desc: "Pastor & President mission of War Of Carmel Ministries",
      image: "/images/img-7.png",
    },
    {
      name: "M Praneeth",
      role: "CEO, atbpl",
      desc: "Ex - Ranji Trophy Player",
      image: "/images/img-8.png",
    },
    {
      name: "K V Subbi Reddy",
      role: "Director, Atbpl",
      desc: "Chairman, Sri bhaskar group of schools",
      image: "/images/img-9.png",
    },
    {
      name: "Dr. David Raju Chitturi",
      role: "Director, atbpl",
      desc: "Chairman, miracle engineering group of companies & Miracle Foundation",
      image: "/images/img-10.png",
    },

    // Repeated placeholders for now, total 11 members
    {
      name: "WCM Kiran Paul",
      role: "Chairman, Atbpl",
      desc: "Pastor & President mission of War Of Carmel Ministries",
      image: "/images/img-7.png",
    },
    {
      name: "M Praneeth",
      role: "CEO, atbpl",
      desc: "Ex - Ranji Trophy Player",
      image: "/images/img-8.png",
    },
    {
      name: "K V Subbi Reddy",
      role: "Director, Atbpl",
      desc: "Chairman, Sri bhaskar group of schools",
      image: "/images/img-9.png",
    },
    {
      name: "Dr. David Raju Chitturi",
      role: "Director, atbpl",
      desc: "Chairman, miracle engineering group of companies & Miracle Foundation",
      image: "/images/img-10.png",
    },
    {
      name: "WCM Kiran Paul",
      role: "Chairman, Atbpl",
      desc: "Pastor & President mission of War Of Carmel Ministries",
      image: "/images/img-7.png",
    },
    {
      name: "M Praneeth",
      role: "CEO, atbpl",
      desc: "Ex - Ranji Trophy Player",
      image: "/images/img-8.png",
    },
    {
      name: "K V Subbi Reddy",
      role: "Director, Atbpl",
      desc: "Chairman, Sri bhaskar group of schools",
      image: "/images/img-9.png",
    },
  ];

  const visibleMembers = showAllMembers
    ? teamMembers
    : teamMembers.slice(0, 4);

  return (
    <section className="core-team-section">
      <div className="core-team-container">
        <div className="core-team-layout">
          <div className="core-team-left">
            <div className="core-team-heading-wrap">
              <h2 className="core-team-title">
                Our
                <span>Core Team</span>
              </h2>

              <p className="core-team-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book.
              </p>
            </div>

            <div className="core-team-feature-image">
              <img
                src="/images/core-team-cricket.png"
                alt="Core team cricket celebration"
              />
            </div>
          </div>

          <div className="core-team-right">
            {visibleMembers.map((member, index) => (
              <article className="team-member-card" key={index}>
                <div className="team-member-image">
                  <img src={member.image} alt={member.name} />
                </div>

                <div className="team-member-content">
                  <h3>{member.name}</h3>
                  <h4>{member.role}</h4>
                  <p>{member.desc}</p>
                </div>
              </article>
            ))}

            {teamMembers.length > 4 && (
              <button
                type="button"
                className="team-members-toggle"
                onClick={() => setShowAllMembers(!showAllMembers)}
                aria-label={
                  showAllMembers
                    ? "Show fewer team members"
                    : "Show all team members"
                }
              >
                <span className={`team-arrow ${showAllMembers ? "open" : ""}`}>
                  &#8964;
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}