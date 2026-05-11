import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import './Gallery.css';

function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [gallerySearch, setGallerySearch] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    // Destinations
    { category: 'destinations', img: '/assets/images/sigiriya-fortress.webp', title: 'Sigiriya Rock Fortress', desc: 'Ancient wonder of Sri Lanka' },
    { category: 'destinations', img: '/assets/images/mirissa-beach.webp', title: 'Mirissa Beach', desc: 'Tropical paradise' },
    { category: 'destinations', img: '/assets/images/hero-background-2.webp', title: 'Ella Hills', desc: 'Misty mountain beauty' },
    { category: 'destinations', img: '/assets/images/galle.jpg', title: 'Galle Fort', desc: 'Colonial heritage site' },
    { category: 'destinations', img: '/assets/images/ella-nine-arch.webp', title: 'Nine Arch Bridge', desc: 'Architectural marvel' },
    { category: 'destinations', img: '/assets/images/kandy-temple.webp', title: 'Temple of the Tooth', desc: 'Sacred Buddhist temple' },
    
    // Mahi Maps
    { category: 'mahi-maps', img: '/assets/tours/mahi 1.webp', title: 'Mahi Map 1', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 2.webp', title: 'Mahi Map 2', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 3.webp', title: 'Mahi Map 3', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 4.webp', title: 'Mahi Map 4', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 5.webp', title: 'Mahi Map 5', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 6.webp', title: 'Mahi Map 6', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 7.webp', title: 'Mahi Map 7', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 8.webp', title: 'Mahi Map 8', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 9.webp', title: 'Mahi Map 9', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 11.webp', title: 'Mahi Map 11', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 12.webp', title: 'Mahi Map 12', desc: 'Route details' },
    { category: 'mahi-maps', img: '/assets/tours/mahi 13.webp', title: 'Mahi Map 13', desc: 'Route details' },
    
    // Tours
    { category: 'tours', img: '/assets/images/yala-national-park.webp', title: 'Wildlife Safari', desc: 'Yala National Park' },
    { category: 'tours', img: '/assets/images/hero-background-4.webp', title: 'Tea Plantation Tour', desc: 'Hill country experience' },
    { category: 'tours', img: '/assets/images/hero-background-5.webp', title: 'Whale Watching', desc: 'Mirissa coast' },
    { category: 'tours', img: '/assets/images/ella-nine-arch.webp', title: 'Train Journey', desc: 'Kandy to Ella scenic route' },
    
    // Travelers
    { category: 'travelers', img: '/assets/images/friends-together.webp', title: 'Happy Travelers', desc: 'Making memories' },
    { category: 'travelers', img: '/assets/images/family-activities.webp', title: 'Family Adventure', desc: 'Creating lasting bonds' },
    { category: 'travelers', img: '/assets/images/unique-adventures.webp', title: 'Group Tour', desc: 'Friends exploring together' },
    { category: 'travelers', img: '/assets/images/weekend-adventures.webp', title: 'Romantic Getaway', desc: 'Couples retreat' },
    
    // More Destinations
    { category: 'destinations', img: '/assets/images/hero-background-3.webp', title: 'Unawatuna Beach', desc: 'Crystal clear waters' },
    { category: 'destinations', img: '/assets/images/yala-national-park.webp', title: 'Yala National Park', desc: 'Wildlife wonderland' }
  ];

  const filteredItems = galleryItems.filter((item) => {
    const byFilter = activeFilter === 'all' || item.category === activeFilter;
    const q = gallerySearch.trim().toLowerCase();
    const bySearch =
      q.length === 0 ||
      item.title.toLowerCase().includes(q) ||
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    return byFilter && bySearch;
  });

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    if (selectedImage) {
      document.body.classList.add('gallery-preview-open');
      window.addEventListener('keydown', onKeyDown);
    } else {
      document.body.classList.remove('gallery-preview-open');
    }

    return () => {
      document.body.classList.remove('gallery-preview-open');
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [selectedImage]);

  return (
    <div className="gallery-page">
      <AnimatedSection className="gallery-hero" style={{ backgroundImage: "url('/assets/images/gallery-hero.webp')" }}>
        <div className="container hero-ref-content">
          <p className="hero-ref-kicker animate-fade-in">Travel Stories</p>
          <h1 className="hero-ref-title animate-slide-up-delay-1">Our <span className="accent">Gallery</span></h1>
          <p className="hero-ref-desc animate-slide-up-delay-2">Moments captured from unforgettable journeys</p>
          <div className="hero-ref-actions animate-fade-in-delay-3">
            <a href="#gallery-grid" className="hero-ref-btn primary">View Moments</a>
            <Link to="/vehicles#booking" className="hero-ref-btn outline">Book a Ride</Link>
          </div>
        </div>
      </AnimatedSection>

      <section className="gallery-main" id="gallery-grid">
        <div className="container">
          <AnimatedSection className="gallery-toolbar" delay={0.15}>
            <div className="gallery-filter-head">
              <h3>Best Sri Lanka Moments</h3>
              <div className="gallery-filter-search">
                <i className="fas fa-search"></i>
                <input
                  type="text"
                  placeholder="Search destination or package"
                  value={gallerySearch}
                  onChange={(e) => setGallerySearch(e.target.value)}
                />
                <button type="button">Search</button>
              </div>
            </div>
            <div className="gallery-filters">
              <button className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`} onClick={() => setActiveFilter('all')}>All</button>
              <button className={`filter-btn ${activeFilter === 'destinations' ? 'active' : ''}`} onClick={() => setActiveFilter('destinations')}>Destinations</button>
              <button className={`filter-btn ${activeFilter === 'mahi-maps' ? 'active' : ''}`} onClick={() => setActiveFilter('mahi-maps')}>Mahi Maps</button>
              <button className={`filter-btn ${activeFilter === 'tours' ? 'active' : ''}`} onClick={() => setActiveFilter('tours')}>Tours</button>
              <button className={`filter-btn ${activeFilter === 'travelers' ? 'active' : ''}`} onClick={() => setActiveFilter('travelers')}>Happy Travels</button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="gallery-grid" delay={0.3}>
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="gallery-item"
                data-category={item.category}
                onClick={() => setSelectedImage(item)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    setSelectedImage(item);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-label={`Preview ${item.title}`}
              >
                <img src={item.img} alt={item.title} />
                <div className="gallery-overlay">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <AnimatedSection className="gallery-cta-modern" delay={0.2}>
        <div className="container">
          <div className="gallery-cta-card">
            <h2>Create Your Own Memory Collection</h2>
            <p>Plan your Sri Lanka route with our team and turn your next trip into moments worth remembering.</p>
            <div className="hero-ref-actions">
              <Link to="/vehicles#booking" className="hero-ref-btn primary">Book Your Ride</Link>
              <Link to="/contact" className="hero-ref-btn outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {selectedImage && (
        <div
          className="gallery-preview-modal"
          onClick={() => setSelectedImage(null)}
          aria-hidden="true"
        >
          <div
            className="gallery-preview-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.title}
          >
            <button
              className="gallery-preview-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close preview"
            >
              ×
            </button>
            <img src={selectedImage.img} alt={selectedImage.title} />
            <div className="gallery-preview-meta">
              <h3>{selectedImage.title}</h3>
              <p>{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;
