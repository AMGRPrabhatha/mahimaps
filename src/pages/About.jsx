import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './About.css';

function About() {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFaq = (index) => {
    if (activeFaq === index) {
      setActiveFaq(null);
    } else {
      setActiveFaq(index);
    }
  };

  const faqs = [
    {
      question: "How do I book a tour?",
      answer: "Simply choose a package on our Tours page or contact us with your travel dates. We will confirm vehicle type, route, and schedule before finalizing your booking."
    },
    {
      question: "Can I customize my itinerary?",
      answer: "Yes. We can tailor stops, pacing, and destinations based on your interests, budget, and available days."
    },
    {
      question: "What is included in the tour cost?",
      answer: "Tour pricing typically includes vehicle, driver, fuel, and route assistance. Tickets, accommodation, and meals are added based on your selected package."
    },
    {
      question: "Do you provide airport transfers?",
      answer: "Yes. We provide airport pickup and drop-off services with flight tracking to keep your transfer smooth even if arrival times change."
    },
    {
      question: "Is Sri Lanka safe for travelers?",
      answer: "Sri Lanka is a welcoming destination. Our team prioritizes safe routes, responsible driving, and clear planning to ensure secure travel for all guests."
    }
  ];

  return (
    <div className="about-page">
      <AnimatedSection className="about-hero-modern">
        <div className="about-hero-inner hero-ref-content">
          {/* <p className="hero-ref-kicker animate-fade-in">About Mahi Maps</p> */}
          <h1 className="hero-ref-title animate-slide-up-delay-1">Turn Your Journey into<br />Unforgettable <span className="accent">Memories</span></h1>
          <p className="hero-ref-desc animate-slide-up-delay-2">Explore the hidden gems of Sri Lanka with a team that blends local expertise, premium comfort, and true island hospitality.</p>
          <div className="about-hero-actions animate-fade-in-delay-3">
            <Link to="/vehicles#booking" className="hero-ref-btn primary">Start Booking</Link>
            <Link to="/tours" className="hero-ref-btn outline">Explore Tours</Link>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="about-story" id="story" delay={0.2}>
        <div className="container">
          <div className="story-grid">
            <article className="story-text">
              <p className="section-kicker">Our Story</p>
              <h2>From Local Passion to Trusted Island Journeys</h2>
              <p>Mahi Maps started with one simple mission: help travelers experience Sri Lanka safely, comfortably, and authentically. What began as a small family-led operation has grown into a trusted travel partner for guests from around the world.</p>
              <p>We combine local road knowledge, transparent service, and carefully maintained vehicles to deliver journeys that feel seamless from pickup to drop-off.</p>
              <div className="story-stats">
                <div className="story-stat-item">
                  <strong>500+</strong>
                  <span>Tours Completed</span>
                </div>
                <div className="story-stat-item">
                  <strong>150+</strong>
                  <span>Destinations</span>
                </div>
                <div className="story-stat-item">
                  <strong>5000+</strong>
                  <span>Happy Travelers</span>
                </div>
              </div>
              <div className="story-links">
                <Link to="/tours" className="hero-ref-btn primary">View Tour Packages</Link>
                <Link to="/contact" className="hero-ref-btn outline" style={{ color: '#0f172a', borderColor: '#94a3b8', background: '#fff' }}>Talk to Our Team</Link>
              </div>
            </article>

            <div className="story-visual">
              <img src="/assets/images/tour-hero.webp" alt="Scenic tour in Sri Lanka" className="tall" />
              <img src="/assets/images/sigiriya-fortress.webp" alt="Sigiriya destination" />
              <img src="/assets/images/mirissa-beach.webp" alt="Mirissa beach adventure" />
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="about-values" delay={0.2}>
        <div className="container">
          <div className="values-head">
            <p className="section-kicker">Core Values</p>
            <h2>What Makes Us Different</h2>
            <p>Every trip we operate is built on reliability, flexibility, and human-first service. These principles shape every route, recommendation, and customer interaction.</p>
          </div>

          <div className="values-grid-modern">
            <article className="value-card-modern">
              <div className="value-icon-modern"><i className="fas fa-route"></i></div>
              <h3>Local Expertise</h3>
              <p>Real on-ground travel knowledge, hidden gems, and route planning tailored to your interests.</p>
            </article>
            <article className="value-card-modern">
              <div className="value-icon-modern"><i className="fas fa-shield-heart"></i></div>
              <h3>Safety First</h3>
              <p>Well-maintained vehicles and responsible driving standards to keep every journey secure.</p>
            </article>
            <article className="value-card-modern">
              <div className="value-icon-modern"><i className="fas fa-handshake-angle"></i></div>
              <h3>Transparent Service</h3>
              <p>Clear communication and fair pricing with no hidden surprises during your travel experience.</p>
            </article>
            <article className="value-card-modern">
              <div className="value-icon-modern"><i className="fas fa-headset"></i></div>
              <h3>24/7 Support</h3>
              <p>Fast support before, during, and after your trip for confidence throughout your itinerary.</p>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="about-trust" delay={0.2}>
        <div className="container">
          <div className="trust-layout">
            <div className="trust-media">
              <img src="/assets/images/friends-together.webp" alt="Travelers enjoying with Mahi Maps" />
              <div className="trust-overlay-card">
                <strong>Rated by Travelers Worldwide</strong>
                <span>Consistent service quality across airport transfers, day trips, and multi-day tours.</span>
              </div>
            </div>
            <article className="trust-copy">
              <p className="section-kicker">Why Travelers Return</p>
              <h2>Reliable Service from Arrival to Adventure</h2>
              <p>We design each trip around your schedule, comfort level, and travel style. Whether you need a relaxed coastal route or a tight multi-city itinerary, we make it smooth and stress-free.</p>
              <ul className="trust-list" style={{ listStyle: 'none', padding: 0 }}>
                <li><i className="fas fa-check-circle"></i> Personalized itineraries with flexible timing and stops</li>
                <li><i className="fas fa-check-circle"></i> Clean, modern vehicles suitable for couples, families, and groups</li>
                <li><i className="fas fa-check-circle"></i> Friendly English-speaking drivers with destination insight</li>
                <li><i className="fas fa-check-circle"></i> Fast response support through your full journey</li>
              </ul>
            </article>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="about-faq" delay={0.2}>
        <div className="container">
          <div className="faq-grid-modern">
            <aside className="faq-side">
              <p className="section-kicker">FAQs</p>
              <h2>Common Questions</h2>
              <p>If this is your first time planning a Sri Lanka trip, these answers help you book faster and travel with confidence.</p>
              <div className="faq-contact-card">
                <h3>Need a custom itinerary?</h3>
                <p>Share your trip dates and preferred destinations. We will help craft the best route for you.</p>
                <Link to="/contact" className="hero-ref-btn primary" style={{ display: 'inline-flex', minWidth: '0' }}>Contact Us</Link>
              </div>
            </aside>

            <div className="faq-list-panel">
              <div className="faq-list-modern">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item-modern ${activeFaq === index ? 'active' : ''}`}>
                    <div className="faq-question-modern" onClick={() => toggleFaq(index)}>
                      {faq.question}
                      <span className="faq-toggle-icon">
                        <i className={`fas ${activeFaq === index ? 'fa-times' : 'fa-plus'}`}></i>
                      </span>
                    </div>
                    <div className="faq-answer-modern" style={{ maxHeight: activeFaq === index ? '200px' : '0' }}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="about-cta-modern" delay={0.2}>
        <div className="container">
          <div className="about-cta-card">
            <h2>Start Planning Your Island Adventure</h2>
            <p>From airport pickups to extended round trips, Mahi Maps ensures your travel is comfortable and memorable.</p>
            <div className="about-cta-actions">
              <Link to="/tours" className="hero-ref-btn primary">View Tour Packages</Link>
              <Link to="/contact" className="hero-ref-btn outline">Contact the Team</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
