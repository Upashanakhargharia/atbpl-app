const BroadcastCTA = ({ sectionTitle, learnMoreUrl = "#" }) => {
  return (
       <section className="broadcast">
      <div className="container">
        {/* Broadcast CTA */}
        <div className="broadcast-cta">
          <div className="cta-left">
            <h3>Watch Live on<br />Broadcasting Partner</h3>
            <a href="#" className="learn-more-btn">LEARN MORE</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BroadcastCTA;