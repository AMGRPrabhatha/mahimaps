import React, { useMemo, useState } from 'react';
import ScrollIndicator from '../components/ScrollIndicator';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Tours.css';

const tourCards = [
  {
    id: 'sigiriya-dambulla',
    category: 'Cultural',
    title: 'Best of Sigiriya & Dambulla',
    image: '/assets/images/sigiriya-fortress.webp',
    discount: '10% off',
    duration: '4 days and 3 nights',
    feature: 'Private guide, temple and heritage access',
    season: 'Dec - Apr',
    bookBy: 'Book by 28 Aug 2026',
    rating: 4.8
  },
  {
    id: 'kandy-highlands',
    category: 'Hill Country',
    title: 'Best of Kandy Highlands',
    image: '/assets/images/kandy-temple.webp',
    discount: '10% off',
    duration: '5 days and 4 nights',
    feature: 'Temple visit, tea estate tour, cultural show',
    season: 'Jan - May',
    bookBy: 'Book by 04 Sep 2026',
    rating: 4.7
  },
  {
    id: 'ella-scenic-ride',
    category: 'Hill Country',
    title: 'Best of Ella Scenic Journey',
    image: '/assets/images/ella-nine-arch.webp',
    discount: '10% off',
    duration: '3 days and 2 nights',
    feature: 'Nine Arch Bridge, train route, viewpoints',
    season: 'Feb - Jun',
    bookBy: 'Book by 16 Sep 2026',
    rating: 4.9
  },
  {
    id: 'south-coast-escape',
    category: 'Beach',
    title: 'Best of South Coast Escape',
    image: '/assets/images/mirissa-beach.webp',
    discount: '10% off',
    duration: '5 days and 4 nights',
    feature: 'Whale watching and beach hopping included',
    season: 'Nov - Apr',
    bookBy: 'Book by 01 Oct 2026',
    rating: 4.8
  },
  {
    id: 'yala-wildlife',
    category: 'Wildlife',
    title: 'Best of Yala Wildlife Safari',
    image: '/assets/images/yala-national-park.webp',
    discount: '10% off',
    duration: '3 days and 2 nights',
    feature: 'Jeep safari and park ticket support',
    season: 'Dec - Jul',
    bookBy: 'Book by 21 Sep 2026',
    rating: 4.9
  },
  {
    id: 'galle-heritage-coast',
    category: 'Cultural',
    title: 'Best of Galle Heritage Coast',
    image: '/assets/images/galle.jpg',
    discount: '10% off',
    duration: '4 days and 3 nights',
    feature: 'Fort walk, boutique stays, coastal drive',
    season: 'All year',
    bookBy: 'Book by 30 Sep 2026',
    rating: 4.6
  },
  {
    id: 'tea-country-retreat',
    category: 'Wellness',
    title: 'Best of Tea Country Retreat',
    image: '/assets/images/Retreat.jpg',
    discount: '10% off',
    duration: '4 days and 3 nights',
    feature: 'Tea trails, cool climate, relaxed pacing',
    season: 'Jan - Jun',
    bookBy: 'Book by 12 Sep 2026',
    rating: 4.5
  },
  {
    id: 'unawatuna-leisure',
    category: 'Beach',
    title: 'Best of Unawatuna Leisure',
    image: '/assets/images/Unawatuna.jpg',
    discount: '10% off',
    duration: '4 days and 3 nights',
    feature: 'Coastal stays, sunset spots, local food',
    season: 'Nov - May',
    bookBy: 'Book by 26 Sep 2026',
    rating: 4.6
  },
  {
    id: 'airport-island-loop',
    category: 'Adventure',
    title: 'Best of Island Loop Transfer Tour',
    image: '/assets/images/Loop.jpg',
    discount: '10% off',
    duration: '7 days and 6 nights',
    feature: 'Airport pickup and multi-city route plan',
    season: 'All year',
    bookBy: 'Book by 09 Oct 2026',
    rating: 4.7
  },
  {
    id: 'family-fun-roundtrip',
    category: 'Family',
    title: 'Best of Family Round Tour',
    image: '/assets/images/family-activities.webp',
    discount: '10% off',
    duration: '6 days and 5 nights',
    feature: 'Family-friendly hotels and easy pacing',
    season: 'School holidays',
    bookBy: 'Book by 19 Sep 2026',
    rating: 4.8
  },
  {
    id: 'friends-adventure-trail',
    category: 'Adventure',
    title: 'Best of Friends Adventure Trail',
    image: '/assets/images/friends-together.webp',
    discount: '10% off',
    duration: '5 days and 4 nights',
    feature: 'Mixed beaches, hills and activity stops',
    season: 'Dec - May',
    bookBy: 'Book by 03 Oct 2026',
    rating: 4.7
  },
  {
    id: 'fully-custom-lanka',
    category: 'Custom',
    title: 'Best of Fully Customized Sri Lanka',
    image: '/assets/images/adventure.webp',
    discount: 'Tailored',
    duration: 'Flexible duration',
    feature: 'Your route, your pace, your budget',
    season: 'All year',
    bookBy: 'Book anytime',
    rating: 5.0
  }
];

const filters = ['All', 'Cultural', 'Hill Country', 'Beach', 'Wildlife', 'Adventure', 'Family', 'Wellness', 'Custom'];

