// components/hero.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" aria-label="Hero section" className="hero-section">
      {/* Background Image */}
      <div 
        className="hero-bg"
        role="img" 
        aria-label="Premium dining atmosphere"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80')",
        }}
      />
      
      {/* Dark overlay */}
      <div className="hero-overlay" />
      
      {/* Noise Overlay */}
      <div className="hero-noise" aria-hidden="true" />

      {/* Hero Content */}
      <div className="hero-content-wrapper">
        
        {/* Left Section */}
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-line"></span>
            <span className="hero-badge-text">
              BSE Listed · Scrip Code 506134
            </span>
          </div>
          
          <h1 className="hero-title">
            Where<br />
            <em className="hero-title-em">Culinary</em>
            <br />
            Craft Meets<br />
            Commerce
          </h1>
          
          <p className="hero-description">
            A listed food &amp; beverage conglomerate managing iconic brands across
            India, Sri Lanka, and Maldives — from specialty coffee to Pan Asian dining.
          </p>
          
          <div className="hero-buttons-wrapper">
            <div className="hero-buttons">
              <Link 
                href="/brands" 
                className="hero-btn-primary"
              >
                Explore Our Brands
              </Link>
              <Link 
                href="/investors" 
                className="hero-btn-secondary"
              >
                Investor Relations
              </Link>
            </div>
            
            {/* Scroll Indicator - Below buttons */}
            <div className="hero-scroll-indicator" aria-hidden="true">
              <div className="hero-scroll-line"></div>
              <span className="hero-scroll-text">Scroll</span>
            </div>
          </div>
        </div>
        
        {/* Right Section - Stats */}
        <div className="hero-stats">
          <div className="hero-stats-container">
            {/* Stat 1 */}
            <div className="hero-stat-item">
              <div className="hero-stat-value">
                4<span className="hero-stat-plus">+</span>
              </div>
              <div className="hero-stat-label">Iconic Brands</div>
            </div>
            
            {/* Stat 2 */}
            <div className="hero-stat-item">
              <div className="hero-stat-value">3</div>
              <div className="hero-stat-label">Countries</div>
            </div>
            
            {/* Stat 3 */}
            <div className="hero-stat-item">
              <div className="hero-stat-value">
                200<span className="hero-stat-plus">+</span>
              </div>
              <div className="hero-stat-label">Outlets Nationwide</div>
            </div>
            
            {/* Stat 4 */}
            <div className="hero-stat-item">
              <div className="hero-stat-value">
                24<span className="hero-stat-year">yr</span>
              </div>
              <div className="hero-stat-label">Heritage Since 2000</div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;