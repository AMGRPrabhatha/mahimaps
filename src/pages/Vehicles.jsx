import React, { useState } from 'react';
import ScrollIndicator from '../components/ScrollIndicator';
import AnimatedSection from '../components/AnimatedSection';
import './Vehicles.css';

const fleet = [
  {
    id: 'mini-car',
    name: 'Mini Car',
    image: '/assets/images/mini-car.webp',
    tag: 'Compact',
    seats: '2-3 passengers',
    bags: '2 bags',
    transmission: 'Automatic / Manual',
    bestFor: 'Airport runs and short city rides',
    accent: 'teal'
  },
  {
    id: 'sedan',
    name: 'Sedan',
    image: '/assets/images/sedan.webp',
    tag: 'Popular',
    seats: '3-4 passengers',
    bags: '3 bags',
    transmission: 'Automatic',
    bestFor: 'Couples and business comfort',
    accent: 'blue'
  },
  {
    id: 'mini-van',
    name: 'Mini Van',
    image: '/assets/images/mini-van.webp',
    tag: 'Family',
    seats: '5-7 passengers',
    bags: '5 bags',
    transmission: 'Automatic',
    bestFor: 'Family tours and extra luggage',
    accent: 'amber'
  },
  {
    id: 'high-roof',
    name: 'High Roof Van',
    image: '/assets/images/high-roof.webp',
    tag: 'Group',
    seats: '8-12 passengers',
    bags: '8+ bags',
    transmission: 'Automatic',
    bestFor: 'Large groups and island tours',
    accent: 'navy'
  }
];

