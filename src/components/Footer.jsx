import { Link, useLocation } from 'react-router-dom'

const footerLinks = [
  // { label: 'Registration', path: '/registration' },
  { label: 'About Us', path: '/about' },
  // { label: 'App Icon', path: '/icon' },
  { label: 'Contact Us', path: '/contact' },
  // { label: 'Franchise', path: '/franchise' },
  { label: 'Terms And Conditions', path: '/terms-and-conditions' },
  // { label: 'Rulebook', path: '/rule' },
  { label: 'Registration', path: '/rule' },
  { label: 'Privacy Policy', path: '/privacy-policy' },
]

export default function Footer() {
  const location = useLocation()

  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">

          <div className="footer-cards">
            <div className="footer-card">
              <img src="/images/atbpl-foo.png" alt="ATBPL logo card" />
            </div>
            <div className="footer-card">
              <img src="/images/gully.png" alt="Gully to the Big League card" />
            </div>
          </div>

          <ul className="footer-links">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active-link' : ''}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

        </div>

        <p className="copyright">
          Copyright &copy; 2026 | All Rights Reserved | Managed by Icon Sports, Andhra Pradesh
        </p>
      </footer>
    </>
  )
}