const countries = [
  {
    name: "India",
    outlets: "180+",
    description:
      "Our largest market with cafés, restaurants and premium dining concepts across major cities.",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1600",
  },
  {
    name: "Sri Lanka",
    outlets: "15+",
    description:
      "Expanding premium hospitality experiences through strategic locations and partnerships.",
    image:
      "https://images.unsplash.com/photo-1586500036706-41963de24d8b?q=80&w=1600",
  },
  {
    name: "Maldives",
    outlets: "5+",
    description:
      "Luxury hospitality offerings designed for world-class tourism destinations.",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=1600",
  },
];

export default function GeographicPresence() {
  return (
    <section className="bg-[#111009] section-padding">
      <div className="container-custom">

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="eyebrow">
            GLOBAL PRESENCE
          </span>

          <h2 className="display-md mt-6 text-white">
            Building Experiences
            <br />
            Across Markets
          </h2>

          <p className="mt-6 text-lg text-white/60">
            With a growing footprint across India, Sri Lanka
            and Maldives, Gourmet Gateway continues to deliver
            premium food and beverage experiences.
          </p>

        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8">

          {countries.map((country) => (
            <div
              key={country.name}
              className="presence-card group relative overflow-hidden h-[600px] cursor-pointer"
            >
              <img
                src={country.image}
                alt={country.name}
                className="
                  w-full
                  h-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/95
                  via-black/40
                  to-transparent
                "
              />

              <div className="absolute inset-0 p-10 flex flex-col justify-end">

                <span className="text-[#B8965A] uppercase tracking-[0.25em] text-xs">
                  Presence
                </span>

                <h3 className="text-white font-serif text-5xl mt-3">
                  {country.name}
                </h3>

                <div className="mt-5 flex items-center gap-4">
                  <span className="text-[#B8965A] text-4xl font-serif">
                    {country.outlets}
                  </span>

                  <span className="text-white/60 uppercase text-xs tracking-[0.2em]">
                    Locations
                  </span>
                </div>

                <p
                  className="
                    mt-5
                    text-white/75
                    leading-7
                    opacity-0
                    translate-y-5
                    transition-all
                    duration-500
                    group-hover:opacity-100
                    group-hover:translate-y-0
                  "
                >
                  {country.description}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}