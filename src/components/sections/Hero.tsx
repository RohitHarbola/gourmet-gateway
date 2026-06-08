// export default function Hero() {
//   return (
//     <section className="relative h-screen min-h-[900px] overflow-hidden">
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80')",
//         }}
//       />

//       <div className="absolute inset-0 bg-black/55" />

//       <div className="container-custom relative z-10 flex h-full items-center">
//         <div className="max-w-5xl">

//           <span className="eyebrow">
//             BSE LISTED · SCRIP CODE 506134
//           </span>

//           <h1 className="display-xl mt-6 text-white">
//             Where
//             <br />
//             Culinary
//             <br />
//             Craft Meets
//             <br />
//             Commerce
//           </h1>

//           <p className="mt-8 max-w-xl text-lg text-white/75">
//             A listed food & beverage conglomerate managing
//             iconic brands across India, Sri Lanka and Maldives.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <button className="bg-[#B8965A] px-8 py-4 text-sm uppercase tracking-[0.2em]">
//               Explore Brands
//             </button>

//             <button className="border border-white/30 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white">
//               Investor Relations
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Floating Stats Card */}

//       <div className="absolute bottom-10 right-10 hidden lg:block">
//         <div className="grid grid-cols-2 gap-8 bg-white/10 backdrop-blur-xl p-8 border border-white/20">

//           <div>
//             <h3 className="text-4xl text-white">4+</h3>
//             <p className="text-white/70 text-sm">
//               Brands
//             </p>
//           </div>

//           <div>
//             <h3 className="text-4xl text-white">200+</h3>
//             <p className="text-white/70 text-sm">
//               Outlets
//             </p>
//           </div>

//           <div>
//             <h3 className="text-4xl text-white">3</h3>
//             <p className="text-white/70 text-sm">
//               Countries
//             </p>
//           </div>

//           <div>
//             <h3 className="text-4xl text-white">24</h3>
//             <p className="text-white/70 text-sm">
//               Years
//             </p>
//           </div>

//         </div>
//       </div>

//       {/* Scroll Indicator */}

//       <div className="absolute bottom-10 left-10 hidden md:block">
//         <div className="flex items-center gap-3 text-white/70">
//           <div className="h-[60px] w-[1px] bg-white/40" />
//           <span className="uppercase tracking-[0.3em] text-xs">
//             Scroll
//           </span>
//         </div>
//       </div>
//     </section>
//   );
// }


// // hero.tsx
// export default function Hero() {
//   return (
//     <section className="relative h-screen min-h-[900px] overflow-hidden">
//       {/* Background Image */}
//       <div
//         className="absolute inset-0 bg-cover bg-center"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=80')",
//         }}
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/50" />

//       {/* Top Right Info - Weather & Date */}
//       <div className="absolute top-28 right-10 z-10 hidden lg:block text-right">
//         <p className="text-white/80 text-sm tracking-wide">
//           28°C Mostly cloudy
//         </p>
//         <p className="text-white/60 text-xs tracking-wider mt-1">
//           ENG 07-06-2026
//         </p>
//       </div>

//       {/* Main Content */}
//       <div className="container-custom relative z-10 flex h-full items-center">
//         <div className="max-w-5xl">
//           <span className="text-[#B8965A] text-sm tracking-[0.3em] uppercase font-light">
//             BSE LISTED · SCRIP CODE 506134
//           </span>

//           <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mt-6 leading-[1.1]">
//             Where
//             <br />
//             Culinary
//             <br />
//             Craft Meets
//             <br />
//             Commerce
//           </h1>

//           <p className="mt-8 max-w-xl text-white/80 text-lg leading-relaxed">
//             A listed food & beverage conglomerate managing iconic brands across India, Sri Lanka, and Maldives — from specialty coffee to Pan Asian dining.
//           </p>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <button className="bg-[#B8965A] px-8 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-[#a07d4a] transition">
//               EXPLORE OUR BRANDS
//             </button>
//             <button className="border border-white/40 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white hover:bg-white/10 transition">
//               INVESTOR RELATIONS
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Stats Card - Bottom Left as per image */}
//       <div className="absolute bottom-10 left-10 z-10 hidden lg:block">
//         <div className="grid grid-cols-4 gap-12 bg-black/40 backdrop-blur-md px-8 py-6 border-l-4 border-[#B8965A]">
//           <div>
//             <h3 className="text-3xl font-bold text-white">4+</h3>
//             <p className="text-white/60 text-xs uppercase tracking-wide mt-1">
//               ICONIC BRANDS
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-white">3</h3>
//             <p className="text-white/60 text-xs uppercase tracking-wide mt-1">
//               COUNTRIES
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-white">200+</h3>
//             <p className="text-white/60 text-xs uppercase tracking-wide mt-1">
//               OUTLETS NATIONWIDE
//             </p>
//           </div>
//           <div>
//             <h3 className="text-3xl font-bold text-white">24+</h3>
//             <p className="text-white/60 text-xs uppercase tracking-wide mt-1">
//               YR HERITAGE SINCE 2000
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator - Right side as per image */}
//       <div className="absolute bottom-10 right-10 z-10 hidden md:block">
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-white/50 text-[10px] uppercase tracking-[0.3em] writing-vertical">
//             SCROLL
//           </span>
//           <div className="w-[1px] h-16 bg-white/30" />
//         </div>
//       </div>
//     </section>
//   );
// }
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
          
          <div className="hero-buttons">
            <Link 
              href="#brands" 
              className="hero-btn-primary"
            >
              Explore Our Brands
            </Link>
            <Link 
              href="#investors" 
              className="hero-btn-secondary"
            >
              Investor Relations
            </Link>
             {/* Scroll Indicator */}
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