'use client';
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="bg-[var(--c-cream)] py-20">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT — Image Stack */}
          <div className="relative">
            {/* EST. 2000 Badge */}
            <div
              className="absolute top-6 left-6 z-10 px-4 py-2"
              style={{
                background: "var(--c-gold)",
                color: "white",
                fontSize: "11px",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              EST. 2000
            </div>

            {/* Main Image */}
            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1600"
              alt="Restaurant"
              className="w-full object-cover"
              style={{ height: "580px" }}
            />

            {/* Overlapping smaller image */}
            <div
              className="absolute overflow-hidden"
              style={{
                width: "55%",
                height: "220px",
                bottom: "-40px",
                right: "-24px",
                border: "6px solid var(--c-cream)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=800"
                alt="Food"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT — Content */}
          <div className="lg:pl-8">
            
            {/* Section Label - Our Story */}
            <div className="section-label mb-4">
              <span className="eyebrow">Our Story</span>
              <span className="divider"></span>
            </div>

            {/* Heading */}
            <h2
              className="text-[var(--c-dark)]"
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(2.4rem, 4vw, 3.8rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              Two Decades of
              <br />
              <em style={{ color: "var(--c-gold)", fontStyle: "italic" }}>
                Culinary Excellence
              </em>
            </h2>

            {/* Description */}
            <p
              className="text-[var(--c-muted)] mb-6"
              style={{ fontSize: "1rem", lineHeight: 1.7 }}
            >
              Gourmet Gateway India Limited is a leading food & beverage
              conglomerate with presence across India, Sri Lanka, and
              Maldives — dedicated to bringing diverse, high-quality dining
              experiences to every guest, every day.
            </p>

            {/* Quote Block */}
            <blockquote
              style={{
                background: "var(--c-cream-dark)",
                borderLeft: "3px solid var(--c-gold)",
                padding: "1.25rem 1.5rem",
                marginBottom: "1.5rem",
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: "1rem",
                color: "var(--c-dark)",
                lineHeight: 1.6,
              }}
            >
              "Our mission is to enrich lives through extraordinary dining
              experiences — maintaining the highest standards of quality,
              innovation, and satisfaction across all our brands."
            </blockquote>

            {/* Feature Cards with Button */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  letter: "Q",
                  title: "Quality",
                  desc: "Uncompromised in ingredients, preparation, and service",
                },
                {
                  letter: "I",
                  title: "Innovation",
                  desc: "Constantly elevating to exceed customer expectations",
                },
                {
                  letter: "C",
                  title: "Customer First",
                  desc: "Our guests are at the heart of everything we do",
                },
                {
                  letter: "I",
                  title: "Integrity",
                  desc: "Transparency and trust with all stakeholders",
                }
              ].map((card) => (
                <div
                  key={card.title}
                  className="flex gap-3 items-start"
                  style={{
                    border: "1px solid var(--c-border)",
                    padding: "1rem",
                    background: "white",
                  }}
                >
                  <div
                    style={{
                      width: "28px",
                      height: "28px",
                      border: "1px solid var(--c-gold)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "10px",
                      color: "var(--c-gold)",
                      flexShrink: 0,
                      fontWeight: 500,
                      letterSpacing: "0.1em",
                    }}
                  >
                    {card.letter}
                  </div>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.85rem", marginBottom: "0.25rem", color: "var(--c-dark)" }}>
                      {card.title}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "var(--c-muted)", lineHeight: 1.4 }}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
              
              {/* Discover Our Brands Button - spanning both columns */}
              <div className="col-span-2 mt-2">
                <Link
                  href="/brands"
                  className="btn btn-outline-dark w-full text-center justify-center"
                  style={{
                    display: "inline-flex",
                    padding: "14px 32px",
                    fontSize: "10px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    border: "0.1px solid var(--c-dark)",
                    color: "var(--c-dark)",
                    background: "transparent",
                    transition: "all 0.3s ease",
                  }}
                >
                  Discover Our Brands
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}