// // components/hero.tsx
// 'use client';

// import React from 'react';
// import Link from 'next/link';

// const Hero = () => {
//   return (
//     <section id="hero" aria-label="Hero section" className="hero-section">
//       {/* Background Image */}
//       <div 
//         className="hero-bg"
//         role="img" 
//         aria-label="Premium dining atmosphere"
//         style={{
//           backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80')",
//         }}
//       />
      
//       {/* Dark overlay */}
//       <div className="hero-overlay" />
      
//       {/* Noise Overlay */}
//       <div className="hero-noise" aria-hidden="true" />

//       {/* Hero Content */}
//       <div className="hero-content-wrapper">
        
//         {/* Left Section */}
//         <div className="hero-left">
//           <div className="hero-badge">
//             <span className="hero-badge-line"></span>
//             <span className="hero-badge-text">
//               BSE Listed · Scrip Code 506134
//             </span>
//           </div>
          
//           <h1 className="hero-title">
//             Where<br />
//             <em className="hero-title-em">Culinary</em>
//             <br />
//             Craft Meets<br />
//             Commerce
//           </h1>
          
//           <p className="hero-description">
//             A listed food &amp; beverage conglomerate managing iconic brands across
//             India, Sri Lanka, and Maldives — from specialty coffee to Pan Asian dining.
//           </p>
          
//           <div className="hero-buttons-wrapper">
//             <div className="hero-buttons">
//               <Link 
//                 href="/brands" 
//                 className="hero-btn-primary"
//               >
//                 Explore Our Brands
//               </Link>
//               <Link 
//                 href="/investors" 
//                 className="hero-btn-secondary"
//               >
//                 Investor Relations
//               </Link>
//             </div>
            
//             {/* Scroll Indicator - Below buttons */}
//             <div className="hero-scroll-indicator" aria-hidden="true">
//               <div className="hero-scroll-line"></div>
//               <span className="hero-scroll-text">Scroll</span>
//             </div>
//           </div>
//         </div>
        
//         {/* Right Section - Stats */}
//         <div className="hero-stats">
//           <div className="hero-stats-container">
//             {/* Stat 1 */}
//             <div className="hero-stat-item">
//               <div className="hero-stat-value">
//                 4<span className="hero-stat-plus">+</span>
//               </div>
//               <div className="hero-stat-label">Iconic Brands</div>
//             </div>
            
//             {/* Stat 2 */}
//             <div className="hero-stat-item">
//               <div className="hero-stat-value">3</div>
//               <div className="hero-stat-label">Countries</div>
//             </div>
            
//             {/* Stat 3 */}
//             <div className="hero-stat-item">
//               <div className="hero-stat-value">
//                 200<span className="hero-stat-plus">+</span>
//               </div>
//               <div className="hero-stat-label">Outlets Nationwide</div>
//             </div>
            
//             {/* Stat 4 */}
//             <div className="hero-stat-item">
//               <div className="hero-stat-value">
//                 24<span className="hero-stat-year">yr</span>
//               </div>
//               <div className="hero-stat-label">Heritage Since 2000</div>
//             </div>
//           </div>
//         </div>
//       </div>

//     </section>
//   );
// };

// export default Hero;




