// app/business-overview/page.tsx
import React from 'react';
import Navbar from '../../../components/layout/Navbar';
import Image from 'next/image';
import './BusinessOverview.css';

type Brand = {
  id: string;
  name: string;
  tagline: string;
  paragraphs: string[];
  website?: string;
  accent: 'gold' | 'jade' | 'cinnabar' | 'blush';
};

const brands: Brand[] = [
  {
    id: 'barista',
    name: 'Barista Coffee',
    tagline: 'Café culture, since 2000',
    paragraphs: [
      `Established in the year 2000, Barista Coffee Company is the pioneer of coffee culture
      in India. The Barista Café chain delivers a true coffee experience in a warm, friendly,
      and relaxed environment. It provides a comfortable place for people to unwind over
      interesting conversations and a hot cup of coffee. Besides India, cafés are located
      across the islands of Sri Lanka and Maldives. Our mission is to provide a delightful
      coffee experience that brings people together, making every visit a memorable one.`,
    ],
    website: 'https://www.barista.co.in/',
    accent: 'gold',
  },
  {
    id: 'kylin',
    name: 'Kylin',
    tagline: 'A gastronomic journey through Asia',
    paragraphs: [
      `Kylin offers an exquisite journey through the flavors of Asia. With a focus on
      authentic and innovative dishes, our menu is crafted to deliver a gastronomic
      experience that delights the senses. From sushi to stir-fries, Kylin brings the best
      of Asian cuisine to your table.`,
    ],
    website: 'https://kylinexperience.com/',
    accent: 'jade',
  },
  {
    id: 'wanchai',
    name: 'Wanchai',
    tagline: 'Quick-service, Pan-Asian',
    paragraphs: [
      `Wanchai brings the heart of Quick service Pan Asian cuisine to India. Our chefs
      combine traditional recipes with modern techniques to create dishes that are both
      comforting and adventurous. Whether you're craving dim sum or a hearty bowl of
      noodles, Wanchai promises a dining experience that captures the essence of Asia.`,
    ],
    accent: 'cinnabar',
  },
  {
    id: 'drizzle-and-dust',
    name: 'Drizzle & Dust',
    tagline: 'Everyday treats, made extraordinary',
    paragraphs: [
      `Indulge your sweet tooth with Drizzle & Dust, our dessert brand that transforms
      everyday treats into extraordinary delights. From decadent cakes to artisanal
      pastries, each creation is crafted with precision and passion. Drizzle & Dust is
      where dessert dreams come true.`,
    ],
    website: 'https://drizzleanddust.in/',
    accent: 'blush',
  },
];

const BusinessOverviewPage = () => {
  return (
    <div className="business-overview-page">
      <Navbar />

      {/* Main Content Section with padding to account for navbar */}
      <div className="pt-[88px] md:pt-[88px]">
        {/* Hero */}
        <section className="eo-hero">
          <div className="eo-hero-media">
            <Image
              src="/assets/businessbanner.png"
              alt="Business Overview Banner"
              fill
              className="eo-hero-image "
              priority
              quality={100}
            />
            <div className="eo-hero-scrim" aria-hidden="true" />
          </div>

          <div className="eo-hero-content">
            <span className="eo-eyebrow">Four brands, one table</span>
            {/* <h1>Business Overview</h1> */}
            <p className="eo-hero-sub">
            A portfolio of distinctive hospitality brands across coffee, Pan-Asian dining and desserts, united by a shared passion for craft and experience.
            </p>
          </div>
        </section>

        {/* Brands */}
        <section className="eo-brands">
          <div className="eo-brands-header">
            <span className="eo-eyebrow eo-eyebrow-dark">Our brands</span>
            <h2>What we run</h2>
          </div>

          <div className="eo-brand-grid">
            {brands.map((brand) => (
              <article key={brand.id} className={`eo-brand-card eo-accent-${brand.accent}`}>
                <span className="eo-brand-swatch" aria-hidden="true" />
                <div className="eo-brand-card-inner">
                  <h3>{brand.name}</h3>
                  <p className="eo-brand-tagline">{brand.tagline}</p>
                  {brand.paragraphs.map((para, i) => (
                    <p className="eo-brand-copy" key={i}>
                      {para}
                    </p>
                  ))}
                  {brand.website && (
                    <a
                      className="eo-brand-link"
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit website <span aria-hidden="true">&rarr;</span>
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BusinessOverviewPage;
