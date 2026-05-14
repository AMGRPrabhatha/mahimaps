import { Link } from 'react-router-dom';
import './FooterNike.css'; // Let's create a new CSS file for this specific footer

function Footer() {
  return (
    <>
      <footer className="footer-modern-nike">
        <div className="container">
          <div className="footer-top-nike">
            
            <div className="footer-links-col-nike">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/tours">Tour Packages</Link></li>
                <li><Link to="/vehicles">Vehicle Fleet</Link></li>
                <li><Link to="/gallery">Travel Gallery</Link></li>
                <li><Link to="/contact">Custom Itineraries</Link></li>
                <li><Link to="/about">Travel Guide</Link></li>
              </ul>
            </div>

            <div className="footer-links-col-nike">
              <h4>Help</h4>
              <ul>
                <li><Link to="/contact">Get Help</Link></li>
                <li><Link to="/contact">Booking Status</Link></li>
                <li><Link to="/contact">Payment Options</Link></li>
                <li><Link to="/contact">Cancellation Policy</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            <div className="footer-links-col-nike">
              <h4>Company</h4>
              <ul>
                <li><Link to="/about">About Mahi Maps</Link></li>
                <li><Link to="/about">Our Team</Link></li>
                <li><Link to="/about">Sustainability</Link></li>
                <li><Link to="/about">Customer Reviews</Link></li>
                <li><Link to="/contact">Partner With Us</Link></li>
              </ul>
            </div>

            <div className="footer-links-col-nike">
              <h4>Contact Info</h4>
              <ul>
                <li><a href="tel:+94743592570">+94 74 359 2570</a></li>
                <li><a href="https://wa.me/94743592570" target="_blank" rel="noreferrer">WhatsApp Us</a></li>
                <li><a href="mailto:mahimapsinfo@gmail.com">mahimapsinfo@gmail.com</a></li>
                <li>Galle, Sri Lanka</li>
              </ul>
            </div>
            
            <div className="footer-brand-col-nike">
               <div className="social-links-nike">
                 <a href="https://www.facebook.com/share/1E5aVVFGKd/?mibextid=wwXIfr" target="_blank" rel="noreferrer"><i className="fab fa-facebook-f"></i></a>
                 <a href="https://www.instagram.com/mahimaps_?igsh=MTl1eWN0dmhsMzVzcw==" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
               </div>
            </div>

          </div>

          <div className="footer-bottom-nike">
            <div className="footer-bottom-left">
              <i className="fas fa-map-marker-alt" style={{marginRight: '8px'}}></i> Sri Lanka
              <span style={{marginLeft: '1.5rem', color: '#7e7e7e'}}>© 2026 Mahi Maps. All rights reserved</span>
            </div>
            <div className="footer-bottom-right">
              <Link to="/">Guides</Link>
              <Link to="/">Terms of Use</Link>
              <Link to="/">Terms of Sale</Link>
              <Link to="/">Company Details</Link>
              <Link to="/">Privacy & Cookie Policy</Link>
            </div>
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
