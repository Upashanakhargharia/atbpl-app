import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Affiliated from '../components/Affiliated'
import LeagueOverview from '../components/LeagueOverview'
import CoreTeam from '../components/CoreTeam'


export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero about">
        <div className="overlay"></div>
        <div className="container page-hero-content">
          <h1>Andhra
            <br/>TENNIS BALL
            <br/>Premier League </h1>
        </div>
      </section>
      <LeagueOverview/>
      <CoreTeam />
      <section className="about-highlight-banner">
  <div className="about-highlight-overlay">
    <div className="about-highlight-content">
      <p>
        <strong>ATBPL</strong> is committed to fostering a culture of
        professional tennis ball cricket, creating new career pathways, and
        celebrating the passion for the sport in Andhra Pradesh. Join us in
        this exciting journey.
      </p>
    </div>
  </div>
</section>
      <Affiliated />
      <Footer />
    </>
  )
}