function Vehicles() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: '', message: '' });

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedback({ type: '', message: '' });
    let timeoutId;

    const formData = new FormData(e.target);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      flight: formData.get('flight'),
      pickupDate: formData.get('pickup-date'),
      pickupTime: formData.get('pickup-time'),
      adults: formData.get('adults'),
      children: formData.get('children'),
      vehicleType: formData.get('vehicleType'),
      pickupLocation: formData.get('pickup-location'),
      dropoffLocation: formData.get('dropoff-location'),
      message: formData.get('message')
    };

    try {
      const controller = new AbortController();
      timeoutId = setTimeout(() => controller.abort(), 25000);

      const response = await fetch('/api/book-taxi', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        signal: controller.signal
      });
      clearTimeout(timeoutId);

      const contentType = response.headers.get('content-type') || '';
      const result = contentType.includes('application/json')
        ? await response.json()
        : { success: false, message: 'Server returned an unexpected response format.' };

      if (response.ok && result.success) {
        setFeedback({ type: 'success', message: result.message || 'Booking request sent successfully! We will contact you soon.' });
        e.target.reset();
      } else {
        setFeedback({ type: 'error', message: result.message || 'Failed to send booking request. Please try again.' });
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.name === 'AbortError') {
        setFeedback({ type: 'error', message: 'Request timed out. Please check mail server settings and try again.' });
      } else {
        setFeedback({ type: 'error', message: 'Unable to connect to the server. Please run `npm run server` and try again.' });
      }
    } finally {
      if (timeoutId) clearTimeout(timeoutId);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="vehicles-page-redesign">
      <AnimatedSection className="vehicles-hero-redesign">
        <div className="container vehicles-hero-inner">
          <p className="vehicles-kicker">Premium Fleet in Sri Lanka</p>
          <h1>Choose the Right Ride for Every Route</h1>
          <p>
            From airport pickup to full island tours, pick a vehicle that matches your group size,
            luggage, and comfort level.
          </p>
          <div className="vehicles-hero-actions">
            <a href="#booking" className="vehicle-btn primary">Book a Vehicle</a>
            <a href="#fleet" className="vehicle-btn outline">View Fleet</a>
          </div>
        </div>
        <ScrollIndicator />
      </AnimatedSection>

      <AnimatedSection className="vehicles-fleet-redesign" id="fleet" delay={0.15}>
        <div className="container">
          <div className="vehicles-section-head">
            <h2>Our Vehicle Collection</h2>
            <p>
              Small, medium, and large options with experienced chauffeurs. Every option is ready
              for transfers, day plans, and multi-day tours.
            </p>
          </div>

          <div className="vehicles-fleet-grid">
            {fleet.map((item) => (
              <article className="vehicle-card" key={item.id}>
                <div className="vehicle-image-wrap">
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span className={`vehicle-chip ${item.accent}`}>{item.tag}</span>
                </div>
                <div className="vehicle-card-body">
                  <h3>{item.name}</h3>
                  <ul>
                    <li><i className="fas fa-user-friends" aria-hidden="true"></i>{item.seats}</li>
                    <li><i className="fas fa-suitcase" aria-hidden="true"></i>{item.bags}</li>
                    <li><i className="fas fa-cog" aria-hidden="true"></i>{item.transmission}</li>
                    <li><i className="fas fa-map-signs" aria-hidden="true"></i>{item.bestFor}</li>
                  </ul>
                  <a href="#booking" className="vehicle-card-cta">Reserve This Ride</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="vehicles-booking-redesign" id="booking" delay={0.2}>
        <div className="container vehicles-booking-layout">
          <div className="vehicles-booking-content">
            <p className="booking-kicker">Quick Booking</p>
            <h2>Send Your Ride Plan</h2>
            <p>
              Share your trip details once and we will confirm the best vehicle with pricing quickly.
              Custom routes and multi-stop rides are supported.
            </p>
            <div className="booking-contact-list">
              <p><i className="fas fa-phone"></i> +94 74 359 2570</p>
              <p><i className="fas fa-envelope"></i> mahimapsinfo@gmail.com</p>
              <p><i className="fas fa-clock"></i> Available 24/7 for support</p>
            </div>
          </div>

          <div className="booking-form-card">
            <form className="taxi-booking-form-modern" id="taxiBookingForm" onSubmit={handleBookingSubmit}>
              <div className="form-grid-modern">
                <div className="form-group-modern">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" placeholder="Your full name" required />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" placeholder="your@email.com" required />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="flight">Flight Number</label>
                  <input type="text" id="flight" name="flight" placeholder="e.g., UL 504" />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="pickup-date">Pickup Date *</label>
                  <input type="date" id="pickup-date" name="pickup-date" required />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="pickup-time">Pickup Time *</label>
                  <input type="time" id="pickup-time" name="pickup-time" required />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="adults">Adults *</label>
                  <select id="adults" name="adults" required>
                    <option value="">Select number</option>
                    <option value="1">1 Adult</option>
                    <option value="2">2 Adults</option>
                    <option value="3">3 Adults</option>
                    <option value="4">4 Adults</option>
                    <option value="5">5 Adults</option>
                    <option value="6">6 Adults</option>
                    <option value="7">7 Adults</option>
                    <option value="8">8+ Adults</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="children">Children</label>
                  <select id="children" name="children">
                    <option value="0">No Children</option>
                    <option value="1">1 Child</option>
                    <option value="2">2 Children</option>
                    <option value="3">3 Children</option>
                    <option value="4">4 Children</option>
                    <option value="5">5+ Children</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="vehicle-type">Vehicle Type *</label>
                  <select id="vehicle-type" name="vehicleType" required>
                    <option value="">Select vehicle type</option>
                    <option value="mini-car">Mini Car (2-3 passengers)</option>
                    <option value="sedan">Sedan (3-4 passengers)</option>
                    <option value="mini-van">Mini Van (5-7 passengers)</option>
                    <option value="high-roof">High Roof Van (8-12 passengers)</option>
                  </select>
                </div>

                <div className="form-group-modern">
                  <label htmlFor="pickup-location">Pickup Location *</label>
                  <input type="text" id="pickup-location" name="pickup-location" placeholder="e.g., Colombo Airport" required />
                </div>

                <div className="form-group-modern">
                  <label htmlFor="dropoff-location">Drop-off Location *</label>
                  <input type="text" id="dropoff-location" name="dropoff-location" placeholder="e.g., Galle Fort Hotel" required />
                </div>

                <div className="form-group-modern full">
                  <label htmlFor="message">Special Requests</label>
                  <textarea id="message" name="message" placeholder="Any special requirements, luggage details, or additional information..."></textarea>
                </div>
              </div>

              <button type="submit" className="btn-submit-modern" id="submitBtn" disabled={isSubmitting}>
                <span id="btnText">{isSubmitting ? 'Sending...' : 'Book Now'}</span>
                {!isSubmitting && (
                  <svg id="btnIcon" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {isSubmitting && (
                  <span id="btnSpinner" className="spinner" style={{ display: 'inline-block' }}>⟳</span>
                )}
              </button>

              {feedback.message && (
                <div id="formFeedback" className={`form-feedback ${feedback.type}`} style={{ display: 'block' }}>
                  <div className="feedback-content">
                    <span className="feedback-icon">{feedback.type === 'success' ? 'SUCCESS:' : 'ERROR:'}</span>
                    <span className="feedback-message"> {feedback.message}</span>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Vehicles;
