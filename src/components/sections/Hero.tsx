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
          overflow-y: auto;
          overflow-x: hidden;
          background: var(--c-obsidian);
        }

        @media (max-width: 768px) {
          #hero {
            min-height: 100svh;
            height: auto;
            align-items: flex-start;
          }
        }

        @media (max-width: 480px) {
          #hero {
            min-height: 100svh;
          }
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

        /* ── DESKTOP layout ── */
        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: var(--container);
          margin: 0 auto;
          padding: 0 var(--gutter) clamp(40px, 8vh, 120px);
          display: grid;
          grid-template-columns: 1fr auto;
          align-items: flex-end;
          gap: 0;
        }

        /* ── MOBILE layout: single column, flex, natural order ── */
        @media (max-width: 900px) {
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: stretch;
            justify-content: flex-end;
            padding: 0 20px 72px;
            min-height: 100svh;
            gap: 0;
          }
        }

        @media (max-width: 480px) {
          .hero-content {
            padding: 0 16px 64px;
          }
        }

        /* ── LEFT block ── */
        .hero-left {
          max-width: 680px;
          padding-right: 40px;
        }

        @media (max-width: 900px) {
          .hero-left {
            padding-right: 0;
            max-width: 100%;
            /* sits first naturally */
          }
        }

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        @media (max-width: 768px) {
          .hero-eyebrow {
            gap: 8px;
            margin-bottom: 12px;
          }
        }

        .hero-eyebrow-line {
          width: 30px;
          height: 1px;
          background: var(--c-gold);
          display: block;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .hero-eyebrow-line {
            width: 24px;
          }
        }

        .hero-eyebrow-text {
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--c-gold);
        }

        @media (max-width: 480px) {
          .hero-eyebrow-text {
            font-size: 9px;
            letter-spacing: 0.15em;
          }
        }

        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(40px, 7.5vw, 108px);
          font-weight: 200;
          line-height: 0.92;
          letter-spacing: -0.025em;
          color: #E1D9D1;
          margin-bottom: 16px;
        }

        @media (max-width: 900px) {
          .hero-headline {
            font-size: clamp(36px, 10vw, 64px);
            line-height: 1;
            margin-bottom: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-headline {
            font-size: clamp(34px, 11vw, 52px);
            line-height: 1.02;
            margin-bottom: 12px;
          }
        }

        .hero-headline em {
          font-style: italic;
          color: var(--c-gold-light);
          font-weight: 300;
        }

        .hero-subtext {
          font-family: var(--font-body);
          font-size: clamp(13px, 1.3vw, 18px);
          font-weight: 300;
          color: #E1D9D1;
          line-height: 1.6;
          max-width: 480px;
          margin-bottom: 0; /* spacing handled by hero-actions margin-top */
        }

        @media (max-width: 900px) {
          .hero-subtext {
            max-width: 100%;
            font-size: 14px;
            line-height: 1.55;
          }
        }

        @media (max-width: 480px) {
          .hero-subtext {
            font-size: 13px;
            line-height: 1.5;
          }
        }

        /* ── ACTIONS ── */
        .hero-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 28px;
          margin-bottom: 40px; /* desktop: no bottom spacing needed here */
        }

        @media (max-width: 900px) {
          .hero-actions {
            margin-top: 20px;
            margin-bottom: 0;
          }
        }

        @media (max-width: 480px) {
          .hero-actions {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            margin-top: 18px;
            width: 100%;
          }
        }

        /* ── BUTTONS ── */
        .hero-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 28px;
          font-family: var(--font-body);
          font-size: 11px;
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

        @media (max-width: 480px) {
          .hero-btn {
            padding: 14px 20px;
            font-size: 11px;
            width: 100%;
            text-align: center;
          }
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

        /* ── RIGHT / STATS (desktop only: absolute column beside left) ── */
        .hero-right {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
          align-self: stretch;
        }

        @media (max-width: 900px) {
          .hero-right {
            justify-content: flex-start;
            align-items: stretch;
            margin-top: 20px; /* gap between buttons and stats */
          }
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

        @media (max-width: 1024px) {
          .hero-stats {
            width: 200px;
            margin-left: 40px;
          }
        }

        @media (max-width: 900px) {
          .hero-stats {
            flex-direction: row;
            flex-wrap: wrap;
            width: 100%;
            height: auto;
            margin-left: 0;
            margin-bottom: 0;
            gap: 1px;
          }
        }

        .hero-stat {
          padding: 16px 20px;
          background: rgba(249,246,240,0.05);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-left: 1px solid rgba(184,150,90,0.4);
          transition: background var(--dur-med);
        }

        @media (max-width: 900px) {
          .hero-stat {
            flex: 1 1 calc(50% - 1px);
            padding: 14px 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-stat {
            flex: 1 1 calc(50% - 1px);
            padding: 12px 14px;
          }
        }

        .hero-stat:hover {
          background: rgba(249,246,240,0.09);
        }

        .hero-stat-num {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 300;
          color: var(--c-cream);
          line-height: 1;
          margin-bottom: 4px;
        }

        @media (max-width: 900px) {
          .hero-stat-num {
            font-size: 26px;
          }
        }

        @media (max-width: 480px) {
          .hero-stat-num {
            font-size: 22px;
          }
        }

        .hero-stat-num .stat-suffix {
          font-size: 18px;
        }

        @media (max-width: 480px) {
          .hero-stat-num .stat-suffix {
            font-size: 14px;
          }
        }

        .hero-stat-label {
          font-family: var(--font-body);
          font-size: 9px;
          font-weight: 400;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--c-gold);
        }

        @media (max-width: 900px) {
          .hero-stat-label {
            font-size: 8px;
            letter-spacing: 0.12em;
          }
        }

        @media (max-width: 480px) {
          .hero-stat-label {
            font-size: 7px;
            letter-spacing: 0.1em;
          }
        }

        /* ── SCROLL INDICATOR ── */
        .hero-scroll {
          position: absolute;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          z-index: 3;
        }

        @media (max-width: 768px) {
          .hero-scroll {
            bottom: 16px;
          }
        }

        @media (max-width: 480px) {
          .hero-scroll {
            bottom: 12px;
            gap: 4px;
          }
        }

        .hero-scroll-line {
          width: 1px;
          height: 40px;
          background: linear-gradient(to bottom, transparent, var(--c-gold));
          animation: heroScrollPulse 2s ease-in-out infinite;
        }

        @media (max-width: 768px) {
          .hero-scroll-line {
            height: 28px;
          }
        }

        @keyframes heroScrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50%       { opacity: 1;   transform: scaleY(1);   }
        }

        .hero-scroll-text {
          font-family: var(--font-body);
          font-size: 8px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(249,246,240,0.4);
          writing-mode: vertical-rl;
        }

        @media (max-width: 480px) {
          .hero-scroll-text {
            font-size: 6px;
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

          {/* Left Section — eyebrow + headline + subtext + buttons */}
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

          {/* Right Section — Stats (desktop: right column / mobile: below buttons) */}
          <div className="hero-right" aria-hidden="true">
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-num">
                  4<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Iconic Brands</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">3+</div>
                <div className="hero-stat-label">Countries</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">
                  430<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Outlets</div>
              </div>
                 <div className="hero-stat">
                <div className="hero-stat-num">
                  170+<span className="stat-suffix">+</span>
                </div>
                <div className="hero-stat-label">Cities</div>
              </div>

              <div className="hero-stat">
                <div className="hero-stat-num">
                  26<span className="stat-suffix">yr</span>
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
