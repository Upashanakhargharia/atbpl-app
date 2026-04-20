import { Link } from "react-router-dom";
const BroadcastCTA = ({ sectionTitle, learnMoreUrl = "#" }) => {
  return (
       <section className="broadcast">
      <div className="container">
        {/* Broadcast CTA */}
        <div className="broadcast-cta">
          <div className="cta-left">
            <h3>Watch Live on<br />Broadcasting Partner</h3>
            <Link to="/about-atbpl" className="learn-more-btn">
            LEARN MORE
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BroadcastCTA;