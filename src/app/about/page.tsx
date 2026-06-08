import Link from "next/link";

const brands = [
  {
    name: "Barista Coffee",
    category: "Cafe Chain",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1200",
  },
  {
    name: "Kylin",
    category: "Pan Asian Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200",
  },
  {
    name: "Wanchai",
    category: "Asian QSR",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200",
  },
  {
    name: "Drizzle & Dust",
    category: "Patisserie",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1200",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ==========================================
          HERO SECTION
      ========================================== */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2000')",
          }}
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 container-custom">

          <span className="eyebrow text-[var(--c-gold)]">
            ABOUT GOURMET GATEWAY
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            Bringing Exceptional
            <br />
            Dining Experiences
            <br />
            Across Markets
          </h1>

          <p className="text-white/80 text-xl max-w-3xl mt-10 leading-9">
            Leading food and beverage brands across
            India, Sri Lanka and Maldives,
            delivering premium culinary experiences
            through innovation, quality and service excellence.
          </p>

        </div>

      </section>

      {/* ==========================================
          COMPANY OVERVIEW
      ========================================== */}

      <section className="section-padding bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>

              <span className="eyebrow">
                WHO WE ARE
              </span>

              <h2 className="display-lg mt-6">
                A Growing Portfolio
                Of Hospitality Brands
              </h2>

              <div className="mt-10 space-y-6 text-lg leading-9 text-[var(--c-muted)]">

                <p>
                  <strong className="text-[var(--c-dark)]">
                    Gourmet Gateway India Limited
                  </strong>{" "}
                  is a leading food and beverage company with
                  presence across India, Sri Lanka and Maldives.
                </p>

                <p>
                  Our portfolio spans café chains,
                  Pan Asian dining concepts,
                  Indian food QSR businesses
                  and premium patisserie experiences.
                </p>

                <p>
                  Through innovation, quality and
                  operational excellence, we continue
                  to create memorable dining experiences
                  for customers across multiple markets.
                </p>

                <p>
                  Our portfolio includes
                  Barista Coffee, Kylin,
                  Wanchai and Drizzle & Dust,
                  each delivering a unique culinary identity.
                </p>

              </div>

            </div>

            <div className="relative overflow-hidden">

              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600"
                alt="Restaurant"
                className="w-full h-[650px] object-cover"
              />

            </div>

          </div>

        </div>

      </section>

      {/* ==========================================
          MISSION & VISION
      ========================================== */}

      <section className="section-padding bg-[var(--c-cream)]">

        <div className="container-custom">

          <div className="text-center">

            <span className="eyebrow">
              OUR PURPOSE
            </span>

            <h2 className="display-lg mt-6">
              Mission & Vision
            </h2>

          </div>

          <div className="grid lg:grid-cols-2 gap-10 mt-20">

            {/* Mission */}

            <div className="bg-white p-12 border border-[var(--c-border)]">

              <span className="eyebrow">
                OUR MISSION
              </span>

              <h3 className="display-md mt-6">
                Enrich Lives Through
                Extraordinary Dining
              </h3>

              <p className="mt-8 text-lg leading-9 text-[var(--c-muted)]">
                We are committed to maintaining
                the highest standards of quality,
                innovation and customer satisfaction
                across all our brands.
              </p>

              <p className="mt-6 text-lg leading-9 text-[var(--c-muted)]">
                Our passionate teams work tirelessly
                to create memorable experiences,
                ensuring every guest interaction
                becomes a moment worth remembering.
              </p>

            </div>

            {/* Vision */}

            <div className="bg-[var(--c-obsidian)] p-12 text-white">

              <span className="eyebrow">
                OUR VISION
              </span>

              <h3 className="display-md mt-6">
                A Beacon Of
                Culinary Excellence
              </h3>

              <p className="mt-8 text-lg leading-9 text-white/70">
                We envision Gourmet Gateway India Limited
                as a leader in hospitality,
                recognized for diverse offerings
                and an unwavering commitment to quality.
              </p>

              <p className="mt-6 text-lg leading-9 text-white/70">
                As we continue to grow,
                we aim to expand our reach,
                bringing exceptional hospitality brands
                to new locations and customers worldwide.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* NEXT:
          Brand Portfolio
          Global Presence
          Statistics
          CTA
      */}
    </>
  );
}