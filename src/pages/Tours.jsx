import React, { useMemo, useState } from 'react';
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
    image: '/assets/images/retreat.jpg',
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
    image: '/assets/images/loop.jpg',
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
          <p className="tours-kicker">Sri Lanka Tour Packages</p>
          <h1>Best holiday deals across Sri Lanka</h1>
          <p>Compare destinations quickly, filter by travel style, and reserve the package that fits your plan.</p>
          <div className="tours-hero-cta">
            <Link to="/contact" className="hero-ref-btn primary">Plan My Tour</Link>
            <Link to="/vehicles#booking" className="hero-ref-btn outline">Book a Ride</Link>
          </div>
        </div>
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
                <div className="tour-card-image-wrap">
                  <img src={card.image} alt={card.title} />
                  <span className="tour-discount-pill">{card.discount}</span>
                  <button type="button" className="tour-fav-btn" aria-label={`Save ${card.title}`}>
                    <i className="fas fa-heart"></i>
                  </button>
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
                    <Link to="/contact" className="tour-book-btn">View Package</Link>
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
    </div>
  );
}

export default Tours;
