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
          COMPANY OVERVIEW
      ========================================== */}

      <section className="bg-[var(--c-warm-white)] py-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="eyebrow ">WHO WE ARE</span>
              <h2 className="display-lg mt-4">
                A Growing Portfolio
                Of Hospitality Brands
              </h2>
              <div className="mt-8 space-y-4 text-base leading-7 text-[var(--c-muted)]">
                <p>
                  <strong className="text-[var(--c-dark)]">
                    Gourmet Gateway 
                  </strong>{" "}
                 is a diversified food and beverage company with a portfolio of brands that cater to evolving consumer tastes and lifestyles. Through innovation, operational excellence, and customer-centric experiences, we create destinations where people connect over great food and memorable moments.
                </p>
                <p>
                  Our portfolio spans café chains,
                  Pan Asian dining concepts,
                  Indian food QSR businesses
                  and premium patisserie experiences.
                </p>
               
                <p>
                  Our portfolio includes
                  Barista Coffee, Kylin,
                  Café Meular and Drizzle & Dust,
                  each delivering a unique culinary identity.
                </p>
              </div>
            </div>

            <div className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1600"
                alt="Restaurant"
                className="w-full h-[550px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          MISSION & VISION
      ========================================== */}

      <section className="bg-[var(--c-cream)] py-20">
        <div className="container-custom">
          <div className="text-center">
            <span className="eyebrow">OUR PURPOSE</span>
            <h2 className="display-lg mt-4">Mission & Vision</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mt-12">
            {/* Mission */}
            <div className="bg-white p-8 border border-[var(--c-border)]">
              <span className="eyebrow">OUR MISSION</span>
              <h3 className="display-md mt-4">
                Enrich Lives Through
                Extraordinary Dining
              </h3>
              <p className="mt-6 text-base leading-7 text-[var(--c-muted)]">
                We are committed to maintaining
                the highest standards of quality,
                innovation and customer satisfaction
                across all our brands.
              </p>
              <p className="mt-4 text-base leading-7 text-[var(--c-muted)]">
                Our passionate teams work tirelessly
                to create memorable experiences,
                ensuring every guest interaction
                becomes a moment worth remembering.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[var(--c-obsidian)] p-8 text-white">
              <span className="eyebrow">OUR VISION</span>
              <h3 className="display-md mt-4">
                A Beacon Of
                Culinary Excellence
              </h3>
              <p className="mt-6 text-base leading-7 text-white/70">
                We envision Gourmet Gateway India Limited
                as a leader in hospitality,
                recognized for diverse offerings
                and an unwavering commitment to quality.
              </p>
              <p className="mt-4 text-base leading-7 text-white/70">
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