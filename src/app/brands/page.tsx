import Link from "next/link";

const brands = [
  {
    name: "Barista Coffee",
    slug: "barista",
    category: "Cafe Chain",
    description:
      "India's pioneering coffeehouse brand offering handcrafted beverages, signature food, and warm spaces where conversations flourish. With decades of heritage, Barista continues to evolve while staying rooted in authentic coffee culture",
    image:
      "assets/Barista.png",
    website: "https://www.barista.co.in/",
    externalLink: true,
  },
  {
    name: "Kylin",
    slug: "kylin",
    category: "Pan Asian Dining",
    description:
      "An elevated Pan-Asian dining destination bringing together authentic flavours and modern culinary artistry. From sushi and dim sum to signature mains, Kylin delivers sophisticated Asian experiences.",
    image:
      "assets/kylin.png",
    website: "https://kylinexperience.com/",
    externalLink: true,
  },
  {
    name: "Café Meular ",
    slug: "Café Meular ",
    category: "Asian QSR",
    description:
      "A heritage café experience designed around artisanal coffee, curated food, and elevated aesthetics. Café Meular celebrates slow moments, meaningful conversations, and thoughtfully crafted indulgence.",
    image:
      "assets/Cafe-Meular.png",
    website: "https://www.instagram.com/cafemeular.barista",
    externalLink: false,
  },
  {
    name: "Drizzle & Dust",
    slug: "drizzle-dust",
    category: "Patisserie",
    description:
      "A destination for handcrafted desserts, artisanal pastries, and celebration cakes that transform everyday moments into memorable occasions through creativity and craftsmanship.",
    image:
      "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1400",
    website: "https://drizzleanddust.in/",
    externalLink: true,
  },
];

export default function BrandsPage() {
  return (
    <>
      <section className="pt-20 pb-12 bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="max-w-4xl">
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

      <section className="pb-20 bg-[var(--c-warm-white)]">

        <div className="container-custom">

          <div className="grid lg:grid-cols-2 gap-8">

            {brands.map((brand) => {
              // Create the content that will be wrapped
              const Content = (
                <div className="group relative overflow-hidden h-[650px] brand-card">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="w-full h-full object-fill"
                  />

                  <div className="absolute inset-0 bg-black/45 group-hover:bg-black/65 transition-all duration-500" />

                  {/* Always-visible bottom block: category + name (+ CTA beside name) */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 pb-6">
                    <span className="eyebrow text-white">
                      {brand.category}
                    </span>

                    <div className="mt-3 flex items-end justify-between gap-4">
                      <h3 className="font-serif text-white text-5xl">
                        {brand.name}
                      </h3>

                      <span
                        className="
                          inline-block
                          shrink-0
                          whitespace-nowrap
                          text-[var(--c-gold-pale)]
                          uppercase
                          tracking-[0.2em]
                          text-sm
                        "
                      >
                        {brand.externalLink ? "Visit Website →" : "Explore Brand →"}
                      </span>
                    </div>
                  </div>

                  {/* Hover-reveal block: description */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 pt-0 translate-y-5 transition-all duration-500 group-hover:translate-y-0">
                    <div className="pt-[148px]">
                      <p
                        className="
                          text-white/80
                          max-w-md
                          opacity-0
                          group-hover:opacity-100
                          transition-all
                          duration-500
                        "
                      >
                        {/* {brand.description} */}
                      </p>
                    </div>
                  </div>

                </div>
              );

              // For external links, wrap with <a> tag
              if (brand.externalLink) {
                return (
                  <a
                    key={brand.slug}
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {Content}
                  </a>
                );
              }

              // For internal links (Café Meular), wrap with Next.js Link
              return (
                <Link key={brand.slug} href={brand.website} className="block">
                  {Content}
                </Link>
              );
            })}

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
                5+
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
               Iconic Brands
              </p>
            </div>
            

            <div className="stat-card border-r border-white/10 p-10 text-center">
              <div className="display-md text-[var(--c-gold)]">
                170+
              </div>
              <p className="mt-3 uppercase tracking-[0.2em] text-sm">
                Cities
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
                26+
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
           Become a Franchise Partner
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