// components/hero.tsx
// components/hero.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <>
      <style>{`
        /* ===========================
           HERO SECTION STYLES
        =========================== */

        #hero {
          position: relative;
          height: 100vh;
          min-height: 700px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
          background: var(--c-obsidian);
        }

        .hero-bg {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse at 30% 60%, rgba(45,74,62,0.4) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(184,150,90,0.15) 0%, transparent 50%),
            linear-gradient(180deg, rgba(17,16,9,0.3) 0%, rgba(17,16,9,0.85) 100%),
            url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80') center/cover no-repeat;
        }

        .hero-noise {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--gutter) clamp(60px, 8vh, 120px);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: 0;
        }

        .hero-left {
          max-width: 680px;
          padding-right: 40px;
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 28px;
        }

        .hero-eyebrow-line {
          width: 40px;
          height: 1px;
          background: var(--c-gold);
          display: block;
          flex-shrink: 0;
        }

        .hero-eyebrow-text {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--c-gold);
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(54px, 7.5vw, 112px);
          font-weight: 300;
          line-height: 0.92;
          letter-spacing: -0.025em;
          color: var(--c-cream);
          margin-bottom: 32px;
        }

        .hero-headline em {
          font-style: italic;
          color: var(--c-gold-light);
          font-weight: 300;
        }

        .hero-subtext {
          font-family: var(--font-body);
          font-size: clamp(15px, 1.3vw, 18px);
          font-weight: 300;
          color: rgba(249,246,240,0.65);
          line-height: 1.7;
          max-width: 480px;
          margin-bottom: 44px;
        }

        .hero-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 24px;
          flex-wrap: nowrap;
          margin-bottom: 30px;
        }

        /* Buttons */
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 14px 32px;
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all var(--dur-med) var(--ease-silk);
          position: relative;
          overflow: hidden;
          text-decoration: none;
          white-space: nowrap;
        }

        .hero-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: currentColor;
          opacity: 0;
          transition: opacity var(--dur-fast);
        }

        .hero-btn:hover::after {
          opacity: 0.08;
        }

        .hero-btn-primary {
          background: var(--c-gold);
          color: var(--c-obsidian);
          border: none;
        }

        .hero-btn-primary:hover {
          background: var(--c-gold-light);
          transform: translateY(-1px);
        }

        .hero-btn-outline {
          background: transparent;
          color: var(--c-cream);
          border: 1px solid rgba(255,255,255,0.35);
        }

        .hero-btn-outline:hover {
          border-color: var(--c-gold);
          color: var(--c-gold);
        }

        /* Right / Stats */
        .hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          align-self: stretch;
        }

        .hero-stats {
          display: flex;
          flex-direction: column;
          gap: 1px;
          width: 240px;
          height: 100%;
          justify-content: flex-end;
          margin-bottom: 30px;
          margin-left: 70px;
        }

        .hero-stat {
          padding: 20px 24px;
          background: rgba(249,246,240,0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-left: 1px solid rgba(184,150,90,0.4);
          transition: background var(--dur-med);
        }

        .hero-stat:hover {
          background: rgba(249,246,240,0.09);
        }

        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 38px;
          font-weight: 300;
          color: var(--c-cream);
          line-height: 1;
          margin-bottom: 4px;
        }

        .hero-stat-num .stat-suffix {
          font-size: 20px;
        }

        .hero-stat-label {
          font-family: var(--font-body);
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--c-gold);
        }

        /* Scroll indicator */
        .hero-scroll {
          position: absolute;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          z-index: 3;
        }

        .hero-scroll-line {
          width: 1px;
          height: 48px;
          background: linear-gradient(to bottom, transparent, var(--c-gold));
          animation: heroScrollPulse 2s ease-in-out infinite;
        }

        @keyframes heroScrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1);   }
        }

        .hero-scroll-text {
          font-family: var(--font-body);
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(249,246,240,0.4);
          writing-mode: vertical-rl;
        }

        /* ===========================
           RESPONSIVE
        =========================== */
        @media (max-width: 900px) {
          .hero-content {
            grid-template-columns: 1fr;
            padding-bottom: clamp(80px, 12vh, 120px);
          }

          .hero-left {
            padding-right: 0;
          }

          .hero-right {
            justify-content: flex-start;
          }

          .hero-stats {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
          }

          .hero-stat {
            flex: 1;
            min-width: 120px;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>

      <section id="hero" aria-label="Hero section">
        {/* Background */}
        <div
          className="hero-bg"
          role="img"
          aria-label="Premium dining atmosphere"
        />

        {/* Noise Overlay */}
        <div className="hero-noise" aria-hidden="true" />

        {/* Hero Content */}
        <div className="hero-content">

          {/* Left Section */}
          <div className="hero-left">
            <div className="hero-eyebrow">
              <span className="hero-eyebrow-line" aria-hidden="true" />
              <span className="hero-eyebrow-text">
                BSE Listed · Scrip Code 506134
              </span>
            </div>

            <h1 className="hero-headline">
              Where<br />
              <em>Culinary</em><br />
              Craft Meets<br />
              Commerce
            </h1>

            <p className="hero-subtext">
              A listed food &amp; beverage conglomerate managing iconic brands across
              India, Sri Lanka, and Maldives — from specialty coffee to Pan Asian dining.
            </p>

            <div className="hero-actions">
              <Link href="/brands" className="hero-btn hero-btn-primary">
                Explore Our Brands
              </Link>
              <Link href="/investors" className="hero-btn hero-btn-outline">
                Investor Relations
              </Link>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="hero-right" aria-hidden="true">
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">
                  4<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Iconic Brands</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">3</div>
                <div className="hero-stat-label">Countries</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">
                  200<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Outlets Nationwide</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">
                  24<span className="stat-suffix">yr</span>
                </div>
                <div className="hero-stat-label">Heritage Since 2000</div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="hero-scroll" aria-hidden="true">
          <div className="hero-scroll-line" />
          <span className="hero-scroll-text">Scroll</span>
        </div>
      </section>
    </>
  );
};

export default Hero;
