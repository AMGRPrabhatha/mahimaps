import React, { useState } from 'react';
import ScrollIndicator from '../components/ScrollIndicator';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Contact.css';

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 25000);

    const formData = new FormData(e.target);
    const payload = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    fetch('/api/contact-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal
    })
      .then(async (response) => {
        const contentType = response.headers.get('content-type') || '';
        const result = contentType.includes('application/json')
          ? await response.json()
          : { success: false, message: 'Server returned an unexpected response format.' };
        if (response.ok && result.success) {
          setFeedback({ type: 'success', message: result.message || 'Message sent successfully! We will contact you soon.' });
          e.target.reset();
          return;
        }
        setFeedback({ type: 'error', message: result.message || 'Failed to send your message. Please try again.' });
      })
      .catch((error) => {
        if (error.name === 'AbortError') {
          setFeedback({ type: 'error', message: 'Request timed out. Please check mail server settings and try again.' });
        } else {
          setFeedback({ type: 'error', message: 'Unable to connect to the server. Please run `npm run server` and try again.' });
        }
      })
      .finally(() => {
        clearTimeout(timeoutId);
        setIsSubmitting(false);
      });
  };

  return (
    <div className="contact-page">
      <AnimatedSection className="contact-hero" style={{ backgroundImage: "url('/assets/images/contacthero.jpg')" }}>
        <div className="container hero-ref-content">
          <p className="hero-ref-kicker animate-fade-in">Get In Touch</p>
          <h1 className="hero-ref-title animate-slide-up-delay-1">Let's Plan Your <span className="accent">Journey</span></h1>
          <p className="hero-ref-desc animate-slide-up-delay-2">If you have any questions, feel free to get in touch via phone, text, email, or our contact form.</p>
          <div className="hero-ref-actions animate-fade-in-delay-3">
            <Link to="/vehicles#booking" className="hero-ref-btn primary">Book a Ride</Link>
            <a href="#send-your-ride-plan" className="hero-ref-btn outline">Send Message</a>
          </div>
        </div>
        <ScrollIndicator />
      </AnimatedSection>

      <AnimatedSection className="contact-modern-main" id="send-your-ride-plan" delay={0.2}>
        <div className="container">
          <div className="contact-head">
            <div>
              <p className="contact-head-kicker">Contact Mahi Maps</p>
              <h2>Talk to Our Team and Plan with Confidence</h2>
              <p>Tell us your dates, route, and travel style. We will help you choose the best vehicle and itinerary for a smooth Sri Lanka experience.</p>
            </div>
            <div className="contact-head-stats">
              <div className="contact-stat-card">
                <strong>24/7</strong>
                <span>Support</span>
              </div>
              <div className="contact-stat-card">
                <strong>150+</strong>
                <span>Destinations</span>
              </div>
              <div className="contact-stat-card">
                <strong>5000+</strong>
                <span>Travelers</span>
              </div>
            </div>
          </div>

          <div className="contact-shell">
            <div className="panel-card contact-form-panel">
              <p className="panel-kicker">Send Message</p>
              <h3 className="panel-title">Request Booking or Ask Anything</h3>
              <p className="panel-sub">Complete the form and our team will contact you shortly with the best travel options.</p>

              <form id="contactForm" className="contact-form-grid" onSubmit={handleContactSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" type="text" name="name" placeholder="Enter your full name" required />
                  </div>
                  <div className="contact-field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" placeholder="+94 7X XXX XXXX" required />
                  </div>
                </div>
                <div className="contact-field">
                  <label htmlFor="email">Email Address</label>
                  <input id="email" type="email" name="email" placeholder="you@example.com" required />
                </div>
                <div className="contact-field">
                  <label htmlFor="message">Trip Details</label>
                  <textarea id="message" name="message" placeholder="Share your travel dates, pickup location, and preferred destinations." required></textarea>
                </div>
                <button type="submit" className="contact-submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {feedback.message && (
                  <p className={`contact-form-feedback ${feedback.type}`}>{feedback.message}</p>
                )}
              </form>
            </div>

            <div className="contact-side-wrap">
              <div className="panel-card info-panel">
                <p className="panel-kicker">Contact Information</p>
                <h3 className="panel-title">Reach Us Directly</h3>
                <div className="info-grid">
                  <div className="info-line">
                    <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+94743592570">+94 74 359 2570</a>
                    </div>
                  </div>
                  <div className="info-line">
                    <div className="info-icon"><i className="fas fa-envelope"></i></div>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:mahimapsinfo@gmail.com">mahimapsinfo@gmail.com</a>
                    </div>
                  </div>
                  <div className="info-line">
                    <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                    <div>
                      <strong>Address</strong>
                      <p>Galle, Rathgama, Sri Lanka</p>
                    </div>
                  </div>
                  <div className="info-line">
                    <div className="info-icon"><i className="fab fa-whatsapp"></i></div>
                    <div>
                      <strong>WhatsApp</strong>
                      <a href="https://wa.me/94743592570" target="_blank" rel="noreferrer">Chat with us now</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="panel-card hours-panel">
                <p className="panel-kicker">Availability</p>
                <h3 className="panel-title">Business Hours</h3>
                <div className="hours-list">
                  <div className="hours-row">
                    <span>Monday - Friday</span>
                    <strong>9:00 AM - 8:00 PM</strong>
                  </div>
                  <div className="hours-row">
                    <span>Saturday</span>
                    <strong>9:00 AM - 6:00 PM</strong>
                  </div>
                  <div className="hours-row">
                    <span>Sunday</span>
                    <strong>9:00 AM - 5:00 PM</strong>
                  </div>
                  <div className="hours-row">
                    <span>Urgent Assistance</span>
                    <strong>24/7 via WhatsApp</strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="contact-map-modern" delay={0.2}>
        <div className="container">
          <div className="map-card">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4046288.5440673437!2d78.0430654!3d7.873053999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae2593cf65a1e9d%3A0xe13da4b400e2d38c!2sSri%20Lanka!5e0!3m2!1sen!2slk!4v1707177600000!5m2!1sen!2slk"
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map"></iframe>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Contact;
