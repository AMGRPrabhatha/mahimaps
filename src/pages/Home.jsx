import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import './Home.css';

function Home() {
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pickup = formData.get('pickupLocation');
    const drop = formData.get('dropLocation');
    const date = formData.get('transferDate');
    const passengers = formData.get('passengerCount');
    
    const message = `Hello Mahi Maps, I would like to book a transfer:\n\nPickup: ${pickup}\nDrop-off: ${drop}\nDate: ${date}\nPassengers: ${passengers}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/94743592570?text=${encodedMessage}`, '_blank');
  };

  const routeContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const routeItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <div className="home-shell">
      <AnimatedSection className="home-hero-modern">
        <div className="home-hero-content hero-ref-content">
          {/* Ready for an Unforgettable Sri Lanka Journey? */}
          {/* <p className="hero-whatsapp-top animate-fade-in-delay">WhatsApp: <a href="https://wa.me/94743592570" target="_blank" rel="noreferrer">+94 74 359 2570</a></p> */}
          
          <h1 className="home-hero-title animate-slide-up-delay-1">
            Comfortable <span className="accent">Transfers</span><br />
            Around Sri Lanka
          </h1>
          
          <p className="home-hero-desc animate-slide-up-delay-2">
            Whether you need a quick airport pickup, a direct transfer to the beach, or a fully guided island tour, our modern fleet and experienced drivers ensure a safe journey.
          </p>
          
          <div className="home-hero-actions animate-fade-in-delay-3">
            <a href="#quick-booking" className="hero-ref-btn primary">Quick Booking</a>
            <Link to="/tours" className="hero-ref-btn outline">Explore Tour Packages</Link>
          </div>
        </div>

        {/* <div className="scroll-indicator-modern">
          <div className="line"></div>
          Scroll
        </div> */}
      </AnimatedSection>

      {/*
      <div className="top-metrics">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-item">
              <strong>98%</strong>
              <span>5-Star Reviews</span>
            </div>
            <div className="metric-item">
              <strong>24/7</strong>
              <span>Airport Transfers</span>
            </div>
            <div className="metric-item">
              <strong>15+</strong>
              <span>Modern Vehicles</span>
            </div>
            <div className="metric-item">
              <strong>Island</strong>
              <span>Wide Coverage</span>
            </div>
          </div>
        </div>
      </div>
      */}
      <AnimatedSection className="home-section smart-way-section" delay={0.2}>
        <div className="container">
          <div className="smart-way-grid">
            <div className="smart-way-content">
              <div className="section-head-home left-aligned">
                <p className="kicker">Why Travel With Us</p>
                <h2>The Smarter Way to See Sri Lanka</h2>
                <p>Skip the stress of public transport. From sedans to large vans, we provide private, air-conditioned comfort to any destination.</p>
              </div>

              <div className="why-choose-grid-modern">
                <div className="why-choose-card">
                  <div className="why-icon-box"><i className="fas fa-plane-arrival"></i></div>
                  <div className="why-text">
                    <h3>Reliable Airport Pickups</h3>
                    <p>Punctual arrivals for a stress-free start.</p>
                  </div>
                </div>
                <div className="why-choose-card">
                  <div className="why-icon-box"><i className="fas fa-money-bill-wave"></i></div>
                  <div className="why-text">
                    <h3>No Hidden Charges</h3>
                    <p>Transparent pricing, always.</p>
                  </div>
                </div>
                <div className="why-choose-card">
                  <div className="why-icon-box"><i className="fas fa-map-marked-alt"></i></div>
                  <div className="why-text">
                    <h3>Drivers Who Know the Routes</h3>
                    <p>Local expertise for safe travels.</p>
                  </div>
                </div>
                <div className="why-choose-card">
                  <div className="why-icon-box"><i className="fas fa-shield-alt"></i></div>
                  <div className="why-text">
                    <h3>Safe & Well-Maintained Vehicles</h3>
                    <p>Premium comfort on every journey.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="smart-way-visual">
              <div className="smart-visual-card">
                <img src="/assets/images/tour-hero.webp" alt="Sri Lanka Route Highlights" className="smart-visual-img" />
                <div className="smart-visual-overlay">
                  <div className="overlay-badge">
                    <i className="fas fa-map-pin"></i> Island-Wide
                  </div>
                  <h3>Your Journey, Perfected</h3>
                  <p>Experience the beauty of Sri Lanka with our premium fleet and expert drivers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section home-intro-section" delay={0.2}>
        <div className="intro-watermark">mahi maps</div>
        <div className="container intro-container">
          <h2>Welcome to Mahi Maps</h2>
          <p className="intro-quote">"Your Ultimate Travel Partner in Sri Lanka"</p>
          <p className="intro-text">
            Experience the true beauty of Sri Lanka with our premium transportation and tour services. 
            Whether you are planning a family holiday, a romantic getaway, or an adventurous solo trip, 
            Mahi Maps offers customized journeys tailored to your interests. Relax in our comfortable vehicles 
            while our expert drivers navigate the island's most stunning routes.
          </p>
          <p className="intro-signature">– The Mahi Maps Team –</p>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section fleet-snapshot" delay={0.2}>
        <div className="container">
          <div className="section-head-home">
            <p className="kicker">Our Vehicles</p>
            <h2>Find Your Perfect Ride</h2>
            <p>From affordable sedans for couples to spacious KDH vans for family groups, we have the right vehicle for your journey.</p>
          </div>

          <div className="fleet-grid-home">
            <Link to="/vehicles" className="fleet-card-home">
              <div className="fleet-img-box">
                <img src="/assets/images/mini-car.webp" alt="Mini Car" />
                <span className="fleet-chip teal">Compact</span>
              </div>
              <div className="fleet-card-body">
                <h3>Mini Car</h3>
                <ul className="fleet-list-home">
                  <li><i className="fas fa-user-friends"></i>2-3 passengers</li>
                  <li><i className="fas fa-suitcase"></i>2 bags</li>
                  <li><i className="fas fa-cog"></i>Automatic / Manual</li>
                  <li><i className="fas fa-map-signs"></i>Airport runs and short city rides</li>
                </ul>
                <span className="fleet-reserve-btn">Reserve This Ride</span>
              </div>
            </Link>

            <Link to="/vehicles" className="fleet-card-home">
              <div className="fleet-img-box">
                <img src="/assets/images/sedan.webp" alt="Sedan" />
                <span className="fleet-chip blue">Popular</span>
              </div>
              <div className="fleet-card-body">
                <h3>Sedan</h3>
                <ul className="fleet-list-home">
                  <li><i className="fas fa-user-friends"></i>3-4 passengers</li>
                  <li><i className="fas fa-suitcase"></i>3 bags</li>
                  <li><i className="fas fa-cog"></i>Automatic</li>
                  <li><i className="fas fa-map-signs"></i>Couples and business comfort</li>
                </ul>
                <span className="fleet-reserve-btn">Reserve This Ride</span>
              </div>
            </Link>

            <Link to="/vehicles" className="fleet-card-home">
              <div className="fleet-img-box">
                <img src="/assets/images/mini-van.webp" alt="Mini Van" />
                <span className="fleet-chip amber">Family</span>
              </div>
              <div className="fleet-card-body">
                <h3>Mini Van</h3>
                <ul className="fleet-list-home">
                  <li><i className="fas fa-user-friends"></i>5-7 passengers</li>
                  <li><i className="fas fa-suitcase"></i>5 bags</li>
                  <li><i className="fas fa-cog"></i>Automatic</li>
                  <li><i className="fas fa-map-signs"></i>Family tours and extra luggage</li>
                </ul>
                <span className="fleet-reserve-btn">Reserve This Ride</span>
              </div>
            </Link>

            <Link to="/vehicles" className="fleet-card-home">
              <div className="fleet-img-box">
                <img src="/assets/images/high-roof.webp" alt="High Roof Van" />
                <span className="fleet-chip navy">Group</span>
              </div>
              <div className="fleet-card-body">
                <h3>High Roof Van</h3>
                <ul className="fleet-list-home">
                  <li><i className="fas fa-user-friends"></i>8-12 passengers</li>
                  <li><i className="fas fa-suitcase"></i>8+ bags</li>
                  <li><i className="fas fa-cog"></i>Automatic</li>
                  <li><i className="fas fa-map-signs"></i>Large groups and island tours</li>
                </ul>
                <span className="fleet-reserve-btn">Reserve This Ride</span>
              </div>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section modern-routes-section" delay={0.2}>
        <div className="container">
          <div className="section-head-home center-aligned">
            <p className="kicker">Popular Routes</p>
            <h2>Island Transfers Made Easy</h2>
            <p>Direct trips to Sri Lanka's top destinations. Prices depend on vehicle type and exact location.</p>
          </div>

          <motion.div 
            className="modern-routes-board"
            variants={routeContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20Airport%20to%20Galle/Unawatuna" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/airport.jpg" alt="Airport" />
                  </div>
                  <span className="route-name">Airport</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/galle.jpg" alt="Galle Fort" />
                  </div>
                  <span className="route-name">Galle / Unawatuna</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>

            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20Airport%20to%20Mirissa" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/airport.jpg" alt="Airport" />
                  </div>
                  <span className="route-name">Airport</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/mirissa-beach.webp" alt="Mirissa Beach" />
                  </div>
                  <span className="route-name">Mirissa / Weligama</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>

            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20Colombo%20to%20Kandy" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/colombo.webp" alt="Colombo" />
                  </div>
                  <span className="route-name">Colombo</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/kandy-temple.webp" alt="Kandy Temple" />
                  </div>
                  <span className="route-name">Kandy</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>

            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20Colombo%20to%20Ella" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/colombo.webp" alt="Colombo" />
                  </div>
                  <span className="route-name">Colombo</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/ella-nine-arch.webp" alt="Ella Nine Arch" />
                  </div>
                  <span className="route-name">Ella</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>

            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20South%20Coast%20to%20Yala" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/galle.jpg" alt="South Coast" />
                  </div>
                  <span className="route-name">South Coast</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/yala-national-park.webp" alt="Yala Safari" />
                  </div>
                  <span className="route-name">Yala Safari</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>

            <motion.a variants={routeItemVariants} href="https://wa.me/94743592570?text=I'd%20like%20a%20price%20for%20Airport%20to%20Sigiriya" className="modern-route-item" target="_blank" rel="noreferrer">
              <div className="route-locations">
                <div className="route-point origin">
                  <div className="route-image-circle">
                    <img src="/assets/images/airport.jpg" alt="Airport" />
                  </div>
                  <span className="route-name">Airport</span>
                </div>
                <div className="route-connector">
                  <div className="connector-line"></div>
                  <i className="fas fa-taxi moving-taxi"></i>
                </div>
                <div className="route-point destination">
                  <div className="route-image-circle">
                    <img src="/assets/images/sigiriya-fortress.webp" alt="Sigiriya" />
                  </div>
                  <span className="route-name">Sigiriya</span>
                </div>
              </div>
              <div className="route-action">
                <span className="cta-text">Plan this transfer</span>
                <i className="fas fa-chevron-right"></i>
              </div>
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section" delay={0.2}>
        <div className="container">
          <div className="section-head-home text-center" style={{ margin: '0 auto 3rem', textAlign: 'center' }}>
            <p className="kicker">How It Works</p>
            <h2>Simple Booking Process</h2>
          </div>

          <div className="workflow-grid text-center">
            <div className="workflow-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="step-no">1</div>
              <h3>Send Your Details</h3>
              <p>Tell us your pickup spot, drop-off location, date, and passenger count via WhatsApp or the booking form.</p>
            </div>
            <div className="workflow-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="step-no">2</div>
              <h3>Get the Price</h3>
              <p>We'll reply quickly with a clear, fixed price based on your requirements and the best vehicle for you.</p>
            </div>
            <div className="workflow-step" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div className="step-no">3</div>
              <h3>Enjoy the Ride</h3>
              <p>Your driver will be there on time. Relax in air-conditioned comfort as we take you to your destination.</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section transfer-booking" id="quick-booking" delay={0.2}>
        <div className="container transfer-booking-wrap">
          <article className="transfer-copy">
            <p className="kicker">Fast Tourist Booking</p>
            <h2>Book Your Transfer</h2>
            <p>Get a quick response and price directly on WhatsApp. This is the fastest way for tourists to book a private transfer in Sri Lanka.</p>
            <ul className="transfer-meta" style={{ listStyle: 'none', padding: 0 }}>
              <li><i className="fas fa-phone"></i> WhatsApp: +94 74 359 2570</li>
              <li><i className="fas fa-clock"></i> Fast replies for airport and city transfers</li>
              <li><i className="fas fa-globe-asia"></i> Islandwide service for routes and tours</li>
            </ul>
          </article>

          <form className="transfer-form" onSubmit={handleBookingSubmit}>
            <div className="transfer-grid">
              <div className="transfer-field">
                <label htmlFor="pickupLocation">Pickup Location</label>
                <input id="pickupLocation" name="pickupLocation" type="text" placeholder="e.g. Colombo Airport" required />
              </div>
              <div className="transfer-field">
                <label htmlFor="dropLocation">Drop Location</label>
                <input id="dropLocation" name="dropLocation" type="text" placeholder="e.g. Mirissa" required />
              </div>
              <div className="transfer-field">
                <label htmlFor="transferDate">Date</label>
                <input id="transferDate" name="transferDate" type="date" required />
              </div>
              <div className="transfer-field">
                <label htmlFor="passengerCount">Number of Passengers</label>
                <select id="passengerCount" name="passengerCount" required>
                  <option value="">Select passengers</option>
                  <option>1-2 Passengers</option>
                  <option>3-4 Passengers</option>
                  <option>5-7 Passengers</option>
                  <option>8-12 Passengers</option>
                </select>
              </div>
              <div className="transfer-field full">
                <p className="transfer-whatsapp-note">📱 Book Now on WhatsApp</p>
                <button className="transfer-whatsapp-btn" type="submit">Get Price &amp; Book Now</button>
                <p className="transfer-whatsapp-direct">Need instant help? Chat directly on WhatsApp:
                  <a href="https://wa.me/94743592570" target="_blank" rel="noreferrer">+94 74 359 2570</a>
                </p>
              </div>
            </div>
          </form>
        </div>
      </AnimatedSection>

      <AnimatedSection className="home-section home-bottom-cta" delay={0.2}>
        <div className="container">
          <div className="cta-card">
            <p className="cta-kicker">Start Your Plan</p>
            <h2>Ready for an Unforgettable Sri Lanka Journey?</h2>
            <p>Choose your package, reserve your vehicle, and let our team handle the road while you enjoy the experience.</p>
            <div className="home-hero-actions">
              <Link to="/tours" className="hero-ref-btn primary">View Tour Packages</Link>
              <Link to="/contact" className="hero-ref-btn outline">Talk to Us</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Home;