function Tours() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchText, setSearchText] = useState('');
  const [selectedTour, setSelectedTour] = useState(null);

  const filteredCards = useMemo(() => {
    return tourCards.filter((card) => {
      const matchFilter = activeFilter === 'All' || card.category === activeFilter;
      const q = searchText.trim().toLowerCase();
      const matchSearch =
        q.length === 0 ||
        card.title.toLowerCase().includes(q) ||
        card.category.toLowerCase().includes(q) ||
        card.feature.toLowerCase().includes(q);

      return matchFilter && matchSearch;
    });
  }, [activeFilter, searchText]);

  return (
    <div className="tours-page-modern">
      <AnimatedSection className="tours-hero-banner">
        <div className="container tours-hero-inner">
          <p className="tours-kicker animate-fade-in">Sri Lanka Tour Packages</p>
          <h1 className="animate-slide-up-delay-1">Best holiday deals across Sri Lanka</h1>
          <p className="animate-slide-up-delay-2">Compare destinations quickly, filter by travel style, and reserve the package that fits your plan.</p>
          <div className="tours-hero-cta animate-fade-in-delay-3">
            <Link to="/contact" className="hero-ref-btn primary">Plan My Tour</Link>
            <Link to="/vehicles#booking" className="hero-ref-btn outline">Book a Ride</Link>
          </div>
        </div>
        <ScrollIndicator />
      </AnimatedSection>

      <section className="tours-deals-section">
        <div className="container">
          <div className="tours-top-row">
            <h2>Best Sri Lanka Deals</h2>
            <div className="tours-search-wrap">
              <i className="fas fa-search"></i>
              <input
                type="text"
                placeholder="Search destination or package"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
              <button type="button">Search</button>
            </div>
          </div>

          <div className="tours-filter-row">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`tour-filter-chip ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="tours-card-grid">
            {filteredCards.map((card, index) => (
              <AnimatedSection className="tour-deal-card" delay={0.06 * (index % 6)} key={card.id}>
                <div className="tour-card-clickable" onClick={() => setSelectedTour(card)} style={{cursor: 'pointer'}}>
                  <div className="tour-card-image-wrap">
                    <img src={card.image} alt={card.title} />
                    <span className="tour-discount-pill">{card.discount}</span>
                  </div>

                  <div className="tour-card-content">
                    <h3>{card.title}</h3>

                    <ul className="tour-detail-list">
                      <li><i className="fas fa-sun"></i><span>{card.duration}</span></li>
                      <li><i className="fas fa-thumbs-up"></i><span>{card.feature}</span></li>
                      <li><i className="fas fa-calendar-alt"></i><span>{card.season}</span></li>
                      <li><i className="fas fa-clock"></i><span>{card.bookBy}</span></li>
                    </ul>

                    <div className="tour-card-footer">
                      <span className="tour-rating"><i className="fas fa-star"></i> {card.rating.toFixed(1)}</span>
                      <button type="button" className="tour-book-btn">View Package</button>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {filteredCards.length === 0 && (
            <p className="no-results">No tours match your search. Try another keyword or filter.</p>
          )}
        </div>
      </section>

      {selectedTour && (
        <div className="tour-modal-overlay" onClick={() => setSelectedTour(null)}>
          <div className="tour-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="tour-modal-close" onClick={() => setSelectedTour(null)} aria-label="Close">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="tour-modal-hero">
              <img src={selectedTour.image} alt={selectedTour.title} />
              <div className="tour-modal-category">{selectedTour.category}</div>
            </div>
            <div className="tour-modal-content-wrap">
              <div className="tour-modal-header">
                <h2>{selectedTour.title}</h2>
                <div className="tour-modal-rating">
                  <i className="fas fa-star"></i> {selectedTour.rating.toFixed(1)}
                </div>
              </div>
              <div className="tour-modal-stats">
                <div className="modal-stat">
                  <i className="fas fa-clock"></i>
                  <div className="stat-text">
                    <span className="stat-label">Duration</span>
                    <span className="stat-val">{selectedTour.duration}</span>
                  </div>
                </div>
                <div className="modal-stat">
                  <i className="fas fa-calendar-check"></i>
                  <div className="stat-text">
                    <span className="stat-label">Best Season</span>
                    <span className="stat-val">{selectedTour.season}</span>
                  </div>
                </div>
              </div>
              <div className="tour-modal-desc">
                <h3>Package Highlights</h3>
                <p>{selectedTour.feature}. Experience the very best of Sri Lanka with our curated {selectedTour.category.toLowerCase()} travel package. Enjoy stress-free transport, top-rated stays, and deep local insights from our expert guides.</p>
                <ul className="modal-perks">
                  <li><i className="fas fa-check-circle"></i> Private Air-Conditioned Vehicle</li>
                  <li><i className="fas fa-check-circle"></i> English Speaking Driver/Guide</li>
                  <li><i className="fas fa-check-circle"></i> Flexible Itinerary Adjustments</li>
                  <li><i className="fas fa-check-circle"></i> 24/7 On-Trip Support</li>
                </ul>
              </div>
              <div className="tour-modal-action-bar">
                <div className="modal-price-wrap">
                  <span className="price-label">Special Offer</span>
                  <span className="price-val">{selectedTour.discount}</span>
                  <span className="price-sub">{selectedTour.bookBy}</span>
                </div>
                <Link to="/contact" className="modal-book-now">Plan This Tour</Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tours;
