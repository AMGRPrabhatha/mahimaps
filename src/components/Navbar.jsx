import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lightNavbar = scrolled || mobileMenuOpen;
  const bookNowTarget = '/vehicles#booking';
  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/vehicles', label: 'Vehicles' },
    { to: '/tours', label: 'Tours' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact#send-your-ride-plan', label: 'Contact' },
    { to: '/about#faq-section', label: 'FAQ' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }

    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'active' : ''} ${lightNavbar ? 'light' : ''}`} id="navbar">
        <div className="container nav-container">
          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenuLeft">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/about" className="nav-link">About Us</Link></li>
            <li><Link to="/vehicles" className="nav-link">Vehicles</Link></li>
            <li><Link to="/tours" className="nav-link">Tours</Link></li>
          </ul>

          <div className="logo nav-logo">
            <img src="/assets/images/mahi-logo.webp" alt="Mahi Maps - Travel & Tour Sri Lanka"
                className={`nav-logo-image ${lightNavbar ? 'dark-logo' : 'light-logo'}`} />
          </div>

          <div className="nav-right">
            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`} id="navMenuRight">
              <li><Link to="/gallery" className="nav-link">Gallery</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
              <li className="mobile-only-btn"><Link to={bookNowTarget} className="nav-link">Book Now</Link></li>
            </ul>
            <Link to={bookNowTarget} className="nav-link desktop-only-btn">Book Now</Link>
            <Link to="/about#faq-section" className="nav-link desktop-only-btn">FAQ</Link>
            <button 
              className={`mobile-toggle ${mobileMenuOpen ? 'active' : ''}`} 
              id="mobileToggle" 
              onClick={toggleMobileMenu}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav-overlay ${mobileMenuOpen ? 'active' : ''}`} aria-hidden={!mobileMenuOpen}>
          <div className="mobile-nav-panel">
            <div className="mobile-nav-head">
              <div className="mobile-nav-brand">MAHI MAPS</div>
              <button className="mobile-nav-close" onClick={toggleMobileMenu} aria-label="Close menu">
                ×
              </button>
            </div>

            <ul className="mobile-nav-links">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mobile-nav-footer" aria-hidden="true">
              <p className="mobile-nav-footer-title">Mahi Maps Tours</p>
              <p className="mobile-nav-footer-subtitle">EXPLORING SRI LANKA</p>
            </div>
          </div>
        </div>
    </>
  );
}

export default Navbar;
