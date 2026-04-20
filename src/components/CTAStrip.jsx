import { Link } from "react-router-dom";
export default function CTAStrip() {
  return (
    <section className="big-league-section">
      <div className="big-league-container">
        <div className="big-league-content">
          <p className="small-text">Your Shot at the</p>
          <h2>BIG LEAGUE START</h2>
          <p className="desc-cta">
            Don't miss the most exciting TD Tennis Ball cricket tournament of this season.
            Register now to showcase your talent before your dream turns into another
            opportunity lost to the next bigger cricket hero.
          </p>
        <Link to="/about-atbpl" className="learn-btn">
  LEARN MORE
</Link>
        </div>
      </div>
    </section>
  )
}