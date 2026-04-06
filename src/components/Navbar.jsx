import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav-wrapper">
      <div className="navbar">

        {/* Logo */}
        <div className="nav-left">
          <Link to="/" onClick={closeMenu}>
            <img src="/images/logo.svg" alt="ATBPL logo" className="logo" />
          </Link>
        </div>

        {/* Desktop nav links */}
        <nav className={`nav-center ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={closeMenu}>Home</Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={closeMenu}>About Us</Link>
          <Link to="/" onClick={closeMenu}>About ATBPL</Link>
          <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={closeMenu}>Contact Us</Link>
        </nav>

        {/* Register button (desktop) */}
        <div className="nav-right">
          <button className="btn-register">Register Now</button>
          <img src="/images/header-logos.svg" alt="Partner logo 1" />
        </div>
        
        {/* Hamburger (mobile only) */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>

      {/* Mobile drawer overlay */}
      {menuOpen && <div className="nav-overlay" onClick={closeMenu}></div>}
    </header>
  )
}