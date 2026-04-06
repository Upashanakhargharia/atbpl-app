import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />

      {/* Page Hero */}
      <section className="page-hero">
        <div className="overlay"></div>
        <div className="container page-hero-content">
          <p className="small-title">Learn more</p>
          <h1>About Us</h1>
          <p>The story behind ATBPL and our mission</p>
        </div>
      </section>
      <Footer />
    </>
  )
}