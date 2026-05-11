import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer className="footer-modern">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand-col">
              <img src="/assets/images/mahi-logo.webp" alt="Mahi Maps" className="footer-logo" />
              <p>Travel beyond boundaries. Discover, connect, and experience the beautiful island of Sri Lanka with us.</p>
              <div className="social-links-minimal">
                <a href="https://www.facebook.com/share/1E5aVVFGKd/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/mahimaps_?igsh=MTl1eWN0dmhsMzVzcw==" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              </div>
            </div>

            <div className="footer-links-col">
              <h4>Useful Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/vehicles">Our Fleet</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className="footer-links-col">
              <h4>Get in Touch</h4>
              <ul className="contact-list">
                <li><a href="tel:+94743592570">+94 74 359 2570</a></li>
                <li><a href="https://wa.me/94743592570" target="_blank" rel="noreferrer">WhatsApp: +94 74 359 2570</a></li>
                <li><a href="mailto:mahimapsinfo@gmail.com">mahimapsinfo@gmail.com</a></li>
                <li>Galle, Rathgama, Sri Lanka</li>
              </ul>
            </div>


          </div>

          <div className="footer-bottom">
            <p>Copyright © Mahi Maps 2026. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <a href="https://wa.me/94743592570" className="whatsapp-float" target="_blank" rel="noreferrer">
        <span className="whatsapp-icon"><i className="fas fa-comment-dots"></i></span>
      </a>
    </>
  );
}

export default Footer;
