import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Affiliated from '../components/Affiliated'
import LeagueOverview from '../components/LeagueOverview'
import Auction from '../components/Auction'
import StrategicGoal from '../components/StrategicGoal'
import BroadcastCTA from '../components/BroadcastCTA'
import OurTeamsExtended from '../components/OurTeamsExtended'


export default function AboutATBPL() {
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
      <StrategicGoal/>
      <BroadcastCTA/>
      <Auction />
    <OurTeamsExtended />
      <Affiliated />
      <Footer />
    </>
  )
}