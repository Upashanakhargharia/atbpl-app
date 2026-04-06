import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import CTAStrip from '../components/CTAStrip'
import Teams from '../components/Teams'
import Auction from '../components/Auction'
import Affiliated from '../components/Affiliated'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CTAStrip />
      <Teams />
      <Auction />
      <Affiliated />
      <Footer />
    </>
  )
}