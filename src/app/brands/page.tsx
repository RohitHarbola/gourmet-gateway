import Link from "next/link";

const brands = [
  {
    name: "Barista Coffee",
    slug: "barista",
    category: "Cafe Chain",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1600",
    description:
      "One of India's most recognised café brands, delivering premium coffee experiences, handcrafted beverages and welcoming spaces.",
  },
  {
    name: "Kylin",
    slug: "kylin",
    category: "Pan Asian Dining",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600",
    description:
      "Contemporary Asian dining inspired by authentic flavours, sophisticated interiors and culinary innovation.",
  },
  {
    name: "Wanchai",
    slug: "wanchai",
    category: "Asian QSR",
    image:
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600",
    description:
      "Fast, fresh and flavourful Asian cuisine designed for modern lifestyles and contemporary dining preferences.",
  },
  {
    name: "Drizzle & Dust",
    slug: "drizzle-dust",
    category: "Patisserie",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1600",
    description:
      "Premium artisanal desserts, handcrafted pastries and indulgent sweet experiences for every occasion.",
  },
];

export default function BrandsPage() {
  return (
    <>
      {/* ======================================
          HERO
      ====================================== */}

      <section className="relative min-h-[80vh] flex items-center overflow-hidden">

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
            OUR BRANDS
          </span>

          <h1 className="display-xl text-white mt-6 max-w-5xl">
            A Portfolio Of
            Distinct Culinary
            Experiences
          </h1>

          <p className="mt-10 text-white/80 text-xl max-w-3xl leading-9">
            Gourmet Gateway India Limited operates a diverse
            collection of hospitality brands across cafés,
            restaurants, quick service concepts and premium
            patisserie experiences.
          </p>

        </div>

      </section>

      {/* ======================================
          INTRODUCTION
      ====================================== */}

      <section className="section-padding bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="max-w-4xl">

            <span className="eyebrow">
              PORTFOLIO OVERVIEW
            </span>

            <h2 className="display-lg mt-6">
              Creating Experiences
              Beyond Dining
            </h2>

            <p className="mt-8 text-lg leading-9 text-[var(--c-muted)]">
              Our brands serve diverse consumer preferences,
              from premium coffee culture and pan-Asian dining
              to contemporary quick service concepts and
              artisanal desserts.
            </p>

          </div>

        </div>

      </section>

      {/* ======================================
          BRANDS GRID
      ====================================== */}

      <section className="pb-32 bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-8">

            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group relative overflow-hidden h-[650px] brand-card"
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-500" />

                <div className="absolute inset-0 p-10 flex flex-col justify-end">

                  <span className="eyebrow text-white">
                    {brand.category}
                  </span>

                  <h3 className="font-serif text-white text-5xl mt-3">
                    {brand.name}
                  </h3>

                  <p
                    className="
                      mt-5
                      text-white/80
                      max-w-md
                      opacity-0
                      translate-y-5
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    {brand.description}
                  </p>

                  <span
                    className="
                      mt-6
                      text-[var(--c-gold-pale)]
                      uppercase
                      tracking-[0.2em]
                      text-sm
                    "
                  >
                    Explore Brand →
                  </span>

                </div>

              </Link>
            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          PORTFOLIO STATS
      ====================================== */}

      <section className="bg-[var(--c-obsidian)] text-white section-padding">

        <div className="container-custom">

          <div className="grid md:grid-cols-4">

            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">
                4+
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
                Brands
              </p>
            </div>

            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">
                200+
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
                Locations
              </p>
            </div>

            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">
                3
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
                Countries
              </p>
            </div>

            <div className="stat-card p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">
                24+
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
                Years
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* ======================================
          CTA
      ====================================== */}

      <section className="section-padding bg-[var(--c-cream)]">

        <div className="container-custom text-center">

          <span className="eyebrow">
            DISCOVER MORE
          </span>

          <h2 className="display-lg mt-6">
            Ready To Experience
            Our Hospitality Brands?
          </h2>

          <p className="mt-8 text-lg text-[var(--c-muted)] max-w-2xl mx-auto">
            Explore our portfolio and discover how Gourmet
            Gateway continues to redefine hospitality and
            dining experiences across markets.
          </p>

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              mt-12
              bg-[var(--c-gold)]
              text-white
              px-10
              py-5
              uppercase
              tracking-[0.2em]
              text-sm
              hover:-translate-y-1
              transition-all
            "
          >
            Contact Us →
          </Link>

        </div>

      </section>
    </>
  );
}