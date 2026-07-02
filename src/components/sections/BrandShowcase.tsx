// components/BrandShowcase.tsx
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
      "assets/Kylin.png",
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

export default function BrandShowcase() {
  return (
    <section className="section-padding bg-[var(--c-cream)] reveal"  id="brands">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow">OUR BRANDS</span>
          <h2 className="display-md mt-6">
            A Portfolio Of
            <br />
            Distinct Culinary
            <br />
            Experiences
          </h2>
          <p className="mt-6 text-lg text-[var(--c-muted)]">
            From premium cafés to contemporary dining concepts,
            our portfolio delivers memorable experiences across
            multiple food and beverage categories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {brands.map((brand) => {
            const Content = (
              <div className="group block cursor-pointer">
                <div className="relative overflow-hidden h-[550px]">
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="
                      w-full
                      h-full
                      object-cover
                      transition-transform
                      duration-700
                      group-hover:scale-110
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-all duration-500 group-hover:from-black/95" />

                  <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-8 transition-all duration-500 group-hover:translate-y-0">
                    <p className="uppercase tracking-[0.25em] text-xs text-[#B8965A]">
                      {brand.category}
                    </p>

                    <h3 className="mt-3 text-white text-5xl font-serif">
                      {brand.name}
                    </h3>

                    <p className="mt-4 max-w-md text-white/80 leading-7 opacity-0 transition-all duration-500 group-hover:opacity-100">
                      {brand.description}
                    </p>

                    <div className="mt-4 w-0 h-[2px] bg-[#B8965A] transition-all duration-500 group-hover:w-24" />

                    {/* Show "Visit Website" for external links, "Explore Brand" for Wanchai */}
                    {brand.externalLink ? (
                      <span className="inline-block mt-5 text-[#B8965A] uppercase tracking-[0.2em] text-sm opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Visit Website →
                      </span>
                    ) : (
                      <span className="inline-block mt-5 text-[#B8965A] uppercase tracking-[0.2em] text-sm opacity-0 transition-all duration-500 group-hover:opacity-100">
                        Visit →
                      </span>
                    )}
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

            // For internal links (Wanchai), wrap with Next.js Link
            return (
              <Link key={brand.slug} href={brand.website} className="block">
                {Content}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}