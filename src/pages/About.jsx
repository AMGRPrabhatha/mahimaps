import React, { useState } from 'react';
import ScrollIndicator from '../components/ScrollIndicator';
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
    },
    {
      question: "What types of vehicles do you offer?",
      answer: "Our fleet includes compact Mini Cars, spacious Sedans, 7-seater Mini Vans, and 12-seater High Roof Vans to accommodate any group size."
    },
    {
      question: "Do you offer multi-day island tours?",
      answer: "Yes, we specialize in multi-day itineraries that cover popular destinations like Sigiriya, Kandy, Ella, and the Southern coast."
    },
    {
      question: "How can I pay for my booking?",
      answer: "We accept cash payments in local currency (LKR) or major foreign currencies (USD/EUR/GBP) at the time of your journey."
    }
  ];

  const feedbacks = [
    {
      name: "Emma R.",
      country: "United Kingdom",
      title: "Perfectly planned island route",
      message: "From airport pickup to our final beach stop, everything was on time and stress-free. Our driver suggested great local spots we would have missed.",
      rating: 5
    },
    {
      name: "Nimal P.",
      country: "Sri Lanka",
      title: "Very professional team",
      message: "Clear communication, clean vehicle, and fair pricing. The itinerary was adjusted quickly when our plans changed, which helped a lot.",
      rating: 5
    },
    {
      name: "Sofia M.",
      country: "Italy",
      title: "Safe and comfortable travel",
      message: "As a family with kids, comfort and safety mattered most. Mahi Maps delivered both and made our round trip smooth across multiple cities.",
      rating: 5
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
        <ScrollIndicator />
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
              <img src="/assets/images/about1.jpg" alt="Scenic tour in Sri Lanka" className="tall" />
              <img src="/assets/images/about2.jpg" alt="Sigiriya destination" />
              <img src="/assets/images/about3.jpg" alt="Mirissa beach adventure" />
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

      <AnimatedSection className="about-faq" id="faq-section" delay={0.2}>
        <div className="container">
          <div className="faq-showcase">
            <aside className="faq-visual-card">
              <div className="faq-visual-overlay">
                <p className="faq-visual-kicker">Common Questions</p>
                <h2>Everything You Need to Know</h2>
                <p>Quick answers for planning a smooth Sri Lanka journey with Mahi Maps.</p>
                <Link to="/contact" className="faq-visual-link">
                  <i className="fas fa-plus"></i>
                  <span>Talk to Our Team</span>
                </Link>
              </div>
            </aside>

            <div className="faq-accordion-card">
              <div className="faq-accordion-list">
                {faqs.map((faq, index) => (
                  <article key={index} className={`faq-accordion-item ${activeFaq === index ? 'active' : ''}`}>
                    <button
                      type="button"
                      className="faq-accordion-question"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={activeFaq === index}
                    >
                      <span>{faq.question}</span>
                      <i className={`fas ${activeFaq === index ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                    </button>
                    <div className="faq-accordion-answer" style={{ maxHeight: activeFaq === index ? '260px' : '0' }}>
                      <p>{faq.answer}</p>
                    </div>
                  </article>
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

      <AnimatedSection className="about-feedback" delay={0.2}>
        <div className="container">
          <div className="about-feedback-head">
            <p className="section-kicker">Traveler Feedback</p>
            <h2>What Our Guests Say</h2>
            <p>Real feedback from travelers who explored Sri Lanka with Mahi Maps.</p>
          </div>

          <div className="about-feedback-grid">
            {feedbacks.map((item, index) => (
              <article key={index} className="feedback-card">
                <div className="feedback-top">
                  <div className="feedback-avatar">{item.name.charAt(0)}</div>
                  <div className="feedback-person">
                    <strong>{item.name}</strong>
                    <span>{item.country}</span>
                  </div>
                  <div className="feedback-rating" aria-label={`${item.rating} star rating`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <i key={i} className="fas fa-star"></i>
                    ))}
                  </div>
                </div>
                <h3>{item.title}</h3>
                <p>{item.message}</p>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default About;
